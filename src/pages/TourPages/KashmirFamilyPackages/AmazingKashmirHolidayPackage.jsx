import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const fm5 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514631/travelwiki/assets/Family/fm5.png";

export default function AmazingKashmirHolidayPackage() {
  const seoData = useSEO({
    title: "Amazing Kashmir Holiday Package | 4 Nights 5 Days Luxury Family Experience",
    description: "Amazing Kashmir family holiday with 4 nights luxury stay. Premium Srinagar and Gulmarg experience with houseboat stay for families at ₹59,999.",
    keywords: "amazing Kashmir holiday package, 4 nights luxury Kashmir family tour, Srinagar Gulmarg family package, luxury houseboat family stay",
    canonical: "https://www.travelwiki.org.in/packages/amazing-kashmir-holiday-package/"
  });

  const packageData = {
    name: "Amazing Kashmir Holiday Package",
    description: "An amazing Kashmir family experience featuring luxury accommodations in Srinagar and Gulmarg with premium houseboat stays and family-focused activities for unforgettable memories.",
    price: "59999",
    originalPrice: "71999",
    duration: "5 days",
    destinations: ["Srinagar", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Amazing houseboat experience (1 night)",
      "Luxury Gulmarg mountain experience",
      "Premium family-friendly activities",
      "Amazing cultural experiences",
      "Luxury accommodation throughout"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600">
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Amazing Kashmir Holiday Package
              </h1>
              <p className="text-xl mb-8">
                Experience an amazing family adventure in Kashmir with luxury stays in Srinagar and Gulmarg, creating wonderful memories together
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹59,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹71,999</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Amazing%20Kashmir%20Holiday%20Package%20from%20Travel%20Wiki."
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
                <p className="text-gray-600">4 Nights / 5 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">⭐</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Amazing Luxury</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏡</div>
                <h3 className="font-semibold text-gray-800">Special Stay</h3>
                <p className="text-gray-600">Houseboat + Hotel</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">6 Amazing</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Amazing Kashmir Family Holiday Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on an amazing Kashmir family holiday with our carefully crafted 4-night, 5-day luxury package that 
                combines the best of Srinagar's lakeside charm with Gulmarg's mountain beauty. This amazing journey is 
                designed to create wonderful memories for families seeking both luxury and adventure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the amazing contrast between Kashmir's serene lake life with a luxury houseboat stay and the 
                exhilarating mountain adventures in Gulmarg. The package includes premium accommodations, family-friendly 
                activities, and amazing cultural experiences that showcase the diverse beauty of Kashmir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for families who want an amazing yet manageable Kashmir experience. This package offers the ideal 
                duration for families with children, providing enough time to explore two distinct landscapes while 
                maintaining comfort and avoiding travel fatigue. Create amazing memories that will last a lifetime.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Amazing Family Holiday Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Amazing Srinagar Welcome</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Amazing arrival welcome at Srinagar Airport</li>
                    <li>• Luxury transfer to premium family-friendly hotel</li>
                    <li>• Check-in to spacious family rooms with amazing lake views</li>
                    <li>• Welcome refreshments with amazing Kashmir specialties</li>
                    <li>• Evening leisure time to enjoy amazing hotel amenities</li>
                    <li>• Traditional dinner with amazing Kashmiri flavors</li>
                    <li>• Overnight in amazing luxury accommodations</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Amazing Srinagar Lake Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Amazing 01 Hour family Shikara ride on Dal Lake</li>
                    <li>• Visit amazing floating gardens and local communities</li>
                    <li>• Amazing family tour of spectacular Mughal Gardens</li>
                    <li>• Interactive sessions with amazing garden stories</li>
                    <li>• Lunch at restaurant with amazing lake views</li>
                    <li>• Amazing family shopping experience at local markets</li>
                    <li>• Evening cultural program with amazing performances</li>
                    <li>• Overnight with amazing family entertainment facilities</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 3: Amazing Gulmarg Mountain Adventure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Amazing scenic drive to beautiful Gulmarg</li>
                    <li>• Amazing family-friendly Gulmarg Gondola experience</li>
                    <li>• Amazing snow activities and mountain games</li>
                    <li>• Amazing family lunch at high-altitude restaurant</li>
                    <li>• Amazing exploration of world's highest golf course</li>
                    <li>• Amazing family photo sessions in meadow settings</li>
                    <li>• Return to Srinagar with amazing mountain memories</li>
                    <li>• Overnight in luxury hotel</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏡 Day 4: Amazing Houseboat Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Check-in to amazing luxury family houseboat</li>
                    <li>• Amazing family orientation about houseboat lifestyle</li>
                    <li>• Amazing handicraft workshop demonstrations</li>
                    <li>• Amazing family cooking class for Kashmir cuisine</li>
                    <li>• Amazing sunset Shikara ride from houseboat</li>
                    <li>• Amazing traditional Wazwan dinner on deck</li>
                    <li>• Amazing evening family time on houseboat</li>
                    <li>• Amazing overnight experience on floating luxury</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 5: Amazing Farewell & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Amazing final breakfast on houseboat deck</li>
                    <li>• Amazing last-minute shopping for family souvenirs</li>
                    <li>• Amazing family photo compilation and memory book</li>
                    <li>• Amazing transfer to airport with comfort</li>
                    <li>• Departure with amazing lifetime Kashmir memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Amazing Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Amazing Package Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Amazing Experiences</h4>
                  <p className="text-gray-600">Carefully curated amazing activities for all family members</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Amazing Accommodations</h4>
                  <p className="text-gray-600">Luxury hotel plus authentic houseboat experience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Amazing Destinations</h4>
                  <p className="text-gray-600">Perfect combination of lake and mountain experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Amazing Family Time</h4>
                  <p className="text-gray-600">Quality family bonding with amazing shared experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Amazing Culture</h4>
                  <p className="text-gray-600">Immersive cultural experiences with local families</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Amazing Memories</h4>
                  <p className="text-gray-600">Professional documentation of amazing family moments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}