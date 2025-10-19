'use client'

import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { useState, useEffect, useMemo, memo, type PointerEvent } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Memoized Smoke Animation Component to prevent re-renders
const SmokeAnimation = memo(function SmokeAnimation() {
  // Pre-calculate random values to avoid hydration mismatch
  const smokeOffsets = useMemo(
    () => [
      0, 2.5, -1.2, 3.1, -0.8, 1.7, -2.3, 4.2, 0.5, -1.5, 2.8, -0.3, 3.5, 1.1,
      -2.7, 0.9, -1.8, 2.2, 3.8, -0.6,
    ],
    []
  )
  const primaryDurations = useMemo(
    () => [
      3.2, 3.7, 3.1, 3.8, 3.3, 3.6, 3.4, 3.9, 3.5, 3.2, 3.7, 3.1, 3.8, 3.3, 3.6,
      3.4, 3.9, 3.5, 3.2, 3.7,
    ],
    []
  )
  const secondaryDurations = useMemo(
    () => [
      4.3, 4.8, 4.1, 4.6, 4.4, 4.9, 4.2, 4.7, 4.5, 4.3, 4.8, 4.1, 4.6, 4.4, 4.9,
    ],
    []
  )

  return (
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
            willChange: 'transform, opacity',
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
            repeatType: 'loop',
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
            willChange: 'transform, opacity',
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
            repeatType: 'loop',
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
  )
})

const slides = [
  {
    id: 1,
    title: 'Vegetar Kebab',
    subtitle: 'Sunt og deilig',
    description:
      'Grillet grønnsaker, falafel, fersk salat og hjemmelaget yoghurtsaus',
    price: '119,-',
    image: '/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif',
    cta: 'Bestill Nå',
    badge: 'POPULÆR',
  },
  {
    id: 2,
    title: 'Klassisk Kebab',
    subtitle: 'Autentisk & Deilig',
    description:
      'Saftig kebabkjøtt, fersk salat, tomat, agurk og vår hemmelige saus',
    price: '129,-',
    image: '/KebabRull.avif',
    cta: 'Bestill Nå',
    badge: 'BESTSELGER',
  },
  {
    id: 3,
    title: 'Kebab Tallerken',
    subtitle: 'Mett & Fornøyd',
    description:
      'Saftig kebabkjøtt servert med pommes frites, salat og valgfri saus',
    price: '149,-',
    image: '/Kebab i pita med hjemmelaget kebabsaus.png',
    cta: 'Se Menyen',
    badge: 'KAMPANJE',
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
    <div className='flex justify-center relative w-full h-[650px] xs:h-[500px] sm:h-[700px] md:h-[750px] lg:h-[800px] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ x: direction === 'right' ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 'right' ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          drag='x'
          dragElastic={0.1}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className='absolute inset-0'
        >
          {/* Background Image with Enhanced Overlay */}
          <div className='absolute inset-0'>
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/80'></div>
            <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
          </div>

          {/* Content - Centered Product Display */}
          <div className='relative h-full container mx-auto px-15 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center'>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='text-white z-10 text-center space-y-6 max-w-4xl'
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              >
                <span className='inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-black rounded-full shadow-lg'>
                  {slides[currentSlide].badge}
                </span>
              </motion.div>

              {/* Subtitle */}
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className='text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold tracking-wide'
              >
                {slides[currentSlide].subtitle}
              </motion.h3>

              {/* Title */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none'
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className='text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed mx-auto'
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Combined Price + CTA Button */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                className='flex justify-center items-center'
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className='group relative bg-gradient-to-r from-[#FDB714] via-amber-500 to-yellow-400 rounded-2xl shadow-2xl hover:shadow-[0_0_50px_rgba(253,183,20,0.8)] transition-all duration-300 overflow-hidden'
                >
                  {/* Glow Effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity'></div>

                  {/* Button Content */}
                  <div className='relative flex items-center gap-6 px-8 py-5 border-2 border-white/20'>
                    {/* Price Section */}
                    <div className='flex items-baseline gap-2 border-r-2 border-black/20 pr-6'>
                      <span className='text-sm font-bold text-black/80 uppercase'>
                        Kun
                      </span>
                      <span className='text-4xl sm:text-5xl font-black text-black'>
                        {slides[currentSlide].price}
                      </span>
                    </div>

                    {/* CTA Section */}
                    <div className='flex items-center gap-3'>
                      <span className='text-lg sm:text-xl font-black text-black uppercase tracking-wide'>
                        {slides[currentSlide].cta}
                      </span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: 'easeInOut',
                        }}
                        className='text-2xl font-black text-black'
                      >
                        →
                      </motion.span>
                    </div>
                  </div>

                  {/* Shine Animation */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: 'easeInOut',
                    }}
                    className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12'
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Smoke Animation - Enhanced */}
          <SmokeAnimation />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - Redesigned */}
      <motion.button
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className='absolute left-1 sm:left-8 top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all z-20 backdrop-blur-sm border border-white/20'
      >
        <ChevronLeft size={20} className='sm:w-7 sm:h-7' />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className='absolute right-1 sm:right-8 top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all z-20 backdrop-blur-sm border border-white/20'
      >
        <ChevronRight size={20} className='sm:w-7 sm:h-7' />
      </motion.button>

      {/* Slide Indicators - Redesigned */}
      <div className='absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20'>
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-gradient-to-r from-yellow-400 to-amber-500 w-12 h-3'
                : 'bg-white/40 hover:bg-white/60 w-3 h-3'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
