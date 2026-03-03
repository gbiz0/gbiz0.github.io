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
    hero_sub: "currently under a bachelor's degree at IFSP.",
    contact: 'contact',
    communities: 'communities',
    wip: '// wip - posts coming soon',
    copyleft: 'copyleft 2026 - none right reserved by gbiz0',
    about_text_1: "My name is Gustavo. I started my career during technical education in Computing for the Internet at Etec Profº Armando José Farinazzo, where I built foundations in programming, web development, and IT.",
    about_text_2: "Currently studying Bachelor of Science in Information Systems at the federal institute IFSP in Votuporanga-SP, continuously learning and growing as a developer.",
    about_goal: "My goal is to grow into a strong position in software development, continuously improving both my technical and interpersonal skills.",
    he4rt: "One of the largest developer communities in Brazil — free educational content for all.",
    java_noroeste: "Java community in the northwest region of São Paulo, promoting events and knowledge sharing.",
    coding_ferpa: "A tech community from Fernandópolis focused on empowering young talent through technology.",
  },
  pt: {
    home: 'início',
    about: 'sobre',
    blog: 'blog',
    hero_sub: "atualmente cursando bacharelado no IFSP.",
    contact: 'contato',
    communities: 'comunidades',
    wip: '// em breve - novos posts',
    copyleft: 'copyleft 2026 - nenhum direito reservado por gbiz0',
    about_text_1: "Meu nome é Gustavo. Iniciei minha carreira durante o ensino técnico em Informática para Internet na Etec Profº Armando José Farinazzo, onde construí bases em programação, desenvolvimento web e TI.",
    about_text_2: "Atualmente cursando Bacharelado em Sistemas de Informação no instituto federal IFSP em Votuporanga-SP, aprendendo e crescendo continuamente como desenvolvedor.",
    about_goal: "Meu objetivo é crescer em uma posição sólida no desenvolvimento de software, melhorando continuamente minhas habilidades técnicas e interpessoais.",
    he4rt: "Uma das maiores comunidades de desenvolvedores do Brasil — conteúdo educacional gratuito para todos.",
    java_noroeste: "Comunidade Java na região noroeste de São Paulo, promovendo eventos e compartilhamento de conhecimento.",
    coding_ferpa: "Uma comunidade de tecnologia de Fernandópolis focada em capacitar jovens talentos através da tecnologia.",
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
