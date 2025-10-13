import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Globe, MapPin, Plane, Ship } from 'lucide-react'

const CountriesSection = () => {
  const [isPaused, setIsPaused] = useState(false)

  const countries = [
    { 
      name: 'United States', 
      flag: '/images/usa.png',
      cities: ['New York', 'California', 'Texas'],
      shipments: 20
    },
    { 
      name: 'Canada', 
      flag: '/images/canada.jpg',
      cities: ['Toronto', 'Vancouver', 'Montreal'],
      shipments: 30
    },
    { 
      name: 'Poland', 
      flag: '/images/poland.png',
      cities: ['Warsaw', 'Krakow', 'Gdansk'],
      shipments: 8
    },
    { 
      name: 'Italy', 
      flag: '/images/italy.webp',
      cities: ['Milan', 'Rome', 'Naples'],
      shipments: 9
    },
    { 
      name: 'Bulgaria', 
      flag: '/images/bulgaria.png',
      cities: ['Sofia', 'Plovdiv', 'Varna'],
      shipments: 10
    },
    { 
      name: 'Botswana', 
      flag: '/images/botswana.png',
      cities: ['Gaborone', 'Francistown', 'Maun'],
      shipments: 30
    },
    { 
      name: 'Zambia', 
      flag: '/images/zambia.png',
      cities: ['Lusaka', 'Livingstone', 'Ndola'],
      shipments: 10
    },
    { 
      name: 'Egypt', 
      flag: '/images/egypt.png',
      cities: ['Cairo', 'Alexandria', 'Giza'],
      shipments: 12
    },
    { 
      name: 'Germany', 
      flag: '/images/germany.png',
      cities: ['Berlin', 'Hamburg', 'Munich'],
      shipments: 17
    },
    { 
      name: 'France', 
      flag: '/images/france.png',
      cities: ['Paris', 'Lyon', 'Marseille'],
      shipments: 20
    }
  ]

  return (
    <section className="py-10 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <Globe className="text-purple-600" size={24} />
            <span className="text-purple-600 font-semibold">Global Reach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exporting Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering authentic African products to 10+ countries across the globe
          </p>
        </motion.div>

        {/* Animated Countries Carousel */}
        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex gap-8"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear"
              }
            }}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {/* Duplicate countries for seamless loop */}
            {[...countries, ...countries].map((country, index) => (
              <motion.div
                key={`${country.name}-${index}`}
                className="flex-shrink-0 w-64"
                
              >
                <div className="bg-white rounded-3xl p-6 shadow-xl  transition-all duration-300 border-2 border-purple-100">
                  {/* Circular Flag */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-200 shadow-lg">
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                      <Ship size={16} />
                    </div>
                  </div>

                  {/* Country Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {country.name}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-3">
                      <MapPin size={14} />
                      <span>{country.cities.length} cities</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-4">
                      {country.cities.slice(0, 2).map((city, cityIndex) => (
                        <span 
                          key={cityIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                        >
                          {city}
                        </span>
                      ))}
                      {country.cities.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{country.cities.length - 2} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                      <Plane size={14} className="text-green-500" />
                      <span>{country.shipments}+ shipments</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Interested in becoming a distributor in your country?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Plane size={20} />
            Become a Distributor
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CountriesSection