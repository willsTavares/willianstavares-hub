import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tag: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'posts')

function getLocaleDir(locale: string): string {
  return path.join(postsDirectory, locale)
}

export function getPostSlugs(locale: string = 'pt'): string[] {
  const dir = getLocaleDir(locale)
  if (!fs.existsSync(dir)) {
    return []
  }
  return fs.readdirSync(dir).filter((file) => file.endsWith('.md') && !file.startsWith('index'))
}

export function getPostBySlug(slug: string, locale: string = 'pt'): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(getLocaleDir(locale), `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title || '',
    date: data.date || '',
    description: data.description || '',
    tag: data.tag || '',
    content,
  }
}

export function getAllPosts(locale: string = 'pt'): Post[] {
  const slugs = getPostSlugs(locale)
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.md$/, ''), locale))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts
}

export function getAllLocalePostPaths(
  locales: string[]
): { params: { slug: string }; locale: string }[] {
  const paths: { params: { slug: string }; locale: string }[] = []
  for (const locale of locales) {
    const slugs = getPostSlugs(locale)
    for (const slug of slugs) {
      paths.push({
        params: { slug: slug.replace(/\.md$/, '') },
        locale,
      })
    }
  }
  return paths
}
