'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Users, Upload, Mail, Shield, TrendingUp, Globe } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 0,
    suffix: '',
    label: 'Developers',
    description: 'Trust our platform',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Upload,
    value: 0,
    suffix: '',
    label: 'Files Uploaded',
    description: 'Securely processed',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Mail,
    value: 0,
    suffix: '',
    label: 'Temp Emails',
    description: 'Generated monthly',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    value: 0,
    suffix: '%',
    label: 'Uptime Goal',
    description: 'Target for production',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: TrendingUp,
    value: 0,
    suffix: '%',
    label: 'Faster',
    description: 'Than alternatives',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Globe,
    value: 0,
    suffix: '',
    label: 'Countries',
    description: 'Worldwide coverage',
    color: 'from-teal-500 to-cyan-500'
  }
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest))
      }
    })
    return unsubscribe
  }, [springValue])

  return <span ref={nodeRef}>0</span>
}

export function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-nothing text-text-primary mb-6">
            BUILDING FOR DEVELOPERS
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            We're just getting started on our mission to create better developer tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 text-center relative overflow-hidden group-hover:border-text-secondary/50 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                                      <motion.div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color}/20 mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={24} className="text-text-primary" />
                  </motion.div>

                    <div className="mb-4">
                      <div className="text-4xl md:text-5xl font-nothing text-text-primary mb-2">
                        <AnimatedCounter value={stat.value} />
                        <span>{stat.suffix}</span>
                      </div>
                      <div className="text-xl font-nothing text-text-primary mb-2">
                        {stat.label}
                      </div>
                      <p className="text-text-secondary text-sm">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-4 bg-card/50 border border-border px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {[
                { bg: 'from-blue-500 to-cyan-500', initial: 'A' },
                { bg: 'from-purple-500 to-pink-500', initial: 'B' },
                { bg: 'from-green-500 to-emerald-500', initial: 'C' },
                { bg: 'from-orange-500 to-red-500', initial: 'D' },
                { bg: 'from-yellow-500 to-orange-500', initial: 'E' }
              ].map((avatar, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${avatar.bg} border-2 border-background flex items-center justify-center text-white text-xs font-bold`}
                >
                  {avatar.initial}
                </div>
              ))}
            </div>
            <span className="text-text-secondary text-sm">
              Join thousands of satisfied developers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}