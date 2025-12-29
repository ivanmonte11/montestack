'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-200 tracking-wide">
              Tecnología con propósito
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-gradient">Soluciones</span> <br />
            <span className="text-gradient">Inteligentes</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
            Transformamos ideas complejas en productos digitales de alto impacto.
            Diseño estratégico, desarrollo robusto y métricas que importan.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-1"
            >
              Iniciar Proyecto
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-all hover:-translate-y-1 backdrop-blur-sm"
            >
              Explorar Servicios
            </a>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-[600px] aspect-square">
            {/* Abstract decorative circles */}
            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-[10%] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-[20%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />

            <Image
              src="/img-floating-tech.png"
              alt="Digital Innovation"
              fill
              className="object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
