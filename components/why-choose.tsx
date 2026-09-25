import Image from 'next/image'
import { Check, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Eyebrow } from '@/components/section-heading'

const POINTS = [
  'Family recipe pizza made live with fresh, quality ingredients',
  'Mobile pizza catering across Sydney — we travel up to 60 km from Ryde to bring the oven to you',
  'Perfect for birthdays, weddings, festivals, school functions and corporate events',
  '5-star reviews from happy hosts who call us the best mobile pizza catering Sydney',
  'Limited bookings per weekend — we focus on quality over quantity',
]

export function WhyChoose() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-lg">
            <Image
              src="/images/about.png"
              alt="Wood fired pizza being prepared at a Sydney catering event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-lg border border-gold/25 bg-charcoal/95 px-6 py-4 shadow-xl backdrop-blur sm:-right-6">
            <div className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold" />
              ))}
            </div>
            <div className="leading-tight">
              <p className="font-serif text-xl text-cream">5.0</p>
              <p className="text-xs text-muted-foreground">Based on 44 reviews</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="mt-6 text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
            An unforgettable <span className="text-gold">catering experience</span>
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            At Pizza Party Catering Sydney, we create an unforgettable catering experience. Our team
            brings a mobile wood-fired pizza oven directly to your venue, preparing and serving fresh
            pizzas on site with authentic Italian flavours. From family celebrations to corporate
            functions, we are a trusted choice for wood-fired pizza catering across Sydney.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {POINTS.map((point, i) => (
              <Reveal as="li" key={point} delay={i * 80} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-cream/85">{point}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
