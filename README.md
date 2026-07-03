# Willians Tavares — Personal Hub

[![Live site](https://img.shields.io/badge/live-willians--tavares.com-60a5fa)](https://willians-tavares.com)

Personal portfolio and blog of **Willians Tavares** — Tech Lead & Full-Stack Developer.
Built as a fully bilingual (PT/EN) site with a Markdown-powered blog, projects showcase,
RSS feeds and SEO/Open Graph metadata.

🔗 **Live:** https://willians-tavares.com

## ✨ Features

- **Bilingual (PT/EN)** — locale-aware routing and content via Next.js i18n + `next-intl`
- **Markdown blog** — articles authored in Markdown with front matter, per-locale content
- **Projects showcase** — data-driven list with tags, repository and live demo links
- **SEO ready** — canonical URLs, `hreflang` alternates, Open Graph & Twitter cards
- **RSS feeds** — generated per locale at build time
- **Auto-generated sitemap** — built before each production build
- **Optimized assets** — `next/image`, self-hosted variable fonts with `font-display: swap`
- **Accessible** — skip-to-content link and semantic markup

## 🚀 Tech Stack

| Area      | Technologies                   |
| --------- | ------------------------------ |
| Framework | Next.js 14 (Pages Router)      |
| Language  | TypeScript                     |
| UI        | React 18                       |
| i18n      | next-intl                      |
| Content   | Markdown + gray-matter         |
| Tooling   | Node scripts for RSS & sitemap |

## 📁 Project structure

```
├── components/   # Reusable React components (Layout, Header, Footer, Timeline)
├── lib/          # Data access helpers (posts, projects)
├── messages/     # i18n translation dictionaries (pt.json, en.json)
├── pages/        # Next.js routes (home, posts, projects)
├── posts/        # Markdown articles, split by locale (pt/, en/)
├── public/       # Static assets (images, fonts, feeds, sitemap)
├── scripts/      # Build-time generators (RSS, sitemap)
└── styles/       # Global CSS
```

## 🛠️ Getting started

```bash
# Install dependencies
yarn install

# Run the dev server
yarn dev

# Production build (generates RSS + sitemap, then builds)
yarn build

# Serve the production build
yarn start
```

The site runs at `http://localhost:3000`.

## 🌐 Internationalization

Content lives in two places:

- **UI strings** — `messages/pt.json` and `messages/en.json`, consumed through `next-intl`.
- **Articles** — `posts/pt/` and `posts/en/`, matched by slug across locales.

The default locale is Portuguese (`pt`); English is served under the `/en` prefix.

## 📄 License

Personal project — all rights reserved.
