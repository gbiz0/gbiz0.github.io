'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon, Languages } from 'lucide-react'
import { useLanguage } from './providers'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <nav>
      <div className="logo">~/<span>gbiz0</span></div>
      <div className="nav-links">
        <Link 
          href="/"
          className={`nav-btn ${isActive('/') ? 'active' : ''}`}
        >
          {t('home')}
        </Link>
        <Link 
          href="/about"
          className={`nav-btn ${isActive('/about') ? 'active' : ''}`}
        >
          {t('about')}
        </Link>
        <Link 
          href="/blog"
          className={`nav-btn ${isActive('/blog') ? 'active' : ''}`}
        >
          {t('blog')}
        </Link>
        
        <div className="nav-separator" />

        <button 
          className="control-btn"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          title="Toggle Theme"
        >
          {mounted ? (theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />) : <div style={{ width: 14, height: 14 }} />}
        </button>

        <button 
          className="control-btn"
          onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
          title="Toggle Language"
        >
          <Languages size={14} />
          <span style={{ fontSize: '10px', marginLeft: '4px', textTransform: 'uppercase' }}>{lang}</span>
        </button>
      </div>
    </nav>
  )
}
