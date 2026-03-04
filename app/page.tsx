'use client'

import Navbar from './navbar'
import Typing from './typing'
import { useLanguage } from './providers'

export default function Home() {
  const { t, lang } = useLanguage()
  const roles = lang === 'en' ? ['gustavo bizo', 'developer', 'student'] : ['gustavo bizo', 'desenvolvedor', 'estudante']

  return (
    <div className="layout-wrapper">
      <Navbar />
      
      <main>
        <div className="tab active">
          <div className="fade-up">
            <h1 className="hero-name">
              <span style={{ color: '#8257e6' }}>{"> "}</span>
              <Typing roles={roles} key={lang} />
            </h1>
            <p className="hero-sub">{t('hero_sub')}</p>
          </div>

          <div className="fade-up" style={{ display: 'flex', justifyContent: 'center', margin: '40px 0 60px', animationDelay: '0.1s' }}>
            <div className="image-frame">
              <img 
                src="/resources/image.png" 
                alt="Conceptual" 
                className="conceptual-image"
              />
            </div>
          </div>

          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="section-label">{t('contact')}</p>
            <div className="contact-row">
              <a className="contact-link" href="https://www.linkedin.com/in/gustavo-bizo/" target="_blank" rel="noopener noreferrer">
                linkedin
              </a>
              <a className="contact-link" href="https://github.com/gbiz0" target="_blank" rel="noopener noreferrer">
                github
              </a>
              <a className="contact-link" href="https://www.instagram.com/gustavo_bizo/" target="_blank" rel="noopener noreferrer">
                instagram
              </a>
              <a className="contact-link" href="mailto:gustavobizo@protonmail.com">
                email
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <small>{t('copyleft')}</small>
      </footer>
    </div>
  )
}
