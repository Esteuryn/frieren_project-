function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div aria-hidden="true" className="hero__landscape">
        <img alt="" className="hero__artwork" src="/HeroImag.jpg" />
        <span className="hero__mist" />
      </div>

      <div className="hero__content">
        <p className="eyebrow">Un archivo no oficial</p>
        <h1>
          Ella tiene todo el tiempo <em>del mundo.</em>
        </h1>
        <p className="hero__copy">
          El Rey Demonio cayó. El grupo regresó a casa. Este es el registro de los
          cincuenta años que Frieren dejó pasar y del viaje que emprendió después.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#viaje">Leer la historia</a>
          <a className="button button--ghost" href="#personajes">
            El grupo <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
