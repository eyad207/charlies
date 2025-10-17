'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import Image from 'next/image'
import Button from './Button'

export default function CartSidebar() {
  const {
    cart,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
  } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className='fixed inset-0 bg-black/50 z-[100] cursor-pointer'
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed right-0 top-0 h-full w-full md:w-[450px] bg-white shadow-2xl z-[101] flex flex-col'
          >
            {/* Header */}
            <div className='bg-[#FDB714] p-6 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <ShoppingBag className='w-6 h-6 text-black' />
                <h2 className='text-2xl font-bold text-black'>Handlekurv</h2>
                {getTotalItems() > 0 && (
                  <span className='bg-black text-[#FDB714] rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold'>
                    {getTotalItems()}
                  </span>
                )}
              </div>
              <button
                onClick={toggleCart}
                className='text-black hover:text-white transition-colors cursor-pointer'
              >
                <X size={28} />
              </button>
            </div>

            {/* Cart Items */}
            <div className='flex-1 overflow-y-auto p-6'>
              {cart.length === 0 ? (
                <div className='flex flex-col items-center justify-center h-full text-gray-400'>
                  <ShoppingBag size={80} className='mb-4 opacity-50' />
                  <p className='text-lg font-semibold'>Handlekurven er tom</p>
                  <p className='text-sm mt-2'>
                    Legg til produkter for å fortsette
                  </p>
                </div>
              ) : (
                <div className='space-y-4'>
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className='bg-gray-50 rounded-xl p-4 shadow-sm'
                    >
                      <div className='flex gap-4'>
                        <div className='relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className='object-cover'
                          />
                        </div>

                        <div className='flex-1'>
                          <div className='flex justify-between items-start mb-2'>
                            <h3 className='font-bold text-gray-900'>
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className='text-red-500 hover:text-red-700 transition-colors cursor-pointer'
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2 bg-white rounded-lg p-1'>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className='w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded transition-colors cursor-pointer'
                              >
                                <Minus size={14} className='text-black' />
                              </button>
                              <span className='w-8 text-center font-semibold text-black'>
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className='w-7 h-7 flex items-center justify-center bg-[#FDB714] hover:bg-[#E5A613] rounded transition-colors cursor-pointer'
                              >
                                <Plus size={14} className='text-black' />
                              </button>
                            </div>

                            <span className='font-bold text-lg text-[#FDB714]'>
                              {(item.price * item.quantity).toFixed(0)},-
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className='border-t border-gray-200 p-6 bg-gray-50'>
                <div className='mb-4'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-gray-600'>Delsum:</span>
                    <span className='font-semibold text-gray-900'>
                      {getTotalPrice().toFixed(0)},-
                    </span>
                  </div>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-gray-600'>Levering:</span>
                    <span className='font-semibold text-gray-900'>50,-</span>
                  </div>
                  <div className='border-t border-gray-300 mt-3 pt-3 flex justify-between items-center'>
                    <span className='text-xl font-bold text-gray-900'>
                      Total:
                    </span>
                    <span className='text-2xl font-bold text-[#FDB714]'>
                      {(getTotalPrice() + 50).toFixed(0)},-
                    </span>
                  </div>
                </div>

                <Button size='lg' className='w-full'>
                  Gå til Kassen
                </Button>

                <button
                  onClick={toggleCart}
                  className='w-full mt-3 py-3 text-gray-600 hover:text-gray-900 font-semibold transition-colors cursor-pointer'
                >
                  Fortsett å handle
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
