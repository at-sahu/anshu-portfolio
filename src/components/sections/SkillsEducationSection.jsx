import Icon from '../common/Icon.jsx'
import Reveal from '../common/Reveal.jsx'
import SectionHeader from '../common/SectionHeader.jsx'
import { education, sectionCopy, skills } from '../../data/portfolio.js'
import { text } from '../../utils/text.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

function SkillsEducationSection() {
  const { language } = useLanguage()

  return (
    <>
      <section id="skills" className="section-band">
        <div className="container">
          <SectionHeader {...sectionCopy.skills} align="center" />
          <div className="skills-grid">
            {skills.map((category, categoryIndex) => (
              <Reveal key={text(category.category, 'en')} className="skill-card" delay={categoryIndex * 0.06}>
                <div className="card-title-row">
                  <span className="icon-shell"><Icon name={category.icon} /></span>
                  <h3>{text(category.category, language)}</h3>
                </div>
                <div className="skill-list">
                  {category.items.map((skill) => (
                    <article key={skill.name} className="skill-item">
                      <div className="skill-item-head">
                        <strong>{skill.name}</strong>
                        <span>{skill.level}%</span>
                      </div>
                      <p>{text(skill.description, language)}</p>
                      <div className="progress-line" aria-label={`${skill.name} ${skill.level}%`}>
                        <span style={{ width: `${skill.level}%` }} />
                      </div>
                    </article>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-band education-section">
        <div className="container">
          <SectionHeader {...sectionCopy.education} />
          <div className="timeline">
            {education.map((item, index) => (
              <Reveal key={text(item.title, 'en')} className="timeline-item" delay={index * 0.08}>
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <p className="eyebrow">{text(item.status, language)}</p>
                  <h3>{text(item.title, language)}</h3>
                  <p>{text(item.meta, language)}</p>
                  <strong>{text(item.place, language)}</strong>
                  <span>{text(item.detail, language)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillsEducationSection
