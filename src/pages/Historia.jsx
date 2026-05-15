import styles from './Page.module.css'

const milestones = [
  { year: '2012', event: 'Fundació de la colla a Viladecans.' },
  { year: '2013', event: 'Bateig.' },
  { year: '2017', event: 'bla bla bla' },
  { year: '2025', event: 'Ens convertim en colla de 7.' },
]

export default function Historia() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>La nostra <span>Història</span></h1>
          <p>Més d'una dècada construint castells i comunitat a Viladecans.</p>
        </div>
      </div>

      <section className={`${styles.sectionAlt} section-padding`}>
        <div className="container">
          <div className={styles.centeredHeader}>
            <span className="tag">Història</span>
            <h2 className="section-title">Els nostres fites</h2>
          </div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineCard}>
                  <span className={styles.timelineYear}>{m.year}</span>
                  <p className={styles.timelineEvent}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
