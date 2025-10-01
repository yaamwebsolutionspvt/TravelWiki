import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const balloonRide = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514633/travelwiki/assets/Honeymoon/baloon-ride-kashmir.jpg";

export default function GlimpsesOfFamilyTour() {
  const seoData = useSEO({
    title: "Glimpses Of Family Tour | 3 Nights 4 Days Kashmir Honeymoon Package",
    description: "Experience the perfect family tour with romantic touches in Kashmir. 3 nights in Srinagar with Shikara rides, candlelight dinner, and special honeymoon arrangements. Starting at ₹12,999.",
    keywords: "glimpses family tour Kashmir, 3 nights Kashmir honeymoon, Srinagar family package, Kashmir couple tour, romantic Kashmir getaway",
    canonical: "https://www.travelwiki.org.in/packages/glimpses-of-family-tour/"
  });

  const packageData = {
    name: "Glimpses Of Family Tour",
    description: "A perfect 3-night Kashmir tour designed for families and couples with romantic touches and special arrangements.",
    price: "12999",
    originalPrice: "15599",
    duration: "4 days",
    destinations: ["Srinagar"],
    highlights: [
      "01 Hr Shikara Ride",
      "Cake, Candle Light Dinner & Fresh Fruit Basket",
      "3 Nights in premium Srinagar hotels",
      "6 exciting activities included",
      "4 seamless transfers"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[65vh] py-25 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Glimpses Of Family Tour
              </h1>
              <p className="text-xl mb-8">
                Perfect family getaway with romantic touches in the beautiful valleys of Kashmir
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹12,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹15,599</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Glimpses%20Of%20Family%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-rose-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Nights / 4 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-rose-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">3 Premium Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-rose-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">6 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-rose-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">4 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Perfect Family Experience with Romantic Touches</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our "Glimpses Of Family Tour" is specially designed for families and couples who want to experience 
                the essential beauty of Kashmir in a comfortable 3-night stay. This package combines family-friendly 
                activities with romantic elements, making it perfect for honeymoons or family celebrations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Spend 3 beautiful nights in Srinagar, exploring the iconic Dal Lake with a romantic Shikara ride, 
                enjoying candlelight dinners, and creating unforgettable memories with your loved ones in the 
                paradise on earth.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">3 Nights Srinagar Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Arrival in Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival at Srinagar Airport and warm welcome</li>
                    <li>• Check-in to premium hotel in Srinagar</li>
                    <li>• Welcome refreshments and rest</li>
                    <li>• Evening at leisure to explore nearby areas</li>
                    <li>• Special welcome cake and fresh fruit basket</li>
                    <li>• Overnight stay in Srinagar</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Dal Lake & Mughal Gardens</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast at hotel</li>
                    <li>• Romantic 01 Hour Shikara ride on Dal Lake</li>
                    <li>• Visit to famous Mughal Gardens (Nishat & Shalimar)</li>
                    <li>• Explore Shankaracharya Temple for panoramic views</li>
                    <li>• Shopping time at local markets</li>
                    <li>• Special candlelight dinner at hotel</li>
                    <li>• Overnight stay in Srinagar</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🕌 Day 3: Srinagar Local Sightseeing</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast and check-out</li>
                    <li>• Visit Hazratbal Shrine and Jamia Masjid</li>
                    <li>• Explore local handicraft centers</li>
                    <li>• Visit Pari Mahal and Chashme Shahi Garden</li>
                    <li>• Leisure time for photography and shopping</li>
                    <li>• Check-in to new hotel for final night</li>
                    <li>• Overnight stay in Srinagar</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 4: Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast at hotel</li>
                    <li>• Final shopping and souvenir collection</li>
                    <li>• Check-out and departure transfer to airport</li>
                    <li>• Departure with beautiful memories of Kashmir</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Special Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Special Honeymoon Inclusions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎂</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Welcome Cake</h4>
                  <p className="text-gray-600">Special celebration cake on arrival</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🕯️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Candlelight Dinner</h4>
                  <p className="text-gray-600">Romantic dinner with beautiful ambiance</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍎</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Fresh Fruit Basket</h4>
                  <p className="text-gray-600">Daily fresh fruits in your room</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚣‍♀️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Romantic Shikara</h4>
                  <p className="text-gray-600">Private 1-hour Shikara ride on Dal Lake</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}