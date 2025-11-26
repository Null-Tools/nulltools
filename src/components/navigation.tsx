'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu, ExternalLink, Github, Mail, X, User, LogOut, Settings, Key } from 'lucide-react'
import { DiscordIcon } from './icons/pack'
import { motion } from 'framer-motion'
import { AuthModal } from '@/components/auth-modal'
import { useAuthState } from '@/hooks/use-auth'
import { usePrivacy } from '@/app/contexts/privacy-context'

const navLinks = [
  { href: '/support', label: 'Support' },
];

export function Navigation() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  const { user, login, logout, isLoading } = useAuthState()
  const { blurEmail, blurName, hidePersonalInfo } = usePrivacy()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleAuthSuccess = async (userData: any) => {
    login(userData)
    setIsAuthModalOpen(false)
    // Wait a bit longer to ensure cookies are set, then redirect
    // Using window.location ensures full page reload with fresh cookies
    setTimeout(() => {
      window.location.href = '/dashboard'
    }, 500)
  }

  const handleLogout = async () => {
    await logout()
    setIsUserMenuOpen(false)

    localStorage.clear()

    document.cookie.split(';').forEach(function(c) { 
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });

    if (window.location.pathname === '/') {
      window.location.reload()
    } else {
      window.location.href = '/'
    }
  }

  return (
    <>
      <motion.nav 
        className="fixed top-3 sm:top-6 left-0 right-0 w-full z-50 px-2 sm:px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto bg-card/90 backdrop-blur-xl border border-border rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-6 md:px-8 flex items-center justify-between shadow-lg">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="relative">
                <Image
                  src="/nulltoolsicon.png"
                  alt="Null Tools"
                  width={32}
                  height={32}
                  className="rounded-lg border-2 border-border/50 shadow-md brightness-0 invert sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
              </div>
              <span className="text-base sm:text-xl md:text-2xl font-nothing text-text-primary tracking-widest uppercase">
                NULL TOOLS
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="bg-card/50 hover:bg-card border border-border hover:border-text-secondary/50 text-text-secondary hover:text-text-primary transition-all duration-200 px-3 py-2 rounded-lg text-sm font-medium shadow-sm whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-1.5">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/Null-Tools-Open"
                className="bg-card/50 hover:bg-card border border-border hover:border-text-secondary/50 text-text-secondary hover:text-text-primary transition-all duration-200 p-2 rounded-lg shadow-sm flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://x.com/NullToolsXYZ"
                className="bg-card/50 hover:bg-card border border-border hover:border-text-secondary/50 text-text-secondary hover:text-text-primary transition-all duration-200 p-2 rounded-lg shadow-sm flex items-center justify-center"
                aria-label="X"
              >
                <X size={18} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://discord.gg/7WMZh7jjEB"
                className="bg-card/50 hover:bg-card border border-border hover:border-text-secondary/50 text-text-secondary hover:text-text-primary transition-all duration-200 p-2 rounded-lg shadow-sm flex items-center justify-center"
                aria-label="Discord"
              >
                <DiscordIcon size={18} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="mailto:contact@nulltools.xyz"
                className="bg-card/50 hover:bg-card border border-border hover:border-text-secondary/50 text-text-secondary hover:text-text-primary transition-all duration-200 p-2 rounded-lg shadow-sm flex items-center justify-center"
                aria-label="Contact"
              >
                <Mail size={18} />
              </Link>
            </motion.div>

            {!isLoading && user ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-card/90 border border-border hover:bg-card transition-colors"
                  >
                    <User size={16} className="text-text-secondary" />
                    <span className={`text-text-primary text-sm font-medium ${hidePersonalInfo ? 'filter blur-sm' : ''}`}>
                      {blurName(user.name || user.email.split('@')[0])}
                    </span>
                    {user.isPremium && (
                      <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-0.5 rounded-full font-bold">
                        PRO
                      </span>
                    )}
                  </motion.button>

                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-56 bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-lg py-2"
                    >
                      <div className="px-4 py-2 border-b border-border">
                        <p className={`text-sm font-medium text-text-primary ${hidePersonalInfo ? 'filter blur-sm' : ''}`}>{blurName(user.name || 'User')}</p>
                        <p className={`text-xs text-text-secondary ${hidePersonalInfo ? 'filter blur-sm' : ''}`}>{blurEmail(user.email)}</p>
                      </div>
                      
                      <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-accent transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings size={16} className="mr-2" />
                        Dashboard
                      </Link>
                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                      >
                        <LogOut size={16} className="mr-2" />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={() => setIsAuthModalOpen(true)}
                    className="bg-white text-black hover:bg-gray-100 border-2 border-white rounded-lg px-5 py-2 text-sm font-semibold shadow-lg"
                  >
                    Get Started
                  </Button>
                </motion.div>
              )
            }
          </div>

          <div className="md:hidden">
            {isMounted ? (
              <Sheet>
                <SheetTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black hover:bg-gray-100 border-2 border-white p-2.5 rounded-lg shadow-lg transition-all duration-200"
                  >
                    <Menu size={22} strokeWidth={2.5} />
                  </motion.button>
                </SheetTrigger>
                <SheetContent side="right" className="!w-80 !bg-black border-l-2 border-white p-0 overflow-y-auto">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                <div className="relative z-10 flex flex-col space-y-8 mt-6 p-4">
                    <motion.div 
                      className="flex flex-col items-center gap-4 pb-6 border-b border-white/20"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                      >
                        <Image
                          src="/nulltoolsicon.png"
                          alt="Null Tools"
                          width={64}
                          height={64}
                          className="rounded-xl border-2 border-white/30 shadow-xl brightness-0 invert"
                        />
                      </motion.div>
                      <motion.span 
                        className="text-3xl font-nothing text-text-primary tracking-widest uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        NULL TOOLS
                      </motion.span>
                    </motion.div>

                    <motion.div 
                      className="flex flex-col space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            className="text-text-primary hover:text-white transition-all duration-200 py-3 px-6 rounded-lg hover:bg-white/10 flex items-center justify-between group border border-transparent hover:border-white/20"
                          >
                            <span className="font-medium">{link.label}</span>
                            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>

                    {!isLoading && user && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                      >
                        <div className="border-t border-white/20 pt-6">
                          <div className="px-4 py-3 mb-4 rounded-lg bg-white/5 border border-white/10">
                            <p className={`text-sm font-semibold text-text-primary mb-1 ${hidePersonalInfo ? 'filter blur-sm' : ''}`}>{blurName(user.name || 'User')}</p>
                            <p className={`text-xs text-text-secondary ${hidePersonalInfo ? 'filter blur-sm' : ''}`}>{blurEmail(user.email)}</p>
                          </div>
                          <Link
                            href="/dashboard"
                            className="flex items-center px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/10 transition-all duration-200 group"
                          >
                            <Settings size={18} className="mr-3" />
                            <span className="font-medium">Dashboard</span>
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-3 rounded-lg text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 cursor-pointer group mt-2"
                          >
                            <LogOut size={18} className="mr-3" />
                            <span className="font-medium">Sign Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}

                    <motion.div 
                      className="border-t border-white/20 pt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    >
                      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-6 text-center">Connect With Us</p>
                      <div className="flex items-center justify-center gap-3">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.0 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Link
                            href="https://github.com/Null-Tools-Open"
                            className="text-text-secondary hover:text-white transition-all duration-200 p-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 block"
                            aria-label="GitHub"
                          >
                            <Github size={22} />
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Link
                            href="https://x.com/NullToolsXYZ"
                            className="text-text-secondary hover:text-white transition-all duration-200 p-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 block"
                            aria-label="X"
                          >
                            <X size={22} />
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.2 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Link
                            href="https://discord.gg/7WMZh7jjEB"
                            className="text-text-secondary hover:text-white transition-all duration-200 p-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 block"
                            aria-label="Discord"
                          >
                            <DiscordIcon size={22} />
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.3 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Link
                            href="mailto:contact@nulltools.xyz"
                            className="text-text-secondary hover:text-white transition-all duration-200 p-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 block"
                            aria-label="Contact"
                          >
                            <Mail size={22} />
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                </div>
              </SheetContent>
              </Sheet>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black hover:bg-gray-100 border-2 border-white p-2.5 rounded-lg shadow-lg transition-all duration-200"
                disabled
              >
                <Menu size={22} strokeWidth={2.5} />
              </motion.button>
            )}
          </div>
        </div>
      </motion.nav>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  )
}