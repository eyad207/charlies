'use client'

import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import MenuItem from '../components/MenuItem'

const allMenuItems = [
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
    name: 'Familie Meny',
    description:
      '4 kebaber, 2 store pommes frites og 4 brus - perfekt for familien!',
    price: '449,-',
    image: '/burger-with-cola.jpg',
    category: 'Pakker',
  },
  {
    id: '5',
    name: 'Kebab Pizza',
    description:
      'Crispy pizza med kebabkjøtt, løk, paprika, mais og vår spesielle dressing',
    price: '159,-',
    image: '/kebabpizza.webp',
    category: 'Pizza',
  },
  {
    id: '6',
    name: 'Kylling Kebab',
    description: 'Marinert kylling, frisk salat, tomat, agurk og hvitløkssaus',
    price: '139,-',
    image: '/Shawarma - döner kebab.webp',
    category: 'Kebab',
  },
  {
    id: '7',
    name: 'Shawarma',
    description:
      'Tynt skåret marinert kjøtt med orientalske krydder og ferske grønnsaker',
    price: '135,-',
    image: '/Shawarma - döner kebab.webp',
    category: 'Kebab',
  },
  {
    id: '8',
    name: 'Kebab Rull',
    description: 'Vår klassiske kebab rullet i fresh tortilla',
    price: '125,-',
    image: '/Smak´s kebab rull – Smak og gaa.webp',
    category: 'Kebab',
  },
  {
    id: '9',
    name: 'Smash Burger',
    description: 'Dobbel smash burger med ost, salat, tomat og spesialsaus',
    price: '169,-',
    image: '/MSG-Smash-Burger.jpg',
    category: 'Burger',
  },
  {
    id: '10',
    name: 'Spicy Kebab',
    description: 'Ekstra sterk kebab med jalapenos, sterk saus og chilipepper',
    price: '139,-',
    image: '/hot-and-spicy-burgers-bee6c8f.jpg',
    category: 'Kebab',
  },
  {
    id: '11',
    name: 'Kebab med Pita',
    description: 'Klassisk kebab servert i varm pita-brød',
    price: '119,-',
    image: '/Kebab i pita med hjemmelaget kebabsaus.png',
    category: 'Kebab',
  },
  {
    id: '12',
    name: 'Skau Kebab',
    description: 'Vår spesial kebab med ekstra kjøtt og alle tilbehør',
    price: '159,-',
    image: '/Skau-kebab.webp',
    category: 'Tallerken',
  },
]

const categories = ['Alle', 'Kebab', 'Pizza', 'Burger', 'Tallerken', 'Pakker']

export default function Meny() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Alle')
  const [isSearchVisible, setIsSearchVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          if (currentScrollY < lastScrollY || currentScrollY < 200) {
            setIsSearchVisible(true)
          } else if (currentScrollY > lastScrollY && currentScrollY > 300) {
            setIsSearchVisible(false)
          }

          setLastScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const filteredItems = allMenuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === 'Alle' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <Image
            src='/serving kebab.webp'
            alt='Delicious Kebab'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80' />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center text-white z-10 relative px-4'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-block bg-gradient-to-r from-[#FDB714] to-amber-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-lg'
          >
            ✨ NYTT DESIGN
          </motion.div>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-black mb-4 drop-shadow-2xl'>
            Vår{' '}
            <span className='bg-gradient-to-r from-[#FDB714] via-amber-400 to-orange-400 bg-clip-text text-transparent'>
              Meny
            </span>
          </h1>
          <h2 className='text-xl md:text-2xl text-gray-100 drop-shadow-md max-w-3xl mx-auto font-semibold'>
            Utforsk våre deilige retter laget med kjærlighet og de beste
            ingrediensene
          </h2>
        </motion.div>
      </section>

      {/* Search and Filter Section - Sticky */}
      <motion.section
        initial={{ y: 0 }}
        animate={{ y: isSearchVisible ? 0 : -200 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className='py-6 md:py-8 bg-white/95 backdrop-blur-md sticky top-[92px] z-40 shadow-lg border-b-2 border-gray-100'
      >
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            {/* Search Bar */}
            <div className='relative flex-1 w-full'>
              <Search
                className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
                size={22}
              />
              <input
                type='text'
                placeholder='Søk etter retter...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FDB714] focus:ring-2 focus:ring-[#FDB714]/20 transition-all text-gray-900 cursor-text shadow-sm hover:border-[#FDB714]/50'
              />
            </div>

            {/* Category Filter */}
            <div className='flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide'>
              <Filter className='text-gray-600 flex-shrink-0' size={22} />
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#FDB714] to-amber-500 text-black shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='mt-4 text-gray-600 font-medium'
          >
            Viser{' '}
            <span className='font-black text-[#FDB714] text-lg'>
              {filteredItems.length}
            </span>{' '}
            {filteredItems.length === 1 ? 'rett' : 'retter'}
          </motion.div>
        </div>
      </motion.section>

      {/* Menu Items Grid */}
      <section className='py-12 md:py-16'>
        <div className='container mx-auto px-4'>
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-center py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg'
            >
              <div className='text-6xl mb-4'>😢</div>
              <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                Ingen retter funnet
              </h3>
              <p className='text-xl text-gray-500'>
                Prøv å søke etter noe annet eller velg en annen kategori
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
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
          )}
        </div>
      </section>
    </div>
  )
}
