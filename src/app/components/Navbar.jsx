const navLinks = [
  { href: '#historia', label: 'Historia' },
  { href: '#personajes', label: 'Personajes' },
  { href: '#viaje', label: 'Viaje' },
  { href: '#magia', label: 'Magia' },
]

const bottomLinks = [
  { href: '#historia', label: 'Inicio', glyph: '◆' },
  { href: '#personajes', label: 'Grupo', glyph: '◇' },
  { href: '#viaje', label: 'Viaje', glyph: '◇' },
  { href: '#magia', label: 'Magia', glyph: '◇' },
]

function Navbar() {
  return (
    <>
      <header className="site-header">
        <nav aria-label="Navegación principal" className="site-header__nav">
          <a className="site-header__brand" href="/">Frieren</a>
          <div className="site-header__links">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>{link.label}</a>
            ))}
          </div>
          <div className="site-header__mobile-actions">
            <span className="site-header__language">JP / ES</span>
          </div>
        </nav>
      </header>

      <nav aria-label="Navegación móvil inferior" className="mobile-bottom-nav">
        {bottomLinks.map((link) => (
          <a href={link.href} key={link.href}>
            <span aria-hidden="true">{link.glyph}</span><small>{link.label}</small>
          </a>
        ))}
      </nav>
    </>
  )
}

export default Navbar
