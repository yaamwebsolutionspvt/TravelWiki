import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
const kashmirOffbeatImaget = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514607/travelwiki/assets/CulturalTours/ct2.png";

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
        
        {/* Hero Section - Kashmir Offbeat Cultural Discovery */}
        <div
          className="relative text-white min-h-[75vh] overflow-hidden"
          style={{
            backgroundImage: `url(${kashmirOffbeatImaget})`, // 👈 replace with your image import or URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
              >
                Kashmir Offbeat Cultural Discovery
              </h1>

              <p
                className="text-xl mb-8"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
              >
                Discover Kashmir's hidden cultural treasures and explore the authentic
                traditions of remote valleys and offbeat destinations
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹26,999</span>
                  <span className="text-lg ml-2 text-gray-600">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-500">₹32,399</span>{' '}
                    <span className="text-green-300">17% OFF</span>
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
                <ItineraryCard
                  title="Day 1: Srinagar Cultural Foundation"
                  activities={[
                    "Arrival and check-in to traditional Kashmiri heritage hotel",
                    "Cultural orientation with local cultural expert guide",
                    "Visit lesser-known cultural sites and hidden heritage locations",
                    "Explore traditional neighborhood communities",
                    "Evening cultural immersion in old city's authentic atmosphere",
                    "Traditional welcome dinner with local cultural storytelling"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Srinagar+Cultural+Foundation"
                  imageAlt="Srinagar Cultural Foundation Experience"
                  imageTitle="Cultural Foundation"
                  imageSubtitle="Traditional Heritage Welcome"
                  icon="🏛️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Srinagar Offbeat Cultural Sites"
                  activities={[
                    "Early morning 01 Hour cultural Shikara ride with local historians",
                    "Visit offbeat historical sites and hidden architectural gems",
                    "Explore traditional workshops in lesser-known neighborhoods",
                    "Meet with master craftsmen in authentic working environments",
                    "Traditional Indian lunch with local family in their home",
                    "Visit cultural sites rarely accessed by regular tourists",
                    "Evening cultural program with authentic folk performances"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/059669/FFFFFF?text=Offbeat+Cultural+Sites"
                  imageAlt="Srinagar Offbeat Cultural Sites"
                  imageTitle="Offbeat Cultural Sites"
                  imageSubtitle="Hidden Architectural Gems"
                  icon="🚣‍♀️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3: Extended Srinagar Cultural Exploration"
                  activities={[
                    "Full day dedicated to deep cultural exploration",
                    "Visit traditional communities and cultural centers",
                    "Participate in cultural workshops and learning sessions",
                    "Meet cultural preservationists and tradition keepers",
                    "Document cultural practices through photography and interaction",
                    "Traditional cooking session with local cuisine masters",
                    "Evening cultural reflection and preparation for remote journey"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/0891B2/FFFFFF?text=Cultural+Exploration"
                  imageAlt="Extended Srinagar Cultural Exploration"
                  imageTitle="Cultural Exploration"
                  imageSubtitle="Deep Cultural Immersion"
                  icon="🏘️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 4: Journey to Remote Cultural Heart"
                  activities={[
                    "Early departure for remote cultural expedition to Gurez",
                    "Scenic cultural route with stops at traditional mountain villages",
                    "Interact with pastoral communities along the route",
                    "Experience changing cultural influences with altitude",
                    "Check-in to authentic local accommodation in Gurez",
                    "Traditional Dard welcome ceremony by community elders",
                    "First evening of authentic Gurez cultural experience"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/7C2D12/FFFFFF?text=Remote+Cultural+Heart"
                  imageAlt="Journey to Remote Cultural Heart"
                  imageTitle="Remote Cultural Heart"
                  imageSubtitle="Journey to Gurez Valley"
                  icon="🌄"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 5: Deep Gurez Cultural Immersion"
                  activities={[
                    "Full day dedicated to Dard culture exploration",
                    "Visit ancient cultural sites and traditional architecture",
                    "Participate in traditional daily activities with locals",
                    "Learn traditional crafts and cultural practices",
                    "Share meals with local families and learn cooking traditions",
                    "Evening cultural program with traditional music and stories",
                    "Overnight in traditional accommodation with community"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Gurez+Cultural+Immersion"
                  imageAlt="Deep Gurez Cultural Immersion"
                  imageTitle="Gurez Cultural Immersion"
                  imageSubtitle="Dard Culture Exploration"
                  icon="🏔️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 6: Advanced Cultural Discovery"
                  activities={[
                    "Extended cultural exploration of remote Gurez areas",
                    "Visit cultural sites accessible only to dedicated explorers",
                    "Advanced cultural workshops and skill learning",
                    "Meet with tribal elders and cultural knowledge keepers",
                    "Participate in cultural preservation activities",
                    "Cultural documentation and authentic experience sharing",
                    "Final evening celebration with community"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Advanced+Cultural+Discovery"
                  imageAlt="Advanced Cultural Discovery"
                  imageTitle="Advanced Cultural Discovery"
                  imageSubtitle="Remote Cultural Sites"
                  icon="🎭"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 7: Cultural Integration & Return"
                  activities={[
                    "Farewell ceremony with Gurez community",
                    "Cultural certificate presentation from community leaders",
                    "Return journey with cultural reflection and integration",
                    "Check-in to Srinagar for cultural summary session",
                    "Visit final cultural sites and complete experience",
                    "Traditional farewell dinner with complete cultural program"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/059669/FFFFFF?text=Cultural+Integration"
                  imageAlt="Cultural Integration & Return"
                  imageTitle="Cultural Integration"
                  imageSubtitle="Community Farewell"
                  icon="🏛️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 8: Cultural Conclusion & Departure"
                  activities={[
                    "Final morning cultural activities and shopping",
                    "Complete cultural experience evaluation and sharing",
                    "Purchase authentic cultural artifacts and handmade items",
                    "Cultural documentation completion and memory preservation",
                    "Departure with deep cultural insights and lasting memories"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/0891B2/FFFFFF?text=Cultural+Conclusion"
                  imageAlt="Cultural Conclusion & Departure"
                  imageTitle="Cultural Conclusion"
                  imageSubtitle="Final Cultural Experience"
                  icon="✈️"
                  imageOnRight={true}
                />
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