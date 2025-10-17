'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from './components/Carousel'
import MenuItem from './components/MenuItem'
import Button from './components/Button'
import { useState } from 'react'

const menuItems = [
  {
    id: '1',
    name: 'Klassisk Kebab',
    description:
      'Saftig kebabkjøtt, fersk salat, tomat, agurk, rødløk og vår hemmelige saus',
    price: '129,-',
    image: '/KebabRull.avif',
    category: 'Kebab',
  },
  {
    id: '2',
    name: 'Vegetar Kebab',
    description:
      'Grillet grønnsaker, falafel, fersk salat og hjemmelaget yoghurtsaus',
    price: '119,-',
    image: '/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif',
    isVegetarian: true,
    category: 'Kebab',
  },
  {
    id: '3',
    name: 'Kebab Tallerken',
    description:
      'Saftig kebabkjøtt servert med pommes frites, salat og valgfri saus',
    price: '149,-',
    image: '/Kebab i pita med hjemmelaget kebabsaus.png',
    category: 'Tallerken',
  },
]

const categories = ['Alle', 'Kebab', 'Pizza', 'Tallerken', 'Pakker']

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Alle')

  const filteredMenuItems = menuItems.filter((item) =>
    selectedCategory === 'Alle' ? true : item.category === selectedCategory
  )

  return (
    <div className='bg-white'>
      {/* Hero Carousel */}
      <div className='flex justify-center  '>
        <Carousel />
      </div>

      {/* Menu Section with Category Filter */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Vår Meny
            </h2>
            <p className='text-xl text-gray-600 mb-4'>
              Utforsk våre deilige retter laget med lidenskap
            </p>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
          </motion.div>

          {/* Category Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-wrap justify-center gap-3 mb-12'
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#FDB714] text-black shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredMenuItems.map((item) => (
              <MenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                isVegetarian={item.isVegetarian}
              />
            ))}
          </div>

          {/* View Full Menu CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex justify-center text-center mt-12'
          >
            <Link href='/meny'>
              <Button size='lg'>Se Full Meny</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Delivery Section - NEW */}
      <section className='md:py-20 bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className='px-1 mx-auto'>
          {/* Delivery Section - Full Width with Text Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative h-150 sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-16'
          >
            <Image
              src='/Skau-kebab.webp'
              alt='Charlie Kebab Levering'
              fill
              className='object-cover'
            />
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70' />

            {/* Text Content Overlay - Centered */}
            <div className='absolute inset-0 flex items-center justify-center px-6 sm:px-12 md:px-16 py-8'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='max-w-3xl text-center space-y-4 sm:space-y-6'
              >
                <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='text-5xl sm:text-6xl md:text-7xl font-black leading-tight text-white'
                >
                  Rask & Enkel
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDB714] leading-relaxed'
                >
                  Levering på 20-30 minutter eller hent selv på 10 minutter
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className='text-lg sm:text-xl text-gray-100 leading-relaxed'
                >
                  Bestill online, ring oss, eller kom forbi. Vi er åpen daglig
                  11:00-23:00.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Services Section - Wolt & Foodora */}
      <section className='py-16 md:py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Bestill Gjennom
            </h2>
            <p className='text-xl text-gray-600 mb-4'>
              Rask og enkel bestilling via dine favorittapper
            </p>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {/* Wolt */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className='group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FDB714]/50'
            >
              <div className='flex flex-col items-center text-center space-y-6'>
                <div className='w-32 h-32 relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300'>
                  <Image
                    src='/wolt.jpg'
                    alt='Wolt'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='space-y-3'>
                  <h3 className='text-2xl font-bold text-gray-900'>Wolt</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Bestill gjennom Wolt og få maten levert rett hjem til deg.
                    Spor bestillingen din i sanntid.
                  </p>
                  <div className='flex items-center justify-center gap-2 text-sm text-gray-500'>
                    <span className='flex items-center gap-1'>
                      <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                      Levering: 25-35 min
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full bg-gradient-to-r bg-cyan-600 text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300'
                >
                  Bestill på Wolt
                </motion.button>
              </div>
            </motion.div>

            {/* Foodora */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className='group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FDB714]/50'
            >
              <div className='flex flex-col items-center text-center space-y-6'>
                <div className='w-32 h-32 relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300'>
                  <Image
                    src='/foodora.png'
                    alt='Foodora'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='space-y-3'>
                  <h3 className='text-2xl font-bold text-gray-900'>Foodora</h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Enkel bestilling gjennom Foodora. Fraktfri over 300 kr. Rask
                    levering til døren.
                  </p>
                  <div className='flex items-center justify-center gap-2 text-sm text-gray-500'>
                    <span className='flex items-center gap-1'>
                      <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                      Levering: 25-35 min
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full bg-gradient-to-r bg-pink-600 text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300'
                >
                  Bestill på Foodora
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden'>
        {/* Animated Background Flames */}
        <div className='absolute inset-0 opacity-20'>
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute'
              style={{
                left: `${i * 10}%`,
                bottom: '-10px',
                width: '60px',
                height: '80px',
              }}
              animate={{
                y: [0, -30, 0],
                scaleY: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <div className='w-full h-full bg-gradient-to-t from-[#FDB714] via-red-500 to-transparent rounded-t-full blur-md'></div>
            </motion.div>
          ))}
        </div>

        <div className='container mx-auto px-4 text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Sulten? Bestill Nå!
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Opplev den beste kebaben i byen. Rask levering eller hent selv.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' variant='primary'>
                Bestill Online
              </Button>
              <Button size='lg' variant='outline'>
                Ring Oss: +47 123 45 678
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
