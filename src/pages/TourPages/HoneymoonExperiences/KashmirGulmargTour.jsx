import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";

export default function KashmirGulmargTour() {
  const seoData = useSEO({
    title: "Kashmir Gulmarg Tour Package | 3 Nights 4 Days Snow Adventure",
    description: "Experience the beauty of Gulmarg with our special 3 nights tour package. Gondola rides, skiing, snow activities, and stunning mountain views. Starting at ₹10,999.",
    keywords: "Gulmarg tour package, Kashmir Gulmarg tour, Gulmarg skiing package, Gondola ride package, Kashmir snow tour, Gulmarg adventure",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-gulmarg-tour/"
  });

  const packageData = {
    name: "Kashmir Gulmarg Tour Package",
    description: "A specialized tour package focusing on the winter wonderland of Gulmarg with adventure activities and scenic beauty.",
    price: "10999",
    duration: "4 days",
    destinations: ["Srinagar", "Gulmarg"],
    highlights: [
      "Gulmarg Gondola Phase 1 & 2",
      "Skiing and snow activities",
      "Mountain photography",
      "Local sightseeing in Srinagar",
      "Comfortable accommodation",
      "Professional guide services"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-white text-white py-25">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Gulmarg Tour Package
              </h1>
              <p className="text-xl mb-8">
                Experience the winter wonderland of Gulmarg with adventure activities and breathtaking mountain views
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹10,999</span>
                  <span className="text-lg ml-2 text-black">per person</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Gulmarg%20Tour%20Package%20from%20Travel%20Wiki."
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
                <div className="text-blue-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Nights / 4 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">⛷️</div>
                <h3 className="font-semibold text-gray-800">Adventure</h3>
                <p className="text-gray-600">Skiing & Snow Sports</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🚡</div>
                <h3 className="font-semibold text-gray-800">Gondola</h3>
                <p className="text-gray-600">Phase 1 & 2</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Altitude</h3>
                <p className="text-gray-600">2650m - 3980m</p>
              </div>
            </div>

            {/* Gulmarg Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Gulmarg - The Meadow of Flowers</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Gulmarg, literally meaning "Meadow of Flowers," is one of Kashmir's most popular tourist destinations. 
                Located at an altitude of 2,650 meters, this hill station transforms into a winter wonderland during 
                the snow season and offers lush green meadows during summers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Home to the world's second-highest operating cable car, Gulmarg offers spectacular views of the 
                Himalayas and provides excellent opportunities for skiing, snowboarding, and other winter sports. 
                The town also features Asia's highest golf course during the summer months.
              </p>
            </div>

            {/* Adventure Activities */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Adventure Activities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gondola Ride</h4>
                  <p className="text-gray-600">Experience the world's second-highest cable car system</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⛷️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Skiing</h4>
                  <p className="text-gray-600">Professional skiing lessons and equipment available</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏂</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Snowboarding</h4>
                  <p className="text-gray-600">Thrilling snowboarding experiences on pristine slopes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛷</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Snow Sledging</h4>
                  <p className="text-gray-600">Fun sledging activities for all age groups</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">☃️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Snow Activities</h4>
                  <p className="text-gray-600">Snowman building, snow fights, and winter games</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography</h4>
                  <p className="text-gray-600">Capture stunning mountain landscapes and snow scenes</p>
                </div>
              </div>
            </div>

            {/* Tour Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Tour Itinerary</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 1: Arrival in Srinagar</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Airport pickup and transfer to hotel</li>
                    <li>Check-in and refreshment</li>
                    <li>Local sightseeing in Srinagar</li>
                    <li>Visit Dal Lake and Boulevard Road</li>
                    <li>Overnight stay in Srinagar</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 2: Srinagar to Gulmarg</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Early morning departure to Gulmarg (52 km)</li>
                    <li>Check-in at Gulmarg hotel</li>
                    <li>Gondola Phase 1 ride to Kongdoori</li>
                    <li>Snow activities and photography</li>
                    <li>Evening leisure time</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 3: Full Day Gulmarg Adventure</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Gondola Phase 2 ride to Apharwat Peak</li>
                    <li>Skiing lessons and equipment rental</li>
                    <li>Snow sports and adventure activities</li>
                    <li>Mountain photography sessions</li>
                    <li>Explore Gulmarg market</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 4: Departure</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Check-out from Gulmarg hotel</li>
                    <li>Last-minute shopping</li>
                    <li>Transfer to Srinagar airport</li>
                    <li>Departure with wonderful memories</li>
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