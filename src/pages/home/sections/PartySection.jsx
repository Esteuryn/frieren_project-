import { party } from '../data/party'

function PartySection() {
  return (
    <section className="party-section" id="personajes">
      <div className="section-shell">
        <div className="section-heading">
          <h2>El grupo</h2>
          <span>04 perfiles</span>
        </div>
        <div className="party-grid">
          {party.map((person, index) => (
            <article className="party-card" key={person.name}>
              <div className={`party-card__portrait party-card__portrait--${index + 1}`}>
                <span>{person.glyph}</span>
                <small>Retrato · {person.name}</small>
              </div>
              <h3>{person.name}</h3>
              <p className="party-card__role">{person.role}</p>
              <p>{person.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartySection
