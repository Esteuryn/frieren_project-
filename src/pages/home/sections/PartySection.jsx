import { useCallback, useState } from 'react'
import CharacterBioModal from '../../../features/characters/components/CharacterBioModal'
import { party } from '../data/party'

function PartySection() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const closeBiography = useCallback(() => setSelectedIndex(null), [])
  const showPrevious = useCallback(() => {
    setSelectedIndex((current) => (current - 1 + party.length) % party.length)
  }, [])
  const showNext = useCallback(() => {
    setSelectedIndex((current) => (current + 1) % party.length)
  }, [])

  return (
    <section className="party-section" id="personajes">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <h2>Personajes</h2>
            <p>Héroes, maestros y magos, tal como los recuerda el archivo.</p>
          </div>
          <span>{String(party.length).padStart(2, '0')} perfiles · Toca para abrir</span>
        </div>
        <div className="party-grid">
          {party.map((person, index) => (
            <article className="party-card" key={person.id}>
              <button
                aria-haspopup="dialog"
                className="party-card__trigger"
                onClick={() => setSelectedIndex(index)}
                type="button"
              >
                <div className={`party-card__portrait party-card__portrait--${person.id}`}>
                  {person.cardImage ? (
                    <img
                      alt={`Retrato de ${person.name}`}
                      className="party-card__portrait-image"
                      src={person.cardImage}
                    />
                  ) : (
                    <span aria-hidden="true">{person.glyph}</span>
                  )}
                  <small>Retrato · {person.name}</small>
                  <b>{String(index + 1).padStart(2, '0')}</b>
                </div>
                <h3>{person.name}</h3>
                <p className="party-card__role">{person.role}</p>
                <p>{person.description}</p>
                <span className="party-card__cta">Ver biografía <i>›</i></span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <CharacterBioModal
          character={party[selectedIndex]}
          index={selectedIndex}
          nextName={party[(selectedIndex + 1) % party.length].name}
          onClose={closeBiography}
          onNext={showNext}
          onPrevious={showPrevious}
          previousName={party[(selectedIndex - 1 + party.length) % party.length].name}
          total={party.length}
        />
      )}
    </section>
  )
}

export default PartySection
