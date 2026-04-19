import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  const router = useRouter()
  const t = useTranslations('site')
  const siteTitle = t('title')
  const pageTitle = title ? `${title} - ${siteTitle}` : siteTitle
  const pageDescription = description || t('description')
  const otherLocale = router.locale === 'pt' ? 'en' : 'pt'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="follow, index" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <link rel="alternate" hrefLang={router.locale} href={router.asPath} />
        <link rel="alternate" hrefLang={otherLocale} href={`/${otherLocale}${router.asPath}`} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="container">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
