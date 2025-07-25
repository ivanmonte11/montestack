'use client'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
    {/* Branding */}
    <div>
      <h2 className="text-xl font-bold mb-2">MonteStack</h2>
      <p className="text-sm text-gray-300">
        Sistemas web con métricas y diseño estratégico.
      </p>
    </div>
    {/* Links */}
    <div>
      <h3 className="text-base font-semibold mb-2">Explorá</h3>
      <ul className="space-y-1 text-sm text-blue-400">
        <li><a href="#servicios" className="hover:underline">Servicios</a></li>
        <li><a href="#tecnologias" className="hover:underline">Tecnologías</a></li>
        <li><a href="#enfoque" className="hover:underline">Enfoque</a></li>
      </ul>
    </div>
    {/* Contacto */}
    <div>
      <h3 className="text-base font-semibold mb-2">Contacto</h3>
      <ul className="space-y-1 text-sm text-blue-400">
        <li><a href="mailto:hola@monte.dev" className="hover:underline">hola@monte.dev</a></li>
        <li><a href="https://github.com/ivanmonte" target="_blank" className="hover:underline">GitHub</a></li>
      </ul>
    </div>
  </div>
  <p className="text-center text-xs text-gray-400 mt-8">
    &copy; {new Date().getFullYear()} MonteStack. Todos los derechos reservados.
  </p>
</footer>

  )
}
