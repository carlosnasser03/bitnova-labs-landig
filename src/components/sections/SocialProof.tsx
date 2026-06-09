import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Globe, MessageSquare } from 'lucide-react'
import { config } from '@/config/content'
import { useCarousel } from '@/hooks'
import { Button, Badge, Card, StarRating } from '@/components/ui'

const socialIconMap = {
  facebook: Globe,
  instagram: MessageSquare,
  linkedin: Globe,
  google: Star,
} as const

const SocialProof: React.FC = () => {
  const { current, next, prev } = useCarousel(config.testimonials.length, true, 6000)

  const getVisibleIndices = () => {
    const testimonials = config.testimonials
    return [
      (current - 1 + testimonials.length) % testimonials.length,
      current,
      (current + 1) % testimonials.length,
    ]
  }

  const visibleIndices = getVisibleIndices()

  const cardVariants = {
    center: {
      scale: 1,
      rotateY: 0,
      opacity: 1,
      zIndex: 20,
      x: 0,
    },
    left: {
      scale: 0.85,
      rotateY: 25,
      opacity: 0.6,
      zIndex: 10,
      x: -40,
    },
    right: {
      scale: 0.85,
      rotateY: -25,
      opacity: 0.6,
      zIndex: 10,
      x: 40,
    },
  }

  return (
    <section id="social-proof" className="section-padding bg-slate-900/30">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen de nosotros
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Testimonios reales de clientes y empresas en Honduras que han transformado su negocio con nuestros servicios
          </p>
        </motion.div>

        {/* Carousel 3D */}
        <div className="flex flex-col items-center gap-12">
          {/* Cards Container */}
          <div className="w-full max-w-5xl h-96 flex items-center justify-center perspective">
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                {visibleIndices.map((index, position) => {
                  const testimonial = config.testimonials[index]
                  const SocialIcon = socialIconMap[testimonial.socialMedia]

                  let variant: 'left' | 'center' | 'right'
                  if (position === 0) variant = 'left'
                  else if (position === 1) variant = 'center'
                  else variant = 'right'

                  return (
                    <motion.div
                      key={`${index}-${current}`}
                      variants={cardVariants}
                      initial={variant}
                      animate={variant}
                      exit={variant}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="absolute w-full max-w-sm"
                      style={{ perspective: '1000px' }}
                    >
                      <Card className="h-full flex flex-col p-8 relative overflow-hidden group">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-white font-semibold text-lg">
                                {testimonial.name}
                              </h3>
                              <p className="text-white/60 text-sm">
                                {testimonial.company}
                              </p>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              className="flex-shrink-0"
                            >
                              <SocialIcon className="w-6 h-6 text-blue-500" />
                            </motion.div>
                          </div>

                          {/* Rating */}
                          <div className="mb-4">
                            <StarRating rating={testimonial.rating} size="sm" />
                          </div>

                          {/* Comment */}
                          <p className="text-white/80 text-sm leading-relaxed flex-grow mb-4 italic">
                            "{testimonial.comment}"
                          </p>

                          {/* Badge */}
                          <Badge
                            variant={testimonial.socialMedia as any}
                            className="w-fit text-xs"
                          >
                            {testimonial.socialMedia.charAt(0).toUpperCase() +
                              testimonial.socialMedia.slice(1)}
                          </Badge>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={prev}
              className="hover:bg-white/10"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {config.testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    // Navigate to this testimonial
                    const diff = idx - current
                    if (diff > 0) {
                      for (let i = 0; i < diff; i++) next()
                    } else if (diff < 0) {
                      for (let i = 0; i < Math.abs(diff); i++) prev()
                    }
                  }}
                  className={`rounded-full transition-all ${
                    idx === current
                      ? 'bg-blue-500 w-3 h-3'
                      : 'bg-white/20 w-2 h-2 hover:bg-white/40'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={next}
              className="hover:bg-white/10"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Counter */}
          <p className="text-white/60 text-sm">
            {current + 1} / {config.testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
