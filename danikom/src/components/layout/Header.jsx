import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import Navbar from '@components/layout/Navbar'
import MobileNav from '@components/layout/MobileNav'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Header Bar */}
      <header
        className={`sticky top-0 z-50 bg-purple-800 backdrop-blur shadow transition-opacity duration-300 ${
          open ? 'hidden' : 'block'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-stretch">
          {/* Main content container */}
          <div className="flex items-center justify-between flex-1 px-4 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/danikom-logo.jpg"
                alt="Danikom Logo"
                className="h-10 w-auto rounded-sm"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <Navbar />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-green-400 transition-colors duration-200"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={29} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="hidden md:flex items-center bg-green-500 text-white font-medium px-8 hover:bg-green-600 transition-all duration-300 relative group"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-600 group-hover:from-green-600 group-hover:to-green-700 opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </header>

      {/* Mobile Nav */}
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}
