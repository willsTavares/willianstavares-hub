const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Willians Tavares',
    site_url: 'https://willianstavares.com/',
    feed_url: 'https://willianstavares.com/feed.xml',
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'posts'))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return
      if (!name.endsWith('.md')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'posts', name)
      )
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: '/posts/' + name.replace(/\.md$/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag ? frontmatter.data.tag.split(', ') : [],
        author: frontmatter.data.author,
      })
    })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
