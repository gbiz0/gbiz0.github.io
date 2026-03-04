'use client'

import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { useLanguage } from '../../providers'
import { PostData } from '@/lib/posts'

export default function PostContent({ postData }: { postData: PostData }) {
  const { t } = useLanguage()

  return (
    <>
      <main className="post-detail">
        <div className="fade-up">
          <Link href="/blog" className="back-link">
            <ArrowLeft size={16} />
            {t('back_to_blog')}
          </Link>

          {postData.headerImage && (
            <div className="post-header-image-container">
              <img 
                src={postData.headerImage} 
                alt={postData.title} 
                className="post-header-image"
              />
            </div>
          )}

          <article className="post-content">
            <header className="post-header">
              <h1 className="post-detail-title">{postData.title}</h1>
              <div className="post-detail-meta">
                <span className="meta-item">
                  <Calendar size={14} />
                  {postData.date}
                </span>
                <div className="meta-tags">
                  <Tag size={14} />
                  {postData.tags.map(tag => (
                    <span key={tag} className="post-tag-detail">{tag}</span>
                  ))}
                </div>
              </div>
            </header>

            <div className="markdown-body">
              <ReactMarkdown>{postData.content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </main>

      <footer>
        <small>{t('copyleft')}</small>
      </footer>
    </>
  )
}
