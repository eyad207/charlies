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
      {/* Hero Section */}
      <section className='relative h-[400px] bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/KebabRull.avif'
            alt='Kampanjer'
            fill
            className='object-cover opacity-30'
          />
        </div>

        {/* Animated Confetti */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-3 h-3 bg-[#FDB714]'
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
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
          className='relative z-10 text-center text-white'
        >
          <PartyPopper className='w-16 h-16 mx-auto mb-4 text-[#FDB714]' />
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>Kampanjer</h1>
          <p className='text-xl md:text-2xl text-gray-300'>
            Fantastiske tilbud og rabatter!
          </p>
        </motion.div>
      </section>

      {/* Current Campaigns */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
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
                className='relative bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-[#FDB714]'
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

      {/* Special Offers */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Spesial Tilbud
            </h2>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {specialOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
              >
                <div className='relative h-48'>
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute top-4 right-4'>
                    <span className='bg-[#FDB714] text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg'>
                      {offer.badge}
                    </span>
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {offer.title}
                  </h3>
                  <p className='text-gray-600 mb-4'>{offer.description}</p>
                  <Button variant='outline' size='sm' className='w-full'>
                    Les Mer
                  </Button>
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
