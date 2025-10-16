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
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className='fixed inset-0 z-[201] flex items-center justify-center p-4'
          >
            <div className='bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl'>
              <div className='relative'>
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className='absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all cursor-pointer'
                >
                  <X size={24} className='text-gray-900' />
                </button>

                {/* Image */}
                <div className='relative h-[300px] md:h-[400px] overflow-hidden rounded-t-2xl'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className='object-cover'
                  />
                  {product.isVegetarian && (
                    <div className='absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg'>
                      Vegetar
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className='p-6 md:p-8'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                      {product.name}
                    </h2>

                    <p className='text-gray-600 text-lg leading-relaxed mb-6'>
                      {product.description}
                    </p>

                    {/* Additional Info */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-xl'>
                      <div className='text-center'>
                        <div className='text-2xl mb-1'>🔥</div>
                        <p className='text-sm text-gray-600'>Fersk Tilberedt</p>
                      </div>
                      <div className='text-center'>
                        <div className='text-2xl mb-1'>⏱️</div>
                        <p className='text-sm text-gray-600'>Klar på 10 min</p>
                      </div>
                      <div className='text-center'>
                        <div className='text-2xl mb-1'>🌟</div>
                        <p className='text-sm text-gray-600'>Anbefalt</p>
                      </div>
                    </div>

                    {/* Ingredients */}
                    <div className='mb-6'>
                      <h3 className='font-bold text-lg text-gray-900 mb-3'>
                        Ingredienser:
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
                          <span
                            key={index}
                            className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and Quantity */}
                    <div className='flex items-center justify-between mb-6 pb-6 border-b border-gray-200'>
                      <div>
                        <p className='text-sm text-gray-600 mb-1'>Pris</p>
                        <p className='text-4xl font-bold text-[#FDB714]'>
                          {product.price}
                        </p>
                      </div>

                      <div className='flex items-center gap-3 bg-gray-100 rounded-lg p-2'>
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className='w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-200 rounded-lg transition-colors shadow-sm cursor-pointer'
                        >
                          <Minus size={18} />
                        </button>
                        <span className='w-12 text-center font-bold text-xl'>
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className='w-10 h-10 flex items-center justify-center bg-[#FDB714] hover:bg-[#E5A613] rounded-lg transition-colors shadow-sm cursor-pointer'
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                      size='lg'
                      className='w-full'
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart size={20} />
                      Legg til i handlekurv -{' '}
                      {(
                        parseInt(product.price.replace(/\D/g, '')) * quantity
                      ).toFixed(0)}
                      ,-
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
