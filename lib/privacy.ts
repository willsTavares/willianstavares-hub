import fs from 'fs'
import path from 'path'

const privacyDirectory = path.join(process.cwd(), 'pages', 'privacy')

export function getPrivacySlugs(): string[] {
  if (!fs.existsSync(privacyDirectory)) {
    return []
  }
  return fs
    .readdirSync(privacyDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

export function getPrivacyContentBySlug(slug: string): string {
  const fullPath = path.join(privacyDirectory, `${slug}.md`)
  return fs.readFileSync(fullPath, 'utf8')
}
