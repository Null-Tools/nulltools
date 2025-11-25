import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { randomUUID } from 'crypto'
import { db } from './db'
import { User } from '@/types/auth'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

const CACHE_TTL = 60 * 1000
const sessionCache = new Map<string, { data: User; userId: string; expires: number }>()
const userTokensMap = new Map<string, Set<string>>()

setInterval(() => {
  const now = Date.now()
  for (const [key, value] of sessionCache.entries()) {
    if (value.expires < now) {
      sessionCache.delete(key)
      // Clean up user tokens map
      const tokens = userTokensMap.get(value.userId)
      if (tokens) {
        tokens.delete(key)
        if (tokens.size === 0) {
          userTokensMap.delete(value.userId)
        }
      }
    }
  }
}, 5 * 60 * 1000)

// Re-export User type for backward compatibility
export type { User }

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(payload: object): string {
  if (!JWT_SECRET || JWT_SECRET === 'fallback-secret') {
    throw new Error('JWT_SECRET is not configured')
  }
  
  const uniquePayload = {
    ...payload,
    jti: randomUUID(),
    iat: Math.floor(Date.now() / 1000),
  }
  return jwt.sign(uniquePayload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions)
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch {
    return null
  }
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) return null

    const cached = sessionCache.get(token)
    if (cached && cached.expires > Date.now()) {
      return cached.data
    }

    const payload = verifyToken(token)
    if (!payload || !payload.userId) return null

    const session = await db.session.findUnique({
      where: { token },
      select: { 
        expiresAt: true,
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            isPremium: true,
            isPremiumDrop: true,
            premiumTierDrop: true,
            twoFactorEnabled: true,
            customStorageLimit: true,
            customApiKeyLimit: true,
            isNullDropTeam: true,
            nullDropTeamRole: true,
            customDomain: true,
            customDomainVerified: true,
            polarCustomerId: true,
            polarSubscriptionId: true,
            polarSubscriptionStatus: true,
            accessFilesPreview: true,
            accessFilesDownload: true,
          }
        }
      }
    })

    const now = new Date()
    const bufferTime = 60 * 1000
    const expirationCheck = new Date(now.getTime() + bufferTime)
    
    if (!session || session.expiresAt < expirationCheck) {
      if (session) {
        setImmediate(async () => {
          try {
            await db.session.delete({ where: { token } })
          } catch (error) {
            console.error('Failed to delete expired session:', error)
          }
        })
      }
      sessionCache.delete(token)
      return null
    }
    
    const oneDayFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1000)
    if (session.expiresAt < oneDayFromNow) {
      setImmediate(async () => {
        try {
          await db.session.update({
            where: { token },
            data: {
              expiresAt: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
            }
          })
        } catch (error) {
          console.error('Failed to refresh session:', error)
        }
      })
    }

    const userData: User = {
      ...session.user,
      name: session.user.name || undefined,
      customApiKeyLimit: session.user.customApiKeyLimit || undefined,
      customDomain: session.user.customDomain || undefined,
      polarCustomerId: session.user.polarCustomerId || undefined,
      polarSubscriptionId: session.user.polarSubscriptionId || undefined,
      polarSubscriptionStatus: session.user.polarSubscriptionStatus || undefined,
    }

    // Cache the result
    sessionCache.set(token, {
      data: userData,
      userId: session.user.id,
      expires: Date.now() + CACHE_TTL
    })

    // Track token for this user
    if (!userTokensMap.has(session.user.id)) {
      userTokensMap.set(session.user.id, new Set())
    }
    userTokensMap.get(session.user.id)!.add(token)

    return userData
  } catch {
    return null
  }
}

export function invalidateSessionCache(token: string): void {
  const cached = sessionCache.get(token)
  if (cached) {
    // Remove from user tokens map
    const tokens = userTokensMap.get(cached.userId)
    if (tokens) {
      tokens.delete(token)
      if (tokens.size === 0) {
        userTokensMap.delete(cached.userId)
      }
    }
  }
  sessionCache.delete(token)
}

export function invalidateUserSessions(userId: string): void {
  const tokens = userTokensMap.get(userId)
  if (tokens) {
    for (const token of tokens) {
      sessionCache.delete(token)
    }
    userTokensMap.delete(userId)
  }
}

export async function generateApiKey(): Promise<string> {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const randomString = Array.from({ length: 40 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('')
  
  return `nd_${randomString}`
}