'use client'

import { motion } from 'framer-motion'

type Props = {
  name: string
  quote: string
  role?: string
  imageUrl?: string
}

export default function Testimonial({ name, quote, role, imageUrl }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
    >
      <div className="flex items-center gap-4 mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
      <p className="italic text-gray-700">“{quote}”</p>
    </motion.div>
  )
}