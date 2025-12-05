import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const adv5 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514584/travelwiki/assets/Adventure/adv5.jpg";

export default function ScenicKashmirAdventureTour() {
  const seoData = useSEO({
    title: "Scenic Kashmir Adventure Tour | 6 Nights 7 Days Premium Winter Experience",
    description: "Premium scenic Kashmir adventure tour with extended mountain stays, helicopter rides, and exclusive winter activities. 6 nights luxury adventure covering all major destinations. Starting at ₹23,999.",
    keywords: "scenic Kashmir adventure, 6 nights winter tour, premium Kashmir adventure, helicopter rides Kashmir, luxury winter package, extended adventure tour",
    canonical: "https://www.travelwiki.org.in/kashmirtourpackages/scenic-kashmir-adventure-tour/"
  });

  const packageData = {
    name: "Scenic Kashmir Adventure Tour",
    description: "Premium scenic adventure tour with extended stays in Kashmir's most beautiful locations, exclusive helicopter rides, and luxury winter experiences.",
    price: "23999",
    originalPrice: "28799",
    duration: "7 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Helicopter sightseeing tours",
      "2N Srinagar (1N HB), 2N Pahalgam, 2N Gulmarg",
      "6 Hotels, 11 Activities, 7 Transfers",
      "Exclusive scenic viewpoints access",
      "Candlelight dinner & fresh fruit basket"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen page-container">
        {/* Hero Section */}
        <div className="relative text-white min-h-[75vh] overflow-hidden bg-gradient-to-br from-slate-600 via-gray-600 to-zinc-600">
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Scenic Kashmir Adventure Tour
              </h1>
              <p className="text-xl mb-8">
                Premium scenic adventure with helicopter tours, extended mountain stays, and exclusive access to Kashmir's most beautiful locations
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹23,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹28,799</span> 
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
                <div className="text-emerald-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">6 Nights / 7 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">🚁</div>
                <h3 className="font-semibold text-gray-800">Helicopter</h3>
                <p className="text-gray-600">Scenic Tours</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Adventures</h3>
                <p className="text-gray-600">11 Premium Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">⭐</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Luxury Premium</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Premium Scenic Adventure Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Indulge in the most scenic and luxurious Kashmir adventure experience with our premium 6-night, 
                7-day tour. This exclusive package combines breathtaking helicopter tours, extended stays in each 
                destination, and access to the most scenic viewpoints in Kashmir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With extended 2-night stays in both Pahalgam and Gulmarg, you'll have ample time to explore every 
                scenic corner, participate in exclusive activities, and truly immerse yourself in the natural beauty 
                that makes Kashmir the crown jewel of India's adventure tourism.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for discerning adventurers who appreciate luxury, scenic beauty, and exclusive experiences. 
                This tour offers the ultimate combination of adventure, comfort, and unparalleled access to 
                Kashmir's most photogenic locations.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Scenic Adventure Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Premium Arrival & Scenic Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• VIP arrival with luxury transport and scenic route tour</li>
                    <li>• Check-in to 5-star heritage hotel with mountain views</li>
                    <li>• Welcome ceremony with professional photography session</li>
                    <li>• Sunset scenic drive around Dal Lake with professional guide</li>
                    <li>• Luxury dinner at rooftop restaurant with panoramic views</li>
                    <li>• Premium accommodation with scenic room views</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚁 Day 2: Helicopter Tour & Houseboat Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning helicopter sightseeing tour over Dal Lake and mountains</li>
                    <li>• Aerial photography session of Kashmir's scenic landscapes</li>
                    <li>• 01 Hour luxury Shikara ride with gourmet refreshments</li>
                    <li>• Transfer to premium luxury houseboat with scenic deck</li>
                    <li>• Exclusive sunset viewing from private houseboat terrace</li>
                    <li>• Multi-course candlelight dinner with live traditional music</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Scenic Pahalgam Adventure Day 1</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Luxury scenic drive to Pahalgam with multiple photo stops</li>
                    <li>• Check-in to premium mountain resort with valley views</li>
                    <li>• Guided tour to scenic Betaab Valley with professional photography</li>
                    <li>• Adventure picnic lunch at most scenic viewpoint</li>
                    <li>• Scenic horse riding to hidden mountain meadows</li>
                    <li>• Evening scenic nature walk with sunset views</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">⛰️ Day 4: Extended Pahalgam Scenic Adventures</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early morning scenic drive to Aru Valley</li>
                    <li>• Extended trekking to most scenic viewpoints</li>
                    <li>• Professional landscape photography workshop</li>
                    <li>• Scenic lunch at mountain-top restaurant</li>
                    <li>• Visit to exclusive scenic spots accessible only with premium tours</li>
                    <li>• Evening cultural program with scenic mountain backdrop</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎿 Day 5: Gulmarg Scenic Skiing Day 1</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Scenic morning drive to Gulmarg through pine forests</li>
                    <li>• Check-in to luxury ski resort with panoramic mountain views</li>
                    <li>• Premium Gulmarg Gondola with extended scenic stops</li>
                    <li>• Professional skiing lessons at most scenic slopes</li>
                    <li>• Scenic lunch at world's highest restaurant</li>
                    <li>• Professional scenic photography session at Apharwat Peak</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 6: Extended Gulmarg Scenic Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Advanced scenic skiing and snowboarding sessions</li>
                    <li>• Helicopter skiing experience (weather permitting)</li>
                    <li>• Access to exclusive scenic viewpoints via special arrangements</li>
                    <li>• Professional mountain photography masterclass</li>
                    <li>• Scenic adventure sports activities</li>
                    <li>• Farewell celebration dinner with scenic mountain views</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 7: Scenic Farewell & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final scenic breakfast with mountain panorama</li>
                    <li>• Scenic route drive back to Srinagar with photo stops</li>
                    <li>• Professional photo album creation session</li>
                    <li>• Luxury shopping for authentic Kashmiri handicrafts</li>
                    <li>• VIP departure transfer with scenic route tour</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scenic Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Scenic Premium Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚁</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Helicopter Tours</h4>
                  <p className="text-gray-600">Exclusive aerial views of Kashmir's scenic beauty</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Professional Photography</h4>
                  <p className="text-gray-600">Expert landscape photography sessions included</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusive Access</h4>
                  <p className="text-gray-600">Private access to most scenic viewpoints</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Luxury Stays</h4>
                  <p className="text-gray-600">5-star accommodations with scenic mountain views</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎿</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Skiing</h4>
                  <p className="text-gray-600">Best scenic slopes with professional instruction</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Scenic Dining</h4>
                  <p className="text-gray-600">Gourmet meals at locations with best views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
