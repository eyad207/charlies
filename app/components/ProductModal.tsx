'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Plus, Minus, ShoppingCart } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import Button from './Button'

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
  const { addToCart, toggleCart } = useCart()

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scroll on body
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'

      // Prevent wheel and touch scroll
      const preventScroll = (e: WheelEvent | TouchEvent) => {
        e.preventDefault()
      }

      document.addEventListener('wheel', preventScroll, { passive: false })
      document.addEventListener('touchmove', preventScroll, { passive: false })

      return () => {
        document.removeEventListener('wheel', preventScroll)
        document.removeEventListener('touchmove', preventScroll)
        document.body.style.overflow = 'unset'
        document.documentElement.style.overflow = 'unset'
      }
    } else {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 bg-black/70 z-[200] cursor-pointer'
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className='fixed inset-0 z-[201] flex items-center justify-center p-3 sm:p-4 md:p-6'
          >
            <div className='bg-white rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col'>
              {/* Close Button */}
              <button
                onClick={onClose}
                className='absolute top-4 right-4 sm:top-6 sm:right-6 z-50 bg-black/20 hover:bg-black/40 rounded-full p-2 sm:p-3 transition-all cursor-pointer backdrop-blur-sm'
              >
                <X size={24} className='text-white' />
              </button>

              {/* Image Section - Top */}
              <div className='relative w-full h-56 sm:h-64 md:h-72 flex-shrink-0'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
                {product.isVegetarian && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className='absolute top-4 left-4 sm:top-6 sm:left-6 bg-green-500 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg backdrop-blur-sm'
                  >
                    🥗 Vegetar
                  </motion.div>
                )}
              </div>

              {/* Content Section - Bottom, No Scroll */}
              <div className='w-full flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className='space-y-8'
                >
                  {/* Title Section */}
                  <div className='space-y-2'>
                    <div className='flex items-start gap-2'>
                      <div className='w-1 h-10 bg-gradient-to-b from-[#FDB714] to-[#FDB714]/50 rounded-full'></div>
                      <div>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight'>
                          {product.name}
                        </h2>
                        <p className='text-xs sm:text-sm text-gray-500 font-semibold mt-0.5'>
                          Premium Kebab
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className='text-gray-600 text-sm sm:text-base leading-relaxed font-medium'
                  >
                    {product.description}
                  </motion.p>

                  {/* Ingredients - Compact */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='space-y-2'
                  >
                    <h3 className='font-black text-sm sm:text-base text-gray-900 flex items-center gap-2'>
                      <span className='text-lg'>🥘</span>
                      Ingredienser
                    </h3>
                    <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                      {[
                        'Kebabkjøtt',
                        'Salat',
                        'Tomat',
                        'Agurk',
                        'Rødløk',
                        'Spesialsaus',
                      ].map((ingredient, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.25 + index * 0.06 }}
                          className='bg-gradient-to-br from-blue-50 to-blue-100/50 text-blue-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-bold border border-blue-200 shadow-sm'
                        >
                          {ingredient}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Price and Action Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className='space-y-3 mt-4 pt-3 border-t border-gray-200'
                >
                  {/* Price Display */}
                  <div className='bg-gradient-to-r from-[#FDB714]/10 to-[#FDB714]/5 rounded-lg p-3 sm:p-4 border border-[#FDB714]/20'>
                    <div className='flex items-end justify-between gap-3'>
                      <div>
                        <p className='text-xs text-gray-600 font-bold uppercase tracking-wider mb-1'>
                          Pris
                        </p>
                        <p className='text-3xl sm:text-4xl font-black text-[#FDB714] leading-none'>
                          {(
                            parseInt(product.price.replace(/\D/g, '')) *
                            quantity
                          ).toFixed(0)}
                          ,-
                        </p>
                      </div>

                      {/* Quantity Selector */}
                      <div className='text-right'>
                        <p className='text-xs text-gray-600 font-bold uppercase tracking-wider mb-1.5'>
                          Antall
                        </p>
                        <div className='flex items-center gap-1.5 bg-white border-2 border-gray-200 rounded-lg p-1'>
                          <button
                            onClick={() =>
                              setQuantity(Math.max(1, quantity - 1))
                            }
                            className='w-8 sm:w-9 h-8 sm:h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded transition-all cursor-pointer font-bold text-gray-900'
                          >
                            <Minus size={16} />
                          </button>
                          <span className='w-8 text-center text-gray-900 text-base font-bold'>
                            {quantity}
                          </span>
                          <button
                            onClick={() => setQuantity(quantity + 1)}
                            className='w-8 sm:w-9 h-8 sm:h-9 flex items-center justify-center bg-[#FDB714] hover:bg-[#E5A613] rounded transition-all cursor-pointer font-bold text-black'
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.div whileHover={{ scale: 1 }}>
                    <Button
                      size='md'
                      className='w-full text-sm sm:text-base font-bold shadow-lg'
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart size={18} />
                      Legg til i handlekurv
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
