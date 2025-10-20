import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
const fm1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514624/travelwiki/assets/Family/fm1.png";

export default function SrinagarGetawayPackageWithPremiumStay() {
  const seoData = useSEO({
    title: "Srinagar Getaway Package With Premium Stay | 3 Nights 4 Days Luxury Family Tour",
    description: "Premium Srinagar family getaway with 3 nights luxury stay. Experience Dal Lake, Mughal Gardens, and premium family accommodations at ₹49,999.",
    keywords: "Srinagar premium getaway package, luxury Kashmir family short trip, premium Srinagar family tour, luxury Dal Lake family experience",
    canonical: "https://www.travelwiki.org.in/packages/srinagar-getaway-package-premium-stay/"
  });

  const packageData = {
    name: "Srinagar Getaway Package With Premium Stay",
    description: "A premium Srinagar getaway featuring luxury accommodations and exclusive family experiences in Kashmir's most beautiful city, perfect for families seeking quality time together.",
    price: "49999",
    originalPrice: "59999",
    duration: "4 days",
    destinations: ["Srinagar"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Premium luxury accommodation",
      "Complete Srinagar sightseeing",
      "Pahalgam Valley day excursion",
      "Exclusive family experiences",
      "Premium hospitality services"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white min-h-[75vh] overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Srinagar Getaway Package With Premium Stay
              </h1>
              <p className="text-xl mb-8">
                Enjoy a premium family getaway in beautiful Srinagar with luxury accommodations and exclusive family experiences
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹49,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹59,999</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Srinagar%20Getaway%20Package%20With%20Premium%20Stay%20from%20Travel%20Wiki."
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
                <div className="text-indigo-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Nights / 4 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Accommodation</h3>
                <p className="text-gray-600">Premium Luxury</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Focus</h3>
                <p className="text-gray-600">Srinagar Exclusive</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">⭐</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Premium Quality</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Premium Srinagar Family Getaway</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the ultimate Srinagar family getaway with our premium 3-night, 4-day package that focuses 
                exclusively on Kashmir's most beautiful city. This luxury getaway is perfect for families seeking 
                quality time together in premium accommodations while exploring Srinagar's iconic attractions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Stay in Srinagar's finest family-friendly luxury hotels while enjoying exclusive access to premium 
                experiences, personalized services, and comprehensive exploration of the city's magnificent attractions. 
                This getaway includes a day excursion to beautiful Pahalgam, adding variety to your premium stay.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for busy families seeking a premium yet manageable Kashmir experience, families celebrating 
                special occasions, and those who prefer the comfort and convenience of staying in one location while 
                enjoying luxury amenities and exclusive family services.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Premium Getaway Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Premium Srinagar Arrival"
                  activities={[
                    "VIP arrival welcome at Srinagar Airport",
                    "Luxury transfer to premium family resort",
                    "Check-in to exclusive family suites with lake views",
                    "Welcome refreshments in premium lounge setting",
                    "Premium hotel amenities tour and family orientation",
                    "Evening leisure at luxury spa and recreation facilities",
                    "Gourmet dinner at hotel's premium restaurant",
                    "Overnight in luxury family accommodations"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Premium+Srinagar+Arrival"
                  imageAlt="Premium Srinagar Arrival"
                  imageTitle="Premium Srinagar Arrival"
                  imageSubtitle="VIP Welcome Experience"
                  icon="🏨"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 2: Premium Dal Lake & Gardens Experience"
                  activities={[
                    "Exclusive 01 Hour premium family Shikara ride",
                    "Private access to premium areas of Dal Lake",
                    "VIP tour of magnificent Mughal Gardens with expert guide",
                    "Premium family photography sessions in gardens",
                    "Luxury lunch at Kashmir's finest heritage restaurant",
                    "Premium shopping experience at exclusive boutiques",
                    "Evening premium cultural program at hotel",
                    "Overnight in luxury with premium family services"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Premium+Dal+Lake"
                  imageAlt="Premium Dal Lake & Gardens Experience"
                  imageTitle="Premium Dal Lake"
                  imageSubtitle="Exclusive Family Experience"
                  icon="🚣‍♀️"
                  imageOnRight={true}
                />
                
                <ItineraryCard
                  title="Day 3: Premium Pahalgam Valley Excursion"
                  activities={[
                    "Luxury private transfer to beautiful Pahalgam Valley",
                    "Premium guided tour of Pahalgam's scenic attractions",
                    "VIP access to Betab Valley with exclusive arrangements",
                    "Premium family pony rides with professional guides",
                    "Luxury picnic lunch in pristine valley settings",
                    "Premium family activities by Lidder River",
                    "Comfortable return to Srinagar luxury hotel",
                    "Premium spa treatments for family relaxation",
                    "Overnight in luxury accommodations"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Premium+Pahalgam"
                  imageAlt="Premium Pahalgam Valley Excursion"
                  imageTitle="Premium Pahalgam"
                  imageSubtitle="Luxury Valley Experience"
                  icon="🏔️"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 4: Premium Departure & Final Experiences"
                  activities={[
                    "Final luxury breakfast with premium service",
                    "Exclusive last-minute shopping with personal assistant",
                    "Premium family photo session at iconic Srinagar locations",
                    "Luxury souvenir selection and memory compilation",
                    "VIP transfer to airport with premium comfort",
                    "Departure with exclusive premium getaway memories"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/0891B2/FFFFFF?text=Premium+Departure"
                  imageAlt="Premium Departure & Final Experiences"
                  imageTitle="Premium Departure"
                  imageSubtitle="Final Luxury Experience"
                  icon="✈️"
                  imageOnRight={true}
                />
              </div>
            </div>

            {/* Premium Getaway Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Premium Getaway Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Accommodations</h4>
                  <p className="text-gray-600">Luxury family suites in Srinagar's finest hotels</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusive Experiences</h4>
                  <p className="text-gray-600">VIP access and premium family activities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍💼</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Personal Service</h4>
                  <p className="text-gray-600">Dedicated family concierge and premium hospitality</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Luxury Amenities</h4>
                  <p className="text-gray-600">Premium spa, recreation, and family facilities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Transport</h4>
                  <p className="text-gray-600">Luxury vehicles with professional chauffeurs</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gourmet Dining</h4>
                  <p className="text-gray-600">Premium restaurants and exclusive family dining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}