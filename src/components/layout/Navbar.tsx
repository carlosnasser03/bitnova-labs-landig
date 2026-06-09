import React from 'react'
import { config } from '@/config/content'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="container-max py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-white">{config.site.name}</div>
        <div className="flex gap-8 items-center">
          {config.navigation.links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
            Contacto
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
