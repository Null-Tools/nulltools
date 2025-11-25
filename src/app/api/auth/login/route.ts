import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { db } from '@/lib/db'
import { verifyPassword, generateToken } from '@/lib/auth'

const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
})

export async function POST(request: NextRequest) {
  try {
    const jwtSecret = process.env.JWT_SECRET
    console.log('JWT_SECRET check:', {
      exists: !!jwtSecret,
      length: jwtSecret?.length || 0,
      isFallback: jwtSecret === 'fallback-secret',
      nodeEnv: process.env.NODE_ENV,
    })
    
    if (!jwtSecret || jwtSecret === 'fallback-secret') {
      console.error('JWT_SECRET is not configured')
      console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('JWT') || k.includes('SECRET')))
      return NextResponse.json(
        { 
          error: 'Server configuration error',
          message: 'JWT_SECRET environment variable is missing or invalid. Please set it in Vercel Environment Variables.',
          hint: 'Go to Vercel Dashboard → Settings → Environment Variables → Add JWT_SECRET'
        },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { email, password } = loginSchema.parse(body)

    const user = await db.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
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
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const isValidPassword = await verifyPassword(password, user.password)
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Only team members can login
    if (!user.isNullDropTeam) {
      return NextResponse.json(
        { error: 'Access denied. Only team members can login.' },
        { status: 403 }
      )
    }

    const { password: _, ...userWithoutPassword } = user

    if (user.twoFactorEnabled) {
      const pendingToken = generateToken({ userId: user.id })
      const response = NextResponse.json(
        {
          user: userWithoutPassword,
          requires2FA: true,
          message: '2FA verification required',
        },
        { status: 200 }
      )

      response.cookies.set('pending-2fa', pendingToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 5 * 60,
      })

      return response
    }

    const now = new Date()
    const bufferTime = 60 * 1000
    const expirationThreshold = new Date(now.getTime() - bufferTime)
    
    await db.session.deleteMany({
      where: {
        userId: user.id,
        expiresAt: {
          lt: expirationThreshold
        }
      }
    })

    const cookieStore = await cookies()
    const cookieToken = cookieStore.get('auth-token')?.value
    
    let token: string | undefined
    
    if (cookieToken) {
      const cookieSession = await db.session.findUnique({
        where: { token: cookieToken },
        select: { expiresAt: true, userId: true }
      })
      
      if (cookieSession && 
          cookieSession.userId === user.id && 
          cookieSession.expiresAt >= new Date()) {
        token = cookieToken
      }
    }
    
    if (!token) {
      token = generateToken({ userId: user.id })
      await db.session.create({
        data: {
          userId: user.id,
          token,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      })
    }

    const response = NextResponse.json(
      {
        user: userWithoutPassword,
        message: 'Login successful',
      },
      { status: 200 }
    )

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    })

    return response
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Login error:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined,
    })
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    )
  }
}