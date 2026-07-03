import Layout from '../../components/Layout'
import Reveal from '../../components/Reveal'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import { getAllProjects, Project } from '../../lib/projects'

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  const t = useTranslations('projects')

  return (
    <Layout title={t('title')} description={t('pageDescription')}>
      <p className="page-description">{t('pageDescription')}</p>

      {projects.length === 0 ? (
        <p className="no-posts">{t('noProjects')}</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              as="article"
              className="project-card"
              delay={Math.min(index * 0.07, 0.28)}
            >
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t('repository')} →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                  >
                    {t('demo')} →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      projects: getAllProjects(locale || 'pt'),
      messages: (await import(`../../messages/${locale || 'pt'}.json`)).default,
    },
  }
}
