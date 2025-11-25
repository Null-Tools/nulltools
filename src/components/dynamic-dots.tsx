'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Dot {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  targetX: number
  targetY: number
  targetSize: number
}

interface DynamicDotsProps {
  count?: number
  className?: string
}

export function DynamicDots({ count = 80, className = '' }: DynamicDotsProps) {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    // Generate initial dots with random positions
    const initialDots = Array.from({ length: count }).map((_, i) => {
      const x = Math.random() * 100
      const y = Math.random() * 100
      const size = Math.random() * 4 + 2
      
      return {
        id: i,
        x,
        y,
        size,
        duration: 4 + Math.random() * 6, // 4-10 seconds
        delay: Math.random() * 2,
        targetX: x,
        targetY: y,
        targetSize: size,
      }
    })
    
    setDots(initialDots)

    // Update target positions periodically
    const interval = setInterval(() => {
      setDots((prevDots) =>
        prevDots.map((dot) => ({
          ...dot,
          targetX: Math.random() * 100,
          targetY: Math.random() * 100,
          targetSize: Math.random() * 4 + 2,
          duration: 4 + Math.random() * 6,
        }))
      )
    }, 8000) // Change targets every 8 seconds

    return () => clearInterval(interval)
  }, [count])

  if (dots.length === 0) {
    return null
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white/40 border border-white/20"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size * 3}px`,
            height: `${dot.size * 3}px`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            left: `${dot.targetX}%`,
            top: `${dot.targetY}%`,
            width: `${dot.targetSize * 3}px`,
            height: `${dot.targetSize * 3}px`,
            opacity: [0.3, 0.6, 0.4, 0.6, 0.3],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Connection lines between nearby dots */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '100%', height: '100%' }}>
        {dots.slice(0, Math.min(30, dots.length)).map((dot) => {
          // Find nearby dots to connect
          const nearbyDots = dots
            .filter((d) => d.id !== dot.id)
            .map((d) => ({
              ...d,
              distance: Math.sqrt(
                Math.pow(dot.x - d.x, 2) + Math.pow(dot.y - d.y, 2)
              ),
            }))
            .filter((d) => d.distance < 15) // Connect dots within 15% distance
            .slice(0, 2) // Connect to max 2 nearby dots

          return nearbyDots.map((nearby) => {
            const x1 = (dot.x / 100) * 100
            const y1 = (dot.y / 100) * 100
            const x2 = (nearby.x / 100) * 100
            const y2 = (nearby.y / 100) * 100
            
            return (
              <motion.line
                key={`${dot.id}-${nearby.id}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            )
          })
        })}
      </svg>
    </div>
  )
}

