import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '@/lib/site'
import { assetPath } from '@/lib/asset-path'

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/15 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={assetPath('/images/logo.webp')}
                alt="Pizza Party Catering Sydney logo"
                width={52}
                height={52}
                className="h-12 w-12 rounded-full bg-cream/95 object-contain p-0.5"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-base font-semibold text-cream">
                  Pizza Party Catering
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">Sydney</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Mobile wood fired pizza catering bringing authentic Italian flavours directly to your
              venue across Sydney — for birthdays, weddings, corporate events and everything in
              between.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold">Explore</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold">Contact</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-cream/75">
              <li>
                <a href={CONTACT.phoneHref} className="flex items-start gap-3 hover:text-gold">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 break-all hover:text-gold">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {CONTACT.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pizza Party Catering Sydney. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Mobile Wood Fired Pizza Catering Sydney</p>
        </div>
      </div>
    </footer>
  )
}
