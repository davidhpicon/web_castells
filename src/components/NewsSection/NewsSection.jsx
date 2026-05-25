import { Link } from 'react-router-dom'
import { useInView } from '../../hooks/useInView'
import styles from './NewsSection.module.css'

export const newsData = [
  {
    id: 1,
    date: "27 d'abril de 2026",
    title: 'Seguim treballant, seguim sumant!',
    excerpt: "Aquest passat diumenge 26 d'abril, vam actuar en el marc de les Festes de Primavera de L'Hospitalet de Llobregat, on hi vam fer: 2Pde4, 3de7, 4de6a, 7de6, 2Pde4. Novament, tot descarregat a la primera.",
    url: 'https://castellersdeviladecans.blogspot.com/2026/04/seguim-treballant-seguim-sumant.html',
    photo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKAZxdDfb31_kRC-TeP2f3MqffXjwit462aqnK_1oUJPtJ2KfCt5xZUrBDdF-0SfDluiq5arwCo_VF3SrMNhwCBZR8951UA9VyrD_T0m1niIaXNuax1SvC8d5s1FtfNbAH0nht50Ym2EWdOUFoZzMOMmMufxOUxIXkhcC3gl-_Go6aPSO-KO2lxd5u7aU5/w640-h400-c/3de7%20hospitalet%20viladecans-01.jpeg',
  },
  {
    id: 2,
    date: "24 d'abril de 2026",
    title: 'Per Sant Jordi, roses, llibres i castells!',
    excerpt: "Aquest passat dijous 23 d'abril, vam actuar a la Diada de Sant Jordi de Viladecans, on hi vam fer: Pde4, 4de6an, 3de6(id), 4de6, Pde4. En un dels dies més bonics de l'any, la Plaça de l'Església es va omplir de castellers i públic.",
    url: 'https://castellersdeviladecans.blogspot.com/2026/04/per-sant-jordi-roses-llibres-i-castells.html',
    photo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKz676p4Pno942iF4CaWEtIEp2rya44Wa65wxUeHsFcqeotx6ZgiuClCxZdCP3Mc5vBfSfYlNYzLw-Ua30txsJPNbcahXxkUF0OMJmR8-fJJrTzW_k5eX7xVNt0qMLC4s_h2Baa7MQD75QQpgkzaT1l6sXNHZPO2guyJn1opU8_JOLeguTStefQplVn_BN/w640-h400-c/16%20-%204de6a%20-%20Sant%20Jordi%20-%2023.04.26.jpeg',
  },
  {
    id: 3,
    date: "22 d'abril de 2026",
    title: 'Prèvia: Diada de Sant Jordi a Viladecans',
    excerpt: "Aquest proper dijous 23 d'abril és Sant Jordi, i Sant Jordi és el dia de les roses, dels llibres i també de fer castells! Com cada any ens podreu trobar a la Plaça de l'Església (C/Sant Joan) amb la colla al complet.",
    url: 'https://castellersdeviladecans.blogspot.com/2026/04/previa-diada-de-sant-jordi-viladecans.html',
    photo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZBdJvWrYC3FR_vmYNmQmPq-HCqtGSsbQG-5Fp8ByVS60t6FmYNIvBqyAjrFaWE87NU6-u8U3mnj8_mGFvzEd82Pf9nF6aLbW_Mwp7aPg32e5jBiG7Iw2YK2dq4Xpje77_WdcPUYf8YO9bGbzKenBr1n4YbtFwRKjDf_bHR4b76kFUhQL2V8C3AvE7TH35/w640-h400-c/IMG_20260422_094111.jpg',
  },
]

const stagger = ['stagger-1', 'stagger-2', 'stagger-3']

export default function NewsSection({ limit = 3 }) {
  const displayed = newsData.slice(0, limit)
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView]     = useInView({ threshold: 0.05 })

  return (
    <section className={`${styles.section} section-padding`}>
      <div className="container">
        <div
          ref={headerRef}
          className={`d-flex flex-column flex-sm-row align-items-start align-items-sm-end justify-content-between flex-wrap reveal ${headerInView ? 'is-visible' : ''} ${styles.header}`}
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
              <Link
                to={`/actualitat/${item.id}`}
                className={`${styles.card} reveal ${stagger[i]} ${gridInView ? 'is-visible' : ''} h-100`}
              >
                <div className={styles.cardImg}>
                  <img src={item.photo} alt={item.title} className={styles.cardImgPhoto} />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardDate}>{item.date}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardExcerpt}>{item.excerpt}</p>
                  <span className={styles.readMore}>Llegir més →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
