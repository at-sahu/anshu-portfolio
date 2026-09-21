export function text(value, language = 'en') {
  if (typeof value === 'string') return value
  if (!value) return ''
  return value[language] || value.en || ''
}

export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function sanitizeInput(value = '') {
  return String(value).replace(/[<>]/g, '').trim()
}
