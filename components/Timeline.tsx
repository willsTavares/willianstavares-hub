import { useRouter } from 'next/router'
import type { CSSProperties } from 'react'

type TimelineItemType = 'work' | 'education'

interface TimelineItem {
  period: string
  title: string
  company: string
  description?: string
  type: TimelineItemType
  current?: boolean
}

interface CertificationItem {
  name: string
  issuer: string
}

const timelineDataPT: TimelineItem[] = [
  {
    period: 'Mar/2021 — Atualmente',
    title: 'Desenvolvedor de Software e Líder Técnico',
    company: 'Konia Tecnologia',
    description:
      'Atuo principalmente em projetos com Typescript (React e React Native), C# e Kotlin para Android. Cuido do desenvolvimento técnico do time com foco em entregas contínuas de qualidade.',
    type: 'work',
    current: true,
  },
  {
    period: 'Jan/2023 — Ago/2023',
    title: 'Autor e Apresentador de Material Didático',
    company: 'SENAC Brasil',
    description:
      'Construí e apresentei conteúdo sobre Linguagens de Interação com foco em Javascript para pós-graduação em web multiplataforma.',
    type: 'work',
  },
  {
    period: 'Set/2020 — Dez/2023',
    title: 'Web Developer Freelancer',
    company: 'Zaicon Design',
    description:
      'Criação e gerenciamento de páginas web com Javascript, CSS, HTML e Wordpress. Suporte e atendimento direto ao cliente.',
    type: 'work',
  },
  {
    period: 'Jan/2021 — Dez/2022',
    title: 'Graduação em Análise e Desenvolvimento de Sistemas',
    company: 'FIAP',
    type: 'education',
  },
  {
    period: 'Ago/2019 — Dez/2022',
    title: 'Técnico em Desenvolvimento de Sistemas',
    company: 'ETEC — Albert Einstein',
    type: 'education',
  },
]

const timelineDataEN: TimelineItem[] = [
  {
    period: 'Mar/2021 — Present',
    title: 'Software Developer & Tech Lead',
    company: 'Konia Tecnologia',
    description:
      'Mainly working on projects using TypeScript (React and React Native), C# and Kotlin for Android. Leading the technical growth of the team with a focus on continuous, high-quality delivery.',
    type: 'work',
    current: true,
  },
  {
    period: 'Jan/2023 — Aug/2023',
    title: 'Author & Educational Content Presenter',
    company: 'SENAC Brasil',
    description:
      'Built and presented content on Interaction Languages focused on JavaScript for a postgraduate multiplatform web development course.',
    type: 'work',
  },
  {
    period: 'Sep/2020 — Dec/2023',
    title: 'Web Developer Freelancer',
    company: 'Zaicon Design',
    description:
      'Web page creation and management using JavaScript, CSS, HTML and WordPress. Direct client support.',
    type: 'work',
  },
  {
    period: 'Jan/2021 — Dec/2022',
    title: "Bachelor's in Systems Analysis and Development",
    company: 'FIAP',
    type: 'education',
  },
  {
    period: 'Aug/2019 — Dec/2022',
    title: 'Technical Degree in Systems Development',
    company: 'ETEC — Albert Einstein',
    type: 'education',
  },
]

const certificationsPT: CertificationItem[] = [
  { name: 'Azure Fundamentals', issuer: 'Microsoft' },
  { name: 'AI Fundamentals', issuer: 'Microsoft' },
  { name: 'Power Platform Fundamentals', issuer: 'Microsoft' },
  { name: 'CyberOps Associate', issuer: 'Cisco' },
  { name: 'Comunicação & Oratória', issuer: 'Conquer' },
  { name: 'Desenvolvimento .NET', issuer: 'FIAP' },
  { name: 'Desenvolvimento de Aplicativos Móveis', issuer: 'FIAP' },
  { name: 'Services Architecture / API / Mobile Architecture', issuer: 'FIAP' },
  { name: 'Formação Engenharia de Software', issuer: 'Alura' },
]

const certificationsEN: CertificationItem[] = [
  { name: 'Azure Fundamentals', issuer: 'Microsoft' },
  { name: 'AI Fundamentals', issuer: 'Microsoft' },
  { name: 'Power Platform Fundamentals', issuer: 'Microsoft' },
  { name: 'CyberOps Associate', issuer: 'Cisco' },
  { name: 'Communication & Public Speaking', issuer: 'Conquer' },
  { name: '.NET Development', issuer: 'FIAP' },
  { name: 'Mobile App Development', issuer: 'FIAP' },
  { name: 'Services Architecture / API / Mobile Architecture', issuer: 'FIAP' },
  { name: 'Software Engineering', issuer: 'Alura' },
]

const labels = {
  pt: {
    work: 'Experiência',
    education: 'Formação',
    certifications: 'Certificados',
    current: 'Atual',
  },
  en: {
    work: 'Experience',
    education: 'Education',
    certifications: 'Certifications',
    current: 'Current',
  },
}

export default function Timeline() {
  const router = useRouter()
  const locale = (router.locale || 'pt') as 'pt' | 'en'
  const isPT = locale === 'pt'
  const data = isPT ? timelineDataPT : timelineDataEN
  const certs = isPT ? certificationsPT : certificationsEN
  const l = labels[isPT ? 'pt' : 'en']

  return (
    <div className="timeline-container">
      <div className="timeline">
        {data.map((item, index) => (
          <div
            key={index}
            className={`timeline-item timeline-${item.type}${item.current ? ' timeline-current' : ''}`}
            style={{ '--index': index } as CSSProperties}
          >
            <div className="timeline-dot-col">
              <div className="timeline-dot" />
            </div>
            <div className="timeline-content">
              <span className="timeline-type-label">{l[item.type]}</span>
              <div className="timeline-header">
                <h3 className="timeline-title">{item.title}</h3>
                {item.current && <span className="timeline-current-badge">{l.current}</span>}
              </div>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-period">{item.period}</p>
              {item.description && <p className="timeline-description">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-certifications">
        <p className="timeline-section-heading">{l.certifications}</p>
        <div className="certifications-grid">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="certification-item"
              style={{ '--index': index } as CSSProperties}
            >
              <span className="cert-name">{cert.name}</span>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
