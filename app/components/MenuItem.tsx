'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import ProductModal from './ProductModal'
import { ShoppingBag, Star } from 'lucide-react'

interface MenuItemProps {
  id: string
  name: string
  description: string
  price: string
  image?: string
  isVegetarian?: boolean
}

export default function MenuItem({
  id,
  name,
  description,
  price,
  image,
  isVegetarian,
}: MenuItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart, toggleCart } = useCart()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation()
    const priceNumber = parseInt(price.replace(/\D/g, ''))
    addToCart({
      id,
      name,
      price: priceNumber,
      image: image || '/KebabRull.avif',
    })
    toggleCart()
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsModalOpen(true)}
        className='w-full group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-yellow-200 cursor-pointer flex flex-col h-full'
      >
        {/* Hover Glow Effect */}
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-amber-500/0 group-hover:from-yellow-400/10 group-hover:to-amber-500/10 transition-all duration-500 rounded-2xl' />

        {image && (
          <div className='relative h-44 md:h-52 lg:h-60 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
            {/* Price Tag */}
            <div className=' mb-2 w-fit group absolute top-3 right-3 '>
              <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500'></div>
              <div className='relative bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-black px-3 py-1.5 rounded-xl font-black text-base md:text-lg shadow-lg'>
                {price}
              </div>
            </div>
            <Image
              src={image}
              alt={name}
              fill
              className='object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1'
            />
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className='absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-2 rounded-full text-sm font-black shadow-lg backdrop-blur-sm border border-white/20 '
            >
              {price}
            </motion.div>

            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

            {/* Shine Effect */}
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 opacity-0 group-hover:opacity-100'
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            />
          </div>
        )}

        <div className='relative p-4 md:p-5 flex flex-col flex-grow'>
          {/* Title and Price */}
          <div className='flex justify-between items-start mb-3'>
            <h3 className='text-lg md:text-xl font-black text-gray-900 line-clamp-1 flex-1 pr-2 group-hover:text-yellow-600 transition-colors duration-300'>
              {name}
            </h3>
          </div>
          {/* Description */}
          <p className='hidden md:block text-gray-600 text-xs md:text-sm leading-relaxed mb-3 flex-grow line-clamp-2 group-hover:text-gray-700 transition-colors duration-300'>
            {description}
          </p>
          {/* Rating Display */}
          <div className='flex items-center gap-1 mb-4'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className='w-3 h-3 md:w-4 md:h-4 text-[#FDB714] fill-[#FDB714]'
              />
            ))}
            <span className='text-xs text-gray-500 ml-1 font-semibold'>
              (4.8)
            </span>
          </div>

          {/* Add Button - Enhanced */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleQuickAdd}
            className='relative w-full bg-gradient-to-r from-[#FDB714] via-yellow-500 to-[#FDB714] text-black font-black py-3 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer text-sm md:text-base overflow-hidden group/btn'
          >
            <span className='relative z-10 flex items-center justify-center gap-2'>
              <ShoppingBag className='w-4 h-4' />
              Legg til
            </span>
            {/* Button Shine */}
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12'
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </div>

        {/* Corner Accent */}
        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      </motion.div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          id,
          name,
          description,
          price,
          image: image || '/KebabRull.avif',
          isVegetarian,
        }}
      />
    </>
  )
}
