'use client'

import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { Sidebar } from '@/components/sidebar'

import { useAuthState } from '@/hooks/use-auth'


interface AppLayoutProps {
  children: React.ReactNode
  title?: string
}

export function AppLayout({ children, title }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const { user } = useAuthState()

  useEffect(() => {
    try {
      const saved = localStorage.getItem('sidebarCollapsed')
      if (saved !== null) {
        setIsSidebarCollapsed(JSON.parse(saved))
      }
    } catch (error) {
      console.warn('Failed to load sidebar state:', error)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
      <div className="min-h-screen bg-background">

      <div className="fixed top-0 left-0 right-0 h-14 sm:h-16 bg-background/80 backdrop-blur-md border-b border-border z-30 flex items-center justify-between px-3 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

          <button
            onClick={() => {
              const newOpen = !isSidebarOpen
              setIsSidebarOpen(newOpen)
              if (newOpen && isSidebarCollapsed) {
                setIsSidebarCollapsed(false)
                try {
                  localStorage.setItem('sidebarCollapsed', JSON.stringify(false))
                } catch (error) {
                  console.warn('Failed to save sidebar state:', error)
                }
              }
            }}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-card transition-colors"
          >
            <Menu className="text-text-secondary w-5 h-5 sm:w-6 sm:h-6" />
          </button>


          <h1 className="font-nothing text-base sm:text-lg text-text-primary tracking-wider">
            {title || 'NULL TOOLS'}
          </h1>
        </div>


      </div>


      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => {
          const newCollapsed = !isSidebarCollapsed
          setIsSidebarCollapsed(newCollapsed)
          if (newCollapsed) {
            setIsSidebarOpen(false)
          }
          try {
            localStorage.setItem('sidebarCollapsed', JSON.stringify(newCollapsed))
          } catch (error) {
            console.warn('Failed to save sidebar state:', error)
          }
        }}
      />


      <div className="pt-14 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto p-3 sm:p-4"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}