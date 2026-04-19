const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

const locales = ['pt', 'en']

async function generateForLocale(locale) {
  const feed = new RSS({
    title: 'Willians Tavares',
    site_url: `https://willians-tavares.com/${locale}`,
    feed_url: `https://willians-tavares.com/feed-${locale}.xml`,
    language: locale,
  })

  const postsDir = path.join(__dirname, '..', 'posts', locale)

  let posts = []
  try {
    posts = await fs.readdir(postsDir)
  } catch {
    return
  }

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return
      if (!name.endsWith('.md')) return

      const content = await fs.readFile(path.join(postsDir, name))
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: `/${locale}/posts/` + name.replace(/\.md$/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag ? frontmatter.data.tag.split(', ') : [],
        author: frontmatter.data.author,
      })
    })
  )

  await fs.writeFile(`./public/feed-${locale}.xml`, feed.xml({ indent: true }))
}

async function generate() {
  await Promise.all(locales.map(generateForLocale))
  try {
    const { copyFile } = require('fs').promises
    await copyFile('./public/feed-pt.xml', './public/feed.xml')
  } catch {
    // pt feed may not exist
  }
}

generate()
