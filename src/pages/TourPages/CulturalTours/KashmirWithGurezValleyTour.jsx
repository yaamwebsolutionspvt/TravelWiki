import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const ct1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514604/travelwiki/assets/CulturalTours/ct1.jpg";

export default function KashmirWithGurezValleyTour() {
  const seoData = useSEO({
    title: "Kashmir With Gurez Valley Tour | 5 Nights 6 Days Cultural Heritage Experience",
    description: "Comprehensive cultural tour combining Kashmir's heritage sites with pristine Gurez Valley. Experience Dard culture, traditional crafts, and authentic Kashmiri lifestyle. Starting at ₹19,999.",
    keywords: "Kashmir Gurez Valley tour, 5 nights cultural Kashmir, heritage tour Kashmir, Dard culture experience, Kashmir cultural heritage, traditional Kashmir tour",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-with-gurez-valley-tour/"
  });

  const packageData = {
    name: "Kashmir With Gurez Valley Cultural Tour",
    description: "A comprehensive cultural journey combining Kashmir's rich heritage with the pristine Gurez Valley experience, showcasing traditional crafts, authentic cuisine, and diverse cultural practices.",
    price: "19999",
    originalPrice: "23999",
    duration: "6 days",
    destinations: ["Srinagar", "Gurez Valley"],
    highlights: [
      "01 Hr Shikara Ride",
      "Indian traditional lunch experiences",
      "Extended Gurez Valley cultural immersion",
      "Heritage site visits in Srinagar",
      "Traditional craft workshops",
      "Multi-cultural festival experiences"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Kashmir With Gurez Valley Cultural Tour
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                A comprehensive cultural journey through Kashmir's heritage sites and the pristine Dard culture of Gurez Valley
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹19,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹23,999</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20With%20Gurez%20Valley%20Cultural%20Tour%20from%20Travel%20Wiki."
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
                <p className="text-gray-600">5 Nights / 6 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🏛️</div>
                <h3 className="font-semibold text-gray-800">Heritage</h3>
                <p className="text-gray-600">Multiple Sites</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">10 Cultural</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🏠</div>
                <h3 className="font-semibold text-gray-800">Stays</h3>
                <p className="text-gray-600">5 Accommodations</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Complete Kashmir Cultural Heritage</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the most comprehensive cultural journey through Kashmir with our 5-night, 6-day heritage 
                tour. This package perfectly combines the rich cultural heritage of Srinagar with the pristine Dard 
                culture of Gurez Valley, offering a complete perspective of Kashmir's diverse cultural landscape.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From ancient Mughal gardens and traditional handicraft centers to remote Gurez Valley's untouched 
                Dard communities, this tour covers the entire spectrum of Kashmiri culture. Experience traditional 
                craft-making, authentic cuisine, folk performances, and religious diversity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ideal for culture enthusiasts, heritage lovers, and travelers seeking deep insights into Kashmir's 
                multi-faceted cultural identity. This extended tour allows for meaningful interactions with local 
                communities and artisans.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Heritage Cultural Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Srinagar Heritage Introduction</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Grand arrival at Srinagar and check-in to heritage hotel</li>
                    <li>• Traditional Kashmiri welcome with Kahwa and local sweets</li>
                    <li>• Cultural orientation session about Kashmir's diverse heritage</li>
                    <li>• Visit Shankaracharya Temple for spiritual cultural experience</li>
                    <li>• Explore Jamia Masjid and experience Islamic architecture</li>
                    <li>• Evening cultural walk through old city and traditional bazaars</li>
                    <li>• Traditional dinner with live Kashmiri folk music</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Srinagar Cultural Deep Dive</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Heritage 01 Hour Shikara ride with cultural storytelling</li>
                    <li>• Visit to all major Mughal Gardens with historical narratives</li>
                    <li>• Traditional handicraft workshop visits - carpet, shawl, paper mache</li>
                    <li>• Interact with master artisans and learn craft techniques</li>
                    <li>• Traditional Indian lunch with authentic Wazwan preparation</li>
                    <li>• Visit Kashmir Government Arts Emporium for cultural shopping</li>
                    <li>• Evening cultural program with Rouf dance performance</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚗 Day 3: Journey to Gurez Cultural Heart</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early departure for cultural expedition to Gurez Valley</li>
                    <li>• Scenic cultural route via Bandipora with village stops</li>
                    <li>• Interact with different communities along the mountain route</li>
                    <li>• Check-in to traditional guesthouse in Gurez</li>
                    <li>• Introduction to Dard culture and community leaders</li>
                    <li>• Traditional welcome ceremony by local Dard community</li>
                    <li>• Authentic dinner with folk songs and cultural stories</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌄 Day 4: Gurez Cultural Immersion</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Full day dedicated to Dard culture exploration</li>
                    <li>• Visit traditional wooden houses and architectural heritage</li>
                    <li>• Participate in traditional craft making with local artisans</li>
                    <li>• Learn about traditional farming and seasonal cultural practices</li>
                    <li>• Traditional lunch prepared by community women</li>
                    <li>• Visit local cultural center and meet tribal elders</li>
                    <li>• Evening cultural bonfire with traditional songs and dances</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 5: Cultural Integration & Return</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final cultural interaction and farewell ceremony</li>
                    <li>• Purchase authentic cultural handicrafts and souvenirs</li>
                    <li>• Cultural documentation and photography session</li>
                    <li>• Scenic return journey to Srinagar with cultural reflection</li>
                    <li>• Check-in to Srinagar hotel and cultural summary session</li>
                    <li>• Traditional farewell dinner with cultural program</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 6: Cultural Farewell & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final breakfast with cultural experience sharing</li>
                    <li>• Last-minute cultural shopping at traditional markets</li>
                    <li>• Cultural certificate presentation ceremony</li>
                    <li>• Departure transfer with cultural memories and insights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cultural Heritage Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Cultural Heritage Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Heritage Sites</h4>
                  <p className="text-gray-600">Comprehensive coverage of Kashmir's historical and cultural monuments</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Diverse Cultures</h4>
                  <p className="text-gray-600">Experience Kashmiri, Dard, and multicultural influences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Master Artisans</h4>
                  <p className="text-gray-600">Learn from traditional craftsmen and participate in workshops</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Culinary Heritage</h4>
                  <p className="text-gray-600">Authentic traditional meals and cooking demonstrations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎵</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Folk Traditions</h4>
                  <p className="text-gray-600">Live cultural performances and traditional music</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📜</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Education</h4>
                  <p className="text-gray-600">Deep insights into Kashmir's rich cultural history</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}