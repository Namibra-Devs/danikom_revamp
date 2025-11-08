import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/black2.webp",
    title: "Authentic African Black Soap",
    subtitle: " Natural • Handcrafted • Ethically Sourced",
    description:
      "Handcrafted using centuries-old recipes. Our black soap deeply cleanses, exfoliates, and revitalizes skin with its rich antioxidant properties.",
    features: [
      "Deep cleansing",
      "Natural exfoliation",
      "Acne treatment",
      "Skin balancing",
    ],
    ctaPrimary: "Shop Black Soap",
    ctaSecondary: "Learn Benefits",
    primaryLink: "/products/black-soap",
    secondaryLink: "/about#black-soap",
  },
  {
  id: 2,
  image: "/images/cocoa1.webp",
  title: "Natural Cocoa Butter",
  subtitle: " Natural • Pure • Versatile",
  description:
    "Experience the richness of natural cocoa butter carefully sourced from Ghana, west Africa. Perfect for chocolate making, skincare and balms.",
  features: [
    "Moisturizing",
    "Rich in vitamins",
    "Healthy skin elasticity",
    "Naturally soothing",
  ],
  ctaPrimary: "Explore Cocoa Butter",
  ctaSecondary: "Benefits & Uses",
  primaryLink: "/products/cocoa-butter",
  secondaryLink: "/about#cocoa-butter",
},

  {
    id: 3,
    image: "/images/shea5.jpg",
    title: "Pure Unrefined Shea Butter - IVORY",
    subtitle: "All Natural• Handcrafted • Ethically Sourced. ",
    description:
      "Directly sourced from women cooperatives in Ghana. Our shea butter provides intense moisture and healing for skin and hair.",
    features: [
      "Deep moisturizing",
      "Skin healing",
      "Anti-inflammatory",
      "Hair conditioning",
    ],
    ctaPrimary: "Buy Shea Butter",
    ctaSecondary: "Uses & Benefits",
    primaryLink: "/products/shea-butter",
    secondaryLink: "/about#shea-butter",
  },
  {
    id: 4,
    image: "/images/shea3.avif",
    title: "Pure Unrefined Shea Butter - YELLOW",
    subtitle: "No Chemical• Handcrafted • Ethically Sourced. ",
    description:
      "Directly sourced from women cooperatives in Ghana. Our shea butter provides intense moisture and healing for skin and hair.",
    features: [
      "Natural",
      "No Chemical Additives",
      
      "Hair conditioning",
    ],
    ctaPrimary: "Buy Shea Butter",
    ctaSecondary: "Uses & Benefits",
    primaryLink: "/products/shea-butter",
    secondaryLink: "/about#shea-butter",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="max-w-2xl text-white"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold leading-tight mb-2"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="text-xl text-green-300 font-semibold mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.p
                className="text-lg text-gray-200/90 mb-6 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Features list */}
              <motion.div
                className="flex flex-wrap gap-3 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {slides[currentSlide].features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20"
                  >
                    {feature}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <a
                  href={slides[currentSlide].primaryLink}
                  className="flex-1 sm:flex-none text-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-green-500 text-white font-semibold shadow-lg hover:bg-[#4b0082] transition-all duration-300 transform hover:scale-105 text-sm sm:text-base lg:text-lg"
                >
                  {slides[currentSlide].ctaPrimary}
                </a>
                <a
                  href={slides[currentSlide].secondaryLink}
                  className="flex-1 sm:flex-none text-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-[#4b0082] text-white font-semibold shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base lg:text-lg"
                >
                  {slides[currentSlide].ctaSecondary}
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-green-500 w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-10">
        <motion.div
          className="h-full bg-green-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  );
}
