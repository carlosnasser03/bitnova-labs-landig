import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { config } from '@/config/content'
import { Button } from '@/components/ui'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container-max px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          whileHover="hover"
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg" />
          <span className="text-lg font-bold text-white hidden sm:inline">
            {config.site.name}
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {config.navigation.links.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </motion.a>
          ))}
          <Button
            variant="primary"
            size="sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contacto
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-blue-500 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 border-t border-white/10"
        >
          <div className="container-max px-6 py-4 flex flex-col gap-4">
            {config.navigation.links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => {
                setIsOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contacto
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
