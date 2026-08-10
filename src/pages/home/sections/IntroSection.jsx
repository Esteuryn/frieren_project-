function IntroSection() {
  return (
    <section className="intro section-shell">
      <h2>
        Para una elfa, diez años de viaje son un recado. Para quienes conoció,
        fueron toda una vida.
      </h2>
      <div className="intro__copy">
        <span className="gold-rule" />
        <p>
          La historia comienza donde suelen terminar las demás: en el desfile de la
          victoria. Frieren observa a sus compañeros envejecer a la velocidad del
          clima y entonces decide que le habría gustado conocerlos mejor.
        </p>
        <p>
          Lo que sigue no es tanto una misión como una larga disculpa: caminar hacia
          el norte, recoger hechizos que nadie necesita y rescatar memorias que casi
          dejó escapar.
        </p>
        <a href="#viaje">Sinopsis completa <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}

export default IntroSection
