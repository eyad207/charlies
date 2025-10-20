'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, TrendingUp, Award, Users } from 'lucide-react'

const timeline = [
  {
    year: '1995',
    title: 'Begynnelsen',
    description:
      'Charlie Hansen åpner den første restauranten på Grünerløkka med en drøm om å servere autentisk kebab.',
    icon: <Calendar className='w-8 h-8' />,
    image:
      '/historie-bilder/515141514_24465350516402907_8270721479262644512_n.jpg',
  },
  {
    year: '2000',
    title: 'Første Utvidelse',
    description:
      'På grunn av stor etterspørsel åpner vi vår andre lokasjon i Oslo sentrum.',
    icon: <TrendingUp className='w-8 h-8' />,
    image:
      '/historie-bilder/515358692_24486887090915916_3789506594272121272_n.jpg',
  },
  {
    year: '2005',
    title: 'Prisbelønt',
    description:
      'Vi vinner "Oslo\'s Beste Kebab" for første gang - en pris vi har vunnet tre ganger siden.',
    icon: <Award className='w-8 h-8' />,
    image: '/MSG-Smash-Burger.jpg',
  },
  {
    year: '2010',
    title: 'Familie Tradisjon',
    description:
      "Charlie's sønn, Michael, blir med i virksomheten og bringer nye ideer og energi.",
    icon: <Users className='w-8 h-8' />,
    image:
      '/historie-bilder/515444375_24486887437582548_8547740095225050264_n.jpg',
  },
  {
    year: '2015',
    title: 'Moderne Oppgradering',
    description:
      'Vi moderniserer kjøkkenet med ny teknologi mens vi beholder de tradisjonelle metodene.',
    icon: <TrendingUp className='w-8 h-8' />,
    image: '/hot-and-spicy-burgers-bee6c8f.jpg',
  },
  {
    year: '2020',
    title: 'Digital Transformasjon',
    description:
      'Lansering av online bestilling og levering, noe som gjør våre kebaber tilgjengelige for flere.',
    icon: <TrendingUp className='w-8 h-8' />,
    image: '/kebabpizza.webp',
  },
  {
    year: '2025',
    title: 'I Dag',
    description:
      'Med 30 års erfaring fortsetter vi å servere den beste kebaben i Norge, trofast mot våre røtter.',
    icon: <Award className='w-8 h-8' />,
    image:
      '/historie-bilder/515446894_24486887110915914_7014908671425307350_n.jpg',
  },
]

const milestones = [
  {
    title: 'Første Restaurant',
    description: 'Alt startet med en liten restaurant med kun 8 bord',
    year: '1995',
  },
  {
    title: '10,000 Kebaber Solgt',
    description:
      'Vår første store milepæl - oppnådd i løpet av det første året',
    year: '1996',
  },
  {
    title: 'Hemmelg Saus Oppskrift',
    description: 'Charlie perfeksjonerer den nå berømte hemmelige sausen',
    year: '1998',
  },
  {
    title: "Oslo's Beste",
    description: 'Kåret til beste kebab-restaurant i Oslo for første gang',
    year: '2005',
  },
]

export default function VarHistorie() {
  return (
    <div className='bg-white'>
      {/* Hero Section - Modern */}
      <section className='relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/KebabRull.avif'
            alt='Vår Historie'
            fill
            className='object-cover scale-110'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/60' />
        </div>

        {/* Animated Background Elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <motion.div
            animate={{ rotate: 360, y: [0, 50, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className='absolute -right-32 top-20 w-64 h-64 bg-[#FDB714] rounded-full opacity-20 blur-3xl'
          />
          <motion.div
            animate={{ rotate: -360, y: [0, -50, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className='absolute -left-32 bottom-20 w-96 h-96 bg-orange-500 rounded-full opacity-15 blur-3xl'
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='relative z-10 text-center text-white px-4'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-[#FDB714] to-amber-500 text-black px-6 py-3 rounded-full font-bold mb-6 shadow-2xl'
          >
            <Calendar className='w-5 h-5' />
            <span>1995 - 2025</span>
          </motion.div>

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-black mb-6'>
            <span className='block'>Vår</span>
            <span className='block bg-gradient-to-r from-[#FDB714] via-amber-400 to-orange-400 bg-clip-text text-transparent'>
              Historie
            </span>
          </h1>
          <h2 className='text-2xl md:text-3xl lg:text-4xl text-gray-200 font-semibold'>
            30 år med lidenskap og dedikasjon
          </h2>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className='py-20 md:py-32 bg-gradient-to-b from-white to-gray-50'>
        <div className='container mx-auto px-4 max-w-5xl text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span className='inline-block text-[#FDB714] font-bold text-lg mb-4'>
              📖 VÅR REISE
            </motion.span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6'>
              En Reise Gjennom Tid
            </h2>
            <div className='w-24 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 mx-auto mb-8 rounded-full' />
            <h3 className='text-2xl md:text-3xl text-gray-700 leading-relaxed mb-6 font-semibold'>
              Vår historie er en historie om lidenskap, dedikasjon og kjærlighet
              til god mat
            </h3>
            <h3 className='text-xl md:text-2xl text-gray-600 leading-relaxed'>
              Fra den beskjedne begynnelsen i 1995 til i dag, har vi holdt fast
              ved våre verdier mens vi har vokst og utviklet oss
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Timeline - Modern Cards with Large Images */}
      <section className='py-20 md:py-32 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.span className='inline-block text-[#FDB714] font-bold text-lg mb-4'>
              ⏰ TIDSLINJE
            </motion.span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6'>
              Viktige Øyeblikk
            </h2>
            <div className='w-24 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 mx-auto rounded-full' />
          </motion.div>

          <div className='max-w-6xl mx-auto space-y-16'>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />

                  {/* Floating Year Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                    className='absolute top-6 left-6 bg-gradient-to-r from-[#FDB714] to-amber-500 text-black font-black text-3xl md:text-4xl py-4 px-8 rounded-2xl shadow-2xl'
                  >
                    {item.year}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  className={`${
                    index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
                  }`}
                >
                  <motion.div className='bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-[#FDB714] transition-all'>
                    <div className='flex items-center gap-4 mb-6'>
                      <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FDB714] to-amber-500 flex items-center justify-center text-black shadow-lg'>
                        {item.icon}
                      </div>
                      <h2 className='text-3xl md:text-4xl font-black text-gray-900'>
                        {item.title}
                      </h2>
                    </div>
                    <h3 className='text-lg md:text-xl text-gray-700 leading-relaxed'>
                      {item.description}
                    </h3>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones - Modern Grid */}
      <section className='py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.span className='inline-block text-[#FDB714] font-bold text-lg mb-4'>
              🎯 MILEPÆLER
            </motion.span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6'>
              Viktige Øyeblikk
            </h2>
            <div className='w-24 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 mx-auto rounded-full' />
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto'>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className='group relative bg-gradient-to-br from-white to-gray-50 p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-8 border-[#FDB714]'
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className='inline-block bg-gradient-to-r from-[#FDB714] to-amber-500 text-black text-2xl md:text-3xl font-black mb-4 px-6 py-3 rounded-xl shadow-lg'
                >
                  {milestone.year}
                </motion.div>
                <h2 className='text-2xl md:text-3xl font-black text-gray-900 mb-4 group-hover:text-[#FDB714] transition-colors'>
                  {milestone.title}
                </h2>
                <h3 className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                  {milestone.description}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section - Bold & Inspiring */}
      <section className='py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden'>
        {/* Animated Background */}
        <div className='absolute inset-0 overflow-hidden opacity-20'>
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.3, 1] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className='absolute -right-48 -top-48 w-[600px] h-[600px] bg-[#FDB714] rounded-full blur-3xl'
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.4, 1] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className='absolute -left-48 -bottom-48 w-[600px] h-[600px] bg-orange-500 rounded-full blur-3xl'
          />
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-5xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.span className='inline-block text-[#FDB714] font-bold text-lg mb-4'>
                🌟 VÅR FREMTID
              </motion.span>
              <h2 className='text-4xl md:text-6xl lg:text-7xl font-black mb-8'>
                Vårt Arv{' '}
                <span className='bg-gradient-to-r from-[#FDB714] via-amber-400 to-orange-400 bg-clip-text text-transparent'>
                  Fortsetter
                </span>
              </h2>
              <div className='w-24 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 mx-auto mb-10 rounded-full' />

              <h3 className='text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed mb-8 font-semibold'>
                I dag, med tre generasjoner av familien som arbeider sammen,
                fortsetter vi å hedre Charlie&apos;s opprinnelige visjon
              </h3>
              <h3 className='text-xl md:text-2xl text-gray-400 leading-relaxed mb-12'>
                Hver kebab vi lager bærer med seg 30 års erfaring, kjærlighet og
                dedikasjon. Vi ser frem til å servere deg i de neste 30 årene og
                utover.
              </h3>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.3 }}
                className='inline-flex items-center gap-4 bg-gradient-to-r from-[#FDB714] to-amber-500 text-black px-10 py-5 rounded-full font-black text-xl shadow-2xl'
              >
                <Award className='w-8 h-8' />
                <span>30 År av Kvalitet</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
