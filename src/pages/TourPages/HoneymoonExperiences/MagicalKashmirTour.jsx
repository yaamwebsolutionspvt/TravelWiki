import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const holidayPackages = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514635/travelwiki/assets/Honeymoon/kashmir-holiday-pacakges.jpg";

export default function MagicalKashmirTour() {
  const seoData = useSEO({
    title: "Magical Kashmir Tour | 4 Nights 5 Days Honeymoon Package",
    description: "Experience the magic of Kashmir with our 4 nights 5 days romantic tour. Srinagar houseboat, Pahalgam, Gulmarg with candlelight dinners and special arrangements. Starting at ₹15,999.",
    keywords: "magical Kashmir tour, 4 nights Kashmir honeymoon, Srinagar Pahalgam Gulmarg tour, Kashmir couple package, romantic Kashmir getaway",
    canonical: "https://www.travelwiki.org.in/packages/magical-kashmir-tour/"
  });

  const packageData = {
    name: "Magical Kashmir Tour",
    description: "A magical 4-night Kashmir honeymoon tour covering Srinagar houseboat stay, Pahalgam valleys, and Gulmarg meadows with romantic arrangements.",
    price: "15999",
    originalPrice: "19199",
    duration: "5 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Cake, Candle Light Dinner & Fresh Fruit Basket",
      "2N Srinagar (1N Houseboat)",
      "1N Pahalgam",
      "1N Gulmarg",
      "8 romantic activities"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[65vh] py-25 overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600">
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Magical Kashmir Tour
              </h1>
              <p className="text-xl mb-8">
                Experience the true magic of Kashmir with our comprehensive 4-night romantic journey through paradise
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹15,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹19,199</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Magical%20Kashmir%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-purple-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">4 Nights / 5 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">4 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">8 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">5 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Magical Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on a magical journey through Kashmir's most enchanting destinations. This 4-night tour 
                combines the romantic charm of Srinagar's houseboats, the pristine beauty of Pahalgam's valleys, 
                and the alpine splendor of Gulmarg's meadows.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With special honeymoon arrangements including houseboat stays, candlelight dinners, and romantic 
                Shikara rides, this tour creates magical memories that will last a lifetime.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Magical Kashmir Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Arrival in Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival at Srinagar Airport and warm welcome</li>
                    <li>• Check-in to premium hotel in Srinagar</li>
                    <li>• Welcome cake and fresh fruit basket</li>
                    <li>• Evening leisure or local market visit</li>
                    <li>• Special candlelight dinner</li>
                    <li>• Overnight stay in Srinagar hotel</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Srinagar Houseboat Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast and check-out from hotel</li>
                    <li>• Romantic 01 Hour Shikara ride on Dal Lake</li>
                    <li>• Check-in to traditional houseboat</li>
                    <li>• Visit Mughal Gardens (Nishat & Shalimar)</li>
                    <li>• Explore Shankaracharya Temple</li>
                    <li>• Romantic evening on houseboat deck</li>
                    <li>• Overnight stay in houseboat</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Journey to Pahalgam</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast on houseboat</li>
                    <li>• Scenic drive to Pahalgam (Valley of Shepherds)</li>
                    <li>• Check-in to hotel in Pahalgam</li>
                    <li>• Visit Betab Valley and Aru Valley</li>
                    <li>• Horse riding or pony trekking</li>
                    <li>• Evening walks along Lidder River</li>
                    <li>• Overnight stay in Pahalgam</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 4: Gulmarg Adventure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early breakfast and drive to Gulmarg</li>
                    <li>• Gulmarg Gondola cable car ride</li>
                    <li>• Explore Gulmarg's famous golf course</li>
                    <li>• Adventure activities and snow sports (seasonal)</li>
                    <li>• Photography at scenic viewpoints</li>
                    <li>• Return to Srinagar for overnight stay</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 5: Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning breakfast at hotel</li>
                    <li>• Last-minute shopping for souvenirs</li>
                    <li>• Check-out and departure transfer to airport</li>
                    <li>• Departure with magical memories of Kashmir</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Special Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Magical Tour Highlights</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Houseboat Stay</h4>
                  <p className="text-gray-600">Romantic night on traditional Kashmir houseboat</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎂</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Special Arrangements</h4>
                  <p className="text-gray-600">Cake, candlelight dinner & fruit basket</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Complete Coverage</h4>
                  <p className="text-gray-600">Srinagar, Pahalgam, and Gulmarg in one tour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}