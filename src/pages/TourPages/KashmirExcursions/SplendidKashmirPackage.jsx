import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const ex1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514614/travelwiki/assets/Excursion/ex1.png";

export default function SplendidKashmirPackage() {
  const seoData = useSEO({
    title: "Splendid Kashmir Package | 7 Nights 8 Days Complete Kashmir Excursion",
    description: "Experience the splendid beauty of Kashmir with our comprehensive 7-night excursion covering Srinagar, Pahalgam, Gulmarg, and Sonamarg. Complete valley exploration at ₹25,999.",
    keywords: "splendid Kashmir package, 7 nights Kashmir tour, complete Kashmir excursion, Pahalgam Gulmarg Sonamarg tour, comprehensive Kashmir holiday",
    canonical: "https://www.travelwiki.org.in/packages/splendid-kashmir-package/"
  });

  const packageData = {
    name: "Splendid Kashmir Complete Excursion Package",
    description: "A comprehensive and splendid journey through all major Kashmir destinations, offering the perfect blend of natural beauty, adventure activities, and cultural experiences.",
    price: "25999",
    originalPrice: "31199",
    duration: "8 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg", "Sonamarg"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Complete Tour of Pahalgam Valley",
      "Gulmarg Gondola and ski activities",
      "Sonamarg glacier experience",
      "All major valley destinations covered",
      "Premium accommodation throughout"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Splendid Kashmir Package
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Experience the most splendid and comprehensive Kashmir excursion covering all major valley destinations in 7 magnificent nights
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹25,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹31,199</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Splendid%20Kashmir%20Package%20from%20Travel%20Wiki."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Package Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quick Details */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">7 Nights / 8 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Destinations</h3>
                <p className="text-gray-600">4 Major Valleys</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">12 Excursions</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">7 Accommodations</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Complete Splendid Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on the most splendid and comprehensive Kashmir excursion with our meticulously crafted 7-night, 
                8-day package. This extraordinary journey covers all four major valley destinations - Srinagar, Pahalgam, 
                Gulmarg, and Sonamarg - ensuring you experience the complete splendor of Kashmir's diverse landscapes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From the tranquil houseboats of Srinagar to the meadows of Pahalgam, from the ski slopes of Gulmarg 
                to the glaciers of Sonamarg, this splendid package offers the perfect balance of relaxation, adventure, 
                and natural beauty exploration. Each destination reveals a different facet of Kashmir's magnificent character.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ideal for families, couples, and groups seeking the ultimate Kashmir experience, this splendid excursion 
                provides comprehensive coverage without rushing, allowing time to truly appreciate each destination's 
                unique beauty and charm.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Splendid Excursion Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Splendid Srinagar Arrival</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Grand arrival at Srinagar Airport and warm welcome</li>
                    <li>• Check-in to premium hotel with splendid valley views</li>
                    <li>• Welcome refreshments and orientation session</li>
                    <li>• Evening leisure time to acclimatize and relax</li>
                    <li>• Traditional Kashmiri dinner at hotel</li>
                    <li>• Overnight stay in Srinagar with valley ambiance</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Splendid Srinagar Exploration</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning splendid 01 Hour Shikara ride on Dal Lake</li>
                    <li>• Visit to magnificent Mughal Gardens - Shalimar, Nishat, Chashme Shahi</li>
                    <li>• Exploration of Shankaracharya Temple for panoramic valley views</li>
                    <li>• Tour of local handicraft centers and Kashmir specialties</li>
                    <li>• Evening free time for shopping at Lal Chowk</li>
                    <li>• Overnight stay in Srinagar</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Journey to Splendid Pahalgam</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning departure for scenic drive to Pahalgam</li>
                    <li>• En route visit to Awantipora ruins and saffron fields</li>
                    <li>• Check-in to hotel in Pahalgam with river views</li>
                    <li>• Afternoon at leisure to enjoy Pahalgam's natural beauty</li>
                    <li>• Evening walk along Lidder River</li>
                    <li>• Overnight stay in splendid Pahalgam surroundings</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 4: Complete Tour of Pahalgam Valley</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Full day excursion to Betab Valley and Aru Valley</li>
                    <li>• Visit to Chandanwari (starting point of Amarnath Yatra)</li>
                    <li>• Splendid views of snow-capped mountains and glaciers</li>
                    <li>• Optional pony rides and nature photography</li>
                    <li>• Picnic lunch amidst beautiful valley scenery</li>
                    <li>• Return to hotel for evening rest and relaxation</li>
                    <li>• Overnight stay in Pahalgam</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 5: Splendid Gulmarg Adventure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning drive to Gulmarg, the "Meadow of Flowers"</li>
                    <li>• Check-in to hotel with splendid meadow views</li>
                    <li>• Gulmarg Gondola ride to Apharwat Peak (Phase 1 & 2)</li>
                    <li>• Snow activities and skiing (seasonal)</li>
                    <li>• Visit to world's highest golf course</li>
                    <li>• Evening leisure time in splendid meadow surroundings</li>
                    <li>• Overnight stay in Gulmarg</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">❄️ Day 6: Sonamarg - The Golden Meadow</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early morning drive to splendid Sonamarg</li>
                    <li>• Experience the "Golden Meadow" with its pristine beauty</li>
                    <li>• Visit Thajiwas Glacier with pony rides</li>
                    <li>• Enjoy splendid views of snow-capped peaks</li>
                    <li>• Photography and nature appreciation time</li>
                    <li>• Check-in to accommodation in Sonamarg</li>
                    <li>• Overnight stay with mountain serenity</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 7: Return to Splendid Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning return journey to Srinagar</li>
                    <li>• Check-in to hotel or houseboat for final night</li>
                    <li>• Visit any missed attractions or shopping</li>
                    <li>• Final Shikara ride during golden sunset</li>
                    <li>• Farewell dinner with traditional Wazwan cuisine</li>
                    <li>• Overnight stay in Srinagar</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 8: Splendid Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final breakfast with splendid valley views</li>
                    <li>• Last-minute shopping for Kashmir specialties</li>
                    <li>• Transfer to Srinagar Airport for departure</li>
                    <li>• Departure with splendid memories of complete Kashmir</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Splendid Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Splendid Package Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Complete Valley Coverage</h4>
                  <p className="text-gray-600">All four major Kashmir destinations in one splendid journey</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎿</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Adventure Activities</h4>
                  <p className="text-gray-600">Gondola rides, skiing, glacier visits, and more</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Accommodation</h4>
                  <p className="text-gray-600">Carefully selected hotels with splendid views</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography Paradise</h4>
                  <p className="text-gray-600">Endless opportunities for splendid landscape photography</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Culinary Delights</h4>
                  <p className="text-gray-600">Traditional Kashmiri cuisine and local specialties</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Comfortable Transport</h4>
                  <p className="text-gray-600">All transfers included with comfortable vehicles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}