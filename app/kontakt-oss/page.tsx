'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../components/Button'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function KontaktOss() {
  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <section className='relative h-[400px] bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/KebabRull.avif'
            alt='Kontakt Oss'
            fill
            className='object-cover opacity-30'
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='relative z-10 text-center text-white'
        >
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>Kontakt Oss</h1>
          <p className='text-xl md:text-2xl text-gray-300'>
            Vi hører gjerne fra deg!
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Kom i Kontakt
              </h2>
              <div className='w-24 h-1 bg-[#FDB714] mb-8'></div>

              <div className='space-y-6'>
                <motion.div
                  whileHover={{ x: 10 }}
                  className='flex items-start gap-4 p-6 bg-gray-50 rounded-xl'
                >
                  <div className='bg-[#FDB714] p-3 rounded-lg'>
                    <MapPin className='w-6 h-6 text-black' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg text-gray-900 mb-1'>
                      Adresse
                    </h3>
                    <p className='text-gray-600'>Storgata 123</p>
                    <p className='text-gray-600'>0182 Oslo, Norge</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className='flex items-start gap-4 p-6 bg-gray-50 rounded-xl'
                >
                  <div className='bg-[#FDB714] p-3 rounded-lg'>
                    <Phone className='w-6 h-6 text-black' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg text-gray-900 mb-1'>
                      Telefon
                    </h3>
                    <p className='text-gray-600'>+47 123 45 678</p>
                    <p className='text-sm text-gray-500 mt-1'>
                      Man-Søn: 11:00 - 22:00
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className='flex items-start gap-4 p-6 bg-gray-50 rounded-xl'
                >
                  <div className='bg-[#FDB714] p-3 rounded-lg'>
                    <Mail className='w-6 h-6 text-black' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg text-gray-900 mb-1'>
                      E-post
                    </h3>
                    <p className='text-gray-600'>post@charlieskebab.no</p>
                    <p className='text-gray-600'>bestilling@charlieskebab.no</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className='flex items-start gap-4 p-6 bg-gray-50 rounded-xl'
                >
                  <div className='bg-[#FDB714] p-3 rounded-lg'>
                    <Clock className='w-6 h-6 text-black' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg text-gray-900 mb-1'>
                      Åpningstider
                    </h3>
                    <div className='space-y-1 text-gray-600'>
                      <p>Mandag - Torsdag: 11:00 - 22:00</p>
                      <p>Fredag - Lørdag: 11:00 - 03:00</p>
                      <p>Søndag: 12:00 - 22:00</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className='bg-gray-50 p-8 rounded-xl shadow-lg'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Send oss en melding
                </h2>

                <form className='space-y-6'>
                  <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                      Navn
                    </label>
                    <input
                      type='text'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB714] transition-all'
                      placeholder='Ditt fulle navn'
                    />
                  </div>

                  <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                      E-post
                    </label>
                    <input
                      type='email'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB714] transition-all'
                      placeholder='din@epost.no'
                    />
                  </div>

                  <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                      Telefon
                    </label>
                    <input
                      type='tel'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB714] transition-all'
                      placeholder='+47 123 45 678'
                    />
                  </div>

                  <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                      Emne
                    </label>
                    <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB714] transition-all'>
                      <option>Generell forespørsel</option>
                      <option>Bestilling</option>
                      <option>Catering</option>
                      <option>Tilbakemelding</option>
                      <option>Annet</option>
                    </select>
                  </div>

                  <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                      Melding
                    </label>
                    <textarea
                      rows={5}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB714] transition-all resize-none'
                      placeholder='Skriv din melding her...'
                    ></textarea>
                  </div>

                  <Button size='lg' className='w-full'>
                    <Send className='w-5 h-5' />
                    Send Melding
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Finn Oss
            </h2>
            <div className='w-24 h-1 bg-[#FDB714] mx-auto'></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-gray-300 h-[450px] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center'
          >
            <div className='text-center'>
              <MapPin className='w-16 h-16 text-gray-500 mx-auto mb-4' />
              <p className='text-gray-600 text-lg'>
                Google Maps integrasjon kommer snart
              </p>
              <p className='text-gray-500 mt-2'>Storgata 123, 0182 Oslo</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
