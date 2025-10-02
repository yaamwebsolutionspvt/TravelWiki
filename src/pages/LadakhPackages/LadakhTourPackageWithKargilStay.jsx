import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
const ld2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514661/travelwiki/assets/Ladakh/ld2.jpg";

const LadakhTourPackageWithKargilStay = () => {
  return (
    <>
      <SEO 
        pageType="ladakh"
        customTitle="Ladakh Tour Package With Kargil Stay - 6N/7D Starting ₹25,999"
        customDescription="Experience the best of Ladakh with our 6 nights 7 days tour package including Kargil stay. Visit Leh, Nubra Valley, Pangong Lake starting from ₹25,999 per person."
        customKeywords={["Ladakh tour with Kargil", "Leh Ladakh package", "Nubra Valley tour", "Pangong Lake tour", "Kargil stay package"]}
        customImage={ld2}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Ladakh Tour Package With Kargil Stay",
            "description": "Experience the best of Ladakh with our 6 nights 7 days tour package including Kargil stay. Visit Leh, Nubra Valley, Pangong Lake starting from ₹25,999 per person.",
            "image": ld2,
            "offers": {
              "@type": "Offer",
              "price": "25999",
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
            "duration": "P6DT7N",
            "touristType": ["Adventure Seekers", "Cultural Explorers", "Nature Lovers"]
          })}
        </script>
      </SEO>
      
      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ld2})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Ladakh Tour Package With Kargil Stay
              </h1>
              <p className="text-xl">6 Nights / 7 Days</p>
            </div>
          </div>
        </div>

        {/* Package Details */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Begin your soul-stirring trip to Ladakh with our packages specially crafted as per your requirements. 
                  With a memorable stay in the historic town of Kargil to adventure amongst the surreal landscapes of Ladakh, 
                  you will have the time of your lifetime. The crystal clear lakes, the ancient monasteries and the dramatic valleys await your exploration.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  During your stay at Kargil and Ladakh, you get a glimpse of the local way of life, coupled with warm hospitality. 
                  This Ladakh tour package promises to be an incredible experience combining historical insights and cultural richness 
                  for an unforgettable trip to the Himalayas.
                </p>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 1: Arrival in Srinagar and drive to Kargil</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 201.5 km / 5 hrs 30 minutes | <strong>Height:</strong> 2,676m
                    </p>
                    <p className="text-gray-700">
                      Upon your arrival in Srinagar, our representative will greet you and escort you to your taxi as you head towards Kargil. 
                      The way to Kargil is breathtaking with picturesque landscape and snow-covered mountains. En route to Kargil, 
                      you may explore the historic location of Drass Valley where the Kargil War took place. You may also visit the Kargil War Museum at Drass.
                      Upon arriving at the hotel in Kargil, complete your check-in process and have dinner before resting and a night stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 2: Kargil to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 216.6 km / 4 hrs 41 minutes | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700">
                      Begin your day with a hot delicious breakfast and get ready to leave for Leh from Kargil. 
                      On your way to Leh, you will visit the oldest and the most unique monastery in Ladakh, Lamayuru Monastery. 
                      It is a must-visit place as the architecture of the monastery is fascinating. 
                      Upon reaching your Leh hotel, complete your check-in process for a night stay at the hotel.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 3: Sightseeing in Leh</h3>
                    <p className="text-gray-700">
                      Begin the day with morning breakfast and then you head out for a sightseeing tour of Leh. 
                      Leh has a history of rich culture and heritage. On your Leh tour, you will visit many monasteries which are known for their rich history. 
                      You will also explore prominent monasteries like Hemis Monastery, Thiksey Monastery, Diskit Monastery, Shey Monastery, etc. 
                      that have stunning architectural work. After the monastery visit, you will go to Sindhu Ghat which is a riverbank in Leh. 
                      It is mostly visited by people for pooja and darshan. In the evening, return to your hotel for a delicious dinner meal and an overnight stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 4: Leh to Nubra Valley via Khardungla Pass</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 160.3 km / 4 hrs 43 minutes | <strong>Height:</strong> 10,000m
                    </p>
                    <p className="text-gray-700">
                      Have your early morning breakfast and get ready for your next destination, Nubra Valley. 
                      You will reach Nubra Valley via Khadungla Pass which is the highest motorable road in the world. 
                      Nubra Valley is an unforgettable blend of adventure and natural beauty. It is known for its stunning landscapes and the famous Bactrian camels. 
                      You can head to the Hunder village after reaching the Nubra Valley. Here you can try the adventurous ride of the two-humped Bactrian Camel 
                      or opt for Quad biking. To get familiar with the local culture of the place, you may also explore the village and interact with the local people. 
                      Later head back to the Nubra Valley and prepare for an overnight stay at the camp.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 5: Nubra Valley to Pangong via Shyok River</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 140 km / 6 hours | <strong>Height:</strong> 4,250m
                    </p>
                    <p className="text-gray-700">
                      Start your day with a scrumptious breakfast at the camp in Nubra Valley and prepare yourself for a road trip to Pangong via Shyok River. 
                      The Shyok River is famous for its crystal-clear waters. The river water is so clear that you can see through it easily with your bare eyes. 
                      You continue your drive toward Pangong Lake. This lake has around 100 km of stretch that covers areas of Tibet, India and China. 
                      The colour of the lake keeps changing to surreal blue and green hues with the sunlight. 
                      The surrounding of the Himalayan peaks adds further charm to the lake. On reaching Pangong Lake, 
                      you may spend time with your family and friends while admiring the beauty of the lake. 
                      You may even take an evening walk and explore the surroundings. Enjoy an overnight stay in the camp.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 6: Pangong to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 222.9 km / 5 hrs 22 minutes | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700">
                      The beautiful morning starts with the stunning view of Pangong Lake. After having your breakfast, your drive from Pangong to Leh. 
                      Upon arrival in Leh, you check in at the hotel and you may visit some sightseeing attractions. 
                      You may visit the famous Rancho School from the 3 Idiots movie. You may also opt for some shopping in the local market. 
                      You can purchase Tibetan handicrafts, Pashmina shawls and other handicraft items. 
                      The bustling markets hold rich culture and treasure of local crafts. At night return to the hotel for dinner and a night stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 7: Departure from Leh</h3>
                    <p className="text-gray-700">
                      Today is the last day of your trip and brings an end to your Ladakh tour package. 
                      Our representative will drop you off at the Leh airport for your return journey back home.
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
                    <span>Innerline Permit</span>
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
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Kargil</h3>
                    <p className="text-gray-700">Royal Gashu, Kargil Heights, Royal Kargil, Chhutuk Heights</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Leh</h3>
                    <p className="text-gray-700">Naro, Kidar, Zimskhang Villa, The Ladakh</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Nubra Valley</h3>
                    <p className="text-gray-700">Visalta Camps, De Nubra Camps, Paradise North Camps / Apple Camps</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Pangong Lake</h3>
                    <p className="text-gray-700">Himalayan Innova Cottage, Royal Foster Cottage, Native Cottage, Ladakh Summer Camps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹25,999
                  </div>
                  <div className="text-gray-500 line-through text-lg">₹32,499</div>
                  <div className="text-red-600 font-semibold">20% OFF</div>
                  <div className="text-gray-600">Per person</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Updated on: 07 February 2025
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">6N / 7D</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-semibold">May - Sep</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-semibold">2-15 People</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starting Point:</span>
                    <span className="font-semibold">Srinagar</span>
                  </div>
                </div>
                
                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Ladakh%20Tour%20Package%20With%20Kargil%20Stay%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold mb-4 block text-center">
                  Book Now
                </a>
                
                <div className="text-center mb-4">
                  <a href="tel:+918899971960" className="text-blue-600 hover:underline">
                    📞 Call: +91 8899971960
                  </a>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Package Highlights</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Historic Kargil stay</li>
                    <li>• Khardungla Pass - World's highest motorable road</li>
                    <li>• Bactrian Camel ride in Nubra Valley</li>
                    <li>• Pangong Lake overnight camping</li>
                    <li>• Ancient monastery visits</li>
                    <li>• Scenic Shyok River route</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LadakhTourPackageWithKargilStay;