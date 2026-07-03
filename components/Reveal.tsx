import { useEffect, useRef } from 'react'
import type { CSSProperties, ElementType, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** HTML tag to render (defaults to div) */
  as?: ElementType
  className?: string
  /** Extra transition delay in seconds, for staggering siblings */
  delay?: number
}

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No observer support (old browsers, jsdom) or reduced motion: show immediately
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.add('reveal-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('reveal-visible', entry.isIntersecting)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
