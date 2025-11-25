import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'

export async function GET() {
  try {
    const content = 'Null Tools is a collection of developer utilities and tools designed to simplify common development tasks. We provide secure, reliable solutions for file sharing, content management, and more.'

    return NextResponse.json({
      success: true,
      content,
    })
  } catch (error) {
    console.error('Error fetching about content:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch about content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    
    if (!user || !user.isNullDropTeam) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { content } = body

    if (!content || typeof content !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Invalid content' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'About content updated successfully',
    })
  } catch (error) {
    console.error('Error updating about content:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update about content' },
      { status: 500 }
    )
  }
}