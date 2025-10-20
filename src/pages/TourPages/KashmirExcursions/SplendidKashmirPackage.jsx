import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
const ex1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514614/travelwiki/assets/Excursion/ex1.png";

export default function SplendidKashmirPackage() {
  const seoData = useSEO({
    title: "Splendid Kashmir Package | 7 Nights 8 Days Complete Kashmir Excursion",
    description: "Experience the splendid beauty of Kashmir with our comprehensive 7-night excursion covering Srinagar, Pahalgam, Gulmarg, and Sonamarg. Complete valley exploration at ₹25,999.",
    keywords: "splendid Kashmir package, 7 nights Kashmir tour, complete Kashmir excursion, Pahalgam Gulmarg Sonamarg tour, comprehensive Kashmir holiday",
    canonical: "https://www.travelwiki.org.in/packages/splendid-kashmir-package/"
  });

  const packageData = {
    name: "Splendid Kashmir Complete Excursion Package",
    description: "A comprehensive and splendid journey through all major Kashmir destinations, offering the perfect blend of natural beauty, adventure activities, and cultural experiences.",
    price: "25999",
    originalPrice: "31199",
    duration: "8 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg", "Sonamarg"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Complete Tour of Pahalgam Valley",
      "Gulmarg Gondola and ski activities",
      "Sonamarg glacier experience",
      "All major valley destinations covered",
      "Premium accommodation throughout"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white min-h-[75vh] overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Splendid Kashmir Package
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Experience the most splendid and comprehensive Kashmir excursion covering all major valley destinations in 7 magnificent nights
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹25,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹31,199</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Splendid%20Kashmir%20Package%20from%20Travel%20Wiki."
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
                <div className="text-blue-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">7 Nights / 8 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Destinations</h3>
                <p className="text-gray-600">4 Major Valleys</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">12 Excursions</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">7 Accommodations</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Complete Splendid Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on the most splendid and comprehensive Kashmir excursion with our meticulously crafted 7-night, 
                8-day package. This extraordinary journey covers all four major valley destinations - Srinagar, Pahalgam, 
                Gulmarg, and Sonamarg - ensuring you experience the complete splendor of Kashmir's diverse landscapes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From the tranquil houseboats of Srinagar to the meadows of Pahalgam, from the ski slopes of Gulmarg 
                to the glaciers of Sonamarg, this splendid package offers the perfect balance of relaxation, adventure, 
                and natural beauty exploration. Each destination reveals a different facet of Kashmir's magnificent character.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ideal for families, couples, and groups seeking the ultimate Kashmir experience, this splendid excursion 
                provides comprehensive coverage without rushing, allowing time to truly appreciate each destination's 
                unique beauty and charm.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Splendid Excursion Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Splendid Srinagar Arrival"
                  activities={[
                    "Grand arrival at Srinagar Airport and warm welcome",
                    "Check-in to premium hotel with splendid valley views",
                    "Welcome refreshments and orientation session",
                    "Evening leisure time to acclimatize and relax",
                    "Traditional Kashmiri dinner at hotel",
                    "Overnight stay in Srinagar with valley ambiance"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Srinagar+Arrival"
                  imageAlt="Splendid Srinagar Arrival"
                  imageTitle="Srinagar Arrival"
                  imageSubtitle="Warm Welcome"
                  icon="🏛️"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 2: Splendid Srinagar Exploration"
                  activities={[
                    "Morning splendid 01 Hour Shikara ride on Dal Lake",
                    "Visit to magnificent Mughal Gardens - Shalimar, Nishat, Chashme Shahi",
                    "Exploration of Shankaracharya Temple for panoramic valley views",
                    "Tour of local handicraft centers and Kashmir specialties",
                    "Evening free time for shopping at Lal Chowk",
                    "Overnight stay in Srinagar"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Srinagar+Exploration"
                  imageAlt="Splendid Srinagar Exploration"
                  imageTitle="Srinagar Exploration"
                  imageSubtitle="City Highlights"
                  icon="🚣‍♀️"
                  imageOnRight={true}
                />
                
                <ItineraryCard
                  title="Day 3: Journey to Splendid Pahalgam"
                  activities={[
                    "Morning departure for scenic drive to Pahalgam",
                    "En route visit to Awantipora ruins and saffron fields",
                    "Check-in to hotel in Pahalgam with river views",
                    "Afternoon at leisure to enjoy Pahalgam's natural beauty",
                    "Evening walk along Lidder River",
                    "Overnight stay in splendid Pahalgam surroundings"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Journey+to+Pahalgam"
                  imageAlt="Journey to Splendid Pahalgam"
                  imageTitle="Journey to Pahalgam"
                  imageSubtitle="Scenic Drive"
                  icon="🌲"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 4: Complete Tour of Pahalgam Valley"
                  activities={[
                    "Full day excursion to Betab Valley and Aru Valley",
                    "Visit to Chandanwari (starting point of Amarnath Yatra)",
                    "Splendid views of snow-capped mountains and glaciers",
                    "Optional pony rides and nature photography",
                    "Picnic lunch amidst beautiful valley scenery",
                    "Return to hotel for evening rest and relaxation",
                    "Overnight stay in Pahalgam"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Pahalgam+Valley+Tour"
                  imageAlt="Complete Tour of Pahalgam Valley"
                  imageTitle="Pahalgam Valley Tour"
                  imageSubtitle="Full-Day Excursion"
                  icon="🏔️"
                  imageOnRight={true}
                />
                
                <ItineraryCard
                  title="Day 5: Splendid Gulmarg Adventure"
                  activities={[
                    "Morning drive to Gulmarg, the \"Meadow of Flowers\"",
                    "Check-in to hotel with splendid meadow views",
                    "Gulmarg Gondola ride to Apharwat Peak (Phase 1 & 2)",
                    "Snow activities and skiing (seasonal)",
                    "Visit to world's highest golf course",
                    "Evening leisure time in splendid meadow surroundings",
                    "Overnight stay in Gulmarg"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/22C55E/FFFFFF?text=Gulmarg+Adventure"
                  imageAlt="Splendid Gulmarg Adventure"
                  imageTitle="Gulmarg Adventure"
                  imageSubtitle="Gondola & Meadows"
                  icon="🚡"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 6: Sonamarg - The Golden Meadow"
                  activities={[
                    "Early morning drive to splendid Sonamarg",
                    "Experience the \"Golden Meadow\" with its pristine beauty",
                    "Visit Thajiwas Glacier with pony rides",
                    "Enjoy splendid views of snow-capped peaks",
                    "Photography and nature appreciation time",
                    "Check-in to accommodation in Sonamarg",
                    "Overnight stay with mountain serenity"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Sonamarg+Golden+Meadow"
                  imageAlt="Sonamarg - The Golden Meadow"
                  imageTitle="Sonamarg - Golden Meadow"
                  imageSubtitle="Glacier & Peaks"
                  icon="❄️"
                  imageOnRight={true}
                />
                
                <ItineraryCard
                  title="Day 7: Return to Splendid Srinagar"
                  activities={[
                    "Morning return journey to Srinagar",
                    "Check-in to hotel or houseboat for final night",
                    "Visit any missed attractions or shopping",
                    "Final Shikara ride during golden sunset",
                    "Farewell dinner with traditional Wazwan cuisine",
                    "Overnight stay in Srinagar"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Return+to+Srinagar"
                  imageAlt="Return to Splendid Srinagar"
                  imageTitle="Return to Srinagar"
                  imageSubtitle="Golden Sunset Ride"
                  icon="🏛️"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 8: Splendid Departure"
                  activities={[
                    "Final breakfast with splendid valley views",
                    "Last-minute shopping for Kashmir specialties",
                    "Transfer to Srinagar Airport for departure",
                    "Departure with splendid memories of complete Kashmir"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Splendid+Departure"
                  imageAlt="Splendid Departure"
                  imageTitle="Splendid Departure"
                  imageSubtitle="Farewell"
                  icon="✈️"
                  imageOnRight={true}
                />
              </div>
            </div>

            {/* Splendid Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Splendid Package Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Complete Valley Coverage</h4>
                  <p className="text-gray-600">All four major Kashmir destinations in one splendid journey</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎿</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Adventure Activities</h4>
                  <p className="text-gray-600">Gondola rides, skiing, glacier visits, and more</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Accommodation</h4>
                  <p className="text-gray-600">Carefully selected hotels with splendid views</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography Paradise</h4>
                  <p className="text-gray-600">Endless opportunities for splendid landscape photography</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Culinary Delights</h4>
                  <p className="text-gray-600">Traditional Kashmiri cuisine and local specialties</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Comfortable Transport</h4>
                  <p className="text-gray-600">All transfers included with comfortable vehicles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}