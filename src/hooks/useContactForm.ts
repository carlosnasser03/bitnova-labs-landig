import { useState } from 'react'
import type { IContactFormData, IContactFormState } from '@/types'

export function useContactForm() {
  const [formData, setFormData] = useState<IContactFormData>({
    name: '',
    email: '',
    company: '',
    service: 'web',
    message: '',
  })

  const [state, setState] = useState<IContactFormState>({
    status: 'idle',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState({ status: 'loading' })

    try {
      // TODO: Conectar a backend API
      // const response = await fetch(import.meta.env.VITE_API_URL + '/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // Por ahora, simulamos éxito
      setState({
        status: 'success',
        message: 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.',
      })

      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'web',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setState({ status: 'idle' }), 5000)
    } catch (error) {
      setState({
        status: 'error',
        message: 'Error al enviar el mensaje. Intenta de nuevo.',
      })
    }
  }

  return {
    formData,
    state,
    handleChange,
    handleSubmit,
  }
}
