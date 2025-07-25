'use client'

import { motion } from 'framer-motion'

export default function Contacto() {
  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-xl mx-auto bg-white rounded-lg shadow border"
    >
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Contacto</h2>
      <p className="mb-8 text-gray-600 text-center">
        ¿Querés trabajar con nosotros o tenés alguna duda? Escribinos y te respondemos pronto.
      </p>
      <form className="grid gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Tu nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ej: Iván Monte"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Tu correo
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ej: ivan@monte.dev"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Tu mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Contanos en qué podemos ayudarte..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Enviar
        </button>
      </form>
    </motion.section>
  )
}