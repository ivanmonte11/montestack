'use client'

import { motion } from 'framer-motion'
import { FaArrowRight, FaStore, FaBoxOpen } from 'react-icons/fa'

export function PrenderPOSCard() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 bg-gradient-to-br from-cyan-900/50 to-blue-900/50 flex items-center justify-center relative group">
        <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <FaStore className="text-6xl text-cyan-200/50 group-hover:scale-110 transition-transform duration-300" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            SaaS
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">Prender POS</h3>
        <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
          Sistema de punto de venta inteligente para comercios gastronómicos.
          Control de mesas, stock en tiempo real y métricas de ventas.
        </p>

        <a href="https://multi-business.vercel.app/" target="_blank" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group">
          Ver detalles
          <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export function StockingCard() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 flex items-center justify-center relative group">
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <FaBoxOpen className="text-6xl text-blue-200/50 group-hover:scale-110 transition-transform duration-300" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Logística
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Stocking</h3>
        <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
          Gestión de inventario simplificada para PyMEs.
          Alertas de stock bajo, reportes de movimientos y sincronización multi-depósito.
        </p>

        <a href="https://www.stocking.work" target="_blank" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group">
          Ver detalles
          <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}