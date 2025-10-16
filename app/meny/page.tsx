'use client'

import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { useState } from 'react'
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

  const filteredItems = allMenuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === 'Alle' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className='bg-white min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-[300px] bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center text-white z-10'
        >
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>Vår Meny</h1>
          <p className='text-xl md:text-2xl text-gray-300'>
            Utforsk våre deilige retter
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className='py-8 bg-gray-50 sticky top-20 md:top-30 z-40 shadow-md'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            {/* Search Bar */}
            <div className='relative flex-1 w-full'>
              <Search
                className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <input
                type='text'
                placeholder='Søk etter retter...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FDB714] transition-all text-gray-900 cursor-text'
              />
            </div>

            {/* Category Filter */}
            <div className='flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide'>
              <Filter className='text-gray-600 flex-shrink-0' size={20} />
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-[#FDB714] text-black shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='mt-4 text-gray-600'
          >
            Viser{' '}
            <span className='font-bold text-[#FDB714]'>
              {filteredItems.length}
            </span>{' '}
            retter
          </motion.p>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-center py-20'
            >
              <p className='text-2xl text-gray-500 mb-4'>Ingen retter funnet</p>
              <p className='text-gray-400'>Prøv å søke etter noe annet</p>
            </motion.div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
              {filteredItems.map((item) => (
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
          )}
        </div>
      </section>
    </div>
  )
}
