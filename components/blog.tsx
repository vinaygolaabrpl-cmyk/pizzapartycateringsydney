import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { assetPath } from '@/lib/asset-path'

const POSTS = [
  {
    image: assetPath('/images/blog-1.png'),
    tag: 'Party Tips',
    title: 'How to Plan the Perfect Pizza Party in Sydney',
    excerpt:
      'From guest numbers to menu selection, here’s everything you need to know to host a memorable wood-fired pizza party at your next celebration.',
  },
  {
    image: assetPath('/images/blog-2.png'),
    tag: 'Weddings',
    title: 'Why Wood Fired Pizza Is the Ultimate Wedding Catering Choice',
    excerpt:
      'Interactive, delicious and unforgettable — discover why more Sydney couples are choosing wood fired pizza catering for their big day.',
  },
  {
    image: assetPath('/images/blog-3.png'),
    tag: 'Corporate',
    title: 'Corporate Pizza Catering: Impress Your Team & Clients',
    excerpt:
      'Hassle-free, professional and crowd-pleasing. Learn how our corporate pizza catering packages take the stress out of office events.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gold/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="From The Blog"
          title={
            <>
              Pizza Catering Sydney <span className="text-gold">Blog</span>
            </>
          }
          intro="Tips, ideas and inspiration for planning your next event with mobile wood fired pizza catering."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gold/15 bg-charcoal transition-all duration-300 hover:border-gold/50">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-ink">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg leading-snug text-cream">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors group-hover:text-gold-soft">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
