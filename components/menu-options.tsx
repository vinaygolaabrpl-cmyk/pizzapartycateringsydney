import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const OPTIONS = [
  { name: 'Big Party', price: '$20', unit: 'pp' },
  { name: 'Traditional', price: '$25', unit: 'pp' },
  { name: 'Customised', price: '$28', unit: 'pp' },
  { name: 'Gourmet', price: '$30', unit: 'pp' },
]
const colorWhite = <span className="text-black">Menu Options</span>;


export function MenuOptions() {
  return (
    <section className="bg-gold py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow={colorWhite}
          eyebrowLineClassName="bg-black/60"

          title={
            <>
              Our Pizza Party <span className="text-black">Menu Options</span>
            </>
          }
          intro={<div className='text-white/70'>Flexible pizza catering packages to suit every budget and event. Pricing depends on your guest numbers and menu selection.</div>}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OPTIONS.map((option, i) => (
            <Reveal key={option.name} delay={i * 100}>
              <article className="group flex flex-col items-center rounded-lg border border-gold/20 bg-ink p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/60">
                <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-cream/70">
                  {option.name}
                </h3>
                <div className="mt-5 flex items-baseline justify-center gap-1">
                  <span className="font-serif text-5xl text-gold">{option.price}</span>
                  <span className="text-sm text-muted-foreground">{option.unit}</span>
                </div>
                <div className="mt-6 h-px w-12 bg-gold/40" />
                <a
                  href="#contact"
                  className="mt-6 text-sm font-medium text-gold transition-colors group-hover:text-gold-soft"
                >
                  Book Now
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-white/80">
          From affordable pizza catering at $20pp to premium Italian feasts — customise your menu
          with vegetarian or gluten free options.
        </p>
      </div>
    </section>
  )
}
