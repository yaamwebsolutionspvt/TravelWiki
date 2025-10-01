import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const tourPackages = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514637/travelwiki/assets/Honeymoon/kashmir-tour-pacakges.jpg";

export default function ScenicKashmirTour() {
  const seoData = useSEO({
    title: "Scenic Kashmir Tour | 6 Nights 7 Days Premium Honeymoon Package",
    description: "Experience scenic Kashmir with our premium 6 nights package. Extended stays in Srinagar houseboat, Pahalgam, Gulmarg with luxury arrangements. Starting at ₹23,999.",
    keywords: "scenic Kashmir tour, 6 nights Kashmir honeymoon, premium Kashmir package, extended Kashmir stay, luxury honeymoon Kashmir",
    canonical: "https://www.travelwiki.org.in/packages/scenic-kashmir-tour/"
  });

  const packageData = {
    name: "Scenic Kashmir Tour",
    description: "A premium scenic Kashmir tour with extended stays at each destination for a leisurely and comprehensive honeymoon experience.",
    price: "23999",
    originalPrice: "28799",
    duration: "7 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Cake, Candle Light Dinner & Fresh Fruit Basket",
      "2N Srinagar (1N Houseboat) + 2N Pahalgam + 2N Gulmarg",
      "11 scenic activities",
      "7 comfortable transfers"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[65vh] py-25 overflow-hidden bg-gradient-to-br from-pink-600 via-rose-600 to-red-600">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Scenic Kashmir Tour
              </h1>
              <p className="text-xl mb-8">
                Immerse yourself in Kashmir's scenic beauty with extended stays and premium experiences at every destination
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹23,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹28,799</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Scenic%20Kashmir%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-indigo-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">6 Nights / 7 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">6 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">11 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">7 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Premium Scenic Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Scenic Kashmir Tour offers extended stays at each destination, allowing you to truly absorb 
                the natural beauty and cultural richness of Kashmir. With 6 nights of premium accommodations 
                and 11 carefully curated activities, this tour provides ample time for relaxation and exploration.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience 2 nights each in Pahalgam and Gulmarg for deeper exploration, plus 2 nights in 
                Srinagar including a romantic houseboat stay. This leisurely pace ensures you don't miss 
                any of Kashmir's scenic wonders.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Scenic Kashmir Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Arrival in Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• VIP arrival at Srinagar Airport</li>
                    <li>• Check-in to luxury hotel in Srinagar</li>
                    <li>• Welcome ceremony with cake and fruit basket</li>
                    <li>• Evening leisure at Dal Lake Boulevard</li>
                    <li>• Special candlelight dinner</li>
                    <li>• Overnight stay in Srinagar hotel</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Srinagar to Houseboat</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast and sightseeing</li>
                    <li>• Romantic 01 Hour Shikara ride on Dal Lake</li>
                    <li>• Visit Mughal Gardens (Nishat, Shalimar, Chashme Shahi)</li>
                    <li>• Check-in to premium houseboat</li>
                    <li>• Sunset photography session</li>
                    <li>• Traditional dinner on houseboat</li>
                    <li>• Overnight stay in houseboat</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Journey to Pahalgam</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast on houseboat</li>
                    <li>• Scenic drive to Pahalgam with photo stops</li>
                    <li>• Check-in to premium resort in Pahalgam</li>
                    <li>• Visit Betab Valley and explore film locations</li>
                    <li>• Evening walks along Lidder River</li>
                    <li>• Overnight stay in Pahalgam</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 4: Pahalgam Extended Exploration</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early morning visit to Aru Valley</li>
                    <li>• Extended exploration of Chandanwari</li>
                    <li>• Horse riding or pony trekking to Baisaran</li>
                    <li>• Picnic lunch in scenic meadows</li>
                    <li>• Nature photography workshop</li>
                    <li>• Evening cultural program</li>
                    <li>• Overnight stay in Pahalgam</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 5: Gulmarg Adventure Day 1</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning drive to Gulmarg</li>
                    <li>• Check-in to luxury hotel in Gulmarg</li>
                    <li>• Gulmarg Gondola Phase 1 & 2 to Apharwat Peak</li>
                    <li>• Snow activities and skiing (seasonal)</li>
                    <li>• Visit the world's highest golf course</li>
                    <li>• Adventure sports and mountain biking</li>
                    <li>• Overnight stay in Gulmarg</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">⛷️ Day 6: Gulmarg Extended Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning alpine trekking</li>
                    <li>• Extended Gondola experience</li>
                    <li>• Visit St. Mary's Church</li>
                    <li>• Gulmarg Biosphere Reserve exploration</li>
                    <li>• Professional photography session</li>
                    <li>• Return to Srinagar for final night</li>
                    <li>• Overnight stay in Srinagar</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 7: Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Leisurely breakfast at hotel</li>
                    <li>• Final shopping at Lal Chowk</li>
                    <li>• Souvenir collection</li>
                    <li>• Departure transfer to airport</li>
                    <li>• Farewell with scenic memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scenic Highlights */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Scenic Tour Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Extended Stays</h4>
                  <p className="text-gray-600">2 nights each in Pahalgam and Gulmarg for deeper exploration</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography Focus</h4>
                  <p className="text-gray-600">Professional photography sessions at scenic locations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Complete Coverage</h4>
                  <p className="text-gray-600">Every major scenic spot with unhurried exploration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}