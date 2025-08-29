'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ExternalLink, Github, Mail, X } from 'lucide-react'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#workflow', label: 'How it Works' },
  { href: '/about', label: 'About' },
  { href: '/support', label: 'Support' },
];

export function Navigation() {
  return (
    <motion.nav 
      className="fixed top-6 left-0 right-0 w-full z-50 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto bg-card/90 backdrop-blur-xl border border-border rounded-2xl py-4 px-8 flex items-center justify-between shadow-lg">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="flex items-center gap-4">
            <div className="relative">
              <Image
                src="/nulltoolsicon.png"
                alt="Null Tools"
                width={48}
                height={48}
                className="rounded-xl border-2 border-border/50 shadow-md brightness-0 invert"
              />
            </div>
            <span className="text-2xl font-nothing text-text-primary tracking-widest uppercase hidden sm:block">
              NULL TOOLS
            </span>
          </Link>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-2">
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
                className="bg-card/50 hover:bg-card border border-border hover:border-text-secondary/50 text-text-secondary hover:text-text-primary transition-all duration-200 px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://github.com/Null-Tools"
              className="bg-card/50 hover:bg-card border border-border hover:border-text-secondary/50 text-text-secondary hover:text-text-primary transition-all duration-200 p-3 rounded-xl shadow-sm flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://x.com/NullToolsXYZ"
              className="bg-card/50 hover:bg-card border border-border hover:border-text-secondary/50 text-text-secondary hover:text-text-primary transition-all duration-200 p-3 rounded-xl shadow-sm flex items-center justify-center"
              aria-label="X"
            >
              <X size={20} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="mailto:contact@nulltools.xyz"
              className="bg-card/50 hover:bg-card border border-border hover:border-text-secondary/50 text-text-secondary hover:text-text-primary transition-all duration-200 p-3 rounded-xl shadow-sm flex items-center justify-center"
              aria-label="Contact"
            >
              <Mail size={20} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://nulldrop.xyz">
              <Button className="bg-white text-black hover:bg-gray-100 border-2 border-white rounded-xl px-6 py-2.5 text-sm font-semibold shadow-lg">
                Get Started
              </Button>
            </Link>
          </motion.div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-card/50 hover:bg-card border border-border p-3 rounded-xl">
                    <Menu size={20} />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-border">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-border">
                    <Image
                      src="/nulltoolsicon.png"
                      alt="Null Tools"
                      width={56}
                      height={56}
                      className="rounded-xl border-2 border-border/50 shadow-md brightness-0 invert"
                    />
                    <span className="text-2xl font-nothing text-text-primary tracking-widest uppercase">
                      NULL TOOLS
                    </span>
                  </div>

                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-text-secondary hover:text-text-primary transition-colors py-2 px-4 rounded-xl hover:bg-border/30 flex items-center gap-3"
                      >
                        {link.label}
                        <ExternalLink size={16} className="opacity-50" />
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-4">
                      <Link
                        href="https://github.com/Null-Tools"
                        className="text-text-secondary hover:text-text-primary transition-colors p-2 rounded-xl hover:bg-border/30"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </Link>
                      <Link
                        href="mailto:contact@nulltools.xyz"
                        className="text-text-secondary hover:text-text-primary transition-colors p-2 rounded-xl hover:bg-border/30"
                        aria-label="Contact"
                      >
                        <Mail size={20} />
                      </Link>
                    </div>
                  </div>

                  <Link href="https://nulldrop.xyz">
                    <Button className="w-full bg-white text-black hover:bg-gray-100 border-2 border-white rounded-xl py-3 text-base font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}