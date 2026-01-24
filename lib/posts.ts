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

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter(file => 
    file.endsWith('.md') && !file.startsWith('index')
  )
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
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

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.md$/, '')))
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
  return posts
}
