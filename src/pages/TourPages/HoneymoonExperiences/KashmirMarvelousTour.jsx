import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const tourPackage = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514639/travelwiki/assets/Honeymoon/kashmir-tour-package.jpg";

export default function KashmirMarvelousTour() {
  const seoData = useSEO({
    title: "Kashmir Marvelous Tour | 6 Nights 7 Days Luxury Honeymoon Package",
    description: "Experience marvelous Kashmir with our luxury 6 nights package. Premium accommodations, exclusive experiences, cultural programs and romantic arrangements. Starting at ₹27,999.",
    keywords: "Kashmir marvelous tour, luxury Kashmir honeymoon, premium Kashmir package, 6 nights luxury tour, exclusive Kashmir experience",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-marvelous-tour/"
  });

  const packageData = {
    name: "Kashmir Marvelous Tour",
    description: "The most luxurious and marvelous Kashmir tour with premium accommodations, exclusive experiences, and world-class service.",
    price: "27999",
    originalPrice: "33799",
    duration: "7 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Cake, Candle Light Dinner & Fresh Fruit Basket",
      "2N Srinagar (1N Luxury Houseboat) + 2N Pahalgam + 2N Gulmarg",
      "12 marvelous activities",
      "8 luxury transfers"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[65vh] py-25 overflow-hidden bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Marvelous Tour
              </h1>
              <p className="text-xl mb-8">
                Experience the most marvelous and luxurious Kashmir honeymoon with world-class amenities and exclusive experiences
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹27,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹33,799</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Marvelous%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-amber-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">6 Nights / 7 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-amber-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">7 Luxury Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-amber-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">12 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-amber-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">8 Luxury Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Marvelous Luxury Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Kashmir Marvelous Tour represents the pinnacle of luxury honeymoon experiences in Kashmir. 
                With the highest number of hotels (7), activities (12), and transfers (8), this tour offers 
                unmatched comfort, exclusive experiences, and world-class service at every step.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Stay in the finest luxury accommodations, enjoy exclusive access to premium experiences, 
                and be pampered with personalized service throughout your marvelous journey through Kashmir's 
                most beautiful destinations.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marvelous Kashmir Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Royal Arrival in Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• VIP arrival with luxury car pickup</li>
                    <li>• Check-in to 5-star luxury hotel in Srinagar</li>
                    <li>• Presidential suite with valley views</li>
                    <li>• Welcome ceremony with premium cake and exotic fruit basket</li>
                    <li>• Personal butler service assignment</li>
                    <li>• Multi-course candlelight dinner with live music</li>
                    <li>• Overnight stay in luxury hotel</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Luxury Houseboat Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning champagne breakfast</li>
                    <li>• Private decorated Shikara ride (1 hour premium)</li>
                    <li>• Exclusive access to Mughal Gardens with private guide</li>
                    <li>• Check-in to luxury houseboat with royal interiors</li>
                    <li>• Private sunset photography session</li>
                    <li>• Traditional Wazwan dinner on houseboat</li>
                    <li>• Overnight stay in luxury houseboat</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Pahalgam Luxury Day 1</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Private luxury vehicle to Pahalgam</li>
                    <li>• Check-in to premium resort with mountain views</li>
                    <li>• Private guide for Betab Valley exploration</li>
                    <li>• Exclusive helicopter ride over valleys (seasonal)</li>
                    <li>• Luxury picnic lunch in pristine meadows</li>
                    <li>• Spa treatment for couples</li>
                    <li>• Overnight stay in luxury resort</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 4: Pahalgam Adventure & Culture</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Private expedition to Aru Valley</li>
                    <li>• Exclusive horse riding with professional guides</li>
                    <li>• Visit to Chandanwari with luxury arrangements</li>
                    <li>• Cultural evening with traditional Kashmiri performances</li>
                    <li>• Professional photography and videography session</li>
                    <li>• Private dining experience under the stars</li>
                    <li>• Overnight stay in luxury resort</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 5: Gulmarg Premium Day 1</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Private transfer to Gulmarg in luxury vehicle</li>
                    <li>• Check-in to premium mountain resort</li>
                    <li>• VIP Gondola experience to Apharwat Peak</li>
                    <li>• Exclusive snow activities with professional instructors</li>
                    <li>• Private access to golf course</li>
                    <li>• Luxury mountain dining experience</li>
                    <li>• Overnight stay in luxury resort</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">⛷️ Day 6: Gulmarg Exclusive Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Private alpine trekking with expert guides</li>
                    <li>• Exclusive access to restricted scenic areas</li>
                    <li>• Professional couple photoshoot in snow</li>
                    <li>• Adventure sports with premium equipment</li>
                    <li>• Cultural interaction with local artisans</li>
                    <li>• Return to Srinagar in luxury vehicle</li>
                    <li>• Final night in presidential suite</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 7: Marvelous Farewell</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Luxury breakfast with valley views</li>
                    <li>• Exclusive shopping experience with personal shopper</li>
                    <li>• Premium souvenir collection</li>
                    <li>• VIP departure transfer to airport</li>
                    <li>• Farewell with personalized photo album</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Marvelous Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Marvelous Luxury Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">👑</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Royal Treatment</h4>
                  <p className="text-gray-600">Presidential suites, butler service, VIP access</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚁</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusive Experiences</h4>
                  <p className="text-gray-600">Helicopter rides, private access, premium activities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ultimate Luxury</h4>
                  <p className="text-gray-600">Highest quality accommodations and services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}