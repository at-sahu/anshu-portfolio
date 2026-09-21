import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext.jsx'

function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`back-to-top icon-button ${visible ? 'is-visible' : ''}`}
      type="button"
      aria-label={t('backToTop')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default BackToTop
