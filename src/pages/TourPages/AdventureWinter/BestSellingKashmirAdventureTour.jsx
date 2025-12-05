import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import BestsellerKashmirTours from "../../../components/Packages/BestsellerKashmirTours";
import HoneymoonSpecial from "../../../components/Packages/HoneymoonSpecial";
import KashmirFamilyPackages from "../../../components/Packages/KashmirFamilyPackages";
import KashmirExcursionsSpecial from "../../../components/Packages/KashmirExcursionsSpecial";
import KashmirAdventureWinter from "../../../components/Packages/KashmirAdventureWinter";
import KashmirCulturalToursAndPackages from "../../../components/Packages/KashmirCulturalToursAndPackages";
const adv3 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514582/travelwiki/assets/Adventure/adv3.jpg";

export default function BestSellingKashmirAdventureTour() {
  const seoData = useSEO({
    title: "Best Selling Kashmir Adventure Tour | 5 Nights 6 Days Ultimate Winter Sports",
    description: "Our most popular Kashmir winter adventure package with premium skiing, snowboarding, and extreme snow sports. 5 nights complete adventure covering Srinagar, Pahalgam, and Gulmarg. Starting at ₹19,999.",
    keywords: "best Kashmir adventure tour, 5 nights winter sports, premium Kashmir skiing, popular adventure package, Kashmir extreme sports, winter adventure tour",
    canonical: "https://www.travelwiki.org.in/kashmirtourpackages/best-selling-kashmir-adventure-tour/"
  });

  const packageData = {
    name: "Best Selling Kashmir Adventure Tour",
    description: "Our most popular and comprehensive winter adventure package featuring extreme sports, premium skiing, and the complete Kashmir adventure experience.",
    price: "19999",
    originalPrice: "23999",
    duration: "6 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Premium skiing & snowboarding lessons",
      "2N Srinagar, 1N Pahalgam, 1N Gulmarg, 1N Srinagar HB",
      "5 Hotels, 9 Activities, 6 Transfers",
      "Extreme winter sports activities",
      "Candlelight dinner & fresh fruit basket"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen page-container">
        {/* Hero Section */}
        <div className="relative text-white h-[100vh] sm:h-[100vh] md:h-[100vh] overflow-hidden" style={{
          backgroundImage: `url(${adv3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Best Selling Kashmir Adventure Tour
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Our most popular adventure package with premium winter sports, extreme activities, and complete Kashmir coverage
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹19,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹23,999</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Classic%20Leh%2C%20Nubra%20Valley%2C%20Pangong%2C%20Tso%20Moriri%20%26%20Hanle%20Holiday%20Package%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold block text-center">
                  Book Now
                </a>
                </button>
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
                <div className="text-red-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">5 Nights / 6 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">🏆</div>
                <h3 className="font-semibold text-gray-800">Best Seller</h3>
                <p className="text-gray-600">Most Popular</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-800">Adventures</h3>
                <p className="text-gray-600">9 Extreme Sports</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">🎖️</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Premium Package</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Best Selling Adventure Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This is our most popular and comprehensive Kashmir winter adventure package, designed based on years 
                of customer feedback and preferences. It perfectly combines extreme winter sports with luxury 
                accommodations and covers all the must-visit adventure destinations in Kashmir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the ultimate Kashmir adventure with 2 nights in Srinagar hotels, thrilling activities in 
                Pahalgam, world-class skiing in Gulmarg, and a unique final night in a traditional houseboat. 
                The package includes premium equipment, professional instructors, and safety measures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for adventure enthusiasts who want the complete Kashmir experience with professional guidance, 
                top-quality equipment, and the most exciting winter activities the region has to offer.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ultimate Adventure Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Adventure Base Setup in Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• VIP arrival at Srinagar airport with adventure team welcome</li>
                    <li>• Check-in to premium adventure-equipped hotel</li>
                    <li>• Professional gear fitting and safety briefing session</li>
                    <li>• Welcome ceremony with adventure itinerary walkthrough</li>
                    <li>• Evening physical conditioning and acclimatization</li>
                    <li>• Special welcome dinner with adventure team bonding</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Srinagar Water & Winter Sports</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Professional 01 Hour adventure Shikara ride with winter sports demo</li>
                    <li>• Winter kayaking on Dal Lake (weather permitting)</li>
                    <li>• Ice skating experience at designated areas</li>
                    <li>• Visit adventure sports equipment workshops</li>
                    <li>• Professional winter photography session</li>
                    <li>• Adventure gear maintenance training</li>
                    <li>• Night stay in premium hotel with gear storage</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Pahalgam Extreme Adventures</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early departure to Pahalgam adventure base</li>
                    <li>• Winter trekking with technical climbing elements</li>
                    <li>• Ice climbing introduction and practice session</li>
                    <li>• Professional snow camping experience</li>
                    <li>• Winter survival skills training</li>
                    <li>• High-altitude bonfire with adventure stories</li>
                    <li>• Mountain lodge accommodation with heated facilities</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎿 Day 4: Gulmarg Premium Skiing Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Transfer to Gulmarg with professional ski team</li>
                    <li>• Premium ski equipment and safety gear fitting</li>
                    <li>• Advanced Gulmarg Gondola ride to extreme skiing zones</li>
                    <li>• Professional skiing and snowboarding lessons</li>
                    <li>• Off-piste skiing for experienced adventurers</li>
                    <li>• Extreme snow sports activities and challenges</li>
                    <li>• Evening celebration at ski resort with awards ceremony</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏠 Day 5: Luxury Houseboat Adventure Experience</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Return to Srinagar and transfer to luxury houseboat</li>
                    <li>• Traditional houseboat living with modern adventure amenities</li>
                    <li>• Sunset adventure photography session</li>
                    <li>• Traditional Kashmiri feast with adventure team</li>
                    <li>• Adventure equipment cleaning and packing</li>
                    <li>• Celebration night with certificate presentation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 6: Adventure Conclusion & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final breakfast on houseboat with adventure team</li>
                    <li>• Adventure souvenir shopping with team guidance</li>
                    <li>• Final photos and testimonial recording</li>
                    <li>• Check-out and VIP departure transfer</li>
                    <li>• Departure with adventure certificates and memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why This is Best Selling */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Why This is Our Best Seller</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Complete Adventure</h4>
                  <p className="text-gray-600">All major winter sports and extreme activities included</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Professional Team</h4>
                  <p className="text-gray-600">Expert instructors and certified adventure guides</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎖️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Equipment</h4>
                  <p className="text-gray-600">Top-quality gear and safety equipment included</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Luxury Stays</h4>
                  <p className="text-gray-600">Premium hotels and unique houseboat experience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📜</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Certification</h4>
                  <p className="text-gray-600">Adventure completion certificates and achievements</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Best Value</h4>
                  <p className="text-gray-600">Maximum adventure experiences at competitive pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Package Sections */}
      <KashmirAdventureWinter />
      <BestsellerKashmirTours />
      <KashmirFamilyPackages />
      <HoneymoonSpecial />
      <KashmirExcursionsSpecial />
      <KashmirCulturalToursAndPackages />
    </>
  );
}
