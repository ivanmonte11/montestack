'use client'

import { motion } from 'framer-motion'
import {
  SiJavascript, SiNextdotjs, SiReact, SiVuedotjs, SiTailwindcss, SiVuetify, SiBootstrap,
  SiPrisma, SiTypescript, SiNodedotjs, SiVercel,
  SiPostgresql
} from 'react-icons/si'

const technologies = [
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'VueJs', icon: SiVuedotjs, color: 'text-green-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'Vuetify', icon: SiVuetify, color: 'text-blue-500' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-white' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Vercel', icon: SiVercel, color: 'text-white' },
]

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Stack <span className="text-gradient">Tecnológico</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Utilizamos las herramientas más modernas y robustas del mercado para garantizar rendimiento, escalabilidad y seguridad.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all cursor-default group"
          >
            <Icon className={`text-4xl mb-3 ${color} opacity-80 group-hover:opacity-100 transition-opacity`} />
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}