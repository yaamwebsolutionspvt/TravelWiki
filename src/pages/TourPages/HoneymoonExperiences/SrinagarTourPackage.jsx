import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import { Link } from "react-router-dom";

export default function SrinagarTourPackage() {
  
  const seoData = useSEO({
    title: "Srinagar Tour Package | 6 Nights Capital City Experience",
    description: "Comprehensive Srinagar city tour package covering Dal Lake, Mughal Gardens, houseboats, and local attractions. 6 nights in the summer capital of Kashmir. Explore the Venice of East.",
    keywords: "Srinagar tour package, Dal Lake tour, Mughal Gardens Srinagar, houseboat stay Srinagar, Kashmir capital tour, Venice of East tour",
    canonical: "https://www.travelwiki.org.in/packages/srinagar-tour-package/"
  });

  const packageData = {
    name: "Srinagar Tour Package",
    description: "Complete exploration of Srinagar, the summer capital of Kashmir, featuring comprehensive city tours, cultural experiences, and iconic attractions.",
    price: "Contact for pricing",
    duration: "7 days",
    destinations: ["Srinagar", "Dal Lake", "Nigeen Lake"],
    highlights: [
      "Comprehensive city tour",
      "Dal Lake and Nigeen Lake",
      "All Mughal Gardens",
      "Traditional houseboat stay",
      "Local cultural experiences",
      "Heritage walks and markets"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-25">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Srinagar Tour Package
              </h1>
              <p className="text-xl mb-8">
                Discover the Venice of the East with our comprehensive Srinagar city tour covering all major attractions and cultural experiences
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-2xl font-bold text-black">Contact for Pricing</span>
                </div>
                <Link to='/contact' className="hoveer:cursor-pointer">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Enquire Now
                </button>
                </Link>
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
                <div className="text-teal-600 text-3xl mb-2">🏛️</div>
                <h3 className="font-semibold text-gray-800">Focus</h3>
                <p className="text-gray-600">Srinagar City</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🚣</div>
                <h3 className="font-semibold text-gray-800">Lakes</h3>
                <p className="text-gray-600">Dal & Nigeen</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🌺</div>
                <h3 className="font-semibold text-gray-800">Gardens</h3>
                <p className="text-gray-600">All Mughal Gardens</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🏠</div>
                <h3 className="font-semibold text-gray-800">Culture</h3>
                <p className="text-gray-600">Heritage & Traditions</p>
              </div>
            </div>

            {/* Srinagar Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Srinagar - The Venice of the East</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Srinagar, the summer capital of Jammu and Kashmir, is renowned for its pristine lakes, magnificent 
                Mughal gardens, and unique houseboat accommodations. Often referred to as the "Venice of the East," 
                this beautiful city sits at an altitude of 1,585 meters in the Kashmir Valley, surrounded by the 
                stunning Himalayan ranges.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The city is famous for its intricate network of canals, bridges, and waterways, with Dal Lake being 
                its crown jewel. Srinagar showcases a perfect blend of natural beauty and rich cultural heritage, 
                featuring magnificent Mughal architecture, traditional Kashmiri handicrafts, and warm hospitality 
                that has been welcoming visitors for centuries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive Srinagar tour package is designed for travelers who want to deeply explore this 
                magnificent city, its culture, traditions, and every iconic attraction it has to offer. From floating 
                markets to ancient temples, from luxury houseboats to traditional markets, experience it all.
              </p>
            </div>

            {/* Major Attractions */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Major Srinagar Attractions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏞️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dal Lake</h4>
                  <p className="text-gray-600">Iconic lake with houseboats, Shikara rides, and floating gardens</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mughal Gardens</h4>
                  <p className="text-gray-600">Shalimar, Nishat, Chashme Shahi with terraced lawns and fountains</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🕌</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Jamia Masjid</h4>
                  <p className="text-gray-600">Historic mosque with Indo-Saracenic architecture</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛥️</div>
                  <h4 className="font-semibeld text-gray-800 mb-2">Houseboats</h4>
                  <p className="text-gray-600">Traditional floating accommodations with carved interiors</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Shankaracharya Hill</h4>
                  <p className="text-gray-600">Ancient temple with panoramic city views</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Local Markets</h4>
                  <p className="text-gray-600">Traditional bazaars with handicrafts, carpets, and spices</p>
                </div>
              </div>
            </div>

            {/* Cultural Experiences */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Cultural & Heritage Experiences</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎭 Traditional Experiences</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Traditional Kashmiri Wazwan cuisine tasting
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Local handicraft workshops and demonstrations
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Pashmina and carpet weaving center visits
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Traditional Kashmiri music and dance programs
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Local family home visits and cultural exchange
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Heritage Walks</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Old city heritage walk with local guide
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Historic bridges and canals exploration
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Ancient temples and religious sites tours
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Traditional architecture appreciation tours
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Photography walks through historic quarters
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Comprehensive Srinagar Itinerary</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 1: Arrival & Dal Lake Introduction</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Airport pickup and transfer to houseboat</li>
                    <li>Traditional welcome with Kahwa tea</li>
                    <li>Houseboat orientation and local briefing</li>
                    <li>Evening Shikara ride on Dal Lake</li>
                    <li>Dinner on houseboat with local cuisine</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 2: Mughal Gardens & City Tour</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Morning visit to Shalimar Bagh (Abode of Love)</li>
                    <li>Nishat Bagh (Garden of Joy) exploration</li>
                    <li>Chashme Shahi (Royal Spring) visit</li>
                    <li>Local handicraft shopping and demonstrations</li>
                    <li>Evening leisure at Boulevard Road</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 3: Heritage & Culture Day</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Old city heritage walk with expert guide</li>
                    <li>Jamia Masjid and historic mosques tour</li>
                    <li>Traditional bazaars and local markets</li>
                    <li>Kashmiri handicraft workshops visit</li>
                    <li>Cultural program with traditional music</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 4: Nigeen Lake & Local Experiences</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Morning boat ride on Nigeen Lake</li>
                    <li>Visit to floating vegetable market</li>
                    <li>Local family home visit and cultural exchange</li>
                    <li>Traditional Wazwan lunch experience</li>
                    <li>Sunset photography session</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 5: Shankaracharya & Surroundings</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Early morning visit to Shankaracharya Temple</li>
                    <li>Panoramic views of Srinagar city</li>
                    <li>Pari Mahal (Palace of Fairies) exploration</li>
                    <li>Botanical garden and nature walks</li>
                    <li>Traditional carpet weaving center visit</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 6: Arts & Crafts Deep Dive</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Pashmina weaving workshops and factory visits</li>
                    <li>Paper mache art demonstrations</li>
                    <li>Walnut wood carving workshops</li>
                    <li>Saffron cultivation and processing tour</li>
                    <li>Shopping for authentic souvenirs</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 7: Farewell & Departure</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Final Shikara ride with breakfast on lake</li>
                    <li>Last-minute shopping and souvenir collection</li>
                    <li>Check-out from houseboat</li>
                    <li>Airport transfer with cultural send-off</li>
                    <li>Departure with authentic Kashmir memories</li>
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