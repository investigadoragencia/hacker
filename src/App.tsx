import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Coleta from './pages/Coleta'
import Investigacao from './pages/Investigacao'
import Campo from './pages/Campo'
import Evidencias from './pages/Evidencias'
import Relatorio from './pages/Relatorio'

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/coleta">Coleta</Link> | 
        <Link to="/investigacao">Investigação</Link> | 
        <Link to="/campo">Campo</Link> | 
        <Link to="/evidencias">Evidências</Link> | 
        <Link to="/relatorio">Relatório</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coleta" element={<Coleta />} />
        <Route path="/investigacao" element={<Investigacao />} />
        <Route path="/campo" element={<Campo />} />
        <Route path="/evidencias" element={<Evidencias />} />
        <Route path="/relatorio" element={<Relatorio />} />
      </Routes>
    </div>
  )
}

export default App
