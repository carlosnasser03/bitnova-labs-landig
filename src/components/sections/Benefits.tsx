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
import { cn } from '@/utils/cn'

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
  const isBottomRow = index >= 4
  const isLeftColumn = index % 4 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'flex flex-col lg:border-r py-10 px-6 relative group/benefit dark:border-white/10',
        (isLeftColumn && 'lg:border-l dark:border-white/10'),
        (!isBottomRow && 'lg:border-b dark:border-white/10')
      )}
      whileHover={{ scale: 1.02 }}
    >
      {/* Gradient Overlay */}
      {!isBottomRow && (
        <div className="opacity-0 group-hover/benefit:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/5 via-transparent to-transparent pointer-events-none" />
      )}
      {isBottomRow && (
        <div className="opacity-0 group-hover/benefit:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-violet-500/5 via-transparent to-transparent pointer-events-none" />
      )}

      {/* Icon */}
      <div className="mb-6 relative z-10 text-blue-400 group-hover/benefit:text-violet-400 transition-colors duration-200">
        {benefit.icon}
      </div>

      {/* Title with Left Accent Bar */}
      <div className="text-lg font-bold mb-3 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/benefit:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/benefit:bg-blue-500 transition-all duration-300 origin-center" />
        <span className="group-hover/benefit:translate-x-2 transition duration-300 inline-block text-white">
          {benefit.title}
        </span>
      </div>

      {/* Problem → Solution → Result */}
      <div className="space-y-3 relative z-10 text-sm">
        <div>
          <p className="text-white/50 text-xs uppercase tracking-wide mb-1">
            El Problema
          </p>
          <p className="text-white/80">{benefit.problem}</p>
        </div>

        <div className="flex items-center gap-2 text-blue-400">
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
          <span className="text-xs">→</span>
          <div className="flex-1 h-px bg-gradient-to-l from-blue-500/50 to-transparent" />
        </div>

        <div>
          <p className="text-white/50 text-xs uppercase tracking-wide mb-1">
            Nuestra Solución
          </p>
          <p className="text-white/80">{benefit.solution}</p>
        </div>

        <div className="flex items-center gap-2 text-violet-400">
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
          <span className="text-xs">→</span>
          <div className="flex-1 h-px bg-gradient-to-l from-violet-500/50 to-transparent" />
        </div>

        <div>
          <p className="text-white/50 text-xs uppercase tracking-wide mb-1">
            Tu Resultado
          </p>
          <p className="text-white/80 font-semibold text-base group-hover/benefit:text-green-400 transition-colors">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto border border-white/10 rounded-2xl overflow-hidden">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
