'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Heart,
  Award,
  Zap,
  MapPin,
  Users,
  CheckCircle,
  Star,
  TrendingUp,
} from 'lucide-react'
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

const whyChooseUs = [
  {
    title: 'Friske Ingredienser Daglig',
    description:
      'Vi kjøper inn kjøtt og grønnsaker hver morgen for å sikre maksimal friskhet',
    icon: <CheckCircle className='w-6 h-6' />,
  },
  {
    title: 'Erfarne Kokker',
    description:
      'Vårt team har over 100 år samlet erfaring fra kebab-industrien',
    icon: <Star className='w-6 h-6' />,
  },
  {
    title: 'Miljøvennlig',
    description: 'Vi bruker bærekraftig emballasje og minimaliserer matsvinn',
    icon: <TrendingUp className='w-6 h-6' />,
  },
  {
    title: 'Prisbelønt Smaker',
    description: 'Kåret til beste kebab 3 år på rad av lokale matmagasiner',
    icon: <Award className='w-6 h-6' />,
  },
]

const timeline = [
  {
    year: '1995',
    title: 'Begynnelsen',
    description:
      'Charlie Hansen åpner sitt første kjente kebab-sted i Oslo med en drøm om autentisk mat',
  },
  {
    year: '2005',
    title: 'Ekspansjon',
    description: 'Økt popularitet fører til utvidelse og flere driftige timer',
  },
  {
    year: '2015',
    title: 'Anerkjennelse',
    description: 'Første gang kåret til beste kebab i Oslo av lokale kritikere',
  },
  {
    year: '2024',
    title: 'I Dag',
    description:
      'Et etablert ikon i Oslo med dedikerte kunder og et team som elsker det de gjør',
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

      {/* Timeline Section */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Vår Reise
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              Fra små begynnelser til et kjent ikon i Oslo
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='relative'
              >
                {/* Vertical Line */}
                {index !== timeline.length - 1 && (
                  <div className='hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#FDB714] to-transparent' />
                )}

                <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-16 h-16 rounded-full bg-[#FDB714] flex items-center justify-center flex-shrink-0'>
                      <span className='text-black font-bold text-lg'>
                        {event.year}
                      </span>
                    </div>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {event.title}
                  </h3>
                  <p className='text-gray-600 text-sm'>{event.description}</p>
                </div>
              </motion.div>
            ))}
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
                className='p-8 border-2 border-gray-100 rounded-xl hover:border-[#FDB714] transition-all duration-300 hover:shadow-lg'
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

      {/* Why Choose Us Section */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Hvorfor Velge Oss?
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              Vi er ikke bare en restaurant, vi er en del av din daglige
              lidenskap
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8'>
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex gap-6'
              >
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-[#FDB714] text-black'>
                    {item.icon}
                  </div>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600'>{item.description}</p>
                </div>
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
              },
              {
                name: 'Maria Olsen',
                role: 'Daglig Leder',
                description:
                  'Sikrer at hver detalj er perfekt, fra bestillinger til servering. Hjerte for kundeservice.',
              },
              {
                name: 'Ahmed Ali',
                role: 'Kjøkkenmester',
                description:
                  'Mester grilleren som sikrer konsistent kvalitet. 25 år med tradisjonell kebab-teknikk.',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className='group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FDB714]'
              >
                <div className='w-24 h-24 rounded-full bg-gradient-to-br from-[#FDB714] to-orange-500 mx-auto mb-6 flex items-center justify-center flex-shrink-0'>
                  <Users className='w-12 h-12 text-white' />
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

      {/* CTA Section */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-[#FDB714] to-orange-500 text-black'>
        <div className='container mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              Klar til å Oppleve Charlie&apos;s?
            </h2>
            <p className='text-lg mb-8 opacity-90 max-w-2xl mx-auto'>
              Besøk oss i dag og smak på det som gjør oss spesielle. Vi åpner
              daglig fra 11:00 til 23:00.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/meny'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-black text-[#FDB714] font-bold rounded-lg hover:bg-gray-900 transition-all'
                >
                  Se Menyen Vår
                </motion.button>
              </Link>
              <Link href='/kontakt-oss'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all'
                >
                  Kontakt Oss
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
