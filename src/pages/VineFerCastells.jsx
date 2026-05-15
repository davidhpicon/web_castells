import { Link } from 'react-router-dom'
import styles from './Page.module.css'

const faqs = [
  { q: 'Cal tenir experiència prèvia?', a: 'No, en absolut. Tots hem començat sense saber res. A la colla t\'ensenyem des de zero amb paciència i bon humor.' },
  { q: 'Quina edat mínima hi ha per participar?', a: 'Els infants poden participar des dels 4-5 anys a la canalla. Els adults de qualsevol edat també són benvinguts.' },
  { q: 'Cal estar en forma o tenir força?', a: 'No és imprescindible. Hi ha rols per a totes les constitucions físiques: des dels lleugeres enxanetes fins als robustos de baixos.' },
  { q: 'Quan i on es fan els assajos?', a: 'Dimecres de 16:30 a 20:30 h i divendres de 19:30 a 23:00 h, al nostre local del C/Agricultura 37G de Viladecans.' },
  { q: 'Té cost apuntar-se?', a: 'Hi ha una quota anual simbòlica que cobreix material, assegurança i despeses de la colla. Cap persona es queda fora per raons econòmiques.' },
]

export default function VineFerCastells() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Vine a fer <span>Castells</span></h1>
          <p>No cal experiència. Tens ganes? Llavors pots ser casteller. T'esperem als assajos.</p>
        </div>
      </div>

      <section className={`${styles.section} section-padding`}>
        <div className="container">
          <div className={styles.centeredHeader}>
            <span className="tag">Com unir-se</span>
            <h2 className="section-title">3 passos per ser casteller</h2>
            <p className="section-subtitle">El procés és senzill. No hi ha proves ni selecció. Tothom és benvingut.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { icon: '👋', title: 'Vine a un assaig', desc: 'Apareix-te qualsevol dimecres o divendres al nostre local. Porta roba còmoda i ganes de riure.' },
              { icon: '🤝', title: 'Coneix la colla', desc: 'Et presentarem als companys, t\'explicarem els fonaments dels castells i trobaràs el teu lloc a la construcció.' },
              { icon: '🏆', title: 'Fes el teu primer castell', desc: 'En poques setmanes participaràs en construccions reals. Una experiència inoblidable que no et pots perdre.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="col-12 col-md-4">
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>{icon}</span>
                  <h3 className={styles.infoTitle}>{title}</h3>
                  <p className={styles.infoDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.sectionAlt} section-padding`} id="assajos">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-12 col-lg-6">
              <span className="tag">Assajos</span>
              <h2 className="section-title">Quan i on assagem</h2>
              <p className={styles.body}>
                Els assajos es fan dos cops a la setmana i estan oberts a tothom.
                No cal avisar abans de venir per primer cop, simplement apareix-te!
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
                {[
                  { dia: 'Dimecres', hora: '16:30 – 20:30 h', tipus: 'Assaig General' },
                  { dia: 'Divendres', hora: '19:30 – 23:00 h', tipus: 'Assaig General' },
                ].map(({ dia, hora, tipus }) => (
                  <div key={dia} style={{
                    display: 'flex', alignItems: 'center', gap: 20,
                    background: 'var(--bg-dark)', borderRadius: 'var(--radius)',
                    padding: '20px 24px', border: '1px solid rgba(118,255,3,0.15)'
                  }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 800, color: 'var(--green-neon)', minWidth: 100 }}>{dia}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem' }}>{hora}</div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{tipus}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className={styles.body} style={{ marginTop: 24 }}>
                📍 C/Agricultura 37G, 08840 Viladecans
              </p>
              <iframe
                title="Local d'assaig Castellers de Viladecans"
                src="https://maps.google.com/maps?q=Carrer+de+l'Agricultura+37G,+08840+Viladecans&output=embed&hl=ca"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: 'var(--radius)', display: 'block', marginTop: 8 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-12 col-lg-6">
              <span className="tag">Rols</span>
              <h2 className="section-title">El teu lloc al castell</h2>
              <p className={styles.body}>Cada persona troba el seu paper a la construcció. Tots els rols són igual d'importants.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
                {[
                  { rol: 'Enxaneta', desc: 'La punta del castell. Lleugers i àgils, solen ser canalla.' },
                  { rol: 'Dosos i trosos', desc: 'Les capes superiors, combinen agilitat i coratge.' },
                  { rol: 'Quarts i quints', desc: 'Les capes centrals, molt importants per l\'estabilitat.' },
                  { rol: 'Baixos', desc: 'La base humana del castell, carreguen el pes de tots.' },
                  { rol: 'Pinya', desc: 'L\'abraçada col·lectiva que protegeix el castell.' },
                ].map(({ rol, desc }) => (
                  <div key={rol} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: 'var(--green-neon)', flexShrink: 0, marginTop: 6 }} />
                    <div>
                      <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--text-dark)' }}>{rol}: </strong>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-mid)' }}>{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} section-padding`}>
        <div className="container">
          <div className={styles.centeredHeader}>
            <span className="tag">FAQ</span>
            <h2 className="section-title">Preguntes freqüents</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ background: 'var(--bg-section)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>{q}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contacte" className="btn btn-primary">Contacta amb nosaltres</Link>
          </div>
        </div>
      </section>
    </>
  )
}
