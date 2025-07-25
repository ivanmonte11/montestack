'use client'

import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import Testimonial from './components/Testimonial'
import Contacto from './components/Contacto'
import Tecnologias from './components/Tecnologias'
import { FaCode, FaPalette, FaChartLine } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Hero />

      {/* ⚙️ Servicios */}
      <section id="servicios" className="bg-white shadow-sm border rounded-lg px-6 py-20 mt-12 mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700">Qué hacemos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Desarrollo a medida"
            description="Sistemas web con Next.js, Tailwind y Prisma. Escalables y mantenibles."
            icon={FaCode}
          />
          <ServiceCard
            title="Identidad de marca"
            description="Diseños simples, profesionales y coherentes para comunicar con claridad."
            icon={FaPalette}
          />
          <ServiceCard
            title="Métricas significativas"
            description="Interfaces con datos útiles para tomar decisiones y mejorar experiencia."
            icon={FaChartLine}
          />
        </div>
      </section>

      {/* 🧰 Tecnologías */}
      <Tecnologias />

      {/* 🧭 Enfoque */}
      <section id="enfoque" className="bg-white shadow-sm border rounded-lg px-6 py-20 mt-12 mx-auto max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Nuestro enfoque</h2>
          <p className="text-lg text-gray-700">
            MonteStack nace para construir soluciones que combinan precisión técnica con diseño estratégico.
            No solo desarrollamos sistemas: los hacemos intuitivos, útiles y visualmente sólidos.
          </p>
        </div>
      </section>

      {/* 💬 Testimonios */}
      <section className="bg-white shadow-sm border rounded-lg px-6 py-20 mt-12 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Testimonios</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
      <Contacto />
    </>
  )
}
