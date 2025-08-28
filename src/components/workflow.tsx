'use client'

import { motion } from 'framer-motion'
import { Upload, Mail, Shield, ArrowRight, Zap } from 'lucide-react'

const workflowSteps = [
  {
    icon: Upload,
    title: "UPLOAD & SHARE",
    description: "Drag and drop files instantly. Get secure links in seconds.",
    features: ["Instant upload", "Secure links", "API access"],
    color: "from-blue-500 to-cyan-500",
    number: "01"
  },
  {
    icon: Mail,
    title: "TEMPORARY IDENTITY",
    description: "Generate disposable emails and phone numbers for testing.",
    features: ["Temp emails", "Phone numbers", "Privacy first"],
    color: "from-purple-500 to-pink-500",
    number: "02"
  },
  {
    icon: Shield,
    title: "SECURE PAYMENTS",
    description: "Process payments with enterprise-grade security.",
    features: ["PCI compliant", "Fraud protection", "Real-time"],
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
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="relative bg-card/60 backdrop-blur-md border border-border/50 rounded-3xl p-6 md:p-8 h-full transition-shadow duration-200 hover:shadow-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-background border border-border/50 rounded-2xl flex items-center justify-center font-nothing text-lg font-bold text-text-primary shadow-lg">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg`}>
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-nothing text-text-primary mb-4 tracking-wide">
                      {step.title}
                    </h3>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm text-text-secondary"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * featureIndex + 0.3, duration: 0.3 }}
                        >
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
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
                    <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-md">
                      <ArrowRight size={16} className="text-text-secondary" />
                    </div>
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