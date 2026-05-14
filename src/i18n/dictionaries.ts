export type Locale = 'en' | 'vi' | 'ja' | 'zh' | 'de' | 'ko' | 'fr' | 'ru' | 'es'

export const SUPPORTED_LOCALES: Locale[] = ['en', 'vi', 'ja', 'zh', 'de', 'ko', 'fr', 'ru', 'es']

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  vi: 'Tieng Viet',
  ja: '日本語',
  zh: '中文',
  de: 'Deutsch',
  ko: '한국어',
  fr: 'Français',
  ru: 'Русский',
  es: 'Español',
}

export type SkillCategory = {
  title: string
  items: string[]
}

export type SkillItem = {
  name: string
  level: number
}

export type ProjectItem = {
  name: string
  summary: string
  technologies: string[]
  image: string
  github: string
  liveDemo: string
  role: string
}

export type TimelineItem = {
  period: string
  title: string
  organization: string
  description: string
}

export type PortfolioDictionary = {
  common: {
    language: string
    english: string
    vietnamese: string
    downloadCv: string
    contact: string
    viewProjects: string
  }
  header: {
    brand: string
    links: { label: string; href: string }[]
  }
  hero: {
    greeting: string
    name: string
    role: string
    shortIntro: string
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    title: string
    subtitle: string
    paragraphs: string[]
    strengthsTitle: string
    strengths: string[]
  }
  skills: {
    title: string
    subtitle: string
    categories: SkillCategory[]
    highlights: SkillItem[]
  }
  projects: {
    title: string
    subtitle: string
    github: string
    liveDemo: string
    role: string
    items: ProjectItem[]
  }
  experience: {
    title: string
    subtitle: string
    workTitle: string
    educationTitle: string
    work: TimelineItem[]
    education: TimelineItem[]
  }
  contact: {
    title: string
    subtitle: string
    email: string
    linkedin: string
    github: string
    form: {
      fullName: string
      email: string
      subject: string
      message: string
      submit: string
      sending: string
      success: string
      failed: string
      validation: {
        fullName: string
        email: string
        subject: string
        message: string
      }
    }
  }
  footer: {
    copyright: string
    rights: string
  }
}

const enDictionary: PortfolioDictionary = {
  common: {
    language: 'Language',
    english: 'English',
    vietnamese: 'Vietnamese',
    downloadCv: 'Download CV',
    contact: 'Contact',
    viewProjects: 'View Projects',
  },
  header: {
    brand: 'Hung Portfolio',
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'About', href: '/#about' },
      { label: 'Skills', href: '/#skills' },
      { label: 'Projects', href: '/#projects' },
      { label: 'Experience', href: '/#experience' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  hero: {
    greeting: 'Hello, I am',
    name: 'Tran Dinh Hung',
    role: 'Fullstack Software Developer',
    shortIntro:
      'I build scalable web applications with clear architecture, clean user experience, and measurable business impact.',
    ctaPrimary: 'View Projects',
    ctaSecondary: 'Contact',
  },
  about: {
    title: 'About Me',
    subtitle: 'Background and working style',
    paragraphs: [
      'I am a fullstack developer focused on building production-grade systems from frontend interfaces to backend services and database design.',
      'I enjoy working on modern web products, exploring AI-enabled features, and improving developer experience through clean engineering practices.',
    ],
    strengthsTitle: 'Strengths',
    strengths: [
      'Strong ownership from requirement analysis to deployment',
      'Clear communication and collaborative teamwork',
      'Practical problem-solving with maintainable code',
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'Core technologies and professional capabilities',
    categories: [
      { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'] },
      { title: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'NestJS', 'Spring Boot'] },
      { title: 'Tools', items: ['Git', 'Docker', 'Postman', 'VS Code', 'Figma'] },
      { title: 'Other', items: ['Agile', 'Teamwork', 'Problem Solving', 'System Thinking'] },
    ],
    highlights: [
      { name: 'React / Next.js', level: 90 },
      { name: 'Node.js / APIs', level: 85 },
      { name: 'SQL / Database Design', level: 80 },
      { name: 'System Architecture', level: 75 },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Selected projects focused on quality and real-world value',
    github: 'GitHub',
    liveDemo: 'Live Demo',
    role: 'Role',
    items: [
      {
        name: 'CommerceHub Platform',
        summary:
          'A fullstack e-commerce platform with role-based access, payment flow, and analytics dashboard.',
        technologies: ['Spring Boot', 'TypeScript', 'React', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        github: 'https://github.com/Pinochino/SpringBoot-React.git',
        liveDemo: 'https://example.com',
        role: 'Designed architecture, built backend APIs, and implemented frontend UI.',
      },
      {
        name: 'Task Managment',
        summary:
          'A recruitment workflow system for managing task, and reports.',
        technologies: ['React', 'NestJS', 'MongoDB', 'Docker'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
        github: 'https://github.com/Pinochino/Kanban.git',
        liveDemo: 'https://example.com',
        role: 'Implemented candidate workflow modules and notification integrations.',
      },
      {
        name: 'Ecommerce Website',
        summary:
          'Learning management app with course tracking, assignment submission, and mentor dashboard.',
        technologies: ['React', 'Express.js', 'MySQL', 'TailwindCSS'],
        image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop',
        github: 'https://github.com/Pinochino/IWS_Final.git',
        liveDemo: 'https://example.com',
        role: 'Built student dashboard, API contracts, and data modeling.',
      },
    ],
  },
  experience: {
    title: 'Experience & Education',
    subtitle: 'Professional journey and academic foundation',
    workTitle: 'Experience',
    educationTitle: 'Education',
    work: [
      {
        period: '2024 - Present',
        title: 'Fullstack Developer',
        organization: 'Freelance / Product Teams',
        description:
          'Delivered web applications using Spring Boot and React with focus on performance, reliability, and maintainability.',
      },
      {
        period: '2022 - 2024',
        title: 'Backend Developer',
        organization: 'Project-based Collaboration',
        description:
          'Learn Java Core, Database and how to create the responsive website',
      },
    ],
    education: [
      {
        period: '2021 - 2025',
        title: 'Information Technology',
        organization: 'University Program',
        description: 'Focused on software engineering, databases, and modern web development.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: 'Let us discuss your next product idea',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    form: {
      fullName: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully.',
      failed: 'Failed to send message. Please try again.',
      validation: {
        fullName: 'Please enter at least 2 characters.',
        email: 'Please enter a valid email address.',
        subject: 'Please enter at least 3 characters.',
        message: 'Please enter at least 10 characters.',
      },
    },
  },
  footer: {
    copyright: 'Tran Dinh Hung',
    rights: 'All rights reserved.',
  },
}

const viDictionary: PortfolioDictionary = {
  ...enDictionary,
  common: {
    language: 'Ngon ngu',
    english: 'Tieng Anh',
    vietnamese: 'Tieng Viet',
    downloadCv: 'Tai CV',
    contact: 'Lien he',
    viewProjects: 'Xem du an',
  },
  header: {
    ...enDictionary.header,
    links: [
      { label: 'Trang chu', href: '/#home' },
      { label: 'Gioi thieu', href: '/#about' },
      { label: 'Ky nang', href: '/#skills' },
      { label: 'Du an', href: '/#projects' },
      { label: 'Kinh nghiem', href: '/#experience' },
      { label: 'Lien he', href: '/#contact' },
    ],
  },
  hero: {
    greeting: 'Xin chao, toi la',
    name: 'Tran Dinh Hung',
    role: 'Lap trinh vien Fullstack Software',
    shortIntro:
      'Toi xay dung ung dung web co kha nang mo rong, kien truc ro rang va trai nghiem nguoi dung chat luong.',
    ctaPrimary: 'Xem du an',
    ctaSecondary: 'Lien he',
  },
  about: {
    ...enDictionary.about,
    title: 'Gioi thieu ban than',
    subtitle: 'Nen tang va phong cach lam viec',
  },
  skills: {
    ...enDictionary.skills,
    title: 'Ky nang',
    subtitle: 'Cong nghe cot loi va nang luc chuyen mon',
    categories: [
      { title: 'Ngon ngu', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'] },
      { title: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'NestJS', 'Spring Boot'] },
      { title: 'Cong cu', items: ['Git', 'Docker', 'Postman', 'VS Code', 'Figma'] },
      { title: 'Khac', items: ['Agile', 'Teamwork', 'Problem Solving', 'System Thinking'] },
    ],
  },
  projects: {
    ...enDictionary.projects,
    title: 'Du an',
    subtitle: 'Cac du an tieu bieu uu tien chat luong va gia tri thuc te',
    role: 'Vai tro',
  },
  experience: {
    ...enDictionary.experience,
    title: 'Kinh nghiem & Hoc van',
    subtitle: 'Hanh trinh nghe nghiep va nen tang hoc tap',
    workTitle: 'Kinh nghiem',
    educationTitle: 'Hoc van',
  },
  contact: {
    ...enDictionary.contact,
    title: 'Lien he',
    subtitle: 'Hay trao doi ve san pham tiep theo cua ban',
    form: {
      ...enDictionary.contact.form,
      fullName: 'Ho va ten',
      subject: 'Chu de',
      message: 'Noi dung',
      submit: 'Gui tin nhan',
      sending: 'Dang gui...',
      success: 'Gui tin nhan thanh cong.',
      failed: 'Gui tin nhan that bai. Vui long thu lai.',
    },
  },
  footer: {
    ...enDictionary.footer,
    rights: 'Bao luu moi quyen.',
  },
}

const withTopTranslation = (
  base: PortfolioDictionary,
  input: {
    common: PortfolioDictionary['common']
    headerLinks: string[]
    hero: PortfolioDictionary['hero']
  },
): PortfolioDictionary => ({
  ...base,
  common: input.common,
  header: {
    ...base.header,
    links: [
      { label: input.headerLinks[0], href: '/#home' },
      { label: input.headerLinks[1], href: '/#about' },
      { label: input.headerLinks[2], href: '/#skills' },
      { label: input.headerLinks[3], href: '/#projects' },
      { label: input.headerLinks[4], href: '/#experience' },
      { label: input.headerLinks[5], href: '/#contact' },
    ],
  },
  hero: input.hero,
})

const jaDictionary = withTopTranslation(enDictionary, {
  common: {
    language: '言語',
    english: '英語',
    vietnamese: 'ベトナム語',
    downloadCv: 'CVをダウンロード',
    contact: '連絡',
    viewProjects: 'プロジェクトを見る',
  },
  headerLinks: ['ホーム', '自己紹介', 'スキル', 'プロジェクト', '経験', '連絡先'],
  hero: {
    greeting: 'こんにちは、私は',
    name: 'Tran Dinh Hung',
    role: 'フルスタックソフトウェア開発者',
    shortIntro:
      '明確なアーキテクチャと優れたUXを備えた、拡張性の高いWebアプリケーションを開発します。',
    ctaPrimary: 'プロジェクトを見る',
    ctaSecondary: '連絡',
  },
})

const zhDictionary = withTopTranslation(enDictionary, {
  common: {
    language: '语言',
    english: '英语',
    vietnamese: '越南语',
    downloadCv: '下载简历',
    contact: '联系',
    viewProjects: '查看项目',
  },
  headerLinks: ['首页', '关于我', '技能', '项目', '经历', '联系'],
  hero: {
    greeting: '你好，我是',
    name: 'Tran Dinh Hung',
    role: '全栈软件开发工程师',
    shortIntro: '我构建可扩展的Web应用，具备清晰架构、良好体验和可衡量业务价值。',
    ctaPrimary: '查看项目',
    ctaSecondary: '联系',
  },
})

const deDictionary = withTopTranslation(enDictionary, {
  common: {
    language: 'Sprache',
    english: 'Englisch',
    vietnamese: 'Vietnamesisch',
    downloadCv: 'CV herunterladen',
    contact: 'Kontakt',
    viewProjects: 'Projekte ansehen',
  },
  headerLinks: ['Start', 'Uber mich', 'Fahigkeiten', 'Projekte', 'Erfahrung', 'Kontakt'],
  hero: {
    greeting: 'Hallo, ich bin',
    name: 'Tran Dinh Hung',
    role: 'Fullstack Softwareentwickler',
    shortIntro:
      'Ich entwickle skalierbare Webanwendungen mit klarer Architektur und professioneller Benutzererfahrung.',
    ctaPrimary: 'Projekte ansehen',
    ctaSecondary: 'Kontakt',
  },
})

const koDictionary = withTopTranslation(enDictionary, {
  common: {
    language: '언어',
    english: '영어',
    vietnamese: '베트남어',
    downloadCv: '이력서 다운로드',
    contact: '문의',
    viewProjects: '프로젝트 보기',
  },
  headerLinks: ['홈', '소개', '기술', '프로젝트', '경험', '연락처'],
  hero: {
    greeting: '안녕하세요, 저는',
    name: 'Tran Dinh Hung',
    role: '풀스택 소프트웨어 개발자',
    shortIntro:
      '명확한 아키텍처와 뛰어난 사용자 경험을 갖춘 확장 가능한 웹 애플리케이션을 개발합니다.',
    ctaPrimary: '프로젝트 보기',
    ctaSecondary: '문의',
  },
})

const frDictionary = withTopTranslation(enDictionary, {
  common: {
    language: 'Langue',
    english: 'Anglais',
    vietnamese: 'Vietnamien',
    downloadCv: 'Telecharger CV',
    contact: 'Contact',
    viewProjects: 'Voir les projets',
  },
  headerLinks: ['Accueil', 'A propos', 'Competences', 'Projets', 'Experience', 'Contact'],
  hero: {
    greeting: 'Bonjour, je suis',
    name: 'Tran Dinh Hung',
    role: 'Developpeur logiciel fullstack',
    shortIntro:
      'Je construis des applications web evolutives avec une architecture claire et une experience fluide.',
    ctaPrimary: 'Voir les projets',
    ctaSecondary: 'Contact',
  },
})

const ruDictionary = withTopTranslation(enDictionary, {
  common: {
    language: 'Язык',
    english: 'Английский',
    vietnamese: 'Вьетнамский',
    downloadCv: 'Скачать CV',
    contact: 'Контакт',
    viewProjects: 'Смотреть проекты',
  },
  headerLinks: ['Главная', 'Обо мне', 'Навыки', 'Проекты', 'Опыт', 'Контакты'],
  hero: {
    greeting: 'Здравствуйте, я',
    name: 'Tran Dinh Hung',
    role: 'Fullstack разработчик',
    shortIntro:
      'Я создаю масштабируемые веб-приложения с четкой архитектурой и профессиональным пользовательским опытом.',
    ctaPrimary: 'Смотреть проекты',
    ctaSecondary: 'Контакт',
  },
})

const esDictionary = withTopTranslation(enDictionary, {
  common: {
    language: 'Idioma',
    english: 'Ingles',
    vietnamese: 'Vietnamita',
    downloadCv: 'Descargar CV',
    contact: 'Contacto',
    viewProjects: 'Ver proyectos',
  },
  headerLinks: ['Inicio', 'Sobre mi', 'Habilidades', 'Proyectos', 'Experiencia', 'Contacto'],
  hero: {
    greeting: 'Hola, soy',
    name: 'Tran Dinh Hung',
    role: 'Desarrollador de software fullstack',
    shortIntro:
      'Construyo aplicaciones web escalables con arquitectura clara y una experiencia de usuario profesional.',
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Contacto',
  },
})

export const portfolioDictionaries: Record<Locale, PortfolioDictionary> = {
  en: enDictionary,
  vi: viDictionary,
  ja: jaDictionary,
  zh: zhDictionary,
  de: deDictionary,
  ko: koDictionary,
  fr: frDictionary,
  ru: ruDictionary,
  es: esDictionary,
}
