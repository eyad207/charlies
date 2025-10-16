'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from './Button'

const slides = [
  {
    id: 1,
    title: 'Autentisk Kebab',
    subtitle: 'Laget med lidenskap siden 1995',
    description:
      'Opplev den beste kebaben i byen med ferske ingredienser og tradisjonelle oppskrifter',
    image: '/kebabpizza.webp',
    cta: 'Bestill Nå',
  },
  {
    id: 2,
    title: 'Vegetar Alternativer',
    subtitle: 'Sunt og deilig',
    description:
      'Våre vegetarkebaber er laget med kjærlighet og de beste grønnsakene',
    image: '/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif',
    cta: 'Se Menyen',
  },
  {
    id: 3,
    title: 'Familiepakker',
    subtitle: 'Perfekt for enhver anledning',
    description:
      'Spar penger med våre fantastiske familiepakker - mat til alle!',
    image: '/MSG-Smash-Burger.jpg',
    cta: 'Se Tilbud',
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lastInteraction, setLastInteraction] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      const timeSinceLastClick = Date.now() - lastInteraction
      // If clicked recently (within 8 seconds), wait longer before auto-scrolling
      if (timeSinceLastClick > 8000 && !isAnimating) {
        setDirection('right')
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }, 7000)

    return () => clearInterval(timer)
  }, [lastInteraction, isAnimating])

  const nextSlide = () => {
    if (isAnimating) return
    setDirection('left')
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setLastInteraction(Date.now())
  }

  const prevSlide = () => {
    if (isAnimating) return
    setDirection('right')
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setLastInteraction(Date.now())
  }

  const handleIndicatorClick = (index: number) => {
    if (isAnimating) return
    setDirection(index > currentSlide ? 'right' : 'left')
    setCurrentSlide(index)
    setLastInteraction(Date.now())
  }

  return (
    <div className='relative h-[650px] overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ x: direction === 'right' ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 'right' ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          className='absolute inset-0'
        >
          {/* Background Image with Overlay */}
          <div className='absolute inset-0'>
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className='object-cover opacity-40'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'></div>
          </div>

          {/* Content */}
          <div className='relative h-full container mx-auto px-4 flex items-center'>
            <div className='max-w-2xl text-white z-10'>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className='text-[#FDB714] text-xl md:text-2xl font-semibold mb-2'>
                  {slides[currentSlide].subtitle}
                </h3>
                <h1 className='text-5xl md:text-7xl font-bold mb-4 leading-tight'>
                  {slides[currentSlide].title}
                </h1>
                <p className='text-lg md:text-xl text-gray-300 mb-8 leading-relaxed'>
                  {slides[currentSlide].description}
                </p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Button size='lg'>{slides[currentSlide].cta}</Button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Animated Flames */}
          <div className='absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none'>
            {/* Mobile: 15 flames */}
            <div className='md:hidden w-full flex justify-between px-2'>
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute bottom-0'
                  style={{
                    left: `${i * 7}%`,
                    width: '40px',
                    height: '60px',
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scaleY: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 1 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                >
                  <div className='w-full h-full bg-gradient-to-t from-[#FDB714] via-red-500 to-transparent rounded-t-full blur-sm'></div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: 50 flames */}
            <div className='hidden md:block w-full'>
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={`desktop-${i}`}
                  className='absolute bottom-0'
                  style={{
                    left: `${(i / 50) * 100}%`,
                    width: '40px',
                    height: '60px',
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scaleY: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 1 + Math.random(),
                    repeat: Infinity,
                    delay: (i % 15) * 0.1,
                  }}
                >
                  <div className='w-full h-full bg-gradient-to-t from-[#FDB714] via-red-500 to-transparent rounded-t-full blur-sm'></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 -translate-y-1/2 bg-[#FDB714] text-black p-3 rounded-full hover:bg-[#E5A613] transition-all z-20 hover:scale-110 cursor-pointer'
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-[#FDB714] text-black p-3 rounded-full hover:bg-[#E5A613] transition-all z-20 hover:scale-110 cursor-pointer'
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? 'bg-[#FDB714] w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
