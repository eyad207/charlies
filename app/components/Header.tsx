'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { toggleCart, getTotalItems } = useCart()

  const menuItems = [
    { name: 'Hjem', href: '/' },
    { name: 'Meny', href: '/meny' },
    { name: 'Om Oss', href: '/om-oss' },
    { name: 'Vår Historie', href: '/var-historie' },
    { name: 'Kampanjer', href: '/kampanjer' },
    { name: 'Kontakt Oss', href: '/kontakt-oss' },
  ]

  return (
    <header className='bg-[#FDB714] shadow-xl sticky top-0 z-50 md:px-50 sm:px-30 rounded-b-xl'>
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
              className='relative w-24 h-24 md:w-32 md:h-32 hover:scale-110 transition-transform duration-300'
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

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden mt-4 pb-4 space-y-2'
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='block py-3 px-4 text-black font-semibold hover:bg-black hover:text-[#FDB714] rounded-lg transition-all duration-300 cursor-pointer'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}
