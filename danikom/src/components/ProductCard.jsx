import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1 flex-1">{product.short}</p>
        <p className="mt-2 text-accent font-semibold">${product.price}</p>
      </div>

      {/* View Button */}
      <Link
        to={`/products/${product.slug}`}
        className="mt-4 block text-center px-4 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition"
      >
        View Details
      </Link>
    </div>
  )
}
