import { useState } from 'react'
import { newsData } from '../components/NewsSection/NewsSection'
import styles from './Page.module.css'
import newsStyles from '../components/NewsSection/NewsSection.module.css'

const categories = ['Totes', 'Actuació', 'Cultura', 'Assaig', 'Agenda', 'Colla']
const categoryColors = {
  Actuació: '#76FF03',
  Cultura: '#00BCD4',
  Assaig: '#FF9800',
  Agenda: '#AB47BC',
  Colla: '#EF5350',
}

export default function Actualitat() {
  const [active, setActive] = useState('Totes')

  const filtered = active === 'Totes'
    ? newsData
    : newsData.filter(n => n.category === active)

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
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '8px 18px',
                  borderRadius: 99,
                  border: `2px solid ${active === cat ? 'var(--green-neon)' : 'var(--border)'}`,
                  background: active === cat ? 'var(--green-neon)' : 'transparent',
                  color: active === cat ? 'var(--bg-dark)' : 'var(--text-mid)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={newsStyles.grid}>
            {filtered.map((item) => (
              <article key={item.id} className={newsStyles.card}>
                <div
                  className={newsStyles.cardImg}
                  style={{ background: `linear-gradient(135deg, var(--bg-dark) 0%, ${categoryColors[item.category] ?? '#76FF03'}22 100%)` }}
                  aria-hidden="true"
                >
                  <span className={newsStyles.cardImgIcon}>
                    {item.category === 'Actuació' && '🏆'}
                    {item.category === 'Cultura' && '🌹'}
                    {item.category === 'Assaig' && '💪'}
                    {item.category === 'Agenda' && '📅'}
                    {item.category === 'Colla' && '👥'}
                  </span>
                </div>
                <div className={newsStyles.cardBody}>
                  <div className={newsStyles.cardMeta}>
                    <span
                      className={newsStyles.cardCategory}
                      style={{ color: categoryColors[item.category] ?? 'var(--green-neon)' }}
                    >
                      {item.category}
                    </span>
                    <span className={newsStyles.cardDate}>{item.date}</span>
                  </div>
                  <h3 className={newsStyles.cardTitle}>{item.title}</h3>
                  <p className={newsStyles.cardExcerpt}>{item.excerpt}</p>
                  <span className={newsStyles.readMore}>Llegir més →</span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '48px 0' }}>
              No hi ha notícies en aquesta categoria de moment.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
