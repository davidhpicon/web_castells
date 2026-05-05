import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import styles from './Page.module.css'
import newsStyles from '../components/NewsSection/NewsSection.module.css'

export default function Actualitat() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1><span>Actualitat</span></h1>
          <p>Totes les notícies, actuacions i novetats de la colla.</p>
        </div>
      </div>

      <section className={`${styles.section} section-padding`}>
        <div className="container">
          <div className="row g-4">
            {articles.map((article, i) => (
              <div key={article.id} className="col-12 col-md-6 col-lg-4">
                <Link
                  to={`/actualitat/${article.id}`}
                  className={`${newsStyles.card} h-100`}
                >
                  <div className={newsStyles.cardImg}>
                    <img src={article.photo} alt={article.title} className={newsStyles.cardImgPhoto} />
                  </div>
                  <div className={newsStyles.cardBody}>
                    <span className={newsStyles.cardDate}>{article.date}</span>
                    <h3 className={newsStyles.cardTitle}>{article.title}</h3>
                    <span className={newsStyles.readMore}>Llegir més →</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
