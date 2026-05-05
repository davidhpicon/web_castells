import { useState } from 'react'
import pageStyles from './Page.module.css'
import styles from './Calendari.module.css'

const specificEvents = [
  { date: '2026-01-17', title: 'Festa Major d\'Hivern de Viladecans',           location: 'Viladecans',                      type: 'Actuació'   },
  { date: '2026-03-07', title: 'Centenari dels Nens del Vendrell',               location: 'El Vendrell',                     type: 'Actuació'   },
  { date: '2026-03-14', title: 'Diada de Sant Josep Oriol',                      location: 'Barcelona',                       type: 'Actuació'   },
  { date: '2026-04-12', title: 'Diada de Primavera a Viladecans',                location: 'Viladecans',                      type: 'Actuació'   },
  { date: '2026-04-23', title: 'Diada de Sant Jordi a Viladecans',               location: 'Plaça de l\'Església, Viladecans',type: 'Actuació'   },
  { date: '2026-04-26', title: 'Festes de Primavera de L\'Hospitalet',           location: 'L\'Hospitalet de Llobregat',      type: 'Actuació'   },
  { date: '2026-05-09', title: 'Vigílies de Sant Ponç',                          location: 'Sant Cugat del Vallès',           type: 'Actuació'   },
  { date: '2026-05-16', title: 'Mostra d\'Entitats de Viladecans',               location: 'Viladecans',                      type: 'Actuació'   },
  { date: '2026-05-17', title: 'Diada de Festa Major de Sant Boi',               location: 'Sant Boi de Llobregat',           type: 'Actuació'   },
  { date: '2026-05-24', title: 'Capvuitada a Sant Boi de Llobregat',             location: 'Sant Boi de Llobregat',           type: 'Trobada'    },
  { date: '2026-05-30', title: 'XXIIIè Aniversari dels Castellers d\'Esplugues', location: 'Esplugues de Llobregat',          type: 'Actuació'   },
  { date: '2026-06-06', title: 'Diada de Primavera de Cubelles',                 location: 'Cubelles',                        type: 'Actuació'   },
  { date: '2026-06-21', title: 'Diada de Sant Joan',                             location: 'Sant Adrià de Besòs',             type: 'Actuació'   },
  { date: '2026-06-23', title: 'Flama del Canigó a Viladecans',                  location: 'Viladecans',                      type: 'Actuació'   },
  { date: '2026-07-04', title: 'Festes del Barri de La Bolera',                  location: 'Caldes de Montbui',               type: 'Actuació'   },
  { date: '2026-07-11', title: 'XIVè Aniversari dels Castellers de Berga',       location: 'Berga',                           type: 'Actuació'   },
  { date: '2026-07-19', title: 'Diada de Festa Major de Llavaneres',             location: 'Sant Andreu de Llavaneres',       type: 'Actuació'   },
  { date: '2026-08-28', title: 'Diada d\'Estiu de Vilanova',                     location: 'Vilanova i la Geltrú',            type: 'Actuació'   },
  { date: '2026-08-30', title: 'Aplec de Sant Ramón',                            location: 'Viladecans',                      type: 'Actuació'   },
  { date: '2026-09-02', title: 'Assaig especial de Festa Major',                 location: 'Local d\'assaig, Viladecans',     type: 'Assaig'     },
  { date: '2026-09-04', title: 'Pregó de Festa Major de Viladecans',             location: 'Plaça de la Vila, Viladecans',    type: 'Festa Major'},
  { date: '2026-09-05', title: 'Diada de Festa Major de Viladecans',             location: 'Plaça de la Vila, Viladecans',    type: 'Festa Major'},
  { date: '2026-09-11', title: 'Acte institucional Diada Nacional de Catalunya', location: 'Viladecans',                      type: 'Actuació'   },
  { date: '2026-09-20', title: 'Vigília de Festa Major del Prat',                location: 'El Prat de Llobregat',            type: 'Actuació'   },
  { date: '2026-09-27', title: 'Concurs de Castells de Torredembarra',           location: 'Torredembarra',                   type: 'Concurs'    },
  { date: '2026-10-24', title: 'XXXª Trobada del Baix Llobregat',                location: 'Sant Feliu de Llobregat',         type: 'Trobada'    },
  { date: '2026-10-31', title: 'Castanyada Popular a Viladecans',                location: 'Viladecans',                      type: 'Actuació'   },
  { date: '2026-11-08', title: 'XLVIIª Diada dels Castellers de Terrassa',       location: 'Terrassa',                        type: 'Actuació'   },
  { date: '2026-11-15', title: 'Iª Diada dels Castellers de Sarrià',             location: 'Sarrià, Barcelona',               type: 'Actuació'   },
]

// No rehearsals during summer break
const SUMMER_START = new Date('2026-07-20')
const SUMMER_END   = new Date('2026-08-26')

const typeColors = {
  Assaig:        { bg: '#FF9800', text: '#000' },
  Actuació:      { bg: '#76FF03', text: '#000' },
  Trobada:       { bg: '#00BCD4', text: '#000' },
  'Festa Major': { bg: '#AB47BC', text: '#fff' },
  Concurs:       { bg: '#EF5350', text: '#fff' },
}

const CAT_DAYS   = ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg']
const CAT_MONTHS = ['Gener','Febrer','Març','Abril','Maig','Juny','Juliol','Agost','Setembre','Octubre','Novembre','Desembre']

function toStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
}

function buildGrid(year, month) {
  const firstDow = new Date(year, month, 1).getDay()       // 0=Sun
  const offset   = firstDow === 0 ? 6 : firstDow - 1       // shift so Mon=0
  const days = []
  for (let i = 0; i < 42; i++) {
    days.push(new Date(year, month, 1 - offset + i))
  }
  return days
}

function getDayType(date) {
  const str = toStr(date)
  const specific = specificEvents.find(e => e.date === str)
  if (specific) return specific
  const dow = date.getDay()   // 3=Wed, 5=Fri → assaig
  const inSummer = date >= SUMMER_START && date <= SUMMER_END
  if ((dow === 3 || dow === 5) && !inSummer) return { type: 'Assaig', title: 'Assaig' }
  return null
}

export default function Calendari() {
  const today = new Date()
  const [year,  setYear]  = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())

  const todayStr = toStr(today)
  const days     = buildGrid(year, month)

  const eventsThisMonth = specificEvents.filter(e => {
    const d = new Date(e.date)
    return d.getFullYear() === year && d.getMonth() === month
  })

  function prev() {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  function next() {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1><span>Calendari</span></h1>
          <p>Totes les actuacions, assajos i esdeveniments de la temporada 2026.</p>
        </div>
      </div>

      <section className={`${pageStyles.section} section-padding`}>
        <div className="container">

          {/* ── Calendar widget ── */}
          <div className={styles.widget}>

            {/* Header */}
            <div className={styles.header}>
              <button className={styles.navBtn} onClick={prev} aria-label="Mes anterior">‹</button>
              <h2 className={styles.monthTitle}>{CAT_MONTHS[month]} {year}</h2>
              <button className={styles.navBtn} onClick={next} aria-label="Mes següent">›</button>
            </div>

            {/* Day names */}
            <div className={styles.dayNames}>
              {CAT_DAYS.map(d => <div key={d} className={styles.dayName}>{d}</div>)}
            </div>

            {/* Grid */}
            <div className={styles.grid}>
              {days.map((date, i) => {
                const inMonth = date.getMonth() === month
                const str     = toStr(date)
                const isToday = str === todayStr
                const info    = inMonth ? getDayType(date) : null
                const colors  = info ? typeColors[info.type] : null

                return (
                  <div
                    key={i}
                    className={`${styles.cell} ${!inMonth ? styles.cellOther : ''} ${isToday ? styles.cellToday : ''}`}
                    style={inMonth && !isToday && colors ? { background: colors.bg } : {}}
                    title={info?.title ?? ''}
                  >
                    <span
                      className={styles.cellNum}
                      style={inMonth && !isToday && colors ? { color: colors.text } : {}}
                    >
                      {date.getDate()}
                    </span>
                    {inMonth && info?.title && (
                      <span
                        className={styles.cellLabel}
                        style={{ color: isToday ? 'var(--green-neon)' : colors.text }}
                      >
                        {info.title}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Legend ── */}
          <div className={styles.legend}>
            {Object.entries(typeColors).map(([type, { bg }]) => (
              <span key={type} className={styles.legendItem}>
                <span className={styles.legendSwatch} style={{ background: bg }} />
                {type}
              </span>
            ))}
          </div>

          {/* ── Events list for current month ── */}
          {eventsThisMonth.length > 0 && (
            <div className={styles.eventSection}>
              <h3 className={styles.eventSectionTitle}>Actuacions del mes</h3>
              <div className={pageStyles.calendarList}>
                {eventsThisMonth.map(ev => {
                  const d = new Date(ev.date)
                  const c = typeColors[ev.type]
                  return (
                    <div key={ev.date} className={pageStyles.calendarItem}>
                      <div className={pageStyles.calDate} style={{ background: c.bg }}>
                        <span className={pageStyles.calDay}   style={{ color: c.text }}>{String(d.getDate()).padStart(2,'0')}</span>
                        <span className={pageStyles.calMonth} style={{ color: c.text === '#000' ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.65)' }}>
                          {CAT_MONTHS[d.getMonth()].slice(0,3).toUpperCase()}
                        </span>
                      </div>
                      <div className={pageStyles.calBody}>
                        <div className={pageStyles.calTitle}>{ev.title}</div>
                        <div className={pageStyles.calLocation}>📍 {ev.location}</div>
                        <span className={pageStyles.calType} style={{ background: `${c.bg}25`, color: c.bg === '#76FF03' ? 'var(--green-dark)' : c.bg }}>
                          {ev.type}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  )
}
