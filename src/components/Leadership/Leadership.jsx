import { useInView } from '../../hooks/useInView'
import styles from './Leadership.module.css'

const members = [
  { role: 'President/a', name: 'Nom Cognom', initials: 'NC' },
  { role: 'Cap de Colla', name: 'Nom Cognom', initials: 'NC' },
  { role: 'Secretari/a', name: 'Nom Cognom', initials: 'NC' },
  { role: 'Tresorer/a', name: 'Nom Cognom', initials: 'NC' },
]

const stagger = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4']

export default function Leadership() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView]     = useInView({ threshold: 0.1 })

  return (
    <section className={`${styles.section} section-padding`}>
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal ${headerInView ? 'is-visible' : ''}`}
        >
          <span className="tag">La Junta</span>
          <h2 className="section-title">Qui ens lidera</h2>
          <p className="section-subtitle">
            La nostra junta directiva i equip tècnic treballen dia a dia
            perquè la colla creixi i prosperi.
          </p>
        </div>

        <div ref={gridRef} className="row g-4 justify-content-center">
          {members.map((m, i) => (
            <div key={m.role} className="col-6 col-md-3">
              <div className={`${styles.card} reveal ${stagger[i]} ${gridInView ? 'is-visible' : ''}`}>
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
