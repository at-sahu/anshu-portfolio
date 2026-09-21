import { useEffect, useState } from 'react'

function CustomCursor() {
  const [state, setState] = useState({ x: -100, y: -100, active: false, enabled: false })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return undefined

    setState((current) => ({ ...current, enabled: true }))

    const move = (event) => {
      setState((current) => ({ ...current, x: event.clientX, y: event.clientY }))
    }
    const over = (event) => {
      const target = event.target
      if (target.closest?.('a, button, input, textarea, select, .magnetic')) {
        setState((current) => ({ ...current, active: true }))
      }
    }
    const out = (event) => {
      const target = event.target
      if (target.closest?.('a, button, input, textarea, select, .magnetic')) {
        setState((current) => ({ ...current, active: false }))
      }
    }

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  if (!state.enabled) return null

  return (
    <span
      className={`custom-cursor ${state.active ? 'custom-cursor-active' : ''}`}
      style={{ transform: `translate3d(${state.x}px, ${state.y}px, 0)` }}
      aria-hidden="true"
    />
  )
}

export default CustomCursor
