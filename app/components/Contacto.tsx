'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contacto() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('success')
  }

  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10" />

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para <span className="text-gradient">escalar?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Cuéntanos sobre tu proyecto. Analizamos tu caso y te proponemos una solución técnica a medida.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-white placeholder-gray-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Corporativo
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-white placeholder-gray-500"
                placeholder="nombre@empresa.com"
              />
            </div>
          </div>

          <div className="flex flex-col h-full">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-white placeholder-gray-500 flex-grow resize-none"
              placeholder="Detalles del proyecto..."
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Enviando...' : status === 'success' ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center mt-4 text-sm">
                Gracias por contactarnos. Te responderemos en breve.
              </p>
            )}
          </div>
        </form>
      </div>
    </motion.section>
  )
}