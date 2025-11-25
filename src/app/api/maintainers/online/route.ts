import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const now = new Date()
    const bufferTime = 60 * 1000
    const expirationThreshold = new Date(now.getTime() + bufferTime)

    const activeSessions = await db.session.findMany({
      where: {
        expiresAt: {
          gte: expirationThreshold,
        },
        user: {
          isNullDropTeam: true,
        },
      },
      select: {
        userId: true,
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
      distinct: ['userId'],
    })

    const onlineCount = activeSessions.length
    const maintainers = activeSessions.map((session) => ({
      id: session.user.id,
      email: session.user.email,
      name: session.user.name || session.user.email.split('@')[0],
    }))

    return NextResponse.json({
      success: true,
      count: onlineCount,
      maintainers,
    })
  } catch (error) {
    console.error('Error fetching online maintainers:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch online maintainers', count: 0, maintainers: [] },
      { status: 500 }
    )
  }
}