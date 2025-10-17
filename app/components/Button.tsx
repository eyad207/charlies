'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'responsive'
  className?: string
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer'

  const variants = {
    primary:
      'bg-[#FDB714] text-black hover:bg-[#E5A613] shadow-lg hover:shadow-xl',
    secondary:
      'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-[#FDB714] text-[#FDB714] hover:bg-[#FDB714] hover:text-black',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    responsive: 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
