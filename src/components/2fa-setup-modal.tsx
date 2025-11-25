'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, Check, Smartphone, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp'
import toast from 'react-hot-toast'

interface TwoFASetupModalProps {
  isOpen: boolean
  onClose: () => void
  qrCode?: string
  manualEntryKey?: string
  onVerify: (code: string) => void
  isVerifying: boolean
}

export function TwoFASetupModal({ 
  isOpen, 
  onClose, 
  qrCode, 
  manualEntryKey, 
  onVerify, 
  isVerifying 
}: TwoFASetupModalProps) {
  const [verificationCode, setVerificationCode] = useState('')
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    if (manualEntryKey) {
      await navigator.clipboard.writeText(manualEntryKey)
      setCopied(true)
      toast.success('Secret key copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleVerify = () => {
    if (verificationCode.length === 6) {
      onVerify(verificationCode)
    } else {
      toast.error('Please enter a 6-digit code')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative bg-card border border-border rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield size={24} className="text-primary" />
                </div>
                <h2 className="text-xl font-nothing text-text-primary">Enable 2FA</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-background rounded-lg transition-colors text-text-secondary hover:text-text-primary"
              >
                <X size={20} />
              </button>
            </div>

            {qrCode && (
              <div className="text-center mb-6">
                <div className="p-4 bg-background rounded-xl border border-border mb-4">
                  <img 
                    src={qrCode} 
                    alt="2FA QR Code" 
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                <p className="text-sm text-text-secondary mb-4">
                  Scan this QR code with your authenticator app (Google Authenticator, Authy, etc.)
                </p>

                <div className="bg-background border border-border rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-text-secondary mb-1">Manual entry key:</p>
                      <code className="text-sm font-mono text-text-primary break-all">
                        {manualEntryKey}
                      </code>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="p-2 hover:bg-card rounded-lg transition-colors text-text-secondary hover:text-text-primary"
                    >
                      {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-4 text-center">
                  Enter 6-digit code from your authenticator app:
                </label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={verificationCode}
                    onChange={(value) => setVerificationCode(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                  disabled={isVerifying}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleVerify}
                  disabled={verificationCode.length !== 6 || isVerifying}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  {isVerifying ? 'Verifying...' : 'Verify & Enable'}
                </Button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-card/50 border border-border/50 rounded-lg">
              <div className="flex items-start gap-3">
                <Smartphone size={20} className="text-blue-400 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-text-primary mb-1">
                    Don&apos;t have an authenticator app?
                  </h4>
                  <p className="text-xs text-text-secondary">
                    Download Google Authenticator, Authy, or any TOTP-compatible app from your app store.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}