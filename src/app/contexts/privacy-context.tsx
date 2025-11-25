'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface PrivacyContextType {
  hidePersonalInfo: boolean
  setHidePersonalInfo: (hide: boolean) => void
  blurEmail: (email: string) => string
  blurName: (name: string) => string
}

const PrivacyContext = createContext<PrivacyContextType | undefined>(undefined)

export function PrivacyProvider({ children }: { children: ReactNode }) {
  const [hidePersonalInfo, setHidePersonalInfo] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('hidePersonalInfo')
      if (saved !== null) {
        setHidePersonalInfo(JSON.parse(saved))
      }
    } catch (error) {
      console.error('Failed to parse hidePersonalInfo from localStorage:', error)
      localStorage.removeItem('hidePersonalInfo')
    }
  }, [])

  const handleSetHidePersonalInfo = (value: boolean) => {
    setHidePersonalInfo(value)
    localStorage.setItem('hidePersonalInfo', JSON.stringify(value))
  }

  const blurEmail = (email: string) => {
    if (!hidePersonalInfo) return email
    return email
  }

  const blurName = (name: string) => {
    if (!hidePersonalInfo || !name) return name
    return name
  }

  return (
    <PrivacyContext.Provider value={{
      hidePersonalInfo,
      setHidePersonalInfo: handleSetHidePersonalInfo,
      blurEmail,
      blurName
    }}>
      {children}
    </PrivacyContext.Provider>
  )
}

export function usePrivacy() {
  const context = useContext(PrivacyContext)
  if (context === undefined) {
    throw new Error('usePrivacy must be used within a PrivacyProvider')
  }
  return context
}