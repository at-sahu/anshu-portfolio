import { ArrowDown, BriefcaseBusiness, FolderKanban, Mail, Send } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import Button from '../common/Button.jsx'
import Icon from '../common/Icon.jsx'
import Reveal from '../common/Reveal.jsx'
import useCountUp from '../../hooks/useCountUp.js'
import { heroCopy, profile, stats, techStack } from '../../data/portfolio.js'
import { text } from '../../utils/text.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

function HeroSection() {
  const { language, t } = useLanguage()
  const roles = useMemo(() => profile.titles.map((title) => text(title, language)), [language])
  const role = useTypewriter(roles)
  const graduationLabel = language === 'hi' ? '\u0917\u094d\u0930\u0947\u091c\u0941\u090f\u0936\u0928' : 'Graduation'
  const availabilityLabel = language === 'hi' ? 'Freelance \u0915\u0947 \u0932\u093f\u090f \u0909\u092a\u0932\u092c\u094d\u0927' : 'Available for Freelance'

  return (
    <section id="home" className="hero-section section-band">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => <span key={`hero-particle-${index}`} />)}
      </div>
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="hero-kicker">{text(heroCopy.greeting, language)}</p>
          <h1>{profile.name}</h1>
          <p className="typed-role" aria-label={role}>
            {role}
            <span aria-hidden="true" />
          </p>
          <p className="hero-intro">{text(heroCopy.intro, language)}</p>
          <div className="hero-academic" aria-label="Academic status">
            <span className="academic-chip">{text(profile.semester, language)}</span>
            <span className="academic-chip">{graduationLabel} {profile.graduation}</span>
          </div>
          <div className="hero-actions">
            <Button href="#projects" icon={FolderKanban}>{t('viewProjects')}</Button>
            <Button href={profile.resumeUrl} download icon={BriefcaseBusiness} variant="secondary">{t('downloadResume')}</Button>
            <Button href="#contact" icon={Mail} variant="ghost">{t('contactMe')}</Button>
            <Button href="#contact" icon={Send} variant="ghost">{t('hireMe')}</Button>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <StatItem key={text(stat.label, 'en')} stat={stat} />
            ))}
          </div>
          <div className="tech-strip" aria-label="Quick technology stack">
            {techStack.slice(0, 14).map((tech) => <span key={tech} className={`tech-chip ${techClassName(tech)}`}>{tech}</span>)}
          </div>
          <div className="social-row hero-socials">
            {profile.socials.map((social) => (
              <a key={social.label} className="icon-button tooltip" href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} data-tooltip={social.label}>
                <Icon name={social.icon} size={18} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-profile" delay={0.12}>
          <div className="ai-globe-card">
            <img className="hero-portrait" src={profile.profileImage} alt={profile.name} />
            <div className="globe-rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="profile-status">
              <span />
              {availabilityLabel}
            </div>
          </div>
        </Reveal>
      </div>
      <a className="scroll-indicator" href="#about" aria-label="Scroll to about section">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}

function techClassName(tech) {
  return `tech-${tech.toLowerCase().replace(/\+\+/g, 'pp').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
}

function StatItem({ stat }) {
  const { language } = useLanguage()
  const { ref, value } = useCountUp(stat.value)

  return (
    <div ref={ref} className="stat-card">
      <strong>{value}{stat.suffix}</strong>
      <span>{text(stat.label, language)}</span>
    </div>
  )
}

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0)
  const [characterIndex, setCharacterIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setWordIndex(0)
    setCharacterIndex(0)
    setDeleting(false)
  }, [words])

  useEffect(() => {
    const current = words[wordIndex] || ''
    const complete = characterIndex === current.length
    const empty = characterIndex === 0
    const delay = complete && !deleting ? 1350 : deleting ? 38 : 64

    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true)
      } else if (empty && deleting) {
        setDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
      } else {
        setCharacterIndex((index) => index + (deleting ? -1 : 1))
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [characterIndex, deleting, wordIndex, words])

  return (words[wordIndex] || '').slice(0, characterIndex)
}

export default HeroSection
