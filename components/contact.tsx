'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { Clock, Mail, MapPin, Phone, Check } from 'lucide-react'
import { CONTACT } from '@/lib/site'
import { Eyebrow } from '@/components/section-heading'
import { assetPath } from '@/lib/asset-path'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-gold/40 py-24 lg:py-32">
      <Image
        src={assetPath('/images/contact.png')}
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-ink/40" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="mt-6 text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
            Let’s Plan Your <span className="text-gold">Pizza Party</span>
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Ready to book Sydney’s favourite mobile wood fired pizza catering? Send us your event
            details for a fast, no-obligation quote — or give us a call today.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            <a href={CONTACT.phoneHref} className="group flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Call Us
                </span>
                <span className="mt-1 block text-cream transition-colors group-hover:text-gold">
                  {CONTACT.phone}
                </span>
              </span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="group flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email Us
                </span>
                <span className="mt-1 block break-all text-cream transition-colors group-hover:text-gold">
                  {CONTACT.email}
                </span>
              </span>
            </a>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Find Us
                </span>
                <span className="mt-1 block text-cream">{CONTACT.address}</span>
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Clock className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Opening Hours
                </span>
                <span className="mt-1 block text-cream">{CONTACT.hours}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gold/20 bg-charcoal/90 p-8 backdrop-blur sm:p-10">
          {submitted ? (
            <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-cream">Thank you!</h3>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Your enquiry has been received. We’ll be in touch shortly with your pizza catering
                quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Event Date" name="date" type="date" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Event Type" name="event" placeholder="Birthday, wedding…" />
                <Field label="Guests" name="guests" type="number" placeholder="e.g. 50" />
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-cream/70">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your event…"
                  className="rounded-lg border border-gold/20 bg-ink/60 px-4 py-3 text-sm text-cream placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
              >
                Request My Free Quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-cream/70">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-gold/20 bg-ink/60 px-4 py-3 text-sm text-cream placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold"
      />
    </label>
  )
}
