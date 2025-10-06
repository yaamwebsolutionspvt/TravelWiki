import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
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
                <ItineraryCard
                  title="Day 1: Srinagar Heritage Introduction"
                  activities={[
                    "Grand arrival at Srinagar and check-in to heritage hotel",
                    "Traditional Kashmiri welcome with Kahwa and local sweets",
                    "Cultural orientation session about Kashmir's diverse heritage",
                    "Visit Shankaracharya Temple for spiritual cultural experience",
                    "Explore Jamia Masjid and experience Islamic architecture",
                    "Evening cultural walk through old city and traditional bazaars",
                    "Traditional dinner with live Kashmiri folk music"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Srinagar+Heritage"
                  imageAlt="Srinagar Heritage Introduction"
                  imageTitle="Srinagar Heritage"
                  imageSubtitle="Cultural Introduction"
                  icon="🏛️"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 2: Srinagar Cultural Deep Dive"
                  activities={[
                    "Heritage 01 Hour Shikara ride with cultural storytelling",
                    "Visit to all major Mughal Gardens with historical narratives",
                    "Traditional handicraft workshop visits - carpet, shawl, paper mache",
                    "Interact with master artisans and learn craft techniques",
                    "Traditional Indian lunch with authentic Wazwan preparation",
                    "Visit Kashmir Government Arts Emporium for cultural shopping",
                    "Evening cultural program with Rouf dance performance"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/059669/FFFFFF?text=Cultural+Deep+Dive"
                  imageAlt="Srinagar Cultural Deep Dive"
                  imageTitle="Cultural Deep Dive"
                  imageSubtitle="Heritage Exploration"
                  icon="🚣‍♀️"
                  imageOnRight={true}
                />
                
                <ItineraryCard
                  title="Day 3: Journey to Gurez Cultural Heart"
                  activities={[
                    "Early departure for cultural expedition to Gurez Valley",
                    "Scenic cultural route via Bandipora with village stops",
                    "Interact with different communities along the mountain route",
                    "Check-in to traditional guesthouse in Gurez",
                    "Introduction to Dard culture and community leaders",
                    "Traditional welcome ceremony by local Dard community",
                    "Authentic dinner with folk songs and cultural stories"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Gurez+Cultural+Heart"
                  imageAlt="Journey to Gurez Cultural Heart"
                  imageTitle="Gurez Cultural Heart"
                  imageSubtitle="Cultural Expedition"
                  icon="🚗"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 4: Gurez Cultural Immersion"
                  activities={[
                    "Full day dedicated to Dard culture exploration",
                    "Visit traditional wooden houses and architectural heritage",
                    "Participate in traditional craft making with local artisans",
                    "Learn about traditional farming and seasonal cultural practices",
                    "Traditional lunch prepared by community women",
                    "Visit local cultural center and meet tribal elders",
                    "Evening cultural bonfire with traditional songs and dances"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/7C2D12/FFFFFF?text=Gurez+Cultural+Immersion"
                  imageAlt="Gurez Cultural Immersion"
                  imageTitle="Gurez Cultural Immersion"
                  imageSubtitle="Dard Culture Exploration"
                  icon="🌄"
                  imageOnRight={true}
                />
                
                <ItineraryCard
                  title="Day 5: Cultural Integration & Return"
                  activities={[
                    "Final cultural interaction and farewell ceremony",
                    "Purchase authentic cultural handicrafts and souvenirs",
                    "Cultural documentation and photography session",
                    "Scenic return journey to Srinagar with cultural reflection",
                    "Check-in to Srinagar hotel and cultural summary session",
                    "Traditional farewell dinner with cultural program"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/0891B2/FFFFFF?text=Cultural+Integration"
                  imageAlt="Cultural Integration & Return"
                  imageTitle="Cultural Integration"
                  imageSubtitle="Farewell Ceremony"
                  icon="🏛️"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 6: Cultural Farewell & Departure"
                  activities={[
                    "Final breakfast with cultural experience sharing",
                    "Last-minute cultural shopping at traditional markets",
                    "Cultural certificate presentation ceremony",
                    "Departure transfer with cultural memories and insights"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Cultural+Farewell"
                  imageAlt="Cultural Farewell & Departure"
                  imageTitle="Cultural Farewell"
                  imageSubtitle="Final Cultural Experience"
                  icon="✈️"
                  imageOnRight={true}
                />
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