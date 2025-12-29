'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
      className="glass-card p-8 rounded-2xl relative"
    >
      {/* Quote Icon Background */}
      <div className="absolute top-6 right-8 text-6xl text-blue-500/10 font-serif leading-none select-none">
        &quot;
      </div>

      <div className="flex items-center gap-4 mb-6 relative z-10">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover border border-white/10"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-bold text-white">{name}</p>
          {role && <p className="text-sm text-blue-300">{role}</p>}
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed relative z-10">
        {quote}
      </p>
    </motion.div>
  )
}