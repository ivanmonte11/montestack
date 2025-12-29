// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import FocusVisibleLoader from './components/FocusVisibleLoader'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'MonteStack | Sistemas con propósito',
  description: 'Soluciones web orientadas a métricas, diseño estratégico y desarrollo profesional.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0a0f1e] text-white antialiased selection:bg-blue-500/30`}>
        <FocusVisibleLoader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
