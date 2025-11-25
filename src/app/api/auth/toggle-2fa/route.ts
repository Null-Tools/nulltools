import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken, invalidateSessionCache } from '@/lib/auth'
import { db } from '@/lib/db'
import { encryptResponse } from '@/lib/api-crypto'
import speakeasy from 'speakeasy'
import QRCode from 'qrcode'

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const { enable, verificationCode, secret: secretFromClient } = await request.json()

    const user = await db.user.findUnique({
      where: { id: decoded.userId },
      select: { email: true, twoFactorEnabled: true },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    if (enable) {
      if (verificationCode && secretFromClient) {
        const verified = speakeasy.totp.verify({
          secret: secretFromClient,
          encoding: 'base32',
          token: verificationCode,
          window: 2,
        })

        if (!verified) {
          return NextResponse.json({ error: 'Invalid verification code' }, { status: 400 })
        }

        await db.user.update({
          where: { id: decoded.userId },
          data: { 
            twoFactorEnabled: true,
            twoFactorSecret: secretFromClient 
          },
        })

        invalidateSessionCache(token)

        const encryptedData = encryptResponse({ 
          message: '2FA enabled successfully',
          twoFactorEnabled: true 
        })
        return NextResponse.json(encryptedData, {
          headers: { 'X-Encrypted': 'true' }
        })
      } else {
        const generatedSecret = speakeasy.generateSecret({
          name: `Null Tools (${user.email})`,
          issuer: 'Null Tools',
          length: 32,
        })
        const secret = generatedSecret.base32

        const otpauthUrl = speakeasy.otpauthURL({
          secret: secret,
          label: user.email,
          issuer: 'Null Tools',
          encoding: 'base32',
        })

        const qrCodeUrl = await QRCode.toDataURL(otpauthUrl)

        const encryptedData = encryptResponse({
          qrCode: qrCodeUrl,
          secret: secret,
          manualEntryKey: secret,
          message: 'Scan the QR code with your authenticator app',
        })
        return NextResponse.json(encryptedData, {
          headers: { 'X-Encrypted': 'true' }
        })
      }
    } else {
      if (!verificationCode) {
        return NextResponse.json({ 
          error: '2FA verification code is required to disable 2FA',
          requiresVerification: true 
        }, { status: 400 })
      }

      const userWithSecret = await db.user.findUnique({
        where: { id: decoded.userId },
        select: { twoFactorSecret: true, twoFactorEnabled: true },
      })

      if (!userWithSecret || !userWithSecret.twoFactorEnabled || !userWithSecret.twoFactorSecret) {
        return NextResponse.json({ error: '2FA is not enabled' }, { status: 400 })
      }

      const verified = speakeasy.totp.verify({
        secret: userWithSecret.twoFactorSecret,
        encoding: 'base32',
        token: verificationCode,
        window: 2,
      })

      if (!verified) {
        return NextResponse.json({ error: 'Invalid verification code' }, { status: 400 })
      }

      await db.user.update({
        where: { id: decoded.userId },
        data: { 
          twoFactorEnabled: false,
          twoFactorSecret: null,
        },
      })

      invalidateSessionCache(token)

      const encryptedData = encryptResponse({ 
        message: '2FA disabled successfully',
        twoFactorEnabled: false 
      })
      return NextResponse.json(encryptedData, {
        headers: { 'X-Encrypted': 'true' }
      })
    }
  } catch (error) {
    console.error('2FA toggle error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}