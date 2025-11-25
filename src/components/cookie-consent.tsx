'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CookieIcon } from '@/components/icons/pack'

const CONSENT_KEY = 'cookie_consent'

function getConsent(): 'accepted' | 'rejected' | null {
  if (typeof window === 'undefined') return null
  try {
    const fromStorage = localStorage.getItem(CONSENT_KEY)
    if (fromStorage === 'accepted' || fromStorage === 'rejected') return fromStorage as 'accepted' | 'rejected'
  } catch {}
  try {
    const match = document.cookie.split('; ').find((row) => row.startsWith(`${CONSENT_KEY}=`))
    if (match) {
      const value = match.split('=')[1]
      if (value === 'accepted' || value === 'rejected') return value as 'accepted' | 'rejected'
    }
  } catch {}
  return null
}

function setConsent(value: 'accepted' | 'rejected') {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {}
  try {
    const maxAge = 60 * 60 * 24 * 180 // 180 days
    document.cookie = `${CONSENT_KEY}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax`
  } catch {}
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const existing = getConsent()
    setVisible(existing === null)
  }, [])

  const handleAccept = () => {
    setConsent('accepted')
    setVisible(false)
  }

  const handleReject = () => {
    setConsent('rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="group w-[560px] max-w-[95vw] rounded-2xl border bg-card text-card-foreground shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-white/30">
        <div className="p-4 md:p-5 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
              <CookieIcon size={48} />
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base font-medium text-text-primary">Cookies improve your experience</p>
              <p className="mt-1 text-xs md:text-sm leading-relaxed text-text-secondary">
                We use essential cookies to run Null Tools and optional analytics to improve our services. You can change your choice anytime on the{' '}
                <Link href="/cookies" className="underline underline-offset-4 hover:no-underline hover:text-text-primary transition-colors">cookies page</Link>.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={handleAccept}
                  className="inline-flex h-9 items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 text-sm font-medium transition-all border border-transparent hover:-translate-y-0.5 hover:bg-[#e8e8e8] hover:border-border hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Accept all
                </button>
                <button
                  onClick={handleReject}
                  className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-transparent px-4 text-sm font-medium text-text-primary transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/50 hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                >
                  Only necessary
                </button>
                <Link
                  href="/privacy"
                  className="ml-auto text-xs md:text-sm text-text-secondary underline underline-offset-4 hover:no-underline hover:text-text-primary transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent