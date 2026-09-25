'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const IMAGES = [
  { src: '/images/gallery-1.png', alt: 'Wood fired pizza fresh from the oven' },
  { src: '/images/gallery-2.png', alt: 'Traditional wood fired oven with flames' },
  { src: '/images/gallery-3.png', alt: 'Pizza catering setup at a Sydney event' },
  { src: '/images/gallery-4.png', alt: 'Guests being served fresh pizza' },
  { src: '/images/gallery-5.png', alt: 'Pizzaiolo preparing dough' },
  { src: '/images/gallery-6.png', alt: 'Assortment of Italian pizzas' },
]

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="gallery" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Moments From Our <span className="text-gold">Pizza Parties</span>
            </>
          }
          intro="A taste of the wood-fired experience we bring to events across Sydney."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {IMAGES.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-lg ${
                i === 0 || i === 5 ? 'col-span-2 aspect-16/10 sm:col-span-1 sm:aspect-square' : 'aspect-square'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 ring-1 ring-inset ring-gold/10 transition-colors group-hover:bg-ink/20" />
            </button>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-cream transition-colors hover:bg-gold hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative aspect-4/3 w-full max-w-4xl overflow-hidden rounded-lg">
            <Image src={IMAGES[active].src} alt={IMAGES[active].alt} fill className="object-cover" />
          </div>
        </div>
      ) : null}
    </section>
  )
}
