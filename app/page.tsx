'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from './components/Carousel'
import MenuItem from './components/MenuItem'
import Button from './components/Button'
import { useState } from 'react'
import {
  Star,
  Clock,
  ShoppingBag,
  TrendingUp,
  Award,
  Users,
} from 'lucide-react'

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
  {
    id: '4',
    name: 'Kebab Tallerken',
    description:
      'Saftig kebabkjøtt servert med pommes frites, salat og valgfri saus',
    price: '149,-',
    image: '/Kebab i pita med hjemmelaget kebabsaus.png',
    category: 'Tallerken',
  },
  {
    id: '5',
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
    <div className='bg-white overflow-hidden'>
      {/* Spacer for Announcement Banner + Header */}
      <div className='h-[40px]' />

      {/* Hero Carousel - Header Overlays */}
      <div className='relative'>
        <Carousel />
      </div>
      {/* Featured Categories - Premium Design */}
      <section className='py-15 bg-gradient-to-b from-white via-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='inline-block px-6 py-2 bg-[#FDB714]/20 text-[#FDB714] rounded-full text-sm font-bold mb-4'
            >
              UTFORSK VÅR MENY
            </motion.span>
            {/* Title with Gradient Animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6'
            >
              <span className='inline-block'>Signatur</span>
              <span className='bg-gradient-to-r from-[#FDB714] via-amber-500 to-orange-400 bg-clip-text text-transparent inline-block'>
                retter
              </span>
            </motion.h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Håndlagde retter med autentiske smaker og de ferskeste
              ingrediensene
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            {[
              {
                title: 'Kebab Klassiker',
                desc: 'Våre mest populære kebab retter',
                image: '/KebabRull.avif',
                color: 'from-orange-500/10 to-red-500/10',
                items: '15+ retter',
              },
              {
                title: 'Pizza Favoritter',
                desc: 'Steinovnsbakte med italiensk stil',
                image: '/pizza.jpg',
                color: 'from-yellow-400/10 to-amber-500/10',
                items: '20+ varianter',
              },
              {
                title: 'Veganske Valg',
                desc: 'Helt plantebaserte delikatesser',
                image:
                  '/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif',
                color: 'from-green-500/10 to-emerald-500/10',
                items: '10+ alternativer',
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className='group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer'
              >
                <div className='relative h-80'>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500' />

                  {/* Animated Border */}
                  <div className='absolute inset-0 border-2 border-[#FDB714] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl' />
                </div>

                <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className='mb-3'
                  >
                    <span className='inline-block px-3 py-1 bg-[#FDB714] text-black text-xs font-bold rounded-full'>
                      {category.items}
                    </span>
                  </motion.div>
                  <h3 className='text-2xl md:text-3xl font-black mb-2'>
                    {category.title}
                  </h3>
                  <p className='text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                    {category.desc}
                  </p>
                  <motion.div className='opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200'>
                    <span className='inline-flex items-center text-[#FDB714] font-bold text-sm'>
                      Utforsk <TrendingUp className='ml-2 w-4 h-4' />
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section with Category Filter - Enhanced & Professional */}
      <section className='py-24 md:py-25 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden'>
        {/* Decorative Background Elements - Enhanced */}
        <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FDB714]/10 to-amber-500/10 rounded-full blur-3xl' />
        <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FDB714]/5 rounded-full blur-3xl' />

        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.1,
              }}
              className='inline-block mb-6'
            >
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-[#FDB714] to-amber-500 rounded-full blur-xl opacity-50'></div>
                <div className='relative bg-gradient-to-br from-[#FDB714] to-amber-500 p-5 rounded-full'>
                  <ShoppingBag className='w-14 h-14 text-black' />
                </div>
              </div>
            </motion.div>

            {/* Title with Gradient Animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6'
            >
              <span className='inline-block'>Populære</span>{' '}
              <span className='bg-gradient-to-r from-[#FDB714] via-amber-500 to-orange-400 bg-clip-text text-transparent inline-block'>
                Retter
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 max-w-4xl mx-auto font-medium'
            >
              Utforsk våre mestselgende retter laget med lidenskap
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='relative w-40 h-2 mx-auto rounded-full overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[#FDB714] to-transparent'></div>
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent'
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Category Filter Bar - Ultra Professional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-wrap justify-center gap-3 md:gap-4 mb-20'
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + index * 0.06,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-sm sm:text-base md:text-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#FDB714] via-amber-500 to-[#FDB714] text-black shadow-2xl shadow-[#FDB714]/40'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#FDB714]/50 shadow-md hover:shadow-lg'
                }`}
              >
                {selectedCategory === category && (
                  <>
                    <motion.div
                      layoutId='categoryHighlight'
                      className='absolute inset-0 bg-gradient-to-r from-[#FDB714] via-amber-500 to-[#FDB714] rounded-2xl -z-10'
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                    {/* Glow effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-[#FDB714] to-amber-500 rounded-2xl blur-md -z-20 opacity-60'></div>
                  </>
                )}
                <span className='relative z-10'>{category}</span>
                {selectedCategory === category && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    className='absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white'
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items Grid - Professional Layout */}
          <motion.div
            layout
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-7'
          >
            {filteredMenuItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                <MenuItem
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  isVegetarian={item.isVegetarian}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* View Full Menu CTA - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='flex justify-center text-center mt-20'
          >
            <Link href='/meny'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  className='shadow-2xl hover:shadow-3xl transition-shadow duration-300'
                >
                  <span className='flex items-center gap-2'>
                    Se Full Meny
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Delivery Section - Completely Redesigned */}
      <section className='py-20 md:py-25 bg-gradient-to-br relative overflow-hidden'>
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className='absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className='absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
        />

        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='inline-block px-6 py-2 bg-[#FDB714] text-black rounded-full text-sm font-bold mb-6'
            >
              RASK & PÅLITELIG
            </motion.span>
            <h2 className='text-5xl md:text-7xl font-black text-black mb-6'>
              Mat Levert på
              <span className='block text-[#FDB714] mt-2'>Rekordtid</span>
            </h2>
            <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto'>
              Bestill nå og få mat på døren på 20-30 minutter
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8 mb-16'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className='relative group'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#FDB714] to-[#E5A613] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500' />
              <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-[#FDB714]/30 hover:border-[#FDB714] transition-all duration-500'>
                <div className='flex items-center justify-between mb-6'>
                  <Clock className='w-16 h-16 text-[#FDB714]' />
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className='px-4 py-2 bg-[#FDB714] text-white rounded-full text-sm font-bold'
                  >
                    POPULÆRT
                  </motion.span>
                </div>
                <h3 className='text-3xl md:text-4xl font-black text-white mb-4'>
                  Hjemlevering
                </h3>
                <p className='text-gray-300 text-lg mb-6'>
                  Mat levert på døren din på 20-30 minutter. Spor bestillingen
                  din i sanntid.
                </p>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='flex-1 h-2 bg-gray-700 rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className='h-full bg-gradient-to-r from-[#FDB714] to-[#E5A613]'
                    />
                  </div>
                  <span className='text-[#FDB714] font-bold text-xl'>
                    20-30 min
                  </span>
                </div>
                <ul className='space-y-3 mb-8'>
                  {[
                    'Gratis levering over 200,-',
                    'Spor bestillingen live',
                    'Kontaktløs levering',
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className='flex items-center text-gray-300'
                    >
                      <span className='w-2 h-2 bg-[#FDB714] rounded-full mr-3' />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full bg-gradient-to-r bg-[#FDB714]  text-white font-bold py-4 rounded-2xl hover:shadow-2xl transition-all duration-300'
                >
                  Bestill Hjemlevering
                </motion.button>
              </div>
            </motion.div>

            {/* Takeaway Option */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className='relative group'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#FDB714] to-[#E5A613] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500' />
              <div className='relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-[#FDB714]/30 hover:border-[#FDB714] transition-all duration-500'>
                <div className='flex items-center justify-between mb-6'>
                  <ShoppingBag className='w-16 h-16 text-[#FDB714]' />
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className='px-4 py-2 bg-[#FDB714] text-white rounded-full text-sm font-bold'
                  >
                    RASKEST
                  </motion.span>
                </div>
                <h3 className='text-3xl md:text-4xl font-black text-white mb-4'>
                  Hent Selv
                </h3>
                <p className='text-gray-300 text-lg mb-6'>
                  Hent maten klar på bare 10 minutter. Perfekt når du er i
                  farta!
                </p>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='flex-1 h-2 bg-gray-700 rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className='h-full bg-gradient-to-r from-[#FDB714] to-[#E5A613]'
                    />
                  </div>
                  <span className='text-[#FDB714] font-bold text-xl'>
                    10 min
                  </span>
                </div>
                <ul className='space-y-3 mb-8'>
                  {[
                    '15% rabatt på takeaway',
                    'Ingen ventetid',
                    'Alltid fersk og varm',
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className='flex items-center text-gray-300'
                    >
                      <span className='w-2 h-2 bg-[#FDB714] rounded-full mr-3' />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full bg-gradient-to-r from-[#FDB714] to-[#E5A613] text-white font-bold py-4 rounded-2xl hover:shadow-2xl transition-all duration-300'
                >
                  Bestill Takeaway
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Services Section - Wolt & Foodora - Redesigned */}
      <section className='py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden'>
        {/* Decorative Elements */}
        <div className='absolute top-0 left-1/4 w-64 h-64 bg-[#FDB714]/10 rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-1/4 w-64 h-64 bg-[#E5A613]/10 rounded-full blur-3xl' />

        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='inline-block px-6 py-2 bg-gradient-to-r from-[#FDB714]/20 to-[#E5A613]/20 text-gray-900 rounded-full text-sm font-bold mb-6'
            >
              BESTILL RASKT
            </motion.span>
            <h2 className='text-4xl md:text-6xl font-black text-gray-900 mb-6'>
              Leveringspartnere
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Bestill din favorittmat gjennom våre pålitelige partnere
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='max-w-6xl mx-auto'
          >
            <div className='grid md:grid-cols-2 gap-8'>
              {/* Wolt Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='group relative'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#14edfd] to-[#14edfd] rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500' />
                <div className='relative bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-[#14edfd]/20 group-hover:border-[#14edfd]/40'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className='w-32 h-32 md:w-40 md:h-40 relative mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#14edfd]/20 group-hover:ring-[#14edfd]/40 transition-all duration-500'
                  >
                    <Image
                      src='/wolt.jpg'
                      alt='Wolt'
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-700'
                    />
                  </motion.div>

                  <h3 className='text-3xl md:text-4xl font-black text-gray-900 text-center mb-4'>
                    Bestill på Wolt
                  </h3>
                  <p className='text-gray-600 text-center mb-8 text-lg'>
                    Rask levering direkte til døren din
                  </p>

                  <div className='space-y-3 mb-8'>
                    {[
                      'Spor ordre i sanntid',
                      'Sikker betaling',
                      'Tusenvis av restauranter',
                    ].map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className='flex items-center gap-3'
                      >
                        <div className='w-6 h-6 bg-gradient-to-r from-[#14fdfd] to-[#13b0e5] rounded-full flex items-center justify-center'>
                          <span className='text-white text-xs'>✓</span>
                        </div>
                        <span className='text-gray-700'>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-full bg-gradient-to-r from-[#14fdfd] to-[#13b0e5]  text-white font-black py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 text-lg group-hover:from-[#14e2fd] group-hover:to-[#1371e5]'
                  >
                    <span className='flex items-center justify-center gap-2'>
                      Bestill Nå
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Foodora Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='group relative'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500' />
                <div className='relative bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-pink-100 group-hover:border-pink-300'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className='w-32 h-32 md:w-40 md:h-40 relative mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-pink-100 group-hover:ring-pink-300 transition-all duration-500'
                  >
                    <Image
                      src='/foodora.png'
                      alt='Foodora'
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-700'
                    />
                  </motion.div>

                  <h3 className='text-3xl md:text-4xl font-black text-gray-900 text-center mb-4'>
                    Bestill på Foodora
                  </h3>
                  <p className='text-gray-600 text-center mb-8 text-lg'>
                    Din favorittmat levert med et smil
                  </p>

                  <div className='space-y-3 mb-8'>
                    {[
                      'Live ordresporing',
                      'Fleksible betalinger',
                      'Premium utvalg',
                    ].map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className='flex items-center gap-3'
                      >
                        <div className='w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center'>
                          <span className='text-white text-xs'>✓</span>
                        </div>
                        <span className='text-gray-700'>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-black py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 text-lg group-hover:from-pink-500 group-hover:to-rose-500'
                  >
                    <span className='flex items-center justify-center gap-2'>
                      Bestill Nå
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Premium Redesign */}
      <section className='py-24 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden'>
        {/* Animated Background Patterns */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute top-0 left-0 w-full h-full'
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(253, 183, 20, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(255, 140, 0, 0.3) 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute top-20 left-10 w-32 h-32 bg-[#FDB714]/20 rounded-full blur-2xl'
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute bottom-20 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl'
        />

        <div className='container mx-auto px-4 text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className='inline-block mb-8'
            >
              <span className='px-6 py-3 bg-[#FDB714] text-black rounded-full text-sm font-black uppercase tracking-wider shadow-2xl'>
                🔥 Sulten? Vi har løsningen!
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight'
            >
              <span className='block'>Klar for den</span>
              <span className='block bg-gradient-to-r from-[#FDB714] via-orange-500 to-[#FDB714] text-transparent bg-clip-text'>
                BESTE KEBABEN?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className='text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed'
            >
              Opplev smaken av tradisjon og kvalitet. Bestill nå og få mat på
              døren på under 30 minutter!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-6 justify-center items-center'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href='/meny'>
                  <button className='group relative px-10 py-5 bg-gradient-to-r from-[#FDB714] via-orange-500 to-[#FDB714] text-black font-black rounded-2xl text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(253,183,20,0.6)] transition-all duration-300 overflow-hidden'>
                    <span className='relative z-10 flex items-center gap-3'>
                      <ShoppingBag className='w-6 h-6' />
                      Bestill Nå
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-orange-500 to-[#FDB714]'
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className='group px-10 py-5 bg-white/10 backdrop-blur-md text-white font-black rounded-2xl text-lg border-2 border-white/30 hover:bg-white/20 hover:border-[#FDB714] transition-all duration-300 shadow-xl'>
                  <span className='flex items-center gap-3'>
                    <Clock className='w-6 h-6' />
                    Ring: +47 123 45 678
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className='mt-16 flex flex-wrap justify-center gap-8 items-center'
            >
              {[
                { icon: Award, text: 'Siden 1995' },
                { icon: Star, text: '4.9/5 Rating' },
                { icon: Users, text: '50,000+ Kunder' },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className='flex items-center gap-3 text-gray-400'
                >
                  <item.icon className='w-5 h-5 text-[#FDB714]' />
                  <span className='text-sm font-semibold'>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave Effect */}
        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDB714]/10 to-transparent' />
      </section>
    </div>
  )
}
