import { useMemo, useState } from 'react'
import SearchBar from '../componentes/SearchBar'
import JobCard from '../componentes/JobCard'
import { vagasMock } from '../dados/vagasMock'

export default function Home() {
  const [busca, setBusca] = useState('')

  const vagas = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    if (!termo) return vagasMock

    return vagasMock.filter((vaga) => {
      const texto = [vaga.titulo, vaga.empresa, vaga.local, ...vaga.tecnologias]
        .join(' ')
        .toLowerCase()
      return texto.includes(termo)
    })
  }, [busca])

  return (
    <main className="main">
      <SearchBar value={busca} onChange={setBusca} />
      <section className="jobs-section container">
        <h2 className="sr-only">Lista de vagas</h2>
        <p className="result-count" aria-live="polite">
          {vagas.length} vaga{vagas.length === 1 ? '' : 's'} encontrada{vagas.length === 1 ? '' : 's'}
        </p>
        {vagas.length === 0 ? (
          <p className="empty-msg">Nenhuma vaga encontrada.</p>
        ) : (
          <div className="jobs-grid">
            {vagas.map((vaga) => <JobCard key={vaga.id} vaga={vaga} />)}
          </div>
        )}
      </section>
    </main>
  )
}
