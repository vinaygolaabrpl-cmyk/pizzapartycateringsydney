import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { BenefitsStrip } from '@/components/benefits-strip'
import { WhyChoose } from '@/components/why-choose'
import { Services } from '@/components/services'
import { MenuPackages } from '@/components/menu-packages'
import { HowItWorks } from '@/components/how-it-works'
import { PizzaChoices } from '@/components/pizza-choices'
import { MenuOptions } from '@/components/menu-options'
import { BookingCta } from '@/components/booking-cta'
import { Testimonials } from '@/components/testimonials'
import { Gallery } from '@/components/gallery'
import { About } from '@/components/about'
import { ServiceAreas } from '@/components/service-areas'
import { Blog } from '@/components/blog'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <BenefitsStrip />
        <WhyChoose />
        <Services />
        <MenuPackages />
        <HowItWorks />
        <PizzaChoices />
        <MenuOptions />
        <BookingCta />
        <Testimonials />
        <Gallery />
        <About />
        <ServiceAreas />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
