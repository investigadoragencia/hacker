import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'
import ColetaInicial from './pages/ColetaInicial'
import InvestigacaoOnline from './pages/InvestigacaoOnline'
import CampoVigilancia from './pages/CampoVigilancia'
import Evidencias from './pages/Evidencias'
import RelatorioFinal from './pages/RelatorioFinal'

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
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
          <Footer />
        </div>
      </div>
    </Router>
  )
}
