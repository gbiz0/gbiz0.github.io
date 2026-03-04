'use client'

import React from 'react'
import Navbar from '../navbar'
import { useLanguage } from '../providers'

export default function About() {
  const { t } = useLanguage()

  const renderWithLinks = (text: string) => {
    if (!text) return ''
    const links: { [key: string]: string } = {
      'ifsp': 'https://vtp.ifsp.edu.br/',
      'etec': 'https://etecfernandopolis.com.br/site/inicio/',
      'ticket imediato': 'https://ticketimediato.com/',
      'morph ia': 'https://morphia.com.br/',
      'appsolute': 'https://www.appsolute.com.br/',
      'coding ferpa': 'https://codingferpa.org/',
      'he4rt developers': 'https://heartdevs.com/',
      'java noroeste': 'https://javanoroeste.com.br/javanoroeste/',
    }

    const sortedNames = Object.keys(links).sort((a, b) => b.length - a.length)

    let parts: (string | React.ReactNode)[] = [text]

    sortedNames.forEach((name) => {
      const newParts: (string | React.ReactNode)[] = []
      parts.forEach((part, i) => {
        if (typeof part === 'string') {
          const subParts = part.split(new RegExp(`(${name})`, 'gi'))
          subParts.forEach((subPart, j) => {
            if (subPart.toLowerCase() === name.toLowerCase()) {
              newParts.push(
                <a key={`${name}-${i}-${j}`} href={links[name]} target="_blank" rel="noopener noreferrer">
                  {subPart}
                </a>
              )
            } else if (subPart !== '') {
              newParts.push(subPart)
            }
          })
        } else {
          newParts.push(part)
        }
      })
      parts = newParts
    })

    return parts
  }

  return (
    <div className="layout-wrapper">
      <Navbar />
      
      <main>
        <div className="tab active blog-tab">
          <div className="fade-up about-header">
            <div className="about-meta">
              <h2>{t('about')}</h2>
            </div>
          </div>

          <div className="fade-up about-body" style={{ animationDelay: '0.1s' }}>
            <p className="section-label">{t('about_who_am_i_title')}</p>
            <p>{renderWithLinks(t('about_who_am_i_text_1'))}</p>
            <p>{renderWithLinks(t('about_who_am_i_text_2'))}</p>
          </div>

          <div className="fade-up about-body" style={{ animationDelay: '0.2s' }}>
            <p className="section-label">{t('about_education_title')}</p>
            <p>{renderWithLinks(t('about_education_text'))}</p>
          </div>

          <div className="fade-up about-body" style={{ animationDelay: '0.3s' }}>
            <p className="section-label">{t('about_experiences_title')}</p>
            <div className="about-list">
                <div className="about-list-item current">{renderWithLinks(t('about_exp_ticket_imediato'))}</div>
                <div className="about-list-item strikethrough">{renderWithLinks(t('about_exp_morph_ia'))}</div>
                <div className="about-list-item strikethrough">{renderWithLinks(t('about_exp_appsolute'))}</div>
            </div>
          </div>

          <div className="fade-up about-body" style={{ animationDelay: '0.4s' }}>
            <p className="section-label">{t('about_community_title')}</p>
            <div className="about-list">
                <div className="about-list-item">{renderWithLinks(t('about_community_github'))}</div>
                <div className="about-list-item">{renderWithLinks(t('about_community_coding_ferpa'))}</div>
                <div className="about-list-item">{renderWithLinks(t('about_community_others'))}</div>
            </div>
          </div>

          <div className="fade-up about-body" style={{ animationDelay: '0.5s' }}>
            <p className="section-label">{t('about_projects_title')}</p>
            <div className="about-list">
                <div className="about-list-item">{renderWithLinks(t('about_projects_ai_democracy'))}</div>
                <div className="about-list-item">{renderWithLinks(t('about_projects_open_source'))}</div>
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
