import { Truck, Flame, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const BENEFITS = [
  {
    icon: Truck,
    title: 'Fully Mobile Pizza Truck',
    text: 'We travel up to 60 km from Ryde to bring our wood fired oven directly to your venue.',
  },
  {
    icon: Flame,
    title: 'Freshly Made Onsite',
    text: 'Family recipe pizza made live with fresh, quality ingredients cooked on the spot.',
  },
  {
    icon: Users,
    title: 'Family & Kid-Friendly',
    text: 'Perfect for birthdays, weddings, festivals, school functions and corporate events.',
  },
]

export function BenefitsStrip() {
  return (
    <section className="border-y border-gold/15  bg-gold">
      <div className="mx-auto grid max-w-7xl gap-px px-5 sm:grid-cols-3 lg:px-8">
        {BENEFITS.map((benefit, i) => (
          <Reveal
            key={benefit.title}
            delay={i * 120}
            className="flex items-start gap-4 py-10 sm:px-6 sm:first:pl-0 sm:last:pr-0"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/40 text-black">
              <benefit.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg text-black text-semi-bold">{benefit.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-black">{benefit.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
