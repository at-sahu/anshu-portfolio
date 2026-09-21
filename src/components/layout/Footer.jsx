import { ArrowUpRight, Send } from 'lucide-react'
import Button from '../common/Button.jsx'
import Icon from '../common/Icon.jsx'
import { navItems, profile, services } from '../../data/portfolio.js'
import { text } from '../../utils/text.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

function Footer() {
  const { language, t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <section className="final-cta">
        <div>
          <p className="eyebrow">Start a Project</p>
          <h2>{language === 'hi' ? 'अपना अगला प्रोजेक्ट बनाने के लिए तैयार हैं?' : 'Ready to Build Your Next Project?'}</h2>
          <p>
            {language === 'hi'
              ? 'Portfolio, business website या custom full stack idea के लिए सीधे जुड़ें।'
              : 'Connect for a portfolio, business website, or custom full stack idea with a clear launch path.'}
          </p>
        </div>
        <div className="cta-actions">
          <Button href="#contact" icon={Send} variant="primary">{language === 'hi' ? 'प्रोजेक्ट शुरू करें' : 'Start a Project'}</Button>
          <Button href={profile.resumeUrl} download icon={ArrowUpRight} variant="secondary">{t('downloadResume')}</Button>
        </div>
      </section>

      <div className="footer-grid">
        <div className="footer-about">
          <span className="brand-mark">AKS</span>
          <p>
            {language === 'hi'
              ? 'Anshu Kumar Sah का premium bilingual portfolio, future projects, certificates और freelance services के लिए तैयार।'
              : 'Premium bilingual portfolio for Anshu Kumar Sah, ready for future projects, certificates, and freelance services.'}
          </p>
          <div className="social-row">
            {profile.socials.map((social) => (
              <a key={social.label} className="icon-button" href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <Icon name={social.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3>{language === 'hi' ? 'लिंक' : 'Quick Links'}</h3>
          <ul className="footer-list">
            {navItems.slice(0, 6).map((item) => (
              <li key={item.id}><a href={`#${item.id}`}>{text(item.label, language)}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{language === 'hi' ? 'सेवाएं' : 'Services'}</h3>
          <ul className="footer-list">
            {services.map((service) => (
              <li key={text(service.title, 'en')}><a href="#services">{text(service.title, language)}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{language === 'hi' ? 'न्यूज़लेटर' : 'Newsletter'}</h3>
          <form className="newsletter" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email</label>
            <input id="newsletter-email" type="email" placeholder="email@example.com" />
            <button className="icon-button" type="submit" aria-label="Join newsletter"><Send size={18} /></button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026-2029 Anshu Kumar Sah. All Rights Reserved.</p>
        <p>Designed & Developed by Anshu Kumar Sah. Updated {year}.</p>
      </div>
    </footer>
  )
}

export default Footer
