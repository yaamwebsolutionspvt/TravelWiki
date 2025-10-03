import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
const gandolaRide = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514591/travelwiki/assets/Bestseller/gandola-ride-kashmir.jpg";

export default function MagnificentKashmirValleyTour() {
  const seoData = useSEO({
    title: "Magnificent Kashmir Valley Tour | 6 Nights 7 Days Ultimate Kashmir Experience",
    description: "Experience the magnificent beauty of Kashmir valley with our 6 nights 7 days comprehensive tour. Visit Srinagar, Pahalgam, Gulmarg with houseboat stays at ₹19,999.",
    keywords: "magnificent Kashmir tour, 6 nights Kashmir package, Kashmir valley tour 6N7D, ultimate Kashmir experience, comprehensive Kashmir package",
    canonical: "https://www.travelwiki.org.in/packages/magnificent-kashmir-valley-tour/"
  });

  const packageData = {
    name: "Magnificent Kashmir Valley Tour Package",
    description: "The most magnificent and comprehensive Kashmir valley tour with extended stays, premium experiences, and complete coverage of all major destinations.",
    price: "19999",
    originalPrice: "23999",
    duration: "7 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour to Chandanwari, Aru & Betab Valley in Pahalgam",
      "2N Srinagar, 2N Pahalgam, 1N Gulmarg, 1N Srinagar HB",
      "6 Hotels, 11 Activities, 7 Transfers",
      "Extended stays in all destinations",
      "Premium houseboat experience"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div
          className="relative text-white h-[75vh] overflow-hidden"
          style={{
            backgroundImage: `url(${gandolaRide})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Magnificent Kashmir Valley Tour
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Experience the magnificent grandeur of Kashmir valley with our most comprehensive 6 nights 7 days tour covering every beautiful corner of paradise
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹19,999</span>
                  <span className="text-lg ml-2 text-gray-600">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-500">₹23,999</span> <span className="text-green-300">20% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Magnificent%20Kashmir%20Valley%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-purple-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">6 Nights / 7 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Accommodations</h3>
                <p className="text-gray-600">6 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">11 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">7 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Magnificent Kashmir Valley Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Immerse yourself in the magnificent beauty of Kashmir valley with our most comprehensive and luxurious 
                6 nights 7 days tour package. This magnificent journey is designed for discerning travelers who want 
                to experience every facet of Kashmir's natural splendor and cultural richness.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With extended stays in each destination, you'll have the luxury of time to truly appreciate Kashmir's 
                magnificent landscapes, from the serene houseboats of Srinagar to the alpine meadows of Gulmarg and 
                the pristine valleys of Pahalgam. The tour includes premium accommodations and exclusive experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This magnificent package offers the perfect balance of adventure, relaxation, cultural immersion, and 
                natural beauty exploration, making it ideal for families, couples, and groups seeking a comprehensive 
                Kashmir experience.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Magnificent Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Srinagar (2 Nights)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival at Srinagar and check-in to premium hotel</li>
                    <li>• Welcome 01 Hour Shikara ride on magnificent Dal Lake</li>
                    <li>• Comprehensive tour of all Mughal Gardens</li>
                    <li>• Visit Hazratbal Shrine and Jamia Masjid</li>
                    <li>• Explore Shankaracharya Temple for panoramic views</li>
                    <li>• Traditional handicraft shopping in old bazaars</li>
                    <li>• Cultural evening with traditional music and dance</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Pahalgam (2 Nights)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Scenic drive to Pahalgam with multiple photo stops</li>
                    <li>• Day 1: Complete tour of Chandanwari and surrounding areas</li>
                    <li>• Extended exploration of Aru Valley with leisure time</li>
                    <li>• Visit magnificent Betab Valley and Mini Switzerland</li>
                    <li>• Day 2: Adventure day with trekking and river activities</li>
                    <li>• Pony trekking to Baisaran meadows</li>
                    <li>• Golf at Pahalgam Golf Course (seasonal)</li>
                    <li>• Nature walks along Lidder River</li>
                    <li>• Village visits and local cultural interactions</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Gulmarg (1 Night)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Drive to magnificent Gulmarg meadows</li>
                    <li>• Gulmarg Gondola Phase 1 & 2 to Apharwat Peak</li>
                    <li>• Snow activities and skiing (winter season)</li>
                    <li>• Comprehensive exploration of Gulmarg biosphere</li>
                    <li>• Visit world's highest golf course</li>
                    <li>• Alpine trekking and nature photography</li>
                    <li>• Visit St. Mary's Church and local attractions</li>
                    <li>• Adventure sports and mountain biking</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏠 Srinagar Houseboat (1 Night)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Return to Srinagar and check-in to premium houseboat</li>
                    <li>• Sunset Shikara ride with photography session</li>
                    <li>• Traditional Wazwan dinner experience</li>
                    <li>• Evening leisure on houseboat deck</li>
                    <li>• Early morning floating market visit</li>
                    <li>• Final shopping and souvenir collection</li>
                    <li>• Departure transfer to airport</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Magnificent Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Magnificent Tour Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Accommodations</h4>
                  <p className="text-gray-600">Carefully selected premium hotels and luxury houseboats</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🗻</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Complete Valley Coverage</h4>
                  <p className="text-gray-600">Extended stays in all major Kashmir destinations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Immersion</h4>
                  <p className="text-gray-600">Deep cultural experiences with local traditions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Adventure Activities</h4>
                  <p className="text-gray-600">Comprehensive adventure and recreational activities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gourmet Experiences</h4>
                  <p className="text-gray-600">Traditional Kashmiri cuisine and fine dining</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography Excellence</h4>
                  <p className="text-gray-600">Perfect opportunities for magnificent landscape photography</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}