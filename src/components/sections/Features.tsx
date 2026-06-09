import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'
import { Button } from '@/components/ui'

interface FeatureCard {
  title: string
  description: string
  videoSrc: string
  benefits: string[]
  cta: string
  color: string
}

const features: FeatureCard[] = [
  {
    title: '💻 Desarrollo Web',
    description: 'Sitios rápidos, seguros y que convierten clientes',
    videoSrc: '/videos/web-pillar.mp4',
    benefits: ['React/Next.js', 'TypeScript', 'Responsive', 'Performance'],
    cta: 'Solicitar Web',
    color: 'from-blue-500/20',
  },
  {
    title: '🔧 SaaS Custom',
    description: 'Plataformas hechas a tu medida que automatizan procesos',
    videoSrc: '/videos/saas-pillar.mp4',
    benefits: ['Automatización', 'Escalable', 'User-friendly', 'Analytics'],
    cta: 'Solicitar SaaS',
    color: 'from-violet-500/20',
  },
  {
    title: '🔐 Ciberseguridad',
    description: 'Protege tus datos y los de tus clientes',
    videoSrc: '/videos/security-pillar.mp4',
    benefits: ['Encriptación', 'Auditorías', 'Compliance', '24/7 Monitoring'],
    cta: 'Solicitar Audit',
    color: 'from-emerald-500/20',
  },
]

const VideoCard: React.FC<{
  feature: FeatureCard
  index: number
}> = ({ feature, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {})
          } else {
            videoRef.current.pause()
          }
        }
      },
      { threshold: 0.5 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ once: false }}
    >
      <CardContainer containerClassName="h-96">
        <CardBody className={`bg-gradient-to-br ${feature.color} to-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full h-full rounded-2xl p-6 border`}>
          {/* Title */}
          <CardItem
            translateZ={50}
            className="text-2xl font-bold text-white mb-2"
          >
            {feature.title}
          </CardItem>

          {/* Description */}
          <CardItem
            translateZ={60}
            className="text-white/70 text-sm max-w-sm mb-4"
          >
            {feature.description}
          </CardItem>

          {/* Video */}
          <CardItem translateZ={100} className="w-full flex-1">
            <video
              ref={videoRef}
              src={feature.videoSrc}
              loop
              muted
              playsInline
              preload="metadata"
              className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-300"
            />
          </CardItem>

          {/* Benefits */}
          <CardItem translateZ={50} className="mt-4">
            <div className="grid grid-cols-2 gap-2">
              {feature.benefits.map(benefit => (
                <div key={benefit} className="text-xs text-white/60 flex items-center gap-1">
                  <span className="text-blue-400">✓</span>
                  {benefit}
                </div>
              ))}
            </div>
          </CardItem>

          {/* CTA */}
          <CardItem translateZ={20} className="mt-6 w-full">
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {feature.cta}
            </Button>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  )
}

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-slate-900/30">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo Que Ofrecemos
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Tres pilares de servicios tecnológicos que transforman negocios en Honduras
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <VideoCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
