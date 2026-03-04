'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

type Language = 'en' | 'pt'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: 'home',
    about: 'about',
    blog: 'blog',
    hero_sub: "software engineer and student passionate about open source. i enjoy watching movies, playing offline games and practicing sports.",
    contact: 'contact',
    communities: 'communities',
    wip: '// wip - posts coming soon',
    no_posts_found: 'no posts found.',
    back_to_blog: 'back to blog',
    copyleft: 'copyleft 2026 - none right reserved by gbiz0',
    about_who_am_i_title: 'who am i?',
    about_who_am_i_text_1: 'a passionate student and software engineer who believes technology is a tool for social transformation. i’m constantly seeking to understand how the world works, listen to different perspectives, and share everything i learn.',
    about_who_am_i_text_2: 'currently, i’m focused on expanding my contributions to the open-source ecosystem and leading communities that democratize access to high-quality tech education.',
    about_education_title: 'education',
    about_education_text: 'IT technician for the internet from ETEC and future bachelor of science in information systems from IFSP.',
    about_experiences_title: 'experiences',
    about_exp_ticket_imediato: 'java software engineer at ticket imediato: architecting scalable e-commerce and POS solutions.',
    about_exp_morph_ia: "software & ai consultant at morph ia: developing AI-driven recruitment agents for global brands like domino's pizza.",
    about_exp_appsolute: 'full stack developer at appsolute: managed strategic commercial systems for over 100 corporate clients, reducing manual rework by 50%.',
    about_community_title: 'community leadership',
    about_community_github: 'github campus expert: selected as a global student leader by github to foster tech communities, promote open-source culture, and share software engineering best practices.',
    about_community_coding_ferpa: 'coding ferpa (founder & leader): a tech community focused on empowering young talent through technology and inclusion.',
    about_community_others: 'he4rt developers & java noroeste: actively participating in communities to share knowledge and foster regional tech growth.',
    about_projects_title: 'projects & research',
    about_projects_ai_democracy: 'ai & democracy research: scientific research fellow at FAI.UFSCar, investigating the social and ethical impacts of artificial intelligence.',
    about_projects_open_source: 'open source: contributing to projects that lower the barrier to entry for new developers and exploring clean, efficient architectures.',
  },
  pt: {
    home: 'início',
    about: 'sobre',
    blog: 'blog',
    hero_sub: "engenheiro de software e estudante apaixonado por software livre. curto assistir filmes, jogar games offline e praticar esportes.",
    contact: 'contato',
    communities: 'comunidades',
    wip: '// em breve - novos posts',
    no_posts_found: 'nenhum post encontrado.',
    back_to_blog: 'voltar para o blog',
    copyleft: 'copyleft 2026 - nenhum direito reservado por gbiz0',
    about_who_am_i_title: 'quem sou eu?',
    about_who_am_i_text_1: 'um estudante apaixonado e engenheiro de software que acredita que a tecnologia é uma ferramenta para transformação social. estou constantemente buscando entender como o mundo funciona, ouvindo diferentes perspectivas e compartilhando tudo o que aprendo.',
    about_who_am_i_text_2: 'atualmente, estou focado em expandir minhas contribuições para o ecossistema de código aberto e liderar comunidades que democratizam o acesso à educação tecnológica de alta qualidade.',
    about_education_title: 'educação',
    about_education_text: 'técnico em informática para internet pela etec e futuro bacharel em sistemas de informação pelo ifsp',
    about_experiences_title: 'experiências',
    about_exp_ticket_imediato: 'engenheiro de software java na ticket imediato: arquitetando soluções escaláveis de e-commerce e PDV.',
    about_exp_morph_ia: "consultor de software & ia na morph ia: desenvolvendo agentes de recrutamento baseados em IA para marcas globais como domino's pizza.",
    about_exp_appsolute: 'desenvolvedor full stack na appsolute: gerenciei sistemas comerciais estratégicos para mais de 100 clientes corporativos, reduzindo o retrabalho manual em 50%.',
    about_community_title: 'liderança comunitária',
    about_community_github: 'github campus expert: selecionado como um líder estudantil global pelo github para fomentar comunidades tecnológicas, promover a cultura de código aberto e compartilhar as melhores práticas de engenharia de software.',
    about_community_coding_ferpa: 'coding ferpa (fundador & líder): uma comunidade tecnológica focada em capacitar jovens talentos através da tecnologia e inclusão.',
    about_community_others: 'he4rt developers & java noroeste: participando ativamente de comunidades para compartilhar conhecimento e fomentar o crescimento tecnológico regional.',
    about_projects_title: 'projetos & pesquisa',
    about_projects_ai_democracy: 'pesquisa em IA & democracia: bolsista de pesquisa científica na FAI.UFSCar, investigando os impactos sociais e éticos da inteligência artificial.',
    about_projects_open_source: 'open source: contribuindo para projetos que diminuem a barreira de entrada para novos desenvolvedores e explorando arquiteturas limpas e eficientes.',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('lang') as Language
    if (savedLang) setLang(savedLang)
  }, [])

  const handleSetLang = (newLang: Language) => {
    setLang(newLang)
    localStorage.setItem('lang', newLang)
  }

  const t = (key: string) => {
    return translations[lang][key as keyof typeof translations['en']] || key
  }

  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="dark">
      <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
        {children}
      </LanguageContext.Provider>
    </NextThemesProvider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
