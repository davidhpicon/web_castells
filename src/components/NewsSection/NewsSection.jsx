import { Link } from 'react-router-dom'
import { useInView } from '../../hooks/useInView'
import styles from './NewsSection.module.css'

export const newsData = [
  { id: 1, date: '27 Abril 2026', category: 'Actuació',  title: 'Seguim treballant, seguim sumant!', excerpt: 'Un altre assaig productiu on hem continuat polint les construccions de cara a la propera diada. L\'ambient és excepcional i els castellers estan en gran forma.' },
  { id: 2, date: '24 Abril 2026', category: 'Cultura',   title: 'Per Sant Jordi, roses, llibres i castells!', excerpt: 'Vam celebrar Sant Jordi amb una exhibició al centre de Viladecans. Moltes gràcies a tothom qui va venir a animar-nos i fer-nos costat.' },
  { id: 3, date: '20 Abril 2026', category: 'Assaig',    title: 'Un inici de somni!', excerpt: 'La nova temporada ha arrencat amb molt bon peu. Hem recuperat alguns castellers i hem donat la benvinguda a nous membres que s\'incorporen amb moltes ganes.' },
  { id: 4, date: '15 Abril 2026', category: 'Agenda',    title: 'Prèvia: Diada del Guant a Viladecans', excerpt: 'Aquest cap de setmana celebrem la nostra Diada del Guant. Serà una gran festa castellera que no et pots perdre. T\'esperem!' },
  { id: 5, date: '10 Abril 2026', category: 'Colla',     title: 'Nova junta, nous reptes', excerpt: 'La colla ha renovat part de la seva junta directiva amb l\'objectiu d\'afrontar nous reptes i continuar creixent com a entitat castellera de referència al Baix Llobregat.' },
  { id: 6, date: '3 Abril 2026',  category: 'Actuació',  title: 'Gran actuació a la Diada de Sant Jordi a Viladecans', excerpt: 'Vam tornar a demostrar el nostre nivell en una actuació que va emocionar al públic assistent. Els tres de vuit han tornat amb força aquest 2026.' },
]

const categoryColors = {
  Actuació: '#76FF03', Cultura: '#00BCD4', Assaig: '#FF9800', Agenda: '#AB47BC', Colla: '#EF5350',
}
const categoryIcons = {
  Actuació: '🏆', Cultura: '🌹', Assaig: '💪', Agenda: '📅', Colla: '👥',
}
const stagger = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-1', 'stagger-2', 'stagger-3']

export default function NewsSection({ limit = 3 }) {
  const displayed = newsData.slice(0, limit)
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView]     = useInView({ threshold: 0.05 })

  return (
    <section className={`${styles.section} section-padding`}>
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} reveal ${headerInView ? 'is-visible' : ''}`}
        >
          <div>
            <span className="tag">Actualitat</span>
            <h2 className="section-title">Les últimes notícies</h2>
            <p className="section-subtitle">Segueix tot el que passa a la colla: actuacions, assajos, esdeveniments i molt més.</p>
          </div>
          <Link to="/actualitat" className={`btn btn-dark ${styles.allBtn}`}>
            Totes les notícies
          </Link>
        </div>

        <div ref={gridRef} className="row g-4">
          {displayed.map((item, i) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <article className={`${styles.card} reveal ${stagger[i]} ${gridInView ? 'is-visible' : ''} h-100`}>
                <div
                  className={styles.cardImg}
                  style={{ background: `linear-gradient(135deg, var(--bg-dark) 0%, ${categoryColors[item.category] ?? '#76FF03'}22 100%)` }}
                  aria-hidden="true"
                >
                  <span className={styles.cardImgIcon}>{categoryIcons[item.category]}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory} style={{ color: categoryColors[item.category] }}>
                      {item.category}
                    </span>
                    <span className={styles.cardDate}>{item.date}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardExcerpt}>{item.excerpt}</p>
                  <span className={styles.readMore}>Llegir més →</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
