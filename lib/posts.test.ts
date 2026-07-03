import { describe, it, expect } from 'vitest'
import { getPostSlugs, getAllPosts, getAllLocalePostPaths } from './posts'

describe('getPostSlugs', () => {
  it('returns markdown slugs for a known locale', () => {
    const slugs = getPostSlugs('pt')
    expect(slugs.length).toBeGreaterThan(0)
    expect(slugs.every((s) => s.endsWith('.md'))).toBe(true)
  })

  it('returns an empty array for an unknown locale', () => {
    expect(getPostSlugs('xx')).toEqual([])
  })
})

describe('getAllPosts', () => {
  it('returns posts sorted from newest to oldest', () => {
    const posts = getAllPosts('en')
    expect(posts.length).toBeGreaterThan(0)
    const timestamps = posts.map((p) => new Date(p.date).getTime())
    const sorted = [...timestamps].sort((a, b) => b - a)
    expect(timestamps).toEqual(sorted)
  })

  it('parses front matter into the Post shape', () => {
    const [post] = getAllPosts('en')
    expect(post).toHaveProperty('slug')
    expect(post).toHaveProperty('title')
    expect(post).toHaveProperty('content')
    expect(typeof post.slug).toBe('string')
  })
})

describe('getAllLocalePostPaths', () => {
  it('produces one path per slug per locale', () => {
    const paths = getAllLocalePostPaths(['pt', 'en'])
    const ptCount = getPostSlugs('pt').length
    const enCount = getPostSlugs('en').length
    expect(paths.length).toBe(ptCount + enCount)
    expect(paths[0]).toHaveProperty('params.slug')
    expect(paths[0]).toHaveProperty('locale')
  })
})
