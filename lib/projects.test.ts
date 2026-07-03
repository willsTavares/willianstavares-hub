import { describe, it, expect } from 'vitest'
import { getAllProjects } from './projects'

describe('getAllProjects', () => {
  it('returns the English list when locale is "en"', () => {
    const projects = getAllProjects('en')
    expect(projects.length).toBeGreaterThan(0)
    const hub = projects.find((p) => p.title === 'willianstavares-hub')
    expect(hub?.description).toContain('personal hub')
  })

  it('falls back to Portuguese for an unknown locale', () => {
    const fallback = getAllProjects('fr')
    const pt = getAllProjects('pt')
    expect(fallback).toEqual(pt)
  })

  it('sorts projects from newest to oldest', () => {
    const projects = getAllProjects('pt')
    const timestamps = projects.map((p) => new Date(p.date).getTime())
    const sorted = [...timestamps].sort((a, b) => b - a)
    expect(timestamps).toEqual(sorted)
  })

  it('exposes a live demo for the hub project', () => {
    const hub = getAllProjects('en').find((p) => p.title === 'willianstavares-hub')
    expect(hub?.demo).toBe('https://willians-tavares.com')
  })

  it('does not mutate the underlying source array between calls', () => {
    const first = getAllProjects('pt')
    const second = getAllProjects('pt')
    expect(first).not.toBe(second)
    expect(first).toEqual(second)
  })
})
