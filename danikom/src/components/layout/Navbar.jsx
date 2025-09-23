import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `font-medium transition-colors hover:text-accent ${
              isActive ? 'text-accent' : 'text-gray-700'
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}
