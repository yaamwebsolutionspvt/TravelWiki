import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
const fm4 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514630/travelwiki/assets/Family/fm4.png";

export default function PremiumKashmirHolidayPackage() {
  const seoData = useSEO({
    title: "Premium Kashmir Holiday Package | 6 Nights 7 Days Ultra-Luxury Family Experience",
    description: "Ultimate premium Kashmir family holiday with 6 nights ultra-luxury stay. Exclusive houseboat, premium resorts across Srinagar, Pahalgam, Gulmarg at ₹89,999.",
    keywords: "premium Kashmir holiday package, ultra luxury Kashmir family tour, exclusive Kashmir family experience, premium houseboat family stay",
    canonical: "https://www.travelwiki.org.in/kashmirtourpackages/premium-kashmir-holiday-package/"
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
      
      <div className="min-h-screen page-container">
        {/* Hero Section */}
        <div className="relative text-white min-h-[75vh] overflow-hidden bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600">
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
                <ItineraryCard
                  title="Day 1: Royal Srinagar Arrival"
                  activities={[
                    "VIP airport reception with traditional Kashmir welcome",
                    "Private luxury transfer in premium vehicles",
                    "Check-in to exclusive 5-star family suites",
                    "Personal concierge introduction and tour briefing",
                    "Champagne welcome with premium Kashmir delicacies",
                    "Evening at leisure in private luxury surroundings",
                    "Gourmet dinner with personal chef service",
                    "Overnight in ultra-luxury family accommodations"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Royal+Arrival"
                  imageAlt="Royal Srinagar Arrival"
                  imageTitle="Royal Srinagar Arrival"
                  imageSubtitle="VIP Welcome Experience"
                  icon="👑"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Exclusive Srinagar Premium Experience"
                  activities={[
                    "Private 01 Hour luxury Shikara ride with exclusive arrangements",
                    "VIP access to premium areas of Dal Lake",
                    "Exclusive private tour of Mughal Gardens with historian guide",
                    "Premium lunch at Kashmir's finest heritage restaurant",
                    "Private helicopter tour of Srinagar valley (optional)",
                    "Exclusive shopping experience at premium Kashmir boutiques",
                    "Evening premium cultural performance in private setting",
                    "Overnight in luxury with premium amenities"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Premium+Srinagar"
                  imageAlt="Exclusive Srinagar Premium Experience"
                  imageTitle="Premium Srinagar"
                  imageSubtitle="Dal Lake Exclusive"
                  icon="🚣‍♀️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3-4: Premium Pahalgam Luxury Retreat"
                  activities={[
                    "Private luxury transfer to exclusive Pahalgam resort",
                    "Check-in to premium riverside luxury villa for 2 nights",
                    "Day 3: Private comprehensive tour of Pahalgam Valley",
                    "Exclusive access to Betab Valley with private arrangements",
                    "Premium family pony caravan to exclusive viewpoints",
                    "Day 4: Private adventure day with premium activities",
                    "Exclusive helicopter ride over Pahalgam valley",
                    "Private luxury camping experience under stars",
                    "Personal chef preparing gourmet meals in natural settings",
                    "Ultra-luxury spa treatments and family wellness sessions"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Premium+Pahalgam"
                  imageAlt="Premium Pahalgam Luxury Retreat"
                  imageTitle="Premium Pahalgam"
                  imageSubtitle="Valley Luxury Retreat"
                  icon="🌲"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 5: Exclusive Gulmarg Premium Adventure"
                  activities={[
                    "Private transfer to exclusive Gulmarg luxury resort",
                    "VIP access to Gulmarg Gondola with private cabin",
                    "Exclusive lunch at high-altitude premium restaurant",
                    "Private skiing lessons with international instructors (seasonal)",
                    "Exclusive access to premium golf facilities",
                    "Private helicopter return to Srinagar premium houseboat",
                    "Check-in to Kashmir's most luxurious family houseboat",
                    "Overnight in ultra-premium floating luxury"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/0891B2/FFFFFF?text=Premium+Gulmarg"
                  imageAlt="Exclusive Gulmarg Premium Adventure"
                  imageTitle="Premium Gulmarg"
                  imageSubtitle="High-Altitude Adventure"
                  icon="🚡"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 6: Premium Houseboat & Cultural Immersion"
                  activities={[
                    "Exclusive morning activities on private houseboat deck",
                    "Private master class with Kashmir's finest artisans",
                    "Exclusive premium shopping with personal shopping assistant",
                    "Private sunset cruise with champagne service",
                    "Exclusive traditional Wazwan feast prepared by master chefs",
                    "Private cultural evening with Kashmir's finest performers",
                    "Luxury overnight on premium houseboat"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/059669/FFFFFF?text=Premium+Houseboat"
                  imageAlt="Premium Houseboat & Cultural Immersion"
                  imageTitle="Premium Houseboat"
                  imageSubtitle="Exclusive Cultural Night"
                  icon="🏰"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 7: Royal Farewell & Departure"
                  activities={[
                    "Final luxury breakfast with premium service",
                    "Last-minute exclusive shopping with personal concierge",
                    "Professional family portrait session at iconic locations",
                    "VIP airport transfer with luxury vehicle fleet",
                    "Departure with lifetime premium memories of Kashmir"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/F97316/FFFFFF?text=Royal+Farewell"
                  imageAlt="Royal Farewell & Departure"
                  imageTitle="Royal Farewell"
                  imageSubtitle="Final Luxury Experience"
                  icon="✈️"
                  imageOnRight={true}
                />
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
