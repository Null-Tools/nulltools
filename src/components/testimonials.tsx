'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border px-4 py-2 rounded-full text-sm text-text-secondary mb-6">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            Coming Soon
          </div>
          <h2 className="text-4xl md:text-6xl font-nothing text-text-primary mb-6">
            WHAT DEVELOPERS SAY
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            We're still collecting feedback from our amazing developer community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        </div>
      </div>
    </section>
  )
}