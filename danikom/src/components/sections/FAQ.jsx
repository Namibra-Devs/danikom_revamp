import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Mail, Phone, MessageCircle } from 'lucide-react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What makes Danikom shea butter different from others?",
      answer: "Our shea butter is 100% pure, unrefined, and sourced directly from women cooperatives in Northern Ghana. We maintain traditional processing methods that preserve the natural nutrients and healing properties, ensuring you get the most authentic and effective product."
    },
    {
      question: "How do you ensure the quality of your products?",
      answer: "We implement strict quality control measures at every stage - from sourcing raw materials to final packaging. Our products are tested for purity, and we work closely with cooperatives to maintain traditional standards while ensuring hygiene and safety."
    },
    {
      question: "What countries do you ship to?",
      answer: "We currently ship to over 10 countries including USA, Canada, Poland, Italy, Bulgaria, Botswana, Zambia, Egypt, Germany, and France. Shipping times vary by location but typically range from 7-21 business days."
    },
    {
      question: "Are your products ethically sourced?",
      answer: "Absolutely. We're committed to fair trade practices. We work directly with women cooperatives in Ghana, ensuring fair wages, safe working conditions, and community development initiatives. A portion of our profits goes back into these communities."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and mobile money for local Ghanaian customers. All payments are processed securely."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <HelpCircle className="text-purple-600" size={24} />
            <span className="text-purple-600 font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Accordions */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-purple-600" size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Large Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 text-white h-full min-h-[500px] flex flex-col justify-center">
              {/* Image Container */}
              <div className="relative mb-8">
                <img
                  src="/images/dani-log.jpg"
                  alt="Danikom Quality Assurance"
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-tr-3xl rounded-bl-3xl shadow-lg">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Why Choose Danikom?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Direct sourcing from women cooperatives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>100% natural and authentic products</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>International quality standards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Fast and reliable worldwide shipping</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-purple-200 mb-4">Need immediate assistance?</p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="mailto:info@danikom.com"
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                  <a
                    href="tel:+233123456789"
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm"
                  >
                    <MessageCircle size={16} />
                    Message
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Can't find the answer you're looking for? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={20} />
            Get In Touch With Us
          </a>
        </motion.div>

        {/* Quick Info */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">24-48h</div>
            <div className="text-gray-600">Response Time</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Guarantee</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Languages Supported</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ