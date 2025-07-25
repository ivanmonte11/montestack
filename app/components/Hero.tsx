'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
      {/* Contenido dividido en columnas */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Imagen flotante izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/img-floating-tech.png"
            alt="Laptop flotante futurista"
            width={500}
            height={500}
            className="w-[320px] sm:w-[420px] md:w-[500px] max-w-full drop-shadow-xl transition-transform hover:scale-105"
            priority
          />

        </motion.div>

        {/* Texto lado derecho */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-left"
        >
          <span className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4 block">
            Tecnología con propósito
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Soluciones de software<br />para un futuro inteligente
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-md">
            Desarrollamos plataformas web que combinan diseño técnico, métricas precisas y branding confiable. Tu stack operativo, visual y estratégico, todo en uno.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#contacto"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition"
            >
              ¡Hablemos!
            </a>
            <a
              href="#servicios"
              className="text-blue-300 hover:underline font-medium py-3 px-4"
            >
              Ver servicios →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
