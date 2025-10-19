'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { toggleCart, getTotalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up or at top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
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
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='bg-[#FDB714] mb-5 shadow-xl sticky top-0 z-50 md:px-50 sm:px-30 rounded-b-2xl'
    >
      <nav className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='flex items-center'
          >
            <Link
              href='/'
              className='relative w-24 h-24 md:w-32 md:h-25 hover:scale-110 transition-transform duration-300'
            >
              <Image
                src='/logo/Charlies logo.png'
                alt="Charlie's Kebab Logo"
                fill
                className='object-contain drop-shadow-lg'
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center space-x-1'>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className='px-4 py-2 text-black font-semibold hover:bg-black hover:text-[#FDB714] rounded-lg transition-all duration-300 cursor-pointer'
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleCart}
              className='relative bg-black text-[#FDB714] p-3 rounded-lg hover:bg-gray-900 transition-colors duration-300 ml-10 cursor-pointer'
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold'
                >
                  {getTotalItems()}
                </motion.span>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden flex items-center gap-3'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleCart}
              className='relative bg-black text-[#FDB714] p-2 rounded-lg cursor-pointer'
            >
              <ShoppingCart size={22} />
              {getTotalItems() > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold'>
                  {getTotalItems()}
                </span>
              )}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-black focus:outline-none cursor-pointer'
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/50 z-[60] lg:hidden'
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#FDB714] shadow-2xl z-[70] lg:hidden'
            >
              <div className='flex flex-col h-full'>
                {/* Close Button */}
                <div className='flex justify-end p-4'>
                  <button
                    onClick={() => setIsOpen(false)}
                    className='text-black hover:bg-black hover:text-[#FDB714] p-2 rounded-lg transition-colors duration-300 cursor-pointer'
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Menu Items */}
                <div className='flex-1 px-6 py-4 space-y-2'>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className='block py-4 px-4 text-black font-semibold hover:bg-black hover:text-[#FDB714] rounded-lg transition-all duration-300 cursor-pointer text-lg'
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Cart Button in Menu */}
                <div className='p-6 border-t border-black/20'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      toggleCart()
                      setIsOpen(false)
                    }}
                    className='w-full bg-black text-[#FDB714] py-3 px-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2'
                  >
                    <ShoppingCart size={20} />
                    Handlekurv
                    {getTotalItems() > 0 && (
                      <span className='bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold'>
                        {getTotalItems()}
                      </span>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </nav>
    </motion.header>
  )
}
