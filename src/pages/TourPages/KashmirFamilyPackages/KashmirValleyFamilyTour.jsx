import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const fm3 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514628/travelwiki/assets/Family/fm3.jpg";

export default function KashmirValleyFamilyTour() {
  const seoData = useSEO({
    title: "Kashmir Valley Family Tour | 5 Nights 6 Days Premium Family Experience",
    description: "Comprehensive Kashmir Valley family tour with 5 nights premium stay. Explore Srinagar, Pahalgam, Gulmarg with luxury family accommodations and activities at ₹69,999.",
    keywords: "Kashmir valley family tour, 5 nights Kashmir family package, premium family vacation Kashmir, comprehensive Kashmir family experience",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-valley-family-tour/"
  });

  const packageData = {
    name: "Kashmir Valley Family Tour",
    description: "A comprehensive Kashmir Valley family experience covering all major destinations with extended stays, premium accommodations, and enriching family activities across the beautiful valley.",
    price: "69999",
    originalPrice: "83999",
    duration: "6 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Complete Tour of Pahalgam Valley",
      "Extended family stays in each destination",
      "Premium valley exploration experiences",
      "Comprehensive cultural family programs",
      "Luxury family-friendly accommodations"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600">
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Valley Family Tour
              </h1>
              <p className="text-xl mb-8">
                Experience the complete beauty of Kashmir Valley with your family through our comprehensive premium tour covering all major destinations
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹69,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹83,999</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Valley%20Family%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-emerald-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Valley Coverage</h3>
                <p className="text-gray-600">Complete</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">10 Family-Focused</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold text-gray-800">Perfect For</h3>
                <p className="text-gray-600">Extended Family</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Comprehensive Kashmir Valley Family Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Discover the complete beauty of Kashmir Valley with your family through our comprehensive 5-night, 6-day 
                premium tour package. This extensive family experience is designed to showcase the diverse landscapes, 
                rich culture, and natural wonders of Kashmir while ensuring comfort and enjoyment for all family members.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With extended stays in each major destination - Srinagar, Pahalgam, and Gulmarg - families have ample 
                time to explore, relax, and create lasting memories. The tour includes premium accommodations, family-friendly 
                activities, cultural experiences, and comprehensive valley exploration that caters to different age groups and interests.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for multi-generation families, large family groups, and families seeking a thorough Kashmir 
                experience. This comprehensive package ensures every family member discovers something special about 
                Kashmir's magnificent valley while enjoying premium comforts and personalized family services.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Comprehensive Valley Family Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Grand Srinagar Family Welcome</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Premium family arrival at Srinagar Airport</li>
                    <li>• Check-in to luxury family resort with connecting rooms</li>
                    <li>• Welcome ceremony with traditional Kashmir hospitality</li>
                    <li>• Family orientation about Kashmir valley destinations</li>
                    <li>• Evening leisure time with family recreational facilities</li>
                    <li>• Traditional family dinner with local cultural program</li>
                    <li>• Overnight in premium family accommodations</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Extended Srinagar Family Exploration</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Comprehensive 01 Hour family Shikara ride on Dal Lake</li>
                    <li>• Extended family tour of all major Mughal Gardens</li>
                    <li>• Interactive family sessions at Shalimar and Nishat Bagh</li>
                    <li>• Family-friendly visit to Shankaracharya Temple</li>
                    <li>• Lunch at family restaurant with panoramic valley views</li>
                    <li>• Afternoon family shopping at traditional Kashmir bazaars</li>
                    <li>• Evening cultural family entertainment programs</li>
                    <li>• Overnight with extended family comfort amenities</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3-4: Extended Pahalgam Family Adventure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Scenic family transfer to beautiful Pahalgam valley</li>
                    <li>• Check-in to premium riverside family resort for 2 nights</li>
                    <li>• Day 3: Comprehensive tour of Pahalgam Valley attractions</li>
                    <li>• Extended family exploration of Betab Valley and Aru Valley</li>
                    <li>• Family pony rides and nature walks along Lidder River</li>
                    <li>• Day 4: Adventure day with family-friendly activities</li>
                    <li>• Visit to Chandanwari with family glacier experience</li>
                    <li>• Family camping experience under stars (weather permitting)</li>
                    <li>• Traditional village visit with local family interactions</li>
                    <li>• Extended family bonding time with recreational activities</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 5: Gulmarg Family Mountain Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Family journey to magnificent Gulmarg meadows</li>
                    <li>• Family-safe Gulmarg Gondola experience to Apharwat Peak</li>
                    <li>• Extended family time at high-altitude mountain station</li>
                    <li>• Family snow activities and mountain games (seasonal)</li>
                    <li>• Premium family lunch at mountain restaurant</li>
                    <li>• Family golf experience at world's highest golf course</li>
                    <li>• Return to Srinagar for final family celebration</li>
                    <li>• Farewell family dinner with valley specialties</li>
                    <li>• Overnight in premium Srinagar family accommodation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 6: Family Farewell & Valley Memories</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final family breakfast with comprehensive valley views</li>
                    <li>• Last-minute family shopping for Kashmir valley souvenirs</li>
                    <li>• Family photo session at iconic valley locations</li>
                    <li>• Premium transfer to airport with family comfort</li>
                    <li>• Departure with comprehensive valley family memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Valley Family Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Valley Family Tour Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Complete Valley Coverage</h4>
                  <p className="text-gray-600">Comprehensive exploration of all major Kashmir valley destinations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Extended Family Time</h4>
                  <p className="text-gray-600">Ample time in each destination for family bonding</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Multi-Generation Friendly</h4>
                  <p className="text-gray-600">Activities suitable for all ages and interests</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Family Resorts</h4>
                  <p className="text-gray-600">Luxury accommodations with family-specific amenities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Immersion</h4>
                  <p className="text-gray-600">Deep cultural experiences with local family interactions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Memory Documentation</h4>
                  <p className="text-gray-600">Professional family photography at iconic valley locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}