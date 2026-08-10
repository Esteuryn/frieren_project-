import { journeyStops } from '../data/journey'

function JourneySection() {
  return (
    <section className="journey section-shell" id="viaje">
      <div className="section-heading">
        <div>
          <h2>El viaje</h2>
          <p>De sur a norte. Diez años. Cuatro paradas que importaron.</p>
        </div>
        <span>Ruta hacia Aureole</span>
      </div>
      <div className="journey__rail">
        {journeyStops.map((stop) => (
          <article className="journey-stop" key={stop.year}>
            <span className="journey-stop__dot" />
            <p className="journey-stop__meta">{stop.year} · {stop.tag}</p>
            <h3>{stop.place}</h3>
            <p>{stop.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default JourneySection
