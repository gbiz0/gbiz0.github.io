'use client'

import Navbar from '../navbar'
import { useLanguage } from '../providers'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="layout-wrapper">
      <Navbar />
      
      <main>
        <div className="tab active">
          <div className="fade-up about-header">
            <div className="about-meta">
              <h2>{t('about')}</h2>
            </div>
          </div>

          <div className="fade-up about-body" style={{ animationDelay: '0.1s' }}>
            <p>{t('about_text_1')}</p>
            <p>
              {t('about_text_2').split('IFSP')[0]}
              <a href="https://www.ifsp.edu.br/" target="_blank" rel="noopener noreferrer">IFSP</a>
              {t('about_text_2').split('IFSP')[1]}
            </p>
          </div>

          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="section-label">{t('communities')}</p>
            <div className="community-list">
              <div className="community-item">
                <div className="community-dot"></div>
                <div className="community-info">
                  <a href="https://heartdevs.com/" target="_blank" rel="noopener noreferrer">He4rt Developers</a>
                  <span>{t('he4rt')}</span>
                </div>
              </div>
              <div className="community-item">
                <div className="community-dot" style={{ background: '#f9b234' }}></div>
                <div className="community-info">
                  <a href="https://javanoroeste.com.br/javanoroeste/" target="_blank" rel="noopener noreferrer">Java Noroeste</a>
                  <span>{t('java_noroeste')}</span>
                </div>
              </div>
              <div className="community-item">
                <div className="community-dot" style={{ background: '#3ddc84' }}></div>
                <div className="community-info">
                  <a href="https://codingferpa.org/" target="_blank" rel="noopener noreferrer">Coding Ferpa — Community Leader</a>
                  <span>{t('coding_ferpa')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="about-goal">{t('about_goal')}</p>
          </div>
        </div>
      </main>

      <footer>
        <small>{t('copyleft')}</small>
      </footer>
    </div>
  )
}
