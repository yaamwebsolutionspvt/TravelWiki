import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const ct2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514607/travelwiki/assets/CulturalTours/ct2.png";

export default function KashmirOffbeatWithGurez() {
  const seoData = useSEO({
    title: "Kashmir Offbeat With Gurez | 7 Nights 8 Days Cultural Discovery Tour",
    description: "Explore Kashmir's hidden cultural treasures with extensive Gurez Valley experience. Discover offbeat destinations, authentic Dard traditions, and remote cultural sites. Starting at ₹26,999.",
    keywords: "Kashmir offbeat cultural tour, 7 nights Gurez tour, hidden Kashmir culture, offbeat Kashmir destinations, authentic cultural experience, remote Kashmir tours",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-offbeat-with-gurez/"
  });

  const packageData = {
    name: "Kashmir Offbeat Cultural Discovery Tour",
    description: "An extensive cultural exploration of Kashmir's offbeat destinations and hidden treasures, with deep immersion in Gurez Valley's pristine Dard culture and remote cultural sites.",
    price: "26999",
    originalPrice: "32399",
    duration: "8 days",
    destinations: ["Srinagar", "Gurez Valley", "Offbeat Cultural Sites"],
    highlights: [
      "01 Hr Shikara Ride",
      "Indian traditional lunch experiences",
      "Extended offbeat cultural exploration",
      "Remote village cultural immersion",
      "Traditional craft mastery sessions",
      "Hidden cultural heritage sites"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[65vh] py-24 overflow-hidden bg-gradient-to-br from-lime-600 via-green-600 to-emerald-600">
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Offbeat Cultural Discovery
              </h1>
              <p className="text-xl mb-8">
                Discover Kashmir's hidden cultural treasures and explore the authentic traditions of remote valleys and offbeat destinations
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹26,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹32,399</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Offbeat%20With%20Gurez%20tour%20from%20Travel%20Wiki."
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
                <div className="text-teal-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">7 Nights / 8 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🗺️</div>
                <h3 className="font-semibold text-gray-800">Exploration</h3>
                <p className="text-gray-600">Offbeat Destinations</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">12 Cultural</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Hidden Treasures</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Discover Kashmir's Hidden Cultural Gems</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on an extraordinary cultural expedition to Kashmir's most remote and offbeat destinations with 
                our comprehensive 7-night, 8-day discovery tour. This unique journey takes you beyond the typical 
                tourist trails to explore hidden cultural treasures, ancient traditions, and authentic tribal lifestyles.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With an extended stay in Srinagar and two full nights in pristine Gurez Valley, this tour offers the 
                most comprehensive cultural exploration available. Visit remote villages untouched by modernization, 
                interact with indigenous communities, and discover cultural practices that have remained unchanged for centuries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for serious cultural explorers, anthropology enthusiasts, and adventurous travelers seeking 
                authentic, undiluted cultural experiences. This tour requires a spirit of adventure and openness to 
                experiencing life in remote mountain communities.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Offbeat Cultural Discovery Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Srinagar Cultural Foundation</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival and check-in to traditional Kashmiri heritage hotel</li>
                    <li>• Cultural orientation with local cultural expert guide</li>
                    <li>• Visit lesser-known cultural sites and hidden heritage locations</li>
                    <li>• Explore traditional neighborhood communities</li>
                    <li>• Evening cultural immersion in old city's authentic atmosphere</li>
                    <li>• Traditional welcome dinner with local cultural storytelling</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Srinagar Offbeat Cultural Sites</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early morning 01 Hour cultural Shikara ride with local historians</li>
                    <li>• Visit offbeat historical sites and hidden architectural gems</li>
                    <li>• Explore traditional workshops in lesser-known neighborhoods</li>
                    <li>• Meet with master craftsmen in authentic working environments</li>
                    <li>• Traditional Indian lunch with local family in their home</li>
                    <li>• Visit cultural sites rarely accessed by regular tourists</li>
                    <li>• Evening cultural program with authentic folk performances</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏘️ Day 3: Extended Srinagar Cultural Exploration</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Full day dedicated to deep cultural exploration</li>
                    <li>• Visit traditional communities and cultural centers</li>
                    <li>• Participate in cultural workshops and learning sessions</li>
                    <li>• Meet cultural preservationists and tradition keepers</li>
                    <li>• Document cultural practices through photography and interaction</li>
                    <li>• Traditional cooking session with local cuisine masters</li>
                    <li>• Evening cultural reflection and preparation for remote journey</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌄 Day 4: Journey to Remote Cultural Heart</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early departure for remote cultural expedition to Gurez</li>
                    <li>• Scenic cultural route with stops at traditional mountain villages</li>
                    <li>• Interact with pastoral communities along the route</li>
                    <li>• Experience changing cultural influences with altitude</li>
                    <li>• Check-in to authentic local accommodation in Gurez</li>
                    <li>• Traditional Dard welcome ceremony by community elders</li>
                    <li>• First evening of authentic Gurez cultural experience</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 5: Deep Gurez Cultural Immersion</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Full day dedicated to Dard culture exploration</li>
                    <li>• Visit ancient cultural sites and traditional architecture</li>
                    <li>• Participate in traditional daily activities with locals</li>
                    <li>• Learn traditional crafts and cultural practices</li>
                    <li>• Share meals with local families and learn cooking traditions</li>
                    <li>• Evening cultural program with traditional music and stories</li>
                    <li>• Overnight in traditional accommodation with community</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎭 Day 6: Advanced Cultural Discovery</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Extended cultural exploration of remote Gurez areas</li>
                    <li>• Visit cultural sites accessible only to dedicated explorers</li>
                    <li>• Advanced cultural workshops and skill learning</li>
                    <li>• Meet with tribal elders and cultural knowledge keepers</li>
                    <li>• Participate in cultural preservation activities</li>
                    <li>• Cultural documentation and authentic experience sharing</li>
                    <li>• Final evening celebration with community</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 7: Cultural Integration & Return</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Farewell ceremony with Gurez community</li>
                    <li>• Cultural certificate presentation from community leaders</li>
                    <li>• Return journey with cultural reflection and integration</li>
                    <li>• Check-in to Srinagar for cultural summary session</li>
                    <li>• Visit final cultural sites and complete experience</li>
                    <li>• Traditional farewell dinner with complete cultural program</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 8: Cultural Conclusion & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final morning cultural activities and shopping</li>
                    <li>• Complete cultural experience evaluation and sharing</li>
                    <li>• Purchase authentic cultural artifacts and handmade items</li>
                    <li>• Cultural documentation completion and memory preservation</li>
                    <li>• Departure with deep cultural insights and lasting memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Offbeat Cultural Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Offbeat Cultural Discovery Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Hidden Destinations</h4>
                  <p className="text-gray-600">Access to remote cultural sites rarely visited by tourists</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏘️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Authentic Villages</h4>
                  <p className="text-gray-600">Extended stays in traditional communities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Community Integration</h4>
                  <p className="text-gray-600">Deep interaction with local communities and elders</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Traditional Mastery</h4>
                  <p className="text-gray-600">Advanced workshops with master craftsmen</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📜</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Preservation</h4>
                  <p className="text-gray-600">Participate in cultural heritage preservation activities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Education</h4>
                  <p className="text-gray-600">Comprehensive cultural learning and certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}