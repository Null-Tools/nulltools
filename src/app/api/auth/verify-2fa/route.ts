import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken, generateToken } from '@/lib/auth'
import { db } from '@/lib/db'
import speakeasy from 'speakeasy'

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const pending = cookieStore.get('pending-2fa')?.value

    if (!pending) {
      return NextResponse.json({ error: 'No pending 2FA session' }, { status: 401 })
    }

    const decoded = verifyToken(pending)
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid pending token' }, { status: 401 })
    }

    const { verificationCode } = await request.json()

    if (!verificationCode) {
      return NextResponse.json({ error: 'Verification code is required' }, { status: 400 })
    }

    const user = await db.user.findUnique({
      where: { id: decoded.userId },
      select: { twoFactorSecret: true, twoFactorEnabled: true },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    if (!user.twoFactorEnabled || !user.twoFactorSecret) {
      return NextResponse.json({ error: '2FA is not enabled' }, { status: 400 })
    }

    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: verificationCode,
      window: 2,
    })

    if (!verified) {
      return NextResponse.json({ error: 'Invalid verification code' }, { status: 400 })
    }

    const now = new Date()
    const bufferTime = 60 * 1000
    const expirationThreshold = new Date(now.getTime() - bufferTime)
    
    await db.session.deleteMany({
      where: {
        userId: decoded.userId,
        expiresAt: {
          lt: expirationThreshold
        }
      }
    })

    const existingToken = cookieStore.get('auth-token')?.value
    
    let authToken: string | undefined = existingToken
    
    if (authToken) {
      const existingSession = await db.session.findUnique({
        where: { token: authToken },
        select: { expiresAt: true, userId: true }
      })
      
      if (existingSession && 
          existingSession.userId === decoded.userId && 
          existingSession.expiresAt >= new Date()) {
      } else {
        authToken = undefined
      }
    }
    
    if (!authToken) {
      authToken = generateToken({ userId: decoded.userId })
      await db.session.create({
        data: {
          userId: decoded.userId,
          token: authToken,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      })
    }

    const response = NextResponse.json({ 
      message: '2FA verification successful',
      verified: true 
    })

    response.cookies.set('pending-2fa', '', { httpOnly: true, maxAge: 0, path: '/' })
    response.cookies.set('auth-token', authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    })

    return response
  } catch (error) {
    console.error('2FA verification error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}