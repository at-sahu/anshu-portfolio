import Reveal from './Reveal.jsx'
import { text } from '../../utils/text.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

function SectionHeader({ label, title, subtitle, align = 'left' }) {
  const { language } = useLanguage()

  return (
    <Reveal className={`section-header ${align === 'center' ? 'section-header-center' : ''}`}>
      <p className="eyebrow">{text(label, language)}</p>
      <h2>{text(title, language)}</h2>
      {subtitle ? <p className="section-subtitle">{text(subtitle, language)}</p> : null}
    </Reveal>
  )
}

export default SectionHeader
