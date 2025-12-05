import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
import ItineraryCard from "../../components/ItineraryCard";
import BestsellerKashmirTours from "../../components/Packages/BestsellerKashmirTours";
import HoneymoonSpecial from "../../components/Packages/HoneymoonSpecial";
import KashmirFamilyPackages from "../../components/Packages/KashmirFamilyPackages";
import KashmirExcursionsSpecial from "../../components/Packages/KashmirExcursionsSpecial";
import KashmirAdventureWinter from "../../components/Packages/KashmirAdventureWinter";
import KashmirCulturalToursAndPackages from "../../components/Packages/KashmirCulturalToursAndPackages";
const gandolaRide = "https://res.cloudinary.com/dw1sh368y/image/upload/v1759486001/Kashmir_7_Houseboat_View_uutl0x.webp";

export default function MagnificentKashmirValleyTour() {
  const seoData = useSEO({
    title: "Magnificent Kashmir Valley Tour | 6 Nights 7 Days Ultimate Kashmir Experience",
    description: "Experience the magnificent beauty of Kashmir valley with our 6 nights 7 days comprehensive tour. Visit Srinagar, Pahalgam, Gulmarg with houseboat stays at ₹19,999.",
    keywords: "magnificent Kashmir tour, 6 nights Kashmir package, Kashmir valley tour 6N7D, ultimate Kashmir experience, comprehensive Kashmir package",
    canonical: "https://www.travelwiki.org.in/kashmirtourpackages/magnificent-kashmir-valley-tour/"
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
      
      <div className="min-h-screen page-container">
        {/* Hero Section */}
        <div
          className="relative text-white min-h-[75vh] overflow-hidden"
          style={{
            backgroundImage: `url(${gandolaRide})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Kashmir Grand Discovery: 6 Nights Scenic Expedition              </h1>
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
                <ItineraryCard
                  title="Srinagar (2 Nights)"
                  activities={[
                    "Arrival at Srinagar and check-in to premium hotel",
                    "Welcome 01 Hour Shikara ride on magnificent Dal Lake",
                    "Comprehensive tour of all Mughal Gardens",
                    "Visit Hazratbal Shrine and Jamia Masjid",
                    "Explore Shankaracharya Temple for panoramic views",
                    "Traditional handicraft shopping in old bazaars",
                    "Cultural evening with traditional music and dance"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485999/Kashmir_4_Pahalgam_v7yfwe.webp"
                  imageAlt="Srinagar Shikara Ride Experience"
                  imageTitle="Srinagar Shikara"
                  imageSubtitle="01 Hour Dal Lake Experience"
                  icon="🏛️"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Pahalgam (2 Nights)"
                  activities={[
                    "Scenic drive to Pahalgam with multiple photo stops",
                    "Day 1: Complete tour of Chandanwari and surrounding areas",
                    "Extended exploration of Aru Valley with leisure time",
                    "Visit magnificent Betab Valley and Mini Switzerland",
                    "Day 2: Adventure day with trekking and river activities",
                    "Pony trekking to Baisaran meadows",
                    "Golf at Pahalgam Golf Course (seasonal)",
                    "Nature walks along Lidder River",
                    "Village visits and local cultural interactions"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486001/Kashmir_7_Houseboat_View_uutl0x.webp"
                  imageAlt="Pahalgam Valley Experience"
                  imageTitle="Pahalgam Valley"
                  imageSubtitle="2 Nights Valley Exploration"
                  icon="🌲"
                        
                        imageOnRight={true}
                        />
                
                <ItineraryCard
                  title="Gulmarg (1 Night)"
                  activities={[
                    "Drive to magnificent Gulmarg meadows",
                    "Gulmarg Gondola Phase 1 & 2 to Apharwat Peak",
                    "Snow activities and skiing (winter season)",
                    "Comprehensive exploration of Gulmarg biosphere",
                    "Visit world's highest golf course",
                    "Alpine trekking and nature photography",
                    "Visit St. Mary's Church and local attractions",
                    "Adventure sports and mountain biking"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759735020/Gulmarg_ch9vck.webp"
                  imageAlt="Gulmarg Gondola Experience"
                  imageTitle="Gulmarg Gondola"
                  imageSubtitle="1 Night Mountain Adventure"
                  icon="🚡"
                  imageOnRight={false}
                  />
                
                <ItineraryCard
                  title="Srinagar Houseboat (1 Night)"
                  activities={[
                    "Return to Srinagar and check-in to premium houseboat",
                    "Sunset Shikara ride with photography session",
                    "Traditional Wazwan dinner experience",
                    "Evening leisure on houseboat deck",
                    "Early morning floating market visit",
                    "Final shopping and souvenir collection",
                    "Departure transfer to airport"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759735095/Luxuary_Houseboat_stay_e0gszo.webp"
                  imageAlt="Luxury Houseboat Experience"
                  imageTitle="Luxury Houseboat"
                  imageSubtitle="1 Night Floating Experience"
                  icon="🏠"
                  imageOnRight={true}
                      />
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
      
      {/* Package Sections */}
      <BestsellerKashmirTours />
      <KashmirFamilyPackages />
      <HoneymoonSpecial />
      <KashmirExcursionsSpecial />
      <KashmirAdventureWinter />
      <KashmirCulturalToursAndPackages />
    </>
  );
}
