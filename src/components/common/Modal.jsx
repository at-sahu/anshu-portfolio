import { X } from 'lucide-react'
import { useEffect } from 'react'

function Modal({ open, title, children, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.classList.add('no-scroll')
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('no-scroll')
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-shell" role="dialog" aria-modal="true" aria-label={title}>
      <button className="modal-backdrop" type="button" aria-label="Close modal" onClick={onClose} />
      <div className="modal-panel">
        <div className="modal-head">
          <h3>{title}</h3>
          <button className="icon-button" type="button" aria-label="Close modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
