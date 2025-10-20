import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const ex5 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514621/travelwiki/assets/Excursion/ex5.png";

export default function MagnificentKashmirWithPahalgamAndGulmarg() {
  const seoData = useSEO({
    title: "Magnificent Kashmir With Pahalgam And Gulmarg | 6 Nights 7 Days Premium Tour",
    description: "Experience magnificent Kashmir beauty with premium 6-night tour covering Pahalgam, Gulmarg, and Srinagar. Ultimate valley experience with luxury accommodations at ₹22,999.",
    keywords: "magnificent Kashmir tour, Pahalgam Gulmarg premium package, 6 nights Kashmir luxury, premium Kashmir experience, magnificent valley tour",
    canonical: "https://www.travelwiki.org.in/packages/magnificent-kashmir-pahalgam-gulmarg/"
  });

  const packageData = {
    name: "Magnificent Kashmir With Pahalgam And Gulmarg",
    description: "A magnificent Kashmir experience showcasing the breathtaking beauty of Pahalgam and Gulmarg with premium accommodations and comprehensive valley exploration.",
    price: "22999",
    originalPrice: "27599",
    duration: "7 days",
    destinations: ["Pahalgam", "Gulmarg", "Srinagar"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Complete Tour of Pahalgam Valley",
      "Extended stay in magnificent locations",
      "Premium accommodation throughout",
      "Comprehensive valley exploration",
      "Luxury travel experience"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white min-h-[75vh] overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Magnificent Kashmir With Pahalgam And Gulmarg
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Experience the magnificent beauty of Kashmir's most spectacular destinations with premium accommodations and comprehensive exploration
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹22,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹27,599</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Magnificent%20Kashmir%20With%20Pahalgam%20And%20Gulmarg%20from%20Travel%20Wiki."
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
                <div className="text-amber-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">6 Nights / 7 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-amber-600 text-3xl mb-2">⭐</div>
                <h3 className="font-semibold text-gray-800">Quality</h3>
                <p className="text-gray-600">Magnificent Premium</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-amber-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">10 Premium</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-amber-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Highlights</h3>
                <p className="text-gray-600">3 Destinations</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Magnificent Kashmir Premium Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on a truly magnificent Kashmir journey with our premium 6-night, 7-day package that showcases 
                the breathtaking beauty of Kashmir's most spectacular destinations. Starting with the pristine valleys 
                of Pahalgam, ascending to the magnificent meadows of Gulmarg, and concluding in the splendid lakes of Srinagar.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                This magnificent tour is designed for discerning travelers who appreciate quality accommodations, 
                comprehensive exploration, and the luxury of time to truly absorb the natural grandeur of each destination. 
                Extended stays allow for deep appreciation of Kashmir's diverse landscapes and cultural richness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for couples seeking romance, families wanting quality time together, and travelers who prefer 
                premium experiences. This magnificent package ensures every moment in Kashmir is memorable, comfortable, 
                and filled with the region's natural splendor and cultural charm.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Magnificent Premium Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌟 Day 1: Magnificent Arrival & Pahalgam Journey</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• VIP arrival at Srinagar Airport with premium welcome</li>
                    <li>• Luxurious transfer to magnificent Pahalgam valley</li>
                    <li>• Check-in to premium riverside resort</li>
                    <li>• Welcome refreshments with valley views</li>
                    <li>• Evening leisure by the pristine Lidder River</li>
                    <li>• Gourmet dinner with local specialties</li>
                    <li>• Overnight in magnificent Pahalgam surroundings</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 2: Extended Pahalgam Valley Exploration</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Comprehensive tour of magnificent Pahalgam Valley</li>
                    <li>• Extended visit to breathtaking Betab Valley</li>
                    <li>• Premium exploration of scenic Aru Valley</li>
                    <li>• Luxury picnic lunch in pristine natural settings</li>
                    <li>• Visit magnificent Chandanwari glacier point</li>
                    <li>• Optional premium pony rides to exclusive viewpoints</li>
                    <li>• Evening relaxation at luxury resort</li>
                    <li>• Overnight with magnificent mountain views</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 3: Journey to Magnificent Gulmarg</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Scenic premium transfer to magnificent Gulmarg</li>
                    <li>• Check-in to luxury meadow-view accommodation</li>
                    <li>• Magnificent Gulmarg Gondola experience (Phase 1 & 2)</li>
                    <li>• Premium high-altitude experience at Apharwat Peak</li>
                    <li>• Luxury lunch with panoramic mountain views</li>
                    <li>• Exploration of world's highest golf course</li>
                    <li>• Evening leisure in magnificent meadow surroundings</li>
                    <li>• Overnight in premium mountain accommodation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">❄️ Day 4: Extended Gulmarg Magnificent Experiences</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Full day of magnificent Gulmarg exploration</li>
                    <li>• Premium snow activities and winter sports (seasonal)</li>
                    <li>• Magnificent alpine trekking with professional guides</li>
                    <li>• Luxury mountain picnic with gourmet cuisine</li>
                    <li>• Premium photography sessions with professional tips</li>
                    <li>• Evening bonfire with magnificent stargazing</li>
                    <li>• Overnight in luxury mountain lodge</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 5: Magnificent Srinagar Arrival</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Luxurious transfer to magnificent Srinagar</li>
                    <li>• Check-in to premium lakeside accommodation</li>
                    <li>• Magnificent 01 Hour Shikara ride on Dal Lake</li>
                    <li>• Premium tour of world-famous Mughal Gardens</li>
                    <li>• Luxury lunch at heritage restaurant</li>
                    <li>• Evening exploration of traditional markets</li>
                    <li>• Overnight in magnificent Srinagar hotel</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 6: Magnificent Srinagar Premium Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Premium houseboat experience on Dal Lake</li>
                    <li>• Magnificent cultural experiences and local interactions</li>
                    <li>• Premium handicraft workshop visits</li>
                    <li>• Luxury shopping for Kashmir specialties</li>
                    <li>• Sunset premium Shikara ride with refreshments</li>
                    <li>• Farewell dinner with traditional Wazwan cuisine</li>
                    <li>• Final magnificent night in Kashmir</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 7: Magnificent Farewell</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Luxury breakfast with magnificent valley views</li>
                    <li>• Final premium shopping and souvenir selection</li>
                    <li>• VIP transfer to Srinagar Airport</li>
                    <li>• Departure with magnificent Kashmir memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Magnificent Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Magnificent Package Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Quality</h4>
                  <p className="text-gray-600">Magnificent accommodations and premium services throughout</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Extended Exploration</h4>
                  <p className="text-gray-600">In-depth coverage of magnificent Kashmir destinations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusive Experiences</h4>
                  <p className="text-gray-600">Premium activities and magnificent viewpoints</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gourmet Dining</h4>
                  <p className="text-gray-600">Magnificent culinary experiences with local and international cuisine</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Luxury Transport</h4>
                  <p className="text-gray-600">Premium vehicles with magnificent scenic route planning</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography Paradise</h4>
                  <p className="text-gray-600">Magnificent landscapes perfect for premium photography</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}