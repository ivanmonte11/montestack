'use client'

import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import Testimonial from './components/Testimonial'
import Contacto from './components/Contacto'
import Tecnologias from './components/Tecnologias'
import { PrenderPOSCard, StockingCard } from './components/ProductoCard'
import { FaCode, FaPalette, FaChartLine } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Servicios */}
      <section id="servicios" className="w-full py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-gradient">Servicios</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Ofrecemos un stack completo de soluciones digitales para potenciar tu negocio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Desarrollo Full Stack"
              description="Aplicaciones web escalables construidas con Next.js y ecosistema moderno. Rendimiento y SEO optimizados."
              icon={FaCode}
            />
            <ServiceCard
              title="Diseño UI/UX"
              description="Interfaces intuitivas y atractivas que mejoran la retención de usuarios y la conversión."
              icon={FaPalette}
            />
            <ServiceCard
              title="Analítica de Datos"
              description="Dashboards interactivos para visualizar métricas clave y tomar decisiones basadas en datos."
              icon={FaChartLine}
            />
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="w-full py-32 px-6 bg-white/5 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Productos <span className="text-gradient">Propios</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Soluciones SaaS desarrolladas in-house para resolver problemas reales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PrenderPOSCard />
            <StockingCard />
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="w-full py-24 px-6">
        <Tecnologias />
      </section>

      {/* Enfoque */}
      <section className="w-full py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center glass-panel p-12 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Nuestro Enfoque</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            &ldquo;En MonteStack, no solo escribimos código. Construimos <span className="text-blue-400 font-semibold">activos digitales</span>.
            Cada línea de código y cada píxel tiene un propósito: hacer crecer tu negocio.&rdquo;
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="w-full py-32 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
            Lo que dicen nuestros <span className="text-gradient">Clientes</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              name="Lucía R."
              role="CEO – Afluente"
              quote="MonteStack transformó nuestra visión en una plataforma robusta y escalable."
            />
            <Testimonial
              name="Diego G."
              role="CTO – Pinula"
              quote="La calidad del código y la atención al detalle en el diseño son excepcionales."
            />
            <Testimonial
              name="Emilio F."
              role="CTO – Granja La Colonia"
              quote="Un equipo que entiende tanto de tecnología como de negocios. Resultados reales."
            />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full py-32 px-6">
        <Contacto />
      </section>
    </>
  )
}