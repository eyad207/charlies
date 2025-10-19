'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-br from-[#FDB714] via-[#F5A612] to-[#FDB714] text-black relative overflow-hidden'>
      {/* Static Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='w-full h-full'
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`,
          }}
        />
      </div>

      <div className='container mx-auto px-4 py-16 md:py-20 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8'>
          {/* About - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <h3 className='text-3xl md:text-4xl font-black mb-4 drop-shadow-md'>
                Charlie&apos;s Kebab
              </h3>
            </motion.div>
            <p className='text-sm leading-relaxed text-gray-900 font-medium'>
              Norges beste kebab siden 1995. Autentisk smak, ferske
              ingredienser, og lidenskap i hver bit.
            </p>
            <motion.div
              className='flex gap-4'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[Facebook, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href='#'
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-12 h-12 bg-black/90 text-[#FDB714] rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className='space-y-4'
          >
            <h4 className='text-2xl font-black mb-6 flex items-center gap-2'>
              Hurtiglenker
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </h4>
            <ul className='space-y-3'>
              {[
                { name: 'Om Oss', href: '/om-oss' },
                { name: 'Vår Historie', href: '/var-historie' },
                { name: 'Kampanjer', href: '/kampanjer' },
                { name: 'Kontakt Oss', href: '/kontakt-oss' },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className='group flex items-center gap-2 font-semibold hover:text-white transition-colors duration-300'
                  >
                    <motion.span className='w-0 h-0.5 bg-black group-hover:w-4 transition-all duration-300' />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='space-y-4'
          >
            <h4 className='text-2xl font-black mb-6 flex items-center gap-3'>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Clock size={24} />
              </motion.div>
              Åpningstider
            </h4>
            <ul className='space-y-3 text-sm font-semibold'>
              {[
                { day: 'Man - Tor', time: '11:00 - 22:00' },
                { day: 'Fre - Lør', time: '11:00 - 03:00' },
                { day: 'Søndag', time: '12:00 - 22:00' },
              ].map((schedule, index) => (
                <motion.li
                  key={schedule.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className='flex justify-between p-3 bg-black/10 rounded-xl hover:bg-black/20 transition-all duration-300'
                >
                  <span>{schedule.day}:</span>
                  <span className='text-black font-black'>{schedule.time}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className='space-y-4'
          >
            <h4 className='text-2xl font-black mb-6'>Kontakt</h4>
            <ul className='space-y-4 text-sm font-semibold'>
              {[
                { icon: MapPin, text: 'Storgata 123, 0182 Oslo' },
                { icon: Phone, text: '+47 123 45 678' },
                { icon: Mail, text: 'post@charlieskebab.no' },
              ].map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className='flex items-start gap-3 p-3 bg-black/10 rounded-xl hover:bg-black/20 transition-all duration-300 cursor-pointer'
                >
                  <item.icon size={20} className='mt-0.5 flex-shrink-0' />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className='border-t-2 border-black/20 mt-16 pt-8'
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <motion.p
              className='text-sm font-bold'
              whileHover={{ scale: 1.05 }}
            >
              &copy; {new Date().getFullYear()} Charlie&apos;s Kebab. Alle
              rettigheter reservert.
            </motion.p>

            <motion.div
              className='flex items-center gap-2'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <span className='text-sm font-semibold'>Laget med</span>
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='text-red-600'
              >
                ❤️
              </motion.span>
              <span className='text-sm font-semibold'>i Norge</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
