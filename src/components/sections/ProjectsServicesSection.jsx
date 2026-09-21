import { ArrowUpRight, Code2, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import Button from '../common/Button.jsx'
import Icon from '../common/Icon.jsx'
import Modal from '../common/Modal.jsx'
import Reveal from '../common/Reveal.jsx'
import SectionHeader from '../common/SectionHeader.jsx'
import { achievements, projects, sectionCopy, services } from '../../data/portfolio.js'
import { text } from '../../utils/text.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

function ProjectsServicesSection() {
  const { language, t } = useLanguage()
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], [])
  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesFilter = filter === 'All' || project.category === filter
        const haystack = `${text(project.title, language)} ${text(project.summary, language)} ${project.stack.join(' ')}`.toLowerCase()
        return matchesFilter && haystack.includes(query.toLowerCase())
      }),
    [filter, language, query],
  )

  return (
    <>
      <section id="projects" className="section-band projects-section">
        <div className="container">
          <SectionHeader {...sectionCopy.projects} />
          <Reveal className="project-tools">
            <div className="filter-row" role="tablist" aria-label="Project filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={filter === category ? 'active' : ''}
                  onClick={() => setFilter(category)}
                >
                  {category === 'All' ? t('all') : category}
                </button>
              ))}
            </div>
            <label className="search-box">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">{t('searchProjects')}</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('searchProjects')} />
            </label>
          </Reveal>

          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <Reveal key={text(project.title, 'en')} delay={index * 0.06} className="project-card">
                <button type="button" className="project-image" onClick={() => setSelectedProject(project)} aria-label={`${t('viewDetails')}: ${text(project.title, language)}`}>
                  <img src={project.image} alt={`${text(project.title, language)} placeholder screenshot`} loading="lazy" />
                  <span>{text(project.status, language)}</span>
                </button>
                <div className="project-body">
                  <div>
                    <p className="eyebrow">{project.category}</p>
                    <h3>{text(project.title, language)}</h3>
                    <p>{text(project.summary, language)}</p>
                  </div>
                  <div className="chip-row">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <div className="card-actions">
                    <Button onClick={() => setSelectedProject(project)} variant="secondary">{t('viewDetails')}</Button>
                    <a className="icon-button" href={project.source} target="_blank" rel="noopener noreferrer" aria-label={t('sourceCode')}>
                      <Code2 size={18} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <Reveal className="empty-state">
              <Icon name="Search" size={32} />
              <h3>{language === 'hi' ? 'कोई प्रोजेक्ट नहीं मिला' : 'No projects found'}</h3>
              <p>{language === 'hi' ? 'Filter या search को बदलकर फिर देखें।' : 'Try changing the filter or search term.'}</p>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section id="services" className="section-band">
        <div className="container">
          <SectionHeader {...sectionCopy.services} align="center" />
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={text(service.title, 'en')} className="service-card" delay={index * 0.06}>
                <span className="icon-shell"><Icon name={service.icon} /></span>
                <h3>{text(service.title, language)}</h3>
                <p>{text(service.description, language)}</p>
                <a href="#contact" className="inline-link">
                  {t('contactMe')} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="experience-panel">
            <div>
              <p className="eyebrow">{language === 'hi' ? 'अनुभव' : 'Experience'}</p>
              <h3>{language === 'hi' ? 'Fresher, लेकिन सीखने और बनाने के लिए तैयार' : 'Fresher, Ready to Learn and Build'}</h3>
              <p>
                {language === 'hi'
                  ? 'यह portfolio वास्तविक professional growth के लिए बनाया गया है। इसमें कोई fake work experience नहीं है, बल्कि practical learning, clean design, and freelance readiness को स्पष्ट रूप से दिखाया गया है।'
                  : 'This portfolio is built for real professional growth. It avoids fake work experience and clearly presents practical learning, clean design, and freelance readiness.'}
              </p>
            </div>
            <div className="achievement-grid">
              {achievements.map((item) => (
                <div key={text(item.label, 'en')} className="achievement-card">
                  <Icon name={item.icon} />
                  <strong>{item.value}</strong>
                  <span>{text(item.label, language)}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

function ProjectModal({ project, onClose }) {
  const { language, t } = useLanguage()

  return (
    <Modal open={Boolean(project)} title={project ? text(project.title, language) : ''} onClose={onClose}>
      {project ? (
        <div className="project-modal-content">
          <img src={project.image} alt={`${text(project.title, language)} large placeholder`} />
          <p>{text(project.summary, language)}</p>
          <div className="chip-row">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="modal-actions">
            <Button href={project.live} external icon={ArrowUpRight}>{t('livePreview')}</Button>
            <Button href={project.source} external icon={Code2} variant="secondary">{t('sourceCode')}</Button>
          </div>
        </div>
      ) : null}
    </Modal>
  )
}

export default ProjectsServicesSection
