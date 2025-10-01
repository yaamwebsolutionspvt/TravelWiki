import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const ct5 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514612/travelwiki/assets/CulturalTours/ct5.jpg";

export default function GurezValleyTour() {
  const seoData = useSEO({
    title: "Gurez Valley Tour | 3 Nights 4 Days Cultural Kashmir Experience",
    description: "Discover the pristine beauty and rich culture of Gurez Valley with our 3-night cultural tour. Experience traditional Dard culture, scenic landscapes, and authentic valley life. Starting at ₹14,999.",
    keywords: "Gurez Valley tour, 3 nights Kashmir culture, Dard culture experience, Kashmir cultural tour, Gurez Valley package, traditional Kashmir life",
    canonical: "https://www.travelwiki.org.in/packages/gurez-valley-tour/"
  });

  const packageData = {
    name: "Gurez Valley Cultural Tour",
    description: "An immersive cultural journey to the pristine Gurez Valley, experiencing authentic Dard culture, traditional lifestyle, and breathtaking Himalayan landscapes.",
    price: "14999",
    originalPrice: "17999",
    duration: "4 days",
    destinations: ["Srinagar", "Gurez Valley"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour of Tuleil Valley",
      "Traditional Dard culture experience",
      "Authentic Kashmiri cuisine",
      "Local handicraft demonstrations"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[65vh] py-25 overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gurez Valley Cultural Tour
              </h1>
              <p className="text-xl mb-8">
                Discover the pristine beauty and authentic Dard culture of Kashmir's hidden gem - Gurez Valley
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹14,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹17,999</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Gurez%20Valley%20Cultural%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-green-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Nights / 4 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Destination</h3>
                <p className="text-gray-600">Gurez Valley</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🎭</div>
                <h3 className="font-semibold text-gray-800">Culture</h3>
                <p className="text-gray-600">Dard Heritage</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Stay</h3>
                <p className="text-gray-600">3 Hotels</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Discover Authentic Gurez Valley Culture</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on a cultural odyssey to the pristine Gurez Valley, one of Kashmir's most remote and 
                culturally rich destinations. This 3-night, 4-day tour offers an authentic glimpse into the 
                traditional lifestyle of the Dard community, set against breathtaking Himalayan landscapes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Located near the Line of Control, Gurez Valley remains largely untouched by modernization, 
                preserving its ancient customs, traditional architecture, and unique cultural practices. 
                Experience the warm hospitality of local communities and witness age-old traditions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for cultural enthusiasts, photographers, and travelers seeking authentic experiences 
                away from crowded tourist destinations. This tour combines cultural immersion with natural 
                beauty exploration.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Cultural Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Srinagar Cultural Foundation</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival at Srinagar and check-in to heritage hotel</li>
                    <li>• Traditional welcome ceremony with Kahwa tea</li>
                    <li>• Cultural 01 Hour Shikara ride on Dal Lake</li>
                    <li>• Visit to local handicraft workshops and artisans</li>
                    <li>• Explore Srinagar's cultural sites and old city bazaars</li>
                    <li>• Traditional Kashmiri dinner with cultural program</li>
                    <li>• Overnight stay in Srinagar</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚗 Day 2: Journey to Gurez Valley</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early morning departure to Gurez Valley via Bandipora</li>
                    <li>• Scenic drive through Razdan Pass and mountain landscapes</li>
                    <li>• Stop at traditional villages en route for cultural interactions</li>
                    <li>• Check-in to local guesthouse in Gurez Valley</li>
                    <li>• Introduction to Dard culture and community leaders</li>
                    <li>• Evening walk through traditional Gurez village</li>
                    <li>• Traditional dinner with local family homestay experience</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌄 Day 3: Deep Cultural Immersion</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning tour of Tuleil Valley with local guide</li>
                    <li>• Visit to traditional Dard wooden houses and architecture</li>
                    <li>• Participate in local handicraft making sessions</li>
                    <li>• Learn about traditional farming and agricultural practices</li>
                    <li>• Authentic lunch prepared by local community</li>
                    <li>• Visit local school and interact with children</li>
                    <li>• Evening cultural program with folk songs and dances</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 4: Cultural Farewell & Return</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final breakfast with host family</li>
                    <li>• Farewell ceremony with local community</li>
                    <li>• Purchase authentic handmade souvenirs</li>
                    <li>• Scenic return journey to Srinagar</li>
                    <li>• Cultural shopping at Srinagar's traditional markets</li>
                    <li>• Departure transfer to airport with cultural memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cultural Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Cultural Experience Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dard Culture</h4>
                  <p className="text-gray-600">Authentic experience of ancient Dard traditions and customs</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏘️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Traditional Villages</h4>
                  <p className="text-gray-600">Visit untouched villages with traditional wooden architecture</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Handicrafts</h4>
                  <p className="text-gray-600">Learn and participate in traditional craft making</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Local Cuisine</h4>
                  <p className="text-gray-600">Authentic Kashmiri and Dard traditional food experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Homestay Experience</h4>
                  <p className="text-gray-600">Stay with local families and experience daily life</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎵</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Folk Programs</h4>
                  <p className="text-gray-600">Traditional music, dance, and cultural performances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}