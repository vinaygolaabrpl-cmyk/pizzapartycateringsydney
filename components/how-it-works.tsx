import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { assetPath } from '@/lib/asset-path'

const STEPS = [
  {
    number: '01',
    title: 'Choose Your Party Date',
    text: 'Pick the date of your event and let us know how many guests you’re expecting. We’ll give you a quick, no-obligation pizza catering quote so you can plan with ease.',
  },
  {
    number: '02',
    title: 'We Cook Fresh Onsite',
    text: 'Our fully mobile pizza truck catering Sydney service arrives with a traditional wood fired oven, fresh ingredients and everything needed to serve hot pizzas at your venue.',
  },
  {
    number: '03',
    title: 'Enjoy the Pizza & the Party',
    text: 'Sit back and relax while we prepare authentic Italian pizzas, including vegetarian and gluten free options. Your guests enjoy endless slices, and you enjoy a hassle-free event.',
  },
]

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gold py-24 lg:py-32">
      <Image
        src={assetPath('/images/pizzaiolo.png')}
        alt=""
        fill
        className="object-cover opacity-10"
        aria-hidden
      />
      <div className="absolute inset-0 bg-ink/45" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Simple Process"
          title={
            <>
              How Our Pizza <span className="text-gold">Catering Works</span>
            </>
          }
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 140}>
              <div className="relative flex h-full flex-col rounded-lg border border-gold/15 bg-ink/60 p-8 color-gold backdrop-blur-sm">
                <span className="font-serif text-6xl leading-none text-black/80">{step.number}</span>
                <h3 className="mt-5 text-xl text-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
