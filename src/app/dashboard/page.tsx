'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AppLayout } from '@/components/app-layout'
import { useAuthState } from '@/hooks/use-auth'
import { Loader2 } from 'lucide-react'

export default function Dashboard() {
  const { user, isLoading } = useAuthState()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      const timer = setTimeout(() => {
        if (!user) {
          router.push('/')
        }
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <AppLayout title="Dashboard">
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-text-secondary" />
        </div>
      </AppLayout>
    )
  }

  if (!user) {
    return null
  }

  return (
    <AppLayout title="Dashboard">
      <div className="w-full h-[calc(100vh-200px)]">
        <iframe
          src="https://nulldrop.xyz/share/cmieu5g41001rkqazejcfphwo"
          className="w-full h-full border-0"
          allow="fullscreen"
          title="Null Drop Share"
        />
      </div>
    </AppLayout>
  )
}