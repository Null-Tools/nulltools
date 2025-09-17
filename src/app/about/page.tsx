'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Footer } from '@/components/footer'

export default function About() {
  const values = [
    {
      icon: "◆",
      title: "Security First",
      description: "Every tool we build prioritizes security and privacy from the ground up.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "✓",
      title: "Developer Focused",
      description: "Built by developers, for developers. Simple, powerful, and reliable.",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: "●",
      title: "Minimal & Effective",
      description: "No bloat, no unnecessary features. Just tools that work.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "▲",
      title: "Community Driven",
      description: "We listen to our community and build what developers actually need.",
      color: "from-orange-500 to-red-500"
    }
  ]

  const timeline = [
    {
      year: "2024 Q1",
      title: "The Beginning",
      description: "Started as a side project to solve temporary mails problem."
    },
    {
      year: "2024 Q2",
      title: "Null Ideas",
      description: "From mails to files, and payments. We're building the future of developer infrastructure."
    },
    {
      year: "2025",
      title: "Set Of Tools",
      description: "Set of tools and serivces based around common problems."
    },
    {
      year: "Now",
      title: "Building The Future",
      description: "Building the complete developer ecosystem with Null Mails, Null Vault and more."
    }
  ]

  const team = [
    {
      name: "!̸I̸m̸p̸u̸l̸s̸e̸",
      role: "Founder & CEO",
      description: "I would say, It's not worth it. (I still tried tho)"
    },
    {
      name: "250cps_",
      role: "Founder",
      description: "I am CPS, 26 years old and my name is franek"
    },
    {
      name: "hax",
      role: "Founder",
      description: "I am black."
    },
    {
      name: "havananana",
      role: "Founder",
      description: "Description is a funny name for this field"
    },
    {
      name: "You!?!?",
      role: "",
      description: ""
    }
  ]

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <motion.h1 
            className="text-4xl md:text-5xl font-nothing text-text-primary mb-4 tracking-wider"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ABOUT US
          </motion.h1>
          <motion.p 
            className="text-text-secondary text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Building the developer tools we always wanted
          </motion.p>
        </motion.div>

        <motion.div 
          className="mb-16 bg-card/30 border border-border rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-3xl font-nothing text-text-primary mb-6 tracking-wide">OUR MISSION</h2>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Provide developers with the essential tools they need to build, test, and deploy applications 
            securely and efficiently. We believe in simplicity, security, and putting developers first.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide text-center">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              return (
                <motion.div 
                  key={value.title} 
                  className="bg-card/30 border border-border rounded-2xl p-6 text-center hover:border-text-secondary/50 transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="w-16 h-16 bg-white border-2 border-border rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:border-text-secondary/50">
                    <span className="text-2xl font-nothing text-black">{value.icon}</span>
                  </div>
                  <h3 className="text-lg font-nothing text-text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-nothing text-text-primary mb-12 tracking-wide text-center">OUR STORY</h2>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year} 
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 border-4 border-background rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-nothing text-white font-bold">{item.year}</span>
                  </motion.div>
                  
                  <div className="bg-card/30 border border-border rounded-2xl p-6 hover:border-text-secondary/50 transition-all">
                    <h3 className="text-lg font-nothing text-text-primary mb-3 tracking-wide">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide text-center">MEET THE TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={member.name} 
                className="bg-card/30 border border-border rounded-2xl p-6 text-center hover:border-text-secondary/50 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-xl font-nothing text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </motion.div>
                <h3 className="text-lg font-nothing text-text-primary mb-2 tracking-wide">{member.name}</h3>
                <p className={`text-xs text-text-secondary font-medium uppercase tracking-wider ${member.description ? 'mb-3' : 'mb-0'}`}>{member.role}</p>
                {member.description && (
                  <p className="text-text-secondary text-xs leading-relaxed">{member.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-nothing text-text-primary mb-8 tracking-wide text-center">BY THE NUMBERS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-nothing text-text-primary mb-2">0+</div>
              <div className="text-sm text-text-secondary">Active Developers</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-nothing text-text-primary mb-2">0+</div>
              <div className="text-sm text-text-secondary">API Calls</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-nothing text-text-primary mb-2">0+</div>
              <div className="text-sm text-text-secondary">Countries</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-3xl md:text-4xl font-nothing text-text-primary mb-2">0%</div>
              <div className="text-sm text-text-secondary">Uptime</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center bg-card/30 border border-border rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">WANT TO LEARN MORE?</h2>
          <p className="text-text-secondary mb-8">
            We'd love to hear from you. Get in touch with any questions or feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/support"
                className="block px-6 py-3 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/careers"
                className="block px-6 py-3 bg-card border border-border rounded-lg text-text-primary hover:border-text-secondary/50 transition-colors font-semibold"
              >
                Join Our Team
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}