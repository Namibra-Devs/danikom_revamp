import React from 'react'
import { motion } from 'framer-motion'

const MOCK_PRODUCTS = [
  // Shea Butter Products
  {
    id: 1,
    name: 'Pure Unrefined Shea Butter - 250g',
    short: 'Cold-pressed, raw, 100% pure',
    price: '12.99',
    originalPrice: '15.99',
    slug: 'pure-shea-250g',
    image: '/images/shea1.jpg',
    category: 'Shea Butter',
    categoryId: 'shea-butter',
    featured: true,
    badge: 'Bestseller',
    inStock: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 2,
    name: 'Shea Butter Cream - 200ml',
    short: 'Enriched with essential oils',
    price: '15.99',
    slug: 'shea-cream-200ml',
    image: '/images/products/sheabutter-cream.jpg',
    category: 'Shea Butter',
    categoryId: 'shea-butter',
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: 'Raw Shea Butter - 500g',
    short: 'Bulk size, perfect for DIY',
    price: '24.99',
    originalPrice: '29.99',
    slug: 'raw-shea-500g',
    image: '/images/products/sheabutter-raw.jpg',
    category: 'Shea Butter',
    categoryId: 'shea-butter',
    featured: true,
    badge: 'Sale',
    inStock: true,
    rating: 4.9,
    reviews: 67
  },

  // African Black Soap Products
  {
    id: 4,
    name: 'Traditional Black Soap - 150g',
    short: 'Handmade, authentic recipe',
    price: '8.99',
    slug: 'blacksoap-traditional',
    image: '/images/products/blacksoap-traditional.jpg',
    category: 'African Black Soap',
    categoryId: 'african-black-soap',
    featured: true,
    badge: 'Popular',
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 5,
    name: 'Black Soap Shampoo - 300ml',
    short: 'For healthy hair & scalp',
    price: '14.99',
    slug: 'blacksoap-shampoo',
    image: '/images/products/blacksoap-shampoo.jpg',
    category: 'African Black Soap',
    categoryId: 'african-black-soap',
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 78
  },
  {
    id: 6,
    name: 'Black Soap Body Wash - 400ml',
    short: 'Gentle cleansing, natural',
    price: '16.99',
    slug: 'blacksoap-bodywash',
    image: '/images/products/blacksoap-bodywash.jpg',
    category: 'African Black Soap',
    categoryId: 'african-black-soap',
    featured: false,
    inStock: false,
    rating: 4.4,
    reviews: 45
  },

  // Cocoa Butter Products
  {
    id: 7,
    name: 'Raw Cocoa Butter - 200g',
    short: 'Unrefined, rich in antioxidants',
    price: '11.99',
    slug: 'cocoa-butter-raw',
    image: '/images/products/cocoabutter-raw.jpg',
    category: 'Cocoa Butter',
    categoryId: 'cocoa-butter',
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 67
  },
  {
    id: 8,
    name: 'Cocoa Butter Lotion - 250ml',
    short: 'Deep moisturizing formula',
    price: '13.99',
    slug: 'cocoa-butter-lotion',
    image: '/images/products/cocoabutter-lotion.jpg',
    category: 'Cocoa Butter',
    categoryId: 'cocoa-butter',
    featured: false,
    inStock: true,
    rating: 4.3,
    reviews: 34
  },

  // Cosmetics Products
  {
    id: 9,
    name: 'Shea Lip Balm - 10g',
    short: 'Natural moisturizing lip care',
    price: '4.99',
    slug: 'lip-balm-shea',
    image: '/images/products/lip-balm.jpg',
    category: 'Cosmetics',
    categoryId: 'cosmetics',
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 10,
    name: 'Body Butter - 200ml',
    short: 'Luxurious skin softening',
    price: '18.99',
    slug: 'body-butter',
    image: '/images/products/body-butter.jpg',
    category: 'Cosmetics',
    categoryId: 'cosmetics',
    featured: true,
    badge: 'New',
    inStock: true,
    rating: 4.9,
    reviews: 124
  },

  // Cashew Products
  {
    id: 11,
    name: 'Premium Cashew Nuts - 500g',
    short: 'Grade A, roasted & salted',
    price: '22.99',
    originalPrice: '26.99',
    slug: 'cashew-nuts-premium',
    image: '/images/products/cashew-nuts.jpg',
    category: 'Cashews',
    categoryId: 'cashews',
    featured: true,
    badge: 'Popular',
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 12,
    name: 'Cashew Butter - 350g',
    short: 'Creamy, no additives',
    price: '16.99',
    slug: 'cashew-butter',
    image: '/images/products/cashew-butter.jpg',
    category: 'Cashews',
    categoryId: 'cashews',
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 91
  }
]

const CATEGORY_NAMES = {
  'shea-butter': 'Shea Butter',
  'african-black-soap': 'African Black Soap',
  'cocoa-butter': 'Cocoa Butter',
  'cosmetics': 'Cosmetics',
  'cashews': 'Cashews'
}

// Simple Product Card Component
const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="text-4xl mb-2">📦</div>
          <p className="text-sm text-purple-700 font-medium">{product.name}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.short}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-purple-600">${product.price}</span>
          {product.badge && (
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
              {product.badge}
            </span>
          )}
        </div>
        {!product.inStock && (
          <div className="mt-2 text-xs text-red-600 font-medium">Out of Stock</div>
        )}
      </div>
    </motion.div>
  )
}

export default function ProductGrid({ categoryFilter = 'all', showCategoryHeader = true }) {
  // Safe filtering - always return an array
  const filteredProducts = React.useMemo(() => {
    try {
      if (categoryFilter === 'all') {
        return MOCK_PRODUCTS
      }
      return MOCK_PRODUCTS.filter(product => product.categoryId === categoryFilter)
    } catch (error) {
      console.error('Error filtering products:', error)
      return MOCK_PRODUCTS // Fallback to all products
    }
  }, [categoryFilter])

  const categoryName = CATEGORY_NAMES[categoryFilter] || 'All Products'

  return (
    <div className="space-y-6">
      {/* Category Header */}
      {showCategoryHeader && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{categoryName} Products</h2>
          <p className="text-gray-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
          </p>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <div className="text-6xl mb-4">😔</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500">No products available in this category.</p>
        </div>
      )}
    </div>
  )
}