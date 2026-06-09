import type { ITestimonial, IBenefit, IFeature, IFAQItem } from '../types';

export const config = {
  site: {
    name: 'Bitnova Labs',
    description: 'Soluciones de web, SaaS y seguridad para empresas honduras',
    url: 'https://bitnova.hn',
    email: import.meta.env.VITE_CONTACT_EMAIL,
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER,
  },

  navigation: {
    links: [
      { label: 'Beneficios', href: '#benefits' },
      { label: 'Características', href: '#features' },
      { label: 'Preguntas', href: '#faq' },
      { label: 'Contacto', href: '#contact' },
    ],
  },

  hero: {
    videoUrl: '', // Carlos proporciona
    headline: 'Tecnología que impulsa tu negocio',
    subheadline: 'Web, SaaS y seguridad para empresas que crecen rápido',
    ctaPrimary: 'Solicita tu propuesta gratis',
    ctaSecondary: 'Ver nuestro trabajo',
  },

  testimonials: [
    {
      id: 'test-1',
      name: 'Carlos Mejía',
      company: 'Tech Store Honduras',
      rating: 5,
      comment: 'Transformaron completamente nuestro sitio web. Pasamos de 10 a 150 clientes por mes en 3 meses.',
      socialMedia: 'facebook',
    },
    {
      id: 'test-2',
      name: 'María López',
      company: 'Consultora Digital HN',
      rating: 5,
      comment: 'El mejor equipo que hemos contratado. Entrega rápida, código limpio y soporte excelente.',
      socialMedia: 'linkedin',
    },
    {
      id: 'test-3',
      name: 'Roberto Martínez',
      company: 'Importadora Martínez SA',
      rating: 4,
      comment: 'Buena calidad de trabajo. El proyecto tardó un poco más de lo esperado pero el resultado vale la pena.',
      socialMedia: 'google',
    },
    {
      id: 'test-4',
      name: 'Karla Reyes',
      company: 'Fashion Shop Tegucigalpa',
      rating: 5,
      comment: 'Crearon un SaaS custom para mi negocio. Ahora manejo todo desde un panel, increíble eficiencia.',
      socialMedia: 'instagram',
    },
    {
      id: 'test-5',
      name: 'Luis Hernández',
      company: 'Restaurante La Tasca',
      rating: 5,
      comment: 'Sistema de reservas online que funciona perfecto. Recomendado 100%. Atienden en español, muy bueno.',
      socialMedia: 'facebook',
    },
    {
      id: 'test-6',
      name: 'Diana Flores',
      company: 'Academia Online TGU',
      rating: 4,
      comment: 'Excelente plataforma educativa. El soporte local es lo mejor, no como otras agencias.',
      socialMedia: 'linkedin',
    },
  ] as ITestimonial[],

  benefits: [
    {
      id: 'benefit-1',
      icon: 'Zap',
      title: 'Conversiones que crecen',
      problem: 'Tu web es lenta, pierdes clientes antes de cargar',
      solution: 'Optimizamos velocidad, diseño y UX en cada detalle',
      result: 'Empresas ven +3x en conversiones en 90 días',
    },
    {
      id: 'benefit-2',
      icon: 'Clock',
      title: 'Procesos que ahorran tiempo',
      problem: 'Tus equipos gastan 20+ horas por semana en tareas manuales',
      solution: 'Construimos SaaS custom que automatiza todo',
      result: 'Recuperas 20h semanales para crecer tu negocio',
    },
    {
      id: 'benefit-3',
      icon: 'Shield',
      title: 'Seguridad real desde día 1',
      problem: 'Tus datos están expuestos, sin encriptación ni respaldo',
      solution: 'Integramos seguridad desde el primer línea de código',
      result: 'Cero incidentes de seguridad, cumplimiento total',
    },
    {
      id: 'benefit-4',
      icon: 'Rocket',
      title: 'Entrega en semanas, no meses',
      problem: 'Otras agencias prometen y tardan eternamente',
      solution: 'Metodología ágil, sprints cortos, resultados visibles',
      result: 'Tu producto en producción en 4-8 semanas',
    },
    {
      id: 'benefit-5',
      icon: 'Users',
      title: 'Equipo local que te entiende',
      problem: 'Agencias remotas, horarios imposibles, no entienden tu mercado',
      solution: 'Equipo 100% Tegucigalpa, calls en tu horario, cultura local',
      result: 'Comunicación directa, sin middlemen, sin confusiones',
    },
    {
      id: 'benefit-6',
      icon: 'DollarSign',
      title: 'Precio transparente, sin sorpresas',
      problem: 'Presupuestos que explota a mitad del proyecto',
      solution: 'Precio fijo, scope claro, cambios previstos desde inicio',
      result: 'Sabes exactamente cuánto pagas, sin deudas sorpresas',
    },
  ] as IBenefit[],

  features: [
    {
      category: 'Velocidad de Entrega',
      bitnova: 'Semanas',
      traditional: 'Meses',
      highlight: true,
    },
    {
      category: 'Precios',
      bitnova: 'Transparentes',
      traditional: 'Ocultos, sorpresas',
      highlight: true,
    },
    {
      category: 'Stack Tecnológico',
      bitnova: 'Moderno (React, Next.js, TypeScript)',
      traditional: 'Legacy (jQuery, PHP antiguo)',
      highlight: true,
    },
    {
      category: 'Soporte',
      bitnova: 'Directo con el equipo, local',
      traditional: 'Tickets, espera, remoto',
    },
    {
      category: 'Productos SaaS Propios',
      bitnova: '✅ Validados con usuarios reales',
      traditional: '❌ Ninguno, solo servicios',
      highlight: true,
    },
    {
      category: 'Seguridad',
      bitnova: 'Integrada desde el inicio',
      traditional: 'Add-on caro al final',
    },
    {
      category: 'Escalabilidad',
      bitnova: 'Pensado para crecer',
      traditional: 'Limitado, requiere refactor',
    },
    {
      category: 'Comunicación',
      bitnova: 'Directa, sin burocracia',
      traditional: 'Procesos largos, approval chains',
    },
  ] as IFeature[],

  faq: [
    {
      id: 'faq-1',
      category: 'pricing',
      question: '¿Cuál es el precio de un proyecto web?',
      answer: 'Depende del alcance, pero manejamos rangos desde L. 15,000 para landing simple hasta L. 80,000+ para e-commerce complejo. Siempre presupuesto fijo, sin sorpresas.',
    },
    {
      id: 'faq-2',
      category: 'delivery',
      question: '¿Cuánto tarda un proyecto típico?',
      answer: 'Web estándar: 4-8 semanas. SaaS custom: 8-16 semanas. Depende de tu scope. En la primera consulta definimos timeline exacto.',
    },
    {
      id: 'faq-3',
      category: 'technology',
      question: '¿Qué tecnologías usan?',
      answer: 'Web: React, Next.js, TypeScript, Tailwind. Backend: Node.js, Supabase, PostgreSQL. Mobile: React Native. Todo moderno, escalable y mantenible.',
    },
    {
      id: 'faq-4',
      category: 'support',
      question: '¿Qué soporte ofrecen post-lanzamiento?',
      answer: 'Mantenimiento 24/7 disponible. Soporte técnico incluido 3 meses. Después, planes mensuales opcionales o soporte por hora según necesites.',
    },
    {
      id: 'faq-5',
      category: 'maintenance',
      question: '¿Quién mantiene el código después?',
      answer: 'Tú eres dueño del código 100%. Opcionalmente, ofrecemos mantenimiento mensual. Si cambias proveedor después, no hay problema, el código es tuyo.',
    },
    {
      id: 'faq-6',
      category: 'security',
      question: '¿Cómo manejan la seguridad de datos?',
      answer: 'Encriptación end-to-end, backups automáticos, auditorías de código, cumplimiento GDPR-compatible. Seguridad desde línea 1 del código, no add-on.',
    },
    {
      id: 'faq-7',
      category: 'saas',
      question: '¿Pueden construir un SaaS custom para mi negocio?',
      answer: 'Sí, es nuestro specialty. Ya hemos entregado AguaDC (servicios de agua) y DeportesHN (comentarios deportivos). Usamos pruebas de usuario reales.',
    },
    {
      id: 'faq-8',
      category: 'process',
      question: '¿Cuál es el proceso de trabajo?',
      answer: '1. Descubrimiento y scope. 2. Propuesta detallada. 3. Sprints de 2 semanas con demos. 4. Feedback, ajustes, refinamiento. 5. Deploy. 6. Soporte post-lanzamiento.',
    },
  ] as IFAQItem[],

  contact: {
    title: 'Construyamos tu idea juntos',
    subtitle: 'Completa el formulario y nos ponemos en contacto en 24 horas',
    services: [
      { id: 'web', label: 'Desarrollo Web' },
      { id: 'saas', label: 'SaaS Custom' },
      { id: 'security', label: 'Seguridad & Auditoría' },
      { id: 'consulting', label: 'Consultoría Tech' },
    ],
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Bitnova Labs. Todos los derechos reservados.`,
    socials: {
      facebook: 'https://facebook.com/bitnovahonduras',
      instagram: 'https://instagram.com/bitnovahonduras',
      linkedin: 'https://linkedin.com/company/bitnova-labs',
      github: 'https://github.com/bitnovahonduras',
    },
  },
};
