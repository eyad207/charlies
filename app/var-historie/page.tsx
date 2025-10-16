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
      {/* Hero Section */}
      <section className='relative h-[400px] bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/KebabRull.avif'
            alt='Vår Historie'
            fill
            className='object-cover opacity-30'
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='relative z-10 text-center text-white'
        >
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>Vår Historie</h1>
          <p className='text-xl md:text-2xl text-gray-300'>
            30 år med lidenskap og dedikasjon
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 max-w-4xl text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              En Reise Gjennom Tid
            </h2>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto mb-8'></div>
            <p className='text-xl text-gray-700 leading-relaxed mb-6'>
              Vår historie er en historie om lidenskap, dedikasjon og kjærlighet
              til god mat. Fra den beskjedne begynnelsen i 1995 til i dag, har
              vi holdt fast ved våre verdier mens vi har vokst og utviklet oss.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Charlie&apos;s Kebab er mer enn bare en restaurant - det er et
              sted hvor tradisjoner møter innovasjon, og hvor hver gjest blir
              behandlet som familie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Vår Tidsline
            </h2>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
          </motion.div>

          <div className='max-w-5xl mx-auto'>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='relative mb-12 last:mb-0'
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Year Badge */}
                  <div className='flex-shrink-0 w-32'>
                    <div className='bg-[#FDB714] text-black font-bold text-2xl py-3 px-6 rounded-lg text-center shadow-lg'>
                      {item.year}
                    </div>
                  </div>

                  {/* Image */}
                  <div className='flex-shrink-0 w-full lg:w-64'>
                    <div className='relative h-48 rounded-xl overflow-hidden shadow-xl'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className='object-cover transition-transform duration-500 hover:scale-110'
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className='flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#FDB714]'
                  >
                    <div className='flex items-center gap-3 mb-3'>
                      <div className='text-[#FDB714]'>{item.icon}</div>
                      <h3 className='text-2xl font-bold text-gray-900'>
                        {item.title}
                      </h3>
                    </div>
                    <p className='text-gray-600 leading-relaxed'>
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Connecting Line */}
                {index < timeline.length - 1 && (
                  <div className='hidden lg:block absolute left-1/2 top-full w-1 h-12 bg-[#FDB714] -ml-0.5'></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Viktige Milepæler
            </h2>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className='bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#FDB714]'
              >
                <div className='text-[#FDB714] text-4xl font-bold mb-3'>
                  {milestone.year}
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                  {milestone.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className='py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Vårt Arv Fortsetter
              </h2>
              <div className='w-24 h-1 bg-[#FDB714] mx-auto mb-8'></div>
              <p className='text-xl text-gray-300 leading-relaxed mb-6'>
                I dag, med tre generasjoner av familien som arbeider sammen,
                fortsetter vi å hedre Charlie&apos;s opprinnelige visjon mens vi
                omfavner fremtiden.
              </p>
              <p className='text-lg text-gray-400 leading-relaxed'>
                Hver kebab vi lager bærer med seg 30 års erfaring, kjærlighet og
                dedikasjon. Vi ser frem til å servere deg i de neste 30 årene og
                utover.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
