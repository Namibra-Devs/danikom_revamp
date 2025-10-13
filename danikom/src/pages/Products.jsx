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

// Import your images
import sheaButterCategory from "/images/shea4.webp";
import blackSoapCategory from "/images/black2.webp";
import cocoaButterCategory from "/images/cocoabutter.jpeg";
import cosmeticsCategory from "/images/cosmetics.jpg";
import cashewCategory from "/images/cashew2.jpg";
import heroBg from "/images/products-hero.jpg";

export default function Products() {
  const [expandedCategory, setExpandedCategory] = useState(null);

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
      image: sheaButterCategory,
      features: ["Deep Moisturizing", "Skin Healing", "Anti-inflammatory"],
      color: "from-purple-500 to-purple-700",
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
        "This soap is made with all natural ingredients for your bath and hair wash experience. Ours is enriched with shea butter and palm kernel oil. All natural - No chemicals nor animal-derived ingredients added.",
      image: blackSoapCategory,
      features: ["Natural Cleansing", "Acne Treatment", "Skin Balancing"],
      color: "from-green-500 to-green-700",
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
      image: cocoaButterCategory,
      features: ["Intense Hydration", "Skin Repair", "Stretch Mark Prevention"],
      color: "from-amber-500 to-amber-700",
    },
    {
      name: "Cosmetics",
      id: "cosmetics",
      subProducts: ["Lip Balms", "Body Butters", "Hair Products", "Face Cream"],
      description:
        "Natural cosmetic products infused with African botanical ingredients",
      image: cosmeticsCategory,
      features: ["Natural Ingredients", "Cruelty Free", "Vegan Options"],
      color: "from-pink-500 to-pink-700",
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
      image: cashewCategory,
      features: ["Rich in Antioxidants", "Protein Packed", "Heart Healthy"],
      color: "from-orange-500 to-orange-700",
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
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-98  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
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
              Discover our range of authentic African natural products, each
              crafted with traditional methods and modern quality standards.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-4 justify-center mt-8 flex-wrap"
            >
              <a
                href="#categories"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Browse Categories
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
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any category to explore its products
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                {/* Category Header - Always Visible */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Category Image */}
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-64 object-cover rounded-xl shadow-md"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="hidden w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl items-center justify-center flex-col"
                        style={{ display: category.image ? "none" : "flex" }}
                      >
                        <div className="text-4xl mb-2">
                          {category.name === "Shea Butter" && "🧴"}
                          {category.name === "African Black Soap" && "🧼"}
                          {category.name === "Cocoa Butter" && "🍫"}
                          {category.name === "Cosmetics" && "💄"}
                          {category.name === "Cashews" && "🥜"}
                        </div>
                        <p className="text-gray-500 text-sm">Category Image</p>
                      </div>
                    </div>

                    {/* Category Info */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        {category.name}
                      </h3>
                      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        {category.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Products Include:
                        </h4>
                        <ul className="space-y-1">
                          {category.subProducts.map((product, productIndex) => (
                            <li
                              key={productIndex}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {category.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full border border-purple-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleExploreCategory(category.id)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        {expandedCategory === category.id
                          ? "Hide Products"
                          : "Explore Products"}
                        {expandedCategory === category.id ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

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
                      <div className="p-8 bg-gray-50 border-t">
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            All {category.name} Products
                          </h4>
                          <p className="text-gray-600">
                            Browse our complete range of{" "}
                            {category.name.toLowerCase()} products
                          </p>
                        </div>

                        {/* Product Grid for this category */}
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

      {/* All Products Section */}
      <section className="py-20 bg-gray-50">
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
      </section>

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
              <a
                href="/images/flowchart.PDF"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                View / Download Flowchart (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
