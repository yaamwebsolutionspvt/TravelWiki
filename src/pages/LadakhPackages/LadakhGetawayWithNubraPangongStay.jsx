import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
const ld3 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514663/travelwiki/assets/Ladakh/ld3.jpg";

const LadakhGetawayWithNubraPangongStay = () => {
  return (
    <>
      <SEO 
        pageType="ladakh"
        customTitle="Ladakh Getaway with Nubra & Pangong Stay - 4N/5D Starting ₹18,999"
        customDescription="Experience the ultimate Ladakh getaway with stays at Nubra Valley and Pangong Lake. Our 4 nights 5 days package covers Khardung La Pass starting from ₹18,999 per person."
        customKeywords={["Ladakh getaway", "Nubra Valley tour", "Pangong Lake stay", "Khardung La Pass", "Ladakh tour package"]}
        customImage={ld3}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Ladakh Getaway with Nubra & Pangong Stay",
            "description": "Experience the ultimate Ladakh getaway with stays at Nubra Valley and Pangong Lake. Our 4 nights 5 days package covers Khardung La Pass starting from ₹18,999 per person.",
            "image": ld3,
            "offers": {
              "@type": "Offer",
              "price": "18999",
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
            "duration": "P4DT5N",
            "touristType": ["Adventure Seekers", "Nature Lovers", "Photography Enthusiasts"]
          })}
        </script>
      </SEO>
      
      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ld3})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Ladakh Getaway with Nubra & Pangong Stay
              </h1>
              <p className="text-xl">4 Nights / 5 Days</p>
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
                  Embark on the most unforgettable Ladakh getaway with a stay at Nubra and Pangong with our fascinating package. 
                  Your journey is going to be a perfect blend of cultural exploration and natural wonders. The vibrant markets 
                  and ancient monasteries await your presence. Traverse through the world's highest motorable road, Khardung La Pass, 
                  while en route to Nubra Valley. The unique landscapes at Hunder and a camel safari will make your trip even more memorable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This package also covers the stunning Pangong Lake nestled between the towering mountains. The changing hues of the lake 
                  against the backdrop of the Himalayas make it one of the most majestic places to visit. This meticulously curated itinerary 
                  is a great blend of tranquillity, spirituality and adventure, making your Ladakh visit a rich experience.
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
                      Upon your arrival in Leh, our representative will greet you and then escort you to your hotel. 
                      Once the process of check-in is complete, take a good rest before indulging in any activity. 
                      Spend this day at the hotel to acclimatize yourself to the high-altitude atmosphere. Allow your body to adjust to the thin air. 
                      Do not indulge in activities that exert you as it might create trouble for you. Adequate rest and hydration are essential 
                      to acclimatize to the higher altitude and ensure you have an enjoyable exploration experience in the coming days. 
                      Take dinner at night and prepare for sleep at the hotel.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 2: Leh to Nubra Via Khardungla Pass</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 140 Kms / 5-6 hours drive | <strong>Height:</strong> 10,000m
                    </p>
                    <p className="text-gray-700">
                      The second day of your trip begins with the morning breakfast and then you head towards Nubra Valley. 
                      On the way, you will go through Khardungla Pass which is the highest motorable road in the world. 
                      The route to Nubra Valley is full of surreal landscapes. Nubra Valley itself is a perfect blend of nature's beauty 
                      and adventure with landscapes adorned with lush oasis-like villages and the famous Bactrian camels. 
                      En route explore the Diskit Monastery and witness the colossal Maitreya Buddha statue. 
                      It is the oldest and largest Gompa of the valley with beautiful architecture work and wall paintings. 
                      Upon reaching the Nubra Valley, visit Hunder Village to experience the unique two-humped Bactrian camel safari 
                      amidst the scenic sand dunes. You may also try the adventurous Quad biking. 
                      Head back to Nubra Valley and prepare for an overnight stay at the camp.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 3: Nubra to Pangong via Shyok River / Wari La</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 140 km / 6 hours | <strong>Height:</strong> 4,250m
                    </p>
                    <p className="text-gray-700">
                      Start your morning with a delicious hot breakfast and then prepare yourself to go to Pangong via Shyok River. 
                      The Shyok River is known for its crystal-clear waters. The river water is considered high in mineral content 
                      and the water is characterized by a stunning turquoise hue owing to its glacial origins. 
                      You can literally see through the crystal clear water of the river. Pangong Lake is a high-altitude wonder of nature 
                      with azure waters nestled amidst the mountain peaks. Upon reaching Pangong, admire the awe-inspiring beautiful lake 
                      and relish the changing hues of the lake as the day progresses. Spend the night at the campsite near the Pangong Lake. 
                      This journey promises to be a captivating exploration of the untouched and diverse landscapes of Ladakh. 
                      Enjoy an overnight stay in the camp.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 4: Pangong to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 222.9 km / 5 hrs 22 minutes | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700">
                      Begin the morning with a hot breakfast enjoying the scenic view of Pangong Lake and then prepare for a drive to Leh from Pangong. 
                      On arrival at Leh, complete the check-in formalities and then you may head towards some sightseeing. 
                      You can visit major attractions of Leh like Rancho School from the famous 3 Idiots movie, Thiksey Monastery, Hemis Gompa, etc. 
                      You may even spend your time visiting the local markets and doing some shopping. 
                      At night return to the hotel for dinner and a night stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 5: Departure from Leh</h3>
                    <p className="text-gray-700">
                      This is the last day of your trip. Begin the day with breakfast and check out from the hotel. 
                      Our representative will drop you at the airport for your return journey.
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
                    ₹18,999
                  </div>
                  <div className="text-gray-500 line-through text-lg">₹23,749</div>
                  <div className="text-red-600 font-semibold">20% OFF</div>
                  <div className="text-gray-600">Per person</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Updated on: 07 February 2025
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">4N / 5D</span>
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
                
                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Ladakh%20Getaway%20with%20Nubra%20%26%20Pangong%20Stay%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold mb-4 block text-center">
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
                    <li>• Khardung La Pass - World's highest motorable road</li>
                    <li>• Bactrian Camel safari in Nubra Valley</li>
                    <li>• Diskit Monastery & Maitreya Buddha statue</li>
                    <li>• Pangong Lake overnight camping</li>
                    <li>• Scenic Shyok River route</li>
                    <li>• Quad biking in Hunder Village</li>
                    <li>• Cultural monastery visits</li>
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

export default LadakhGetawayWithNubraPangongStay;