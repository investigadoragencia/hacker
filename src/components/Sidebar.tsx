import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Coleta Inicial', path: '/coleta-inicial' },
    { name: 'Investigação Online', path: '/investigacao-online' },
    { name: 'Campo & Vigilância', path: '/campo-vigilancia' },
    { name: 'Evidências', path: '/evidencias' },
    { name: 'Relatório Final', path: '/relatorio-final' },
  ]

  return (
    <aside className="w-64 bg-gray-800 p-4 min-h-screen">
      <nav className="flex flex-col space-y-2">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `p-2 rounded hover:bg-teal-500 transition ${
                isActive ? 'bg-teal-600 font-bold' : ''
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
