'use client'

import { motion } from 'framer-motion'
import { Upload, Shield } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    id: 'nulldrop',
    title: 'Null drop',
    description: 'Upload, share, and manage your files with ease.',
    icon: Upload,
    iconType: 'lucide',
    colors: 'from-blue-500 to-cyan-500',
    glowPosition: 'top-0 left-0'
  },
  {
    id: 'nullmail',
    title: 'Null mails',
    description: 'Generate temporary email addresses and phone numbers.',
    icon: '/nullmails.png',
    iconType: 'image',
    colors: 'from-purple-500 to-pink-500',
    glowPosition: 'bottom-0 right-0'
  },
  {
    id: 'nullvault',
    title: 'Null vault',
    description: 'Secure and trustworthy payment processing.',
    icon: Shield,
    iconType: 'lucide',
    colors: 'from-green-500 to-emerald-500',
    glowPosition: 'top-0 right-0'
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-nothing text-text-primary mb-6">PRODUCTS</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Everything you need to build, test, and deploy your applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => {
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group relative p-8 rounded-2xl overflow-hidden border border-transparent hover:border-white/10 transition-all duration-300"
              >
                <div className={`absolute ${product.glowPosition} w-32 h-32 bg-gradient-to-br ${product.colors} rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {product.iconType === 'lucide' ? (
                      (() => {
                        const Icon = product.icon as React.ComponentType<{ size: number; className: string }>;
                        return <Icon size={64} className="text-text-primary group-hover:text-white transition-colors duration-300" />;
                      })()
                    ) : (
                      <Image
                        src={product.icon as string}
                        alt={product.title}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-nothing text-text-primary group-hover:text-white transition-colors duration-300 mb-4 tracking-wider">
                    {product.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="inline-block bg-card border border-border px-4 py-2 rounded-full text-sm text-text-secondary group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                    Coming Soon
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