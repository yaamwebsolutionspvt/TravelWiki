import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const fm2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514626/travelwiki/assets/Family/fm2.jpg";

export default function KashmirFamilyPackageLuxuriousStay() {
  const seoData = useSEO({
    title: "Kashmir Family Package Luxurious Stay | 4 Nights 5 Days Premium Family Tour",
    description: "Experience luxurious family vacation in Kashmir with premium 4-night package. Luxury accommodations, houseboat stay, family activities across Srinagar, Pahalgam, Gulmarg at ₹59,999.",
    keywords: "Kashmir family package luxurious stay, premium Kashmir family tour, luxury family vacation Kashmir, houseboat family experience, Kashmir family holiday",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-family-package-luxurious-stay/"
  });

  const packageData = {
    name: "Kashmir Family Package (Luxurious Stay)",
    description: "A premium family-focused Kashmir experience with luxurious accommodations, exclusive houseboat stays, and carefully curated family activities across Kashmir's most beautiful destinations.",
    price: "59999",
    originalPrice: "71999",
    duration: "5 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Luxurious houseboat stay experience",
      "Premium family-friendly accommodations",
      "Complete Tour of Pahalgam Valley",
      "Gulmarg family adventure activities",
      "Dedicated family concierge services"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Kashmir Family Package (Luxurious Stay)
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Create unforgettable family memories with our premium luxurious Kashmir package featuring exclusive accommodations and family-centered experiences
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
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Family%20Package%20(Luxurious%20Stay)%20from%20Travel%20Wiki."
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
                <p className="text-gray-600">4 Nights / 5 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-rose-600 text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold text-gray-800">Perfect For</h3>
                <p className="text-gray-600">Families</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-rose-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Accommodation</h3>
                <p className="text-gray-600">Luxury Hotels + HB</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-rose-600 text-3xl mb-2">⭐</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Premium Luxury</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Luxurious Family Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Treat your family to the ultimate luxurious Kashmir experience with our premium 4-night, 5-day package 
                designed specifically for discerning families. This exclusive tour combines the finest accommodations, 
                personalized family services, and carefully curated activities that cater to all family members, 
                from grandparents to children.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Stay in Kashmir's most luxurious hotels and experience the iconic houseboat lifestyle with premium 
                amenities. Every aspect of this package is designed with families in mind - from spacious 
                accommodations and kid-friendly activities to cultural experiences that engage all generations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for families seeking a balance of luxury, comfort, adventure, and cultural immersion. This 
                premium package ensures every family member, regardless of age, enjoys a memorable and comfortable 
                Kashmir vacation with the finest hospitality and exclusive experiences.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Luxurious Family Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Royal Srinagar Arrival</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• VIP arrival at Srinagar Airport with family welcome ceremony</li>
                    <li>• Private luxury transfer to premium family-friendly hotel</li>
                    <li>• Check-in to spacious family suites with connecting rooms</li>
                    <li>• Welcome refreshments and Kashmir orientation for family</li>
                    <li>• Evening relaxation at hotel with children's play area</li>
                    <li>• Traditional Kashmiri dinner with family-style service</li>
                    <li>• Overnight in luxury Srinagar accommodation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Srinagar Family Exploration</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Luxurious 01 Hour family Shikara ride on Dal Lake</li>
                    <li>• Visit floating gardens with interactive learning for kids</li>
                    <li>• Family-friendly tour of magnificent Mughal Gardens</li>
                    <li>• Interactive storytelling sessions about Kashmir's history</li>
                    <li>• Lunch at family restaurant with kids' menu</li>
                    <li>• Visit Shankaracharya Temple with family cable car ride</li>
                    <li>• Evening family shopping at handicraft centers</li>
                    <li>• Overnight in luxury hotel with family amenities</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Pahalgam Family Adventure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Luxury family transfer to beautiful Pahalgam</li>
                    <li>• Check-in to premium riverside family resort</li>
                    <li>• Complete family tour of Pahalgam Valley</li>
                    <li>• Visit child-friendly Betab Valley with nature games</li>
                    <li>• Family pony rides and nature photography sessions</li>
                    <li>• Luxury picnic lunch by Lidder River</li>
                    <li>• Evening family activities and bonfire</li>
                    <li>• Overnight in luxurious Pahalgam family accommodation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 4: Gulmarg Family Fun & Houseboat</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning family excursion to scenic Gulmarg</li>
                    <li>• Family-friendly Gulmarg Gondola experience</li>
                    <li>• Snow activities and family games (seasonal)</li>
                    <li>• Luxury family lunch at high-altitude restaurant</li>
                    <li>• Return to Srinagar for premium houseboat experience</li>
                    <li>• Check-in to luxury family houseboat on Dal Lake</li>
                    <li>• Evening family Shikara ride during golden sunset</li>
                    <li>• Traditional Wazwan dinner on houseboat deck</li>
                    <li>• Overnight in luxury houseboat with family rooms</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 5: Family Farewell & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final luxury breakfast on houseboat with lake views</li>
                    <li>• Last-minute family shopping for Kashmir specialties</li>
                    <li>• Family photo session at iconic Kashmir locations</li>
                    <li>• VIP transfer to airport with luxury vehicle</li>
                    <li>• Departure with luxurious family memories of Kashmir</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Luxury Family Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Luxurious Family Package Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Family-Centric Design</h4>
                  <p className="text-gray-600">Every activity and accommodation designed with families in mind</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Luxury Accommodations</h4>
                  <p className="text-gray-600">Premium hotels with family suites and houseboat experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👶</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Kid-Friendly Activities</h4>
                  <p className="text-gray-600">Special activities and entertainment for children</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Personalized Service</h4>
                  <p className="text-gray-600">Dedicated family concierge and personalized experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Family Dining</h4>
                  <p className="text-gray-600">Kids' menus, family-style dining, and dietary accommodations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Luxury Transport</h4>
                  <p className="text-gray-600">Spacious, comfortable vehicles perfect for families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}