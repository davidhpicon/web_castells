import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'
import styles from './ArticleDetail.module.css'

export default function ArticleDetail() {
  const { id } = useParams()
  const article = articles.find(a => a.id === Number(id))

  if (!article) {
    return (
      <div className={styles.notFound}>
        <p>Article no trobat.</p>
        <Link to="/actualitat" className="btn btn-primary">Tornar a Actualitat</Link>
      </div>
    )
  }

  return (
    <>
      <div className={styles.hero} style={{ backgroundImage: `url(${article.photo})` }}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroContent}>
            <Link to="/actualitat" className={styles.back}>← Totes les notícies</Link>
            <h1 className={styles.title}>{article.title}</h1>
            <span className={styles.date}>{article.date}</span>
          </div>
        </div>
      </div>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.prose} dangerouslySetInnerHTML={{ __html: article.content }} />
          <div className={styles.footer}>
            <Link to="/actualitat" className="btn btn-dark">← Tornar a Actualitat</Link>
          </div>
        </div>
      </section>
    </>
  )
}
