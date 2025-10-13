import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Download,
  ArrowRight,
  Star,
  Shield,
  Truck,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ProductGrid from "@components/ProductGrid";

export default function Products() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const productCategories = [
    {
      name: "Shea Butter",
      id: "shea-butter",
      subProducts: [
        "Pure Unrefined Shea Butter",
        "Shea Butter Cream",
        "Raw Shea Butter",
      ],
      description:
        "100% pure, unrefined shea butter sourced directly from women cooperatives in Northern Ghana",
      image: "/images/shea.jpg",
      features: ["Deep Moisturizing", "Skin Healing", "Anti-inflammatory"],
      color: "from-purple-700 to-purple-700",
    },
    {
      name: "African Black Soap",
      id: "african-black-soap",
      subProducts: [
        "Traditional Black Soap",
        "Black Soap Shampoo",
        "Black Soap Body Wash",
        "Black Soap & Shea Combo",
      ],
      description:
        "Authentic African black soap made using traditional methods for clear, healthy skin",
      image: "/images/products/blacksoap-category.jpg",
      features: ["Natural Cleansing", "Acne Treatment", "Skin Balancing"],
      color: "from-green-700 to-green-700",
    },
    {
      name: "Cocoa Butter",
      id: "cocoa-butter",
      subProducts: [
        "Raw Cocoa Butter",
        "Cocoa Butter Lotion",
        "Cocoa Butter Stick",
      ],
      description:
        "Rich, nourishing cocoa butter for intense skin hydration and repair",
      image: "/images/products/cocoabutter-category.jpg",
      features: ["Intense Hydration", "Skin Repair", "Stretch Mark Prevention"],
      color: "from-purple-600 to-purple-600",
    },
    {
      name: "Cosmetics",
      id: "cosmetics",
      subProducts: ["Lip Balms", "Body Butters", "Hair Products", "Face Cream"],
      description:
        "Natural cosmetic products infused with African botanical ingredients",
      image: "/images/products/cosmetics-category.jpg",
      features: ["Natural Ingredients", "Cruelty Free", "Vegan Options"],
      color: "from-green-600 to-green-600",
    },
    {
      name: "Cashews",
      id: "cashews",
      subProducts: [
        "Premium Cashew Nuts",
        "Cashew Butter",
        "Roasted Cashews",
        "Raw Cashews",
        "Honey Glazed Cashews",
      ],
      description:
        "Grade A cashew nuts and derivatives from West Africa's finest harvests",
      image: "/images/products/cashew-category.jpg",
      features: ["Rich in Antioxidants", "Protein Packed", "Heart Healthy"],
      color: "from-purple-700 to-purple-700",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "All products meet international quality standards",
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description: "Fast and reliable delivery to 10+ countries",
    },
    {
      icon: Star,
      title: "Customer Favorite",
      description: "Rated 4.8/5 by customers worldwide",
    },
    {
      icon: Globe,
      title: "Ethically Sourced",
      description: "Direct from women cooperatives in Ghana",
    },
  ];

  const generateFlowChart = () => {
    alert(
      "Flowchart PDF download would start here. In production, this would download the actual PDF."
    );
  };

  const handleExploreCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
      setActiveCategory("all");
    } else {
      setExpandedCategory(categoryId);
      setActiveCategory(categoryId);
    }
  };

  const handleViewAllProducts = () => {
    setExpandedCategory(null);
    setActiveCategory("all");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-98  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/products-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Premium African Natural Products, Ethically Sourced and Crafted
              with Care
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-4 justify-center mt-8 flex-wrap"
            >
              <a
                href="#products"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Products
              </a>
              <a
                href="https://your-ecommerce-store.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <ShoppingCart size={20} />
                Shop Online Store
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="text-purple-600" size={32} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Premium Products
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Discover our range of authentic African natural products,
              ethically sourced and hand crafted with care.
            </p>
          </motion.div>

          <div className="space-y-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-r ${category.color} rounded-2xl shadow-lg overflow-hidden`}
              >
                {/* Category Header */}
                <button
                  onClick={() => handleExploreCategory(category.id)}
                  className="w-full text-left p-5 sm:p-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 hover:bg-black/5 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-lg mb-3 sm:mb-4 max-w-3xl">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {category.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 sm:px-3 py-1 bg-white/20 text-white text-xs sm:text-sm rounded-full border border-white/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-white/90 text-xs sm:text-base">
                      <span className="font-semibold">Includes:</span>
                      <span>{category.subProducts.slice(0, 2).join(", ")}</span>
                      {category.subProducts.length > 2 && (
                        <span>and {category.subProducts.length - 2} more</span>
                      )}
                    </div>
                  </div>

                  {/* Explore button */}
                  <div className="flex items-center gap-2 text-white justify-end sm:justify-center">
                    <span className="font-semibold text-sm sm:text-base">
                      {expandedCategory === category.id
                        ? "Hide Products"
                        : "Explore Products"}
                    </span>
                    {expandedCategory === category.id ? (
                      <ChevronUp size={20} className="sm:w-6 sm:h-6" />
                    ) : (
                      <ChevronDown size={20} className="sm:w-6 sm:h-6" />
                    )}
                  </div>
                </button>

                {/* Expandable Product Grid */}
                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-8 bg-white border-t">
                        <div className="mb-4 sm:mb-6">
                          <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                            All {category.name} Products
                          </h4>
                          <p className="text-gray-600 text-sm sm:text-base">
                            Browse our complete range of{" "}
                            {category.name.toLowerCase()} products
                          </p>
                        </div>

                        <ProductGrid
                          categoryFilter={category.id}
                          showCategoryHeader={false}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Section (when no category is expanded) */}
      <AnimatePresence>
        {!expandedCategory && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="py-20 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  All Products
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Browse our complete product catalog
                </p>
              </div>

              <ProductGrid categoryFilter="all" showCategoryHeader={false} />
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Explore our full product catalog, place orders online, or download
              our product flowchart.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://your-ecommerce-store.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <ShoppingCart size={20} />
                Visit E-commerce Store
              </a>
              <button
                onClick={generateFlowChart}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Flowchart (PDF)
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
