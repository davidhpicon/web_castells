import styles from './Page.module.css'
import Leadership from '../components/Leadership/Leadership'

const milestones = [
  { year: '1994', event: 'Fundació de la colla a Viladecans.' },
  { year: '2000', event: 'Primera actuació fora de Viladecans.' },
  { year: '2008', event: 'Primer 3 de 8 carregat i descarregat.' },
  { year: '2015', event: 'Participació al Concurs de Castells de Tarragona.' },
  { year: '2020', event: 'Superació dels 200 membres actius.' },
  { year: '2024', event: '30 anys de la colla. Gran Diada de l\'aniversari.' },
]

export default function LaColla() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>La <span>Colla</span></h1>
          <p>Més de 30 anys construint castells i comunitat a Viladecans i arreu del Baix Llobregat.</p>
        </div>
      </div>

      <section className={`${styles.section} section-padding`}>
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <span className="tag">Qui som</span>
              <h2 className="section-title">Una família castellera</h2>
              <p className={styles.body}>
                Els Castellers de Viladecans som una entitat cultural sense ànim de lucre
                nascuda a la dècada dels 90, amb l'objectiu de cultivar i difondre la tradició
                castellera al municipi de Viladecans i al Baix Llobregat.
              </p>
              <p className={styles.body}>
                La nostra colla és un espai d'integració, on persones de totes les edats,
                orígens i condicions treballen juntes per assolir fites comunes.
                Els valors que ens guien són l'esforç, la constància, la cooperació i la diversió.
              </p>
              <p className={styles.body}>
                Actuem a les festes majors de Viladecans i dels municipis veïns, participem
                als grans concursos i esdeveniments castelleres de Catalunya, i oferim
                exhibicions i tallers per apropar els castells a tothom.
              </p>
            </div>
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
      </section>

      <section className={`${styles.sectionAlt} section-padding`} id="historia">
        <div className="container">
          <div className={styles.centeredHeader}>
            <span className="tag">Història</span>
            <h2 className="section-title">Els nostres fites</h2>
          </div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineCard}>
                  <span className={styles.timelineYear}>{m.year}</span>
                  <p className={styles.timelineEvent}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Leadership />
    </>
  )
}
