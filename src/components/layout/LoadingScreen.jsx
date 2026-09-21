import { useEffect, useState } from 'react'

function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 850)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className={`loader ${visible ? 'loader-visible' : 'loader-hidden'}`} aria-live="polite" aria-label="Loading portfolio">
      <div className="loader-mark" aria-hidden="true">AKS</div>
      <div className="loader-track" aria-hidden="true">
        <span />
      </div>
    </div>
  )
}

export default LoadingScreen
