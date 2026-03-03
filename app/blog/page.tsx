'use client'

import Navbar from '../navbar'
import { useLanguage } from '../providers'

export default function Blog() {
  const { t } = useLanguage()

  return (
    <div className="layout-wrapper">
      <Navbar />
      
      <main>
        <div className="tab active">
          <div className="fade-up">
            <p className="blog-note">{t('wip')}</p>
          </div>

          <div className="fade-up post-list" style={{ animationDelay: '0.1s' }}>
            {[
              { title: "Getting started with Spring Boot and Clean Architecture", tag: "Java" },
              { title: "Why I joined developer communities early in my career", tag: "career" },
              { title: "TypeScript patterns I use every day", tag: "TypeScript" },
              { title: "Understanding the JVM for backend developers", tag: "Java" }
            ].map((post, idx) => (
              <div className="post-item" key={idx}>
                <div>
                  <div className="post-title">{post.title}</div>
                  <span className="post-tag">{post.tag}</span>
                </div>
                <div className="post-meta">coming soon</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer>
        <small>{t('copyleft')}</small>
      </footer>
    </div>
  )
}
