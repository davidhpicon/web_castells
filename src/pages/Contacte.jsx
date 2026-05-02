import { useState } from 'react'
import styles from './Page.module.css'

export default function Contacte() {
  const [form, setForm] = useState({ nom: '', email: '', telefon: '', motiu: '', missatge: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1><span>Contacte</span></h1>
          <p>Escriu-nos per unir-te, contractar-nos o qualsevol dubte que tinguis.</p>
        </div>
      </div>

      <section className={`${styles.section} section-padding`}>
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <span className="tag">Parla amb nosaltres</span>
              <h2 className="section-title" style={{ marginTop: 8 }}>Sempre estem aquí</h2>
              <p className={styles.body}>
                Tant si vols fer-te casteller, contractar-nos per a un event,
                fer una col·laboració o simplement saber més, escriu-nos
                i et respondrem el més aviat possible.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 32 }}>
                {[
                  { icon: '📍', label: 'Adreça', value: 'Viladecans, Baix Llobregat, Catalunya' },
                  { icon: '✉️', label: 'Correu', value: 'info@castellersdeviladecans.cat' },
                  { icon: '📱', label: 'Xarxes socials', value: 'Instagram · Facebook · YouTube' },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.4rem', width: 32, textAlign: 'center', flexShrink: 0 }}>{icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-light)', marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 40, padding: '24px', background: 'var(--bg-dark)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(118,255,3,0.15)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--white)', marginBottom: 8 }}>Assajos oberts</h4>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
                  La millor manera de conèixer-nos és venint a un assaig.<br />
                  <strong style={{ color: 'var(--green-neon)' }}>Dimecres i Divendres, 20:00 – 22:00 h.</strong>
                </p>
              </div>
            </div>

            <div className={styles.formCard}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: 16 }}>✅</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', marginBottom: 8 }}>Missatge enviat!</h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem' }}>Gràcies per contactar-nos. Et respondrem el més aviat possible.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn btn-primary"
                    style={{ marginTop: 24 }}
                  >
                    Enviar un altre missatge
                  </button>
                </div>
              ) : (
                <>
                  <h3 className={styles.formTitle}>Envia'ns un missatge</h3>
                  <p className={styles.formSubtitle}>Tots els camps marcats amb * són obligatoris.</p>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="nom">Nom i cognoms *</label>
                        <input id="nom" name="nom" type="text" required className={styles.formInput} value={form.nom} onChange={handleChange} placeholder="El teu nom" />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="email">Correu electrònic *</label>
                        <input id="email" name="email" type="email" required className={styles.formInput} value={form.email} onChange={handleChange} placeholder="correu@exemple.com" />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="telefon">Telèfon</label>
                      <input id="telefon" name="telefon" type="tel" className={styles.formInput} value={form.telefon} onChange={handleChange} placeholder="Opcional" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="motiu">Motiu de contacte *</label>
                      <select id="motiu" name="motiu" required className={styles.formSelect} value={form.motiu} onChange={handleChange}>
                        <option value="">Selecciona un motiu…</option>
                        <option value="unirse">Vull fer-me casteller/a</option>
                        <option value="contractar">Contractar actuació o taller</option>
                        <option value="collaboracio">Col·laboració o patrocini</option>
                        <option value="premsa">Premsa i comunicació</option>
                        <option value="altres">Altres consultes</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="missatge">Missatge *</label>
                      <textarea id="missatge" name="missatge" required className={styles.formTextarea} value={form.missatge} onChange={handleChange} placeholder="Explica'ns en què et podem ajudar…" />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Enviar missatge
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
