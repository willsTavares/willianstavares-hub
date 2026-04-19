import Layout from '../components/Layout'
import Link from 'next/link'
import { getAllPosts, Post } from '../lib/posts'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

interface HomeProps {
  latestPost: Post | null
}

export default function Home({ latestPost }: HomeProps) {
  const t = useTranslations('home')
  const router = useRouter()
  const dateLocale = router.locale === 'pt' ? 'pt-BR' : 'en-US'

  return (
    <Layout>      
      <p>
        {t('intro1')}{' '}
        <a href="https://konia.com.br/" target="_blank" rel="noopener noreferrer">
          {t('intro1Company')}
        </a>
        .
      </p>
      
      <p>
        {t('intro2')}
      </p>
      
      <p>
        <strong>{t('intro3')}</strong>
        {t('intro3Rest')}
      </p>

      {latestPost && (
        <section className="latest-post-section">
          <h2 className="section-title">{t('latestActivity')}</h2>
          <Link href={`/posts/${latestPost.slug}`} className="post-card-link">
            <article className="post-card compact">
              <h3>{latestPost.title}</h3>
              <time className="post-date">
                {new Date(latestPost.date).toLocaleDateString(dateLocale)}
              </time>
              {latestPost.description && (
                <p className="post-description">{latestPost.description}</p>
              )}
              {latestPost.tag && (
                <div className="post-tags">
                  {latestPost.tag.split(',').map((tag) => (
                    <span key={tag.trim()} className="tag">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
              <span className="read-more">{t('readMore')}</span>
            </article>
          </Link>
        </section>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = getAllPosts(locale || 'pt')
  const latestPost = posts.length > 0 ? posts[0] : null

  return {
    props: {
      latestPost,
      messages: (await import(`../messages/${locale || 'pt'}.json`)).default,
    },
  }
}
