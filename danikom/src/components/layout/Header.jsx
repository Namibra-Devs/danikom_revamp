import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import Navbar from '@components/layout/Navbar'
import MobileNav from '@components/layout/MobileNav'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/danikom-logo.jpg" alt="Danikom Logo" className="h-10 w-auto rounded-sm" />
          
        </Link>

        {/* Desktop Nav */}
        <Navbar />

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
