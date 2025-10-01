import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const adv2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514579/travelwiki/assets/Adventure/ad2.jpg";

export default function MagicalKashmirAdventureTour() {
  const seoData = useSEO({
    title: "Magical Kashmir Adventure Tour | 4 Nights 5 Days Winter Sports Package",
    description: "Experience magical Kashmir winter adventures with skiing in Gulmarg, snow sports, and winter activities. 4 nights package covering Srinagar, Pahalgam, and Gulmarg. Starting at ₹15,999.",
    keywords: "magical Kashmir winter tour, Kashmir adventure package, 4 nights Kashmir skiing, Gulmarg winter sports, Kashmir snow activities, winter adventure tour",
    canonical: "https://www.travelwiki.org.in/packages/magical-kashmir-adventure-tour/"
  });

  const packageData = {
    name: "Magical Kashmir Adventure Tour",
    description: "A magical winter adventure covering Kashmir's premium destinations with exciting snow sports, skiing activities, and thrilling winter experiences.",
    price: "15999",
    originalPrice: "19199",
    duration: "5 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Professional skiing lessons in Gulmarg",
      "2N Srinagar (1N HB), 1N Pahalgam, 1N Gulmarg",
      "4 Hotels, 8 Activities, 5 Transfers",
      "Snow sports and winter activities",
      "Candlelight dinner & fresh fruit basket"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Magical Kashmir Adventure Tour
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Experience the magic of Kashmir winters with professional skiing, snow sports, and thrilling adventures
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
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Book Now
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
                <div className="text-indigo-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">4 Nights / 5 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🎿</div>
                <h3 className="font-semibold text-gray-800">Skiing</h3>
                <p className="text-gray-600">Professional Lessons</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Adventures</h3>
                <p className="text-gray-600">8 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🚡</div>
                <h3 className="font-semibold text-gray-800">Gondola</h3>
                <p className="text-gray-600">World's 2nd Highest</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Magical Winter Adventure</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on a magical journey through Kashmir's winter wonderland with our comprehensive adventure 
                package. This 4-night, 5-day tour combines the thrill of snow sports with the beauty of Kashmir's 
                pristine winter landscapes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From professional skiing lessons in Gulmarg to romantic houseboat stays in Srinagar, this tour 
                offers the perfect blend of adventure and relaxation. Experience the magic of snow-covered valleys, 
                exciting gondola rides, and traditional Kashmiri winter culture.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ideal for adventure seekers who want to experience Kashmir's winter activities while enjoying 
                comfortable accommodations and expert guidance throughout their journey.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Adventure Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Arrival & Srinagar Exploration</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival at Srinagar airport and adventure gear check</li>
                    <li>• Check-in to heated hotel with adventure facilities</li>
                    <li>• Welcome ceremony with adventure briefing</li>
                    <li>• Evening exploration of winter Dal Lake</li>
                    <li>• Traditional dinner with adventure planning session</li>
                    <li>• Overnight stay with gear preparation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Srinagar Winter Adventures</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early morning 01 Hour winter Shikara ride</li>
                    <li>• Visit Mughal Gardens in snow-covered beauty</li>
                    <li>• Winter photography and snow activities</li>
                    <li>• Transfer to luxury houseboat for unique experience</li>
                    <li>• Sunset views from houseboat deck</li>
                    <li>• Special candlelight dinner on floating accommodation</li>
                    <li>• Romantic overnight stay on Dal Lake</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Pahalgam Winter Adventure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning departure to snow-covered Pahalgam</li>
                    <li>• Check-in to mountain adventure resort</li>
                    <li>• Winter trekking to Aru Valley (snow trails)</li>
                    <li>• Snow sledding and winter sports activities</li>
                    <li>• Visit frozen waterfalls and winter landscapes</li>
                    <li>• Evening bonfire with local folk music</li>
                    <li>• Mountain lodge accommodation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎿 Day 4: Gulmarg Skiing Adventure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Transfer to Gulmarg - Asia's skiing paradise</li>
                    <li>• Professional ski equipment fitting and safety briefing</li>
                    <li>• Gulmarg Gondola ride to Apharwat Peak</li>
                    <li>• Skiing lessons with certified instructors</li>
                    <li>• Snow sports activities - skiing, snowboarding</li>
                    <li>• Adventure lunch at high altitude restaurant</li>
                    <li>• Evening relaxation at ski resort</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 5: Final Adventures & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning advanced skiing session (optional)</li>
                    <li>• Adventure gear return and final photos</li>
                    <li>• Transfer back to Srinagar</li>
                    <li>• Last-minute adventure souvenir shopping</li>
                    <li>• Airport departure with adventure memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Adventure Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Magical Adventure Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎿</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Professional Skiing</h4>
                  <p className="text-gray-600">Expert instructors and quality equipment included</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gondola Experience</h4>
                  <p className="text-gray-600">World's second-highest cable car adventure</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Houseboat Stay</h4>
                  <p className="text-gray-600">Unique winter accommodation on Dal Lake</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Snow Trekking</h4>
                  <p className="text-gray-600">Guided winter trails through pristine valleys</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Adventure Photography</h4>
                  <p className="text-gray-600">Professional photos of your winter adventures</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔥</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Evening Bonfires</h4>
                  <p className="text-gray-600">Warm evenings with local cultural programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}