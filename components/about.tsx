import Image from 'next/image'
import { Eyebrow } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { assetPath } from '@/lib/asset-path'

export function About() {
  return (
    <section id="about" className="bg-gold/40 py-24 lg:py-32 ">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={assetPath('/images/pizzaiolo.png')}
              alt="Experienced pizzaiolo cooking wood fired pizza at a Sydney event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
        </Reveal>

        <div>
          <Eyebrow>About Us</Eyebrow>
          <h2 className="mt-6 text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
            A family passion for <span className="text-gold">authentic Italian pizza</span>
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Pizza Party Catering Sydney is a mobile wood fired pizza catering service built on a
            genuine love of authentic Italian food and warm hospitality. We bring a traditional
            wood-fired oven directly to your venue and prepare fresh pizzas onsite using family
            recipes and quality ingredients.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From intimate family celebrations to large corporate functions, our experienced and
            friendly team delivers delicious food and memorable service. We proudly serve clients
            across Sydney and are known as a trusted choice for wood fired pizza catering — with
            5-star reviews from hosts who become regulars.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              { stat: '5.0★', label: 'Average rating' },
              { stat: '44+', label: 'Happy events' },
              { stat: '60 km', label: 'Travel radius' },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-gold/40 pl-4">
                <p className="font-serif text-2xl text-gold">{item.stat}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
