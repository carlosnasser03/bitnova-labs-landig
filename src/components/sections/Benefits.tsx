import React from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Clock,
  Shield,
  Rocket,
  Users,
  DollarSign,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'
import { config } from '@/config/content'

interface BenefitItem {
  title: string
  problem: string
  solution: string
  result: string
  icon: React.ReactNode
}

const iconMap = {
  'Zap': <Zap className="w-6 h-6" />,
  'Clock': <Clock className="w-6 h-6" />,
  'Shield': <Shield className="w-6 h-6" />,
  'Rocket': <Rocket className="w-6 h-6" />,
  'Users': <Users className="w-6 h-6" />,
  'DollarSign': <DollarSign className="w-6 h-6" />,
  'TrendingUp': <TrendingUp className="w-6 h-6" />,
  'CheckCircle': <CheckCircle2 className="w-6 h-6" />,
}

const BenefitCard = ({
  benefit,
  index,
}: {
  benefit: BenefitItem
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col py-12 px-6 relative group/benefit"
      whileHover={{ scale: 1.02 }}
    >
      {/* Gradient Overlay on Hover */}
      <div className="opacity-0 group-hover/benefit:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-br from-blue-500/3 via-transparent to-violet-500/3 pointer-events-none rounded-lg" />

      {/* Icon */}
      <div className="mb-4 relative z-10 text-blue-400 group-hover/benefit:text-blue-300 transition-colors duration-200">
        {benefit.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-4 relative z-10 group-hover/benefit:text-blue-200 transition-colors">
        {benefit.title}
      </h3>

      {/* Content */}
      <div className="space-y-4 relative z-10 text-sm flex-grow">
        <div>
          <p className="text-white/40 text-xs uppercase tracking-wide font-medium mb-2">
            El Problema
          </p>
          <p className="text-white/80">{benefit.problem}</p>
        </div>

        <div className="flex items-center justify-center py-2">
          <span className="text-white/30 text-lg">↓</span>
        </div>

        <div>
          <p className="text-white/40 text-xs uppercase tracking-wide font-medium mb-2">
            Nuestra Solución
          </p>
          <p className="text-white/80">{benefit.solution}</p>
        </div>

        <div className="flex items-center justify-center py-2">
          <span className="text-blue-400/50 text-lg">↓</span>
        </div>

        <div>
          <p className="text-white/40 text-xs uppercase tracking-wide font-medium mb-2">
            Tu Resultado
          </p>
          <p className="text-white/90 font-semibold text-base group-hover/benefit:text-green-300 transition-colors">
            ✓ {benefit.result}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const Benefits: React.FC = () => {
  const benefits: BenefitItem[] = config.benefits.map((b, idx) => ({
    title: b.title,
    problem: b.problem,
    solution: b.solution,
    result: b.result,
    icon: Object.values(iconMap)[idx % Object.values(iconMap).length],
  }))

  return (
    <section id="benefits" className="section-padding bg-black">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cómo Te Ayudamos
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Tu negocio enfrenta desafíos específicos. Te mostramos cómo los resolvemos y qué ganas al trabajar con nosotros.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 relative z-10 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
