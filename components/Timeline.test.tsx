import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import Timeline from './Timeline'

// Timeline only depends on next/router for the active locale.
vi.mock('next/router', () => ({
  useRouter: () => ({ locale: 'en' }),
}))

afterEach(() => cleanup())

describe('Timeline', () => {
  it('renders the current role and flags it as Current', () => {
    render(<Timeline />)
    expect(screen.getByText('Konia Tecnologia')).toBeTruthy()
    expect(screen.getByText('Current')).toBeTruthy()
  })

  it('renders English section labels and certifications', () => {
    render(<Timeline />)
    expect(screen.getByText('Certifications')).toBeTruthy()
    expect(screen.getByText('Azure Fundamentals')).toBeTruthy()
  })
})
