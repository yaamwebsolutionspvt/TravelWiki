import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ItineraryCard from "../../components/ItineraryCard";
const ld9 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514672/travelwiki/assets/Ladakh/ld9.jpg";

const EnthrallingLadakhTourFromSrinagar = () => {
  return (
    <>
      <SEO 
        pageType="ladakh"
        customTitle="Enthralling Ladakh Tour from Srinagar - 7N/8D Starting ₹28,999"
        customDescription="Experience the ultimate Ladakh adventure starting from Srinagar. Visit Kargil, Leh, Nubra Valley, and Pangong Lake in this comprehensive 7 nights 8 days tour package."
        customKeywords={["Srinagar to Leh tour", "Ladakh tour from Srinagar", "Kargil Leh Nubra Pangong tour", "Kashmir Ladakh combo package"]}
        customImage={ld9}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Enthralling Ladakh Tour from Srinagar",
            "description": "Experience the ultimate Ladakh adventure starting from Srinagar. Visit Kargil, Leh, Nubra Valley, and Pangong Lake in this comprehensive 7 nights 8 days tour package.",
            "image": ld9,
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
              "url": "https://travelwiki.org.in",
              "telephone": "+91 8899971960"
            },
            "duration": "P7DT8N",
            "touristType": ["Adventure Seekers", "Cultural Explorers", "Nature Lovers", "Road Trip Enthusiasts"]
          })}
        </script>
      </SEO>
      
      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ld9})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Enthralling Ladakh Tour from Srinagar
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
                  <div className="text-blue-600 text-2xl mb-2">🚗</div>
                  <h3 className="font-semibold text-gray-800 text-sm">Cab Transfer</h3>
                  <p className="text-gray-600 text-sm">Included</p>
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
                  Embark on an enthralling journey from the picturesque valleys of Kashmir to the rugged beauty of Ladakh. This comprehensive tour takes you from Srinagar, the summer capital of Kashmir, through the historic town of Kargil, and into the heart of Ladakh.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Experience the dramatic landscape transformation as you travel from the lush green valleys of Kashmir to the stark, moon-like terrain of Ladakh. Visit ancient monasteries, cross high mountain passes, enjoy the cold desert of Nubra Valley, and witness the mesmerizing beauty of Pangong Lake.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This tour combines the best of both worlds - the natural beauty and Mughal heritage of Kashmir with the Buddhist culture and adventurous spirit of Ladakh. From Shikara rides in Dal Lake to camel safaris in Nubra Valley, this journey offers a perfect blend of relaxation and adventure.
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🚣‍♀️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Srinagar Experience</h4>
                      <p className="text-sm text-gray-600">Dal Lake Shikara rides and Mughal gardens</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🏛️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Kargil Heritage</h4>
                      <p className="text-sm text-gray-600">Historical significance and mountain beauty</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🏔️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sham Valley</h4>
                      <p className="text-sm text-gray-600">Magnetic Hill, Sangam, and monasteries</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🐪</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Nubra Valley</h4>
                      <p className="text-sm text-gray-600">Cold desert and double hump camel safari</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🏞️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Pangong Lake</h4>
                      <p className="text-sm text-gray-600">High altitude lake with changing colors</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">⛰️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">High Passes</h4>
                      <p className="text-sm text-gray-600">Khardung La and Chang La pass crossings</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 1: Arrival in Srinagar</h3>
                    <p className="text-gray-700 mb-2">
                      Welcome to the "Paradise on Earth"! Upon arrival in Srinagar, you'll be greeted by our representative and transferred to your hotel.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Check-in to hotel and freshen up</li>
                      <li>Evening Shikara ride on famous Dal Lake</li>
                      <li>Visit floating gardens and houseboats</li>
                      <li>Explore local bazaar for handicrafts and Pashmina shawls</li>
                      <li>Enjoy traditional Kashmiri cuisine</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay at hotel in Srinagar.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 2: Srinagar to Kargil</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 201 km / 5-6 hours | <strong>Height:</strong> 2,676m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Begin your journey towards Ladakh with a scenic drive to Kargil via Sonamarg.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Drive through beautiful Sonamarg (Meadow of Gold)</li>
                      <li>Cross Zoji La Pass (11,575 ft) - gateway to Ladakh</li>
                      <li>Experience dramatic landscape changes</li>
                      <li>Visit Drass Valley - second coldest inhabited place</li>
                      <li>Arrive in Kargil, check-in to hotel</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay at hotel in Kargil.</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 3: Kargil to Leh via Lamayuru</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 217 km / 5-6 hours | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Continue your journey to Leh with stops at significant Buddhist sites.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Visit Mulbekh Monastery with its rock-carved Buddha</li>
                      <li>Explore Lamayuru Monastery - oldest in Ladakh</li>
                      <li>Witness the unique moonland landscape near Lamayuru</li>
                      <li>Cross Fotu La Pass (13,479 ft)</li>
                      <li>Arrive in Leh and check-in to hotel</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Rest for acclimatization. Overnight stay at hotel in Leh.</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 4: Excursion to Sham Valley</h3>
                    <p className="text-gray-700 mb-2">
                      After acclimatization, explore the beautiful Sham Valley.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Visit Gurudwara Pathar Sahib - sacred Sikh shrine</li>
                      <li>Experience the mysterious Magnetic Hill</li>
                      <li>Witness Sangam - confluence of Indus and Zanskar rivers</li>
                      <li>Visit Alchi Monastery with ancient wall paintings</li>
                      <li>Explore Hall of Fame Museum by Indian Army</li>
                      <li>End day at Shanti Stupa for sunset views</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Return to Leh for overnight stay.</p>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 5: Leh to Nubra Valley via Khardung La</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 160 km / 4-5 hours | <strong>Height:</strong> 10,000m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Journey to the cold desert of Nubra Valley via world's highest motorable pass.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Cross Khardung La Pass (18,380 ft) - world's highest motorable road</li>
                      <li>Photo stop at the pass with certificate</li>
                      <li>Descend into Nubra Valley</li>
                      <li>Visit Diskit Monastery with giant Buddha statue</li>
                      <li>Experience camel safari on double hump Bactrian camels at Hunder</li>
                      <li>Explore sand dunes of cold desert</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay in camps/hotel at Nubra Valley.</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 6: Nubra to Pangong Lake</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 140 km / 6 hours | <strong>Height:</strong> 4,250m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Travel to the spectacular Pangong Lake via Shayok River route.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Drive via scenic Shayok River valley</li>
                      <li>Cross Wari La Pass for alternative route</li>
                      <li>Arrive at Pangong Lake - highest saltwater lake</li>
                      <li>Marvel at the changing colors of the crystal-clear lake</li>
                      <li>Photography with backdrop of 3 Idiots movie fame</li>
                      <li>Enjoy peaceful evening by the lake</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay in camps at Pangong Lake.</p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 7: Pangong to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 225 km / 5-6 hours | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Return to Leh via Chang La Pass with monastery visits.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Early morning sunrise at Pangong Lake</li>
                      <li>Return journey via Chang La Pass (17,590 ft)</li>
                      <li>Visit Thiksey Monastery - mini Potala Palace</li>
                      <li>Stop at Druk White Lotus School (3 Idiots School)</li>
                      <li>Visit Shey Palace - former summer capital</li>
                      <li>Free time for shopping in Leh market</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay at hotel in Leh.</p>
                  </div>
                  
                  <div className="border-l-4 border-gray-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 8: Departure from Leh</h3>
                    <p className="text-gray-700">
                      Your enthralling Ladakh tour comes to an end. After breakfast, our representative will transfer you to Leh Airport for your onward journey. Carry with you unforgettable memories of the incredible landscapes, rich culture, and warm hospitality experienced during this amazing journey from Kashmir to Ladakh.
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
                    <span>Accommodation in Base Category Rooms</span>
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
                    <span>01 Non AC Cab for arrival/departure & sightseeing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Assistance at airport while arriving and departing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Porterages at hotel and airport</span>
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
                    <span>1 Hour Shikara ride in Dal Lake</span>
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
                    <span>Airfares and train fare</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Any monastery entrance fees, river rafting, or any joy ride</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Medical expenses (apart from first aid) and insurance of any kind</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Car is meant for sightseeing as per the itinerary, not on a disposal basis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Expenses for tips, laundry, liquors, wines, mineral water, telephone charges, oxygen cylinders, camera fees</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Any cost arising due to natural calamity or road blockage must be paid directly by the guest</span>
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
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Hotels</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Srinagar</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Hotel Pine Spring, Hotel Akbar, Hotel Grand Palace, similar</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Kargil</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Royal Gashu, Kargil Heights, Royal Kargil, Chhutuk Heights</td>
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
                    <span className="text-gray-600">Starting Point:</span>
                    <span className="font-semibold">Srinagar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold">Family/Leisure</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Updated:</span>
                    <span className="font-semibold">07 Feb 2025</span>
                  </div>
                </div>

                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Enthralling%20Ladakh%20Tour%20from%20Srinagar%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3 block text-center">
                  Book Now
                </a>
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Enquiry Now
                </button>
              </div>

              {/* Travel Route */}
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">📍 Travel Route</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Srinagar (1N)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Kargil (1N)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Leh (2N)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Nubra (1N)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Pangong (1N)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Leh (1N)</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🎯</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Best Travel Experts</h4>
                      <p className="text-sm text-gray-600">Over 10 years of experience in Kashmir-Ladakh sector</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">📞</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">24 X 7 On-Trip Assistance</h4>
                      <p className="text-sm text-gray-600">One call away during your tour for immediate assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">💰</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Best Rate Guarantee</h4>
                      <p className="text-sm text-gray-600">Own hotels and fleet ensures best rates with personalized service</p>
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

export default EnthrallingLadakhTourFromSrinagar;