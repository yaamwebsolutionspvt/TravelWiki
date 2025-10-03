import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const holiday = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514636/travelwiki/assets/Honeymoon/kashmir-holiday.jpg";

export default function BestSellingKashmirTour() {
  const seoData = useSEO({
    title: "Best Selling Kashmir Tour | 5 Nights 6 Days Honeymoon Package",
    description: "Our best-selling Kashmir honeymoon package with 5 nights coverage of Srinagar, Pahalgam, Gulmarg and houseboat stay. Perfect romantic getaway with special arrangements. Starting at ₹19,999.",
    keywords: "best selling Kashmir tour, 5 nights Kashmir honeymoon, complete Kashmir package, Srinagar Pahalgam Gulmarg houseboat, popular Kashmir tour",
    canonical: "https://www.travelwiki.org.in/packages/best-selling-kashmir-tour/"
  });

  const packageData = {
    name: "Best Selling Kashmir Tour",
    description: "Our most popular Kashmir honeymoon package covering all major destinations with luxury accommodations and romantic experiences.",
    price: "19999",
    originalPrice: "23999",
    duration: "6 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Cake, Candle Light Dinner & Fresh Fruit Basket",
      "2N Srinagar + 1N Pahalgam + 1N Gulmarg + 1N Srinagar Houseboat",
      "9 exciting activities",
      "6 seamless transfers"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div
          className="relative text-white h-[65vh] py-25 overflow-hidden"
          style={{
            backgroundImage: `url(${holiday})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Best Selling Kashmir Tour
              </h1>
              <p className="text-xl mb-8">
                Our most popular and comprehensive Kashmir honeymoon package with complete destination coverage
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
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Best%20Selling%20Kashmir%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-emerald-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">5 Nights / 6 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">5 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">9 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">6 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Best Selling Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This is our most popular and comprehensive Kashmir honeymoon package, carefully designed based on 
                years of customer feedback and preferences. It perfectly balances romantic experiences with adventure 
                and covers all the must-visit destinations in Kashmir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the complete Kashmir journey with 2 nights in Srinagar hotels, 1 night in beautiful 
                Pahalgam, 1 night in adventurous Gulmarg, and a special final night in a romantic houseboat on Dal Lake.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Complete Kashmir Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Arrival in Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival at Srinagar Airport and VIP welcome</li>
                    <li>• Check-in to premium hotel in Srinagar</li>
                    <li>• Welcome cake and fresh fruit basket</li>
                    <li>• Evening visit to local markets</li>
                    <li>• Special candlelight dinner</li>
                    <li>• Overnight stay in Srinagar hotel</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Srinagar Sightseeing</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast at hotel</li>
                    <li>• Romantic 01 Hour Shikara ride on Dal Lake</li>
                    <li>• Visit famous Mughal Gardens (Nishat & Shalimar)</li>
                    <li>• Explore Shankaracharya Temple for panoramic views</li>
                    <li>• Visit Hazratbal Shrine and Jamia Masjid</li>
                    <li>• Shopping time at Boulevard Road</li>
                    <li>• Overnight stay in Srinagar hotel</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Pahalgam Excursion</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast and drive to Pahalgam</li>
                    <li>• Check-in to hotel in Pahalgam</li>
                    <li>• Visit Betab Valley (Bollywood shooting location)</li>
                    <li>• Explore Aru Valley's pristine beauty</li>
                    <li>• Horse riding or pony trekking experience</li>
                    <li>• Evening walks along Lidder River</li>
                    <li>• Overnight stay in Pahalgam</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 4: Gulmarg Adventure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early breakfast and drive to Gulmarg</li>
                    <li>• Check-in to hotel in Gulmarg</li>
                    <li>• Gulmarg Gondola cable car ride (Phase 1 & 2)</li>
                    <li>• Visit the world's highest golf course</li>
                    <li>• Adventure activities and snow sports (seasonal)</li>
                    <li>• Scenic photography at viewpoints</li>
                    <li>• Overnight stay in Gulmarg</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏠 Day 5: Houseboat Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast and return to Srinagar</li>
                    <li>• Check-in to traditional houseboat on Dal Lake</li>
                    <li>• Leisure time on houseboat deck</li>
                    <li>• Sunset Shikara ride with photography</li>
                    <li>• Traditional Kashmiri dinner on houseboat</li>
                    <li>• Romantic evening under the stars</li>
                    <li>• Overnight stay in houseboat</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 6: Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast on houseboat</li>
                    <li>• Last-minute shopping for souvenirs</li>
                    <li>• Check-out and departure transfer to airport</li>
                    <li>• Departure with wonderful memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why This is Best Selling */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Why This is Our Best Seller</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Complete Coverage</h4>
                  <p className="text-gray-600">All major Kashmir destinations in perfect duration</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Perfect Romance</h4>
                  <p className="text-gray-600">Ideal blend of adventure and romantic experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Best Value</h4>
                  <p className="text-gray-600">Maximum experiences at competitive pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}