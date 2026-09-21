import { createContext, useContext, useMemo, useState } from 'react'
import { ui } from '../translations/ui.js'

const LanguageContext = createContext(null)

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en'
  return window.localStorage.getItem('aks-language') || 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  const setLanguage = (nextLanguage) => {
    setLanguageState(nextLanguage)
    document.documentElement.lang = nextLanguage === 'hi' ? 'hi' : 'en'
    window.localStorage.setItem('aks-language', nextLanguage)
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === 'en' ? 'hi' : 'en'),
      t: (key) => ui[language]?.[key] || ui.en[key] || key,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
