'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingCart, Phone, MapPin, Truck } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { toggleCart, getTotalItems } = useCart()

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          if (currentScrollY < lastScrollY || currentScrollY < 10) {
            // Scrolling up or at top
            setIsVisible(true)
          } else if (currentScrollY > lastScrollY && currentScrollY > 300) {
            // Scrolling down and past threshold
            setIsVisible(false)
          }

          setLastScrollY(currentScrollY)
          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const menuItems = [
    { name: 'Hjem', href: '/' },
    { name: 'Meny', href: '/meny' },
    { name: 'Om Oss', href: '/om-oss' },
    { name: 'Vår Historie', href: '/var-historie' },
    { name: 'Kampanjer', href: '/kampanjer' },
    { name: 'Kontakt Oss', href: '/kontakt-oss' },
  ]

  return (
    <>
      {/* Announcement Banner */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className='fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-black via-gray-900 to-black text-white p-3 md:py-2 px-4'
      >
        <div className='container mx-auto flex items-center justify-center gap-4 text-sm md:text-base'>
          <Truck className='w-5 h-5 text-[#FDB714]' />
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='font-bold'
          >
            🎉 Fri levering over 200,-
          </motion.span>
          <span className='hidden md:inline text-gray-300'>|</span>
          <span className='hidden md:inline text-gray-300'>
            Bestill nå og få mat på 20-30 min
          </span>
        </div>
      </motion.div>

      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -250 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className='bg-transparent shadow-none fixed left-0 right-0 z-50'
        style={{
          top: '40px', // Offset for announcement banner
          borderBottomLeftRadius: '60% 30px',
          borderBottomRightRadius: '60% 30px',
        }}
      >
        <nav className='bg-gradient-to-b from-[#fdd214] via-[#f5c412] to-[#E5A613] shadow-[0_10px_40px_rgba(253,183,20,0.3)] rounded-b-[50%_30px] w-full relative min-h-[130px] md:min-h-[150px] backdrop-blur-sm'>
          {/* Top Utilities Bar - Desktop Only */}
          <div className='hidden lg:flex absolute top-3 left-0 right-0 px-8 justify-between items-center z-30'>
            {/* Left - Location & Search */}
            <div className='flex items-center gap-4'>
              {/* Location Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-sm cursor-pointer hover:bg-black/30 transition-all'
              >
                <MapPin className='w-4 h-4' />
                <span className='font-semibold'>
                  Strømsveien 77, 2010 Strømmen
                </span>
              </motion.div>
            </div>

            {/* Right - Contact Info & Cart */}
            <div className='flex flex-col items-end gap-3'>
              {/* Phone Button */}
              <motion.a
                href='tel:+4712345678'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-2 bg-black/90 backdrop-blur-md px-4 py-2 rounded-full text-[#FDB714] font-bold hover:bg-black transition-all cursor-pointer'
              >
                <Phone className='w-4 h-4' />
                <span>+47 123 45 678</span>
              </motion.a>

              {/* Cart Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleCart}
                className='relative bg-gradient-to-r mr-10 from-black via-gray-900 to-black text-[#FDB714] p-3 rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl border-2 border-black/20'
              >
                <ShoppingCart size={20} className='relative z-10' />
                {getTotalItems() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    className='absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-black shadow-lg border-2 border-white'
                  >
                    {getTotalItems()}
                  </motion.span>
                )}
                {getTotalItems() > 0 && (
                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className='absolute inset-0 bg-red-500 rounded-full -z-10'
                  />
                )}
              </motion.button>
            </div>
          </div>

          {/* Decorative shine effect */}
          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
              ease: 'easeInOut',
            }}
            className='absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none rounded-b-[50%_30px]'
          />

          {/* Centered Logo */}
          <div className='absolute inset-0 flex items-center justify-center z-40 md:mb-12 pointer-events-none'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className='flex items-center pointer-events-auto'
            >
              <Link href='/' className='cursor-pointer'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='relative w-40 h-27 transition-transform duration-300'
                >
                  <Image
                    src='/logo/Charlies logo.png'
                    alt="Charlie's Kebab Logo"
                    fill
                    className='object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]'
                    priority
                  />
                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className='absolute inset-0 bg-[#FDB714]/20 rounded-full blur-2xl -z-10'
                  />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Navigation Links Along Bottom Curve */}
          <div className='absolute bottom-0 left-0 right-0 pb-2 md:pb-2'>
            <div className='hidden lg:flex items-center justify-center space-x-8'>
              {menuItems.map((item, index) => {
                // Calculate curved positioning for each link
                const totalLinks = menuItems.length
                const centerIndex = (totalLinks - 1) / 2
                const distanceFromCenter = index - centerIndex
                const curveOffset = Math.abs(distanceFromCenter) * 4 // Adjust curve intensity
                const rotation = distanceFromCenter * 2 // Slight rotation for curve effect

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    className='relative'
                    style={{
                      bottom: `${curveOffset}px`,
                      transform: `rotate(${rotation}deg)`,
                    }}
                  >
                    <Link
                      href={item.href}
                      className='group relative px-6 py-3 text-black font-black hover:text-white rounded-full transition-all duration-300 cursor-pointer text-lg overflow-hidden'
                    >
                      {/* Background on hover */}
                      <motion.span
                        className='absolute inset-0 bg-black/90 rounded-full'
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className='relative z-10'>{item.name}</span>

                      {/* Underline effect */}
                      <motion.span
                        className='absolute bottom-1 left-1/2 h-0.5 '
                        initial={{ width: 0, x: '-50%' }}
                        whileHover={{ width: '80%', x: '-40%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
          {/* Mobile Menu Button - Top Left */}
          <div className='absolute top-4 left-4 lg:hidden flex items-center gap-3 z-20 mt-5'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-black focus:outline-none cursor-pointer bg-black/10 p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-yellow-600 transition-all duration-300'
            >
              {isOpen ? <X size={20} /> : <Menu size={23} />}
            </button>
          </div>

          <div className='absolute top-4 right-4 lg:hidden flex items-center gap-3 z-20 mt-5'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleCart}
              className='relative bg-black/90 text-[#FDB714] p-2 rounded-full cursor-pointer shadow-md w-12 h-12 flex items-center justify-center hover:bg-black transition-all duration-300'
            >
              <ShoppingCart size={23} />
              {getTotalItems() > 0 && (
                <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold shadow-md'>
                  {getTotalItems()}
                </span>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Overlay - Portal to Body */}
          {isOpen && (
            <>
              {/* Backdrop - Full Screen */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='fixed inset-0 bg-black/60 z-[60] lg:hidden top-0 left-0'
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100vw',
                  height: '100vh',
                }}
              />

              {/* Menu - Slide from Left - Full Height */}
              <motion.div
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className='fixed top-0 left-0 h-screen w-72 max-w-[85vw] bg-gradient-to-b from-[#FDB714] via-[#F5A612] to-[#E5A613] shadow-2xl z-[70] lg:hidden overflow-y-auto'
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  height: '100vh',
                }}
              >
                <div className='flex flex-col h-full'>
                  {/* Header with Close Button */}
                  <div className='flex justify-between items-center p-6 border-b-2 border-black/10'>
                    <h2 className='text-xl font-bold text-black'>Meny</h2>
                    <motion.button
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsOpen(false)}
                      className='text-black hover:bg-black/20 p-2 rounded-lg transition-all duration-300 cursor-pointer'
                    >
                      <X size={24} />
                    </motion.button>
                  </div>

                  {/* Menu Items */}
                  <div className='flex-1 px-4 py-6 space-y-1'>
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.08,
                          type: 'spring',
                          stiffness: 150,
                        }}
                      >
                        <Link
                          href={item.href}
                          className='block py-3 px-4 text-black font-semibold hover:bg-black/20 rounded-lg transition-all duration-300 cursor-pointer text-base border-l-4 border-transparent hover:border-black/40 hover:pl-6'
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Cart Button in Menu */}
                  <div className='p-6 border-t-2 border-black/10 bg-black/5 backdrop-blur-sm'>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        toggleCart()
                        setIsOpen(false)
                      }}
                      className='w-full bg-gradient-to-r from-black via-gray-900 to-black text-[#FDB714] py-3 px-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-md border border-black/20'
                    >
                      <ShoppingCart size={20} />
                      Handlekurv
                      {getTotalItems() > 0 && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className='bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold border border-red-300'
                        >
                          {getTotalItems()}
                        </motion.span>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </nav>
      </motion.header>
    </>
  )
}
