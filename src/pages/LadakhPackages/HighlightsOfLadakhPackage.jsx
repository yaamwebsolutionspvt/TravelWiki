import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1760705855/Highlights_of_Ladakh_Package_rsb7xy.webp";

const HighlightsOfLadakhPackage = () => {
  return (
    <>
      <SEO 
        pageType="ladakh"
        customTitle="Highlights of Ladakh Package - 4N/5D Starting ₹14,999"
        customDescription="Experience Ladakh's major highlights in 4 nights. Visit Sham Valley, Khardung La Pass & Pangong Lake with comfortable Leh stays starting from ₹14,999 per person."
        customKeywords={["Ladakh highlights tour", "4 nights Ladakh package", "Sham Valley tour", "Khardung La Pangong Lake package", "best Ladakh highlights"]}
        customImage={heroBg}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Highlights of Ladakh Package",
            "description": "Experience Ladakh's major highlights in 4 nights. Visit Sham Valley, Khardung La Pass & Pangong Lake with comfortable Leh stays starting from ₹14,999 per person.",
            "image": heroBg,
            "offers": {
              "@type": "Offer",
              "price": "14999",
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
            "duration": "P4DT5N",
            "touristType": ["First-time Visitors", "Nature Lovers", "Photography Enthusiasts", "Adventure Seekers"]
          })}
        </script>
      </SEO>
      
      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Highlights of Ladakh Package
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
                  Ladakh is a haven for nature lovers and adventure aficionados. It offers a unique blend of thrilling adventures, 
                  rich cultural experiences, and captivating landscapes. You will encounter majestic snow-capped Himalayas, 
                  serene lakes, breathtaking vistas, free-flowing rivers, high mountain passes and age-old monasteries on your trip to Ladakh.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For those who have limited days in hand, this 4 nights and 5 days Ladakh tour is well-crafted to offer you the best of Ladakh. 
                  This customizable package covers the main tourist places of Ladakh including the Leh city tour, Sham Valley, K Top and Pangong Lake.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We promise you that this holiday experience will be etched in your heart forever. 
                  So, book your 4 nights Ladakh tour package now and go on that much-awaited dream holiday with your loved one.
                </p>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 1: Arrival in Leh</h3>
                    <p className="text-gray-700">
                      Welcome to the magical valley of Ladakh. Upon your arrival at the Kushok Bakula Rimpochee Airport in Leh, 
                      our representative will welcome you and escort you to the hotel. Complete your check-in formalities and spend 
                      the remaining day resting and acclimatizing to the high altitudes of Ladakh. A pro tip to keep yourself going 
                      for the journey ahead is to drink ample water and avoid any strenuous activity on day 1. 
                      Enjoy an overnight stay at a hotel in Leh and gear up for the adventurous day ahead.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 2: Excursion to Sham Valley</h3>
                    <p className="text-gray-700 mb-3">
                      After a delicious breakfast at the hotel, head for the Sham Valley excursion.
                    </p>
                    <div className="ml-4 space-y-2">
                      <p className="text-gray-700">
                        <strong>Sangam Point:</strong> Begin your sightseeing tour by first visiting Sangam Point where you will get to see 
                        the beautiful confluence of two major rivers of Ladakh - Indus River and Zanskar River. It is a marvellous sight 
                        creating an eye-pleasing spectacle in the distinct green and blue hues.
                      </p>
                      <p className="text-gray-700">
                        <strong>Gurudwara Pathar Sahib:</strong> You will then proceed to the revered Sikh shrine, Gurudwara Pathar Sahib. 
                        According to legend, during Guru Nanak Dev Ji's sojourn in Ladakh, he was attacked by a demon and it is at this place 
                        that he vanquished the demon. The boulder with which the demon attacked Guru Nanak Dev Ji still rests here and has 
                        imprints of Guru Nanak Dev Ji and the foot of the demon.
                      </p>
                      <p className="text-gray-700">
                        <strong>Magnetic Hill:</strong> Next on the list is Magnetic Hill, a unique place that gives you an optical illusion 
                        that the vehicles there climb upward whereas, in reality, they move downhill.
                      </p>
                      <p className="text-gray-700">
                        <strong>Hall of Fame Museum:</strong> Also, visit the Hall of Fame Museum constructed and maintained by the Indian Army 
                        in recognition of brave Indian soldiers who sacrificed their lives during the Indo-Pak War. The museum houses memorabilia, 
                        images and various weapons used during the Kargil and other key strategic battles fought in Ladakh.
                      </p>
                    </div>
                    <p className="text-gray-700 mt-3">Return to your hotel for an overnight stay.</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 3: Excursion to K Top and Return to Leh</h3>
                    <p className="text-gray-700">
                      Enjoy a delicious breakfast and prepare for a scenic drive to Khardung La Pass or K-top. It is the world's highest motorable road 
                      at an altitude of around 18,350 ft. Gateway to the Shyok and Nubra Valley, the pass is a favourite spot among bikers and adventure lovers. 
                      It also carries huge historical significance as it was once a part of the ancient silk route linking Leh to Kashgar in Central Asia. 
                      Khardung La Pass offers spectacular views of the snow-capped mountain ranges on both sides. Click a lot of pictures and create lifelong memories here. 
                      After spending some time at K-top, head back to Leh. Overnight stay at the hotel in Leh.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 4: Excursion to Pangong Lake and Return to Leh</h3>
                    <p className="text-gray-700">
                      Wake up to a beautiful day and have a hearty meal. Today you will go on an adventurous excursion to the very famous Pangong Lake. 
                      It is one of the most pristine lakes in India and is also the highest saltwater lake in the world. The lake charms visitors with its 
                      unmatched natural beauty and scenic landscapes. It is an experience to witness the changing colours of the lake water as the sun shines over it 
                      and to see the reflection of lofty mountains in the lake. It is also a paradise for birdwatchers who enjoy catching a glimpse of several 
                      migratory birds who flock to this lake. After having a fun-filled day at Pangong Lake, head back to Leh City for an overnight stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 5: Departure from Leh</h3>
                    <p className="text-gray-700">
                      Your 4 nights 5 days Ladakh tour package ends here. Savour a delectable breakfast on your last morning in Ladakh. 
                      Pack your bags and complete the check-out formalities. It's time to depart! Our representative will help you in transferring 
                      to the airport to board your flight back home.
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
                    <h3 className="font-semibold text-lg mb-2">Leh (4 Nights)</h3>
                    <p className="text-gray-700">Naro, Kidar, Zimskhang Villa, The Ladakh or similar category hotels</p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Note:</strong> All accommodations are based in Leh city for comfortable stays and easy acclimatization. 
                      No remote camping or high-altitude overnight stays required.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹14,999
                  </div>
                  <div className="text-gray-500 line-through text-lg">₹18,749</div>
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
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ending Point:</span>
                    <span className="font-semibold">Leh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Package Type:</span>
                    <span className="font-semibold">Highlights Tour</span>
                  </div>
                </div>
                
                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Highlights%20of%20Ladakh%20Package%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold mb-4 block text-center">
                  Book Now
                </a>
                
                <div className="text-center mb-4">
                  <a href="tel:+918899971960" className="text-blue-600 hover:underline">
                    📞 Call: +91 8899971960
                  </a>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Ladakh Highlights</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Perfect introduction to Ladakh</li>
                    <li>• All stays in comfortable Leh hotels</li>
                    <li>• Sham Valley complete circuit</li>
                    <li>• Sangam Point - Two rivers confluence</li>
                    <li>• Gurudwara Pathar Sahib - Sacred Sikh shrine</li>
                    <li>• Magnetic Hill - Gravity defying road</li>
                    <li>• Hall of Fame Museum - Military heritage</li>
                    <li>• Khardung La Pass - World's highest motorable road</li>
                    <li>• Pangong Lake - High altitude pristine lake</li>
                    <li>• Day excursions from Leh base</li>
                    <li>• Excellent acclimatization schedule</li>
                    <li>• Best value for money</li>
                    <li>• No high altitude overnight stays</li>
                    <li>• Suitable for all age groups</li>
                  </ul>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-yellow-800 font-medium">Best Seller</span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">
                    Most popular choice for first-time visitors to experience Ladakh's major attractions comfortably.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightsOfLadakhPackage;