import { Link } from 'react-router-dom'
import { useInView } from '../../hooks/useInView'
import styles from './JoinSection.module.css'

const steps = [
  { num: '01', title: 'Vine a un assaig', desc: 'Els assajos es fan els dimecres i divendres al vespre. Porta roba còmoda i ganes de passar-t\'ho bé.' },
  { num: '02', title: 'Coneix la colla', desc: 'T\'acollirem com un membre més des del primer dia. Coneixeràs la tècnica, els companys i l\'ambient únic dels castells.' },
  { num: '03', title: 'Fes el teu primer castell', desc: 'En poques setmanes ja podràs participar en les construccions. No cal experiència prèvia, només ganes!' },
]

export default function JoinSection() {
  const [leftRef, leftInView]   = useInView()
  const [rightRef, rightInView] = useInView({ rootMargin: '0px 0px -40px 0px' })

  return (
    <section className={`${styles.section} section-padding`}>
      <div className="container">
        <div className={styles.inner}>
          <div
            ref={leftRef}
            className={`${styles.left} reveal-left ${leftInView ? 'is-visible' : ''}`}
          >
            <span className="tag">Uneix-te</span>
            <h2 className={styles.title}>
              Vine a formar<br />
              part de la <span className={styles.highlight}>família</span>
            </h2>
            <p className={styles.subtitle}>
              No importa l'edat ni l'experiència. Als Castellers de Viladecans
              t'esperem amb els braços oberts. Junts, construïm molt més que castells.
            </p>
            <Link to="/vine-a-fer-castells" className="btn btn-primary">
              Saber-ne més
            </Link>
          </div>

          <div ref={rightRef} className={styles.right}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`${styles.step} reveal ${`stagger-${i + 1}`} ${rightInView ? 'is-visible' : ''}`}
              >
                <span className={styles.stepNum}>{step.num}</span>
                <div>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
