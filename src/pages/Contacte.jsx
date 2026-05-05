import { useState } from 'react'
import styles from './Page.module.css'
import contactStyles from './Contacte.module.css'

export default function Contacte() {
  const [form, setForm] = useState({ nom: '', email: '', telefon: '', motiu: '', missatge: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

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

          {/* ── 3 green blocks ── */}
          <div className="row g-4 mb-5">

            <div className="col-12 col-md-4">
              <div className={contactStyles.block}>
                <span className={contactStyles.blockTag}>Vine a veuren's</span>
                <p className={contactStyles.blockAddr}>
                  Carrer Agricultura, 37G<br />
                  08840 Viladecans
                </p>
                <div className={contactStyles.schedule}>
                  {[
                    { dia: 'Dimecres', hora: '18:30 – 20:30 h' },
                    { dia: 'Divendres', hora: '19:30 – 23:00 h' },
                  ].map(({ dia, hora }) => (
                    <div key={dia} className={contactStyles.scheduleRow}>
                      <span className={contactStyles.scheduleDay}>{dia}</span>
                      <span className={contactStyles.scheduleHour}>{hora}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className={contactStyles.block}>
                <span className={contactStyles.blockTag}>Truca'ns</span>
                <a href="tel:609999999" className={contactStyles.bigValue}>609 999 999</a>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className={contactStyles.block}>
                <span className={contactStyles.blockTag}>Escriu-nos</span>
                <a href="mailto:castellersviladecans@gmail.com" className={contactStyles.bigValue}>
                  castellersviladecans@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* ── Form ── */}
          {sent ? (
            <div className={contactStyles.sentMsg}>
              <span>✅</span>
              <h3>Missatge enviat!</h3>
              <p>Gràcies per contactar-nos. Et respondrem el més aviat possible.</p>
              <button onClick={() => setSent(false)} className="btn btn-primary">
                Enviar un altre missatge
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={contactStyles.form}>
              <h3 className={styles.formTitle}>Envia'ns un missatge</h3>
              <p className={styles.formSubtitle}>Tots els camps marcats amb * són obligatoris.</p>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="nom">Nom i cognoms *</label>
                    <input id="nom" name="nom" type="text" required className={styles.formInput} value={form.nom} onChange={handleChange} placeholder="El teu nom" />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="email">Correu electrònic *</label>
                    <input id="email" name="email" type="email" required className={styles.formInput} value={form.email} onChange={handleChange} placeholder="correu@exemple.com" />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="telefon">Telèfon</label>
                    <input id="telefon" name="telefon" type="tel" className={styles.formInput} value={form.telefon} onChange={handleChange} placeholder="Opcional" />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
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
                </div>
                <div className="col-12">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="missatge">Missatge *</label>
                    <textarea id="missatge" name="missatge" required className={styles.formTextarea} value={form.missatge} onChange={handleChange} placeholder="Explica'ns en què et podem ajudar…" />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Enviar missatge
                  </button>
                </div>
              </div>
            </form>
          )}

        </div>
      </section>
    </>
  )
}
