'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiMenu, HiX } from 'react-icons/hi'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-1">
        <nav className="flex justify-between items-center h-[84px]">
          {/* Logo ajustado */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-ms.png"
              alt="MonteStack logo"
              width={190}
              height={100}
              className="object-contain"
              priority
            />
          </Link>

          {/* Botón hamburguesa mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-gray-700 focus:outline-none"
            aria-label="Abrir menú"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Navegación Desktop */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <li><a href="#servicios" className="hover:text-blue-700 transition">Servicios</a></li>
            <li><a href="#enfoque" className="hover:text-blue-700 transition">Enfoque</a></li>
            <li><a href="#contacto" className="hover:text-blue-700 transition">Contacto</a></li>
          </ul>
        </nav>

        {/* Menú Mobile dentro del header */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white border-t shadow-inner rounded-lg">
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
              <li><a href="#servicios" onClick={() => setMenuOpen(false)} className="hover:text-blue-700">Servicios</a></li>
              <li><a href="#enfoque" onClick={() => setMenuOpen(false)} className="hover:text-blue-700">Enfoque</a></li>
              <li><a href="#contacto" onClick={() => setMenuOpen(false)} className="hover:text-blue-700">Contacto</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
