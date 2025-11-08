import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users, Heart, Globe, Shield, Ship, CreditCard, Award, Star } from "lucide-react";

const CoopStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: Ship,
      number: "100+",
      label: "Great Shipping",
      description: "Reliable worldwide delivery to 10+ countries",
    },
    {
      icon: CreditCard,
      number: "5+",
      label: "Flexible Payment",
      description: "Multiple secure payment options available",
    },
    {
      icon: Award,
      number: "100%",
      label: "Quality Guaranteed",
      description: "Premium natural products with quality assurance",
    },
    {
      icon: Globe,
      number: "10+",
      label: "Countries Served",
      description: "Exporting to USA, Canada, Europe, and Africa",
    },
  ];

  const exportCountries = [
    "USA",
    "Canada",
    "Poland",
    "Italy",
    "Bulgaria",
    "Botswana",
    "Zambia",
    "Egypt",
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Cooperative Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            A credible export brand connecting tradition with global markets
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center mb-12 md:mb-16">
          {/* Image Section */}
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/story.jpg"
              alt="Women cooperative members producing shea butter"
              className="rounded-2xl shadow-sm w-full h-80 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 sm:p-6 rounded-tl-2xl rounded-br-2xl shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold">9+</div>
              <div className="text-xs sm:text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-4 md:space-y-6" data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-900">
              Our Brand Story
            </h3>
            <div className="space-y-3 md:space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                In a world increasingly driven by synthetic solutions and mass
                production, we find ourselves in a unique narrative - one that
                celebrates the rich heritage and natural beauty of Africa.
              </p>
              <p>
                Our brand stands at the intersection of tradition and modernity,
                producing unrefined Shea butter and African Black soap sourced
                directly from rural women cooperatives in Northern and Savannah Regions of Ghana.
              </p>
              <p>
                        We work with over 17 shea nuts pickers and processor cooperatives in 17 communities in northern with over 1500 women membership. By buying from us, you would be contributing to empowering thousands of women who earn their daily income through shea.
                </p>
              <p>
                We are not just a business; we are a bridge connecting these
                artisans to the global market, exporting our products to the
                USA, Canada, Poland, Italy, Bulgaria, Botswana, Zambia, Egypt
                and beyond.
              </p>
            </div>

            {/* Export Countries */}
            <div
              className="bg-purple-50 rounded-xl p-4 sm:p-6"
              data-aos="zoom-in"
            >
              <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Globe size={20} />
                Exporting to 10+ Countries Worldwide
              </h4>
              <div className="flex flex-wrap gap-2">
                {exportCountries.map((country) => (
                  <span
                    key={country}
                    className="px-3 py-1 bg-white rounded-full text-xs sm:text-sm text-purple-800 border border-purple-200"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-sm transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <IconComponent className="text-purple-600" size={24} />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {feature.number}
                </div>
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                  {feature.label}
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div
          className="bg-gradient-to-r from-purple-700 to-purple-800 rounded-tl-4xl rounded-br-4xl p-6 sm:p-8 text-center text-white"
          data-aos="fade-up"
        >
          <Star className="mx-auto mb-3 sm:mb-4" size={28} />
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Bridging Tradition with Global Markets
          </h3>
          <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-3xl mx-auto">
            We are committed to preserving traditional African craftsmanship
            while creating sustainable economic opportunities for women
            cooperatives through ethical global trade.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 md:mt-12" data-aos="zoom-in">
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-sm text-sm sm:text-base"
          >
            <Heart size={18} />
            Discover Our Full Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoopStory;
