'use client'

import { ArrowRight } from 'lucide-react'
import { FormEvent, useState } from 'react'

type ContactContent = {
  cta: string
  email: string
  nameLabel: string
  emailLabel: string
  messageLabel: string
  sending: string
  success: string
  error: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm({ content }: { content: ContactContent }) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${content.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await response.json().catch(() => null)
      if (!response.ok || result?.success === false || result?.success === 'false') throw new Error('send failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p className="contact-status" role="status">{content.success}</p>
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Nouveau message depuis skalean.fr" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="contact-honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="contact-row">
        <label>
          <span>{content.nameLabel}</span>
          <input type="text" name="name" required maxLength={100} autoComplete="name" />
        </label>
        <label>
          <span>{content.emailLabel}</span>
          <input type="email" name="email" required maxLength={254} autoComplete="email" />
        </label>
      </div>
      <label>
        <span>{content.messageLabel}</span>
        <textarea name="message" rows={5} required maxLength={5000} />
      </label>
      <button className="button button-copper" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? content.sending : content.cta}
        <ArrowRight aria-hidden="true" />
      </button>
      {status === 'error' && (
        <p className="contact-status" role="alert">
          {content.error} <a href={`mailto:${content.email}`}>{content.email}</a>.
        </p>
      )}
    </form>
  )
}
