import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { encryptResponse } from '@/lib/api-crypto'

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser()

    const headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, max-age=30',
      'X-Encrypted': 'true'
    }

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401, headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'private, max-age=30',
        }}
      )
    }

    const encryptedData = encryptResponse({ user })

    return NextResponse.json(
      encryptedData,
      { status: 200, headers }
    )
  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}