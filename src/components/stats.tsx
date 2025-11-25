'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Users, Upload, Mail, Shield, TrendingUp, Globe } from 'lucide-react'

export function Stats() {
  const [statsData, setStatsData] = useState({
    totalUsers: 0,
    totalFiles: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats/nulldrop', {
          cache: 'no-store',
        })
        const data = await response.json()
        if (data.success && data.data) {
          setStatsData({
            totalUsers: data.data.totalUsers || 0,
            totalFiles: data.data.totalFiles || 0,
          })
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      }
    }
    fetchStats()
  }, [])

  const stats = [
    {
      icon: Users,
      value: statsData.totalUsers,
      suffix: '',
      label: 'Users',
      description: 'Using our services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Upload,
      value: statsData.totalFiles,
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
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:border-white/30 hover:shadow-2xl group overflow-hidden">
                  <div className={`absolute -inset-2 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />
                  <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t ${stat.color} opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-500 rounded-full`} />
                  <motion.div 
                    className={`absolute w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full opacity-25 blur-xl group-hover:opacity-40`}
                    animate={{
                      x: index % 2 === 0 ? [0, 20, -10, 15, 0] : [0, -18, 12, -8, 0],
                      y: index % 3 === 0 ? [0, -15, 10, -5, 0] : index % 3 === 1 ? [0, 12, -8, 18, 0] : [0, -10, 15, -12, 0],
                    }}
                    transition={{
                      duration: 6 + (index % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.7
                    }}
                    style={{ left: '10%', top: '15%' }}
                  />
                  <motion.div 
                    className={`absolute w-20 h-20 bg-gradient-to-tl ${stat.color} rounded-full opacity-20 blur-lg group-hover:opacity-35`}
                    animate={{
                      x: index % 2 === 0 ? [0, -25, 15, -10, 0] : [0, 22, -16, 12, 0],
                      y: index % 3 === 0 ? [0, 20, -12, 8, 0] : index % 3 === 1 ? [0, -18, 14, -9, 0] : [0, 16, -20, 11, 0],
                    }}
                    transition={{
                      duration: 8 + (index % 4),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.9 + 1.5
                    }}
                    style={{ right: '15%', bottom: '20%' }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="p-3 bg-card/30 border border-border/50 rounded-xl">
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-4xl md:text-5xl font-nothing text-white mb-2">
                        <AnimatedCounter value={stat.value} />
                        <span>{stat.suffix}</span>
                      </div>
                      <div className="text-xl font-nothing text-white mb-2 tracking-wider">
                        {stat.label}
                      </div>
                      <p className="text-white/60 text-sm">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}