import React from 'react'
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        className={index < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ))
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.badge && (
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
              product.badge === 'Bestseller' ? 'bg-green-500 text-white' :
              product.badge === 'Sale' ? 'bg-red-500 text-white' :
              product.badge === 'New' ? 'bg-blue-500 text-white' :
              product.badge === 'Popular' ? 'bg-orange-500 text-white' :
              product.badge === 'Bundle' ? 'bg-purple-500 text-white' :
              product.badge === 'Premium' ? 'bg-gold-500 text-white' :
              product.badge === 'Bulk' ? 'bg-teal-500 text-white' :
              'bg-gray-500 text-white'
            }`}>
              {product.badge}
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
            <Heart size={16} className="text-gray-700" />
          </button>
          <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
            <Eye size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-purple-600 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-purple-600 transition-colors">
          <Link to={`/products/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.short}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={!product.inStock}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
            product.inStock
              ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <ShoppingCart size={18} />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard