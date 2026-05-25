import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/logo-transparent.png'

const links = [
  { to: '/', label: 'Inici' },
  {
    to: '/la-colla',
    label: 'La Colla',
    dropdown: [
      { to: '/la-colla/historia',         label: 'Història' },
      { to: '/la-colla/junta-directiva',  label: 'Junta Directiva' },
      { to: '/la-colla/junta-tecnica',    label: 'Junta Tècnica' },
      { to: '/la-colla/sanitaris',        label: 'Sanitaris' },
      { to: '/la-colla/equitat',          label: 'Equitat' },
      { to: '/la-colla/grallers',         label: 'Grallers' },
    ],
  },
  { to: '/vine-a-fer-castells', label: 'Vine a Fer Castells' },
  { to: '/actualitat', label: 'Actualitat' },
  { to: '/calendari', label: 'Calendari' },
]

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [openDropdown,  setOpenDropdown]  = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    if (!menuOpen) setOpenDropdown(null)
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeAll = () => { setMenuOpen(false); setOpenDropdown(null) }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} onClick={closeAll}>
            <img src={logo} alt="Castellers de Viladecans" className={styles.logoImg} />
          </Link>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            {links.map(({ to, label, dropdown }) =>
              dropdown ? (
                <div
                  key={to}
                  className={styles.dropdownWrapper}
                  onMouseEnter={() => !menuOpen && setOpenDropdown(to)}
                  onMouseLeave={() => !menuOpen && setOpenDropdown(null)}
                >
                  <div className={styles.dropdownTrigger}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                      }
                      onClick={closeAll}
                    >
                      {label}
                    </NavLink>
                    <button
                      className={`${styles.dropdownArrow} ${openDropdown === to ? styles.dropdownArrowOpen : ''}`}
                      onClick={(e) => { e.stopPropagation(); setOpenDropdown(o => o === to ? null : to) }}
                      aria-label="Desplegar submenu"
                    >
                      <ChevronDown />
                    </button>
                  </div>
                  {openDropdown === to && (
                    <div className={styles.dropdown}>
                      {dropdown.map(sub => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className={styles.dropdownItem}
                          onClick={closeAll}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                  onClick={closeAll}
                >
                  {label}
                </NavLink>
              )
            )}
            <Link
              to="/contacte"
              className={`btn btn-primary ${styles.ctaBtn}`}
              onClick={closeAll}
            >
              Contacte
            </Link>
          </nav>

          <button
            className={`d-flex d-lg-none ${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
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
        <div className={styles.overlay} onClick={closeAll} />
      )}
    </header>
  )
}
