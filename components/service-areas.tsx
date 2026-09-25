import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const REGIONS = [
  { name: 'North Shore', suburbs: ['Neutral Bay', 'Mosman', 'Chatswood', 'North Sydney', 'Lane Cove'] },
  { name: 'Northern Beaches', suburbs: ['Manly', 'Dee Why', 'Brookvale', 'Freshwater', 'Narrabeen'] },
  { name: 'Eastern Suburbs', suburbs: ['Bondi', 'Coogee', 'Randwick', 'Double Bay', 'Vaucluse'] },
  { name: 'Inner West', suburbs: ['Ryde', 'Leichhardt', 'Balmain', 'Drummoyne', 'Marrickville'] },
  { name: 'The Hills District', suburbs: ['Castle Hill', 'Baulkham Hills', 'Kellyville', 'Rouse Hill'] },
  { name: 'Western Sydney', suburbs: ['Parramatta', 'Blacktown', 'Penrith', 'Liverpool'] },
]

export function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Service Areas"
          title={
            <>
              Mobile Pizza Catering <span className="text-gold">Across Sydney</span>
            </>
          }
          intro="Based in Neutral Bay, our fully mobile pizza truck travels up to 60 km from Ryde to bring the wood fired oven directly to your venue — right across Sydney."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((region, i) => (
            <Reveal key={region.name} delay={i * 90}>
              <article className="flex h-full flex-col rounded-lg border border-gold/15 bg-ink p-7 transition-colors hover:border-gold/40">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg text-cream">{region.name}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {region.suburbs.map((suburb) => (
                    <li
                      key={suburb}
                      className="rounded-full border border-gold/20 px-3 py-1 text-xs text-cream/75"
                    >
                      {suburb}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don’t see your suburb? Get in touch — we cover many more areas across greater Sydney.
        </p>
      </div>
    </section>
  )
}
