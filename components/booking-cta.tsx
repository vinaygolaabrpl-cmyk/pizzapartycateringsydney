import Image from 'next/image'
import { Phone } from 'lucide-react'
import { CONTACT } from '@/lib/site'
import { assetPath } from '@/lib/asset-path'

export function BookingCta() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={assetPath('/images/booking-bg.png')}
        alt="Wood fired pizza event in the evening"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center lg:py-32">
        <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
          <span className="h-px w-8 bg-gold/60" aria-hidden />
          Limited Weekend Bookings
          <span className="h-px w-8 bg-gold/60" aria-hidden />
        </span>
        <h2 className="mt-6 text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
          We Book Out Fast — <span className="text-gold">Don’t Miss Your Date!</span>
        </h2>
        <p className="mt-6 text-pretty leading-relaxed text-cream/80">
          We only take a few events each weekend to keep our woodfired pizza catering fresh and
          unforgettable. Spots go quickly — especially on weekends and holidays. Book now to secure
          your date!
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
          >
            Secure Your Date
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
    </section>
  )
}
