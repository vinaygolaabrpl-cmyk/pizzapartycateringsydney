import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

type Course = { label: string; items: string[] }

const MENUS: { name: string; courses: Course[]; featured?: boolean }[] = [
  {
    name: 'Traditional',
    courses: [
      { label: 'Starter', items: ['Garlic cheese', 'Bruschetta with cherry tomatoes', 'Garlic pizza'] },
      { label: 'Main Course', items: ['7 choices of pizza, all you can eat'] },
      { label: 'Desserts', items: ['Nutella pizza', 'Italian mixed salad'] },
    ],
  },
  {
    name: 'Italian Antipasto Buffet & Pizza',
    featured: true,
    courses: [
      {
        label: 'Buffet Starter',
        items: [
          'Coppa',
          'Mortadella',
          'Pancetta',
          'Salame',
          'Salame chilly',
          '4 mixed Italian cheeses',
          'Fruit',
          'Vegetable',
        ],
      },
      { label: 'Main Course', items: ['7 choices of pizza, all you can eat', 'Mixed Italian salad'] },
      { label: 'Desserts', items: ['Cannoli'] },
    ],
  },
  {
    name: 'Pizza Pasta Antipasto',
    courses: [
      {
        label: 'Buffet Starter',
        items: [
          'Coppa',
          'Mortadella',
          'Pancetta',
          'Salame',
          'Salame chilly',
          '4 mixed Italian cheeses',
          'Fruit',
          'Vegetable',
        ],
      },
      {
        label: 'Main Course',
        items: ['2 choices of pasta', '7 choices of pizza, all you can eat', 'Mixed Italian salad'],
      },
      { label: 'Desserts', items: ['Cannoli'] },
    ],
  },
]

export function MenuPackages() {
  return (
    <section id="menu" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Catering Packages"
          title={
            <>
              Wood-Fired Pizza Menu — <span className="text-gold">Freshly Baked On The Spot</span>
            </>
          }
          intro="Planning a birthday, wedding, or family gathering? Our mobile woodfired pizza catering Sydney service has menus to fit every event and budget — Italian-inspired starters, mains and desserts, with family-friendly, all-you-can-eat options."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {MENUS.map((menu, i) => (
            <Reveal key={menu.name} delay={i * 120}>
              <article
                className={`flex h-full flex-col rounded-lg border p-8 transition-all duration-300 ${
                  menu.featured
                    ? 'border-gold/60 bg-charcoal shadow-[0_0_40px_-12px_rgba(201,162,74,0.4)] bg-gold MostPopular-active'
                    : 'border-gold/15 bg-charcoal/60 hover:border-gold/40'
                }`}
              >
                {menu.featured ? (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-white px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink">
                    Most Popular
                  </span>
                ) : null}
                <h3 className={`font-serif text-2xl  ${menu.featured ? 'text-black' : 'text-cream'}`}>{menu.name}</h3>
                <p className={`mt-1 text-xs uppercase tracking-[0.25em]   ${menu.featured ? 'text-black' : 'text-gold'}`}>Per Person</p>
                <div className="mt-6 h-px gold-rule opacity-50" />
                <div className="mt-6 flex flex-col gap-6">
                  {menu.courses.map((course) => (
                    <div key={course.label}>
                      <p className={`text-xs font-medium uppercase tracking-[0.2em]  ${menu.featured ? 'text-black' : ' text-gold/90'}`}>
                        {course.label}
                      </p>
                      <ul className="mt-2.5 flex flex-col gap-1.5">
                        {course.items.map((item) => (
                          <li key={item} className={`text-sm leading-relaxed   ${menu.featured ? 'text-black' : ' text-cream/80'}`}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                    menu.featured
                      ? 'bg-gold-soft text-ink hover:bg-black hover:text-white'
                      : 'border border-gold/40 text-gold hover:bg-gold hover:text-ink'
                  }`}
                >
                  Book This Menu
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
