import { Link } from 'react-router-dom'
import { useInView } from '../../hooks/useInView'
import styles from './CTACards.module.css'

const cards = [
  {
    icon: '🏛️',
    title: 'La nostra història',
    desc: 'Descobreix qui som, d\'on venim i tot el que hem aconseguit al llarg de més de 30 anys de tradició castellera a Viladecans.',
    link: '/la-colla',
    cta: 'Coneix la colla',
    accent: false,
  },
  {
    icon: '🤝',
    title: 'Vine a fer castells',
    desc: 'No cal experiència prèvia. Tens entre 4 i 99 anys? Llavors pots ser casteller. Vine als assajos i forma part de la família.',
    link: '/vine-a-fer-castells',
    cta: 'Uneix-te ara',
    accent: true,
  },
  {
    icon: '📅',
    title: 'Contracta\'ns',
    desc: 'Busques un espectacle únic per a la teva festa major, acte cultural o empresa? Oferim exhibicions i tallers de castells.',
    link: '/contacte',
    cta: 'Sol·licitar informació',
    accent: false,
  },
]

const stagger = ['stagger-1', 'stagger-2', 'stagger-3']

export default function CTACards() {
  const [gridRef, inView] = useInView({ threshold: 0.1 })

  return (
    <section className={styles.section}>
      <div className="container">
        <div ref={gridRef} className="row g-4">
          {cards.map((card, i) => (
            <div key={card.title} className="col-12 col-md-4">
              <Link
                to={card.link}
                className={`${styles.card} ${card.accent ? styles.accent : ''} reveal ${stagger[i]} ${inView ? 'is-visible' : ''} h-100`}
              >
                <span className={styles.icon} aria-hidden="true">{card.icon}</span>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.desc}>{card.desc}</p>
                <span className={styles.cta}>
                  {card.cta}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
