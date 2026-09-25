import Image from 'next/image'
import { Phone } from 'lucide-react'
import { CONTACT } from '@/lib/site'
import { assetPath } from '@/lib/asset-path'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src={assetPath('/images/hero.png')}
        alt="Fresh wood fired pizza prepared onsite at a Sydney event"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-32 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-10 bg-gold/60" aria-hidden />
            Mobile Wood Fired Pizza Catering
          </span>
          <h1 className="mt-6 text-balance text-4xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Mobile Wood Fired <span className="text-gold">Pizza Catering</span> Sydney
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-cream/80 sm:text-lg">
            We bring authentic Italian flavours directly to your venue, with fresh pizzas prepared
            and cooked onsite in our traditional wood fired oven. From birthday parties and weddings
            to corporate events, business lunches and private dinners, our experienced team provides
            delicious food and friendly service your guests will remember.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
            >
              Get Your Free Quote
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-rule" aria-hidden />
    </section>
  )
}
