import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
import { CartProvider } from './context/CartContext'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Charlie's Kebab - Norges Beste Kebab",
  description:
    'Autentisk kebab laget med lidenskap siden 1995. Ferske ingredienser og tradisjonelle oppskrifter.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='no'>
      <body className={`${outfit.className} antialiased bg-white`}>
        <CartProvider>
          <Header />
          <CartSidebar />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
