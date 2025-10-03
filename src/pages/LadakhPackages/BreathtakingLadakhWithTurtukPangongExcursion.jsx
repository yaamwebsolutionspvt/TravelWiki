import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
const ld4 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514664/travelwiki/assets/Ladakh/ld4.jpg";

const BreathtakingLadakhWithTurtukPangongExcursion = () => {
  return (
    <>
      <SEO 
        pageType="ladakh"
        customTitle="Breathtaking Ladakh with Turtuk & Pangong Excursion - 5N/6D Starting ₹21,999"
        customDescription="Explore the hidden gem of Turtuk village and pristine Pangong Lake with our 5 nights 6 days Ladakh tour package. Includes Khardung La Pass and cultural experiences starting from ₹21,999 per person."
        customKeywords={["Turtuk village tour", "Pangong Lake excursion", "Ladakh cultural tour", "Khardung La Pass", "Nubra Valley tour"]}
        customImage={ld4}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Breathtaking Ladakh with Turtuk & Pangong Excursion",
            "description": "Explore the hidden gem of Turtuk village and pristine Pangong Lake with our 5 nights 6 days Ladakh tour package. Includes Khardung La Pass and cultural experiences.",
            "image": ld4,
            "offers": {
              "@type": "Offer",
              "price": "21999",
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
            "duration": "P5DT6N",
            "touristType": ["Cultural Explorers", "Adventure Seekers", "Nature Lovers", "Photography Enthusiasts"]
          })}
        </script>
      </SEO>
      
      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ld4})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Breathtaking Ladakh with Turtuk & Pangong Excursion
              </h1>
              <p className="text-xl">5 Nights / 6 Days</p>
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
                  Embark your thrilling journey through Ladakh by delving into the mystical landscapes of the valley. 
                  The breathtaking Ladakh tour with Turtuk & Pangong excursion promises to be an unforgettable adventure. 
                  The itinerary begins in Leh and winds up through the enchanting Nubra Valley to Turtuk, 
                  a hidden gem steeped in culture and history. Explore the Turtuk village known for its warm hospitality and apricot orchards.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In your expedition to Ladakh, Pangong Lake will mesmerize you with azure waters meeting the rugged mountains. 
                  Immerse yourself in the Ladakhi culture, traditional cuisine and ancient monasteries. The journey takes you through 
                  high altitude passes having breathtaking vistas. This trip is an immersive experience of Ladakh's cultural and natural wonders. 
                  This itinerary is a perfect blend of tranquillity, adventure and culture of Ladakh.
                </p>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 1: Arrive at Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Height:</strong> 3,445 meters
                    </p>
                    <p className="text-gray-700">
                      Upon your arrival in Leh, our representative will welcome you with a warm greeting. He will then escort you to your hotel. 
                      Make sure you take a good rest and let your body acclimatize to the high-altitude atmosphere. 
                      Often people indulge themselves in exerting activities on their arrival day and face the problem of Acute Mountain Sickness (AMS). 
                      Drink plenty of water and just relax so that your body may adapt to the atmosphere of higher altitude.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 2: Excursion to Sham Valley in Leh</h3>
                    <p className="text-gray-700">
                      Begin your day with a delicious hot breakfast and prepare yourself for the excursion to Sham Valley. 
                      Explore the scenic confluence of the Indus and Zanskar rivers at Sangam Point. 
                      You will visit the ancient Basgo Monastery, a UNESCO World Heritage Site and understand its historical significance. 
                      You may also experience the intriguing gravitational pull at the Magnetic Hills. 
                      The monastery at Alchi is a must-visit place. It is known for its exquisite frescoes. 
                      On returning to Leh, you can seek blessings at the Gurudwara Pathar Sahib. 
                      This Gurudwara is dedicated to Guru Nanak and is known for the large boulder that has the imprint of Guru Nanak Ji's hand on it. 
                      Post this joyous day, return to your hotel for dinner and a night stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 3: Leh to Nubra Via Khardung La Pass</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 140 Kms / 5-6 hours drive | <strong>Height:</strong> 3,000m
                    </p>
                    <p className="text-gray-700">
                      Have an early morning breakfast and get ready to visit your next fascinating destination, Nubra Valley. 
                      You will reach Nubra Valley via Khardung La Pass. It is the highest motorable road in the world. 
                      Nubra Valley has stunning landscapes that are adorned with lush oasis-like villages. It is famous for Bactrian Camels 
                      that add adventure to this nature's marvel. The incredible view of the surrounding mountain ranges adds to the picturesque 
                      sight while travelling to Nubra Valley. On the route, you will visit Diskit Monastery, the oldest and largest Gompa in Nubra Valley. 
                      The Gompa has beautiful wall paintings, incredible architecture and intricate frescos. 
                      On reaching Nubra Valley, you may try the adventurous ride of the two-humped Bactrian camel or opt for Quad biking at the Hunder Village. 
                      You may also explore the village and interact with the locals to understand their culture. 
                      Head back to Nubra Valley and enjoy an overnight stay at the camp.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 4: Excursion to Turtuk Village</h3>
                    <p className="text-gray-700">
                      Begin your morning with a hot breakfast and then prepare for an excursion to Turtuk Village. 
                      The route to Turtuk Village has scenic landscapes and crosses the Shyok River. 
                      This village is a hidden gem near the Indo-Pak border. On arriving at the Turtuk Village explore the region's unique culture, 
                      terraced fields and ancient monasteries. You can admire the dramatic narrow valleys and steep mountains of the village. 
                      You can visit the apricot orchards and enjoy eating the fresh produce. Turtuk is the last outpost in India. 
                      After this village, the Pakistan-controlled Gilgit-Baltistan begins. It is one of the gateways to the Siachen Glaciers. 
                      Return to the Nubra Valley camp and have a lip-smacking dinner. Prepare for an overnight stay at camp.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 5: Excursion to Pangong Lake and return to Leh</h3>
                    <p className="text-gray-700">
                      Start your morning with breakfast and prepare for an excursion to Pangong Lake. 
                      The journey promises to be a thrilling experience as it passes through diverse landscapes and cultural discoveries. 
                      You will discover the Shyok River on your way to Pangong Valley and witness the dramatic shift in the terrain of the region. 
                      Soak the breathtaking scenery as you ascend towards Chang La, one of the world's highest motorable passes. 
                      Upon reaching the Pangong Lake, relish the unreal beauty of the crystal-clear waters of the lake. 
                      This pristine lake is surrounded by majestic mountains which further adds charm to this place. 
                      You can enjoy snacks at the lake while admiring nature's grandeur. Arrive back to Leh and check in at the hotel. 
                      Take a moment to unwind the extraordinary experiences. Enjoy your dinner and prepare for an overnight stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 6: Departure from Leh</h3>
                    <p className="text-gray-700">
                      This is the last day of your Ladakh tour. Have your breakfast and check out from the hotel. 
                      Our representative will drop you at the airport in Leh, for your journey back home.
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
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Leh</h3>
                    <p className="text-gray-700">Naro, Kidar, Zimskhang Villa, The Ladakh</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Nubra Valley</h3>
                    <p className="text-gray-700">Visalta Camps, De Nubra Camps, Paradise North Camps / Apple Camps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹21,999
                  </div>
                  <div className="text-gray-500 line-through text-lg">₹27,499</div>
                  <div className="text-red-600 font-semibold">20% OFF</div>
                  <div className="text-gray-600">Per person</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Updated on: 07 February 2025
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">5N / 6D</span>
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
                    <span className="font-semibold">Leh</span>
                  </div>
                </div>
                
                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Breathtaking%20Ladakh%20with%20Turtuk%20%26%20Pangong%20Excursion%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold mb-4 block text-center">
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
                    <li>• Turtuk Village - Hidden gem near Indo-Pak border</li>
                    <li>• Sham Valley excursion with Magnetic Hill</li>
                    <li>• Khardung La Pass - World's highest motorable road</li>
                    <li>• Diskit Monastery & Maitreya Buddha statue</li>
                    <li>• Bactrian Camel safari in Nubra Valley</li>
                    <li>• Pangong Lake day excursion</li>
                    <li>• Alchi Monastery frescoes</li>
                    <li>• Gurudwara Pathar Sahib visit</li>
                    <li>• Chang La Pass crossing</li>
                    <li>• Apricot orchards exploration</li>
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

export default BreathtakingLadakhWithTurtukPangongExcursion;