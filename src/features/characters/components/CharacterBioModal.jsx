import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'

function CharacterBioModal({ character, index, nextName, onClose, onNext, onPrevious, previousName, total }) {
  const titleId = useId()
  const descriptionId = useId()
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    previousFocusRef.current = document.activeElement
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      previousFocusRef.current?.focus()
    }
  }, [onClose, onNext, onPrevious])

  const number = String(index + 1).padStart(2, '0')

  return createPortal(
    <div className="bio-modal" role="presentation">
      <button className="bio-modal__backdrop" aria-label="Cerrar biografía" onClick={onClose} type="button" />
      <section
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        aria-modal="true"
        className="bio-modal__dialog"
        role="dialog"
      >
        <div className="bio-modal__gold-line" />
        <button
          aria-label={`Cerrar biografía de ${character.name}`}
          className="bio-modal__close"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          ×
        </button>

        <div className="bio-modal__main">
          <header className={`bio-modal__portrait bio-modal__portrait--${character.id}`}>
            <span aria-hidden="true" className="bio-modal__glyph">{character.glyph}</span>
            <div className="bio-modal__portrait-shade" />
            <div className="bio-modal__identity">
              <p>Ficha {number}</p>
              <h2 id={titleId}>{character.name}</h2>
              <span>{character.role}</span>
            </div>
          </header>

          <div className="bio-modal__content" id={descriptionId}>
            <div className="bio-modal__ornament" aria-hidden="true"><span />✦<span /></div>
            <blockquote>“{character.quote}”</blockquote>

            <dl className="bio-modal__facts">
              {character.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <h3>Semblanza</h3>
            {character.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <h3 className="bio-modal__moments-heading">Momentos</h3>
            <ol className="bio-modal__timeline">
              {character.moments.map((moment) => (
                <li key={`${moment.year}-${moment.title}`}>
                  <div className="bio-modal__timeline-mark" aria-hidden="true"><span /><i /></div>
                  <div>
                    <time>{moment.year}</time>
                    <h4>{moment.title}</h4>
                    <p>{moment.note}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3>{character.tagLabel}</h3>
            <ul className="bio-modal__tags">
              {character.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </div>

        <footer className="bio-modal__footer">
          <button onClick={onPrevious} type="button">
            <small>‹ Anterior</small>
            <span>{previousName}</span>
          </button>
          <p aria-live="polite"><i>✦</i> Archivo · {number} / {String(total).padStart(2, '0')} <i>✦</i></p>
          <button className="bio-modal__next" onClick={onNext} type="button">
            <small>Siguiente ›</small>
            <span>{nextName}</span>
          </button>
        </footer>
      </section>
    </div>,
    document.body,
  )
}

export default CharacterBioModal
