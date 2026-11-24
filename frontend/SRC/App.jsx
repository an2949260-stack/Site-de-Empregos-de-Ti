import { useEffect, useState } from 'react'
import Layout from './componentes/Layout'
import Home from './páginas/Home'
import Dashboard from './páginas/Dashboard'
import Login from './páginas/Login'
import './App.css'

export default function App() {
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem('devjobs-theme')
    return salvo || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })
  const [pagina, setPagina] = useState('home')

  useEffect(() => {
    document.body.classList.toggle('dark', tema === 'dark')
    localStorage.setItem('devjobs-theme', tema)
  }, [tema])

  const alternarTema = () => setTema((atual) => atual === 'dark' ? 'light' : 'dark')

  const paginas = {
    home: <Home />,
    dashboard: <Dashboard />,
    login: <Login />
  }

  return (
    <Layout tema={tema} alternarTema={alternarTema}>
      <nav className="container page-nav" aria-label="Navegação">
        <button type="button" onClick={() => setPagina('home')}>Vagas</button>
        <button type="button" onClick={() => setPagina('dashboard')}>Painel</button>
        <button type="button" onClick={() => setPagina('login')}>Entrar</button>
      </nav>
      {paginas[pagina]}
    </Layout>
  )
}
