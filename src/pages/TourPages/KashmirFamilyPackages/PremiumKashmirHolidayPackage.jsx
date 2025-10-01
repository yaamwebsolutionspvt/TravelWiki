import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const fm4 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514630/travelwiki/assets/Family/fm4.png";

export default function PremiumKashmirHolidayPackage() {
  const seoData = useSEO({
    title: "Premium Kashmir Holiday Package | 6 Nights 7 Days Ultra-Luxury Family Experience",
    description: "Ultimate premium Kashmir family holiday with 6 nights ultra-luxury stay. Exclusive houseboat, premium resorts across Srinagar, Pahalgam, Gulmarg at ₹89,999.",
    keywords: "premium Kashmir holiday package, ultra luxury Kashmir family tour, exclusive Kashmir family experience, premium houseboat family stay",
    canonical: "https://www.travelwiki.org.in/packages/premium-kashmir-holiday-package/"
  });

  const packageData = {
    name: "Premium Kashmir Holiday Package",
    description: "The ultimate premium Kashmir family experience featuring ultra-luxury accommodations, exclusive houseboat stays, private services, and the finest Kashmir hospitality for discerning families.",
    price: "89999",
    originalPrice: "107999",
    duration: "7 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Private Shikara Ride",
      "Ultra-luxury houseboat experience",
      "Complete Tour of Pahalgam Valley",
      "Exclusive premium accommodations",
      "Private family concierge services",
      "Helicopter transfers (optional)"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600">
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Kashmir Holiday Package
              </h1>
              <p className="text-xl mb-8">
                Experience the pinnacle of luxury family travel in Kashmir with our ultra-premium package featuring exclusive accommodations and personalized services
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹89,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹1,07,999</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Premium%20Kashmir%20Holiday%20Package%20from%20Travel%20Wiki."
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
                <p className="text-gray-600">6 Nights / 7 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">👑</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Ultra-Premium</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🏰</div>
                <h3 className="font-semibold text-gray-800">Accommodation</h3>
                <p className="text-gray-600">Exclusive Luxury</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🎭</div>
                <h3 className="font-semibold text-gray-800">Services</h3>
                <p className="text-gray-600">Private Concierge</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ultimate Premium Kashmir Family Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Indulge in the ultimate Kashmir family experience with our most premium 6-night, 7-day package designed 
                exclusively for discerning families seeking unparalleled luxury, privacy, and personalized service. This 
                ultra-premium package represents the pinnacle of Kashmir hospitality and exclusive experiences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Stay in Kashmir's most exclusive luxury resorts, premium houseboats, and elite mountain lodges while 
                enjoying private concierge services, exclusive access to premium experiences, and the finest amenities. 
                Every detail is meticulously crafted to exceed the expectations of sophisticated travelers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for affluent families, VIP travelers, and those celebrating special occasions who demand nothing 
                but the finest in luxury travel. This premium package ensures privacy, exclusivity, and unforgettable 
                memories in Kashmir's most spectacular settings with world-class service standards.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ultra-Premium Family Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">👑 Day 1: Royal Srinagar Arrival</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• VIP airport reception with traditional Kashmir welcome</li>
                    <li>• Private luxury transfer in premium vehicles</li>
                    <li>• Check-in to exclusive 5-star family suites</li>
                    <li>• Personal concierge introduction and tour briefing</li>
                    <li>• Champagne welcome with premium Kashmir delicacies</li>
                    <li>• Evening at leisure in private luxury surroundings</li>
                    <li>• Gourmet dinner with personal chef service</li>
                    <li>• Overnight in ultra-luxury family accommodations</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Exclusive Srinagar Premium Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Private 01 Hour luxury Shikara ride with exclusive arrangements</li>
                    <li>• VIP access to premium areas of Dal Lake</li>
                    <li>• Exclusive private tour of Mughal Gardens with historian guide</li>
                    <li>• Premium lunch at Kashmir's finest heritage restaurant</li>
                    <li>• Private helicopter tour of Srinagar valley (optional)</li>
                    <li>• Exclusive shopping experience at premium Kashmir boutiques</li>
                    <li>• Evening premium cultural performance in private setting</li>
                    <li>• Overnight in luxury with premium amenities</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3-4: Premium Pahalgam Luxury Retreat</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Private luxury transfer to exclusive Pahalgam resort</li>
                    <li>• Check-in to premium riverside luxury villa for 2 nights</li>
                    <li>• Day 3: Private comprehensive tour of Pahalgam Valley</li>
                    <li>• Exclusive access to Betab Valley with private arrangements</li>
                    <li>• Premium family pony caravan to exclusive viewpoints</li>
                    <li>• Day 4: Private adventure day with premium activities</li>
                    <li>• Exclusive helicopter ride over Pahalgam valley</li>
                    <li>• Private luxury camping experience under stars</li>
                    <li>• Personal chef preparing gourmet meals in natural settings</li>
                    <li>• Ultra-luxury spa treatments and family wellness sessions</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Day 5: Exclusive Gulmarg Premium Adventure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Private transfer to exclusive Gulmarg luxury resort</li>
                    <li>• VIP access to Gulmarg Gondola with private cabin</li>
                    <li>• Exclusive lunch at high-altitude premium restaurant</li>
                    <li>• Private skiing lessons with international instructors (seasonal)</li>
                    <li>• Exclusive access to premium golf facilities</li>
                    <li>• Private helicopter return to Srinagar premium houseboat</li>
                    <li>• Check-in to Kashmir's most luxurious family houseboat</li>
                    <li>• Overnight in ultra-premium floating luxury</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏰 Day 6: Premium Houseboat & Cultural Immersion</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Exclusive morning activities on private houseboat deck</li>
                    <li>• Private master class with Kashmir's finest artisans</li>
                    <li>• Exclusive premium shopping with personal shopping assistant</li>
                    <li>• Private sunset cruise with champagne service</li>
                    <li>• Exclusive traditional Wazwan feast prepared by master chefs</li>
                    <li>• Private cultural evening with Kashmir's finest performers</li>
                    <li>• Luxury overnight on premium houseboat</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 7: Royal Farewell & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final luxury breakfast with premium service</li>
                    <li>• Last-minute exclusive shopping with personal concierge</li>
                    <li>• Professional family portrait session at iconic locations</li>
                    <li>• VIP airport transfer with luxury vehicle fleet</li>
                    <li>• Departure with lifetime premium memories of Kashmir</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Ultra-Premium Package Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">👑</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Royal Treatment</h4>
                  <p className="text-gray-600">VIP services and royal hospitality throughout Kashmir</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusive Accommodations</h4>
                  <p className="text-gray-600">Most luxurious resorts, villas, and premium houseboats</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚁</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Private Transport</h4>
                  <p className="text-gray-600">Luxury vehicles and helicopter transfers available</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍💼</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Personal Concierge</h4>
                  <p className="text-gray-600">Dedicated family concierge for personalized services</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍾</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gourmet Experiences</h4>
                  <p className="text-gray-600">Master chefs and premium dining experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusive Access</h4>
                  <p className="text-gray-600">Private cultural performances and exclusive experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}