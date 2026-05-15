import { useInView } from '../../hooks/useInView'
import styles from './Leadership.module.css'

const staggerClasses = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-1', 'stagger-2', 'stagger-3', 'stagger-4']

export default function Leadership({ id, tag, title, subtitle, members }) {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView]     = useInView({ threshold: 0.1 })

  return (
    <section id={id} className={`${styles.section} section-padding`} style={{ scrollMarginTop: 'var(--navbar-height)' }}>
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal ${headerInView ? 'is-visible' : ''}`}
        >
          <span className="tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        <div ref={gridRef} className="row g-4 justify-content-center">
          {members.map((m, i) => (
            <div key={`${m.role}-${i}`} className="col-6 col-md-3">
              <div className={`${styles.card} reveal ${staggerClasses[i]} ${gridInView ? 'is-visible' : ''}`}>
                <div className={styles.avatar}>
                  <span>{m.initials}</span>
                </div>
                <span className={styles.role}>{m.role}</span>
                <span className={styles.name}>{m.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
