import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

const SITE_URL = 'https://willians-tavares.com'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  ogType?: string
}

export default function Layout({ children, title, description, ogType = 'website' }: LayoutProps) {
  const router = useRouter()
  const t = useTranslations('site')
  const siteTitle = t('title')
  const pageTitle = title ? `${title} - ${siteTitle}` : siteTitle
  const pageDescription = description || t('description')
  const otherLocale = router.locale === 'pt' ? 'en' : 'pt'
  const canonicalUrl = `${SITE_URL}${router.locale === 'pt' ? '' : `/${router.locale}`}${router.asPath}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph */}
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={router.locale === 'pt' ? 'pt_BR' : 'en_US'} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {/* Alternates */}
        <link rel="alternate" hrefLang={router.locale || 'pt'} href={canonicalUrl} />
        <link
          rel="alternate"
          hrefLang={otherLocale}
          href={`${SITE_URL}/${otherLocale}${router.asPath}`}
        />
        <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <div className="container">
        <Header />
        <main id="main-content" className="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
