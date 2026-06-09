import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react'
import { config } from '@/config/content'

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const socialLinks = [
    { icon: Facebook, href: config.footer.socials.facebook, label: 'Facebook' },
    { icon: Instagram, href: config.footer.socials.instagram, label: 'Instagram' },
    { icon: Linkedin, href: config.footer.socials.linkedin, label: 'LinkedIn' },
    { icon: Github, href: config.footer.socials.github, label: 'GitHub' },
  ]

  return (
    <footer className="bg-slate-900/50 border-t border-white/10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="container-max px-6 py-16"
      >
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-white mb-4 text-lg">{config.site.name}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {config.site.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              {config.navigation.links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${config.site.email}`}
                className="text-white/60 hover:text-white transition flex items-center gap-2"
              >
                <Mail size={16} />
                {config.site.email}
              </a>
              <a
                href={`https://wa.me/${config.site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition flex items-center gap-2"
              >
                <Phone size={16} />
                {config.site.whatsapp}
              </a>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map(social => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center text-white/60 hover:text-white transition"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <motion.div
            variants={itemVariants}
            className="text-center text-white/50 text-sm"
          >
            <p>{config.footer.copyright}</p>
            <p className="mt-2 text-xs">
              Desarrollado con ❤️ por {config.site.name}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
