'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Plus, Minus, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
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
            <div className='bg-white rounded-3xl w-full max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col md:flex-row '>
              {/* Close Button */}
              <button
                onClick={onClose}
                className='absolute top-4 right-4 sm:top-6 sm:right-6 z-50 bg-white hover:bg-gray-100 rounded-full p-2 sm:p-3 shadow-lg transition-all cursor-pointer'
              >
                <X size={24} className='text-gray-900' />
              </button>

              {/* Image Section */}
              <div className=' relative h-60 sm:h-80 md:h-full md:w-1/2 md:min-h-96 rounded-b-2xl'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='flex justify-center object-cover rounded-2xl'
                />
                <div className='absolute inset-0' />
                {product.isVegetarian && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg'
                  >
                    🥗 Vegetar
                  </motion.div>
                )}
              </div>

              {/* Content Section - Scrollable */}
              <div className='w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className='space-y-6'
                >
                  {/* Title */}
                  <div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2'>
                      {product.name}
                    </h2>
                    <div className='w-12 h-1 bg-[#FDB714] rounded-full'></div>
                  </div>

                  {/* Description */}
                  <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
                    {product.description}
                  </p>

                  {/* Ingredients */}
                  <div>
                    <h3 className='font-black text-lg sm:text-xl text-gray-900 mb-3'>
                      Ingredienser
                    </h3>
                    <div className='flex flex-wrap gap-2'>
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
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          className='bg-blue-50 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-blue-100'
                        >
                          {ingredient}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Price and Action Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className='space-y-4 mt-8 pt-6 border-t border-gray-200'
                >
                  {/* Price */}
                  <div className='flex items-end justify-between'>
                    {/* Total Price */}
                    <div>
                      <p className='text-xs sm:text-sm text-gray-600 font-semibold mb-1'>
                        TOTAL
                      </p>
                      <p className='text-3xl sm:text-4xl font-black text-[#FDB714]'>
                        {(
                          parseInt(product.price.replace(/\D/g, '')) * quantity
                        ).toFixed(0)}
                        ,-
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='text-xs sm:text-sm text-gray-600 font-semibold mb-2'>
                        ANTALL
                      </p>
                      <div className='flex items-center gap-2 bg-gray-100 rounded-xl p-2'>
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className='w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center bg-white hover:bg-gray-200 rounded-lg transition-colors shadow-sm cursor-pointer font-bold'
                        >
                          <Minus size={18} className='text-black' />
                        </button>
                        <span className='w-10 sm:w-12 text-center text-black text-lg sm:text-xl'>
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className='w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center bg-[#FDB714] hover:bg-[#E5A613] rounded-lg transition-colors shadow-sm cursor-pointer font-bold'
                        >
                          <Plus size={18} className='text-black' />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    size='lg'
                    className='w-full'
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart size={20} />
                    Legg til i handlekurv
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
