import React from 'react'
import { config } from '@/config/content'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">{config.site.name}</h3>
            <p className="text-white/70 text-sm">{config.site.description}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              {config.navigation.links.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <p className="text-white/70 text-sm">{config.site.email}</p>
            <p className="text-white/70 text-sm">{config.site.whatsapp}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {/* Sociales irán aquí */}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/70 text-sm">
          {config.footer.copyright}
        </div>
      </div>
    </footer>
  )
}

export default Footer
