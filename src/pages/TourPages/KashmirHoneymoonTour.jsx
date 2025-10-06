import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
import ItineraryCard from "../../components/ItineraryCard";


export default function KashmirHoneymoonTour() {

  const packageData = {
    name: "Kashmir Honeymoon Tour Package",
    description: "A romantic getaway designed for couples to experience the paradise of Kashmir with intimate moments and beautiful memories.",
    price: "13999",
    duration: "4 days",
    destinations: ["Srinagar", "Gulmarg"],
    highlights: [
      "Romantic houseboat stay",
      "Private Shikara rides",
      "Candlelight dinners",
      "Couple photography sessions",
      "Gondola rides for two",
      "Romantic garden walks"
    ]
  };

  return (
    <>
      <SEO 
        pageType="honeymoon"
        customTitle="Kashmir Honeymoon Tour Package | 3 Nights 4 Days Romantic Getaway"
        customDescription="Perfect Kashmir honeymoon package for couples with romantic experiences in Srinagar and Gulmarg. Houseboat stay, Shikara rides, and intimate moments in paradise. Starting at ₹13,999."
        customKeywords={["Kashmir honeymoon package", "romantic Kashmir tour", "Kashmir honeymoon 3 nights", "couples tour Kashmir", "romantic getaway Kashmir"]}
        customImage="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514592/travelwiki/assets/Bestseller/kashmir-package.jpg"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": packageData.name,
            "description": packageData.description,
            "image": "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514592/travelwiki/assets/Bestseller/kashmir-package.jpg",
            "offers": {
              "@type": "Offer",
              "price": packageData.price,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-01-01",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "TravelAgency",
              "name": "Travel Wiki",
              "url": "https://travelwiki.org.in",
              "telephone": "+91 8899971960"
            },
            "duration": packageData.duration,
            "touristType": ["Honeymoon Couples", "Romantic Travelers", "Newlyweds"]
          })}
        </script>
      </SEO>
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-pink-600 to-red-700 text-white h-[100vh] sm:h-[100vh] md:h-[100vh] overflow-hidden">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Kashmir Honeymoon Tour Package
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Begin your journey of love in the paradise on earth with our romantic Kashmir honeymoon package
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹13,999</span>
                  <span className="text-lg ml-2 text-black">per couple</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Honeymoon%20Tour%20Package%20from%20Travel%20Wiki."
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
                <div className="text-pink-600 text-3xl mb-2">💕</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Nights / 4 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-pink-600 text-3xl mb-2">🏩</div>
                <h3 className="font-semibold text-gray-800">Accommodation</h3>
                <p className="text-gray-600">Romantic Houseboat</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-pink-600 text-3xl mb-2">🥂</div>
                <h3 className="font-semibold text-gray-800">Special</h3>
                <p className="text-gray-600">Candlelight Dinners</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-pink-600 text-3xl mb-2">📸</div>
                <h3 className="font-semibold text-gray-800">Photography</h3>
                <p className="text-gray-600">Couple Sessions</p>
              </div>
            </div>

            {/* Romantic Features */}
            <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Romantic Experiences</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/packages/kashmir-houseboat-tour" className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">🛥️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Houseboat Romance</h4>
                  <p className="text-gray-600">Stay in a romantic houseboat on Dal Lake with privacy and luxury</p>
                </Link>
                <Link to="/packages/kashmir-shikara-experience" className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">🚣‍♀️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Private Shikara</h4>
                  <p className="text-gray-600">Exclusive Shikara rides with flower decorations for couples</p>
                </Link>
                <Link to="/packages/kashmir-gulmarg-tour" className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">🌅</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sunrise Views</h4>
                  <p className="text-gray-600">Watch beautiful sunrises together over the Himalayas</p>
                </Link>
                <Link to="/packages/srinagar-tour-package" className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">🌹</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Garden Strolls</h4>
                  <p className="text-gray-600">Romantic walks through beautiful Mughal gardens</p>
                </Link>
                <Link to="/packages/kashmir-cultural-experience" className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Evening</h4>
                  <p className="text-gray-600">Enjoy traditional Kashmiri performances together</p>
                </Link>
                <Link to="/packages/kashmir-shopping-guide" className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Shopping Together</h4>
                  <p className="text-gray-600">Shop for handicrafts and souvenirs in local markets</p>
                </Link>
              </div>
            </div>

            {/* Honeymoon Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Romantic Itinerary</h2>
              
              <div className="space-y-6">
                <ItineraryCard
                  title="Day 1: Arrival & Romance Begins"
                  activities={[
                    "Airport pickup with flower garlands",
                    "Check-in to romantic houseboat",
                    "Welcome drink and room decoration",
                    "Evening Shikara ride with sunset views",
                    "Candlelight dinner on houseboat"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Romantic+Arrival"
                  imageAlt="Romantic Arrival"
                  imageTitle="Romantic Arrival"
                  imageSubtitle="Love Begins"
                  icon="💕"
                />

                <ItineraryCard
                  title="Day 2: Srinagar Exploration"
                  activities={[
                    "Visit Mughal Gardens (Shalimar & Nishat)",
                    "Couple photography session",
                    "Shopping in local markets",
                    "Traditional Kashmiri lunch",
                    "Romantic evening at houseboat"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Mughal+Gardens"
                  imageAlt="Mughal Gardens"
                  imageTitle="Mughal Gardens"
                  imageSubtitle="Romantic Exploration"
                  icon="🌹"
                />

                <ItineraryCard
                  title="Day 3: Gulmarg Adventure"
                  activities={[
                    "Transfer to Gulmarg",
                    "Gondola ride to Kongdoori",
                    "Snow activities (seasonal)",
                    "Romantic lunch with mountain views",
                    "Evening return to Srinagar"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Gulmarg+Gondola"
                  imageAlt="Gulmarg Gondola Experience"
                  imageTitle="Gulmarg Gondola"
                  imageSubtitle="Mountain Adventure"
                  icon="🚡"
                />

                <ItineraryCard
                  title="Day 4: Farewell"
                  activities={[
                    "Late breakfast on houseboat",
                    "Final shopping for souvenirs",
                    "Airport transfer",
                    "Departure with beautiful memories"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Departure"
                  imageAlt="Departure"
                  imageTitle="Departure"
                  imageSubtitle="Beautiful Memories"
                  icon="✈️"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}