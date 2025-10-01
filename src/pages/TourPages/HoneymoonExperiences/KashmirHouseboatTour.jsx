import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";

export default function KashmirHouseboatTour() {
  const seoData = useSEO({
    title: "Kashmir Houseboat Tour Package | 3 Nights Dal Lake Experience",
    description: "Experience the unique charm of staying in traditional Kashmir houseboats on Dal Lake. 3 nights package with Shikara rides, local sightseeing, and authentic experiences. Starting at ₹8,999.",
    keywords: "Kashmir houseboat tour, Dal Lake houseboat, houseboat stay Kashmir, floating hotel Kashmir, Kashmir water stay",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-houseboat-tour/"
  });

  const packageData = {
    name: "Kashmir Houseboat Tour Package",
    description: "Experience the unique floating accommodation of Kashmir with traditional houseboats on Dal Lake, offering an authentic Kashmiri lifestyle.",
    price: "8999",
    duration: "4 days",
    destinations: ["Srinagar", "Dal Lake"],
    highlights: [
      "Traditional houseboat stay",
      "Dal Lake floating experience",
      "Authentic Kashmiri hospitality",
      "Traditional cuisine on water",
      "Shikara rides included",
      "Local sightseeing tours"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-teal-600 to-blue-700 text-white py-25">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Houseboat Tour Package
              </h1>
              <p className="text-xl mb-8">
                Experience the unique charm of living on water with our traditional houseboat accommodation on Dal Lake
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹8,999</span>
                  <span className="text-lg ml-2 text-black">per person</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Houseboat%20Tour%20Package%20from%20Travel%20Wiki."
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
                <div className="text-teal-600 text-3xl mb-2">🛥️</div>
                <h3 className="font-semibold text-gray-800">Accommodation</h3>
                <p className="text-gray-600">Traditional Houseboat</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🌊</div>
                <h3 className="font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">Dal Lake</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🍽️</div>
                <h3 className="font-semibold text-gray-800">Dining</h3>
                <p className="text-gray-600">Traditional Cuisine</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🚣</div>
                <h3 className="font-semibold text-gray-800">Transport</h3>
                <p className="text-gray-600">Shikara Rides</p>
              </div>
            </div>

            {/* Houseboat Experience */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Houseboat Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kashmir houseboats are a unique accommodation experience that dates back to the British era. These 
                floating palaces on Dal Lake offer an authentic taste of Kashmiri culture and hospitality. Each 
                houseboat is beautifully crafted with intricate woodwork and traditional furnishings.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Living on a houseboat allows you to wake up to the gentle lapping of water against the boat, 
                surrounded by the magnificent Zabarwan mountains. The experience includes traditional Kashmiri meals 
                served on board, prepared by skilled local chefs using authentic recipes passed down through generations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The houseboats are equipped with modern amenities while maintaining their traditional charm. Each 
                room features carved walnut wood furniture, comfortable beds, and attached bathrooms. The dining 
                area and living room showcase beautiful Kashmiri carpets and handicrafts.
              </p>
            </div>

            {/* Houseboat Features */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Houseboat Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Traditional Architecture</h4>
                  <p className="text-gray-600">Authentic Kashmiri woodwork and design</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛏️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Comfortable Rooms</h4>
                  <p className="text-gray-600">Well-furnished rooms with modern amenities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍜</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Authentic Cuisine</h4>
                  <p className="text-gray-600">Traditional Kashmiri meals prepared on board</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌅</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Scenic Views</h4>
                  <p className="text-gray-600">Panoramic views of Dal Lake and mountains</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Immersion</h4>
                  <p className="text-gray-600">Experience authentic Kashmiri lifestyle</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚣‍♂️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Water Transport</h4>
                  <p className="text-gray-600">Complimentary Shikara rides to shore</p>
                </div>
              </div>
            </div>

            {/* Tour Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Houseboat Tour Itinerary</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 1: Arrival & Houseboat Check-in</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Airport pickup and transfer to Dal Lake</li>
                    <li>Shikara ride to houseboat</li>
                    <li>Traditional welcome with Kahwa tea</li>
                    <li>Houseboat orientation and room allocation</li>
                    <li>Evening Shikara ride around Dal Lake</li>
                    <li>Dinner on houseboat with Kashmiri cuisine</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 2: Dal Lake Exploration</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Morning breakfast on houseboat</li>
                    <li>Visit floating vegetable market</li>
                    <li>Explore Char Chinar Island</li>
                    <li>Visit local handicraft shops on water</li>
                    <li>Photography session around the lake</li>
                    <li>Traditional lunch on houseboat</li>
                    <li>Evening cultural program</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 3: Srinagar Sightseeing</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Early morning Shikara ride to shore</li>
                    <li>Visit Mughal Gardens (Shalimar & Nishat)</li>
                    <li>Explore Jamia Masjid and old city</li>
                    <li>Shopping in local markets</li>
                    <li>Return to houseboat for lunch</li>
                    <li>Leisure time and relaxation</li>
                    <li>Farewell dinner with special arrangements</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 4: Departure</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Leisurely breakfast on houseboat</li>
                    <li>Final Shikara ride and photography</li>
                    <li>Check-out from houseboat</li>
                    <li>Transfer to airport via Shikara and taxi</li>
                    <li>Departure with unforgettable memories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}