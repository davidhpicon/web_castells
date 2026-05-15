import Leadership from '../components/Leadership/Leadership'

export default function JuntaDirectiva() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Junta <span>Directiva</span></h1>
          <p>L'equip que gestiona i representa la colla davant de les institucions i entitats.</p>
        </div>
      </div>

      <Leadership
        tag="Junta Directiva"
        title="La Junta Directiva"
        subtitle="L'equip que gestiona i representa la colla davant de les institucions i entitats."
        members={[
          { role: 'President/a',        name: 'Nom Cognom', initials: 'NC' },
          { role: 'Vicepresident/a',    name: 'Nom Cognom', initials: 'NC' },
          { role: 'Secretari/a',        name: 'Nom Cognom', initials: 'NC' },
          { role: 'Tresorer/a',         name: 'Nom Cognom', initials: 'NC' },
        ]}
      />
    </>
  )
}
