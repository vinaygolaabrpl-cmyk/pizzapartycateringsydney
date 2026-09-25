import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Eyebrow } from '@/components/section-heading'

export function PizzaChoices() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="order-2 lg:order-1">
          <Eyebrow>Our Pizza Choices</Eyebrow>
          <h2 className="mt-6 text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
            Authentic Italian pizza, <span className="text-gold">baked on the spot</span>
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Turn your birthday, wedding, engagement or corporate event into an Italian feast with our
            mobile pizza catering Sydney service. Guests love the theatre of live cooking, unlimited
            pizza, and authentic flavours — fresh wood-fired pizzas baked onsite, Italian-inspired
            starters, mains and desserts, with family-friendly, all-you-can-eat options.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Trusted across Sydney for woodfired pizza catering at parties, weddings and corporate
            events.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/15 pt-8">
            <div>
              <p className="font-serif text-3xl text-gold">7</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Pizza choices, all you can eat
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">3</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Menus for every budget
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">GF</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Vegetarian & gluten free options
              </p>
            </div>
          </div>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-16/10 overflow-hidden rounded-lg">
              <Image
                src="/images/pizza-feature.png"
                alt="Fresh wood fired Italian pizza with quality toppings"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/gallery-2.png"
                alt="Wood fired oven with flames"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/gallery-4.png"
                alt="Pizza being served to guests"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
