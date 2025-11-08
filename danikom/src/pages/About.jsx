import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  Heart,
  Target,
  Eye,
  Shield,
  Star,
  Quote,
  Building,
  TrendingUp,
  Users as TeamIcon,
  MapPin,
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Daniel D. Kombat",
      role: "Chief Executive Officer",
      illustration: "/images/ceo.png",
      description:
        "9+ years experience in export business and community development",
      expertise: [
        "Export Strategy",
        "Community Partnerships",
        "Business Development",
      ],
    },
    {
      name: "Naseri Banning Batholomew",
      role: "General Manager",
      illustration: "/images/gm.png",
      description: "Expert in supply chain management and quality control",
      expertise: ["Supply Chain", "Quality Assurance", "Logistics"],
    },
    {
      name: "Nashiru Philemon Dakibat",
      role: "Finance and Administration Manager",
      illustration: "/images/fam.png",
      description:
        "Oversees financial planning, budgeting, and administrative operations to ensure sustainable growth and accountability.",
      expertise: [
        "Financial Management",
        "Budgeting & Reporting",
        "Organizational Administration",
      ],
    },

    {
      name: "Angdi Impelee",
      role: "International Sales Director",
      illustration: "/images/sales.jpg",
      description: "Manages global client relationships and market expansion",
      expertise: ["International Trade", "Client Relations", "Market Research"],
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description:
        "Creating sustainable livelihoods for women in rural communities",
    },
    {
      icon: Shield,
      title: "Quality",
      description:
        "Maintaining traditional methods while ensuring highest standards",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Ethical sourcing and environmentally conscious practices",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Investing back into the communities that make our products possible",
    },
  ];

  const milestones = [
    { year: "2016", event: "Founded with first women cooperative partnership" },
    { year: "2018", event: "Expanded to European markets" },
    { year: "2018", event: "Reached 50+ women artisans" },
    { year: "2020", event: "60+ women empowered across Ghana " },
    { year: "2023", event: "Expanded to 10+ countries worldwide" },
    { year: "2025", event: "Launched e-commerce platform" },
  ];

  const stats = [
    { number: "50+", label: "Women Empowered", icon: Users },
    { number: "10+", label: "Countries Served", icon: Globe },
    { number: "9+", label: "Years Experience", icon: Award },
    { number: "100%", label: "Ethically Sourced", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-98 bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/shea5.jpg')" }}
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
              About Danikom
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Bridging Tradition with Global Markets Through Ethical Trade
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-purple-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Danikom is more than a business — we are a bridge connecting
                  rural women cooperatives in northern Ghana to the global
                  market. We specialize in producing and exporting pure,
                  unrefined Shea butter and African Black soap.
                </p>
                <p>
                  By working directly with artisans, we empower local
                  communities, ensure fair trade practices, and promote
                  sustainability. Our products reach homes in the USA, Canada,
                  Poland, Italy, Bulgaria, Botswana, Zambia, Egypt, and beyond.
                </p>
                <p>
                  Founded in 2016, we've grown from a small local initiative to
                  an internationally recognized brand, all while staying true to
                  our roots and commitment to ethical business.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/story1.jpg"
                alt="Women cooperative members working"
                className="rounded-2xl shadow-md w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">9+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/ceo.png"
                alt="CEO of Danikom"
                className="rounded-2xl shadow-md w-full h-96 object-cover"
              />
              <div className="absolute -top-4 -left-4 bg-purple-900 text-white p-4 rounded-2xl shadow-lg">
                <Quote size={32} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Message From Our CEO
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    "When we started Danikom in 2016, our vision was simple: to
                    create economic opportunities for women in rural Ghana while
                    sharing the incredible benefits of our traditional products
                    with the world."
                  </p>
                  <p>
                    "Today, I'm proud to see how far we've come. We've built
                    bridges between continents, empowered hundreds of women, and
                    maintained the authenticity of our traditional methods.
                    Every jar of shea butter and bar of black soap tells a story
                    of empowerment, tradition, and quality."
                  </p>
                  <p>
                    "Our journey is proof that business can be a force for good.
                    We're not just exporting products; we're sharing our
                    heritage and creating sustainable futures."
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900">Daniel D. Kombat</h4>
                  <p className="text-purple-600">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-purple-900 rounded-3xl p-8 text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed text-purple-100">
                To be a world-class producer and supplier of natural shea
                butter, Black Soap, and other Shea products.Our Core Values:
                Credible & Reputable, Quality, Innovation & Timely Delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-green-600 rounded-3xl p-8 text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed text-green-100">
                To specialize in the production and supply of natural shea
                butter and the use of modern technology to produce innovative
                and quality Shea products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section with Illustrations */}
      <section className="py-20 bg-white">
        <div className="max-w-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals driving our mission forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-full h-56 mx-auto mb-6 bg-purple-50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={member.illustration}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones that shaped our story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-200 h-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                      <h3 className="text-2xl font-bold text-purple-600 mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Whether you're a customer, distributor, or partner, together we
              can create sustainable impact through ethical trade.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/products"
                className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Explore Products
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
