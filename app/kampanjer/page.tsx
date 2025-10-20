'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../components/Button'
import { Tag, Gift, Percent, Clock, PartyPopper } from 'lucide-react'

const campaigns = [
  {
    title: 'Mandag Spesial',
    discount: '20%',
    description: 'Start uken med 20% rabatt på alle kebaber hver mandag!',
    validUntil: 'Gyldig hver mandag',
    icon: <Tag className='w-8 h-8' />,
    image: '/KebabRull.avif',
  },
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
]

const specialOffers = [
  {
    title: 'Sommerfest Catering',
    description: 'Bestill catering for 20+ personer og få 25% rabatt',
    image: '/KebabRull.avif',
    badge: 'Sesong Tilbud',
  },
  {
    title: 'Vegetar Uke',
    description: 'Prøv våre vegetar alternativer med spesialpris - kun 99kr!',
    image: '/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif',
    badge: 'Ny',
  },
  {
    title: 'Gratulerer med Dagen',
    description: 'Gratis kebab på bursdagen din! (med gyldig legitimasjon)',
    image: '/KebabRull.avif',
    badge: 'Populært',
  },
]

const loyaltyTiers = [
  {
    name: 'Bronse',
    requirement: '5 kjøp',
    benefit: '5% rabatt på alle fremtidige kjøp',
  },
  {
    name: 'Sølv',
    requirement: '15 kjøp',
    benefit: '10% rabatt + gratis drikk hver 5. gang',
  },
  {
    name: 'Gull',
    requirement: '30 kjøp',
    benefit: '15% rabatt + gratis drikk + prioritert levering',
  },
]

export default function Kampanjer() {
  return (
    <div className='bg-white'>
      {/* Hero Section - Modern & Exciting */}
      <section className='relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/KebabRull.avif'
            alt='Kampanjer'
            fill
            className='object-cover scale-110'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/60' />
        </div>

        {/* Animated Confetti */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-3 h-3 rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                backgroundColor: i % 2 === 0 ? '#FDB714' : '#F97316',
              }}
              animate={{
                y: ['0vh', '110vh'],
                rotate: [0, 360],
                opacity: [1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='relative z-10 text-center text-white px-4'
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-[#FDB714] to-amber-500 text-black px-6 py-3 rounded-full font-bold mb-6 shadow-2xl'
          >
            <PartyPopper className='w-6 h-6' />
            <span>SPAR PENGER NÅ</span>
          </motion.div>

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-black mb-6'>
            <span className='block'>Våre</span>
            <span className='block bg-gradient-to-r from-[#FDB714] via-amber-400 to-orange-400 bg-clip-text text-transparent'>
              Kampanjer
            </span>
          </h1>
          <h2 className='text-2xl md:text-3xl lg:text-4xl text-gray-200 font-semibold'>
            Fantastiske tilbud og rabatter!
          </h2>
        </motion.div>
      </section>

      {/* Current Campaigns - Large Image Cards */}
      <section className='py-20 md:py-32 bg-gradient-to-b from-white to-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.span className='inline-block text-[#FDB714] font-bold text-lg mb-4'>
              🎉 AKTIVE TILBUD
            </motion.span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6'>
              Spar Penger Nå
            </h2>
            <div className='w-24 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 mx-auto mb-6 rounded-full' />
            <h3 className='text-xl md:text-2xl text-gray-600'>
              Våre beste tilbud og kampanjer
            </h3>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto'>
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className='group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FDB714]'
              >
                {/* Large Image Background */}
                <div className='relative h-80 overflow-hidden'>
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent' />

                  {/* Discount Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: index * 0.1 + 0.2 }}
                    className='absolute top-6 right-6 bg-gradient-to-br from-[#FDB714] to-amber-500 text-black rounded-2xl p-4 shadow-2xl'
                  >
                    <div className='text-4xl md:text-5xl font-black leading-none'>
                      {campaign.discount}
                    </div>
                    <div className='text-xs uppercase tracking-wider font-bold mt-1'>
                      RABATT
                    </div>
                  </motion.div>

                  {/* Icon Badge */}
                  <div className='absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg'>
                    <div className='text-[#FDB714]'>{campaign.icon}</div>
                  </div>

                  {/* Content Overlay */}
                  <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8'>
                    <h2 className='text-3xl md:text-4xl font-black text-white mb-3'>
                      {campaign.title}
                    </h2>
                    <h3 className='text-lg md:text-xl text-gray-200 leading-relaxed mb-4'>
                      {campaign.description}
                    </h3>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-sm text-[#FDB714] flex items-center gap-2 font-bold'>
                        <Clock className='w-4 h-4' />
                        {campaign.validUntil}
                      </h3>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className='bg-gradient-to-r from-[#FDB714] to-amber-500 text-black px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2'
                      >
                        Bestill Nå
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers - Image Focus */}
      <section className='py-20 md:py-32 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.span className='inline-block text-[#FDB714] font-bold text-lg mb-4'>
              ⭐ SPESIAL TILBUD
            </motion.span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6'>
              Eksklu sive Tilbud
            </h2>
            <div className='w-24 h-2 bg-gradient-to-r from-[#FDB714] to-amber-500 mx-auto rounded-full' />
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10'>
            {specialOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className='group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300'
              >
                {/* Large Image */}
                <div className='relative h-64 overflow-hidden'>
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                    className='absolute top-4 right-4 bg-gradient-to-r from-[#FDB714] to-amber-500 text-black px-4 py-2 rounded-full text-sm font-black shadow-lg'
                  >
                    {offer.badge}
                  </motion.div>
                </div>

                {/* Content */}
                <div className='p-6 md:p-8'>
                  <h2 className='text-2xl md:text-3xl font-black text-gray-900 mb-4 group-hover:text-[#FDB714] transition-colors'>
                    {offer.title}
                  </h2>
                  <h3 className='text-base md:text-lg text-gray-600 mb-6 leading-relaxed'>
                    {offer.description}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-full bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 py-3 rounded-xl font-bold hover:from-[#FDB714] hover:to-amber-500 hover:text-black transition-all border-2 border-gray-200 hover:border-[#FDB714]'
                  >
                    Les Mer →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Lojalitetsprogram
            </h2>
            <p className='text-xl text-gray-600 mb-4'>
              Jo mer du handler, jo mer sparer du!
            </p>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {loyaltyTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative p-8 rounded-xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${
                  index === 2
                    ? 'bg-[#FDB714] text-black border-black'
                    : 'bg-white text-gray-900 border-[#FDB714]'
                }`}
              >
                <div
                  className={`text-6xl font-bold mb-4 ${
                    index === 2 ? 'text-black' : 'text-[#FDB714]'
                  }`}
                >
                  {tier.name}
                </div>
                <div
                  className={`text-lg mb-6 ${
                    index === 2 ? 'text-black/80' : 'text-gray-600'
                  }`}
                >
                  {tier.requirement}
                </div>
                <div
                  className={`text-base leading-relaxed ${
                    index === 2 ? 'text-black/90' : 'text-gray-700'
                  }`}
                >
                  {tier.benefit}
                </div>
                {index === 2 && (
                  <div className='absolute -top-3 left-1/2 -translate-x-1/2'>
                    <span className='bg-black text-[#FDB714] px-4 py-1 rounded-full text-xs font-bold'>
                      BEST VERDI
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex text-center mt-12 justify-center '
          >
            <Button size='lg'>Bli Medlem Nå - Det er Gratis!</Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white'>
        <div className='container mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Klar til å Spare?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Meld deg på vårt nyhetsbrev og få eksklusiv tilgang til VIP-tilbud
              og kampanjer!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Din e-postadresse'
                className='flex-1 px-6 py-3 rounded-lg ring-1 text-white focus:outline-none focus:ring-2 focus:ring-[#FDB714]'
              />
              <Button size='md'>Meld Deg På</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
