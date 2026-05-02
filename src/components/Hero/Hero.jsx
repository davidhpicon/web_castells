import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useParallax } from '../../hooks/useParallax'
import styles from './Hero.module.css'

// Picks up every image dropped into src/assets/home/
const imageModules = import.meta.glob(
  '../../assets/home/*.{jpg,jpeg,png,gif,webp,svg,avif}',
  { eager: true }
)
const images = Object.values(imageModules).map((m) => m.default)

const AUTOPLAY_DELAY = 4000

export default function Hero() {
  const gradientRef = useParallax(0.35)
  const patternRef  = useParallax(0.18)
  const floatRef    = useParallax(0.5)

  const [current, setCurrent]     = useState(0)
  const [animating, setAnimating] = useState(false)
  const [paused, setPaused]       = useState(false)
  const timerRef                  = useRef(null)

  const goTo = useCallback((index) => {
    if (animating || images.length <= 1) return
    setAnimating(true)
    setCurrent((index + images.length) % images.length)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Autoplay
  useEffect(() => {
    if (images.length <= 1 || paused) return
    timerRef.current = setInterval(next, AUTOPLAY_DELAY)
    return () => clearInterval(timerRef.current)
  }, [next, paused])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Carousel slides (bottom layer) ── */}
      {images.length > 0 && (
        <div className={styles.carousel} aria-hidden="true">
          {images.map((src, i) => (
            <div
              key={src}
              className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
            >
              <img
                src={src}
                alt=""
                className={styles.slideImg}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
          {/* Dark overlay so text stays readable over any photo */}
          <div className={styles.slideOverlay} />
        </div>
      )}

      {/* ── Parallax overlay layers ── */}
      <div className={styles.bg} aria-hidden="true">
        <div ref={gradientRef} className={`${styles.bgGradient} ${images.length > 0 ? styles.bgGradientPhoto : ''}`} />
        <div ref={patternRef}  className={styles.bgPattern} />
        <div ref={floatRef}    className={styles.bgFloat} />
      </div>

      {/* ── Content (unchanged) ── */}
      <div className="container">
        <div className={styles.content}>
          <span className={`tag ${styles.animTag}`}>Colla Castellera · Viladecans</span>
          <h1 className={`${styles.title} ${styles.animTitle}`}>
            Tradició, esforç<br />
            i <span className={styles.highlight}>germanor</span>
          </h1>
          <p className={`${styles.subtitle} ${styles.animSubtitle}`}>
            Som els Castellers de Viladecans. Construïm castells humans
            amb passió, des del cor del Baix Llobregat.
            Uneix-te a la nostra família castellera.
          </p>
          <div className={`${styles.actions} ${styles.animActions}`}>
            <Link to="/vine-a-fer-castells" className="btn btn-primary">
              Vine a fer castells
            </Link>
            <Link to="/la-colla" className="btn btn-outline">
              Qui som?
            </Link>
          </div>
          <div className={`${styles.stats} ${styles.animStats}`}>
            <div className={styles.stat}>
              <span className={styles.statNum}>+200</span>
              <span className={styles.statLabel}>Castellers</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>+30</span>
              <span className={styles.statLabel}>Anys d'història</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>Viladecans</span>
              <span className={styles.statLabel}>Baix Llobregat</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Carousel controls ── */}
      {images.length > 1 && (
        <div className={styles.controls}>
          <button
            className={styles.arrow}
            onClick={prev}
            aria-label="Imatge anterior"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className={styles.dots} role="tablist" aria-label="Selector d'imatge">
            {images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Imatge ${i + 1}`}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <button
            className={styles.arrow}
            onClick={next}
            aria-label="Imatge següent"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      )}

      {/* ── Progress bar ── */}
      {images.length > 1 && !paused && (
        <div className={styles.progressBar} key={current} />
      )}

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
