import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const travelPackages = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514641/travelwiki/assets/Honeymoon/kashmir-travel-packages.jpg";

export default function KashmirRefreshingTour() {
  const seoData = useSEO({
    title: "Kashmir Refreshing Tour | 3 Nights 4 Days Quick Honeymoon Getaway",
    description: "Refresh your bond with a quick Kashmir honeymoon. 3 nights covering Srinagar houseboat and Pahalgam with romantic arrangements. Perfect short getaway at ₹13,999.",
    keywords: "Kashmir refreshing tour, quick Kashmir honeymoon, 3 nights Kashmir tour, short Kashmir getaway, budget Kashmir honeymoon",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-refreshing-tour/"
  });

  const packageData = {
    name: "Kashmir Refreshing Tour",
    description: "A refreshing and rejuvenating 3-night Kashmir tour perfect for couples seeking a quick romantic getaway with essential Kashmir experiences.",
    price: "13999",
    originalPrice: "16799",
    duration: "4 days",
    destinations: ["Srinagar", "Pahalgam"],
    highlights: [
      "01 Hr Shikara Ride",
      "Cake, Candle Light Dinner & Fresh Fruit Basket",
      "1N Srinagar (1N Houseboat) + 2N Pahalgam",
      "6 refreshing activities",
      "4 comfortable transfers"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[65vh] py-25 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Refreshing Tour
              </h1>
              <p className="text-xl mb-8">
                Refresh your mind, body, and soul with a perfect short honeymoon getaway in Kashmir's serene beauty
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹13,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹16,799</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Refreshing%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-cyan-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Nights / 4 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-cyan-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">3 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-cyan-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">6 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-cyan-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">4 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Refreshing Kashmir Escape</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Perfect for couples with limited time but unlimited love, our Refreshing Kashmir Tour offers 
                the essential Kashmir honeymoon experience in just 3 nights. This carefully curated itinerary 
                ensures you don't miss the key romantic experiences while keeping the pace comfortable and refreshing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the tranquil beauty of Srinagar's houseboat culture and the refreshing valleys of 
                Pahalgam, all while enjoying special honeymoon arrangements that make your short getaway truly memorable.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Refreshing Kashmir Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Arrival & Houseboat Check-in</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Warm arrival at Srinagar Airport</li>
                    <li>• Direct transfer to traditional houseboat on Dal Lake</li>
                    <li>• Welcome ceremony with cake and fresh fruit basket</li>
                    <li>• Romantic 01 Hour Shikara ride on Dal Lake</li>
                    <li>• Evening leisure on houseboat deck</li>
                    <li>• Candlelight dinner on houseboat with lake views</li>
                    <li>• Overnight stay in houseboat</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 2: Journey to Pahalgam</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast on houseboat with lake views</li>
                    <li>• Scenic drive to Pahalgam (Valley of Shepherds)</li>
                    <li>• Check-in to comfortable hotel in Pahalgam</li>
                    <li>• Visit to famous Betab Valley</li>
                    <li>• Exploration of Aru Valley's natural beauty</li>
                    <li>• Evening walks along Lidder River</li>
                    <li>• Overnight stay in Pahalgam</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 3: Pahalgam Adventures</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast with mountain views</li>
                    <li>• Horse riding or pony trekking experience</li>
                    <li>• Visit to Chandanwari (starting point of Amarnath Yatra)</li>
                    <li>• Picnic lunch in scenic meadows</li>
                    <li>• Nature photography session</li>
                    <li>• Return to Srinagar for final night</li>
                    <li>• Overnight stay in Srinagar hotel</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 4: Refreshed Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Refreshing morning breakfast</li>
                    <li>• Quick visit to Mughal Gardens (time permitting)</li>
                    <li>• Shopping for Kashmir souvenirs</li>
                    <li>• Check-out and departure transfer to airport</li>
                    <li>• Departure feeling refreshed and rejuvenated</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Refreshing Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Refreshing Tour</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Perfect Duration</h4>
                  <p className="text-gray-600">Ideal for couples with limited time availability</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Great Value</h4>
                  <p className="text-gray-600">Essential Kashmir experiences at budget-friendly price</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌿</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Refreshing Pace</h4>
                  <p className="text-gray-600">Relaxed itinerary without rushing through destinations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Houseboat Experience</h4>
                  <p className="text-gray-600">Traditional Kashmir houseboat stay included</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎂</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Romantic Touches</h4>
                  <p className="text-gray-600">Cake, candlelight dinner, and fruit basket</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌄</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Essential Coverage</h4>
                  <p className="text-gray-600">Key destinations: Srinagar houseboat and Pahalgam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}