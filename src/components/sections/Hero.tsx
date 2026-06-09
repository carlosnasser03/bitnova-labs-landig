import React from 'react'
import { config } from '@/config/content'

const Hero: React.FC = () => {
  return (
    <section className="w-full h-screen bg-black flex items-center justify-center pt-20">
      <div className="container-max px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {config.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-8">
          {config.hero.subheadline}
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded">
            {config.hero.ctaPrimary}
          </button>
          <button className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded">
            {config.hero.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
