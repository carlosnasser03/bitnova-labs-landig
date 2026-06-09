import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

const faqContent: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'pricing',
    question: '¿Cuál es el precio de un proyecto web?',
    answer: 'El precio depende del alcance y complejidad del proyecto. Ofrecemos opciones desde L. 15,000 para landing pages simples, hasta L. 80,000+ para e-commerce y aplicaciones complejas. Lo importante: **siempre presupuesto fijo, sin sorpresas**. En la primera consulta definimos exactamente qué incluye, cuándo se entrega y cuánto cuesta, sin ocultos. Trabajamos bajo metodología ágil con pagos en hitos (inicio, mitad, final).',
  },
  {
    id: 'faq-2',
    category: 'delivery',
    question: '¿Cuánto tarda en entregarse un proyecto?',
    answer: 'Un sitio web estándar: 4-8 semanas. Un SaaS custom: 8-16 semanas. Pero todo depende de tu scope. Usamos sprints de 2 semanas con demostraciones cada 7 días, así ves el progreso real y puedes hacer ajustes rápido. **No es "espera 3 meses sin saber qué pasa"** — es colaborativo y transparente. En la primera consulta te damos timeline exacto con hitos claros.',
  },
  {
    id: 'faq-3',
    category: 'technology',
    question: '¿Qué tecnologías utilizan?',
    answer: '**Frontend:** React 19, Next.js 14, TypeScript, Tailwind CSS, Framer Motion (animaciones premium). **Backend:** Node.js/Supabase (PostgreSQL), APIs REST. **Mobile:** React Native si necesitas app. **Infrastructure:** Vercel, AWS, o tu proveedor preferido. Todo moderno, escalable y con soporte a largo plazo. No usamos tecnologías viejas que después no encuentra quién las mantenga — siempre stack que el mercado laboral domina.',
  },
  {
    id: 'faq-4',
    category: 'support',
    question: '¿Qué soporte ofrecen post-lanzamiento?',
    answer: '**Primeros 3 meses:** soporte técnico incluido en el precio (bugs, actualizaciones, pequeños cambios). **Después:** ofrecemos planes mensuales opcionales (L. 2,000-5,000 dependiendo de nivel). Pero no es obligatorio — el código es tuyo 100%, si quieres cambiar de proveedor después, no hay problema. También ofrecemos soporte por hora (L. 400-600/hora) si solo necesitas ajustes esporádicos.',
  },
  {
    id: 'faq-5',
    category: 'maintenance',
    question: '¿Quién mantiene el código después del lanzamiento?',
    answer: 'El código es 100% tuyo. Tienes tres opciones: **(1) Nosotros lo mantenemos** (plan mensual), **(2) Tu equipo interno** (documentamos todo muy claro), o **(3) Otro proveedor** (el código es limpio y moderno, fácil de trabajar). Nuestro compromiso es entregar código profesional, bien documentado y sin "sorpresas técnicas" que aparezcan después. Usamos TypeScript y pruebas automáticas para evitar problemas futuros.',
  },
  {
    id: 'faq-6',
    category: 'security',
    question: '¿Cómo manejan la seguridad de datos?',
    answer: '**Encriptación:** todos los datos viajan cifrados (HTTPS/TLS). **Base de datos:** encriptación en reposo (at-rest). **Respaldos:** automáticos diarios en múltiples ubicaciones. **Auditorías:** revisamos el código con herramientas de seguridad antes de lanzar. **Cumplimiento:** GDPR-compatible, estándares internacionales. **Monitoreo:** 24/7 si lo necesitas. La seguridad no es "algo que agregamos después" — está **integrada desde la línea 1 del código**.',
  },
  {
    id: 'faq-7',
    category: 'saas',
    question: '¿Pueden construir un SaaS custom para mi negocio?',
    answer: 'Sí, es uno de nuestros fortalezas. Ya hemos entregado: **AguaDC** (app de servicios de agua en Tegucigalpa), **DeportesHN** (plataforma de comentarios deportivos), y otros. El proceso es: (1) Entendemos tu negocio, (2) Diseñamos flujos con prototipos, (3) Iteramos rápido con usuarios reales, (4) Lanzamos MVP, (5) Escalamos según demanda. Usamos **metodología lean** — primero validamos con usuarios antes de construir todo.',
  },
  {
    id: 'faq-8',
    category: 'process',
    question: '¿Cuál es el proceso de trabajo?',
    answer: '**Fase 1 - Descubrimiento (1-2 semanas):** Entendemos tu negocio, dolor, objetivos, usuarios. **Fase 2 - Propuesta (1 semana):** Te mostramos scope, timeline, precio en detalle. **Fase 3 - Sprints (2-3 meses):** Construimos en ciclos de 2 semanas, demostraciones cada viernes, feedback continuo. **Fase 4 - Testing (1 semana):** Pruebas finales, documentación, entrenamiento. **Fase 5 - Deploy (2-3 días):** Lanzamos a producción, monitoreo inicial. **Fase 6 - Soporte:** Estamos ahí si algo no funciona.',
  },
]

const FAQAccordion: React.FC<{
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}> = ({ item, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-start justify-between hover:bg-white/5 transition-colors duration-200 text-left"
      >
        <div className="flex items-start gap-4 flex-1">
          <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <h3 className="text-lg font-semibold text-white pr-4">
            {item.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white/5 border-t border-white/10"
          >
            <div className="px-6 py-4 pl-14">
              <p className="text-white/80 leading-relaxed">
                {item.answer.split('\n\n').map((paragraph, idx) => (
                  <span key={idx}>
                    {paragraph}
                    {idx < item.answer.split('\n\n').length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="faq" className="section-padding bg-black">
      <div className="container-max max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Respuestas claras a las dudas más comunes que nos hacen empresas en Honduras
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqContent.map((item, index) => (
            <FAQAccordion
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-violet-500/10 border border-white/10"
        >
          <p className="text-white/80 mb-4">
            ¿No encontraste la respuesta que buscas?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
          >
            Envíanos tu pregunta
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
