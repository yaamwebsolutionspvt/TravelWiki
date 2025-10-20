import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";

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

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-30" style={{
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

          {/* Itinerary with ItineraryCard */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Cultural Experience Itinerary</h2>
            <div className="space-y-8">
              <ItineraryCard
                title="10:00 AM - Welcome & Traditional Breakfast"
                activities={[
                  "Welcome with traditional Kashmiri kehwa and noon chai",
                  "Introduction to Kashmir's cultural heritage",
                  "Traditional breakfast with local families"
                ]}
                imageUrl="https://via.placeholder.com/400x300/9F7AEA/FFFFFF?text=Welcome+Breakfast"
                imageAlt="Welcome Breakfast"
                imageTitle="Welcome & Breakfast"
                imageSubtitle="Kashmiri Kehwa & Cuisine"
                icon="🍵"
              />
              <ItineraryCard
                title="11:30 AM - Handicrafts Workshop"
                activities={[
                  "Visit to local artisan workshops",
                  "Hands-on experience in papier-mâché or wood carving",
                  "Interaction with master craftsmen",
                  "Create your own souvenir to take home"
                ]}
                imageUrl="https://via.placeholder.com/400x300/7F9CF5/FFFFFF?text=Handicrafts+Workshop"
                imageAlt="Handicrafts Workshop"
                imageTitle="Handicrafts Workshop"
                imageSubtitle="Learn & Create"
                icon="🎨"
              />
              <ItineraryCard
                title="1:00 PM - Traditional Wazwan Lunch"
                activities={[
                  "Authentic multi-course Kashmiri meal",
                  "Learn about traditional dining customs",
                  "Cooking demonstration by local chefs"
                ]}
                imageUrl="https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Wazwan+Lunch"
                imageAlt="Wazwan Lunch"
                imageTitle="Traditional Wazwan"
                imageSubtitle="Kashmiri Cuisine"
                icon="🥘"
              />
              <ItineraryCard
                title="3:00 PM - Cultural Performances"
                activities={[
                  "Traditional dance performances (Rouf, Hafiza)",
                  "Folk music sessions with live instruments",
                  "Storytelling session with local legends",
                  "Opportunity to participate in group dances"
                ]}
                imageUrl="https://via.placeholder.com/400x300/F43F5E/FFFFFF?text=Cultural+Performances"
                imageAlt="Cultural Performances"
                imageTitle="Performances"
                imageSubtitle="Dance & Music"
                icon="💃"
              />
              <ItineraryCard
                title="5:00 PM - Heritage Walk"
                activities={[
                  "Guided tour of historical sites",
                  "Visit to traditional Kashmiri homes",
                  "Learn about architecture and lifestyle",
                  "Tea ceremony in a heritage setting"
                ]}
                imageUrl="https://via.placeholder.com/400x300/22C55E/FFFFFF?text=Heritage+Walk"
                imageAlt="Heritage Walk"
                imageTitle="Heritage Walk"
                imageSubtitle="History & Culture"
                icon="🏛️"
              />
            </div>
          </div>

          {/* Experience Inclusions & Exclusions */}
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
    </>
  );
}
