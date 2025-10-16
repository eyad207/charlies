'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import ProductModal from './ProductModal'

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
        whileHover={{
          y: -8,
          transition: { duration: 0.15, ease: 'easeOut' },
        }}
        onClick={() => setIsModalOpen(true)}
        className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-150 border border-gray-100 cursor-pointer flex flex-col h-full'
        layout
      >
        {image && (
          <div className='relative h-48 overflow-hidden'>
            <Image
              src={image}
              alt={name}
              fill
              className='object-cover transition-transform duration-500 hover:scale-110'
            />
            {isVegetarian && (
              <div className='absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                Vegetar
              </div>
            )}
          </div>
        )}

        <div className='p-6 flex flex-col flex-grow'>
          <div className='flex justify-between items-start mb-3'>
            <h3 className='text-xl font-bold text-gray-900'>{name}</h3>
            <span className='text-2xl font-bold text-[#FDB714]'>{price}</span>
          </div>

          <p className='text-gray-600 text-sm leading-relaxed mb-4 flex-grow'>
            {description}
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleQuickAdd}
            className='w-full bg-[#FDB714] text-black font-semibold py-3 rounded-lg hover:bg-[#E5A613] transition-colors duration-300 cursor-pointer mt-auto'
          >
            Legg til i handlekurv
          </motion.button>
        </div>
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
