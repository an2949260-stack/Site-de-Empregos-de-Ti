import { vagasMock } from '../dados/vagasMock'

export default function Dashboard() {
  return (
    <main className="main container">
      <section className="dashboard">
        <h2>Painel de vagas</h2>
        <p>{vagasMock.length} vagas disponíveis no projeto.</p>
      </section>
    </main>
  )
}
