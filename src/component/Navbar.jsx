import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Home, GraduationCap, FolderOpen, Mail } from 'lucide-react'
import Skills from '../pages/Skills'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkBase =
    'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:text-blue-400 hover:shadow-[0_0_10px] hover:shadow-blue-500'

  const activeGlow =
    'text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-[0_0_15px] shadow-blue-500'

  const navItems = [
    { name: 'Home', icon: <Home size={18} />, path: '/home' },
    { name: 'Education', icon: <GraduationCap size={18} />, path: '/education' },
    { name: 'Skills', icon: <GraduationCap size={18} />, path: '/Skills' },
    { name: 'Projects', icon: <FolderOpen size={18} />, path: '/projects' },
    { name: 'Contact', icon: <Mail size={18} />, path: '/contact' },
  ]

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Dharanidharan</div>

        {/* Hamburger Button */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6 text-center">
          {navItems.map(({ name, icon, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? `${linkBase} ${activeGlow}` : linkBase
              }
            >
              {icon}
              {name}
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map(({ name, icon, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? `${linkBase} ${activeGlow}` : linkBase
                }
                onClick={() => setMenuOpen(false)}
              >
                {icon}
                {name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
