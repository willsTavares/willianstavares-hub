import Layout from '../components/Layout'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <Layout title={t('title')} description={t('description')}>
      <div className="not-found">
        <h1>404</h1>
        <p>{t('description')}</p>
        <Link href="/" className="back-home-link">
          {t('backHome')}
        </Link>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale || 'pt'}.json`)).default,
    },
  }
}
