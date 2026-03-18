const links = [
  { href: '/accueil', label: 'Accueil' },
  { href: '/chambres', label: 'Chambres' },
  { href: '/evenemets', label: 'Evenemets' },
  { href: '/services', label: 'Services' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
  { href: '/reservation', label: 'Reservation' },
]

function Navbar() {
  return (
    <header>
      <nav>
        <ul className="flex gap-4 p-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar