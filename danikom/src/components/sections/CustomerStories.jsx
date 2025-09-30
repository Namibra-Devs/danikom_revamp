import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const CustomerStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Nana Adwoa Mensah",
      location: "Accra, Ghana",
      role: "Beauty Salon Owner",
      rating: 5,
      content:
        "Danikom's shea butter is the purest I've found. My clients love how it moisturizes without greasiness. It's become a staple in all my skincare treatments.",
      product: "Pure Unrefined Shea Butter",
    },
    {
      id: 2,
      name: "Esinam Agbley",
      location: "USA",
      role: "Business Owner",
      rating: 5,
      content:
        "As someone who imports authentic hand crafted Danikom products, I can attest to Danikom's exceptional quality. Their Shea Butter meet international standards and clients always reorder.",
      product: "Premium Cashew Nuts",
    },
    {
      id: 3,
      name: "Richard N. Puni",
      location: "Botswana",
      role: "Traditional Skincare Practitioner",
      rating: 5,
      content:
        "The African black soap maintains authentic traditional preparation methods. It's effective for various skin conditions and has natural healing properties.",
      product: "African Black Soap",
    },
    {
      id: 4,
      name: "Nicolas Sati",
      location: "Kenya",
      role: "Hotel Supplier",
      rating: 4,
      content:
        "We supply Danikom products to luxury hotels in Kenya. The consistency and quality have helped us build strong relationships with international hospitality brands.",
      product: "Multiple Products",
    },
    {
      id: 5,
      name: "Charles Alemna",
      location: "Zambia",
      role: "Spa Manager",
      rating: 5,
      content:
        "Our clients appreciate the authentic Danikom products we use. Danikom's natural oils and butters have elevated our spa services significantly.",
      product: "Natural Oils Collection",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-grren-100 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <Quote className="text-purple-600" size={24} />
            <span className="text-purple-600 font-semibold">
              Customer Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Local and Global Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why local experts choose Danikom for authentic Ghanaian
            products
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Slider */}
          <div className="relative h-96 overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0 bg-white rounded-3xl shadow-2xl"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid lg:grid-cols-2 h-full">
                  {/* Testimonial Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-6">
                      {renderStars(testimonials[currentSlide].rating)}
                      <span className="text-gray-500 ml-2">
                        {testimonials[currentSlide].rating}.0
                      </span>
                    </div>

                    <blockquote className="text-md md:text-2xl font-light text-gray-800 leading-relaxed mb-3">
                      "{testimonials[currentSlide].content}"
                    </blockquote>

                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-gray-900">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-purple-600 font-medium">
                        {testimonials[currentSlide].role}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin size={16} />
                        <span>{testimonials[currentSlide].location}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Product:{" "}
                        <span className="font-medium">
                          {testimonials[currentSlide].product}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Section */}
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-r-3xl p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-2">Danikom!</div>
                      <p className="text-xl opacity-90 mb-6">
                        Authentic Ghanaian Quality
                      </p>
                      <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                        <span className="text-sm">Since 2016</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

         

         
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-purple-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600">International Partners</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Local Partners</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">9+</div>
            <div className="text-gray-600">Years in Ghana</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Join hundreds of satisfied Ghanaian businesses
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/products"
              className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="/testimonials"
              className="px-8 py-4 border-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Stories
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerStories;
