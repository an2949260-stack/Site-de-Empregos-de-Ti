export default function Login() {
  return (
    <main className="main container">
      <section className="login-card">
        <h2>Entrar</h2>
        <form>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" />
          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" />
          <button type="submit" className="btn btn--primary">Entrar</button>
        </form>
      </section>
    </main>
  )
}
