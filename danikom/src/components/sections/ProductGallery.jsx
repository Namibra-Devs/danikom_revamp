import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, ShoppingCart, Heart, Star, ArrowRight } from 'lucide-react'

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'shea', name: 'Shea Butter' },
    { id: 'black-soap', name: 'Black Soap' },
    { id: 'cashew', name: 'Cashew Products' },
    
  ]

  const products = [
    {
      id: 1,
      name: 'Pure Unrefined Shea Butter',
      category: 'shea',
      price: 24.99,
      originalPrice: 29.99,
      image: '/images/shea.jpeg',
      rating: 4.8,
      reviews: 142,
      description: '100% pure, unrefined shea butter sourced from women cooperatives in Ghana.',
      features: ['Moisturizing', 'Healing', 'Anti-inflammatory'],
      inStock: true,
      isNew: true
    },
    {
      id: 2,
      name: 'African Black Soap',
      category: 'black-soap',
      price: 18.99,
      originalPrice: 22.99,
      image: '/images/black1.jpg',
      rating: 4.6,
      reviews: 89,
      description: 'Traditional black soap for clear, healthy skin.',
      features: ['Acne treatment', 'Exfoliating', 'Balancing'],
      inStock: true,
      isNew: false
    },
    {
      id: 3,
      name: 'Premium Cashew Nuts',
      category: 'cashew',
      price: 32.99,
      originalPrice: 38.99,
      image: '/images/cashew2.jpg',
      rating: 4.9,
      reviews: 67,
      description: 'Grade A cashew nuts, perfect for snacking and cooking.',
      features: ['Rich in antioxidants', 'Protein packed', 'Gluten free'],
      inStock: true,
      isNew: true
    },
    {
      id: 4,
      name: 'Shea Butter Cream',
      category: 'shea',
      price: 28.99,
      image: '/images/shea3.avif',
      rating: 4.7,
      reviews: 56,
      description: 'Luxurious shea butter cream for daily moisturizing.',
      features: ['Deep hydration', 'Non-greasy', 'Fast absorbing'],
      inStock: false,
      isNew: false
    },
    {
      id: 5,
      name: 'Black Soap Shampoo',
      category: 'black-soap',
      price: 21.99,
      image: '/images/black3.avif',
      rating: 4.5,
      reviews: 34,
      description: 'Natural shampoo with black soap for healthy hair.',
      features: ['Scalp care', 'Hair growth', 'Natural cleansing'],
      inStock: true,
      isNew: true
    },
    {
      id: 6,
      name: 'Cashew Butter',
      category: 'cashew',
      price: 26.99,
      image: '/images/cashew1.jpg',
      rating: 4.8,
      reviews: 23,
      description: 'Creamy cashew butter made from premium roasted cashews.',
      features: ['No additives', 'High protein', 'Keto friendly'],
      inStock: true,
      isNew: false
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of authentic African natural products, ethically sourced and crafted with care.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              whileHover={{ y: -5 }}
              layout
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Out of Stock
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sale
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                    <Heart size={18} className="text-gray-700" />
                  </button>
                  <button 
                    onClick={() => setQuickViewProduct(product)}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <Eye size={18} className="text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600 font-medium uppercase tracking-wide">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={16} fill="currentColor" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ₵{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ₵{product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button 
                    disabled={!product.inStock}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      product.inStock
                        ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={18} />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Products
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal content would go here */}
            <div className="p-6">
              <button 
                onClick={() => setQuickViewProduct(null)}
                className="float-right text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <h3>{quickViewProduct.name}</h3>
              {/* Add detailed product view */}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductGallery