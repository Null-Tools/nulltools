'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { TypingText } from '@/components/ui/typing-text'
import { FloatingDots } from '@/components/ui/floating-dots'
import { ArrowDown, Github, Mail, Key, X, Shield, Users, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showNullPass, setShowNullPass] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const GridBackground = () => (
    <div className="absolute inset-0 z-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
  );

  const typingWords = ['SECURE', 'PRIVATE', 'MINIMAL', 'POWERFUL']

  return (
    <section className="h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
      <GridBackground />
      <FloatingDots count={30} />
      
      <div 
        className="absolute pointer-events-none z-5"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
          borderRadius: '50%',
          transition: 'opacity 0.3s ease-out',
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-nothing tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          NULL TOOLS
        </motion.h1>
        
        <motion.div
          className="text-2xl md:text-4xl font-nothing mb-8 text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-text-primary">DEVELOPER TOOLS.</span>{' '}
          <TypingText 
            words={typingWords}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          />
        </motion.div>
        
        <motion.p 
          className="text-text-secondary mt-4 mb-12 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Your minimalist suite of developer tools. Upload files, generate temporary emails, 
          and process payments with enterprise-grade security and privacy.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="border-2 border-white bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Learn More
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowNullPass(true)}
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-200"
            >
              <Key size={20} className="mr-2" />
              Null Pass
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.a
            href="https://github.com/Null-Tools-Open"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="mailto:contact@nulltools.xyz"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-text-secondary cursor-pointer"
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>

      {showNullPass && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowNullPass(false)}
        >
          <motion.div 
            className="bg-black border-2 border-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center justify-center gap-3 flex-1">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                  <Image 
                    src="/nullpass.png" 
                    alt="Null Pass" 
                    width={64} 
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-nothing text-white">NULL PASS</h2>
              </div>
              <button 
                onClick={() => setShowNullPass(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-nothing text-white mb-3">ONE ACCOUNT. ALL APPS.</h3>
                <p className="text-white/70 leading-relaxed">
                  Null Pass is your unified authentication system across all Null applications. 
                  Create one account and seamlessly access Null Drop, Null Mails, and Null Vault with 
                  security and privacy protection.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <Shield size={20} className="text-green-400 mb-3" />
                  <h4 className="font-nothing text-white text-sm mb-2">PRIVATE</h4>
                  <p className="text-white/60 text-sm">
                    No google accounts, github accounts, or any other third party accounts. Use your email and password.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <Users size={20} className="text-blue-400 mb-3" />
                  <h4 className="font-nothing text-white text-sm mb-2">SECURE</h4>
                  <p className="text-white/60 text-sm">
                    AES-256 encryption and zero-knowledge architecture.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <Globe size={20} className="text-purple-400 mb-3" />
                  <h4 className="font-nothing text-white text-sm mb-2">UNIFIED</h4>
                  <p className="text-white/60 text-sm">
                    Single sign-on across all Null applications.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-nothing text-white mb-4">Offers</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                    <p className="text-white/70 text-xs">Two-factor authentication (2FA)</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                    <p className="text-white/70 text-xs">API key management</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                    <p className="text-white/70 text-xs">Usage analytics dashboard</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                    <p className="text-white/70 text-xs">Team collaboration tools</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}