import Leadership from '../components/Leadership/Leadership'

export default function JuntaTecnica() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Junta <span>Tècnica</span></h1>
          <p>L'equip tècnic que dirigeix els assajos, decideix les construccions i vetlla per la seguretat.</p>
        </div>
      </div>

      <Leadership
        tag="Junta Tècnica"
        title="La Junta Tècnica"
        subtitle="L'equip tècnic que dirigeix els assajos, decideix les construccions i vetlla per la seguretat."
        members={[
          { role: 'Cap de Colla',          name: 'Nom Cognom', initials: 'NC' },
          { role: 'Cap de Colla Adjunt/a', name: 'Nom Cognom', initials: 'NC' },
          { role: 'Cap de Canalla',        name: 'Nom Cognom', initials: 'NC' },
          { role: 'Cap de Música',         name: 'Nom Cognom', initials: 'NC' },
        ]}
      />
    </>
  )
}
