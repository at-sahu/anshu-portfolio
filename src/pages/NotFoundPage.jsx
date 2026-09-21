import { Home, Mail } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <main className="not-found">
      <Helmet>
        <title>404 | Anshu Kumar Sah</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="not-found-visual" aria-hidden="true">404</div>
      <p className="eyebrow">404</p>
      <h1>{t('notFoundTitle')}</h1>
      <div className="not-found-actions">
        <Button as={Link} href="/" icon={Home} variant="primary">{t('goHome')}</Button>
        <Button href="mailto:anshusahu380t@gmail.com" icon={Mail} variant="secondary">{t('contactMe')}</Button>
      </div>
    </main>
  )
}

export default NotFoundPage
