import styles from './Page.module.css'

export default function LaColla() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>La <span>Colla</span></h1>
          <p>Una colla castellera amb arrels a Viladecans des de l'any 2012.</p>
        </div>
      </div>

      <section className={`${styles.section} section-padding`}>
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-12 col-lg-6">
              <span className="tag">Qui som</span>
              <h2 className="section-title">Una família castellera</h2>
              <p className={styles.body}>
                Els Castellers de Viladecans som la colla castellera de la ciutat de Viladecans,
                lluïm amb orgull la nostra camisa de color verd fluorescent des de l'any 2012
                i els nostres màxims castells a dia d'avui són el 4de7a, el 3de7, el 4de7 i el Pde5.
              </p>
              <p className={styles.body}>
                El nostre objectiu és la promoció i divulgació del fet casteller, que és Patrimoni
                Inmaterial de la Humanitat, mitjançant actuacions i diades castelleres, i d'altres
                activitats, com tallers o assajos públics a Viladecans i rodalies. Som un grup de
                viladecanencs i viladecanenques entusiasmats per fer castells i per fer més gran
                la colla castellera de la nostra ciutat!
              </p>
              <p className={styles.body}>
                Actualment som un grup d'una vuitantena de persones que ens reunim per fer assajos
                els dimecres de 16:30 a 20:30 hores, i els divendres de 19:30 a 23:00 hores al
                Local de la Colla (C/Agricultura, 37G). Els nostres assajos són oberts, gratuïts
                i per totes les edats, on tothom hi té cabuda i on tothom hi pot participar.
                Necessitem gent com TU per seguir creixent i poder fer grans castells, l'únic que
                s'ha de fer és venir amb moltes ganes, i participar-hi! Vine i descobreix la gran
                família Fluorescent!
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div className={styles.valuesCard}>
                <h3 className={styles.valuesTitle}>Els nostres valors</h3>
                {['Esforç i constància', 'Treball en equip', 'Inclusió i diversitat', 'Arrelament al territori', 'Seguretat i tècnica'].map(v => (
                  <div key={v} className={styles.valueItem}>
                    <span className={styles.valueDot} />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
