'use client'

import { ReactNode } from 'react'
import { PrivacyProvider } from '@/app/contexts/privacy-context'
import { AuthProvider } from '@/hooks/use-auth'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <PrivacyProvider>
        {children}
      </PrivacyProvider>
    </AuthProvider>
  )
}