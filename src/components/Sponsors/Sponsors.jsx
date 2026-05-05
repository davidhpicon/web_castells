import styles from './Sponsors.module.css'

const sponsors = [
  {
    name: 'Viladecans',
    svg: (
      <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Viladecans">
        <circle cx="12" cy="24" r="4" fill="#000"/>
        <circle cx="24" cy="12" r="4" fill="#000"/>
        <circle cx="24" cy="36" r="4" fill="#000"/>
        <path d="M30 24 Q55 8 80 24 Q55 40 30 24Z" stroke="#000" strokeWidth="2.5" fill="none"/>
        <text x="85" y="29" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" fill="#000">Viladecans</text>
      </svg>
    ),
  },
  {
    name: 'Generalitat de Catalunya – Departament de Cultura',
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Generalitat de Catalunya - Departament de Cultura">
        <rect x="2" y="4" width="36" height="40" rx="2" stroke="#000" strokeWidth="2" fill="none"/>
        <rect x="8"  y="4" width="6" height="40" fill="#000" opacity="0.15"/>
        <rect x="17" y="4" width="6" height="40" fill="#000" opacity="0.15"/>
        <rect x="26" y="4" width="6" height="40" fill="#000" opacity="0.15"/>
        <text x="46" y="18" fontFamily="Arial, sans-serif" fontSize="8.5" fontWeight="400" fill="#000">Generalitat</text>
        <text x="46" y="29" fontFamily="Arial, sans-serif" fontSize="8.5" fontWeight="400" fill="#000">de Catalunya</text>
        <text x="46" y="39" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="700" fill="#000">Departament de Cultura</text>
      </svg>
    ),
  },
  {
    name: 'Estrella Damm',
    svg: (
      <svg viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Estrella Damm">
        <polygon points="24,4 28,17 42,17 31,25 35,38 24,30 13,38 17,25 6,17 20,17" fill="#000"/>
        <text x="50" y="22" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="900" fill="#000" letterSpacing="1">ESTRELLA</text>
        <text x="50" y="36" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="900" fill="#000" letterSpacing="1">DAMM</text>
      </svg>
    ),
  },
  {
    name: 'SOREA',
    svg: (
      <svg viewBox="0 0 90 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SOREA">
        <polygon points="6,8 26,24 6,40" fill="#000"/>
        <text x="34" y="30" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="900" fill="#000" letterSpacing="1">SOREA</text>
      </svg>
    ),
  },
  {
    name: 'Barrera Fitness Center',
    svg: (
      <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Barrera Fitness Center">
        <circle cx="40" cy="24" r="22" stroke="#000" strokeWidth="2.5" fill="none"/>
        <text x="40" y="22" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle" letterSpacing="-0.5">bfc</text>
        <text x="40" y="35" fontFamily="Arial, sans-serif" fontSize="5.5" fontWeight="400" fill="#000" textAnchor="middle" letterSpacing="0.3">BARRERA FITNESS CENTER</text>
      </svg>
    ),
  },
  {
    name: 'IUS GEMAP Abogados Asesores',
    svg: (
      <svg viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="IUS GEMAP Abogados Asesores">
        <text x="4" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fill="#000" letterSpacing="-0.5">IUS</text>
        <line x1="52" y1="8" x2="52" y2="40" stroke="#000" strokeWidth="2.5"/>
        <text x="57" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fill="#000" letterSpacing="-0.5">GEMAP</text>
        <text x="4" y="41" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="400" fill="#000" letterSpacing="0.2">Abogados · Asesores</text>
      </svg>
    ),
  },
]

export default function Sponsors() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>Patrocinadors i col·laboradors</p>
        <div className={styles.grid}>
          {sponsors.map((s) => (
            <div key={s.name} className={styles.logo} title={s.name}>
              {s.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
