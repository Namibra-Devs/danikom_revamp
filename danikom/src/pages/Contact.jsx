import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageCircle,
  Globe,
  Truck,
  CheckCircle,
  Navigation,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@danikom.com",
      description: "Send us an email anytime",
      link: "mailto:info@danikom.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+233 (0) 24 662 6516",
      description: "Mon to Fri from 8am to 5pm",
      link: "tel:+233246626516",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Tamale, Ghana",
      description: "Come say hello at our office",
      link: "#",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Columbus, USA",
      description: "Come say hello at our office",
      link: "#",
    },
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Wholesale/Bulk Orders",
    "Distribution Partnership",
    "Product Information",
    "Shipping & Delivery",
    "Other",
  ];

  const officeLocations = [
    {
      title: "Ghana Headquarters",
      address:
        "PLT NO. 217, BLK A, Opposite Salvation of Christ Prayer Family Church Auditorium,",
      city: "Target Tamale, Ghana P.O. Box 3061, Tamale, Ghana NT – 0299 – 7389",
      phone: "+233 (0) 24 662 6516",
      email: "info@danikom.com",
      description:
        "Our main operational hub for production and international exports",
    },
    {
      title: "US Branch",
      address: "DANIKOM USA LLC, 646 Beechwood rd, Columbus, OH 43213",
      city: "USA",
      phone: "+1 614-843-9414",
      email: "usa.sales@danikom.com",
     
      description:
        "Sales team available for meetings and products inquiries in the USA",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Thank you for your message! We will get back to you within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-98  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/products-hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can bring authentic African products to your
              market
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our team for inquiries,
              partnerships, and support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:transform hover:-translate-y-1"
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <IconComponent className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2">
                    {method.details}
                  </p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <MessageCircle className="text-purple-600" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+233 XX XXX XXXX"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your inquiry, partnership interest, or how we can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-700 to-purple-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-purple-800 to-purple-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Why Partner With Danikom?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-300" />
                    <span>Direct sourcing from Ghanaian cooperatives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-300" />
                    <span>9+ years of export experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-300" />
                    <span>Competitive wholesale pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-300" />
                    <span>Global shipping to 10+ countries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-300" />
                    <span>Ethical and sustainable practices</span>
                  </div>
                </div>
              </div>

              {/* Global Reach */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Globe className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Global Export Experience
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We successfully export to countries worldwide including USA,
                  Canada, Poland, Italy, Bulgaria, Botswana, Zambia, Egypt and
                  more.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Truck size={16} />
                  <span>Reliable international shipping</span>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Quick Response Time
                  </h3>
                </div>
                <p className="text-gray-600">
                  Our team typically responds to all inquiries within 24 hours.
                  For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our offices in Tamale, Ghana and USA
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Office Addresses */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {officeLocations.map((office, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0">
                      <MapPin className="text-purple-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {office.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{office.description}</p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <MapPin size={16} className="text-gray-400" />
                          <div>
                            <p className="text-gray-900 font-medium">
                              {office.address}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {office.city}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone size={16} className="text-gray-400" />
                          <a
                            href={`tel:${office.phone}`}
                            className="text-purple-600 hover:text-purple-700 font-medium"
                          >
                            {office.phone}
                          </a>
                        </div>

                        <div className="flex items-center gap-3">
                          <Mail size={16} className="text-gray-400" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-purple-600 hover:text-purple-700"
                          >
                            {office.email}
                          </a>
                        </div>

                        
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                {/* Embedded Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.613030052745!2d-0.8023954238692457!3d9.367469383596656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43b2d4610d841%3A0xbbf592cbc2b83dc9!2sTamale!5e0!3m2!1sen!2sgh!4v1760381448038!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 rounded-2xl"
                />
              </div>

              <div className="p-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Office Locations in Tamale and USA
                </h4>
                <p className="text-gray-600 text-sm">
                  Both our offices are conveniently located in Tamale and USA
                  with easy access to major transportation routes.
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Head Office & Warehouse
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Sales & Marketing Office
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're interested in wholesale, distribution, or just have
              questions about our products, we're here to help.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {/* Call Button */}
              <a
                href="tel:+233246626516"
                className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Phone size={20} />
                Call Us Now
              </a>

              {/* Email Button */}
              <a
                href="mailto:info@danikom.com"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Email Us
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+233246626516" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M20.52 3.48A11.89 11.89 0 0 0 12 0C5.37 0 0 5.37 0 12a11.86 11.86 0 0 0 1.64 6L0 24l6.17-1.62A11.86 11.86 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52ZM12 22a9.86 9.86 0 0 1-5.06-1.39l-.36-.21-3.65.96.97-3.56-.24-.37A9.85 9.85 0 0 1 2 12C2 6.49 6.49 2 12 2c2.63 0 5.09 1.03 6.93 2.87A9.86 9.86 0 0 1 22 12c0 5.51-4.49 10-10 10Zm5.43-7.59c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.14 8.14 0 0 1-2.4-1.47 8.94 8.94 0 0 1-1.64-2.03c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
