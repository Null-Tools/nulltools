'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from '@/types/auth'

interface AuthContextType {
  user: User | null
  login: (userData: User) => void
  logout: () => Promise<void>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include', // Include cookies
          cache: 'no-store', // Don't cache
        })
        if (response.ok) {
          const contentType = response.headers.get('content-type')
          if (contentType && contentType.includes('application/json')) {
            try {
              const data = await response.json()
              if (!isMounted) return
              
              // Handle both encrypted and non-encrypted responses
              if (data.success && data.user) {
                setUser(data.user)
              } else if (data.user) {
                // Fallback for non-encrypted responses
                setUser(data.user)
              }
            } catch (jsonError) {
              console.error('Failed to parse JSON response:', jsonError)
            }
          }
        } else if (response.status === 401) {
          // Not authenticated, only clear if we're sure (not during initial load)
          if (isMounted) {
            // Don't clear immediately - wait a bit in case cookies are still being set
            setTimeout(() => {
              if (isMounted) {
                setUser(null)
              }
            }, 1000)
          }
        }
      } catch (error) {
        // Silently fail if endpoint doesn't exist or network error
        console.debug('Auth endpoint not available:', error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    // Small delay on initial load to allow cookies to be set after redirect
    const initialDelay = setTimeout(() => {
      fetchUser()
    }, 100)

    // Refresh user data periodically to keep session alive
    const interval = setInterval(() => {
      fetchUser()
    }, 5 * 60 * 1000) // Every 5 minutes

    return () => {
      isMounted = false
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
  }, [])

  const login = (userData: User) => {
    setUser(userData)
  }

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
    } catch (error) {
      console.error('Failed to logout:', error)
    } finally {
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthState() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within an AuthProvider')
  }
  return context
}