'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const FAQS = [
  {
    q: 'What areas of Sydney do you cover?',
    a: 'We are based in Neutral Bay and our fully mobile pizza truck travels up to 60 km from Ryde. That covers the North Shore, Northern Beaches, Eastern Suburbs, Inner West, Hills District and much of greater Sydney. Get in touch and we’ll confirm your location.',
  },
  {
    q: 'How does the mobile pizza catering work?',
    a: 'We bring a traditional wood fired oven, fresh ingredients and our experienced team directly to your venue. Pizzas are prepared and cooked onsite, then served hot to your guests — all you-can-eat across a selection of pizzas.',
  },
  {
    q: 'Do you cater for dietary requirements?',
    a: 'Yes. We offer vegetarian and gluten free pizza options, and can tailor menus to suit your guests. Just let us know your requirements when you book.',
  },
  {
    q: 'How many guests can you cater for?',
    a: 'We cater for events of all sizes — from intimate family gatherings to large weddings and corporate functions. Let us know your guest numbers for an accurate quote.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We only take a limited number of events each weekend to keep quality high, so spots fill quickly — especially on weekends and holidays. We recommend booking as early as possible to secure your date.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Simply call us, email, or fill in the contact form with your event date and guest numbers. We’ll send you a quick, no-obligation pizza catering quote.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <span className="text-gold">Questions</span>
            </>
          }
        />

        <div className="mt-14 flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className={`rounded-lg border transition-colors ${
                  isOpen ? 'border-gold/40 bg-ink' : 'border-gold/15 bg-ink/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-cream">{faq.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
