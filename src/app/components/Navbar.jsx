const navLinks = [
  { href: '#historia', label: 'Historia' },
  { href: '#personajes', label: 'Personajes' },
  { href: '#viaje', label: 'Viaje' },
  { href: '#magia', label: 'Magia' },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav aria-label="Navegación principal" className="site-header__nav">
        <a className="site-header__brand" href="/">Frieren</a>
        <div className="site-header__links">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </div>
        <a className="site-header__language" href="#personajes">JP / ES</a>
      </nav>
    </header>
  )
}

export default Navbar
