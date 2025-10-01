import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const ct4 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514610/travelwiki/assets/CulturalTours/ct4.png";

export default function KashmirWithKargil() {
  const seoData = useSEO({
    title: "Kashmir With Kargil | 6 Nights 7 Days Multi-Cultural Heritage Tour",
    description: "Explore Kashmir's diverse cultural landscape from Srinagar to Kargil, covering Sonmarg and Gulmarg. Experience Kashmiri, Balti, and Ladakhi cultures in one tour. Starting at ₹22,999.",
    keywords: "Kashmir Kargil cultural tour, 6 nights multi-cultural experience, Balti culture Kashmir, Ladakhi heritage tour, diverse Kashmir cultures, Sonmarg Gulmarg cultural tour",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-with-kargil/"
  });

  const packageData = {
    name: "Kashmir With Kargil Multi-Cultural Tour",
    description: "A diverse cultural journey exploring the multi-ethnic heritage of Kashmir, from traditional Kashmiri culture to Balti and Ladakhi influences in Kargil region.",
    price: "22999",
    originalPrice: "27599",
    duration: "7 days",
    destinations: ["Srinagar", "Kargil", "Sonmarg", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Indian traditional lunch experiences",
      "Multi-cultural heritage exploration",
      "Balti culture experience in Kargil",
      "Diverse religious and cultural sites",
      "High-altitude cultural immersion"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[65vh] py-24 overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir With Kargil Cultural Tour
              </h1>
              <p className="text-xl mb-8">
                Discover the diverse cultural tapestry of Kashmir - from traditional Kashmiri heritage to Balti and Ladakhi influences
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹22,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹27,599</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20With%20Kargil%20Multi-Cultural%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-indigo-600 text-3xl mb-2">🌍</div>
                <h3 className="font-semibold text-gray-800">Cultures</h3>
                <p className="text-gray-600">Multi-Ethnic</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">14 Cultural</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Altitude</h3>
                <p className="text-gray-600">High Mountains</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Multi-Cultural Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on a fascinating cultural journey through Kashmir's diverse ethnic landscape with our 6-night, 
                7-day multi-cultural tour. This unique experience takes you from the traditional Kashmiri culture of 
                Srinagar to the Balti and Ladakhi influences of Kargil, showcasing the incredible diversity within Kashmir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience how geography, altitude, and historical trade routes have created distinct cultural pockets 
                within Kashmir. From the fertile valleys of Srinagar to the high-altitude deserts near Kargil, witness 
                how different communities have adapted their traditions, cuisine, architecture, and lifestyle to their environments.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for cultural anthropologists, travelers interested in ethnic diversity, and those seeking to 
                understand how geographical factors influence cultural development. This tour provides insights into 
                Kashmir's position as a crossroads of Central Asian, South Asian, and Tibetan cultures.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Multi-Cultural Discovery Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Srinagar Cultural Foundation</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival and check-in to traditional Kashmiri heritage hotel</li>
                    <li>• Cultural orientation about Kashmir's diverse ethnic communities</li>
                    <li>• Traditional 01 Hour Shikara ride with cultural storytelling</li>
                    <li>• Visit Kashmiri cultural sites and traditional neighborhoods</li>
                    <li>• Evening introduction to Kashmiri culture and traditions</li>
                    <li>• Traditional dinner with authentic Kashmiri cuisine</li>
                    <li>• Cultural program showcasing Kashmiri folk traditions</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎭 Day 2: Deep Kashmiri Cultural Immersion</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Comprehensive exploration of Kashmiri cultural heritage</li>
                    <li>• Visit traditional craft workshops and artisan communities</li>
                    <li>• Explore religious diversity - Hindu, Islamic, and Sikh sites</li>
                    <li>• Traditional Indian lunch with local Kashmiri family</li>
                    <li>• Learn about Kashmiri language, literature, and poetry</li>
                    <li>• Visit cultural preservation centers and museums</li>
                    <li>• Evening cultural program with traditional music and dance</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚗 Day 3: Journey to Kargil via Cultural Transition</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early departure for cultural journey to Kargil</li>
                    <li>• Scenic route through Sonamarg with cultural significance</li>
                    <li>• Witness cultural transition from Kashmiri to Balti influences</li>
                    <li>• Stop at traditional villages to observe cultural changes</li>
                    <li>• Check-in to accommodation in Kargil</li>
                    <li>• Introduction to Balti culture and community</li>
                    <li>• Traditional Balti dinner with cultural orientation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 4: Kargil Balti Cultural Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Full day exploring Balti culture and traditions</li>
                    <li>• Visit traditional Balti villages and architecture</li>
                    <li>• Learn about Tibetan Buddhist and Islamic cultural fusion</li>
                    <li>• Interact with Balti community and learn their customs</li>
                    <li>• Traditional lunch with Balti cuisine experience</li>
                    <li>• Visit cultural sites showcasing Tibetan influence</li>
                    <li>• Evening cultural program with Balti folk performances</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌄 Day 5: Sonmarg Cultural & Natural Heritage</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Journey to beautiful Sonmarg with cultural stops</li>
                    <li>• Explore how altitude affects cultural practices</li>
                    <li>• Visit nomadic Gujjar and Bakarwal communities</li>
                    <li>• Learn about pastoral culture and seasonal migrations</li>
                    <li>• Traditional lunch with mountain community</li>
                    <li>• Understand relationship between nature and culture</li>
                    <li>• Evening cultural interaction with local communities</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎿 Day 6: Gulmarg Cultural & Adventure Fusion</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Travel to Gulmarg with cultural significance exploration</li>
                    <li>• Discover how tourism has impacted local culture</li>
                    <li>• Visit traditional Gulmarg communities and their adaptations</li>
                    <li>• Explore cultural fusion of tradition and modernity</li>
                    <li>• Traditional lunch showcasing regional cuisine variations</li>
                    <li>• Meet with local cultural preservationists</li>
                    <li>• Evening cultural summary of diverse experiences</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 7: Cultural Integration & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Return to Srinagar with cultural reflection</li>
                    <li>• Final cultural integration and summary session</li>
                    <li>• Purchase authentic handicrafts from different cultures</li>
                    <li>• Cultural comparison and learning consolidation</li>
                    <li>• Farewell ceremony celebrating cultural diversity</li>
                    <li>• Departure with comprehensive cultural understanding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Multi-Cultural Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Multi-Cultural Experience Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Diversity</h4>
                  <p className="text-gray-600">Experience Kashmiri, Balti, and Ladakhi cultural influences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Altitude Cultural Impact</h4>
                  <p className="text-gray-600">Understand how geography shapes cultural practices</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🕌</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Religious Diversity</h4>
                  <p className="text-gray-600">Explore Hindu, Islamic, and Buddhist cultural sites</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Culinary Variations</h4>
                  <p className="text-gray-600">Taste diverse regional cuisines and cooking styles</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏘️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Community Interactions</h4>
                  <p className="text-gray-600">Meet diverse ethnic communities and learn their traditions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📚</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Education</h4>
                  <p className="text-gray-600">Comprehensive learning about Kashmir's cultural complexity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}