import Layout from '../../components/Layout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getPrivacySlugs, getPrivacyContentBySlug } from '../../lib/privacy'

interface PrivacyPageProps {
  content: string
}

export default function PrivacyPage({ content }: PrivacyPageProps) {
  return (
    <Layout title="Política de Privacidade">
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPrivacySlugs()

  return {
    paths: slugs.map((app) => ({ params: { app } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const content = getPrivacyContentBySlug(params?.app as string)

  return {
    props: {
      content,
      messages: (await import(`../../messages/${locale || 'pt'}.json`)).default,
    },
  }
}
