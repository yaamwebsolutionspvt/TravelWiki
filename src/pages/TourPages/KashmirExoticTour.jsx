import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
const dalLake = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514589/travelwiki/assets/Bestseller/exotic_tour.jpg";

export default function KashmirExoticTour() {
  const seoData = useSEO({
    title: "Kashmir Exotic Tour Package | 5 Nights 6 Days Complete Kashmir Experience",
    description: "Comprehensive Kashmir exotic tour covering Srinagar, Pahalgam, and Gulmarg in 5 nights. Houseboat stays, valley tours, and adventure activities at ₹16,999.",
    keywords: "Kashmir exotic tour, 5 nights Kashmir package, Kashmir tour 5N6D, exotic Kashmir experience, comprehensive Kashmir tour",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-exotic-tour/"
  });

  const packageData = {
    name: "Kashmir Exotic Tour Package",
    description: "An exotic and comprehensive Kashmir tour covering all major destinations with extended stays for deeper exploration of Kashmir's natural beauty.",
    price: "16999",
    originalPrice: "20399",
    duration: "6 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour to Chandanwari, Aru & Betab Valley in Pahalgam",
      "2N Srinagar (IN HB), 2N Pahalgam, 1N Gulmarg",
      "5 Hotels, 9 Activities, 6 Transfers",
      "Extended Pahalgam stay (2 nights)",
      "Houseboat experience"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Kashmir Exotic Tour Package
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Indulge in an exotic Kashmir experience with extended stays in paradise. 5 nights of comprehensive exploration across Kashmir's most beautiful destinations
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹16,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹20,399</span> <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Exotic%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-green-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">5 Nights / 6 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Accommodations</h3>
                <p className="text-gray-600">5 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">9 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">6 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Exotic Kashmir Adventure</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on an exotic Kashmir journey that offers extended exploration of the valley's most magnificent 
                destinations. This 5 nights 6 days tour is designed for travelers who want to experience Kashmir in 
                its full glory with deeper immersion into each location.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With an extended 2-night stay in Pahalgam, you'll have ample time to explore the pristine valleys, 
                engage in adventure activities, and truly connect with Kashmir's natural beauty. The tour combines 
                the tranquility of houseboat stays with the excitement of mountain adventures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This exotic package is perfect for nature lovers, photography enthusiasts, and adventure seekers 
                who want to experience the complete essence of Kashmir without rushing through the destinations.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Exotic Kashmir Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Srinagar (2 Nights - 1 Night Houseboat)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival and transfer to traditional Kashmir houseboat</li>
                    <li>• 01 Hour exotic Shikara ride exploring Dal Lake's hidden corners</li>
                    <li>• Comprehensive tour of Mughal Gardens - Shalimar, Nishat, Chashme Shahi</li>
                    <li>• Early morning floating vegetable market experience</li>
                    <li>• Visit Hazratbal Shrine and Jamia Masjid</li>
                    <li>• Explore local handicraft workshops and artisan centers</li>
                    <li>• Traditional Kashmiri Wazwan cuisine experience</li>
                    <li>• Sunset photography at Boulevard Road</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Pahalgam Extended Stay (2 Nights)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Scenic drive to Pahalgam with stops at Awantipora ruins</li>
                    <li>• Day 1: Comprehensive tour to Chandanwari glacier point</li>
                    <li>• Extended exploration of Aru Valley with picnic lunch</li>
                    <li>• Visit Betab Valley and Mini Switzerland</li>
                    <li>• Day 2: Adventure activities - white water rafting (seasonal)</li>
                    <li>• Pony trekking to Baisaran meadows (Mini Switzerland)</li>
                    <li>• Lidder River nature walks and trout fishing</li>
                    <li>• Local village visits and cultural interactions</li>
                    <li>• Photography sessions in pristine landscapes</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Gulmarg (1 Night)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Drive to Gulmarg through scenic pine forests</li>
                    <li>• Gulmarg Gondola Phase 1 & 2 to Apharwat Peak</li>
                    <li>• Snow activities and skiing (winter season)</li>
                    <li>• Alpine walking trails and meadow exploration</li>
                    <li>• Visit to world's highest golf course (summer)</li>
                    <li>• St. Mary's Church and local market exploration</li>
                    <li>• Adventure activities - ATV rides and horse riding</li>
                    <li>• Sunset views from Apharwat Peak</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Package Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Exotic Tour Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Extended Valley Exploration</h4>
                  <p className="text-gray-600">2 full nights in Pahalgam for comprehensive valley tours</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Authentic Houseboat Stay</h4>
                  <p className="text-gray-600">Experience traditional Kashmir living on Dal Lake</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Adventure Activities</h4>
                  <p className="text-gray-600">Rafting, trekking, skiing, and mountain adventures</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography Tours</h4>
                  <p className="text-gray-600">Dedicated time for capturing exotic landscapes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Culinary Experiences</h4>
                  <p className="text-gray-600">Traditional Wazwan and authentic Kashmiri cuisine</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🧘</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Wellness & Relaxation</h4>
                  <p className="text-gray-600">Peaceful moments in nature for complete rejuvenation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}