import Layout from '../components/Layout'
import Link from 'next/link'
import { getAllPosts, Post } from '../lib/posts'
import { getAllProjects, Project } from '../lib/projects'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

type LatestActivity =
  | { type: 'post'; data: Post }
  | { type: 'project'; data: Project }
  | null

interface HomeProps {
  latestActivity: LatestActivity
}

export default function Home({ latestActivity }: HomeProps) {
  const t = useTranslations('home')
  const tProjects = useTranslations('projects')
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

      {latestActivity && (
        <section className="latest-post-section">
          <h2 className="section-title">{t('latestActivity')}</h2>

          {latestActivity.type === 'post' ? (
            <Link href={`/posts/${latestActivity.data.slug}`} className="post-card-link">
              <article className="post-card compact">
                <h3>{latestActivity.data.title}</h3>
                <div className="activity-date-row">
                  <time className="post-date">
                    {new Date(latestActivity.data.date).toLocaleDateString(dateLocale)}
                  </time>
                  <span className="activity-badge activity-post">{t('badgePost')}</span>
                </div>
                {latestActivity.data.description && (
                  <p className="post-description">{latestActivity.data.description}</p>
                )}
                {latestActivity.data.tag && (
                  <div className="post-tags">
                    {latestActivity.data.tag.split(',').map((tag) => (
                      <span key={tag.trim()} className="tag">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
                <span className="read-more">{t('readMore')}</span>
              </article>
            </Link>
          ) : (
            <a
              href={latestActivity.data.repo || latestActivity.data.demo || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="post-card-link"
            >
              <article className="project-card compact">
                <div className="project-card-header">
                  <div>
                    <h3>{latestActivity.data.title}</h3>
                  </div>
                </div>
                <div className="activity-date-row">
                  <time className="post-date">
                    {new Date(latestActivity.data.date).toLocaleDateString(dateLocale)}
                  </time>
                  <span className="activity-badge activity-project">{t('badgeProject')}</span>
                </div>
                <p className="project-description">{latestActivity.data.description}</p>
                <div className="project-tags">
                  {latestActivity.data.tags.map((tag) => (
                    <span key={tag} className="tag project-tag">{tag}</span>
                  ))}
                </div>
                <span className="read-more project-link">{tProjects('repository')} →</span>
              </article>
            </a>
          )}
        </section>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = getAllPosts(locale || 'pt')
  const projects = getAllProjects(locale || 'pt')

  const latestPost = posts.length > 0 ? posts[0] : null
  const latestProject = projects.length > 0 ? projects[0] : null

  let latestActivity: LatestActivity = null

  if (latestPost && latestProject) {
    const postDate = new Date(latestPost.date).getTime()
    const projectDate = new Date(latestProject.date).getTime()
    latestActivity = projectDate >= postDate
      ? { type: 'project', data: latestProject }
      : { type: 'post', data: latestPost }
  } else if (latestPost) {
    latestActivity = { type: 'post', data: latestPost }
  } else if (latestProject) {
    latestActivity = { type: 'project', data: latestProject }
  }

  return {
    props: {
      latestActivity,
      messages: (await import(`../messages/${locale || 'pt'}.json`)).default,
    },
  }
}
