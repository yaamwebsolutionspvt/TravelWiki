import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const ct3 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514608/travelwiki/assets/CulturalTours/ct3.png";

export default function TrueGemsOfKashmirValley() {
  const seoData = useSEO({
    title: "True Gems Of Kashmir Valley | 8 Nights 9 Days Ultimate Cultural Experience",
    description: "The most comprehensive Kashmir cultural tour with premium experiences, extended Gurez Valley stay, and complete heritage coverage. Discover Kashmir's true cultural gems. Starting at ₹31,999.",
    keywords: "Kashmir cultural gems tour, 8 nights premium cultural experience, comprehensive Kashmir heritage, ultimate cultural tour, Kashmir cultural treasures, premium heritage tour",
    canonical: "https://www.travelwiki.org.in/packages/true-gems-of-kashmir-valley/"
  });

  const packageData = {
    name: "True Gems Of Kashmir Valley Cultural Tour",
    description: "The ultimate cultural experience showcasing Kashmir's true gems - from ancient heritage sites to pristine tribal cultures, comprehensive craft mastery, and premium cultural immersion.",
    price: "31999",
    originalPrice: "38399",
    duration: "9 days",
    destinations: ["Srinagar", "Gurez Valley", "Cultural Heritage Sites"],
    highlights: [
      "01 Hr Shikara Ride",
      "Indian traditional lunch experiences",
      "Premium cultural experiences and workshops",
      "Extended heritage site coverage",
      "Master craftsman training sessions",
      "Exclusive cultural access and ceremonies"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-red-600">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                True Gems Of Kashmir Valley
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                The ultimate cultural journey revealing Kashmir's most precious cultural treasures and hidden heritage gems
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹31,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹38,399</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20True%20Gems%20Of%20Kashmir%20Valley%20tour%20from%20Travel%20Wiki."
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
                <div className="text-amber-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">8 Nights / 9 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-amber-600 text-3xl mb-2">💎</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">True Cultural Gems</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-amber-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">14 Premium Cultural</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-amber-600 text-3xl mb-2">👑</div>
                <h3 className="font-semibold text-gray-800">Level</h3>
                <p className="text-gray-600">Ultimate Premium</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Discover Kashmir's True Cultural Gems</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on the most comprehensive and luxurious cultural journey through Kashmir with our ultimate 
                8-night, 9-day "True Gems" tour. This premium experience reveals the most precious cultural treasures 
                of Kashmir Valley, combining extensive heritage exploration with the deepest cultural immersion possible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With extended stays in both Srinagar and Gurez Valley, this tour offers unprecedented access to Kashmir's 
                cultural heritage. From ancient monuments and master craftsmen to pristine tribal cultures and exclusive 
                cultural ceremonies, experience every facet of Kashmir's rich cultural tapestry with expert guidance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for serious cultural connoisseurs, heritage enthusiasts, and travelers seeking the most 
                comprehensive cultural experience available. This premium tour includes exclusive access to cultural 
                sites, private sessions with master artisans, and cultural experiences unavailable to regular tourists.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ultimate Cultural Gems Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Royal Cultural Welcome</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• VIP arrival and check-in to premium heritage palace hotel</li>
                    <li>• Royal welcome ceremony with traditional Kashmiri hospitality</li>
                    <li>• Personal cultural concierge assignment and orientation</li>
                    <li>• Private introduction to Kashmir's cultural heritage overview</li>
                    <li>• Exclusive evening cultural program with master performers</li>
                    <li>• Gourmet traditional dinner with cultural storytelling</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Premium Heritage Exploration</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Luxury 01 Hour Shikara ride with cultural historian guide</li>
                    <li>• Private tours of all major heritage sites with expert narration</li>
                    <li>• Exclusive access to restricted cultural areas</li>
                    <li>• Premium workshops with renowned master craftsmen</li>
                    <li>• Traditional Indian lunch in heritage setting</li>
                    <li>• Private cultural museum tours with curator guidance</li>
                    <li>• Evening premium cultural performance with documentation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎨 Day 3: Master Craftsman Intensive</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Full day dedicated to premium craft mastery</li>
                    <li>• Private sessions with legendary master artisans</li>
                    <li>• Advanced workshops in carpet weaving, shawl making, papier-mâché</li>
                    <li>• Create personal masterpieces under expert guidance</li>
                    <li>• Traditional lunch with artisan families</li>
                    <li>• Cultural documentation and certification processes</li>
                    <li>• Evening celebration of craft achievements</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏘️ Day 4: Extended Srinagar Cultural Deep Dive</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Comprehensive exploration of Srinagar's cultural neighborhoods</li>
                    <li>• Visit cultural preservation centers and traditional communities</li>
                    <li>• Meet with cultural scholars and heritage preservation experts</li>
                    <li>• Advanced cultural learning sessions and knowledge sharing</li>
                    <li>• Traditional cooking masterclass with renowned chefs</li>
                    <li>• Cultural impact documentation and scholarly discussions</li>
                    <li>• Premium cultural evening with diverse performances</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌄 Day 5: Premium Journey to Cultural Paradise</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Luxury convoy departure for exclusive Gurez Valley experience</li>
                    <li>• Premium cultural route with exclusive village visits</li>
                    <li>• VIP reception by Gurez community leaders</li>
                    <li>• Check-in to exclusive cultural accommodation</li>
                    <li>• Traditional Dard welcome ceremony with community elders</li>
                    <li>• Premium cultural orientation and community integration</li>
                    <li>• Exclusive evening cultural program with tribal performances</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 6: Ultimate Gurez Cultural Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Full day premium Dard culture immersion</li>
                    <li>• Exclusive access to ancient cultural sites and traditions</li>
                    <li>• Master-level workshops in traditional Dard crafts</li>
                    <li>• Premium cultural ceremonies and blessing rituals</li>
                    <li>• Traditional feast with entire community participation</li>
                    <li>• Cultural knowledge transfer sessions with tribal elders</li>
                    <li>• Exclusive evening celebration with cultural achievements</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">💎 Day 7: Cultural Gems Discovery</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Exclusive exploration of Gurez's hidden cultural treasures</li>
                    <li>• Access to cultural sites available only to premium travelers</li>
                    <li>• Advanced cultural workshops and skill mastery</li>
                    <li>• Cultural preservation project participation</li>
                    <li>• Premium cultural documentation and memory creation</li>
                    <li>• Master-level cultural achievement certification</li>
                    <li>• Grand farewell ceremony with community honors</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 8: Cultural Integration & Royal Return</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final cultural ceremonies and blessing rituals</li>
                    <li>• Cultural ambassador recognition and honors</li>
                    <li>• Luxury return journey with cultural reflection</li>
                    <li>• Check-in to royal suite for cultural culmination</li>
                    <li>• Premium cultural evaluation and achievement recognition</li>
                    <li>• Grand finale dinner with complete cultural program</li>
                    <li>• Cultural legacy documentation and presentation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 9: Cultural Legacy & Royal Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final morning cultural activities and ceremonies</li>
                    <li>• Premium cultural shopping with personal consultant</li>
                    <li>• Cultural achievement portfolio completion</li>
                    <li>• Master craftsman certificates and cultural awards presentation</li>
                    <li>• Royal departure with cultural ambassadorship recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* True Gems Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">True Cultural Gems Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusive Cultural Access</h4>
                  <p className="text-gray-600">Premium access to Kashmir's most precious cultural treasures</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👑</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Royal Treatment</h4>
                  <p className="text-gray-600">VIP cultural experiences with personal concierge service</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Master Artisan Training</h4>
                  <p className="text-gray-600">Advanced workshops with legendary master craftsmen</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Certification</h4>
                  <p className="text-gray-600">Master-level cultural achievement recognition</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📜</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Ambassadorship</h4>
                  <p className="text-gray-600">Recognition as cultural ambassador with lasting legacy</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Performances</h4>
                  <p className="text-gray-600">Exclusive cultural programs and master performances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}