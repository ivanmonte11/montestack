'use client'

import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon: IconType
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="glass-card p-8 rounded-2xl text-left group hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
        <Icon className="text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  )
}