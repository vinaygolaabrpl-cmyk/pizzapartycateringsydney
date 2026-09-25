import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { assetPath } from '@/lib/asset-path'

const SERVICES = [
  {
    image: assetPath('/images/service-birthday.png'),
    title: 'Birthday Party Pizza Catering',
    text: 'Make birthdays unforgettable with our fun and family-friendly birthday pizza catering Sydney service. Fresh pizzas, Nutella desserts, and kid-approved favourites — perfect for all ages.',
  },
  {
    image: assetPath('/images/service-wedding.png'),
    title: 'Wedding Pizza Catering',
    text: 'Add a unique touch to your big day with wedding pizza catering Sydney. Guests love our wood fired pizzas, interactive cooking, and all-you-can-eat packages that keep the celebration alive.',
  },
  {
    image: assetPath('/images/service-corporate.png'),
    title: 'Corporate Pizza Catering',
    text: 'From office lunches to large corporate events, our corporate pizza catering Sydney packages are designed to impress. Hassle-free, professional, and delicious — perfect for teams and clients.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gold/40 py-24 lg:py-32 ">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              <span className='text-white'>Our Pizza Catering </span><span className="text-gold">Services in Sydney</span>
            </>
          }
          intro="We provide a full range of mobile wood fired pizza catering services, designed to suit every type of event — from an intimate family celebration to a large-scale corporate function."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg  bg-ink transition-all duration-300 hover:border-gold/50">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7 color-gold">
                  <h3 className="text-xl text-black text-semi-bold">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-black">
                    {service.text}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-white"
                  >
                    Enquire Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
