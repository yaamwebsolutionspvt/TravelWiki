import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import OptimizedImage from "../../components/OptimizedImage";
const ld11 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514658/travelwiki/assets/Ladakh/ld11.jpg";

const AmazingLadakhTourWithNubraStay = () => {
  return (
    <>
      <SEO
        title="Amazing Ladakh Tour with Nubra Stay - 4N/5D Starting ₹16,999 | Travel Wiki"
        description="Experience the perfect blend of thrill and natural beauty with our 4 nights 5 days Ladakh tour including Leh city tour, Sham Valley, Nubra Valley and Pangong Lake. Book now!"
        keywords="Amazing Ladakh tour, Nubra Valley stay, Pangong Lake tour, Khardung La Pass, Sham Valley excursion, Ladakh 4 nights 5 days"
      />

      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div className="relative h-96 w-full">
          {/* Background image */}
          <OptimizedImage
            src='/ladakhbg.png'
            alt="Amazing Ladakh Tour"
            width={1920}
            height={384}
            className="absolute inset-0 w-full h-full object-cover"
            sizes="100vw"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Amazing Ladakh Tour with Nubra Stay
              </h1>
              <p className="text-xl">4 Nights / 5 Days</p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="text-3xl font-bold">₹16,999</span>
                <span className="text-xl line-through opacity-75">₹21,249</span>
                <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm">
                  20% OFF
                </span>
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
                  <p className="text-gray-600 text-sm">4N / 5D</p>
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
                  Looking for a holiday destination that offers a perfect blend of thrill and natural beauty? Check out our unique Ladakh itinerary that promises to satisfy your holiday craving.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This 4 night and 5 day tour is well-crafted to offer you the best of Ladakh by including the Leh city tour, Sham Valley, Nubra Valley and Pangong Lake. This short but diverse itinerary will let you admire the breathtaking hills and discover stunning locales of the Ladakh region.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From camping and camel riding in Nubra Valley to the monastery visit in Leh, from nature walks and bird watching at Pangong Lake to exploring the enchanting beauty of Sham Valley, this wholesome Ladakh tour itinerary has everything that you can ask for.
                </p>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 1: Arrival in Leh</h3>
                    <p className="text-gray-700">
                      Upon arrival at the Leh Airport, you will be welcomed by our representative and transferred to your hotel. Complete your check-in formalities and rest for the day. Since you have arrived by air at 11000 feet, we strictly advise you to take complete rest and acclimatize with Leh weather and altitude. We recommend you to drink ample water and avoid any strenuous activity.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Enjoy an overnight stay at a hotel in Leh and gear up for upcoming journeys.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 2: Excursion to Sham Valley</h3>
                    <p className="text-gray-700 mb-2">
                      Begin your day with a wholesome breakfast and head for the Sham Valley excursion.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Drive alongside the banks of the Indus River till you reach Sangam</li>
                      <li>Witness the beautiful confluence of Indus and Zanskar Rivers</li>
                      <li>Visit Gurudwara Pathar Sahib, a revered Sikh shrine</li>
                      <li>Experience Magnetic Hill where vehicles defy gravity</li>
                      <li>Visit Hall of Fame museum built by the Indian Army</li>
                      <li>End the day at Shanti Stupa with stunning views of Leh city</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Return to your hotel for an overnight stay.</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 3: Leh to Nubra Valley via Khardung La Pass</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 160.3 km / 4 hrs 43 minutes | <strong>Height:</strong> 10,000m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Wake up to a beautiful day and have a hearty meal. Afterwards, pack your bags as today you will be proceeding towards Nubra Valley. En route, you will make a pit stop at Khardung La Pass which is one of the highest mountain passes in the world located at 18,832 feet above sea level.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Photo opportunities at Khardung La Pass with snow-capped peaks</li>
                      <li>Scenic drive through Nubra Valley</li>
                      <li>Check-in to camp accommodation</li>
                      <li>Visit Hunder sand dunes</li>
                      <li>Double hump Bactrian camel safari</li>
                      <li>Yak safari and ATV ride opportunities</li>
                      <li>Stroll along the sand dunes of Hunder village</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Overnight stay at the camp.</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 4: Excursion to Pangong Lake via Shayok River / Wari La Pass and Return to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 140 km / 6 hours | <strong>Height:</strong> 4,250m
                    </p>
                    <p className="text-gray-700 mb-2">
                      Wake up to a beautiful view of Nubra Valley. Have a scrumptious breakfast and then check out to proceed towards Pangong Lake - the highest saltwater lake in the world and one of the most pristine lakes in India.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Marvel at the mesmerizing turquoise waters of Pangong Lake</li>
                      <li>Take a stroll near the bank of the lake</li>
                      <li>Spot several migratory birds that flock here</li>
                      <li>Enjoy the ethereal beauty set amidst lofty Himalayan mountains</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      After having a fun-filled day at Pangong Lake, leave for Leh City by late afternoon. Reach Leh and check in to your hotel. Overnight stay at Leh.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Day 5: Departure from Leh</h3>
                    <p className="text-gray-700">
                      Arise to a surreal sunrise and then have a toothsome breakfast. Your 4 nights 5 days amazing Ladakh tour with Nubra stay has come to an end. It's time to depart, pack your bags and check out from the hotel. Our representative will assist you in transferring to the airport to board the onward flight.
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
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Leh</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Naro, Kidar, Zimskhang Villa, The Ladakh</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-sm text-gray-700 font-medium">Nubra</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Visalta Camps, De Nubra Camps, Paradise North Camps / Apple Camps</td>
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
                    <span className="text-3xl font-bold text-blue-600">₹16,999</span>
                    <span className="text-lg line-through text-gray-500">₹21,249</span>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">20% OFF</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">4N / 5D</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Destinations:</span>
                    <span className="font-semibold">Leh, Nubra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Updated:</span>
                    <span className="font-semibold">07 Feb 2025</span>
                  </div>
                </div>

                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Amazing%20Ladakh%20Tour%20with%20Nubra%20Stay%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3 block text-center">
                  Book Now
                </a>
                <Link to='/contact' >
                  <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer">
                    Enquiry Now
                  </button>
                </Link>

              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 text-xl mr-3">🎯</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Best Travel Experts</h4>
                      <p className="text-sm text-gray-600">Over 10 years of experience in Leh Ladakh sector</p>
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

export default AmazingLadakhTourWithNubraStay;