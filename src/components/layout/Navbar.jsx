import { Download, Languages, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Button from '../common/Button.jsx'
import { navItems, profile } from '../../data/portfolio.js'
import { text } from '../../utils/text.js'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { useTheme } from '../../context/ThemeContext.jsx'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const nav = (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`nav-link ${active === item.id ? 'active' : ''}`}
          onClick={() => {
            setOpen(false)
            scrollToSection(item.id)
          }}
        >
          {text(item.label, language)}
        </button>
      ))}
    </>
  )

  return (
    <>
      <a className="skip-link" href="#main">{t('skipToContent')}</a>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="brand magnetic" type="button" onClick={() => scrollToSection('home')} aria-label="Anshu Kumar Sah home">
            <span className="brand-mark">AKS</span>
            <span className="brand-text">Anshu</span>
          </button>

          <nav className="nav-center" aria-label="Primary navigation">
            {nav}
          </nav>

          <div className="nav-actions">
            <button className="icon-button" type="button" aria-label={uiLabel(language)} onClick={toggleLanguage}>
              <Languages size={18} />
              <span className="compact-label">{language === 'en' ? 'EN' : 'हिं'}</span>
            </button>
            <button className="icon-button" type="button" aria-label="Toggle theme" onClick={toggleTheme}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button href={profile.resumeUrl} download icon={Download} variant="primary" className="resume-button">
              {t('resume')}
            </Button>
            <button className="icon-button menu-button" type="button" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-panel">
          <div className="drawer-head">
            <span className="brand-mark">AKS</span>
            <button className="icon-button" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <nav className="drawer-nav" aria-label="Mobile navigation">
            {nav}
          </nav>
          <div className="drawer-actions">
            <Button href={profile.resumeUrl} download icon={Download} variant="primary">
              {t('downloadResume')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

function uiLabel(language) {
  return language === 'en' ? 'Switch to Hindi' : 'Switch to English'
}

export default Navbar
