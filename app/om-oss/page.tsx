'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Award, Zap, MapPin } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: <Heart className='w-8 h-8' />,
    title: 'Kvalitet Først',
    description: 'Vi velger bare de beste ingrediensene for våre gjester',
  },
  {
    icon: <Zap className='w-8 h-8' />,
    title: 'Rask & Effektiv',
    description: 'Deilig mat servert raskt, uten å gå på akkord med kvaliteten',
  },
  {
    icon: <Award className='w-8 h-8' />,
    title: 'Autentisk Smak',
    description: 'Tradisjonelle oppskrifter fra generasjon til generasjon',
  },
  {
    icon: <MapPin className='w-8 h-8' />,
    title: 'Lokalt Engasjement',
    description: 'Vi støtter lokale leverandører og samfunnet omkring oss',
  },
]

export default function OmOss() {
  return (
    <div className='bg-white'>
      {/* Hero Section - Modern & Bold */}
      <section className='relative mt-20 pt-30 min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden'>
        {/* Background with parallax effect */}
        <div className='absolute inset-0'>
          <Image
            src='/Kebab i pita med hjemmelaget kebabsaus.jpg'
            alt="Charlie's Kebab"
            fill
            className='object-cover scale-100'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60' />
        </div>

        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className='absolute -right-32 top-20 w-64 h-64 bg-[#FDB714] rounded-full opacity-20 blur-3xl'
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className='absolute -left-32 bottom-20 w-96 h-96 bg-orange-500 rounded-full opacity-15 blur-3xl'
          />
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className='inline-flex items-center gap-2 bg-gradient-to-r from-[#FDB714] to-amber-500 text-black px-6 py-3 rounded-full font-bold mb-8 shadow-2xl'
            >
              <Award className='w-5 h-5' />
              <span>Siden 1995 - Over 30 År</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight'
            >
              Om{' '}
              <span className='bg-gradient-to-r from-[#FDB714] via-amber-400 to-orange-400 bg-clip-text text-transparent'>
                Charlie&apos;s
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-8 font-semibold'
            >
              En lidenskap for autentisk smak og kvalitet
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <Link href='/meny'>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-[#FDB714] to-amber-500 text-black font-black rounded-full hover:shadow-2xl transition-all text-lg'
                >
                  Se Menyen →
                </motion.button>
              </Link>
              <Link href='/kontakt-oss'>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 border-2 border-white text-white font-black rounded-full hover:bg-white hover:text-black transition-all text-lg'
                >
                  Kontakt Oss
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section with Large Images */}
      <section className='py-20 md:py-32 bg-gradient-to-b from-white to-gray-50'>
        <div className='container mx-auto px-4'>
          {/* First Story Block */}
          <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='order-2 md:order-1'
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='inline-block text-[#FDB714] font-bold text-lg mb-4'
              >
                ✨ VÅR REISE
              </motion.span>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6'>
                Historien Vår
              </h2>
              <div className='w-20 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 rounded-full mb-8' />

              <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>
                Fra drøm til virkelighet
              </h3>
              <h3 className='text-xl md:text-2xl text-gray-700 leading-relaxed mb-6'>
                Charlie Hansen kom til Norge på 80-tallet med en drøm og en
                hemmelighet - familiens oppskrift på den perfekte kebab.
              </h3>
              <h3 className='text-xl md:text-2xl text-gray-700 leading-relaxed'>
                Idag har Charlie&apos;s Kebab blitt en institusjon i Oslo. Vi
                har skapt arbeidsplasser, bygget vennskap med tusenvis av
                kunder, og inspirert mange andre.
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='relative h-[400px] md:h-[600px] order-1 md:order-2'
            >
              <div className='relative h-full rounded-3xl overflow-hidden shadow-2xl group'>
                <Image
                  src='/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif'
                  alt='Vår Mat'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
              </div>
            </motion.div>
          </div>

          {/* Second Story Block - Reversed */}
          <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='relative h-[400px] md:h-[600px]'
            >
              <div className='relative h-full rounded-3xl overflow-hidden shadow-2xl group'>
                <Image
                  src='/historie-bilder/515141514_24465350516402907_8270721479262644512_n.jpg'
                  alt='Vår Restaurant'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='inline-block text-[#FDB714] font-bold text-lg mb-4'
              >
                🏆 KVALITET FØRST
              </motion.span>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6'>
                Vår Filosofi
              </h2>
              <div className='w-20 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 rounded-full mb-8' />

              <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>
                Tradisjoner møter innovasjon
              </h3>
              <h3 className='text-xl md:text-2xl text-gray-700 leading-relaxed mb-6'>
                Hver dag serverer vi hundrevis av kebaber, og hver eneste en
                lages med samme kjærlighet og presisjon som den første i 1995.
              </h3>
              <h3 className='text-xl md:text-2xl text-gray-700 leading-relaxed'>
                Vår filosofi forblir den samme: kvalitet, autentisitet og
                respekt for tradisjonene.
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Modern Grid with Images */}
      <section className='py-20 md:py-32 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.span className='inline-block text-[#FDB714] font-bold text-lg mb-4'>
              💎 VÅRE VERDIER
            </motion.span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6'>
              Hva Vi Står For
            </h2>
            <div className='w-24 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 rounded-full mx-auto mb-6' />
            <h3 className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto'>
              Det som gjør oss unike og elsket av tusenvis
            </h3>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className='group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FDB714]'
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FDB714] to-amber-500 flex items-center justify-center text-black mb-6 shadow-lg group-hover:shadow-xl'
                >
                  {value.icon}
                </motion.div>
                <h3 className='text-2xl font-black text-gray-900 mb-4'>
                  {value.title}
                </h3>
                <h3 className='text-base text-gray-600 leading-relaxed'>
                  {value.description}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Large Image Cards */}
      <section className='py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.span className='inline-block text-[#FDB714] font-bold text-lg mb-4'>
              👨‍🍳 VÅRT TEAM
            </motion.span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6'>
              Møt Ledergruppen
            </h2>
            <div className='w-24 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 rounded-full mx-auto mb-6' />
            <h3 className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto'>
              De som sikrer at hver kebab er perfekt
            </h3>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10'>
            {[
              {
                name: 'Charlie Hansen',
                role: 'Grunnlegger & Kjøkkensjerf',
                description: 'Over 40 års erfaring i steking av perfekt kebab.',
                image:
                  '/historie-bilder/515141514_24465350516402907_8270721479262644512_n.jpg',
              },
              {
                name: 'Maria Olsen',
                role: 'Daglig Leder',
                description:
                  'Sikrer at hver detalj er perfekt, fra bestillinger til servering.',
                image:
                  '/historie-bilder/515358692_24486887090915916_3789506594272121272_n.jpg',
              },
              {
                name: 'Ahmed Ali',
                role: 'Kjøkkenmester',
                description: 'Mester grilleren som sikrer konsistent kvalitet.',
                image:
                  '/historie-bilder/515444375_24486887437582548_8547740095225050264_n.jpg',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className='group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500'
              >
                {/* Large Image */}
                <div className='relative h-80 md:h-96 overflow-hidden'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                    className='absolute top-4 right-4 bg-gradient-to-r from-[#FDB714] to-amber-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg'
                  >
                    ⭐ Leder
                  </motion.div>
                </div>

                {/* Content */}
                <div className='p-6 md:p-8'>
                  <h2 className='text-2xl md:text-3xl font-black text-gray-900 mb-2'>
                    {member.name}
                  </h2>
                  <h3 className='text-lg md:text-xl text-[#FDB714] font-bold mb-4'>
                    {member.role}
                  </h3>
                  <h3 className='text-base text-gray-600 leading-relaxed'>
                    {member.description}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Bold & Modern */}
      <section className='py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden'>
        {/* Animated Background */}
        <div className='absolute inset-0 overflow-hidden opacity-20'>
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className='absolute -right-48 -top-48 w-[600px] h-[600px] bg-[#FDB714] rounded-full blur-3xl'
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className='absolute -left-48 -bottom-48 w-[600px] h-[600px] bg-orange-500 rounded-full blur-3xl'
          />
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.span className='inline-block text-[#FDB714] font-bold text-lg mb-4'>
              📊 VÅRE TALL
            </motion.span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6'>
              Vi Er Stolte Av
            </h2>
            <div className='w-24 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 rounded-full mx-auto' />
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
            {[
              { number: '30+', label: 'År med erfaring', icon: '🎂' },
              { number: '50K+', label: 'Fornøyde kunder', icon: '😋' },
              { number: '20+', label: 'Dedikerte ansatte', icon: '👨‍🍳' },
              { number: '5', label: 'Priser vunnet', icon: '🏆' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -10 }}
                className='text-center p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FDB714] transition-all'
              >
                <motion.div
                  className='text-5xl mb-4'
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h2
                  className='text-4xl md:text-6xl font-black text-[#FDB714] mb-3'
                  whileHover={{ scale: 1.15 }}
                >
                  {stat.number}
                </motion.h2>
                <h3 className='text-base md:text-lg text-gray-300 font-semibold'>
                  {stat.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
