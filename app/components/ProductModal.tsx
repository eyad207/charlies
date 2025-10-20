'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Plus, Minus, ShoppingCart } from 'lucide-react'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useCart } from '../context/CartContext'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: string
    name: string
    description: string
    price: string
    image: string
    isVegetarian?: boolean
  }
}

export default function ProductModal({
  isOpen,
  onClose,
  product,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [mounted, setMounted] = useState(false)
  const { addToCart, toggleCart } = useCart()

  // Check if we're mounted on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent body scroll when modal is open (but allow modal scroll)
  useEffect(() => {
    if (isOpen) {
      // Prevent scroll on body only
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  const handleAddToCart = () => {
    const priceNumber = parseInt(product.price.replace(/\D/g, ''))

    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: priceNumber,
        image: product.image,
      })
    }

    onClose()
    toggleCart()
  }

  // Don't render on server or if not mounted
  if (!mounted) return null

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - Click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999] cursor-pointer'
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className='fixed inset-0 z-[999999] flex items-center justify-center p-2 sm:p-3 md:p-4 pointer-events-none overflow-hidden'
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl w-full max-w-4xl max-h-[95vh] overflow-y-auto overflow-x-hidden shadow-2xl pointer-events-auto border-2 border-yellow-100'
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#FDB714 #f3f4f6',
              }}
            >
              {/* Close Button - Enhanced */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className='absolute top-4 right-4 sm:top-6 sm:right-6 z-50 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 rounded-full p-3 transition-all cursor-pointer shadow-xl'
              >
                <X size={24} className='text-black' />
              </motion.button>

              {/* Image Section - Enhanced */}
              <div className='relative w-full h-48 sm:h-56 md:h-64 flex-shrink-0'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />
                {/* Shine Effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                  className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12'
                />

                {product.isVegetarian && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className='absolute top-4 left-4 sm:top-6 sm:left-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-black shadow-2xl backdrop-blur-sm border border-white/20'
                  >
                    🥗 Vegetar
                  </motion.div>
                )}

                {/* Price Badge - Floating */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className='absolute bottom-4 right-4 sm:bottom-6 sm:right-6'
                >
                  <div className='relative'>
                    <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-xl opacity-60'></div>
                    <div className='relative bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 px-6 py-3 rounded-2xl shadow-2xl border-2 border-white/20'>
                      <div className='flex items-baseline gap-2'>
                        <span className='text-xs font-bold text-black/80'>
                          KUN
                        </span>
                        <span className='text-3xl sm:text-4xl font-black text-black'>
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Section - Enhanced */}
              <div className='w-full p-4 sm:p-5 lg:p-6'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className='space-y-4 mb-4'
                >
                  {/* Title Section - Enhanced */}
                  <div className='space-y-2'>
                    <div className='flex items-start gap-3'>
                      <div className='w-1.5 h-10 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full'></div>
                      <div className='flex-1'>
                        <motion.h2
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className='text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text'
                        >
                          {product.name}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className='text-xs sm:text-sm text-yellow-600 font-bold mt-1'
                        >
                          ⭐ Premium Kvalitet
                        </motion.p>
                      </div>
                    </div>
                  </div>

                  {/* Description - Enhanced */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='bg-gradient-to-r from-yellow-50 to-amber-50 p-3 rounded-2xl border border-yellow-100'
                  >
                    <p className='text-gray-700 text-xs sm:text-sm leading-relaxed font-medium'>
                      {product.description}
                    </p>
                  </motion.div>

                  {/* Ingredients - Enhanced */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='space-y-2'
                  >
                    <h3 className='font-black text-sm sm:text-base text-gray-900 flex items-center gap-2'>
                      <span className='text-xl'>🥘</span>
                      Ingredienser
                    </h3>
                    <div className='flex flex-wrap gap-1.5'>
                      {['Kjøtt', 'Salat', 'Tomat', 'Agurk', 'Løk', 'Saus'].map(
                        (ingredient, i) => (
                          <motion.span
                            key={ingredient}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.05 }}
                            className='px-3 py-1.5 bg-white border-2 border-yellow-200 text-gray-700 text-xs sm:text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-yellow-400 hover:scale-105'
                          >
                            {ingredient}
                          </motion.span>
                        )
                      )}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Price and Action Section - Enhanced */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className='space-y-3 mt-auto pt-3 border-t-2 border-gray-200'
                >
                  {/* Quantity and Price Row */}
                  <div className='bg-gradient-to-r from-gray-50 to-yellow-50 rounded-2xl p-3 sm:p-4 border-2 border-yellow-100'>
                    <div className='flex items-center justify-between gap-4'>
                      {/* Quantity Selector - Enhanced */}
                      <div className='flex-1'>
                        <p className='text-xs text-gray-600 font-bold uppercase tracking-wider mb-2'>
                          Antall
                        </p>
                        <div className='flex items-center gap-2 bg-white border-2 border-gray-200 rounded-xl p-1.5 shadow-sm w-fit'>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              setQuantity(Math.max(1, quantity - 1))
                            }
                            className='w-10 h-10 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-lg transition-all cursor-pointer font-bold text-gray-900 shadow-sm'
                          >
                            <Minus size={18} />
                          </motion.button>
                          <span className='w-12 text-center text-gray-900 text-xl font-black'>
                            {quantity}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setQuantity(quantity + 1)}
                            className='w-10 h-10 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 rounded-lg transition-all cursor-pointer font-bold text-black shadow-md'
                          >
                            <Plus size={18} />
                          </motion.button>
                        </div>
                      </div>

                      {/* Price Display - Enhanced */}
                      <div className='text-right'>
                        <p className='text-xs text-gray-600 font-bold uppercase tracking-wider mb-2'>
                          Totalpris
                        </p>
                        <div className='relative'>
                          <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl blur-lg opacity-30'></div>
                          <div className='relative bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 px-5 py-2 rounded-xl shadow-xl'>
                            <p className='text-3xl sm:text-4xl font-black text-black leading-none'>
                              {(
                                parseInt(product.price.replace(/\D/g, '')) *
                                quantity
                              ).toFixed(0)}
                              ,-
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button - Enhanced */}
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className='relative w-full bg-gradient-to-r from-[#FDB714] via-yellow-500 to-[#FDB714] text-black font-black py-3 sm:py-4 rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(253,183,20,0.6)] transition-all duration-300 text-sm sm:text-base overflow-hidden group'
                  >
                    <span className='relative z-10 flex items-center justify-center gap-3'>
                      <ShoppingCart className='w-5 h-5' />
                      Legg til i handlekurv
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                    {/* Button Shine */}
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
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  // Render modal using portal to body element
  return createPortal(modalContent, document.body)
}
