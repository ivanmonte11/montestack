'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { HiMenu, HiX } from 'react-icons/hi'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1e]/80 backdrop-blur-lg border-b border-white/5 py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-50">
            {/* Using text logo for better contrast in dark mode if image doesn't work well, 
                but keeping image if it's white/transparent. Assuming image needs check. 
                For now, let's use a text fallback or wrapper if image is dark.
                Since I can't see the image, I'll assume it might need a brightness filter if it's dark.
            */}
            <div className="relative h-28 w-48">
              <Image
                src="/logo-ms.png"
                alt="MonteStack"
                fill
                className="object-contain brightness-0 invert" // Make logo white
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            {['Servicios', 'Productos', 'Enfoque', 'Contacto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white focus:outline-none relative z-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Mobile Nav Overlay */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 w-full bg-[#0a0f1e] border-b border-white/10 shadow-2xl md:hidden pt-24 pb-8 px-6"
              >
                <ul className="flex flex-col space-y-4 text-center">
                  {['Servicios', 'Productos', 'Enfoque', 'Contacto'].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        className="block text-lg font-medium text-gray-300 hover:text-white py-2"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}
