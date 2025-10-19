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
          y: -6,
          scale: 1.02,
          transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
        }}
        onClick={() => setIsModalOpen(true)}
        className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 cursor-pointer flex flex-col h-full group'
      >
        {image && (
          <div className='relative h-40 md:h-48 lg:h-56 overflow-hidden bg-gray-100'>
            <Image
              src={image}
              alt={name}
              fill
              className='object-cover transition-transform duration-500 ease-out group-hover:scale-110'
            />
            {isVegetarian && (
              <div className='absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold shadow-md'>
                🌱 Vegetar
              </div>
            )}
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>
        )}

        <div className='p-4 md:p-5 lg:p-6 flex flex-col flex-grow'>
          <div className='flex justify-between items-start mb-2'>
            <h3 className='text-lg md:text-xl font-bold text-gray-900 line-clamp-1 flex-1 pr-2'>
              {name}
            </h3>
            <span className='text-xl md:text-2xl font-bold text-[#FDB714] whitespace-nowrap'>
              {price}
            </span>
          </div>

          <p className='text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 flex-grow line-clamp-2'>
            {description}
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleQuickAdd}
            className='w-full bg-[#FDB714] text-black font-semibold py-2.5 md:py-3 rounded-md hover:bg-[#E5A613] transition-all duration-300 cursor-pointer mt-auto text-sm md:text-base shadow-sm hover:shadow-md'
          >
            Legg til
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
