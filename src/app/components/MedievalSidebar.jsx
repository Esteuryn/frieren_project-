import { useEffect, useId, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { to: '/', label: 'Inicio', detail: 'El comienzo del viaje', icon: 'home' },
  { to: '/#personajes', label: 'Personajes', detail: 'Héroes y compañeros', icon: 'people' },
  { to: '/#magia', label: 'Grimorio', detail: 'Hechizos y secretos', icon: 'spark' },
  { to: '/#viaje', label: 'El viaje', detail: 'Lugares y memorias', icon: 'map' },
]

function MenuIcon({ name }) {
  const paths = {
    home: <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z" />,
    people: <path d="M8.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-1a3 3 0 1 0 0-6M2.5 20v-1.5A4.5 4.5 0 0 1 7 14h3a4.5 4.5 0 0 1 4.5 4.5V20m1-6h.5a4 4 0 0 1 4 4v2" />,
    spark: <path d="m12 2 1.25 5.75L19 9l-5.75 1.25L12 16l-1.25-5.75L5 9l5.75-1.25L12 2Zm6 12 .75 3.25L22 18l-3.25.75L18 22l-.75-3.25L14 18l3.25-.75L18 14ZM5 13l.7 3.3L9 17l-3.3.7L5 21l-.7-3.3L1 17l3.3-.7L5 13Z" />,
    map: <path d="m3 6 5-2 8 3 5-2v13l-5 2-8-3-5 2V6Zm5-2v13m8-10v13" />,
  }

  return (
    <svg aria-hidden="true" className="medieval-sidebar__icon" viewBox="0 0 30 30">
      {paths[name]}
    </svg>
  )
}

function MedievalSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarId = useId()
  const closeButtonRef = useRef(null)
  const touchStartRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  useEffect(() => {
    const handleTouchStart = (event) => {
      const touch = event.touches[0]
      if (!touch) return

      const startsAtEdge = touch.clientX >= window.innerWidth - 72
      if (isOpen || startsAtEdge) {
        touchStartRef.current = { x: touch.clientX, y: touch.clientY }
      }
    }

    const handleTouchEnd = (event) => {
      const start = touchStartRef.current
      const touch = event.changedTouches[0]
      touchStartRef.current = null
      if (!start || !touch) return

      const deltaX = touch.clientX - start.x
      const deltaY = touch.clientY - start.y
      if (Math.abs(deltaX) < 55 || Math.abs(deltaX) <= Math.abs(deltaY)) return

      if (!isOpen && start.x >= window.innerWidth - 72 && deltaX < 0) {
        setIsOpen(true)
      } else if (isOpen && deltaX > 0) {
        setIsOpen(false)
      }
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isOpen])

  return (
    <>
      <button
        aria-hidden={!isOpen}
        aria-label="Cerrar el menú"
        className={`medieval-sidebar__backdrop ${isOpen ? 'is-visible' : ''}`}
        onClick={() => setIsOpen(false)}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />

      <aside
        aria-label="Menú de navegación"
        className={`medieval-sidebar ${isOpen ? 'is-open' : ''}`}
        id={sidebarId}
      >
        <button
          aria-controls={sidebarId}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar el grimorio' : 'Abrir el grimorio'}
          className="medieval-sidebar__staff-trigger"
          onClick={() => setIsOpen((open) => !open)}
          title={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          type="button"
        >
          <span className="medieval-sidebar__staff-glow" />
          <img alt="" aria-hidden="true" className="medieval-sidebar__staff" src="/baston_sidebar.png" />
          <span aria-hidden="true" className="medieval-sidebar__mobile-trigger-icon">
            <i /><i /><i />
          </span>
          <span className="medieval-sidebar__hint">{isOpen ? 'Cerrar' : 'Abrir'}</span>
        </button>

        <div
          aria-hidden={!isOpen}
          className="medieval-sidebar__inner"
          inert={isOpen ? undefined : ''}
        >
          <button
            aria-label="Cerrar menú"
            className="medieval-sidebar__close"
            onClick={() => setIsOpen(false)}
            ref={closeButtonRef}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>

          <div className="medieval-sidebar__ornament" aria-hidden="true">
            <span />
            <i>✦</i>
            <span />
          </div>

          <header className="medieval-sidebar__header">
            <span className="medieval-sidebar__eyebrow">Archivo de la maga</span>
            <h2>Crónicas del viaje</h2>
            <p>Memorias reunidas más allá del fin de la aventura.</p>
          </header>

          <nav aria-label="Secciones del grimorio" className="medieval-sidebar__nav">
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    className={({ isActive }) =>
                      `medieval-sidebar__link ${isActive && item.to === '/' ? 'is-active' : ''}`
                    }
                    onClick={() => setIsOpen(false)}
                    to={item.to}
                  >
                    <MenuIcon name={item.icon} />
                    <span>
                      <strong>{item.label}</strong>
                      <small>{item.detail}</small>
                    </span>
                    <b aria-hidden="true">›</b>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="medieval-sidebar__quote">
            <span aria-hidden="true">“</span>
            <p>La magia más hermosa es la que deja una historia detrás.</p>
          </div>

          <footer className="medieval-sidebar__footer">
            <span aria-hidden="true">ᚠ</span>
            <p>GRIMORIO · ERA DEL REY</p>
            <span aria-hidden="true">ᚱ</span>
          </footer>
        </div>
      </aside>
    </>
  )
}

export default MedievalSidebar
