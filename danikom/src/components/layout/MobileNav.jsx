import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

export default function MobileNav({ open, onClose }) {
  if (!open) return null

  return (
    <div className="md:hidden bg-white shadow-lg border-t">
      <nav className="flex flex-col px-4 py-3 gap-3">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `block font-medium py-2 rounded hover:bg-accent/10 ${
                isActive ? 'text-accent' : 'text-gray-700'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
