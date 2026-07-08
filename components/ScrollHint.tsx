import { useEffect, useState } from 'react'

/** Small "there's more below" cue. Fades out on scroll or after a few seconds. */
export default function ScrollHint() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Skip entirely if the page is already scrolled (e.g. back-navigation restores position)
    if (window.scrollY > 40) return

    // Skip if the page barely scrolls — nothing meaningful to point at
    const hasMoreBelow = document.documentElement.scrollHeight - window.innerHeight > 200
    if (!hasMoreBelow) return

    const showTimer = setTimeout(() => setVisible(true), 600)
    const hideTimer = setTimeout(() => setVisible(false), 5000)

    const handleScroll = () => {
      if (window.scrollY > 40) setVisible(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`scroll-hint${visible ? ' scroll-hint-visible' : ''}`} aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 7l6 6 6-6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
