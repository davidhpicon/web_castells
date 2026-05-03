import { Link } from 'react-router-dom'
import rrss from '../../rrss.json'
import styles from './Footer.module.css'

const svgIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>
  ),
}

const socials = Object.entries(rrss.social_media).map(([key, href]) => ({
  key,
  href,
  label: key.charAt(0).toUpperCase() + key.slice(1),
  icon: svgIcons[key],
}))

const navGroups = [
  {
    title: 'La Colla',
    links: [
      { to: '/la-colla', label: 'Qui som?' },
      { to: '/la-colla', label: 'Història' },
      { to: '/la-colla', label: 'Junta directiva' },
      { to: '/la-colla', label: 'Resultats' },
    ],
  },
  {
    title: 'Participa',
    links: [
      { to: '/vine-a-fer-castells', label: 'Vine a fer castells' },
      { to: '/vine-a-fer-castells', label: 'Assajos' },
      { to: '/calendari', label: 'Calendari' },
      { to: '/contacte', label: 'Contacte' },
    ],
  },
  {
    title: 'Actualitat',
    links: [
      { to: '/actualitat', label: 'Notícies' },
      { to: '/actualitat', label: 'Actuacions' },
      { to: '/actualitat', label: 'Agenda' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`row gy-5 ${styles.top}`}>
          <div className="col-12 col-lg-4">
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span className={styles.logoIcon}>CdV</span>
                <div>
                  <span className={styles.logoName}>Castellers de Viladecans</span>
                  <span className={styles.logoTagline}>Tradició · Esforç · Germanor</span>
                </div>
              </div>
              <p className={styles.brandDesc}>
                Som la colla castellera de Viladecans, al Baix Llobregat.
                Des de fa més de 30 anys construïm castells i comunitat.
              </p>
              <div className={styles.socials}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className={styles.socialBtn}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navGroups.map((group) => (
            <div key={group.title} className="col-6 col-sm-4 col-lg-2 offset-lg-0">
              <div className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{group.title}</h4>
                <ul>
                  {group.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className={styles.footerLink}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <span>Viladecans, Baix Llobregat, Catalunya</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉️</span>
            <a href="mailto:info@castellersdeviladecans.cat" className={styles.footerLink}>
              info@castellersdeviladecans.cat
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Castellers de Viladecans. Tots els drets reservats.</p>
          <p className={styles.bottomRight}>Construïm castells, construïm comunitat. 💚</p>
        </div>
      </div>
    </footer>
  )
}
