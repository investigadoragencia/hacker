import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Hacker Case</h1>
      <p>Escolha uma etapa no menu acima.</p>
    </div>
  )
}

export default Home
import React from 'react'

export default function Home() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Bem-vindo ao Painel</h2>
      <p>Use o menu à esquerda para navegar pelas etapas do caso investigativo.</p>
    </div>
  )
}
