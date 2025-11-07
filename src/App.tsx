// src/App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ColetaInicial from './pages/ColetaInicial'
import InvestigacaoOnline from './pages/InvestigacaoOnline'
import CampoVigilancia from './pages/CampoVigilancia'
import Evidencias from './pages/Evidencias'
import RelatorioFinal from './pages/RelatorioFinal'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-900 text-white">
        {/* Menu lateral */}
        <nav className="w-64 bg-gray-800 p-4 flex flex-col gap-3">
          <h1 className="text-xl font-bold mb-4">Painel de Casos</h1>
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <Link to="/coleta-inicial" className="hover:text-teal-400">Coleta Inicial</Link>
          <Link to="/investigacao-online" className="hover:text-teal-400">Investigação Online</Link>
          <Link to="/campo-vigilancia" className="hover:text-teal-400">Campo & Vigilância</Link>
          <Link to="/evidencias" className="hover:text-teal-400">Evidências</Link>
          <Link to="/relatorio-final" className="hover:text-teal-400">Relatório Final</Link>
        </nav>

        {/* Área principal */}
        <main className="flex-1 p-6 bg-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coleta-inicial" element={<ColetaInicial />} />
            <Route path="/investigacao-online" element={<InvestigacaoOnline />} />
            <Route path="/campo-vigilancia" element={<CampoVigilancia />} />
            <Route path="/evidencias" element={<Evidencias />} />
            <Route path="/relatorio-final" element={<RelatorioFinal />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
