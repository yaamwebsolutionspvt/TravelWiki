import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
const ld10 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514657/travelwiki/assets/Ladakh/ld10.jpg";

const JeepSafariTourPackageFromManaliToLehLadakh = () => {
  return (
    <>
      <SEO 
        pageType="ladakh"
        customTitle="Jeep Safari Tour Package From Manali To Leh Ladakh - 7N/8D Starting ₹28,999"
        customDescription="Experience the ultimate jeep safari adventure from Manali to Leh Ladakh with our 7 nights 8 days package. Cross high altitude passes, visit Nubra Valley and Pangong Lake. Book now!"
        customKeywords={["Manali to Leh jeep safari", "Ladakh road trip", "Manali Leh highway", "Sarchu Jispa tour", "Nubra Valley Pangong Lake package"]}
        customImage={ld10}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Jeep Safari Tour Package From Manali To Leh Ladakh",
            "description": "Experience the ultimate jeep safari adventure from Manali to Leh Ladakh with our 7 nights 8 days package. Cross high altitude passes, visit Nubra Valley and Pangong Lake.",
            "image": ld10,
            "offers": {
              "@type": "Offer",
              "price": "28999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-01-01",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "TravelAgency",
              "name": "Travel Wiki",
              "url": "https://travelwiki.in",
              "telephone": "+91 8899971960"
            },
            "duration": "P7DT8N",
            "touristType": ["Adventure Seekers", "Road Trip Enthusiasts", "Mountain Lovers", "Photography Enthusiasts"]
          })}
        </script>
      </SEO>
      
      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ld10})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Jeep Safari Tour Package From Manali To Leh Ladakh
              </h1>
              <p className="text-xl">7 Nights / 8 Days</p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="text-3xl font-bold">₹28,999</span>
                <span className="text-xl line-through opacity-75">₹36,249</span>
                <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm">20% OFF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Package Details */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Quick Details Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  <div className="text-blue-600 text-2xl mb-2">🏔️</div>
                  <h3 className="font-semibold text-gray-800 text-sm">Duration</h3>
                  <p className="text-gray-600 text-sm">7N / 8D</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  <div className="text-blue-600 text-2xl mb-2">🚙</div>
                  <h3 className="font-semibold text-gray-800 text-sm">Jeep Safari</h3>
                  <p className="text-gray-600 text-sm">Adventure</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  <div className="text-blue-600 text-2xl mb-2">🏨</div>
                  <h3 className="font-semibold text-gray-800 text-sm">Hotel Stay</h3>
                  <p className="text-gray-600 text-sm">Included</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  <div className="text-blue-600 text-2xl mb-2">🍽️</div>
                  <h3 className="font-semibold text-gray-800 text-sm">Meals</h3>
                  <p className="text-gray-600 text-sm">Included</p>
                </div>
              </div>

              {/* Package Overview */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Embark on the ultimate adventure with our Jeep Safari Tour Package from Manali to Leh Ladakh. This 7 nights and 8 days journey takes you through some of the world's highest motorable passes and most spectacular landscapes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Starting from the scenic hill station of Manali, you'll traverse through high-altitude deserts, cross challenging mountain passes, and witness the raw beauty of the Himalayas. The route takes you through Sarchu and Jispa, providing comfortable acclimatization stops before reaching the mystical land of Ladakh.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Experience the thrill of driving on the world's highest motorable roads, visit ancient monasteries, explore the cold desert of Nubra Valley, and camp beside the pristine Pangong Lake. This is not just a tour; it's an adventure of a lifetime that combines scenic beauty, cultural exploration, and adrenaline-pumping jeep safari experiences.
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🛣️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Manali-Leh Highway</h4>
                      <p className="text-sm text-gray-600">One of the world's most scenic and challenging roads</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">⛰️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">High Altitude Passes</h4>
                      <p className="text-sm text-gray-600">Cross Rohtang, Baralacha, and Tanglang La passes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🏕️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sarchu & Jispa Camps</h4>
                      <p className="text-sm text-gray-600">Unique camping experience at high altitudes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🐪</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Nubra Valley</h4>
                      <p className="text-sm text-gray-600">Double hump camel rides in cold desert</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🏞️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Pangong Lake</h4>
                      <p className="text-sm text-gray-600">World's highest saltwater lake</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🏛️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Ancient Monasteries</h4>
                      <p className="text-sm text-gray-600">Visit centuries-old Buddhist monasteries</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 1: Manali to Sarchu/Jispa</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 220 km / 8-9 hours | <strong>Height:</strong> 4,290m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Begin your epic jeep safari adventure early morning from Manali. The journey starts with crossing the famous Rohtang Pass (3,978m), gateway to Lahaul-Spiti region.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Cross Rohtang Pass with spectacular mountain views</li>
                      <li>Drive through Keylong, the administrative center of Lahaul</li>
                      <li>Cross Baralacha La Pass (4,890m)</li>
                      <li>Experience the dramatic landscape change from green valleys to high-altitude desert</li>
                      <li>Arrive at Sarchu or Jispa for overnight camping</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay in camps at Sarchu/Jispa.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 2: Sarchu/Jispa to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 250 km / 9-10 hours | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Continue your journey towards Leh, crossing some of the world's highest motorable passes.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Cross Lachulung La (5,065m) and Nakee La (4,739m)</li>
                      <li>Navigate through the famous 21 hairpin bends at Gata Loops</li>
                      <li>Cross Tanglang La Pass (5,328m) - second highest motorable pass</li>
                      <li>Descend into Leh with views of Indus Valley</li>
                      <li>Check-in to hotel and rest for acclimatization</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay at hotel in Leh. Complete rest advised for acclimatization.</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 3: Leh Local Sightseeing</h3>
                    <p className="text-gray-700 mb-2">
                      After a day of rest and acclimatization, explore the cultural treasures of Leh.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Visit Leh Palace - 17th-century royal palace</li>
                      <li>Explore Shanti Stupa for panoramic views of Leh</li>
                      <li>Visit Thiksey Monastery - replica of Potala Palace</li>
                      <li>Shopping at Leh Main Bazaar</li>
                      <li>Visit Hall of Fame Museum</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay at hotel in Leh.</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 4: Leh to Nubra Valley via Khardung La Pass</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 160 km / 4-5 hours | <strong>Height:</strong> 10,000m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Journey to the cold desert of Nubra Valley via the world's highest motorable pass.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Cross Khardung La Pass (18,380 ft) - world's highest motorable pass</li>
                      <li>Photo opportunities with snow-capped peaks</li>
                      <li>Descend into Nubra Valley</li>
                      <li>Check-in to camps/hotel in Hunder</li>
                      <li>Visit Hunder sand dunes for camel safari</li>
                      <li>Double hump Bactrian camel ride experience</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay in camps at Nubra Valley.</p>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 5: Nubra Valley to Pangong Lake</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 140 km / 6 hours | <strong>Height:</strong> 4,250m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Travel to the famous Pangong Lake via Shayok River route.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Drive via scenic Shayok River valley</li>
                      <li>Cross Wari La Pass for alternative route experience</li>
                      <li>Arrive at Pangong Lake - highest saltwater lake</li>
                      <li>Marvel at the changing colors of the lake</li>
                      <li>Photography session with 3 Idiots movie backdrop</li>
                      <li>Lakeside camping experience</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay in camps at Pangong Lake.</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 6: Pangong Lake to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 225 km / 5-6 hours | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Return to Leh via Chang La Pass with stops at significant sites.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Early morning sunrise at Pangong Lake</li>
                      <li>Return via Chang La Pass (17,590 ft)</li>
                      <li>Visit Druk White Lotus School (3 Idiots School)</li>
                      <li>Stop at Shey Palace and Monastery</li>
                      <li>Arrive in Leh for overnight stay</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay at hotel in Leh.</p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 7: Leh - Rest Day & Exploration</h3>
                    <p className="text-gray-700 mb-2">
                      Free day to explore Leh at leisure or additional sightseeing.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Visit Hemis Monastery - largest monastery in Ladakh</li>
                      <li>Explore Stok Palace and Museum</li>
                      <li>Shopping for local handicrafts and souvenirs</li>
                      <li>Rest and prepare for departure</li>
                      <li>Traditional Ladakhi cultural evening (optional)</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay at hotel in Leh.</p>
                  </div>
                  
                  <div className="border-l-4 border-gray-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 8: Departure from Leh</h3>
                    <p className="text-gray-700">
                      Your incredible jeep safari adventure from Manali to Leh comes to an end. Our representative will transfer you to Leh Airport for your onward journey. Take back memories of one of the world's most spectacular road trips and the unique experience of traversing the highest motorable passes on Earth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Package Inclusions */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Inclusions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Accommodation in Base Category Rooms/Camps</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Stay on MAP Basis (Dinner and Breakfast)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Non AC Cab/Jeep for entire journey & sightseeing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Experienced driver cum guide</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>All applicable luxury/road taxes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Inner Line Permits for restricted areas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Oxygen cylinder support during high passes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>24/7 assistance during the tour</span>
                  </div>
                </div>
              </div>

              {/* Package Exclusions */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Exclusions</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Airfares to/from Leh or train fare to Manali</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Any monastery entrance fees or additional activities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Medical expenses and comprehensive travel insurance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Personal expenses like tips, laundry, telephone charges</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Any cost due to natural calamities, road blockages, or political unrest</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Meals during travel days (except mentioned in inclusions)</span>
                  </div>
                </div>
              </div>

              {/* Hotel Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Accommodation Details</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="">
                      <tr>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Location</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Hotels/Camps</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Sarchu/Jispa</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Sarchu Camps, Jispa Camps, High Altitude Camps</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Leh</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Naro, Kidar, Zimskhang Villa, The Ladakh</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Nubra</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Visalta Camps, De Nubra Camps, Paradise North Camps</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Pangong</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Himalayan Innova Cottage, Royal Foster Cottage, Ladakh Summer Camps</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Booking Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6 sticky top-4">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Book This Package</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-blue-600">₹28,999</span>
                    <span className="text-lg line-through text-gray-500">₹36,249</span>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">20% OFF</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">7N / 8D</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Route:</span>
                    <span className="font-semibold">Manali to Leh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold">Jeep Safari</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Updated:</span>
                    <span className="font-semibold">07 Feb 2025</span>
                  </div>
                </div>

                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Jeep%20Safari%20Tour%20Package%20From%20Manali%20To%20Leh%20Ladakh%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3 block text-center">
                  Book Now
                </a>
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Enquiry Now
                </button>
              </div>

              {/* Important Notes */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">⚠️ Important Notes</h3>
                <ul className="text-sm text-yellow-700 space-y-2">
                  <li>• Road conditions depend on weather; delays possible</li>
                  <li>• Carry warm clothing even in summer</li>
                  <li>• Physical fitness required for high altitude</li>
                  <li>• Valid ID proofs mandatory for permits</li>
                  <li>• Medical certificate recommended for heart patients</li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🎯</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Adventure Specialists</h4>
                      <p className="text-sm text-gray-600">Specialized in high-altitude jeep safari expeditions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🚙</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Well-Maintained Vehicles</h4>
                      <p className="text-sm text-gray-600">Regular serviced jeeps suitable for high altitude terrain</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">👨‍💼</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Experienced Drivers</h4>
                      <p className="text-sm text-gray-600">Local drivers with years of Manali-Leh route experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JeepSafariTourPackageFromManaliToLehLadakh;