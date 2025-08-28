'use client'

import { motion } from 'framer-motion'
import { Upload, Mail, Shield } from 'lucide-react'

const products = [
  {
    id: 'nulldrop',
    title: 'Null drop',
    description: 'Upload, share, and manage your files with ease.',
    icon: Upload,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'nullmail',
    title: 'Null mails',
    description: 'Generate temporary email addresses and phone numbers.',
    icon: Mail,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'nullvault',
    title: 'Null vault',
    description: 'Secure and trustworthy payment processing.',
    icon: Shield,
    color: 'from-green-500 to-emerald-500'
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
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${product.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-nothing text-text-primary mb-4 tracking-wider">
                  {product.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="inline-block bg-card border border-border px-4 py-2 rounded-full text-sm text-text-secondary">
                  Coming Soon
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}