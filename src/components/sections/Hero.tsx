import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { config } from '@/config/content'
import { Button } from '@/components/ui'

const Hero: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -20 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1 } },
  }

  const scrollVariants = {
    initial: { y: 0 },
    animate: { y: [0, 10, 0], transition: { duration: 2, repeat: Infinity } },
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      {config.hero.videoUrl && (
        <video
          src={config.hero.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-max px-6 text-center max-w-4xl"
      >
        {/* Animated Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 flex justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-24 h-24 bg-gradient-to-br from-blue-500 via-violet-500 to-amber-500 rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
        >
          {config.hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
        >
          {config.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {config.hero.ctaPrimary}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById('social-proof')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {config.hero.ctaSecondary}
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={scrollVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-white/60" />
      </motion.div>
    </section>
  )
}

export default Hero
