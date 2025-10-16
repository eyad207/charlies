'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-[#FDB714] text-black'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-bold mb-4'>Charlie&apos;s Kebab</h3>
            <p className='text-sm leading-relaxed'>
              Norges beste kebab siden 1995. Autentisk smak, ferske
              ingredienser, og lidenskap i hver bit.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className='text-lg font-bold mb-4'>Hurtiglenker</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/om-oss'
                  className='hover:text-white transition-colors'
                >
                  Om Oss
                </Link>
              </li>
              <li>
                <Link
                  href='/var-historie'
                  className='hover:text-white transition-colors'
                >
                  Vår Historie
                </Link>
              </li>
              <li>
                <Link
                  href='/kampanjer'
                  className='hover:text-white transition-colors'
                >
                  Kampanjer
                </Link>
              </li>
              <li>
                <Link
                  href='/kontakt-oss'
                  className='hover:text-white transition-colors'
                >
                  Kontakt Oss
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className='text-lg font-bold mb-4 flex items-center gap-2'>
              <Clock size={20} />
              Åpningstider
            </h4>
            <ul className='space-y-2 text-sm'>
              <li className='flex justify-between'>
                <span>Man - Tor:</span>
                <span className='font-semibold'>11:00 - 22:00</span>
              </li>
              <li className='flex justify-between'>
                <span>Fre - Lør:</span>
                <span className='font-semibold'>11:00 - 03:00</span>
              </li>
              <li className='flex justify-between'>
                <span>Søndag:</span>
                <span className='font-semibold'>12:00 - 22:00</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className='text-lg font-bold mb-4'>Kontakt</h4>
            <ul className='space-y-3 text-sm'>
              <li className='flex items-start gap-2'>
                <MapPin size={18} className='mt-1 flex-shrink-0' />
                <span>Storgata 123, 0182 Oslo</span>
              </li>
              <li className='flex items-center gap-2'>
                <Phone size={18} />
                <span>+47 123 45 678</span>
              </li>
              <li className='flex items-center gap-2'>
                <Mail size={18} />
                <span>post@charlieskebab.no</span>
              </li>
            </ul>

            <div className='flex gap-4 mt-4'>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href='#'
                className='bg-black text-[#FDB714] p-2 rounded-full hover:bg-gray-900 transition-colors'
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href='#'
                className='bg-black text-[#FDB714] p-2 rounded-full hover:bg-gray-900 transition-colors'
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='border-t border-black/20 mt-8 pt-6 text-center text-sm'
        >
          <p>
            &copy; {new Date().getFullYear()} Charlie&apos;s Kebab. Alle
            rettigheter reservert.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
