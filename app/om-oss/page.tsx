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
      {/* Hero Section - Enhanced */}
      <section className='relative min-h-[500px] bg-gradient-to-br from-black via-gray-900 to-[#1a1a1a] flex items-center justify-center overflow-hidden pt-20 md:pt-0'>
        {/* Animated Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute -right-32 -top-32 w-96 h-96 bg-[#FDB714] rounded-full opacity-10 blur-3xl'
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute -left-32 -bottom-32 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl'
          />
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='inline-block bg-[#FDB714] text-black px-4 py-2 rounded-full font-semibold mb-6 text-sm'
              >
                Siden 1995
              </motion.div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight'>
                Om <span className='text-[#FDB714]'>Charlie&apos;s</span> Kebab
              </h1>
              <p className='text-lg md:text-xl text-gray-300 mb-8 leading-relaxed'>
                En lidenskap for autentisk smak og kvalitet har drevet oss i
                over 30 år. Vi er ikke bare en kebab-restaurant - vi er en del
                av Oslo sitt kulinariske DNA.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link href='/meny'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-8 py-3 bg-[#FDB714] text-black font-bold rounded-lg hover:bg-yellow-400 transition-all'
                  >
                    Se Menyen
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all'
                >
                  Kontakt Oss
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='relative h-96 md:h-full min-h-96'
            >
              <div className='relative h-full rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/KebabRull.avif'
                  alt='Charlie Kebab'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Historien Vår
              </motion.h2>
              <div className='w-16 h-1 bg-[#FDB714] rounded-full mb-8' />

              <div className='space-y-6 text-gray-700'>
                <p className='text-base md:text-lg leading-relaxed'>
                  Charlie Hansen kom til Norge på 80-tallet med en drøm og en
                  hemmelighet - familienes oppskrift på den perfekte kebab. Han
                  startet lite, men hans dedikasjon til kvalitet og autentiske
                  smaker snart gjorde ham kjent blant matvennene i Oslo.
                </p>
                <p className='text-base md:text-lg leading-relaxed'>
                  Idag har Charlie&apos;s Kebab blitt en institusjon. Vi har
                  opprettet arbeidsplasser, gjort venner av hundretusener av
                  kunder, og inspirert utallige konkurrenter. Men vår filosofi
                  forblir den samme: kvalitet, autentisitet og respekt for
                  tradisjonene.
                </p>
                <p className='text-base md:text-lg leading-relaxed'>
                  Hver dag serveres hundrevis av kebaber, og hver eneste en
                  lages med samme kjærlighet og presisjon som den første på
                  1995.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='relative h-96 md:h-full min-h-96'
            >
              <div className='relative h-full rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif'
                  alt='Vår Mat'
                  fill
                  className='object-cover'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Redesigned */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Våre Verdier
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              Det som gjør oss til oss
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className='p-8 border-2 border-gray-100 rounded-xl hover:border-[#FDB714] transition-all duration-150 hover:shadow-lg'
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className='w-12 h-12 rounded-full bg-[#FDB714] flex items-center justify-center text-black mb-6'
                >
                  {value.icon}
                </motion.div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {value.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Modern Cards */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Møt Ledergruppen
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              De som sikrer at hver kebab er perfekt
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                name: 'Charlie Hansen',
                role: 'Grunnlegger & Kjøkkensjerf',
                description:
                  'Over 40 års erfaring i steking av perfekt kebab. Charlie&apos;s visjoner driver oss videre.',
                image:
                  '/historie-bilder/515141514_24465350516402907_8270721479262644512_n.jpg',
              },
              {
                name: 'Maria Olsen',
                role: 'Daglig Leder',
                description:
                  'Sikrer at hver detalj er perfekt, fra bestillinger til servering. Hjerte for kundeservice.',
                image:
                  '/historie-bilder/515358692_24486887090915916_3789506594272121272_n.jpg',
              },
              {
                name: 'Ahmed Ali',
                role: 'Kjøkkenmester',
                description:
                  'Mester grilleren som sikrer konsistent kvalitet. 25 år med tradisjonell kebab-teknikk.',
                image:
                  '/historie-bilder/515444375_24486887437582548_8547740095225050264_n.jpg',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-150 border border-gray-100 hover:border-[#FDB714]'
              >
                <div className='w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 flex-shrink-0 border-4 border-[#FDB714]'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className='w-full h-full object-cover'
                  />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2 text-center'>
                  {member.name}
                </h3>
                <p className='text-[#FDB714] font-semibold text-center mb-4'>
                  {member.role}
                </p>
                <p className='text-gray-600 text-center leading-relaxed'>
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute -right-48 -top-48 w-96 h-96 bg-[#FDB714] rounded-full blur-3xl'
          />
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              { number: '30+', label: 'År med erfaring' },
              { number: '50000+', label: 'Fornøyde kunder' },
              { number: '20+', label: 'Ansatte' },
              { number: '5', label: 'Priser vunnet' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className='text-center p-6'
              >
                <motion.h3
                  className='text-3xl md:text-5xl font-bold text-[#FDB714] mb-2'
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className='text-gray-300 text-sm md:text-base'>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
