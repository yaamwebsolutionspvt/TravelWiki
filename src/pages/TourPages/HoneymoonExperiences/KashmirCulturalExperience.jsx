import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const kashmirTourism = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514604/travelwiki/assets/CulturalTours/ct1.jpg";

export default function KashmirCulturalExperience() {
  const seoData = useSEO({
    title: "Kashmir Cultural Experience | Traditional Performances & Heritage Tours",
    description: "Immerse yourself in the rich cultural heritage of Kashmir with traditional dance performances, folk music, local crafts workshops, and authentic Kashmiri cuisine experiences. Starting at ₹2,999.",
    keywords: "Kashmir cultural tour, traditional Kashmir dance, Kashmiri folk music, Kashmir heritage, cultural performances Kashmir, Kashmiri handicrafts workshop",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-cultural-experience/"
  });

  const packageData = {
    name: "Kashmir Cultural Experience",
    description: "A comprehensive cultural immersion program showcasing the rich traditions, arts, crafts, and heritage of Kashmir.",
    price: "2999",
    originalPrice: "3999",
    duration: "Full Day",
    destinations: ["Srinagar", "Local Villages"],
    highlights: [
      "Traditional Kashmiri dance performances",
      "Folk music and storytelling sessions",
      "Handicrafts workshop participation",
      "Authentic Kashmiri cuisine tasting",
      "Local artisan interactions",
      "Heritage site visits"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-25" style={{
          backgroundImage: `url(${kashmirTourism})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Cultural Experience
              </h1>
              <p className="text-xl mb-8">
                Discover the vibrant traditions, arts, and cultural heritage of Kashmir through immersive experiences
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-white">₹2,999</span>
                  <span className="text-lg line-through ml-2 text-gray-200">₹3,999</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded ml-2">25% OFF</span>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Book Experience
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Overview */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quick Details */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🎭</div>
                <h3 className="font-semibold text-gray-800">Performances</h3>
                <p className="text-gray-600">Traditional Dance & Music</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🎨</div>
                <h3 className="font-semibold text-gray-800">Workshops</h3>
                <p className="text-gray-600">Handicrafts & Art</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🍽️</div>
                <h3 className="font-semibold text-gray-800">Cuisine</h3>
                <p className="text-gray-600">Authentic Wazwan</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🏛️</div>
                <h3 className="font-semibold text-gray-800">Heritage</h3>
                <p className="text-gray-600">Historical Sites</p>
              </div>
            </div>

            {/* About Cultural Experience */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Kashmir's Rich Cultural Heritage</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kashmir's cultural heritage is a beautiful tapestry woven from centuries of diverse influences. 
                Our cultural experience program offers you an authentic glimpse into the traditions, arts, and 
                customs that have shaped this paradise on earth. From the mystical Sufi traditions to the 
                vibrant folk dances, Kashmir's culture is as breathtaking as its landscapes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the warmth of Kashmiri hospitality as local artisans share their skills, storytellers 
                narrate ancient tales, and performers bring traditional dances to life. This immersive journey 
                will connect you with the soul of Kashmir, leaving you with a deeper appreciation for its 
                rich cultural legacy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether it's learning the intricate art of papier-mâché, witnessing the graceful Rouf dance, 
                or savoring the aromatic Wazwan cuisine, every moment of this cultural experience is designed 
                to create lasting memories and meaningful connections.
              </p>
            </div>

            {/* Cultural Activities */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Cultural Activities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">💃</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Traditional Dance</h4>
                  <p className="text-gray-600 text-center">Witness the graceful Rouf, Hafiza, and Dumhal dances performed by local artists</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">🎵</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Folk Music</h4>
                  <p className="text-gray-600 text-center">Listen to soulful Chakri and Sufi music with traditional instruments</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">🧵</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Handicraft Workshop</h4>
                  <p className="text-gray-600 text-center">Learn papier-mâché, wood carving, and embroidery from master craftsmen</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">📚</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Storytelling</h4>
                  <p className="text-gray-600 text-center">Ancient folktales and legends narrated by local storytellers</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">🥘</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Cooking Experience</h4>
                  <p className="text-gray-600 text-center">Participate in preparing traditional Kashmiri dishes</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">🏺</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Pottery Making</h4>
                  <p className="text-gray-600 text-center">Try your hand at traditional Kashmiri pottery techniques</p>
                </div>
              </div>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Cultural Experience Itinerary</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">10:00 AM - Welcome & Traditional Breakfast</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Welcome with traditional Kashmiri kehwa and noon chai</li>
                    <li>Introduction to Kashmir's cultural heritage</li>
                    <li>Traditional breakfast with local families</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">11:30 AM - Handicrafts Workshop</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Visit to local artisan workshops</li>
                    <li>Hands-on experience in papier-mâché or wood carving</li>
                    <li>Interaction with master craftsmen</li>
                    <li>Create your own souvenir to take home</li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">1:00 PM - Traditional Wazwan Lunch</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Authentic multi-course Kashmiri meal</li>
                    <li>Learn about traditional dining customs</li>
                    <li>Cooking demonstration by local chefs</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">3:00 PM - Cultural Performances</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Traditional dance performances (Rouf, Hafiza)</li>
                    <li>Folk music sessions with live instruments</li>
                    <li>Storytelling session with local legends</li>
                    <li>Opportunity to participate in group dances</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">5:00 PM - Heritage Walk</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Guided tour of historical sites</li>
                    <li>Visit to traditional Kashmiri homes</li>
                    <li>Learn about architecture and lifestyle</li>
                    <li>Tea ceremony in a heritage setting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Inclusions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Experience Includes
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Professional cultural guide
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    All cultural activities and workshops
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Traditional Wazwan lunch
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Live performances and demonstrations
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Handicraft materials and souvenirs
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Traditional refreshments throughout
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  Not Included
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Transportation to venues
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Additional shopping expenses
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Professional photography
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Personal expenses
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Accommodation
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Tips and gratuities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}