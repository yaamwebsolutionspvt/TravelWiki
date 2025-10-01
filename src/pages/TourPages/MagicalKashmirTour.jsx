import React from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
const kashmirTourism = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514594/travelwiki/assets/Bestseller/kashmir-tourism.jpg";

export default function MagicalKashmirTour() {
  const seoData = useSEO({
    title: "Magical Kashmir Tour Package 2025 | 4 Nights 5 Days Srinagar Pahalgam Gulmarg Tour ₹14,999",
    description: "Experience magical Kashmir with our 4N5D tour package covering Srinagar Dal Lake, Pahalgam valleys, Gulmarg skiing. Includes houseboat stay, shikara rides, Gondola ride. Best Kashmir tourism package at ₹14,999 with 17% discount.",
    keywords: "magical Kashmir tour, 4 nights Kashmir package, Kashmir tour 4N5D, Srinagar Pahalgam Gulmarg tour, Kashmir vacation package, Kashmir tourism, Kashmir holiday package, Dal Lake tour, Kashmir houseboat stay, Gulmarg Gondola, Pahalgam Betaab Valley, Kashmir shikara ride, Kashmir tour package 2025, best Kashmir tour, Kashmir travel package, Kashmir honeymoon package, Kashmir family tour, Kashmir adventure tour, Kashmir sightseeing tour, Kashmir cultural tour",
    canonical: "/packages/magical-kashmir-tour"
  });

  const packageData = {
    name: "Magical Kashmir Tour Package",
    description: "A magical journey through Kashmir's most beautiful destinations including Srinagar houseboats, Pahalgam valleys, and Gulmarg meadows in 4 nights 5 days.",
    price: "14999",
    originalPrice: "17999",
    duration: "5 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour to Chandanwari, Aru & Betab Valley in Pahalgam",
      "2N Srinagar (IN HB), 1N Pahalgam, 1N Gulmarg",
      "4 Hotels, 8 Activities, 5 Transfers",
      "Houseboat stay experience",
      "Gulmarg Gondola ride"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-visible bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
          <div className="relative container mx-auto px-4 py-16 sm:py-16 md:py-20 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center px-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Magical Kashmir Tour Package 2025
                <span className="block text-lg sm:text-2xl md:text-3xl font-medium mt-2 text-black">
                  4 Nights 5 Days | Srinagar • Pahalgam • Gulmarg
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed px-1" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Experience the enchanting beauty of Kashmir with our magical 4N5D tour package. Enjoy <Link to="/places-to-visit-in-srinagar" className="text-yellow-300 hover:text-yellow-200 underline">Dal Lake houseboat stays</Link>, 
                <Link to="/places-to-visit-in-pahalgam" className="text-yellow-300 hover:text-yellow-200 underline">Pahalgam's Betaab Valley</Link>, <Link to="/places-to-visit-in-gulmarg" className="text-yellow-300 hover:text-yellow-200 underline">Gulmarg Gondola rides</Link>, and authentic Kashmir experiences. Perfect for <Link to="/packages/kashmir-honeymoon-tour" className="text-yellow-300 hover:text-yellow-200 underline">couples</Link>, <Link to="/packages/kashmir-family-tour" className="text-yellow-300 hover:text-yellow-200 underline">families</Link>, and adventure seekers.
              </p>
              
              {/* Key highlights */}
              <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
                <span className="bg-blue-600 bg-opacity-80 px-3 py-2 rounded-full">🏞️ Dal Lake Houseboat</span>
                <span className="bg-green-600 bg-opacity-80 px-3 py-2 rounded-full">🚣 Shikara Rides</span>
                <span className="bg-purple-600 bg-opacity-80 px-3 py-2 rounded-full">🎿 Gulmarg Gondola</span>
                <span className="bg-orange-600 bg-opacity-80 px-3 py-2 rounded-full">🌸 Betaab Valley</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹14,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹17,999</span> <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Magical%20Kashmir%20Tour%20from%20Travel%20Wiki."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto text-center"
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
                <p className="text-gray-600">4 Nights / 5 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Accommodations</h3>
                <p className="text-gray-600">4 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">8 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">5 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Magical Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Discover the magical beauty of Kashmir with our carefully crafted 4 nights 5 days tour package. 
                This enchanting journey takes you through Kashmir's most picturesque destinations, offering a 
                perfect blend of natural beauty, cultural heritage, and adventure activities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From the serene houseboat experience in Srinagar to the adventure-filled slopes of Gulmarg, 
                and the pristine valleys of Pahalgam, this tour ensures you witness the true magic that makes 
                Kashmir the "Paradise on Earth".
              </p>
              <p className="text-gray-600 leading-relaxed">
                The package includes comfortable accommodations, delicious meals, experienced guides, and 
                all major sightseeing activities, making it an ideal choice for families, couples, and solo travelers 
                seeking an authentic Kashmir experience.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Detailed Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Srinagar (2 Nights - 1 Night Houseboat)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival at Srinagar Airport and transfer to houseboat</li>
                    <li>• 01 Hour magical Shikara ride on Dal Lake</li>
                    <li>• Visit to famous Mughal Gardens - Shalimar, Nishat, and Chashme Shahi</li>
                    <li>• Explore floating vegetable market in early morning</li>
                    <li>• Traditional houseboat stay experience</li>
                    <li>• Shopping at local handicraft markets</li>
                    <li>• Visit Jamia Masjid and old city exploration</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Pahalgam (1 Night)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Scenic drive to Pahalgam via Awantipora ruins</li>
                    <li>• Tour to Chandanwari - starting point of Amarnath Yatra</li>
                    <li>• Visit picturesque Aru Valley with its meadows</li>
                    <li>• Explore Betab Valley (named after Bollywood movie Betaab)</li>
                    <li>• Lidder River activities and nature walks</li>
                    <li>• Pony rides to scenic viewpoints</li>
                    <li>• Local trout fishing experience</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Gulmarg (1 Night)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Drive to Gulmarg - "Meadow of Flowers"</li>
                    <li>• Gulmarg Gondola Phase 1 & 2 (subject to weather)</li>
                    <li>• Visit Apharwat Peak for snow activities</li>
                    <li>• Golf course views and local walks</li>
                    <li>• Skiing and snow activities (winter season)</li>
                    <li>• Photography sessions in alpine meadows</li>
                    <li>• Visit St. Mary's Church</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Package Highlights */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Tour Highlights</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Houseboat Experience</h4>
                  <p className="text-gray-600">Unique stay in traditional Kashmir houseboats on Dal Lake</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gondola Adventure</h4>
                  <p className="text-gray-600">Thrilling cable car rides to Apharwat Peak in Gulmarg</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mughal Gardens</h4>
                  <p className="text-gray-600">Explore the historic and beautiful Mughal-era gardens</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibent text-gray-800 mb-2">Valley Tours</h4>
                  <p className="text-gray-600">Visit pristine valleys of Aru, Betab, and Chandanwari</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛶</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Shikara Rides</h4>
                  <p className="text-gray-600">Peaceful boat rides on the famous Dal Lake</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Immersion</h4>
                  <p className="text-gray-600">Experience authentic Kashmiri culture and cuisine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}