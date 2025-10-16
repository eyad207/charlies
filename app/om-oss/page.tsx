'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Heart, Award, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: <Heart className='w-12 h-12' />,
    title: 'Kvalitet Først',
    description: 'Vi velger bare de beste ingrediensene for våre gjester',
  },
  {
    icon: <Users className='w-12 h-12' />,
    title: 'Familie Atmosfære',
    description: 'Alle er velkomne til vårt kebab-hjem',
  },
  {
    icon: <Award className='w-12 h-12' />,
    title: 'Autentisk Smak',
    description: 'Tradisjonelle oppskrifter fra generasjon til generasjon',
  },
  {
    icon: <TrendingUp className='w-12 h-12' />,
    title: 'Stadig Utvikling',
    description: 'Vi forbedrer oss hver dag for å gi deg den beste opplevelsen',
  },
]

const team = [
  {
    name: 'Charlie Hansen',
    role: 'Grunnlegger & Sjefskokk',
    description: 'Med over 30 års erfaring i kebab-bransjen',
  },
  {
    name: 'Maria Olsen',
    role: 'Daglig Leder',
    description: 'Sørger for at alt går som smurt hver dag',
  },
  {
    name: 'Ahmed Ali',
    role: 'Mestergriller',
    description: 'Eksperten på den perfekte grillingsteknikken',
  },
]

export default function OmOss() {
  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <section className='relative h-[400px] bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/KebabRull.avif'
            alt='Om Oss'
            fill
            className='object-cover opacity-30'
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='relative z-10 text-center text-white'
        >
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>Om Oss</h1>
          <p className='text-xl md:text-2xl text-gray-300'>
            Din kebab-destinasjon siden 1995
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Vår Lidenskap
              </h2>
              <div className='w-24 h-1 bg-[#FDB714] mb-6'></div>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                Charlie&apos;s Kebab ble grunnlagt i 1995 med en enkel visjon: å
                servere den beste kebaben i Norge. Charlie Hansen, en
                lidenskapelig kokk med røtter i Tyrkia, brakte autentiske smaker
                og tradisjonelle grillingsteknikker til Oslo.
              </p>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                I dag er vi stolte over å være et av de mest kjente
                kebab-stedene i byen, med tre generasjoner av familien som
                jobber side om side for å opprettholde vår standard for kvalitet
                og smak.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                Vi bruker kun de ferskeste ingrediensene, kjøtt fra lokale
                gårder, og grønnsaker plukket daglig. Hver kebab lages med
                kjærlighet og omtanke, akkurat slik Charlie gjorde det første
                dagen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='relative h-[500px] rounded-xl overflow-hidden shadow-2xl'
            >
              <Image
                src='/Vegetar-kebab med hjemmelaget saus - Skikkelig digg.avif'
                alt='Vår Restaurant'
                fill
                className='object-cover'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Våre Verdier
            </h2>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className='bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300'
              >
                <div className='text-[#FDB714] flex justify-center mb-4'>
                  {value.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {value.title}
                </h3>
                <p className='text-gray-600'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Møt Teamet
            </h2>
            <p className='text-xl text-gray-600 mb-4'>
              Folkene bak den perfekte kebaben
            </p>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className='bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300'
              >
                <div className='w-32 h-32 bg-[#FDB714] rounded-full mx-auto mb-6 flex items-center justify-center'>
                  <Users className='w-16 h-16 text-black' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                  {member.name}
                </h3>
                <p className='text-[#FDB714] font-semibold mb-3'>
                  {member.role}
                </p>
                <p className='text-gray-600'>{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              { number: '30+', label: 'År med erfaring' },
              { number: '50000+', label: 'Fornøyde kunder' },
              { number: '15', label: 'Ansatte' },
              { number: '3', label: 'Priser vunnet' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='text-center'
              >
                <h3 className='text-5xl font-bold text-[#FDB714] mb-2'>
                  {stat.number}
                </h3>
                <p className='text-gray-300'>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
