import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";

export default function KashmirWithVaishnoDevi() {
  const seoData = useSEO({
    title: "Kashmir with Vaishno Devi Tour | 8 Nights Spiritual & Scenic Package",
    description: "Combine spiritual journey to Vaishno Devi with Kashmir valley beauty. 8 nights package covering darshan, Srinagar, Gulmarg, and Pahalgam. Complete pilgrimage tour at ₹20,999.",
    keywords: "Kashmir Vaishno Devi tour, spiritual Kashmir package, Mata Vaishno Devi darshan, Kashmir pilgrimage tour, 8 nights spiritual tour",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-with-vaishno-devi/"
  });

  const packageData = {
    name: "Kashmir with Vaishno Devi Tour",
    description: "A perfect spiritual and scenic tour combining the divine blessings of Mata Vaishno Devi with the natural beauty of Kashmir valley.",
    price: "20999",
    duration: "9 days",
    destinations: ["Katra", "Vaishno Devi", "Srinagar", "Gulmarg", "Pahalgam"],
    highlights: [
      "Vaishno Devi darshan",
      "Helicopter services available",
      "Kashmir valley tour",
      "Spiritual and scenic combination",
      "Comfortable accommodations",
      "Complete pilgrimage experience"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-red-600 to-orange-700 text-white py-25">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir with Vaishno Devi Tour
              </h1>
              <p className="text-xl mb-8">
                Seek divine blessings at Mata Vaishno Devi and experience the paradise of Kashmir in one spiritual journey
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹20,999</span>
                  <span className="text-lg ml-2 text-black">per person</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20With%20Vaishno%20Devi%20Tour%20from%20Travel%20Wiki."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Now
                </a>
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
                <div className="text-red-600 text-3xl mb-2">🕉️</div>
                <h3 className="font-semibold text-gray-800">Pilgrimage</h3>
                <p className="text-gray-600">Vaishno Devi Darshan</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">🚁</div>
                <h3 className="font-semibold text-gray-800">Options</h3>
                <p className="text-gray-600">Helicopter Available</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Kashmir</h3>
                <p className="text-gray-600">Valley Tour</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">🙏</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Spiritual Journey</p>
              </div>
            </div>

            {/* Spiritual Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Spiritual & Scenic Journey</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This unique tour package combines the spiritual fulfillment of seeking blessings at the holy shrine 
                of Mata Vaishno Devi with the breathtaking natural beauty of Kashmir valley. Experience divine grace 
                and natural paradise in one comprehensive journey that nourishes both soul and senses.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The tour begins with the sacred pilgrimage to Vaishno Devi temple, one of India's most revered shrines, 
                where millions of devotees visit annually. Located in the Trikota Mountains of Jammu, the temple 
                offers spiritual solace and divine blessings. We provide options for both traditional trek and helicopter 
                services for darshan.
              </p>
              <p className="text-gray-600 leading-relaxed">
                After the spiritual experience, the tour transitions to the scenic beauty of Kashmir valley, often 
                called "Paradise on Earth." This perfect combination ensures you return home with both divine blessings 
                and unforgettable memories of natural beauty.
              </p>
            </div>

            {/* Tour Components */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tour Components</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🕉️ Spiritual Experience (3 Days)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival in Katra base camp</li>
                    <li>• Vaishno Devi temple darshan</li>
                    <li>• Traditional trek or helicopter option</li>
                    <li>• Ardhkuwari cave visit</li>
                    <li>• Bhawan temple prayers</li>
                    <li>• Sacred prasadam and blessings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Kashmir Valley (5 Days)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Srinagar: Dal Lake, Mughal Gardens</li>
                    <li>• Gulmarg: Gondola rides, snow activities</li>
                    <li>• Pahalgam: Betaab Valley, Aru Valley</li>
                    <li>• Sonamarg: Thajiwas glacier excursion</li>
                    <li>• Local sightseeing and shopping</li>
                    <li>• Traditional Kashmiri hospitality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pilgrimage Information */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Vaishno Devi Pilgrimage Information</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚶‍♀️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Traditional Trek</h4>
                  <p className="text-gray-600">13 km uphill trek to the holy shrine with ponies and palanquins available</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚁</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Helicopter Service</h4>
                  <p className="text-gray-600">Quick helicopter ride to Sanjichhat for easy access to temple</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">24/7 Open</h4>
                  <p className="text-gray-600">Temple remains open throughout the year, day and night</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Accommodation</h4>
                  <p className="text-gray-600">Various accommodation options available in Katra</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Facilities</h4>
                  <p className="text-gray-600">Food courts, rest areas, and medical facilities along the route</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎫</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Booking</h4>
                  <p className="text-gray-600">We arrange all bookings including helicopter tickets if required</p>
                </div>
              </div>
            </div>

            {/* Complete Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Complete Tour Itinerary</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 1: Arrival in Katra</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Arrival at Jammu airport/railway station</li>
                    <li>Transfer to Katra (48 km, 1.5 hours)</li>
                    <li>Hotel check-in and preparation for darshan</li>
                    <li>Evening rest and early sleep</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 2: Vaishno Devi Darshan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Early morning start for darshan (2-3 AM)</li>
                    <li>Trek/helicopter to Vaishno Devi temple</li>
                    <li>Darshan and prayers at holy shrine</li>
                    <li>Return to Katra base camp</li>
                    <li>Rest and recovery</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 3: Katra to Srinagar</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Check-out from Katra hotel</li>
                    <li>Drive to Srinagar (270 km, 6-7 hours)</li>
                    <li>Scenic journey through mountains</li>
                    <li>Arrival and check-in at Srinagar hotel</li>
                    <li>Evening leisure at Dal Lake</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 4-5: Srinagar Exploration</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Dal Lake Shikara rides and houseboat experience</li>
                    <li>Mughal Gardens tour (Shalimar, Nishat, Chashme Shahi)</li>
                    <li>Local sightseeing and market visits</li>
                    <li>Traditional Kashmiri cuisine experiences</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 6: Gulmarg Day Trip</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Full day excursion to Gulmarg</li>
                    <li>Gondola rides and snow activities</li>
                    <li>Explore meadows and take photographs</li>
                    <li>Return to Srinagar in evening</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 7: Pahalgam Excursion</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Day trip to Pahalgam valley</li>
                    <li>Visit Betaab Valley and Aru Valley</li>
                    <li>Nature walks and photography</li>
                    <li>Return to Srinagar for overnight stay</li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 8: Sonamarg Day Trip</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Excursion to Sonamarg (Meadow of Gold)</li>
                    <li>Visit Thajiwas Glacier</li>
                    <li>Pony rides and snow activities</li>
                    <li>Return to Srinagar</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 9: Departure</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Check-out and final shopping</li>
                    <li>Transfer to Srinagar airport</li>
                    <li>Departure with blessings and memories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}