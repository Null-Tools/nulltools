'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Mail, Lock, Loader2, AlertCircle, ArrowLeft, ShieldCheck, Target, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (user: any) => void
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [show2FA, setShow2FA] = useState(false)
  const [twoFactorCode, setTwoFactorCode] = useState('')
  const [tempUserData, setTempUserData] = useState<any>(null)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [onlineMaintainers, setOnlineMaintainers] = useState<Array<{ id: string; name: string; email: string }>>([])
  const [onlineCount, setOnlineCount] = useState(0)

  const highlights = [
    {
      title: 'Team-only entry',
      description: 'Authentication limited to verified maintainers',
      icon: ShieldCheck,
    },
    {
      title: 'Mandatory 2FA',
      description: 'Each session is backed by Null Pass',
      icon: Lock,
    },
    {
      title: 'Global coverage',
      description: 'Ops team spans multiple timezones',
      icon: Target,
    },
  ]

  const resetForm = () => {
    setFormData({ email: '', password: '' })
    setShow2FA(false)
    setTwoFactorCode('')
    setTempUserData(null)
    setError('')
  }

  useEffect(() => {
    if (isOpen) {
      resetForm()
      fetchOnlineMaintainers()
    }
    
    // Refresh every 30 seconds
    const interval = setInterval(() => {
      if (isOpen) {
        fetchOnlineMaintainers()
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [isOpen])

  const fetchOnlineMaintainers = async () => {
    try {
      const response = await fetch('/api/maintainers/online', {
        cache: 'no-store',
      })
      const data = await response.json()
      if (data.success) {
        setOnlineMaintainers(data.maintainers.slice(0, 4)) // Max 4 avatars
        setOnlineCount(data.count)
      }
    } catch (error) {
      console.error('Failed to fetch online maintainers:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      if (data.requires2FA) {
        setShow2FA(true)
        setTempUserData(data.user)
        return
      }

      onSuccess(data.user)
      resetForm()
      setTimeout(onClose, 120)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerify2FA = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/verify-2fa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verificationCode: twoFactorCode }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Invalid verification code')
      }

      try {
        await fetch('/api/auth/me', {
          method: 'GET',
          credentials: 'include',
          cache: 'no-store',
          headers: { 'cache-control': 'no-store' },
        })
      } catch {}

      onSuccess(tempUserData)
      resetForm()
      setTimeout(onClose, 120)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Verification failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-card/95 shadow-2xl"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="hidden flex-col gap-10 border-r border-white/10 bg-card/50 p-10 text-white lg:flex">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.55em] text-white/70">Null Tools</p>
                  <h2 className="text-4xl font-nothing leading-tight">For Developers. By Developers.</h2>
                  <p className="text-white/70 leading-relaxed">
                    Access is locked to Null Tools core members. Sessions run through Null Pass, mandatory 2FA, and device-level auditing.
                  </p>
                </div>

                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/10/40 p-4 backdrop-blur cursor-default transition-all duration-150 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/30 hover:shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/12 transition-transform duration-150 group-hover:scale-110 group-hover:rotate-3">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-white/70">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
                  <div className="flex -space-x-3">
                    {onlineMaintainers.length > 0 ? (
                      onlineMaintainers.map((maintainer, index) => (
                        <motion.div 
                          key={maintainer.id} 
                          className="relative group"
                          whileHover={{ scale: 1.15, zIndex: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <motion.div 
                            className="h-9 w-9 rounded-full border-2 border-white/40 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur flex items-center justify-center text-white/90 text-xs font-semibold cursor-pointer relative overflow-hidden group-hover:border-white/60 group-hover:shadow-[0_0_0_3px_rgba(255,255,255,0.2)] transition-all duration-200"
                          >
                            <span className="relative z-10">{maintainer.name.charAt(0).toUpperCase()}</span>
                            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
                          </motion.div>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-card border border-border rounded-lg text-text-primary text-xs shadow-2xl pointer-events-none z-50 backdrop-blur-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 scale-95 group-hover:scale-100 transition-all duration-200 ease-out whitespace-nowrap">
                            {maintainer.name}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-card"></div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-border"></div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      [...Array(Math.min(onlineCount || 0, 4))].map((_, index) => (
                        <div key={index} className="h-9 w-9 rounded-full border-2 border-white/40 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur" />
                      ))
                    )}
                  </div>
                  <span>
                    {onlineCount > 0 ? `${onlineCount} Maintainer${onlineCount !== 1 ? 's' : ''} Online` : 'Maintainers Online'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-8 p-6 sm:p-10">
                <div className={`space-y-4 ${show2FA ? 'text-center' : ''}`}>
                  <p className="text-xs uppercase tracking-[0.55em] text-text-secondary">Restricted Area</p>
                  <h3 className="text-4xl sm:text-5xl font-nothing text-text-primary leading-tight">
                    {show2FA ? 'Two-factor verification' : 'Sign in to Null Tools'}
                  </h3>
                  <p className="text-base text-text-secondary">
                    {show2FA
                      ? 'Enter the 6-digit code from your authenticator app to continue.'
                      : 'Secure portal for Null Tools core contributors.'}
                  </p>
                </div>

                {error && (
                  <div className="flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                <form
                  onSubmit={show2FA ? handleVerify2FA : handleSubmit}
                  className="space-y-6"
                >
                  {show2FA ? (
                    <div className="space-y-6 text-center">
                      <div className="flex justify-center">
                        <InputOTP
                          maxLength={6}
                          value={twoFactorCode}
                          onChange={(value) => setTwoFactorCode(value)}
                          className="gap-3"
                        >
                          <InputOTPGroup className="gap-3">
                            <InputOTPSlot index={0} className="w-14 h-14 text-lg" />
                            <InputOTPSlot index={1} className="w-14 h-14 text-lg" />
                            <InputOTPSlot index={2} className="w-14 h-14 text-lg" />
                          </InputOTPGroup>
                          <InputOTPSeparator className="mx-2" />
                          <InputOTPGroup className="gap-3">
                            <InputOTPSlot index={3} className="w-14 h-14 text-lg" />
                            <InputOTPSlot index={4} className="w-14 h-14 text-lg" />
                            <InputOTPSlot index={5} className="w-14 h-14 text-lg" />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4">
                        <label className="text-lg font-semibold text-text-primary">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                          <Input
                            type="email"
                            placeholder="email@nulltools.xyz"
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            required
                            className="h-14 text-lg pl-14 pr-5 rounded-xl border-2 border-border bg-background transition-all focus-visible:border-text-secondary/50 focus-visible:ring-2 focus-visible:ring-text-secondary/20 hover:border-text-secondary/30"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-lg font-semibold text-text-primary">
                          Password
                        </label>
                        <div className="relative">
                          <Lock size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                            required
                            minLength={8}
                            className="h-14 text-lg pl-14 pr-5 rounded-xl border-2 border-border bg-background transition-all focus-visible:border-text-secondary/50 focus-visible:ring-2 focus-visible:ring-text-secondary/20 hover:border-text-secondary/30"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading || (show2FA ? twoFactorCode.length !== 6 : !formData.email || !formData.password)}
                    className="flex h-12 w-full items-center justify-center gap-2 font-nothing text-base tracking-[0.35em]"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        {show2FA ? 'Verifying' : 'Signing in'}
                      </>
                    ) : (
                      <>
                        {show2FA ? 'Verify code' : 'Access dashboard'}
                        <ArrowRight size={18} />
                      </>
                    )}
                  </Button>
                </form>

                <div className="space-y-4 border-t border-border pt-6 text-center">
                  {show2FA ? (
                    <motion.button
                      type="button"
                      onClick={() => {
                        setShow2FA(false)
                        setTwoFactorCode('')
                        setError('')
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group mx-auto flex cursor-pointer items-center gap-2.5 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-medium text-text-secondary transition-all hover:border-text-secondary/50 hover:bg-card hover:text-text-primary"
                    >
                      <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                      Back to sign in
                    </motion.button>
                  ) : (
                    <p className="text-sm text-text-secondary">Need access? Contact the Null Tools maintainers.</p>
                  )}

                  <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.45em] text-text-secondary">
                    <div className="relative group">
                      <ShieldCheck size={16} className="cursor-help transition-colors hover:text-text-primary" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-3 bg-card border border-border rounded-xl text-text-primary text-sm max-w-xs shadow-2xl pointer-events-none z-50 backdrop-blur-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        <p className="text-xs text-text-secondary leading-relaxed">
                          Secure authentication system for null applications.
                        </p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-card"></div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[7px] border-transparent border-t-border"></div>
                      </div>
                    </div>
                    Protected by Null Pass
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}