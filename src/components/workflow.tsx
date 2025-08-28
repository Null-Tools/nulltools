'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const workflowSteps = [
  {
    icon: "^",
    title: "UPLOAD & SHARE",
    description: "Drag, Drop, Done. Share files with ease.",
    features: ["No configuration headaches", "AES-256 Encryption", "Developer-friendly API"],
    color: "from-blue-500 to-cyan-500",
    number: "01"
  },
  {
    icon: "@",
    title: "TEMPORARY IDENTITY",
    description: "Disposable emails & numbers. Without risk.",
    features: ["Rapid generation", "Real inbox access"],
    color: "from-purple-500 to-pink-500",
    number: "02"
  },
  {
    icon: "$",
    title: "SECURE PAYMENTS",
    description: "Sell anywhere with peace of mind. Secure, fast, and reliable.",
    features: ["Multi-currency support", "Smart fraud detection", "Real-time processing"],
    color: "from-green-500 to-emerald-500",
    number: "03"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
}

export function Workflow() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-card/30 border border-border/50 px-4 py-2 rounded-full text-sm text-text-secondary mb-6 backdrop-blur-sm">
            <Zap size={16} className="text-yellow-400" />
            How it works
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-nothing text-text-primary mb-6 tracking-wider">
            SIMPLE WORKFLOW
          </h2>
          <p className="text-text-secondary text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Three powerful tools working together to accelerate your development workflow
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 relative max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {workflowSteps.map((step, index) => {
            return (
              <div key={index} className="relative group">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.01, 
                    y: -2,
                    transition: { duration: 0.15, ease: "easeOut" }
                  }}
                  className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-150 hover:border-white/20 group overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${step.color} rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-200`} />
                  <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${step.color} rounded-2xl opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-200`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="text-4xl font-nothing text-white">
                        {step.icon}
                      </div>
                      <div className="text-white/30 font-nothing text-sm tracking-widest">
                        {step.number}
                      </div>
                    </div>

                    <h3 className="text-2xl font-nothing text-white mb-4 tracking-wider">
                      {step.title}
                    </h3>
                    
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-white/60"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * featureIndex + 0.3, duration: 0.3 }}
                        >
                          <div className="text-white/40 font-nothing text-xs mt-0.5">•</div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {index < workflowSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-12 transform -translate-y-1/2 z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                  >
                    <motion.div 
                      className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-md relative overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          repeatDelay: 1
                        }}
                      />
                      <ArrowRight size={16} className="text-text-secondary relative z-10" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}