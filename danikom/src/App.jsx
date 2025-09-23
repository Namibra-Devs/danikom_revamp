import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import About from '@pages/About'
import Products from '@pages/Products'
import ProductPage from '@pages/ProductPage'
import Contact from '@pages/Contact'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
