import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import BestsellerKashmirTours from "../../../components/Packages/BestsellerKashmirTours";
import HoneymoonSpecial from "../../../components/Packages/HoneymoonSpecial";
import KashmirFamilyPackages from "../../../components/Packages/KashmirFamilyPackages";
import KashmirExcursionsSpecial from "../../../components/Packages/KashmirExcursionsSpecial";
import KashmirAdventureWinter from "../../../components/Packages/KashmirAdventureWinter";
import KashmirCulturalToursAndPackages from "../../../components/Packages/KashmirCulturalToursAndPackages";
const adv5 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514584/travelwiki/assets/Adventure/adv5.jpg";

export default function KashmirMarvelousAdventureTour() {
  const seoData = useSEO({
    title: "Kashmir Marvelous Adventure Tour | 7 Nights 8 Days Ultimate Luxury Adventure",
    description: "The most comprehensive Kashmir adventure experience with 7 nights luxury stays, extreme sports, helicopter rides, and exclusive winter activities. Ultimate adventure tour starting at ₹27,999.",
    keywords: "Kashmir marvelous adventure, 7 nights luxury adventure, ultimate Kashmir experience, extreme winter sports, luxury adventure tour, comprehensive Kashmir adventure",
    canonical: "https://www.travelwiki.org.in/kashmirtourpackages/kashmir-marvelous-adventure-tour/"
  });

  const packageData = {
    name: "Kashmir Marvelous Adventure Tour",
    description: "The most comprehensive and luxurious Kashmir adventure experience featuring extreme sports, premium accommodations, and exclusive access to all adventure activities.",
    price: "27999",
    originalPrice: "33599",
    duration: "8 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Extreme adventure sports activities",
      "2N Srinagar, 2N Pahalgam, 2N Gulmarg, 1N Srinagar HB",
      "7 Hotels, 12 Activities, 8 Transfers",
      "Helicopter adventures & exclusive access",
      "Candlelight dinner & fresh fruit basket"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen page-container">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-700 to-pink-900 text-white py-30" style={{
          backgroundImage: `url(${adv5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Marvelous Adventure Tour
              </h1>
              <p className="text-xl mb-8">
                The ultimate luxury adventure experience with 7 nights of extreme sports, exclusive activities, and unparalleled Kashmir exploration
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹27,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹33,599</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Book Now
                </button>
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
                <p className="text-gray-600">7 Nights / 8 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">👑</div>
                <h3 className="font-semibold text-gray-800">Ultimate</h3>
                <p className="text-gray-600">Luxury Experience</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-800">Adventures</h3>
                <p className="text-gray-600">12 Extreme Sports</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🏆</div>
                <h3 className="font-semibold text-gray-800">Premium</h3>
                <p className="text-gray-600">VIP Treatment</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Marvelous Ultimate Adventure</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the most marvelous and comprehensive Kashmir adventure with our flagship 7-night, 8-day 
                luxury tour. This ultimate package is designed for serious adventurers who want to experience every 
                facet of Kashmir's adventure tourism with no compromises on luxury or excitement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With extended 2-night stays in each major destination, you'll have time to master advanced skiing 
                techniques, participate in extreme sports, enjoy helicopter adventures, and access exclusive areas 
                that regular tours cannot reach. The tour includes VIP treatment throughout.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This marvelous adventure is perfect for those who demand the absolute best in adventure tourism - 
                luxury accommodations, expert guides, premium equipment, exclusive experiences, and memories that 
                will last a lifetime. The crown jewel of Kashmir adventure packages.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marvelous Adventure Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Royal Welcome & Premium Setup</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• VIP arrival with luxury convoy and red carpet welcome</li>
                    <li>• Check-in to presidential suite at 5-star palace hotel</li>
                    <li>• Personal adventure concierge assignment and briefing</li>
                    <li>• Premium equipment fitting with latest technology gear</li>
                    <li>• Welcome ceremony with local dignitaries and adventure team</li>
                    <li>• Royal dinner with live entertainment and cultural shows</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚁 Day 2: Helicopter Adventures & Luxury Shikara</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Private helicopter tour covering entire Kashmir valley</li>
                    <li>• Aerial photography session with professional drone operator</li>
                    <li>• Helicopter landing at exclusive mountain-top location</li>
                    <li>• 01 Hour royal Shikara ride with live musicians</li>
                    <li>• VIP transfer to ultra-luxury houseboat with butler service</li>
                    <li>• Multi-course gourmet dinner prepared by celebrity chef</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Pahalgam Extreme Adventure Day 1</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Luxury convoy transfer to Pahalgam's most exclusive resort</li>
                    <li>• Check-in to premium mountain villa with personal staff</li>
                    <li>• Advanced rock climbing and mountaineering training</li>
                    <li>• Extreme winter trekking to unexplored territories</li>
                    <li>• Professional survival skills and wilderness training</li>
                    <li>• Evening celebration with local tribal cultural program</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">⛰️ Day 4: Advanced Pahalgam Expeditions</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Ice climbing masterclass with international instructors</li>
                    <li>• Extreme altitude training and acclimatization</li>
                    <li>• White water rafting in challenging rapids</li>
                    <li>• Paragliding from highest accessible peaks</li>
                    <li>• Professional expedition photography workshop</li>
                    <li>• Adventure certification ceremony with international recognition</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎿 Day 5: Gulmarg Elite Skiing Day 1</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Helicopter transfer to Gulmarg's most exclusive ski lodge</li>
                    <li>• Check-in to penthouse suite with panoramic mountain views</li>
                    <li>• Private ski lessons with Olympic-trained instructors</li>
                    <li>• Access to exclusive off-piste skiing areas</li>
                    <li>• Heli-skiing experience to virgin snow slopes</li>
                    <li>• Evening at exclusive members-only ski club</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 6: Master-level Gulmarg Adventures</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Advanced skiing competitions and challenges</li>
                    <li>• Extreme snowboarding on steepest slopes</li>
                    <li>• Snow kiting and winter paragliding sessions</li>
                    <li>• Professional avalanche safety training</li>
                    <li>• Exclusive access to restricted high-altitude areas</li>
                    <li>• Graduation ceremony with master adventure certification</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏠 Day 7: Presidential Houseboat Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Helicopter return to Srinagar's most luxurious houseboat</li>
                    <li>• Presidential suite with private deck and butler service</li>
                    <li>• Exclusive sunset cruise with live orchestra</li>
                    <li>• Award ceremony and adventure achievement recognition</li>
                    <li>• Grand farewell feast with local and international cuisine</li>
                    <li>• Professional photo album and video documentary creation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 8: Royal Farewell & VIP Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Royal breakfast with adventure team and local officials</li>
                    <li>• Final equipment and souvenir presentation ceremony</li>
                    <li>• VIP shopping tour with personal shopping assistant</li>
                    <li>• Luxury spa and relaxation session before departure</li>
                    <li>• Red carpet departure with media coverage (optional)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Marvelous Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Marvelous Ultimate Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">👑</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Royal Treatment</h4>
                  <p className="text-gray-600">VIP treatment with personal concierge and butler service</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚁</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Helicopter Adventures</h4>
                  <p className="text-gray-600">Multiple helicopter experiences and heli-skiing</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏅</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Master Certification</h4>
                  <p className="text-gray-600">International adventure certifications and achievements</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Palace Accommodations</h4>
                  <p className="text-gray-600">Presidential suites and luxury villas exclusively</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h4 className="font-semibold text-gray-800 mb-2">World-Class Instructors</h4>
                  <p className="text-gray-600">Olympic trainers and international adventure experts</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎬</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Documentary Creation</h4>
                  <p className="text-gray-600">Professional video documentation of your adventure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Package Sections */}
      <KashmirAdventureWinter />
      <BestsellerKashmirTours />
      <KashmirFamilyPackages />
      <HoneymoonSpecial />
      <KashmirExcursionsSpecial />
      <KashmirCulturalToursAndPackages />
    </>
  );
}
