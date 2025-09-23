import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const { slug } = useParams()

  // TODO: Replace with real product fetch (maybe use useProducts hook)
  const product = {
    name: 'Sample Product',
    description: 'This is a placeholder description for ' + slug,
    price: '9.99',
    image: '/src/assets/images/shea-1.jpg',
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="mt-3 text-gray-600">{product.description}</p>
          <p className="mt-4 text-xl font-semibold text-accent">${product.price}</p>
          <button className="mt-6 px-6 py-3 rounded-lg bg-accent text-white font-semibold shadow hover:bg-accent/90 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  )
}
