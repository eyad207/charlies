'use client'

import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { useState, useEffect, useMemo, type PointerEvent } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from './Button'

const slides = [
  {
    id: 1,
    title: 'Vegetar Alternativer',
    subtitle: 'Sunt og deilig',
    description:
      'Våre vegetarkebaber er laget med kjærlighet og de beste grønnsakene',
    image: '/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif',
    cta: 'Se Menyen',
  },
  {
    id: 2,
    title: 'Autentisk Kebab',
    subtitle: 'Laget med lidenskap siden 1995',
    description:
      'Opplev den beste kebaben i byen med ferske ingredienser og tradisjonelle oppskrifter',
    image: '/Pizza.webp',
    cta: 'Bestill Nå',
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

  // Pre-calculate random values to avoid hydration mismatch
  const smokeOffsets = useMemo(() => [
    0, 2.5, -1.2, 3.1, -0.8, 1.7, -2.3, 4.2, 0.5, -1.5,
    2.8, -0.3, 3.5, 1.1, -2.7, 0.9, -1.8, 2.2, 3.8, -0.6
  ], [])
  const primaryDurations = useMemo(() => [
    3.2, 3.7, 3.1, 3.8, 3.3, 3.6, 3.4, 3.9, 3.5, 3.2,
    3.7, 3.1, 3.8, 3.3, 3.6, 3.4, 3.9, 3.5, 3.2, 3.7
  ], [])
  const secondaryDurations = useMemo(() => [
    4.3, 4.8, 4.1, 4.6, 4.4, 4.9, 4.2, 4.7, 4.5, 4.3,
    4.8, 4.1, 4.6, 4.4, 4.9
  ], [])

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

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (isAnimating) return

    // Professional snap-to-slide behavior
    // Requires deliberate drag to change slides
    const swipeThreshold = 100 // Minimum 100px drag required
    const swipeVelocityThreshold = 600 // OR high velocity

    if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > swipeVelocityThreshold
    ) {
      // Swiped right - go to previous slide
      prevSlide()
    } else if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -swipeVelocityThreshold
    ) {
      // Swiped left - go to next slide
      nextSlide()
    }
  }

  return (
    <div className='flex justify-center relative rounded-3xl w-400 h-[500px] xs:h-[400px] sm:h-[700px] md:h-[600px] lg:h-[650px] overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ x: direction === 'right' ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 'right' ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          drag='x'
          dragElastic={0.1}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className='absolute inset-0'
        >
          {/* Background Image with Overlay */}
          <div className='absolute inset-0'>
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className='object-cover opacity-90'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'></div>
          </div>

          {/* Content */}
          <div className='relative h-full container mx-auto px-13 sm:px-5 md:px-6 lg:px-8 flex items-center'>
            <div className='max-w-3xl text-white z-10'>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className='text-[#FDB714] text-md xs:text-base sm:text-lg md:text-2xl lg:text-2xl font-semibold mb-2'>
                  {slides[currentSlide].subtitle}
                </h3>
                <h1 className='text-4xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 leading-tight'>
                  {slides[currentSlide].title}
                </h1>
                <p className='text-md xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed'>
                  {slides[currentSlide].description}
                </p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Button size='responsive'>{slides[currentSlide].cta}</Button>
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

          {/* Smoke Animation - Enhanced shader-like effect */}
          <div className='absolute bottom-0 left-0 right-0 h-full pointer-events-none overflow-hidden z-10'>
            {/* Multiple layers for depth */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`smoke-${i}`}
                className='absolute'
                style={{
                  left: `${(i / 20) * 100 + smokeOffsets[i]}%`,
                  bottom: '-30px',
                  filter: 'blur(40px) contrast(1.2)',
                }}
                animate={{
                  y: [0, -150, -300, -450, -600],
                  opacity: [0, 0.4, 0.6, 0.4, 0],
                  scale: [0.3, 0.7, 1.2, 1.8, 2.5],
                  x: [
                    0,
                    Math.sin(i * 0.5) * 20,
                    Math.sin(i * 0.5) * 40,
                    Math.sin(i * 0.5) * 60,
                    Math.sin(i * 0.5) * 80,
                  ],
                }}
                transition={{
                  duration: primaryDurations[i],
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'linear',
                }}
              >
                <div
                  className='w-28 h-28 rounded-full'
                  style={{
                    background: `radial-gradient(circle, 
                      rgba(240, 127, 19, ${0.6 - i * 0.02}) 0%, 
                      rgba(200, 200, 200, ${0.4 - i * 0.015}) 30%, 
                      rgba(255, 255, 255, ${0.3 - i * 0.01}) 60%, 
                      transparent 100%)`,
                  }}
                ></div>
              </motion.div>
            ))}

            {/* Secondary smoke layer for density */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`smoke-dense-${i}`}
                className='absolute'
                style={{
                  left: `${(i / 15) * 100 + 3}%`,
                  bottom: '-20px',
                  filter: 'blur(30px)',
                }}
                animate={{
                  y: [0, -180, -360, -540],
                  opacity: [0, 0.5, 0.3, 0],
                  scale: [0.2, 0.9, 1.5, 2.2],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: secondaryDurations[i],
                  repeat: Infinity,
                  delay: i * 0.45 + 0.2,
                  ease: 'easeOut',
                }}
              >
                <div
                  className='w-32 h-32 rounded-full'
                  style={{
                    background: `radial-gradient(circle, 
                      rgba(128, 9, 9, 0.4) 0%, 
                      rgba(200, 150, 100, 0.3) 40%, 
                      rgba(255, 255, 255, 0.2) 70%, 
                      transparent 100%)`,
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className='absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#FDB714] text-black p-2 sm:p-3 rounded-full hover:bg-[#E5A613] transition-all z-20 hover:scale-110 cursor-pointer'
      >
        <ChevronLeft size={20} className='sm:w-7 sm:h-7' />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#FDB714] text-black p-2 sm:p-3 rounded-full hover:bg-[#E5A613] transition-all z-20 hover:scale-110 cursor-pointer'
      >
        <ChevronRight size={20} className='sm:w-7 sm:h-7' />
      </button>

      {/* Slide Indicators */}
      <div className='absolute bottom-20 sm:bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? 'bg-[#FDB714] w-6 sm:w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
