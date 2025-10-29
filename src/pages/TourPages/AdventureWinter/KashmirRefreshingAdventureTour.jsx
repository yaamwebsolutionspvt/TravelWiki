import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const adv6 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514586/travelwiki/assets/Adventure/adv6.jpg";

export default function KashmirRefreshingAdventureTour() {
  const seoData = useSEO({
    title: "Kashmir Refreshing Adventure Tour | 3 Nights 4 Days Relaxing Winter Package",
    description: "Perfect refreshing winter adventure in Kashmir with relaxing activities, gentle snow sports, and peaceful mountain experiences. 3 nights package with houseboat stay. Starting at ₹13,999.",
    keywords: "Kashmir refreshing tour, relaxing winter adventure, 3 nights peaceful Kashmir, gentle winter activities, refreshing mountain tour, Kashmir wellness adventure",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-refreshing-adventure-tour/"
  });

  const packageData = {
    name: "Kashmir Refreshing Adventure Tour",
    description: "A refreshing and rejuvenating winter adventure combining gentle outdoor activities with relaxation and wellness in Kashmir's peaceful mountain environment.",
    price: "13999",
    originalPrice: "16799",
    duration: "4 days",
    destinations: ["Srinagar", "Pahalgam"],
    highlights: [
      "01 Hr Shikara Ride",
      "Gentle winter activities and wellness",
      "1N Srinagar HB, 2N Pahalgam",
      "3 Hotels, 6 Activities, 4 Transfers",
      "Relaxation and rejuvenation focus",
      "Candlelight dinner & fresh fruit basket"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen page-container">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-teal-600 to-cyan-800 text-white py-30" style={{
          backgroundImage: `url(${adv6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Refreshing Adventure Tour
              </h1>
              <p className="text-xl mb-8">
                A perfect blend of gentle adventure and relaxation in Kashmir's peaceful winter wonderland
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹13,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹16,799</span> 
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
                <div className="text-teal-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Nights / 4 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🧘‍♀️</div>
                <h3 className="font-semibold text-gray-800">Focus</h3>
                <p className="text-gray-600">Relaxation & Wellness</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🌿</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">6 Gentle Adventures</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">❄️</div>
                <h3 className="font-semibold text-gray-800">Season</h3>
                <p className="text-gray-600">Peaceful Winter</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Refreshing Winter Adventure</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Escape to Kashmir's peaceful winter paradise with our refreshing adventure tour designed for those 
                seeking a perfect balance between gentle outdoor activities and relaxation. This 3-night, 4-day 
                journey focuses on rejuvenation and wellness in nature's embrace.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the therapeutic benefits of Kashmir's pristine winter environment with gentle snow 
                activities, peaceful houseboat stays, and relaxing walks through snow-covered meadows. The tour 
                emphasizes mindful experiences and stress relief.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for those looking to refresh and recharge, whether you're recovering from stress, seeking 
                a peaceful getaway, or wanting to introduce yourself gently to winter adventure activities in a 
                supportive, non-competitive environment.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Refreshing Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Day 1: Peaceful Arrival & Houseboat Serenity</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Gentle arrival and stress-free airport pickup</li>
                    <li>• Direct transfer to peaceful luxury houseboat</li>
                    <li>• Check-in to comfortable heated accommodation</li>
                    <li>• Welcome tea ceremony with warm Kashmiri hospitality</li>
                    <li>• Evening relaxation on houseboat deck with mountain views</li>
                    <li>• Quiet candlelight dinner with fresh fruit basket</li>
                    <li>• Peaceful overnight stay with gentle rocking motion</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Gentle Srinagar Exploration & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning meditation session on houseboat deck</li>
                    <li>• 01 Hour peaceful Shikara ride with gentle rowing</li>
                    <li>• Visit to serene Mughal Gardens for peaceful walks</li>
                    <li>• Relaxing lunch at lakeside restaurant</li>
                    <li>• Scenic drive to peaceful Pahalgam</li>
                    <li>• Check-in to comfortable mountain hotel with heating</li>
                    <li>• Evening nature appreciation and stargazing</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Day 3: Gentle Pahalgam Winter Activities</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Morning gentle yoga session in mountain air</li>
                    <li>• Peaceful walk to Betaab Valley with photography stops</li>
                    <li>• Gentle snow activities and snow angel making</li>
                    <li>• Relaxing picnic lunch in peaceful mountain setting</li>
                    <li>• Optional gentle horse riding or peaceful walks</li>
                    <li>• Evening wellness session with local herbal treatments</li>
                    <li>• Cozy dinner by fireplace with local folk stories</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 4: Final Relaxation & Peaceful Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final morning meditation in mountain tranquility</li>
                    <li>• Leisurely breakfast with mountain views</li>
                    <li>• Gentle morning walk in snow-covered meadows</li>
                    <li>• Relaxing drive back to Srinagar with scenic stops</li>
                    <li>• Peaceful shopping for wellness and relaxation souvenirs</li>
                    <li>• Stress-free departure transfer to airport</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Refreshing Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Refreshing Wellness Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🧘‍♀️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Meditation & Yoga</h4>
                  <p className="text-gray-600">Daily mindfulness sessions in peaceful mountain settings</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌿</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Wellness Treatments</h4>
                  <p className="text-gray-600">Local herbal treatments and relaxation therapies</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Peaceful Houseboat</h4>
                  <p className="text-gray-600">Tranquil accommodation with gentle lake sounds</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">❄️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gentle Snow Activities</h4>
                  <p className="text-gray-600">Non-strenuous winter activities for all fitness levels</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍃</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Fresh Mountain Air</h4>
                  <p className="text-gray-600">Therapeutic benefits of clean, crisp mountain environment</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔥</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cozy Evenings</h4>
                  <p className="text-gray-600">Warm fireplaces and peaceful evening activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
