'use client'

import Link from 'next/link'
import { useLanguage } from '../providers'

interface Post {
  slug: string
  title: string
  date: string
  tags: string[]
}

export default function BlogContent({ posts }: { posts: Post[] }) {
  const { t } = useLanguage()

  return (
    <>
      <main>
        <div className="tab blog-tab active">
          <div className="fade-up">
            <p className="blog-note">{t('wip')}</p>
          </div>

          <div className="fade-up post-list" style={{ animationDelay: '0.1s' }}>
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="post-link">
                <div className="post-item">
                  <div className="post-content-container">
                    <div className="post-title">{post.title}</div>
                    <div className="post-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="post-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="post-meta">{post.date}</div>
                </div>
              </Link>
            ))}

            {posts.length === 0 && (
              <p style={{ color: 'var(--muted)', fontSize: '14px' }}>{t('no_posts_found')}</p>
            )}
          </div>
        </div>
      </main>

      <footer>
        <small>{t('copyleft')}</small>
      </footer>
    </>
  )
}
