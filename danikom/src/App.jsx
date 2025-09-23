import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '@pages/Home'
import About from '@pages/About'
import Products from '@pages/Products'
import ProductPage from '@pages/ProductPage'
import Contact from '@pages/Contact'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import LoadingSpinner from '@components/ui/LoadingSpinner'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Show loading when route changes
    setIsLoading(true)
    
    // Simulate loading delay (you can adjust this)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300) // 300ms delay to show spinner

    return () => clearTimeout(timer)
  }, [location.pathname]) // Trigger on route change

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-1 relative">
        {isLoading && <LoadingSpinner />}
        <div className={isLoading ? 'opacity-50' : 'opacity-100 transition-opacity duration-300'}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}