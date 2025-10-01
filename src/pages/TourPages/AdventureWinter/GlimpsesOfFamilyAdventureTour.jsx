import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const adv1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514581/travelwiki/assets/Adventure/adv1.jpg";

export default function GlimpsesOfFamilyAdventureTour() {
  const seoData = useSEO({
    title: "Glimpses Of Family Adventure Tour | 3 Nights 4 Days Kashmir Winter Package",
    description: "Perfect family adventure tour in Kashmir with winter activities. 3 nights Srinagar package with snow sports, Shikara rides, and family-friendly winter adventures. Starting at ₹12,999.",
    keywords: "Kashmir family adventure, winter family tour, 3 nights Kashmir adventure, family snow activities, Kashmir winter package, Srinagar family tour",
    canonical: "https://www.travelwiki.org.in/packages/glimpses-of-family-adventure-tour/"
  });

  const packageData = {
    name: "Glimpses Of Family Adventure Tour",
    description: "A perfect introduction to Kashmir winter adventures for families. Experience snow activities, traditional Shikara rides, and cozy winter stays in beautiful Srinagar.",
    price: "12999",
    originalPrice: "15599",
    duration: "4 days",
    destinations: ["Srinagar"],
    highlights: [
      "01 Hr Shikara Ride",
      "Family-friendly snow activities",
      "Candlelight dinner & fresh fruit basket",
      "3 Hotels, 6 Activities, 4 Transfers",
      "Winter sightseeing tours",
      "Traditional Kashmiri hospitality"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-25" style={{
          backgroundImage: `url(${adv1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Glimpses Of Family Adventure Tour
              </h1>
              <p className="text-xl mb-8">
                Perfect introduction to Kashmir's winter wonderland with family-friendly adventure activities
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
                <div className="text-blue-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Nights / 4 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold text-gray-800">Family Focus</h3>
                <p className="text-gray-600">All Age Groups</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">6 Adventures</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">❄️</div>
                <h3 className="font-semibold text-gray-800">Season</h3>
                <p className="text-gray-600">Winter Special</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Family Adventure Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Perfect for families seeking their first taste of Kashmir's winter magic! This carefully designed 
                3-night adventure tour introduces families to the beauty of Kashmir with safe, enjoyable activities 
                suitable for all age groups.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the winter wonderland of Srinagar with traditional Shikara rides on partially frozen lakes, 
                gentle snow activities, and cozy evenings with candlelight dinners. The tour is designed to create 
                lasting memories while ensuring comfort and safety for the entire family.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With experienced guides, family-friendly accommodations, and a perfect mix of adventure and relaxation, 
                this tour is ideal for introducing children to the magical world of Kashmir winters.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Family Adventure Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Arrival in Winter Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Warm welcome at Srinagar airport</li>
                    <li>• Check-in to family-friendly heated accommodation</li>
                    <li>• Welcome cake and fresh fruit basket for the family</li>
                    <li>• Evening winter clothing orientation</li>
                    <li>• Traditional Kashmiri dinner with local specialties</li>
                    <li>• Comfortable overnight stay with heating facilities</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Dal Lake Winter Adventure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast with hot Kashmiri tea (Kahwa)</li>
                    <li>• 01 Hour winter Shikara ride with blankets and heating</li>
                    <li>• Visit floating vegetable market (winter version)</li>
                    <li>• Family snow play session at designated safe areas</li>
                    <li>• Visit to Mughal Gardens in winter beauty</li>
                    <li>• Shopping for winter souvenirs and handicrafts</li>
                    <li>• Special candlelight family dinner</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 3: Winter Sightseeing & Activities</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Visit Shankaracharya Temple for panoramic winter views</li>
                    <li>• Explore Jamia Masjid and experience winter architecture</li>
                    <li>• Family-friendly sledding activity (weather permitting)</li>
                    <li>• Traditional carpet weaving demonstration</li>
                    <li>• Hot lunch at local family restaurant</li>
                    <li>• Winter photography session with family</li>
                    <li>• Cultural evening with traditional music</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 4: Farewell Breakfast & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final family breakfast with Kashmiri specialties</li>
                    <li>• Last-minute souvenir shopping</li>
                    <li>• Hotel check-out and airport transfer</li>
                    <li>• Departure with beautiful winter memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Family Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Perfect for Families</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">👶</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Kid-Friendly</h4>
                  <p className="text-gray-600">Safe activities suitable for children of all ages</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Comfortable Stays</h4>
                  <p className="text-gray-600">Heated rooms and family-friendly accommodations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Family Meals</h4>
                  <p className="text-gray-600">Kid-friendly meals with local Kashmiri flavors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}