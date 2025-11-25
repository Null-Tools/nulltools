import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://nulldrop.xyz/api/public-stats', {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch stats: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error) {
    console.error('Error fetching Null Drop stats:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch stats',
        data: { totalUsers: 0, totalFiles: 0 }
      },
      { status: 500 }
    )
  }
}