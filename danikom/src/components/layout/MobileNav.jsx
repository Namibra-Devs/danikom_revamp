import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { X, Home, User, Package, Phone, Sparkles } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About Us', path: '/about', icon: User },
  { name: 'Our Products', path: '/products', icon: Package },
  { name: 'Contact Us', path: '/contact', icon: Phone },
]

export default function MobileNav({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <>
      {/* 🔹 Fullscreen Solid Purple Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-[#4b0082] transition-opacity duration-500"
          style={{ opacity: open ? 1 : 0 }}
        />
      )}

      {/* 🔹 Content Layer */}
      <div
        className={`fixed inset-0 z-50 md:hidden flex flex-col items-center pt-24 transition-all duration-500 ${
          open
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white p-3 bg-white/20 rounded-full"
        >
          <X size={28} />
        </button>

  <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/images/danikom-logo.jpg"
              alt="Danikom Logo"
              className="h-16 w-auto rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-300"
            />
            <Sparkles className="text-green-300" size={32} />
          </div>F
        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 mt-12 w-full max-w-sm px-8">
          {navLinks.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-4 text-lg font-semibold py-4 px-6 rounded-xl transition-all ${
                  isActive
                    ? 'bg-green-300 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`
              }
            >
              <Icon size={22} />
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
