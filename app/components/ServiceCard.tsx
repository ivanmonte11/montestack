'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

type Props = {
  title: string
  description: string
  icon: IconType
}

export default function ServiceCard({ title, description, icon: Icon }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <div className="text-blue-600 text-4xl mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}