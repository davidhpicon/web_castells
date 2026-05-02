import styles from './Page.module.css'

const events = [
  { day: '03', month: 'Maig', title: 'Assaig General', location: 'Local d\'assaig, Viladecans', type: 'Assaig' },
  { day: '10', month: 'Maig', title: 'Diada de la Mare de Déu de Viladecans', location: 'Plaça de la Vila, Viladecans', type: 'Actuació' },
  { day: '17', month: 'Maig', title: 'Actuació a Sant Boi de Llobregat', location: 'Sant Boi de Llobregat', type: 'Actuació' },
  { day: '24', month: 'Maig', title: 'Trobada castellera del Baix Llobregat', location: 'Cornellà de Llobregat', type: 'Trobada' },
  { day: '07', month: 'Juny', title: 'Diada de Sant Joan', location: 'Viladecans', type: 'Actuació' },
  { day: '21', month: 'Juny', title: 'Festa Major de Castelldefels', location: 'Castelldefels', type: 'Actuació' },
  { day: '05', month: 'Jul', title: 'Festa Major de Gava', location: 'Gavà', type: 'Actuació' },
  { day: '25', month: 'Jul', title: 'Festa Major de Viladecans', location: 'Viladecans', type: 'Festa Major' },
  { day: '06', month: 'Set', title: 'Concurs de Castells de Tarragona', location: 'Tarragona', type: 'Concurs' },
  { day: '27', month: 'Set', title: 'La Mercè – Barcelona', location: 'Barcelona', type: 'Actuació' },
]

const typeColors = {
  Assaig: '#FF9800',
  Actuació: '#76FF03',
  Trobada: '#00BCD4',
  'Festa Major': '#AB47BC',
  Concurs: '#EF5350',
}

export default function Calendari() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1><span>Calendari</span></h1>
          <p>Totes les actuacions, assajos i esdeveniments de la temporada 2026.</p>
        </div>
      </div>

      <section className={`${styles.section} section-padding`}>
        <div className="container">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40, alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Llegenda:</span>
            {Object.entries(typeColors).map(([type, color]) => (
              <span key={type} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--text-mid)' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, display: 'inline-block' }} />
                {type}
              </span>
            ))}
          </div>

          <div className={styles.calendarList}>
            {events.map((ev) => (
              <div key={`${ev.day}-${ev.month}`} className={styles.calendarItem}>
                <div className={styles.calDate}>
                  <span className={styles.calDay}>{ev.day}</span>
                  <span className={styles.calMonth}>{ev.month}</span>
                </div>
                <div className={styles.calBody}>
                  <div className={styles.calTitle}>{ev.title}</div>
                  <div className={styles.calLocation}>📍 {ev.location}</div>
                  <span
                    className={styles.calType}
                    style={{
                      background: `${typeColors[ev.type] ?? '#76FF03'}22`,
                      color: typeColors[ev.type] ?? 'var(--green-dark)',
                    }}
                  >
                    {ev.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
