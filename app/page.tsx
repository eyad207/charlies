'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from './components/Carousel'
import MenuItem from './components/MenuItem'
import Button from './components/Button'
import { useState, useEffect } from 'react'
import {
  Star,
  Clock,
  ShoppingBag,
  TrendingUp,
  Award,
  Users,
  Gift,
  Percent,
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
    image: '/Kebab i pita med hjemmelaget kebabsaus.jpg',
    category: 'Tallerken',
  },
]

const categories = ['Alle', 'Kebab', 'Pizza', 'Tallerken', 'Pakker']

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Alle')
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  const filteredMenuItems = menuItems.filter((item) =>
    selectedCategory === 'Alle' ? true : item.category === selectedCategory
  )

  const reviews = [
    {
      name: 'Lars Hansen',
      rating: 5,
      text: 'Fantastisk kebab! Alltid fersk og god mat. Anbefales på det sterkeste!',
      date: '2 uker siden',
      avatar: 'LH',
    },
    {
      name: 'Maria Olsen',
      rating: 5,
      text: 'Best kebab i området! Rask levering og hyggelig personale.',
      date: '1 måned siden',
      avatar: 'MO',
    },
    {
      name: 'Erik Johansen',
      rating: 4,
      text: 'Veldig god mat og stor porsjon. Kommer garantert tilbake!',
      date: '3 uker siden',
      avatar: 'EJ',
    },
    {
      name: 'Sofie Berg',
      rating: 5,
      text: 'Herlig pizza og kebab! Alltid konsistent kvalitet.',
      date: '1 uke siden',
      avatar: 'SB',
    },
    {
      name: 'Thomas Andersen',
      rating: 5,
      text: 'Utrolig god mat! Rask service og hyggelig betjening. Anbefales!',
      date: '2 måneder siden',
      avatar: 'TA',
    },
    {
      name: 'Nina Kristiansen',
      rating: 4,
      text: 'God mat til rimelig pris. Perfekt for en rask lunsj!',
      date: '3 uker siden',
      avatar: 'NK',
    },
  ]

  const campaigns = [
    {
      title: 'Familie Pakke',
      discount: '100kr',
      description:
        '4 kebaber + 2 store pommes frites + 4 brus = 449kr (spar 100kr!)',
      validUntil: 'Alltid tilgjengelig',
      icon: <Gift className='w-8 h-8' />,
      image: '/burger-with-cola.jpg',
    },
    {
      title: 'Lykkelig Time',
      discount: '30%',
      description: '30% rabatt på alle drikker mellom 15:00-17:00',
      validUntil: 'Mandag - Fredag',
      icon: <Clock className='w-8 h-8' />,
      image: '/kebabpizza.webp',
    },
    {
      title: 'Student Rabatt',
      discount: '15%',
      description: 'Studenter får 15% rabatt med gyldig studentbevis',
      validUntil: 'Hele året',
      icon: <Percent className='w-8 h-8' />,
      image: '/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif',
    },
    {
      title: 'Student Rabatt',
      discount: '15%',
      description: 'Studenter får 15% rabatt med gyldig studentbevis',
      validUntil: 'Hele året',
      icon: <Percent className='w-8 h-8' />,
      image: '/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif',
    },
  ]
  // Auto-scroll reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <div className='relative bg-white overflow-hidden'>
      {/* Background Image */}
      <div className='fixed inset-0 z-0'>
        <Image
          src='/charlies_background.png'
          alt='Background'
          fill
          className='object-contain pl-300 pt-40 opacity-100'
          priority
        />
      </div>

      {/* Content Wrapper */}
      <div className='relative z-10'>
        {/* Spacer for Announcement Banner + Header */}
        <div className='h-[40px]' />

        {/* Hero Carousel - Header Overlays */}
        <div className='relative pt-25 md:pt-30'>
          <Carousel />
        </div>

        {/* Current Campaigns */}
        <section className='py-10 '>
          <div className='container mx-auto '>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                Aktive Kampanjer
              </h2>
              <p className='text-xl text-gray-600 mb-4'>
                Spar penger med våre fantastiske tilbud
              </p>
              <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {campaigns.map((campaign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='relative bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-[#FDB714]'
                >
                  {/* Image Background with Overlay */}
                  <div className='relative h-64 overflow-hidden'>
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80'></div>

                    {/* Content on Image */}
                    <div className='relative h-full flex flex-col justify-between p-6 text-white'>
                      <div>
                        <div className='flex items-center justify-between mb-4'>
                          <div className='bg-[#FDB714] p-3 rounded-lg shadow-lg'>
                            <div className='text-black'>{campaign.icon}</div>
                          </div>
                          <div className='text-right'>
                            <div className='text-5xl font-bold text-[#FDB714]'>
                              {campaign.discount}
                            </div>
                            <div className='text-xs uppercase tracking-wider font-semibold text-white'>
                              Rabatt
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className='text-2xl font-bold mb-2'>
                          {campaign.title}
                        </h3>
                        <p className='text-gray-100 text-sm leading-relaxed mb-4'>
                          {campaign.description}
                        </p>
                        <div className='flex items-center justify-between'>
                          <span className='text-xs text-gray-300 flex items-center gap-2'>
                            <Clock className='w-4 h-4' />
                            {campaign.validUntil}
                          </span>
                          <Button variant='primary' size='sm'>
                            Bestill Nå
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Menu Section with Category Filter - Enhanced & Professional */}
        <section className='py-10 md:py-20 bg-gradient-to-br relative overflow-hidden'>
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className='absolute top-20 left-20 w-96 h-96 '
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className='absolute bottom-20 right-20 w-96 h-96 '
          />

          <div className='container mx-auto px-4 relative z-10 bg-gradient-to-br'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-12'
            >
              {/* Title with Gradient Animation */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4'
              >
                <span className='inline-block'>Populære</span>{' '}
                <span className='bg-gradient-to-r from-[#FDB714] via-amber-500 to-orange-400 bg-clip-text text-transparent inline-block'>
                  Retter
                </span>
              </motion.h2>
            </motion.div>

            {/* Category Filter Bar - Ultra Professional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='mb-20 overflow-x-auto scrollbar-hide'
            >
              <div className='flex justify-start md:justify-center gap-3 md:gap-4 px-4 min-w-max md:min-w-0 py-2'>
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-sm sm:text-base md:text-lg transition-all duration-300 cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-[#FDB714] via-amber-500 to-[#FDB714] text-black shadow-2xl shadow-[#FDB714]/40'
                        : 'bg-white/95 backdrop-blur-sm text-gray-700 hover:bg-white border-2 border-gray-200 hover:border-[#FDB714]/50 shadow-md hover:shadow-lg'
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
              </div>
            </motion.div>

            {/* Menu Items Grid - Professional Layout with Bigger Cards on Desktop */}
            <div className='flex justify-center'>
              <motion.div
                layout
                className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8'
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
                    className='w-full max-w-sm'
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
            </div>

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
        <section className='py-10 md:py-20 bg-gradient-to-br relative overflow-hidden'>
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
              className='text-center mb-12 md:mb-16'
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FDB714] to-amber-500 text-black rounded-full text-sm font-bold mb-6 shadow-lg'
              >
                <TrendingUp className='w-4 h-4' />
                RASK & PÅLITELIG
              </motion.span>
              <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-4'>
                Mat Levert på
                <span className='block bg-gradient-to-r from-[#FDB714] via-amber-500 to-orange-400 bg-clip-text text-transparent mt-2'>
                  Korttid
                </span>
              </h2>
              <h3 className='text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-semibold'>
                Bestill nå → 20-30 minutter
              </h3>
            </motion.div>

            {/* Delivery Cards - Image Based */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16'>
              {/* Home Delivery */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className='group relative rounded-3xl overflow-hidden shadow-2xl h-[450px] md:h-[500px]'
              >
                {/* Background Image */}
                <div className='absolute inset-0'>
                  <Image
                    src='/kebabpizza.webp'
                    alt='Hjemlevering'
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent' />
                </div>

                {/* Content */}
                <div className='relative z-10 h-full flex flex-col justify-end p-6 md:p-8'>
                  {/* Icon Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className='bg-gradient-to-br from-[#FDB714] to-amber-500 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xl'
                  >
                    <Clock className='w-7 h-7 md:w-8 md:h-8 text-black' />
                  </motion.div>

                  {/* Title */}
                  <h2 className='text-4xl md:text-5xl font-black text-white mb-2'>
                    Hjemlevering
                  </h2>

                  {/* Subtitle */}
                  <h3 className='text-xl md:text-2xl text-[#FDB714] font-bold mb-6 flex items-center gap-2'>
                    <span>20-30 minutter</span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className='inline-block w-2 h-2 bg-[#FDB714] rounded-full'
                    />
                  </h3>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-gradient-to-r from-[#FDB714] to-amber-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-3 w-fit group/btn'
                  >
                    <span>Bestill Nå</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className='text-xl'
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Takeaway */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className='group relative rounded-3xl overflow-hidden shadow-2xl h-[450px] md:h-[500px]'
              >
                {/* Background Image */}
                <div className='absolute inset-0'>
                  <Image
                    src='/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif'
                    alt='Hjemlevering'
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent' />
                </div>

                {/* Content */}
                <div className='relative z-10 h-full flex flex-col justify-end p-6 md:p-8'>
                  {/* Icon Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className='bg-gradient-to-br from-[#FDB714] to-amber-500 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xl'
                  >
                    <ShoppingBag className='w-7 h-7 md:w-8 md:h-8 text-black' />
                  </motion.div>

                  {/* Title */}
                  <h2 className='text-4xl md:text-5xl font-black text-white mb-2'>
                    Hent Selv
                  </h2>

                  {/* Subtitle */}
                  <h3 className='text-xl md:text-2xl text-[#FDB714] font-bold mb-6 flex items-center gap-2'>
                    <span>Klar på 10 min</span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                      className='inline-block w-2 h-2 bg-[#FDB714] rounded-full'
                    />
                  </h3>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-gradient-to-r from-[#FDB714] to-amber-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-3 w-fit group/btn'
                  >
                    <span>Bestill Nå</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 0.3,
                      }}
                      className='text-xl'
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Delivery Services Section - Wolt & Foodora - Redesigned */}
        <section className='py-10 md:py-20 bg-gradient-to-br relative overflow-hidden'>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='max-w-6xl mx-auto '
            >
              <div className='grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8'>
                {/* Wolt Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='group relative'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-[#14edfd] to-[#14edfd] rounded-2xl md:rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500' />
                  <div className='relative bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-[#14edfd]/20 group-hover:border-[#14edfd]/40 h-full flex flex-col'>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className='w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 relative mx-auto mb-4 sm:mb-6 md:mb-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#14edfd]/20 group-hover:ring-[#14edfd]/40 transition-all duration-500'
                    >
                      <Image
                        src='/wolt.jpg'
                        alt='Wolt'
                        fill
                        className='object-cover group-hover:scale-110 transition-transform duration-700'
                      />
                    </motion.div>

                    <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 text-center mb-2 sm:mb-3 md:mb-4'>
                      Wolt
                    </h3>
                    <p className='text-gray-600 text-center mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg'>
                      Rask levering til døren
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='cursor-pointer w-full bg-gradient-to-r from-[#14fdfd] to-[#13b0e5] text-white font-black py-2 sm:py-3 md:py-4 rounded-xl md:rounded-2xl hover:shadow-2xl transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg group-hover:from-[#14e2fd] group-hover:to-[#1371e5]'
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
                  <div className='absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl md:rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500' />
                  <div className='relative bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-pink-100 group-hover:border-pink-300 h-full flex flex-col'>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        delay: 0.1,
                      }}
                      className='w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 relative mx-auto mb-4 sm:mb-6 md:mb-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-4 ring-pink-100 group-hover:ring-pink-300 transition-all duration-500'
                    >
                      <Image
                        src='/foodora.png'
                        alt='Foodora'
                        fill
                        className='object-cover group-hover:scale-110 transition-transform duration-700'
                      />
                    </motion.div>

                    <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 text-center mb-2 sm:mb-3 md:mb-4'>
                      Foodora
                    </h3>
                    <p className='text-gray-600 text-center mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg'>
                      Mat levert med et smil
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='cursor-pointer w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-black py-2 sm:py-3 md:py-4 rounded-xl md:rounded-2xl hover:shadow-2xl transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg group-hover:from-pink-500 group-hover:to-rose-500'
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
        {/* Featured Categories - Premium Design */}
        <section className='py-10 md:py-20 bg-gradient-to-br relative overflow-hidden'>
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className='absolute top-20 left-20 w-96 h-96 '
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className='absolute bottom-20 right-20 w-96 h-96  '
          />

          <div className='container mx-auto px-4 relative z-10'>
            {/* Google Reviews Carousel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='mb-16 overflow-hidden'
            >
              <div className='relative bg-gradient-to-br rounded-3xl p-8 md:p-12  shadow-xl'>
                {/* Google Reviews Header */}
                <div className='flex items-center justify-center gap-4 md:gap-6 mb-8 flex-wrap'>
                  <div className='flex items-center gap-3'>
                    <div className='w-14 h-14 bg-white rounded-lg shadow-md flex items-center justify-center'>
                      <svg viewBox='0 0 24 24' className='w-8 h-8'>
                        <path
                          fill='#4285F4'
                          d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                        />
                        <path
                          fill='#34A853'
                          d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                        />
                        <path
                          fill='#FBBC05'
                          d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                        />
                        <path
                          fill='#EA4335'
                          d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                        />
                      </svg>
                    </div>
                    <div className='text-left'>
                      <div className='text-base md:text-lg font-bold text-gray-900'>
                        Google
                      </div>
                      <div className='text-sm text-gray-600'>Anmeldelser</div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-4xl md:text-5xl font-black text-gray-900'>
                      4.2
                    </span>
                    <div className='flex'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 md:w-7 md:h-7 ${
                            i < 4
                              ? 'text-[#FDB714] fill-[#FDB714]'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className='text-base md:text-lg text-gray-600 font-semibold'>
                    (650+ anmeldelser)
                  </span>
                </div>

                {/* Reviews Carousel - Card by Card */}
                <div className='relative overflow-hidden px-2 sm:px-4'>
                  <motion.div
                    key={currentReviewIndex}
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.95 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className='flex justify-center'
                  >
                    <div className='w-full max-w-3xl bg-gradient-to-br from-white/95 via-gray-50/95 to-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 min-h-[280px] flex flex-col'>
                      <div className='flex items-start gap-4 sm:gap-6 mb-6'>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.2,
                            type: 'spring',
                            stiffness: 200,
                          }}
                          className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#FDB714] via-amber-500 to-orange-400 rounded-full flex items-center justify-center text-white font-black text-lg sm:text-xl flex-shrink-0 shadow-lg'
                        >
                          {reviews[currentReviewIndex].avatar}
                        </motion.div>
                        <div className='flex-1 min-w-0'>
                          <h3 className='font-black text-gray-900 text-xl sm:text-2xl mb-2'>
                            {reviews[currentReviewIndex].name}
                          </h3>
                          <div className='flex items-center gap-2 mb-2'>
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3 + i * 0.05 }}
                              >
                                <Star
                                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                                    i < reviews[currentReviewIndex].rating
                                      ? 'text-[#FDB714] fill-[#FDB714]'
                                      : 'text-gray-300'
                                  }`}
                                />
                              </motion.div>
                            ))}
                          </div>
                          <span className='text-sm sm:text-base text-gray-500 font-medium'>
                            {reviews[currentReviewIndex].date}
                          </span>
                        </div>
                      </div>
                      <div className='flex-1 flex items-center'>
                        <h3 className='text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium'>
                          &ldquo;{reviews[currentReviewIndex].text}&rdquo;
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                  {/* Pagination Dots */}
                  <div className='flex justify-center gap-2 sm:gap-3 mt-8'>
                    {reviews.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentReviewIndex(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          index === currentReviewIndex
                            ? 'bg-gradient-to-r from-[#FDB714] to-amber-500 w-10 sm:w-12 h-3'
                            : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Seamless Section Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className='mt-20 mb-8 relative'
            >
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t-2 border-gray-200'></div>
              </div>
              <div className='relative flex justify-center'>
                <span className='px-6 py-3 bg-gradient-to-r from-[#FDB714] to-amber-500 text-white font-black rounded-full shadow-xl text-sm'>
                  UTFORSK HELE MENYEN
                </span>
              </div>
            </motion.div>
          </div>
        </section>
        {/* CTA Section - Premium Redesign */}
        <section className='py-10 md:py-20 bg-gradient-to-br text-white relative overflow-hidden'>
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
                <span className='block text-black'>Klar for den</span>
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
                className='text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed'
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
                    <button className='cursor-pointer group relative px-10 py-5 bg-gradient-to-r from-[#FDB714] via-orange-500 to-[#FDB714] text-black font-black rounded-2xl text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(253,183,20,0.6)] transition-all duration-300 overflow-hidden'>
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
                  <button className=' cursor-pointer group px-10 py-5 bg-white/10 backdrop-blur-md text-black font-black rounded-2xl text-lg border-2 border-white/30 hover:bg-white/20 hover:border-[#FDB714] transition-all duration-300 shadow-xl'>
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
    </div>
  )
}
