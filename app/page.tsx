'use client'

import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import Testimonial from './components/Testimonial'
import Contacto from './components/Contacto'
import Tecnologias from './components/Tecnologias'
import { FaCode, FaPalette, FaChartLine } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* 🧲 Hero */}
      <Hero />

      {/* ⚙️ Servicios */}
      <section id="servicios" className="w-full py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-blue-100">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-800 text-center mb-16"
        >
          Qué hacemos
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
          <div>
            <FaCode className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Desarrollo a medida</h3>
            <p className="text-base text-blue-900 opacity-80">
              Aplicaciones modernas con Next.js, Tailwind y Prisma. Robustos y sincronizados.
            </p>
          </div>
          <div>
            <FaPalette className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Identidad visual</h3>
            <p className="text-base text-blue-900 opacity-80">
              Branding claro, profesional y alineado con tu propósito.
            </p>
          </div>
          <div>
            <FaChartLine className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Métricas operativas</h3>
            <p className="text-base text-blue-900 opacity-80">
              Interfaces que sincronizan datos reales y decisiones concretas.
            </p>
          </div>
        </div>
      </section>

      {/* 🧰 Tecnologías */}
      <section id="tecnologias" className="w-full py-24 px-6 bg-white">

        <Tecnologias />
      </section>

      {/* 🧭 Enfoque */}
      <section id="enfoque" className="w-full py-24 px-6 bg-gradient-to-bl from-blue-100 via-blue-50 to-white">

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-800">Nuestro enfoque</h2>
          <p className="text-lg text-blue-900 opacity-80 leading-relaxed">
            MonteStack nace para construir soluciones que combinan precisión técnica con diseño estratégico.
            No solo desarrollamos sistemas: los hacemos intuitivos, útiles y visualmente sólidos.
          </p>
        </div>
      </section>

      {/* 💬 Testimonios */}
      <section className="w-full py-24 px-6 bg-gradient-to-b from-blue-50 via-white to-white">

        <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Testimonios</h2>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <Testimonial
            name="Lucía R."
            role="CEO – Afluente"
            quote="MonteStack nos dio claridad técnica desde el día uno."
          />
          <Testimonial
            name="Diego G."
            role="CTO – Pinula"
            quote="Excelente implementación y enfoque orientado a métricas."
          />
        </div>
      </section>

      {/* 📬 Contacto */}
      <section className="w-full py-24 px-6 bg-white">
        <Contacto />
      </section>


    </>
  )
}
