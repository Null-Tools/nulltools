'use client'

import { motion } from 'framer-motion'

interface AvatarProps {
  name?: string
  email?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Avatar({ name, email, size = 'md', className = '' }: AvatarProps) {
  // Get first letter from name or email
  const getInitial = () => {
    if (name && name.trim()) {
      return name.trim().charAt(0).toUpperCase()
    }
    if (email) {
      return email.charAt(0).toUpperCase()
    }
    return '?'
  }

  // size mappings
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl'
  }

  // color based on initial letter
  const getColorFromLetter = (letter: string) => {
    const colors = [
      'bg-red-500',
      'bg-blue-500', 
      'bg-green-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-cyan-500',
      'bg-orange-500',
      'bg-emerald-500'
    ]
    
    const charCode = letter.charCodeAt(0)
    return colors[charCode % colors.length]
  }

  const initial = getInitial()
  const bgColor = getColorFromLetter(initial)

  return (
    <motion.div
      className={`
        ${sizeClasses[size]} 
        ${bgColor} 
        rounded-full 
        flex 
        items-center 
        justify-center 
        text-white 
        font-nothing 
        font-bold 
        tracking-wider
        shadow-lg
        ${className}
      `}
      style={{ lineHeight: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <span className="flex items-center justify-center w-full h-full">{initial}</span>
    </motion.div>
  )
}