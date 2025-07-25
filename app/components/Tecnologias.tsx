'use client'

import { motion } from 'framer-motion'
import { SiJavascript, SiNextdotjs,  SiReact, SiVuedotjs, SiTailwindcss, SiVuetify, SiBootstrap,
   SiPrisma, SiTypescript, SiNodedotjs, SiDocker, SiVercel } from 'react-icons/si'

const technologies = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'VueJs', icon: SiVuedotjs },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Vuetify', icon: SiVuetify },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'nodejs', icon: SiNodedotjs },
  { name: 'Docker', icon: SiDocker },
  { name: 'Vercel', icon: SiVercel },
]

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="px-6 py-20 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-blue-700"
      >
        Tecnologías que con las que trabajamos
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center items-center">
        {technologies.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center bg-white border rounded-lg shadow-md py-4"
          >
            <Icon className="text-4xl text-blue-700 mb-2" />
            <span className="text-sm font-medium text-gray-700">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}