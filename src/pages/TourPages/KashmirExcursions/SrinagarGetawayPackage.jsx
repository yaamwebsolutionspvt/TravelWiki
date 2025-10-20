import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
const ex6 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514623/travelwiki/assets/Excursion/ex6.png";

export default function SrinagarGetawayPackage() {
  const seoData = useSEO({
    title: "Srinagar Getaway Package | 3 Nights 4 Days Perfect Short Escape",
    description: "Perfect short Kashmir getaway with 3 nights in beautiful Srinagar. Experience Dal Lake, Mughal Gardens, and local culture. Ideal budget-friendly escape at ₹10,999.",
    keywords: "Srinagar getaway package, 3 nights Kashmir tour, short Kashmir trip, Dal Lake package, budget Kashmir holiday, Srinagar short break",
    canonical: "https://www.travelwiki.org.in/packages/srinagar-getaway-package/"
  });

  const packageData = {
    name: "Srinagar Getaway Package",
    description: "A perfect short getaway to experience the essential beauty of Srinagar with comprehensive local sightseeing, cultural experiences, and relaxing moments by Dal Lake.",
    price: "10999",
    originalPrice: "13199",
    duration: "4 days",
    destinations: ["Srinagar"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Tour of Pahalgam Valley day trip",
      "Complete Srinagar sightseeing",
      "Budget-friendly pricing",
      "Perfect short escape",
      "Comprehensive local experience"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white min-h-[75vh] overflow-hidden bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Srinagar Getaway Package
              </h1>
              <p className="text-xl mb-8">
                Perfect short escape to experience the essential beauty and charm of Srinagar with comprehensive local experiences
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹10,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹13,199</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Srinagar%20Getaway%20Package%20from%20Travel%20Wiki."
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
                <div className="text-teal-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Nights / 4 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">💰</div>
                <h3 className="font-semibold text-gray-800">Value</h3>
                <p className="text-gray-600">Budget-Friendly</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">6 Essential</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">⏰</div>
                <h3 className="font-semibold text-gray-800">Perfect For</h3>
                <p className="text-gray-600">Short Breaks</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Perfect Srinagar Short Getaway</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Escape to the enchanting beauty of Srinagar with our perfectly crafted short getaway package. This 
                3-night, 4-day tour is designed for travelers with limited time who don't want to compromise on 
                experiencing Kashmir's essential attractions. Focused entirely on Srinagar, this getaway maximizes 
                your time while keeping costs affordable.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Despite its short duration, this comprehensive package covers all major Srinagar attractions including 
                the famous Dal Lake, magnificent Mughal Gardens, local markets, and even includes a day excursion to 
                beautiful Pahalgam Valley. It's perfect for weekend getaways, short holidays, or first-time Kashmir visitors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ideal for busy professionals, couples seeking a quick romantic escape, families wanting a short vacation, 
                and budget-conscious travelers. This getaway proves that you don't need weeks to fall in love with 
                Kashmir - four days of well-planned experiences will leave you with lasting memories.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Perfect Getaway Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Warm Srinagar Welcome"
                  activities={[
                    "Friendly arrival at Srinagar Airport",
                    "Quick check-in to comfortable centrally-located hotel",
                    "Welcome refreshments and Kashmir orientation",
                    "Evening relaxed Shikara ride on beautiful Dal Lake",
                    "First taste of Kashmir with traditional dinner",
                    "Comfortable overnight stay in heart of Srinagar"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/0EA5E9/FFFFFF?text=Warm+Srinagar+Welcome"
                  imageAlt="Warm Srinagar Welcome"
                  imageTitle="Warm Srinagar Welcome"
                  imageSubtitle="Friendly Airport Arrival"
                  icon="🌟"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 2: Essential Srinagar Sightseeing"
                  activities={[
                    "Essential 01 Hour Shikara ride on iconic Dal Lake",
                    "Comprehensive tour of world-famous Mughal Gardens",
                    "Visit stunning Shalimar Bagh, Nishat Bagh, and Chashme Shahi",
                    "Quick visit to Shankaracharya Temple for panoramic views",
                    "Lunch at popular local restaurant",
                    "Evening shopping at famous Lal Chowk market",
                    "Traditional dinner with local entertainment",
                    "Comfortable overnight stay"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Essential+Sightseeing"
                  imageAlt="Essential Srinagar Sightseeing"
                  imageTitle="Essential Sightseeing"
                  imageSubtitle="Dal Lake & Mughal Gardens"
                  icon="🚣‍♀️"
                  imageOnRight={true}
                />
                
                <ItineraryCard
                  title="Day 3: Pahalgam Valley Excursion"
                  activities={[
                    "Early morning departure for scenic Pahalgam Valley",
                    "Complete tour of beautiful Pahalgam attractions",
                    "Visit picturesque Betab Valley and Aru Valley",
                    "Quick stop at Chandanwari for mountain views",
                    "Lunch in Pahalgam with valley views",
                    "Optional pony rides and nature walks",
                    "Return to Srinagar in the evening",
                    "Relaxed dinner and overnight stay"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Pahalgam+Valley"
                  imageAlt="Pahalgam Valley Excursion"
                  imageTitle="Pahalgam Valley"
                  imageSubtitle="Scenic Valley Experience"
                  icon="🏔️"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 4: Cultural Experience & Departure"
                  activities={[
                    "Morning visit to traditional handicraft centers",
                    "Quick cultural experience and local interactions",
                    "Final shopping for Kashmir specialties and souvenirs",
                    "Last-minute sightseeing or relaxation time",
                    "Check-out and transfer to Srinagar Airport",
                    "Departure with wonderful short getaway memories"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Cultural+Experience"
                  imageAlt="Cultural Experience & Departure"
                  imageTitle="Cultural Experience"
                  imageSubtitle="Final Cultural Moments"
                  icon="🎨"
                  imageOnRight={true}
                />
              </div>
            </div>

            {/* Getaway Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Perfect Getaway Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Budget-Friendly</h4>
                  <p className="text-gray-600">Excellent value for money with comprehensive experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Time Efficient</h4>
                  <p className="text-gray-600">Maximum experiences packed into minimal time</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Essential Coverage</h4>
                  <p className="text-gray-600">All must-see attractions included in the itinerary</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Comfortable Stay</h4>
                  <p className="text-gray-600">Well-located hotels with good amenities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Convenient Transport</h4>
                  <p className="text-gray-600">All transfers and sightseeing transport included</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Perfect for Everyone</h4>
                  <p className="text-gray-600">Suitable for couples, families, and solo travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}