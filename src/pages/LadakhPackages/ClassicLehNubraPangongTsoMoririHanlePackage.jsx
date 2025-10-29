import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
const ladakhBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1760701119/experience_the_ultimate_ladakh_adventure_tea2qw.webp";

const ClassicLehNubraPangongTsoMoririHanlePackage = () => {
  return (
    <>
      <SEO 
        pageType="ladakh"
        customTitle="Classic Leh, Nubra Valley, Pangong, Tso Moriri & Hanle Holiday Package - 9N/10D"
        customDescription="Experience the ultimate Ladakh adventure with our 9 nights 10 days package covering Leh, Nubra Valley, Pangong Lake, Tso Moriri, and Hanle. Book now starting from ₹42,999."
        customKeywords={["Leh Ladakh package", "Nubra Valley tour", "Pangong Lake", "Tso Moriri", "Hanle", "9 days Ladakh tour"]}
        customImage={ladakhBg}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Classic Leh, Nubra Valley, Pangong, Tso Moriri & Hanle Holiday Package",
            "description": "Experience the ultimate Ladakh adventure with our 9 nights 10 days package covering Leh, Nubra Valley, Pangong Lake, Tso Moriri, and Hanle.",
            "image": ladakhBg,
            "offers": {
              "@type": "Offer",
              "price": "42999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-01-01",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "TravelAgency",
              "name": "Travel Wiki",
              "url": "https://travelwiki.org.in",
              "telephone": "+91 8899971960"
            },
            "duration": "P9DT10N",
            "touristType": ["Adventure Seekers", "Nature Lovers", "Photography Enthusiasts", "Cultural Explorers"]
          })}
        </script>
      </SEO>
      
      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ladakhBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Classic Leh, Nubra Valley, Pangong, Tso Moriri & Hanle Holiday Package
              </h1>
              <p className="text-xl">9 Nights / 10 Days</p>
            </div>
          </div>
        </div>

        {/* Package Details */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Experience the complete Ladakh adventure with our comprehensive 9 nights 10 days package. 
                  This carefully crafted itinerary takes you through the most spectacular destinations of Ladakh 
                  including the serene Nubra Valley, the stunning Pangong Lake, the pristine Tso Moriri, 
                  and the remote Hanle village famous for its astronomical observatory.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From Buddhist monasteries to high-altitude lakes, from sand dunes to snow-capped peaks, 
                  this package offers the perfect blend of adventure, culture, and natural beauty that 
                  Ladakh is renowned for.
                </p>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 1-2: Leh (2 Nights)</h3>
                    <p className="text-gray-700">
                      Arrival in Leh. Acclimatization day. Visit Leh Palace, Shanti Stupa, and local markets.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 3-4: Nubra Valley (2 Nights)</h3>
                    <p className="text-gray-700">
                      Drive to Nubra Valley via Khardung La Pass. Visit Diskit Monastery, sand dunes, and enjoy camel safari.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 5: Pangong Lake (1 Night)</h3>
                    <p className="text-gray-700">
                      Journey to the famous Pangong Lake. Enjoy the changing colors of the lake and overnight camping.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 6: Tso Moriri (1 Night)</h3>
                    <p className="text-gray-700">
                      Visit the pristine Tso Moriri Lake, one of the highest lakes in India.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 7: Hanle (1 Night)</h3>
                    <p className="text-gray-700">
                      Travel to Hanle village, visit the Indian Astronomical Observatory and enjoy stargazing.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 8-9: Leh (2 Nights)</h3>
                    <p className="text-gray-700">
                      Return to Leh. Visit Hemis Monastery, Thiksey Monastery, and shopping. Departure on Day 10.
                    </p>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Cab Transfer</h3>
                      <p className="text-gray-600 text-sm">All transfers and sightseeing by private vehicle</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Hotel Stay</h3>
                      <p className="text-gray-600 text-sm">Accommodation in comfortable hotels/camps</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Meals</h3>
                      <p className="text-gray-600 text-sm">Daily breakfast and dinner</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Sightseeing</h3>
                      <p className="text-gray-600 text-sm">All mentioned sightseeing and activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹42,999
                  </div>
                  <div className="text-gray-600">Per person</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Updated on: 18 February 2025
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">9N / 10D</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-semibold">May - Sep</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-semibold">2-20 People</span>
                  </div>
                </div>
                
                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Classic%20Leh%2C%20Nubra%20Valley%2C%20Pangong%2C%20Tso%20Moriri%20%26%20Hanle%20Holiday%20Package%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold block text-center">
                  Book Now
                </a>
                
                <div className="mt-4 text-center">
                  <a href="tel:+918899971960" className="text-blue-600 hover:underline">
                    📞 Call: +91 8899971960
                  </a>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Special Offer!</h3>
                  <p className="text-sm text-yellow-700">
                    Book now and get 10% discount on group bookings of 6+ people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassicLehNubraPangongTsoMoririHanlePackage;
