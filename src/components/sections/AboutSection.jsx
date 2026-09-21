import { BriefcaseBusiness, Download, FolderKanban, Mail } from 'lucide-react'
import Button from '../common/Button.jsx'
import Icon from '../common/Icon.jsx'
import Reveal from '../common/Reveal.jsx'
import SectionHeader from '../common/SectionHeader.jsx'
import { profile, quickFacts, sectionCopy, techStack } from '../../data/portfolio.js'
import { text } from '../../utils/text.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

function AboutSection() {
  const { language, t } = useLanguage()

  return (
    <section id="about" className="section-band about-section">
      <div className="container">
        <SectionHeader {...sectionCopy.about} />
        <div className="about-grid">
          <Reveal className="about-media">
            <img src={profile.profileImage} alt="Professional placeholder portrait for Anshu Kumar Sah" width="520" height="620" loading="lazy" />
          </Reveal>
          <Reveal className="about-content" delay={0.08}>
            <p className="body-large">{text(sectionCopy.about.body, language)}</p>
            <div className="about-actions">
              <Button href={profile.resumeUrl} download icon={Download}>{t('downloadResume')}</Button>
              <Button href="#projects" icon={FolderKanban} variant="secondary">{t('viewProjects')}</Button>
              <Button href="#contact" icon={BriefcaseBusiness} variant="ghost">{t('hireMe')}</Button>
              <Button href={`mailto:${profile.email}`} icon={Mail} variant="ghost">{t('contactMe')}</Button>
            </div>
            <div className="facts-grid">
              {quickFacts.map((fact, index) => (
                <Reveal key={text(fact.title, 'en')} delay={index * 0.035} className="fact-card">
                  <Icon name={fact.icon} />
                  <span>{text(fact.title, language)}</span>
                  <strong>{text(fact.value, language)}</strong>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal className="tech-wall" delay={0.08}>
          {techStack.map((tech) => <span key={tech}>{tech}</span>)}
        </Reveal>
      </div>
    </section>
  )
}

export default AboutSection
