'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const REVIEWS = [
  {
    name: 'Sarah M.',
    event: 'Birthday Party, Neutral Bay',
    text: 'Absolutely the best mobile pizza catering Sydney has to offer! The wood fired oven was a showstopper and the pizzas were incredible. Our guests could not stop talking about it.',
  },
  {
    name: 'Daniel R.',
    event: 'Wedding, Northern Beaches',
    text: 'Claudio and the team made our wedding unforgettable. Fresh authentic Italian pizza cooked right in front of our guests — friendly, professional and delicious from start to finish.',
  },
  {
    name: 'Priya K.',
    event: 'Corporate Event, North Sydney',
    text: 'We booked them for an office function and it was seamless. Hassle-free, on time, and the gluten free and vegetarian options meant everyone was looked after. Highly recommend.',
  },
  {
    name: 'Tom & Elise',
    event: 'Engagement Party, Mosman',
    text: 'The antipasto buffet and all-you-can-eat pizza were a huge hit. Great value, amazing flavours and a genuinely lovely team to work with. We will definitely book again.',
  },
]


const colorWhite = <span className="text-black">Menu Options</span>;

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const review = REVIEWS[index]

  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length)

  return (
    <section className="bg-gold py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
        
          eyebrow={colorWhite}
          eyebrowLineClassName="bg-black/60"

          title={
            <>
              What Our <span className="text-black">Clients Say</span>
            </>
          }
          intro={<div className='text-black'>Rated 5.0 from 44 reviews by happy hosts across Sydney.</div>}
        />

        <div className="mt-14 rounded-2xl border border-gold/15 bg-charcoal p-8 sm:p-12">
          <Quote className="h-10 w-10 text-gold/40" />
          <div className="mt-6 flex items-center gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold" />
            ))}
          </div>
          <blockquote className="mt-5 min-h-[7rem] text-pretty text-lg leading-relaxed text-cream/90 sm:text-xl">
            “{review.text}”
          </blockquote>
          <div className="mt-8 flex items-center justify-between border-t border-gold/15 pt-6">
            <div>
              <p className="font-serif text-lg text-cream">{review.name}</p>
              <p className="text-sm text-gold">{review.event}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous review"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-cream transition-colors hover:bg-gold hover:text-ink"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-cream transition-colors hover:bg-gold hover:text-ink"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-gold' : 'w-2 bg-gold/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
