import React from 'react'
import { config } from '@/config/content'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-max max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-center">{config.contact.title}</h2>
        <p className="text-white/70 text-center mb-8">{config.contact.subtitle}</p>
        <form className="space-y-4">
          {/* Formulario irá aquí */}
        </form>
      </div>
    </section>
  )
}

export default Contact
