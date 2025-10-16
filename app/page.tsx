'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from './components/Carousel'
import MenuItem from './components/MenuItem'
import Button from './components/Button'
import { Flame, Clock, Award, Heart } from 'lucide-react'

const menuItems = [
  {
    id: '1',
    name: 'Klassisk Kebab',
    description:
      'Saftig kebabkjøtt, fersk salat, tomat, agurk, rødløk og vår hemmelige saus',
    price: '129,-',
    image: '/KebabRull.avif',
  },
  {
    id: '2',
    name: 'Vegetar Kebab',
    description:
      'Grillet grønnsaker, falafel, fersk salat og hjemmelaget yoghurtsaus',
    price: '119,-',
    image: '/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif',
    isVegetarian: true,
  },
  {
    id: '3',
    name: 'Kebab Tallerken',
    description:
      'Saftig kebabkjøtt servert med pommes frites, salat og valgfri saus',
    price: '149,-',
    image: '/Kebab i pita med hjemmelaget kebabsaus.png',
  },
  {
    id: '4',
    name: 'Familie Meny',
    description:
      '4 kebaber, 2 store pommes frites og 4 brus - perfekt for familien!',
    price: '449,-',
    image: '/burger-with-cola.jpg',
  },
  {
    id: '5',
    name: 'Kebab Pizza',
    description:
      'Crispy pizza med kebabkjøtt, løk, paprika, mais og vår spesielle dressing',
    price: '159,-',
    image: '/kebabpizza.webp',
  },
  {
    id: '6',
    name: 'Kylling Kebab',
    description: 'Marinert kylling, frisk salat, tomat, agurk og hvitløkssaus',
    price: '139,-',
    image: '/Shawarma - döner kebab.webp',
  },
]

const features = [
  {
    icon: <Flame className='w-12 h-12' />,
    title: 'Grillet til Perfeksjon',
    description: 'Hver kebab grilles med presisjon for den perfekte smaken',
    image: '/hot-and-spicy-burgers-bee6c8f.jpg',
  },
  {
    icon: <Clock className='w-12 h-12' />,
    title: 'Rask Servering',
    description: 'Din mat er klar på under 10 minutter',
    image: '/Skau-kebab.webp',
  },
  {
    icon: <Award className='w-12 h-12' />,
    title: 'Prisbelønt Kvalitet',
    description: 'Kåret til beste kebab i Oslo 3 år på rad',
    image: '/MSG-Smash-Burger.jpg',
  },
  {
    icon: <Heart className='w-12 h-12' />,
    title: 'Laget med Kjærlighet',
    description: 'Vi bruker kun de beste og ferskeste ingrediensene',
    image: '/Smak´s kebab rull – Smak og gaa.webp',
  },
]

export default function Home() {
  return (
    <div className='bg-white'>
      {/* Hero Carousel */}
      <Carousel />

      {/* Menu Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Vår Meny
            </h2>
            <p className='text-xl text-gray-600 mb-4'>
              Utforsk våre deilige retter laget med lidenskap
            </p>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {menuItems.map((item) => (
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
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12 md:mb-24'
          >
            <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-6'>
              Hvorfor Velge Oss?
            </h2>
            <p className='text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2'>
              Vi tilbyr mer enn bare mat - vi tilbyr en opplevelse av autentisk
              og deilig kebab
            </p>
          </motion.div>

          <div className='space-y-12 md:space-y-20'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-6 md:gap-8 lg:gap-12`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className='w-full md:flex-1 relative h-48 md:h-64 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl'
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent'></div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className='w-full md:flex-1'
                >
                  <div className='flex items-center gap-3 md:gap-4 mb-3 md:mb-4'>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className='flex-shrink-0 bg-[#FDB714] rounded-full p-3 md:p-4 text-white shadow-lg'
                    >
                      <div className='scale-125 md:scale-150'>
                        {feature.icon}
                      </div>
                    </motion.div>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900'>
                      {feature.title}
                    </h3>
                  </div>

                  <div className='w-8 md:w-12 h-1 bg-[#FDB714] rounded-full mb-4 md:mb-6'></div>

                  <p className='text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6'>
                    {feature.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 10, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className='inline-flex items-center gap-2 text-[#FDB714] font-bold text-base md:text-lg hover:text-[#E5A613] transition-colors'
                  >
                    Les mer →
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className='mt-16 md:mt-24 text-center'
          >
            <p className='text-gray-600 text-base md:text-lg mb-6'>
              Opplev kvaliteten selv - besøk oss i dag!
            </p>
            <Link href='/meny'>
              <Button size='lg'>Se Full Meny</Button>
            </Link>
          </motion.div>
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
