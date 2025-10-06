import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import OptimizedImage from "../../components/OptimizedImage";
import ItineraryCard from "../../components/ItineraryCard";
const ld11 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1758523704/Desert_Mirage_Nubra_Valley_w5msem.png";

const AmazingLadakhTourWithNubraStay = () => {
  return (
    <>
      <SEO
        pageType="ladakh"
        customTitle="Amazing Ladakh Tour with Nubra Stay - 4N/5D Starting ₹16,999"
        customDescription="Experience the perfect blend of thrill and natural beauty with our 4 nights 5 days Ladakh tour including Leh city tour, Sham Valley, Nubra Valley and Pangong Lake. Book now!"
        customKeywords={["Amazing Ladakh tour", "Nubra Valley stay", "Pangong Lake tour", "Khardung La Pass", "Sham Valley excursion", "Ladakh 4 nights 5 days"]}
        customImage="https://res.cloudinary.com/dw1sh368y/image/upload/v1758523704/Desert_Mirage_Nubra_Valley_w5msem.png"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Amazing Ladakh Tour with Nubra Stay",
            "description": "Experience the perfect blend of thrill and natural beauty with our 4 nights 5 days Ladakh tour including Leh city tour, Sham Valley, Nubra Valley and Pangong Lake.",
            "image": "https://res.cloudinary.com/dw1sh368y/image/upload/v1758523704/Desert_Mirage_Nubra_Valley_w5msem.png",
            "url": "https://travelwiki.org.in/ladakh-packages/amazing-ladakh-tour-with-nubra-stay",
            "offers": {
              "@type": "Offer",
              "price": "16999",
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
            "touristType": ["Adventure Seekers", "Nature Lovers", "Photography Enthusiasts"],
            "itinerary": [
              {
                "@type": "Day",
                "name": "Day 1: Arrival in Leh",
                "description": "Arrival at Leh Airport, transfer to hotel and acclimatization"
              },
              {
                "@type": "Day", 
                "name": "Day 2: Sham Valley Excursion",
                "description": "Visit Sangam, Gurudwara Pathar Sahib, Magnetic Hill, Hall of Fame, and Shanti Stupa"
              },
              {
                "@type": "Day",
                "name": "Day 3: Leh to Nubra Valley",
                "description": "Travel via Khardung La Pass, camel safari at Hunder sand dunes"
              },
              {
                "@type": "Day",
                "name": "Day 4: Pangong Lake Excursion",
                "description": "Visit Pangong Lake via Shayok River, return to Leh"
              },
              {
                "@type": "Day",
                "name": "Day 5: Departure",
                "description": "Transfer to Leh Airport for onward journey"
              }
            ],
            "includesObject": [
              "4 nights accommodation",
              "Daily breakfast and dinner",
              "Non-AC cab transfers",
              "Airport assistance",
              "Inner line permits"
            ]
          })}
        </script>
      </SEO>

      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
          {/* Background image */}
          <OptimizedImage
            src={ld11}
            alt="Amazing Ladakh Tour"
            width={1920}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            style={{ 
              imageRendering: 'crisp-edges',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          />

          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

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
                  <ItineraryCard
                    title="Day 1: Arrival in Leh"
                    activities={[
                      "Arrival at Leh Airport and transfer to hotel",
                      "Complete check-in formalities and rest for acclimatization",
                      "Drink ample water and avoid strenuous activity",
                      "Enjoy overnight stay at hotel in Leh"
                    ]}
                    imageUrl="https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Leh+Airport"
                    imageAlt="Leh Airport Arrival"
                    imageTitle="Leh Airport"
                    imageSubtitle="Arrival & Acclimatization"
                    icon="🏔️"
                  />

                  <ItineraryCard
                    title="Day 2: Excursion to Sham Valley"
                    activities={[
                      "Drive alongside the banks of the Indus River till you reach Sangam",
                      "Witness the beautiful confluence of Indus and Zanskar Rivers",
                      "Visit Gurudwara Pathar Sahib, a revered Sikh shrine",
                      "Experience Magnetic Hill where vehicles defy gravity",
                      "Visit Hall of Fame museum built by the Indian Army",
                      "End the day at Shanti Stupa with stunning views of Leh city",
                      "Return to hotel for overnight stay"
                    ]}
                    imageUrl="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Sham+Valley"
                    imageAlt="Sham Valley Excursion"
                    imageTitle="Sham Valley"
                    imageSubtitle="Scenic Beauty & Acclimatization"
                    icon="🏔️"
                  />

                  <ItineraryCard
                    title="Day 3: Leh to Nubra Valley via Khardung La Pass"
                    activities={[
                      "Photo opportunities at Khardung La Pass (18,832 ft)",
                      "Scenic drive through Nubra Valley",
                      "Check-in to camp accommodation",
                      "Visit Hunder sand dunes",
                      "Double hump Bactrian camel safari",
                      "Yak safari and ATV ride opportunities",
                      "Stroll along the sand dunes of Hunder village",
                      "Overnight stay at the camp"
                    ]}
                    imageUrl="https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Nubra+Valley"
                    imageAlt="Nubra Valley Experience"
                    imageTitle="Nubra Valley"
                    imageSubtitle="Desert & Mountains"
                    icon="🐪"
                  />

                  <ItineraryCard
                    title="Day 4: Excursion to Pangong Lake"
                    activities={[
                      "Marvel at mesmerizing turquoise waters of Pangong Lake",
                      "Take a stroll near the bank of the lake",
                      "Spot several migratory birds that flock here",
                      "Enjoy the ethereal beauty set amidst lofty Himalayan mountains",
                      "After fun-filled day at Pangong Lake, leave for Leh City",
                      "Reach Leh and check in to hotel",
                      "Overnight stay at Leh"
                    ]}
                    imageUrl="https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Pangong+Lake"
                    imageAlt="Pangong Lake Experience"
                    imageTitle="Pangong Lake"
                    imageSubtitle="Highest Saltwater Lake"
                    icon="🏞️"
                  />

                  <ItineraryCard
                    title="Day 5: Departure from Leh"
                    activities={[
                      "Surreal sunrise and hearty breakfast",
                      "Pack bags and check out from hotel",
                      "Transfer to Leh Airport for onward flight",
                      "End of amazing 4N5D Ladakh tour"
                    ]}
                    imageUrl="https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Leh+Departure"
                    imageAlt="Leh Departure"
                    imageTitle="Leh Departure"
                    imageSubtitle="End of Amazing Journey"
                    icon="✈️"
                  />
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