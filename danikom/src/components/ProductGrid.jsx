import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// Import product images
import sheaButterPure from "/images/shea6.jpeg";
import sheaButterCream from "/images/shea-yellow.png";
import sheaButterRaw from "/images/shea.jpg";
import blackSoapTraditional from "/images/blacksoap.jpg";
import blackSoapShampoo from "/images/black-paste3.webp";
import blackSoapBodywash from "/images/soap-lquid.avif";
import cocoaButterRaw from "/images/cosmetics.jpg";
import cocoaButterLotion from "/images/cocoa1.webp";
import lipBalm from "/images/cosmetics1.webp";
import bodyButter from "/images/cocoa.webp";
import cashewNuts from "/images/cashew3.jpg";
import cashewButter from "/images/cashew1.jpg";

const MOCK_PRODUCTS = [
  // Shea Butter Products
  {
    id: 1,
    name: "UNREFINED SHEA BUTTER – IVORY/WHITE",
    short: "Cold-pressed, raw, 100% pure shea butter",
    fullDescription:
      "Danikom Ghana Ltd produces premium handcrafted Unrefined Shea Butter, made by rural women using traditional methods that preserve all its natural benefits. This process not only ensures high-quality, chemical-free butter but also provides sustainable, year-round income for over 2,000 women across 18 communities in Northern and Savannah regions of Ghana. The company also produces Unrefined Yellow Shea Butter infused with Borututu Roots. Through this work, Danikom empowers women, promotes education—especially for girls—and upholds values of traceability and sustainability.",
 
    slug: "pure-shea-250g",
    image: sheaButterPure,
    category: "Shea Butter",
    categoryId: "shea-butter",
    featured: true,
    badge: "Bestseller",
    inStock: true,
    rating: 4.8,
    reviews: 142,
    benefits: [
      "Deep Moisturizing",
      "Skin Healing",
      "Anti-inflammatory",
      "Natural Sun Protection",
    ],
  },
  {
    id: 2,
    name: "UNREFINED SHEA BUTTER – YELLOW",
    short: "Enriched with essential oils for daily use",
    fullDescription:
      "We produce our Borututu Yellow Shea Butter using the same traditional method we use in Ivory or white shea butter processing. The addition of Borututu roots is what makes the difference between our white or Ivory shea butter and the yellow shea butter. The introduction of borututu roots in the production process comes with additional benefits to the shea butter and also changes the colour of the Ivory or white shea butter to distinctive yellow either light or deep yellow colour depending on client choice. Our yellow shea butter is not harmful when consumed but is mostly used as raw material for cosmetic products.",
   
    slug: "shea-cream-200ml",
    image: sheaButterCream,
    category: "Shea Butter",
    categoryId: "shea-butter",
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 89,
    benefits: [
      "Daily Moisturizing",
      "Quick Absorption",
      "Suitable for Sensitive Skin",
    ],
  },
  {
    id: 3,
    name: "Raw Shea Butter - 500g",
    short: "Bulk size, perfect for DIY skincare",
    fullDescription:
      "This raw shea butter is perfect for DIY skincare enthusiasts and small businesses. Maintains all the natural properties of shea butter in its purest form. Use it to create your own creams, lotions, soaps, or use as a standalone treatment. Sourced directly from women cooperatives ensuring fair trade practices.",
   
    slug: "raw-shea-500g",
    image: sheaButterRaw,
    category: "Shea Butter",
    categoryId: "shea-butter",
    featured: true,
    badge: "Sale",
    inStock: true,
    rating: 4.9,
    reviews: 67,
    benefits: ["Bulk Size", "DIY Friendly", "Cost Effective", "Multi-purpose"],
  },

  // African Black Soap Products
  {
    id: 4,
    name: "African Black Soap",
    short: "Handmade, authentic recipe for clear skin",
    fullDescription:
      "This is a traditional Ghanaian soap known as “Alata Samina” handcrafted by our women cooperatives in northern and Ashanti regions of Ghana. This soap is made with all natural ingredients for your bath and hair wash experience. Ours is enriched with shea butter and palm kernel oil.  All natural - No chemicals nor animal-derived ingredients added. With the presence of natural shea butter, this soap is gentle on the skin and makes your skin soft, smooth, and flawless. It is ideal for all skin types, including babies. This soap is recommended for those who want to maintain natural beauty and healthy skin care. It also helps to soothe irritation and inflammation, clears up pimples, and removes bacteria from the surface of the skin that can cause more break-outs, keeping you clean and fresh all day.",
 
    slug: "blacksoap-traditional",
    image: blackSoapTraditional,
    category: "African Black Soap",
    categoryId: "african-black-soap",
    featured: true,
    badge: "Popular",
    inStock: true,
    rating: 4.7,
    reviews: 156,
    benefits: ["Acne Treatment", "Skin Brightening", "Natural Exfoliation"],
  },
  {
    id: 5,
    name: " Black Soap - PASTE",
    short: "For healthy hair growth and scalp care",
    fullDescription:
      "Our Black Soap Paste is a rich, traditional formulation made from pure African black soap and natural plant-based oils. It gently cleanses and detoxifies the skin while preserving its natural moisture balance. Enriched with shea butter and Palm Kernel Oil (Elaeis guineensis), it helps to fade blemishes, even skin tone, and combat acne. Suitable for all skin types, it leaves the skin feeling smooth, refreshed and naturally radiant.",
    price: "14.99",
    slug: "blacksoap-shampoo",
    image: blackSoapShampoo,
    category: "African Black Soap",
    categoryId: "african-black-soap",
    featured: true,
    badge: "popular",
    inStock: true,
    rating: 4.5,
    reviews: 78,
    benefits: ["Hair Growth", "Scalp Health", "Dandruff Control"],
  },
  {
    id: 6,
    name: "Black Soap Shampoo - LIQUID",
    short: "Gentle cleansing with natural ingredients",
    fullDescription:
      "Our Black Soap Shampoo combines traditional black soap with Natural Shea Butter (Butyrospermum parkii), Water (Aqua) and Cocoa Pods Ash (Potash). Gently cleanses while maintaining natural scalp oils. Formulated with coconut oil and shea butter to prevent dryness and breakage. Suitable for all hair types, especially effective for dandruff and itchy scalp.",
    price: "16.99",
    slug: "blacksoap-bodywash",
    image: blackSoapBodywash,
    category: "African Black Soap",
    categoryId: "african-black-soap",
    featured: true,
    inStock: true,
    rating: 4.4,
    reviews: 45,
    benefits: ["Gentle Cleansing", "Moisturizing", "Sulfate Free"],
  },

  // Cocoa Butter Products
  {
    id: 7,
    name: "Raw Cocoa Butter - 200g",
    short: "Unrefined, rich in antioxidants for skin repair",
    fullDescription:
      "Pure, unrefined cocoa butter in its natural state. Packed with antioxidants that fight free radicals and prevent premature aging. Deeply moisturizing properties help repair dry, damaged skin and reduce stretch marks. Natural chocolate aroma that uplifts the senses. Solid at room temperature, melts on contact with skin.",
    price: "11.99",
    slug: "cocoa-butter-raw",
    image: cocoaButterRaw,
    category: "Cocoa Butter",
    categoryId: "cocoa-butter",
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 67,
    benefits: ["Anti-aging", "Stretch Mark Reduction", "Deep Moisturizing"],
  },
  {
    id: 8,
    name: "Cocoa Butter Lotion - 250ml",
    short: "Deep moisturizing formula for daily use",
    fullDescription:
      "Rich cocoa butter lotion that provides intense 24-hour moisture. Lightweight formula absorbs quickly without greasy residue. Infused with vitamin E and shea butter for enhanced skin benefits. Perfect for very dry skin, eczema, and psoriasis. Leaves skin feeling soft, smooth, and nourished all day long.",
    price: "13.99",
    slug: "cocoa-butter-lotion",
    image: cocoaButterLotion,
    category: "Cocoa Butter",
    categoryId: "cocoa-butter",
    featured: false,
    inStock: true,
    rating: 4.3,
    reviews: 34,
    benefits: ["24-hour Moisture", "Quick Absorption", "Suitable for Eczema"],
  },

  // Cosmetics Products
  {
    id: 9,
    name: "Shea Lip Balm - 10g",
    short: "Natural moisturizing lip care with shea butter",
    fullDescription:
      "Nourishing lip balm made with pure shea butter and natural beeswax. Provides long-lasting moisture and protection for dry, chapped lips. Contains peppermint oil for a refreshing tingle and natural shine. Free from petroleum and synthetic ingredients. Perfect for daily use and protection against harsh weather conditions.",
    price: "4.99",
    slug: "lip-balm-shea",
    image: lipBalm,
    category: "Cosmetics",
    categoryId: "cosmetics",
    featured: false,
    badge: "Bestseller",
    inStock: true,
    rating: 4.7,
    reviews: 89,
    benefits: [
      "Long-lasting Moisture",
      "Natural Ingredients",
      "SPF Protection",
    ],
  },
  {
    id: 10,
    name: "Body Butter - 200ml",
    short: "Luxurious skin softening with African botanicals",
    fullDescription:
      "Ultra-rich body butter that transforms dry skin. Formulated with shea butter, cocoa butter, and marula oil for intense hydration. Whipped to a light, fluffy texture that melts into skin. Infused with ylang-ylang and vanilla essential oils for a luxurious scent. Provides 48-hour moisture for incredibly soft, radiant skin.",
    price: "18.99",
    slug: "body-butter",
    image: bodyButter,
    category: "Cosmetics",
    categoryId: "cosmetics",
    featured: true,
    badge: "New",
    inStock: true,
    rating: 4.9,
    reviews: 124,
    benefits: ["48-hour Moisture", "Luxurious Texture", "Skin Brightening"],
  },

  // Cashew Products
  {
    id: 11,
    name: "Premium Cashew Nuts - 500g",
    short: "Grade A, roasted & salted for perfect snacking",
    fullDescription:
      "Premium grade A cashew nuts, carefully selected and lightly roasted to perfection. Sourced from the finest cashew plantations in West Africa. Lightly salted to enhance natural flavor while maintaining nutritional value. Rich in heart-healthy fats, protein, and essential minerals. Perfect for snacking, cooking, or as a healthy addition to meals.",
    price: "22.99",
    originalPrice: "26.99",
    slug: "cashew-nuts-premium",
    image: cashewNuts,
    category: "Cashews",
    categoryId: "cashews",
    featured: true,
    badge: "Popular",
    inStock: true,
    rating: 4.9,
    reviews: 203,
    benefits: ["High in Protein", "Heart Healthy", "Rich in Antioxidants"],
  },
  {
    id: 12,
    name: "Cashew Butter - 350g",
    short: "Creamy, no additives, perfect for spreads",
    fullDescription:
      "100% pure cashew butter made from premium roasted cashews. No added oils, sugars, or preservatives. Creamy, smooth texture perfect for spreading on toast, adding to smoothies, or using in recipes. Rich in healthy monounsaturated fats, magnesium, and copper. Vegan-friendly and gluten-free alternative to traditional spreads.",
    price: "16.99",
    slug: "cashew-butter",
    image: cashewButter,
    category: "Cashews",
    categoryId: "cashews",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 91,
    benefits: ["No Additives", "Vegan Friendly", "High in Healthy Fats"],
  },
];

const CATEGORY_NAMES = {
  "shea-butter": "Shea Butter",
  "african-black-soap": "African Black Soap",
  "cocoa-butter": "Cocoa Butter",
  cosmetics: "Cosmetics",
  cashews: "Cashews",
};

// Product Card Component with Read More functionality
const ProductCard = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  // Determine if description needs "Read More"
  const needsReadMore = product.fullDescription.length > 120;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Product Image */}
      <div className="h-48 bg-gray-100 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            const fallback =
              e.target.parentNode.querySelector(".image-fallback");
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div className="image-fallback hidden w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 items-center justify-center flex-col">
          <div className="text-4xl mb-2">
            {product.category === "Shea Butter" && "🧴"}
            {product.category === "African Black Soap" && "🧼"}
            {product.category === "Cocoa Butter" && "🍫"}
            {product.category === "Cosmetics" && "💄"}
            {product.category === "Cashews" && "🥜"}
          </div>
          <p className="text-purple-700 text-sm font-medium">Product Image</p>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                product.badge === "Bestseller"
                  ? "bg-green-500 text-white"
                  : product.badge === "Sale"
                  ? "bg-red-500 text-white"
                  : product.badge === "New"
                  ? "bg-blue-500 text-white"
                  : product.badge === "Popular"
                  ? "bg-orange-500 text-white"
                  : "bg-purple-500 text-white"
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-purple-600 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Description with Read More */}
        <div className="mb-3">
          <p className="text-gray-600 text-sm leading-relaxed">
            {isDescriptionExpanded
              ? product.fullDescription
              : product.fullDescription.slice(0, 120) +
                (needsReadMore ? "..." : "")}
          </p>

          {needsReadMore && (
            <button
              onClick={toggleDescription}
              className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-xs font-medium mt-2 transition-colors"
            >
              {isDescriptionExpanded ? (
                <>
                  Read Less
                  <ChevronUp size={14} />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown size={14} />
                </>
              )}
            </button>
          )}
        </div>

        {/* Benefits Tags */}
        {product.benefits && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.benefits.slice(0, 2).map((benefit, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {benefit}
              </span>
            ))}
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={`text-sm ${
                  index < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price and Stock */}
        <div className="flex justify-between items-center">
          <div className="text-right">
            {product.inStock ? (
              <span className="text-xs text-green-600 font-medium">
                In Stock
              </span>
            ) : (
              <span className="text-xs text-red-600 font-medium">
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProductGrid({
  categoryFilter = "all",
  showCategoryHeader = true,
}) {
  const filteredProducts = MOCK_PRODUCTS.filter(
    (product) =>
      categoryFilter === "all" || product.categoryId === categoryFilter
  );

  const categoryName = CATEGORY_NAMES[categoryFilter] || "All Products";

  return (
    <div className="space-y-6">
      {/* Category Header */}
      {showCategoryHeader && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {categoryName} Products
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} available
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
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No products found
          </h3>
          <p className="text-gray-500">
            No products available in this category.
          </p>
        </div>
      )}
    </div>
  );
}
