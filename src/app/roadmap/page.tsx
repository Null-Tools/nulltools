'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Circle, CircleDot } from 'lucide-react'
import { motion } from 'framer-motion'
import { Footer } from '@/components/footer'

type TaskStatus = 'completed' | 'in-progress' | 'not-started' | 'ready-for-production'

interface Task {
  title: string
  status: TaskStatus
}

interface RoadmapVersion {
  version: string
  title: string
  subtitle: string
  progress: number
  tasks: Task[]
}

export default function Roadmap() {
  const roadmapVersions: RoadmapVersion[] = [
    {
      version: 'v0',
      title: 'Null Drop',
      subtitle: 'From beta to 1.0',
      progress: 33,
      tasks: [
        { title: 'Null Pass Migration', status: 'completed' },
        { title: 'Avatar Migration', status: 'completed' },
        { title: 'Auth Expansion', status: 'not-started' },
        { title: 'Advanced Search', status: 'completed' },
        { title: 'UI Refresh', status: 'not-started' },
        { title: 'Mobile Experience Improvements', status: 'in-progress' },
        { title: 'General Settings Data Shared With Null Pass', status: 'completed' },
        { title: 'Tags', status: 'in-progress' },
        { title: 'More File Previews', status: 'completed' },
        { title: 'Python SDK', status: 'in-progress' },
        { title: 'Encrypt User Ips', status: 'completed' },
        { title: 'C++ SDK', status: 'in-progress' },
        { title: 'C SDK', status: 'not-started' },
        { title: 'Feature Rich, Expanted Documentation', status: 'not-started' },
        { title: 'Folder System', status: 'not-started' },
        { title: 'More Connections', status: 'not-started' },
        { title: 'Global CDN', status: 'not-started' },
        { title: 'Region Specific language support', status: 'not-started' },
        { title: 'Code Refactor', status: 'not-started' }
      ]
    },
    {
      version: 'v1',
      title: 'Null Pass',
      subtitle: 'From beta to acceptable quality',
      progress: 0,
      tasks: [
        { title: 'Beta Site Launch', status: 'completed' },
        { title: 'Express Migration', status: 'not-started' },
        { title: 'Email Password Reset and more email features', status: 'not-started' },
        { title: 'Null Pass Documentation', status: 'not-started' },
        { title: 'Audit Logs', status: 'completed' },
        { title: 'Hardware keys support', status: 'not-started' },
        { title: 'Data Export', status: 'not-started' },
        { title: 'Encrypt User Ips', status: 'in-progress' },
        { title: 'Internal API Refactor', status: 'not-started' },
        { title: 'UI Refresh', status: 'not-started' },
        { title: 'Account Banning Feature', status: 'not-started' },
        { title: 'Service Account Disconnection', status: 'not-started' },
        { title: 'Acount Disabiling Feature', status: 'not-started' },
        { title: 'Null OAuth Button', status: 'not-started' },
        { title: 'Developer Apps', status: 'not-started' },
        { title: 'Developer Apps Documentation', status: 'not-started' },
        { title: 'Code Refactor', status: 'not-started' }
      ]
    },
    {
      version: 'v2',
      title: 'Null Tools',
      subtitle: 'Around tools and services',
      progress: 0,
      tasks: [
        { title: 'Null Pass Migration', status: 'not-started' },
        { title: 'Null Tools Status Page', status: 'not-started' },
        { title: 'Centralized Blog System', status: 'not-started' },
        { title: 'Centralized User Management System', status: 'not-started' },
        { title: 'Centralized Analytics System', status: 'not-started' },
        { title: 'Null Tools Global Documentation', status: 'not-started' },
        { title: 'Landing Page Redesign', status: 'not-started' },
        { title: 'UI Refresh', status: 'not-started' },
        { title: 'UI Centralization', status: 'not-started' },
        { title: 'Code Refactor', status: 'not-started' },
      ]
    },
    {
      version: 'v3',
      title: 'Null Mails',
      subtitle: 'Around emails',
      progress: 0,
      tasks: [
        { title: 'Ideas Gathering', status: 'not-started' },
      ]
    },
    {
      version: 'v4',
      title: 'Null Vault',
      subtitle: 'Secure crypto payment processor',
      progress: 0,
      tasks: [
        { title: 'Ideas Gathering', status: 'not-started' },
      ]
    },
    {
      version: 'v5',
      title: 'Null DB',
      subtitle: 'Serverless database',
      progress: 0,
      tasks: [
        { title: 'Ideas Gathering', status: 'not-started' },
      ]
    },
    {
      version: 'v6',
      title: 'Null Board',
      subtitle: 'Whiteboard app',
      progress: 0,
      tasks: [
        { title: 'Ideas Gathering', status: 'completed' },
        { title: 'Core Tools & Actions', status: 'in-progress' },
        { title: 'Custom Cursor Renderer', status: 'not-started' },
        { title: 'SVG Rendering Engine', status: 'not-started' },
        { title: 'Object System Architecture', status: 'not-started' },
        { title: 'Text in Boxes', status: 'not-started' },
        { title: 'Arrow Snap to Boxes', status: 'not-started' },
        { title: 'Shift + Straight Drawing', status: 'not-started' },
        { title: 'Sticky Notes', status: 'not-started' },
        { title: 'UI Improvements', status: 'not-started' },
        { title: 'Workspaces System', status: 'not-started' },
        { title: 'Movable Workspaces', status: 'not-started' },
        { title: 'Color Picker', status: 'not-started' },
        { title: 'Editor/Color/Mixer Mode', status: 'not-started' },
        { title: 'Themes System', status: 'not-started' },
        { title: 'Workspace Colors', status: 'not-started' },
        { title: 'Font Importer', status: 'not-started' },
        { title: 'Icons Library (Object)', status: 'not-started' },
        { title: 'Smart Trashcan', status: 'not-started' },
        { title: 'Folders Tool', status: 'not-started' },
        { title: 'Snap to Grid', status: 'not-started' },
        { title: 'Snap to Object', status: 'not-started' },
        { title: 'Command Palette', status: 'not-started' },
        { title: 'Layers System', status: 'not-started' },
        { title: 'Rulers & Measurements', status: 'not-started' },
        { title: 'Magnetic Guidelines', status: 'not-started' },
        { title: 'Export with Transparency', status: 'not-started' },
        { title: 'GIF Support', status: 'not-started' },
        { title: 'Right-click Menu Actions', status: 'not-started' },
        { title: 'Video Support', status: 'not-started' },
        { title: 'Auto-align', status: 'not-started' },
        { title: 'Object Lock', status: 'not-started' },
        { title: 'Dotted Lines (Object Style)', status: 'not-started' },
        { title: 'Offline Mode', status: 'not-started' },
        { title: 'Customizable Toolbar', status: 'not-started' },
        { title: 'Branching System', status: 'not-started' },
        { title: 'Canvas Objects (500 Free)', status: 'not-started' },
        { title: 'Data Visualization Object', status: 'not-started' },
        { title: 'Iframe Object', status: 'not-started' },
        { title: 'Stickers Object', status: 'not-started' },
        { title: 'Graphics Tablet Support', status: 'not-started' },
        { title: 'Pen Pressure Sensitivity', status: 'not-started' },
        { title: 'Tilt Support', status: 'not-started' },
        { title: 'Brush Library', status: 'not-started' },
        { title: 'Canvas Context', status: 'not-started' },
        { title: 'Realtime Collab (Free 6 Users)', status: 'not-started' },
        { title: 'Easy Image Import (Drag & Drop - PRO)', status: 'not-started' },
        { title: 'Cloud Storage & Sync (PRO)', status: 'not-started' },
        { title: 'Unlimited Canvas Objects (PRO)', status: 'not-started' },
        { title: 'Realtime Collab Unlimited (PRO)', status: 'not-started' },
        { title: 'Smart Object Recognition (PRO)', status: 'not-started' },
        { title: 'Vectoraize - Image to Vector (PRO)', status: 'not-started' },
        { title: 'OCR - Extract Text from Image (PRO)', status: 'not-started' },
        { title: 'Premium Icons Pack (PRO)', status: 'not-started' },
        { title: 'GPU Acceleration (PRO)', status: 'not-started' },
        { title: 'Templates System (Post 1.0)', status: 'not-started' },
        { title: '3D Object Support (Post 1.0)', status: 'not-started' },
        { title: 'Plugins System (Post 1.0)', status: 'not-started' },
        { title: 'Iframe Support with SDK (Post 1.0)', status: 'not-started' }
      ]
    },
  ]

  const getStatusIcon = (status: TaskStatus) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 size={16} className="text-green-500" />
      case 'in-progress':
        return (
          <div className="relative w-4 h-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full border border-blue-500/50" />
            <div className="relative w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
          </div>
        )
      case 'not-started':
        return <Circle size={16} className="text-text-secondary/50" />
      case 'ready-for-production':
        return (
          <div className="relative w-4 h-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full border border-purple-500/50" />
            <div className="relative w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(168,85,247,0.6)]" />
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="max-w-7xl mx-auto px-4 py-16">
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
            PRODUCT ROADMAP
          </motion.h1>
          <motion.p 
            className="text-text-secondary text-lg mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We're on a mission to build the best developer tools around. Track our progress and see what's coming next!
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span className="text-sm text-text-secondary">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full border border-blue-500/50" />
                <div className="relative w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
              </div>
              <span className="text-sm text-text-secondary">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <Circle size={16} className="text-text-secondary/50" />
              <span className="text-sm text-text-secondary">Not Started</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="relative w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_6px_rgba(168,85,247,0.6)]" />
              </div>
              <span className="text-sm text-text-secondary">Ready for Production</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 roadmap-scrollbar">
          <div className="flex gap-6 min-w-max">
            {roadmapVersions.map((version, versionIndex) => {
              const completedCount = version.tasks.filter(t => t.status === 'completed').length
              const totalCount = version.tasks.length
              const calculatedProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

              return (
                <motion.div
                  key={version.version}
                  className="bg-card/30 border border-border rounded-2xl p-6 min-w-[320px] max-w-[320px] flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: versionIndex * 0.1 }}
                >
                  <div className="mb-6">
                    <h2 className="text-xl font-nothing text-text-primary mb-1 tracking-wide">
                      {version.title}
                    </h2>
                    <p className="text-sm text-text-secondary mb-4">
                      {version.subtitle}
                    </p>
                    
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-text-secondary">Progress</span>
                        <span className="text-text-primary font-medium">{calculatedProgress}%</span>
                      </div>
                      <div className="w-full h-2 bg-background border border-border rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-green-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${calculatedProgress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + (versionIndex * 0.1) }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 roadmap-vertical-scrollbar">
                    {version.tasks.map((task, taskIndex) => (
                      <div
                        key={task.title}
                        className={`flex items-start gap-3 p-3 bg-background/50 border border-border rounded-lg transition-all duration-200 cursor-pointer group ${
                          task.status === 'completed' 
                            ? 'opacity-60' 
                            : 'hover:border-text-secondary/50 hover:bg-background/70'
                        }`}
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          {getStatusIcon(task.status)}
                        </div>
                        <span className={`text-sm transition-colors duration-200 flex-1 ${
                          task.status === 'completed'
                            ? 'text-text-secondary line-through'
                            : 'text-text-primary group-hover:text-white'
                        }`}>
                          {task.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center bg-card/30 border border-border rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-nothing text-text-primary mb-4 tracking-wide">HAVE SUGGESTIONS?</h2>
          <p className="text-text-secondary mb-8">
            We'd love to hear your ideas and feedback. Help shape the future of Null Tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://discord.gg/7WMZh7jjEB"
                target="_blank"
                className="block px-6 py-3 bg-white text-black border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Join Discord
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="mailto:contact@nulltools.xyz"
                target="_blank"
                className="block px-6 py-3 bg-card border border-border rounded-lg text-text-primary hover:border-text-secondary/50 transition-colors font-semibold"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}