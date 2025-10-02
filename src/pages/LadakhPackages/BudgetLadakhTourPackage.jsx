import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
const ld7 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514669/travelwiki/assets/Ladakh/ld7.jpg";

const BudgetLadakhTourPackage = () => {
  return (
    <>
      <SEO 
        pageType="ladakh"
        customTitle="Budget Ladakh Tour Package - 3N/4D Starting ₹11,999"
        customDescription="Explore Ladakh on a budget with our affordable 3 nights 4 days tour package. Visit Khardung La Pass and Pangong Lake starting from ₹11,999 per person. Perfect for short trips."
        customKeywords={["budget Ladakh tour", "cheap Ladakh package", "3 days Ladakh tour", "Khardung La budget tour", "Pangong Lake budget package"]}
        customImage={ld7}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Budget Ladakh Tour Package",
            "description": "Explore Ladakh on a budget with our affordable 3 nights 4 days tour package. Visit Khardung La Pass and Pangong Lake starting from ₹11,999 per person.",
            "image": ld7,
            "offers": {
              "@type": "Offer",
              "price": "11999",
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
            "duration": "P3DT4N",
            "touristType": ["Budget Travelers", "Adventure Seekers", "First-time Visitors"]
          })}
        </script>
      </SEO>
      
      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ld7})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Budget Ladakh Tour Package
              </h1>
              <p className="text-xl">3 Nights / 4 Days</p>
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
                  Got only 3 nights and 4 days to visit Ladakh? One thing is certain, this is a short duration and you will not have time in hand to see it all. 
                  But don't stress! We have the right Ladakh package for you that will help you make the most of your Ladakh trip.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our 3 nights and 4 days Ladakh tour package covers the main tourist places of Ladakh including the Leh city tour, 
                  K Top and Pangong Lake. You can further customise it depending on your unique choices and preferences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We have crafted a wholesome itinerary for you that lets you explore and experience Ladakh's captivating landscapes, 
                  rugged terrain, snowy mountains, rich culture, age-old monasteries and gompas, high mountain passes and serene lakes, 
                  all in just 4 days, and that too comfortably. Get in touch with our travel experts to book this 3 nights Ladakh travel package 
                  and get ready to make life-long memories!
                </p>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 1: Arrival in Leh</h3>
                    <p className="text-gray-700">
                      Welcome to the Land of High Passes! As soon as you arrive at the Kushok Bakula Rimpochee Airport in Leh, 
                      our representative will greet you and accompany you to the hotel. On reaching hotel, complete your check-in formalities 
                      and spend the remaining day resting and acclimatizing to the high altitudes of Ladakh. We strongly advice to avoid 
                      any strenuous activity on first day and keep yourself hydrated at all times. This will help you to acclimatize well. 
                      Enjoy an overnight stay at a hotel in Leh and gear up for the valiant day ahead.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 2: Excursion to K Top and Return to Leh</h3>
                    <p className="text-gray-700">
                      After a delicious breakfast at the hotel, head for an adventurous drive to Khardung La Pass or K-top. 
                      Enjoy the beautiful drive unveiling a breathtaking panorama of snow-capped peaks and rugged terrain at every turn. 
                      Nestled in the majestic Himalayas, Khardung La Pass truly boasts of nature's grandeur. As you reach there, 
                      you will be greeted by a stunning landscape and awe-inspiring panorama. As the world's highest motorable pass 
                      at an altitude of around 18,350 ft., Khardung La embodies the triumph of exploration, inviting travellers to embrace 
                      its challenges and lead to a rewarding and fulfilling experience. After spending some time at K-top, head back to Leh. 
                      Overnight stay at the hotel in Leh.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 3: Excursion to Pangong Lake and Return to Leh</h3>
                    <p className="text-gray-700">
                      Wake up to a gorgeous morning and have a healthy meal. Today you will go on a surreal excursion to the Bollywood famed Pangong Lake. 
                      Pangong Lake is considered to be one of the most scenic lakes in India. It is also the highest saltwater lake in the world 
                      located at an altitude of 4,350 m above sea level. The lake completely freezes during winters but throughout summer and autumn, 
                      it comes alive with a tapestry of 7 shades of blue. Enjoy a lovely stroll along the lake and catch a glimpse of several 
                      migratory birds who flock to this lake. After having a splendid day at Pangong Lake, head back to Leh City for an overnight stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 4: Departure from Leh</h3>
                    <p className="text-gray-700">
                      Your 3 nights 4 days Ladakh tour package with Pangong Lake ends here. Enjoy a wholesome breakfast in the hotel 
                      and prepare to check out. Our representative will assist you in transferring to the airport to board your flight back home. 
                      We hope you have made lovely memories on this short but delightful Ladakh trip.
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
                    <h3 className="font-semibold text-lg mb-2">Leh (3 Nights)</h3>
                    <p className="text-gray-700">Naro, Kidar, Zimskhang Villa, The Ladakh or similar category hotels</p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Note:</strong> All accommodations are based in Leh city for easy acclimatization and convenient day excursions to major attractions.
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
                    ₹11,999
                  </div>
                  <div className="text-gray-500 line-through text-lg">₹14,999</div>
                  <div className="text-red-600 font-semibold">20% OFF</div>
                  <div className="text-gray-600">Per person</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Updated on: 07 February 2025
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">3N / 4D</span>
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
                    <span className="font-semibold">Budget Tour</span>
                  </div>
                </div>
                
                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Budget%20Ladakh%20Tour%20Package%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold mb-4 block text-center">
                  Book Now
                </a>
                
                <div className="text-center mb-4">
                  <a href="tel:+918899971960" className="text-blue-600 hover:underline">
                    📞 Call: +91 8899971960
                  </a>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Budget-Friendly Highlights</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Perfect for short Ladakh visits</li>
                    <li>• All stays in Leh for easy acclimatization</li>
                    <li>• Khardung La Pass - World's highest motorable road</li>
                    <li>• Pangong Lake day excursion</li>
                    <li>• Bollywood famous locations</li>
                    <li>• Leh city sightseeing</li>
                    <li>• Ancient monasteries visit</li>
                    <li>• Local market exploration</li>
                    <li>• Comfortable budget accommodations</li>
                    <li>• All transfers included</li>
                    <li>• Professional local guide</li>
                    <li>• Acclimatization time included</li>
                    <li>• Innerline permits arranged</li>
                    <li>• Best value for money</li>
                  </ul>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-yellow-800 font-medium">Budget Special</span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">
                    Ideal for travelers with limited time but want to experience Ladakh's main attractions.
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

export default BudgetLadakhTourPackage;