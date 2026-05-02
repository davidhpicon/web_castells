import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

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

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'FB' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'YT' },
  { label: 'Twitter/X', href: 'https://twitter.com', icon: 'X' },
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
