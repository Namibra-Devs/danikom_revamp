import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nana Adwoa Mensah",
      location: "Accra, Ghana",
      role: "Beauty Salon Owner",
      rating: 5,
      content: "Danikom's shea butter is the purest I've found. My clients love how it moisturizes without greasiness. It's become a staple in all my skincare treatments.",
      product: "Unrefined Shea Butter"
    },
    {
      name: "Kwame Asante",
      location: "Kumasi, Ghana",
      role: "Export Business Owner",
      rating: 5,
      content: "As someone who exports Ghanaian products, I can attest to Danikom's exceptional quality. Their cashew nuts meet international standards and clients always reorder.",
      product: "Premium Cashew Nuts"
    },
    {
      name: "Ali Munifa",
      location: "Tamale, Ghana",
      role: "Traditional Skincare Practitioner",
      rating: 5,
      content: "The African black soap maintains authentic traditional preparation methods. It's effective for various skin conditions and has natural healing properties.",
      product: "African Black Soap"
    },
    {
      name: "Kofi Ampofo",
      location: "Takoradi, Ghana",
      role: "Hotel Supplier",
      rating: 4,
      content: "We supply Danikom products to luxury hotels in Ghana. The consistency and quality have helped us build strong relationships with international hospitality brands.",
      product: "Multiple Products"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={18}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <Quote className="text-purple-600" size={24} />
            <span className="text-purple-600 font-semibold">Local Praise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Ghanaian Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from local experts who know and value our authentic products
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md  transition-all duration-300 border border-purple-100"
            >
              {/* Quote Icon */}
              <div className="text-purple-600 mb-4">
                <Quote size={24} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {renderStars(testimonial.rating)}
                <span className="text-gray-500 text-sm ml-2">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Customer Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-purple-600 text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{testimonial.location}</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {testimonial.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Experience Quality Yourself
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials