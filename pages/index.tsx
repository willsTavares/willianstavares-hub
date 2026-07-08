import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Timeline from '../components/Timeline'
import Reveal from '../components/Reveal'
import ScrollHint from '../components/ScrollHint'
import { getAllProjects, Project } from '../lib/projects'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'

interface HomeProps {
  projects: Project[]
}

const skillSets = [
  { label: 'Backend', tags: ['.NET', 'C#', 'Node', 'Kotlin', 'Go', 'Java'] },
  { label: 'Databases', tags: ['PostgreSQL', 'Redis', 'SQL Server', 'MongoDB', 'Oracle'] },
  { label: 'Architecture', tags: ['Microservices', 'REST', 'Clean Architecture', 'Hexagonal'] },
  { label: 'Frontend', tags: ['JavaScript', 'TypeScript', 'React', 'Next.js'] },
  { label: 'Mobile', tags: ['Kotlin', 'React Native'] },
  {
    label: 'DevOps & Cloud',
    tags: ['CI/CD', 'Azure', 'AWS', 'Azure DevOps', 'Docker', 'Kubernetes'],
  },
]

export default function Home({ projects }: HomeProps) {
  const t = useTranslations('home')
  const tProjects = useTranslations('projects')

  return (
    <Layout>
      {/* Hero */}
      <Reveal as="section" className="hero-section">
        <h1 className="hero-title">
          {t('heroGreeting')} <span className="hero-name">{t('heroName')}</span>
        </h1>
        <p className="hero-role">{t('heroRole')}</p>
        <p className="hero-description">{t('heroDescription')}</p>
        <div className="hero-actions">
          <Link href="/posts" className="btn-primary">
            {t('ctaPosts')}
          </Link>
          <Link href="/projects" className="btn-secondary">
            {t('ctaProjects')}
          </Link>
        </div>
      </Reveal>

      <ScrollHint />

      {/* About */}
      <Reveal as="section" className="home-section">
        <h2 className="section-heading">{t('aboutTitle')}</h2>
        <p className="about-text">{t('intro2')}</p>
        <p className="about-text">
          <strong>{t('intro3')}</strong>
          {t('intro3Rest')}
        </p>
      </Reveal>

      {/* Skills & Technologies */}
      <section className="home-section">
        <Reveal>
          <h2 className="section-heading">{t('skillsTitle')}</h2>
        </Reveal>
        <div className="skills-grid">
          {skillSets.map((set, index) => (
            <Reveal key={set.label} className="skill-card" delay={index * 0.08}>
              <p className="skill-card-label">{set.label}</p>
              <div className="skill-tags">
                {set.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <Reveal as="section" className="home-section">
        <h2 className="section-heading">{t('timelineTitle')}</h2>
        <Timeline />
      </Reveal>

      {/* My Projects */}
      <section className="home-section">
        <Reveal>
          <h2 className="section-heading">{t('projectsTitle')}</h2>
          <p className="section-subtitle">{t('projectsSubtitle')}</p>
        </Reveal>
        <div className="home-projects-grid">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal key={project.title} className="home-project-card" delay={index * 0.1}>
              <h3 className="home-project-title">{project.title}</h3>
              <p className="home-project-description">{project.description}</p>
              <div className="home-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="home-project-links">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    {tProjects('repository')}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    {tProjects('demo')}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="view-all-posts">
          <Link href="/projects" className="view-all-link">
            {t('viewAllProjects')}
          </Link>
        </Reveal>
      </section>

      {/* Contact */}
      <Reveal as="section" className="home-section">
        <h2 className="section-heading">{t('contactTitle')}</h2>
        <p className="about-text">{t('contactSubtitle')}</p>
        <div className="contact-social-row">
          <a
            href="https://www.linkedin.com/in/willians-tavares95/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={22} height={22} />
            LinkedIn
          </a>
          <a
            href="https://github.com/willsTavares"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <Image src="/images/github_icon.png" alt="GitHub" width={22} height={22} />
            GitHub
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511943206420"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <Image src="/images/whatsapp_icon.png" alt="WhatsApp" width={22} height={22} />
            WhatsApp
          </a>
        </div>
      </Reveal>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const projects = getAllProjects(locale || 'pt')

  return {
    props: {
      projects,
      messages: (await import(`../messages/${locale || 'pt'}.json`)).default,
    },
  }
}
