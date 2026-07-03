export interface Project {
  title: string
  description: string
  tags: string[]
  repo?: string
  demo?: string
  date: string
  status: 'active' | 'wip' | 'archived'
}

const projects: Record<string, Project[]> = {
  pt: [
    {
      title: 'EstimaTech',
      description:
        'Ferramenta moderna de estimativa de projetos com percentuais de overhead técnico configuráveis, gerenciamento de tarefas/subtarefas, planejamento de sprints e exportação para Excel/CSV.',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
      repo: 'https://github.com/willsTavares/estimatech',
      demo: 'https://estimate-ease-eight.vercel.app/',
      date: '2026/04/19',
      status: 'active',
    },
    {
      title: 'Simple Tuner & Metronome',
      description: 'Aplicativo Android para afinador preciso e metrônomo, voltado para músicos.',
      tags: ['Kotlin', 'Android', 'Teoria Musical'],
      repo: 'https://github.com/willsTavares/simple-tuner-and-metronome',
      date: '2026/04/12',
      status: 'active',
    },
    {
      title: 'PC Diagnostic',
      description: 'Aplicação desktop para teste e diagnóstico de Notebooks/PCs.',
      tags: ['C#', '.NET', 'WCF', 'Desktop'],
      repo: 'https://github.com/willsTavares/pc-diagnostic',
      date: '2026/02/17',
      status: 'active',
    },
    {
      title: 'Ear Training Game',
      description:
        'Jogo mobile para melhorar a percepção musical através de exercícios interativos.',
      tags: ['React Native', 'JavaScript', 'Teoria Musical'],
      repo: 'https://github.com/willsTavares/ear-training-game',
      date: '2025/12/24',
      status: 'active',
    },
    {
      title: 'willianstavares-hub',
      description:
        'Meu hub pessoal construído com Next.js, TypeScript e suporte multi-idioma (PT/EN).',
      tags: ['Next.js', 'TypeScript', 'i18n'],
      repo: 'https://github.com/willsTavares/willianstavares-hub',
      demo: 'https://willians-tavares.com',
      date: '2026/04/19',
      status: 'active',
    },
    {
      title: 'Update Check',
      description:
        'Ferramenta de linha de comando para verificar atualizações de dependências em projetos Node.',
      tags: ['Go', 'CLI'],
      repo: 'https://github.com/willsTavares/update-check',
      date: '2024/09/15',
      status: 'active',
    },
    {
      title: 'Azure Extension Template',
      description: 'Template para criação de extensões do Azure DevOps.',
      tags: ['TypeScript', 'Azure DevOps'],
      repo: 'https://github.com/willsTavares/azure-extension-template',
      date: '2021/04/15',
      status: 'archived',
    },
    {
      title: 'CarBom App',
      description: 'Aplicativo Android desenvolvido como projeto final da FIAP.',
      tags: ['Kotlin', 'Android'],
      repo: 'https://github.com/willsTavares/carbom-app',
      date: '2022/11/20',
      status: 'archived',
    },
    {
      title: 'Dodge the Creeper',
      description: 'Jogo desenvolvido na engine Godot utilizando GDScript.',
      tags: ['GDScript', 'Godot', 'Game Dev'],
      repo: 'https://github.com/willsTavares/dodge-the-creeper',
      date: '2020/07/23',
      status: 'archived',
    },
  ],
  en: [
    {
      title: 'EstimaTech',
      description:
        'A modern project estimation tool with configurable technical overhead percentages, task/subtask management, sprint planning and Excel/CSV export capabilities.',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
      repo: 'https://github.com/willsTavares/estimatech',
      demo: 'https://estimate-ease-eight.vercel.app/',
      date: '2026/04/19',
      status: 'active',
    },
    {
      title: 'Simple Tuner & Metronome',
      description: 'Android application for precise tuner and metronome, designed for musicians.',
      tags: ['Kotlin', 'Android', 'Music Theory'],
      repo: 'https://github.com/willsTavares/simple-tuner-and-metronome',
      date: '2026/04/12',
      status: 'active',
    },
    {
      title: 'PC Diagnostic',
      description: 'Desktop application for Notebook/PC testing and diagnostic.',
      tags: ['C#', '.NET', 'WCF', 'Desktop'],
      repo: 'https://github.com/willsTavares/pc-diagnostic',
      date: '2026/02/17',
      status: 'active',
    },
    {
      title: 'Ear Training Game',
      description: 'Mobile game to improve musical perception through interactive exercises.',
      tags: ['React Native', 'JavaScript', 'Music Theory'],
      repo: 'https://github.com/willsTavares/ear-training-game',
      date: '2025/12/24',
      status: 'active',
    },
    {
      title: 'willianstavares-hub',
      description:
        'My personal hub built with Next.js, TypeScript and multi-language support (PT/EN).',
      tags: ['Next.js', 'TypeScript', 'i18n'],
      repo: 'https://github.com/willsTavares/willianstavares-hub',
      demo: 'https://willians-tavares.com',
      date: '2026/04/18',
      status: 'active',
    },
    {
      title: 'Update Check',
      description: 'Command line tool to check for dependency updates in Node projects.',
      tags: ['Go', 'CLI'],
      repo: 'https://github.com/willsTavares/update-check',
      date: '2024/09/15',
      status: 'active',
    },
    {
      title: 'Azure Extension Template',
      description: 'Template for creating Azure DevOps extensions.',
      tags: ['TypeScript', 'Azure DevOps'],
      repo: 'https://github.com/willsTavares/azure-extension-template',
      date: '2021/04/15',
      status: 'archived',
    },
    {
      title: 'CarBom App',
      description: 'Android app developed as a FIAP final project.',
      tags: ['Kotlin', 'Android'],
      repo: 'https://github.com/willsTavares/carbom-app',
      date: '2022/11/20',
      status: 'archived',
    },
    {
      title: 'Dodge the Creeper',
      description: 'Game built with the Godot engine using GDScript.',
      tags: ['GDScript', 'Godot', 'Game Dev'],
      repo: 'https://github.com/willsTavares/dodge-the-creeper',
      date: '2020/07/23',
      status: 'archived',
    },
  ],
}

export function getAllProjects(locale: string = 'pt'): Project[] {
  const list = projects[locale] || projects['pt']
  return [...list].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
