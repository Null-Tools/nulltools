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
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined,
    })
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    )
  }
}