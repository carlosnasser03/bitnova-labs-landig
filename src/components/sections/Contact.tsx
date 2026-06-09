import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageCircle, Check, AlertCircle } from 'lucide-react'
import { config } from '@/config/content'
import { Button, Input, Badge } from '@/components/ui'
import DOMPurify from 'dompurify'
import { z } from 'zod'

// Validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Mínimo 2 caracteres')
    .max(100, 'Máximo 100 caracteres')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'Solo letras y espacios'),
  email: z
    .string()
    .email('Email inválido')
    .max(255, 'Email muy largo'),
  company: z
    .string()
    .max(100, 'Máximo 100 caracteres')
    .optional()
    .or(z.literal('')),
  service: z.enum(['web', 'saas', 'security', 'consulting']),
  message: z
    .string()
    .min(10, 'Mínimo 10 caracteres')
    .max(5000, 'Máximo 5000 caracteres'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'web' as const,
    message: '',
  })
  const [honeypot, setHoneypot] = useState('') // Anti-spam
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [lastSubmitTime, setLastSubmitTime] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)

  // Sanitize input
  const sanitizeInput = (input: string): string => {
    return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] }).trim()
  }

  // Rate limiting (5 segundos entre submits)
  const isRateLimited = (): boolean => {
    const now = Date.now()
    if (now - lastSubmitTime < 5000) {
      setStatus('error')
      setErrors({ submit: 'Por favor espera antes de enviar otro mensaje' })
      setTimeout(() => {
        setStatus('idle')
        setErrors({})
      }, 3000)
      return true
    }
    return false
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    const sanitized = sanitizeInput(value)

    setFormData(prev => ({
      ...prev,
      [name]: sanitized,
    }))

    // Clear error for this field on change
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Anti-spam: honeypot check
    if (honeypot) {
      console.warn('Honeypot triggered')
      setStatus('success') // Fake success to not reveal honeypot
      return
    }

    // Rate limiting
    if (isRateLimited()) return

    setStatus('loading')
    setErrors({})

    try {
      // Validate with Zod
      const validated: ContactFormData = contactFormSchema.parse(formData)

      // TODO: Conectar a backend
      // const response = await fetch(import.meta.env.VITE_API_URL + '/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-Requested-With': 'XMLHttpRequest', // CSRF protection
      //   },
      //   credentials: 'include',
      //   body: JSON.stringify(validated),
      // })

      // Simulamos éxito
      setLastSubmitTime(Date.now())
      setStatus('success')

      // Generar WhatsApp link
      const whatsappMessage = encodeURIComponent(
        `Hola, me interesa el servicio de ${config.contact.services.find(s => s.id === validated.service)?.label || 'Bitnova'}.\n\nNombre: ${validated.name}\nEmpresa: ${validated.company || 'N/A'}\nEmail: ${validated.email}\n\nMensaje:\n${validated.message}`
      )
      const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${whatsappMessage}`
      window.open(whatsappUrl, '_blank')

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'web',
        message: '',
      })

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.issues.forEach(issue => {
          const path = issue.path[0] as string
          newErrors[path] = issue.message
        })
        setErrors(newErrors)
      } else {
        setErrors({ submit: 'Error al enviar. Intenta de nuevo.' })
      }
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-black to-slate-900">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {config.contact.title}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-6">
            {config.contact.subtitle}
          </p>

          {/* Quick Contact */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${config.site.whatsapp}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 text-sm transition"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={`mailto:${config.site.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 text-sm transition"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
          >
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Name + Email (compact) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/60 uppercase tracking-wide mb-2 block">
                  Nombre *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  disabled={status === 'loading'}
                  className={errors.name ? 'border-red-500/50' : ''}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-xs text-white/60 uppercase tracking-wide mb-2 block">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  disabled={status === 'loading'}
                  className={errors.email ? 'border-red-500/50' : ''}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Company + Service (compact) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/60 uppercase tracking-wide mb-2 block">
                  Empresa
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Tu empresa (opcional)"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label className="text-xs text-white/60 uppercase tracking-wide mb-2 block">
                  Servicio *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 disabled:opacity-50"
                >
                  {config.contact.services.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-white/60 uppercase tracking-wide mb-2 block">
                Mensaje *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos qué necesitas..."
                rows={4}
                required
                disabled={status === 'loading'}
                className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 disabled:opacity-50 resize-none ${
                  errors.message ? 'border-red-500/50' : ''
                }`}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Status Messages */}
            {errors.submit && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
              >
                <AlertCircle size={16} />
                {errors.submit}
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
              >
                <Check size={16} />
                ¡Mensaje enviado! Te contactaremos por WhatsApp
              </motion.div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar por WhatsApp
                </>
              )}
            </Button>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap gap-2 justify-center">
              <Badge variant="default" className="text-xs">
                ✓ Respuesta en 24h
              </Badge>
              <Badge variant="default" className="text-xs">
                ✓ Datos seguros
              </Badge>
              <Badge variant="default" className="text-xs">
                ✓ Sin compromiso
              </Badge>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
