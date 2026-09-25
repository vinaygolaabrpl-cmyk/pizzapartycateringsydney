import type { ReactNode } from 'react'

export function Eyebrow({
  children,
  lineClassName = 'bg-gold/60',
}: {
  children: ReactNode
  lineClassName?: string
}) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
      <span
        className={`h-px w-8 ${lineClassName}`}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  className,
  eyebrowLineClassName = 'bg-gold/60',
}: {
  eyebrow?: ReactNode
  title: ReactNode
  intro?: ReactNode
  align?: 'center' | 'left'
  className?: string
  eyebrowLineClassName?: string
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === 'center'
          ? 'items-center text-center'
          : 'items-start text-left'
      } ${className ?? ''}`}
    >
      {eyebrow ? (
        <Eyebrow lineClassName={eyebrowLineClassName}>
          {eyebrow}
        </Eyebrow>
      ) : null}

      <h2 className="text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {intro ? (
        <p
          className={`text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg ${
            align === 'center' ? 'max-w-2xl' : 'max-w-xl'
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  )
}