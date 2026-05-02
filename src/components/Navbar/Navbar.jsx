import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Inici' },
  { to: '/la-colla', label: 'La Colla' },
  { to: '/vine-a-fer-castells', label: 'Vine a Fer Castells' },
  { to: '/actualitat', label: 'Actualitat' },
  { to: '/calendari', label: 'Calendari' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <span className={styles.logoIcon}>CdV</span>
            <span className={styles.logoText}>
              Castellers<br />
              <strong>de Viladecans</strong>
            </span>
          </Link>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contacte"
              className={`btn btn-primary ${styles.ctaBtn}`}
              onClick={() => setMenuOpen(false)}
            >
              Contacte
            </Link>
          </nav>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            aria-label="Obrir menú"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </header>
  )
}
