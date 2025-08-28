'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { TypingText } from '@/components/ui/typing-text'
import { FloatingDots } from '@/components/ui/floating-dots'
import { ArrowDown, Github, Mail } from 'lucide-react'

export function Hero() {
  const GridBackground = () => (
    <div className="absolute inset-0 z-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
  );

  const typingWords = ['SECURE', 'PRIVATE', 'MINIMAL', 'POWERFUL']

  return (
    <section className="h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
      <GridBackground />
      <FloatingDots count={30} />
      
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
          className="flex justify-center mb-12"
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
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.a
            href="https://github.com/Null-Tools"
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
    </section>
  )
}