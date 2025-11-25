'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, LogOut, Crown, ChevronLeft, Home, Shield, BookOpen, Package } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'
import { useAuthState } from '@/hooks/use-auth'
import { usePathname, useRouter } from 'next/navigation'
import { usePrivacy } from '@/app/contexts/privacy-context'
import Link from 'next/link'
import { useKeybinds } from '@/lib/keybinds'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  isCollapsed: boolean
  onToggleCollapse: () => void
}

export function Sidebar({ isOpen, onClose, isCollapsed, onToggleCollapse }: SidebarProps) {
  const { user, logout } = useAuthState()
  const router = useRouter()
  const pathname = usePathname()
  const { blurEmail, blurName, hidePersonalInfo } = usePrivacy()




  const handleLogout = async () => {
    await logout()
    onClose()
    window.location.href = '/'
  }

  const isFounder = user?.isNullDropTeam && user?.nullDropTeamRole === 'founder'

  const menuItems = useMemo(() => {
    const items = [
      { icon: Home, label: 'Dashboard', href: '/dashboard', shortcut: 'D' },
      { icon: Home, label: 'Back to Home', href: '/', shortcut: 'H' },
      // { icon: Package, label: 'Products', href: '/products', shortcut: 'A' },
      // { icon: Settings, label: 'Settings', href: '/settings', shortcut: 'S' },
    ]

    if (isFounder) {
      // items.push({ icon: Shield, label: 'Manage', href: '/manage', shortcut: 'M' })
    }

    return items
  }, [isFounder])

  const keybinds = useMemo(() => 
    menuItems.map(item => ({
      key: item.shortcut.toLowerCase(),
      description: item.label,
      action: () => {
        router.push(item.href)
        if (isOpen) onClose()
      }
    })),
    [menuItems, router, isOpen, onClose]
  )

  useKeybinds(keybinds, !!user)

  if (!user) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 left-0 h-full w-80 bg-background border-r border-border z-50 flex flex-col"
            initial={{ x: -320 }}
            animate={{ x: isCollapsed ? -320 : 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className={hidePersonalInfo ? 'filter blur-sm' : ''}>
                  <Avatar 
                    name={blurName(user.name || user.email.split('@')[0])} 
                    email={blurEmail(user.email)} 
                    size="lg"
                  />
                </div>
                                <div className="flex-1 min-w-0">
                  <h2 className={`font-nothing text-lg text-text-primary truncate ${hidePersonalInfo ? 'filter blur-sm' : ''}`}>
                    {blurName(user.name || user.email.split('@')[0])}
                  </h2>
                  <p className={`text-sm text-text-secondary truncate ${hidePersonalInfo ? 'filter blur-sm' : ''}`}>
                    {blurEmail(user.email)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Crown size={16} className={
                      user.premiumTierDrop === 'enterprise' ? 'text-purple-400' :
                      user.premiumTierDrop === 'pro' ? 'text-yellow-400' :
                      (user.premiumTierDrop === 'basic' || user.premiumTierDrop === 'pro-lite') ? 'text-blue-400' :
                      'text-gray-400'
                    } />
                    <span className={`text-sm font-bold ${
                      user.premiumTierDrop === 'enterprise' ? 'text-purple-400' :
                      user.premiumTierDrop === 'pro' ? 'text-yellow-400' :
                      (user.premiumTierDrop === 'basic' || user.premiumTierDrop === 'pro-lite') ? 'text-blue-400' :
                      'text-gray-400'
                    }`}>
                      {user.premiumTierDrop === 'pro-lite' ? 'Pro Lite' :
                       user.premiumTierDrop === 'enterprise' ? 'Enterprise' :
                       user.premiumTierDrop === 'pro' ? 'Pro' :
                       user.premiumTierDrop === 'basic' ? 'Basic' :
                       'Free'} Plan
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={onToggleCollapse}
                  className="p-2 rounded-lg hover:bg-card transition-colors text-text-secondary hover:text-text-primary"
                >
                  <ChevronLeft size={18} />
                </button>
              </div>
            </div>

            <div className="flex-1 p-4">
              <div className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group relative ${
                          pathname === item.href 
                            ? 'text-text-primary bg-primary/10 border-l-2 border-primary' 
                            : 'text-text-secondary hover:text-text-primary hover:bg-card'
                        }`}
                        title=""
                      >
                        <Icon size={18} className="group-hover:scale-110 transition-transform" />
                        {(
                          <>
                            <span className="flex-1 font-medium">{item.label}</span>
                            <Kbd className="opacity-50 group-hover:opacity-100 transition-opacity">
                              {item.shortcut}
                            </Kbd>
                          </>
                        )}
                        {pathname === item.href && (
                          <motion.div
                            className="absolute left-0 top-0 w-1 h-full bg-primary rounded-r"
                            layoutId="activeTab"
                            initial={false}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

            </div>

            <div className="p-4 border-t border-border space-y-2">
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start gap-3 text-text-secondary hover:text-text-primary hover:bg-card transition-all duration-200 cursor-pointer group"
              >
                <Link
                  href="https://docs.nulltools.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Documentation</span>
                </Link>
              </Button>
              
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="w-full justify-start gap-3 text-text-secondary hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 cursor-pointer group"
              >
                <LogOut size={18} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Sign Out</span>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}