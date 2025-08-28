'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Mail, ExternalLink, ArrowRight } from 'lucide-react'

export function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Null Drop', href: 'https://nulldrop.xyz', status: 'Beta', enabled: true },
        { name: 'Null Mails', href: 'https://nullmails.xyz', status: 'Soon', enabled: false },
        { name: 'Null Vault', href: 'https://nullvault.xyz', status: 'Soon', enabled: false }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', status: undefined, enabled: true },
        { name: 'Blog', href: '/blog', status: undefined, enabled: false },
        { name: 'Careers', href: '/careers', status: undefined, enabled: false },
        { name: 'Press Kit', href: '/press', status: undefined, enabled: false },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs', status: undefined, enabled: false },
        { name: 'API Reference', href: '/api-ref', status: undefined, enabled: false },
        { name: 'Community', href: '/community', status: undefined, enabled: false },
        { name: 'Support', href: '/support', status: undefined, enabled: true },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy', status: undefined, enabled: true },
        { name: 'Terms of Service', href: '/terms', status: undefined, enabled: true },
        { name: 'Cookie Policy', href: '/cookies', status: undefined, enabled: true },
        { name: 'Security', href: '/security', status: undefined, enabled: true },
      ]
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Null-Tools', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contact@nulltools.xyz', label: 'Email' },
  ]

  return (
    <footer className="bg-background border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <Image
                  src="/nulltoolsicon.png"
                  alt="Null Tools"
                  width={40}
                  height={40}
                  className="rounded-xl border-2 border-border/50 shadow-md brightness-0 invert"
                />
              </div>
              <span className="text-2xl font-nothing text-text-primary tracking-widest uppercase">
                NULL TOOLS
              </span>
            </div>
            <p className="text-text-secondary mb-6 max-w-sm leading-relaxed">
              Minimalist developer tools for secure file management, temporary communications, and payment processing.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-card border border-border rounded-lg hover:border-text-secondary/50 transition-colors group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} className="text-text-secondary group-hover:text-text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-nothing text-text-primary text-sm mb-6 tracking-widest uppercase">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.enabled ? (
                      <Link
                        href={link.href}
                        className="text-text-primary hover:text-white transition-colors text-sm flex items-center gap-2 group"
                      >
                        {link.name}
                        {link.status && (
                          <span className="text-xs bg-card border border-border px-3 py-1 rounded-full text-text-secondary ml-2">
                            {link.status}
                          </span>
                        )}
                        {link.href.startsWith('/') ? (
                          <ArrowRight size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                        ) : (
                          <ExternalLink size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                        )}
                      </Link>
                    ) : (
                      <div className="text-text-secondary/40 text-sm flex items-center gap-2 cursor-not-allowed">
                        {link.name}
                        {link.status && (
                          <span className="text-xs bg-card/30 border border-border/30 px-3 py-1 rounded-full text-text-secondary/40 ml-2">
                            {link.status}
                          </span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="border-t border-border/50 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-nothing text-text-primary text-lg mb-2 tracking-widest uppercase">
                STAY UPDATED
              </h3>
              <p className="text-text-secondary text-sm">
                Get notified when our tools go live and receive developer tips.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-card border border-border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-text-secondary/50 transition-colors"
              />
              <motion.button
                className="px-6 py-2 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-text-secondary">
            <p>&copy; {new Date().getFullYear()} Null Tools. All rights reserved.</p>
            <div className="hidden md:block">
              <iframe 
                src="https://status.nulltools.xyz/badge?theme=dark" 
                width="250" 
                height="30" 
                frameBorder="0" 
                scrolling="no" 
                style={{ colorScheme: 'normal' }}
                className="rounded border-0"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-text-secondary/50">
            <span>Made with ❤️ for developers</span>
            <span>•</span>
            <span>Null Tools</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}