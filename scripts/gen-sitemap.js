const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const SITE_URL = 'https://willians-tavares.com'
const locales = ['pt', 'en']
const defaultLocale = 'pt'

function getPostSlugs(locale) {
  const dir = path.join(process.cwd(), 'posts', locale)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && !f.startsWith('index'))
    .map((f) => f.replace(/\.md$/, ''))
}

function generateSitemap() {
  const urls = []
  const now = new Date().toISOString().split('T')[0]

  // Static pages
  const staticPages = ['', '/posts']
  for (const page of staticPages) {
    for (const locale of locales) {
      const loc = locale === defaultLocale ? `${SITE_URL}${page}` : `${SITE_URL}/${locale}${page}`
      const alternates = locales
        .map((l) => {
          const href = l === defaultLocale ? `${SITE_URL}${page}` : `${SITE_URL}/${l}${page}`
          return `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}" />`
        })
        .join('\n')
      urls.push(
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n${alternates}\n  </url>`
      )
    }
  }

  // Post pages
  for (const locale of locales) {
    const slugs = getPostSlugs(locale)
    for (const slug of slugs) {
      const loc =
        locale === defaultLocale
          ? `${SITE_URL}/posts/${slug}`
          : `${SITE_URL}/${locale}/posts/${slug}`

      const alternates = locales
        .map((l) => {
          const href =
            l === defaultLocale ? `${SITE_URL}/posts/${slug}` : `${SITE_URL}/${l}/posts/${slug}`
          return `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}" />`
        })
        .join('\n')

      urls.push(
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n${alternates}\n  </url>`
      )
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap, 'utf8')
  console.log('Sitemap generated successfully')
}

generateSitemap()
