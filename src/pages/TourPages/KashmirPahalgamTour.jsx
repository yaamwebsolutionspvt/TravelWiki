import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";

export default function KashmirPahalgamTour() {
  const seoData = useSEO({
    title: "Kashmir Pahalgam Tour Package | 5 Nights Valley of Shepherds",
    description: "Explore the beautiful Pahalgam valley with our 5 nights tour package. Visit Betaab Valley, Aru Valley, Chandanwari, and enjoy nature at its best. Starting at ₹11,999.",
    keywords: "Pahalgam tour package, Kashmir Pahalgam tour, Betaab Valley tour, Aru Valley Kashmir, Chandanwari tour, valley of shepherds",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-pahalgam-tour/"
  });

  const packageData = {
    name: "Kashmir Pahalgam Tour Package",
    description: "Experience the pristine beauty of Pahalgam, known as the Valley of Shepherds, with comprehensive sightseeing and nature activities.",
    price: "11999",
    duration: "6 days",
    destinations: ["Srinagar", "Pahalgam", "Aru Valley", "Betaab Valley"],
    highlights: [
      "Pahalgam valley exploration",
      "Betaab Valley scenic beauty",
      "Aru Valley adventure",
      "Chandanwari glacier point",
      "River rafting activities",
      "Nature photography tours"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-600 to-emerald-700 text-white py-25">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Pahalgam Tour Package
              </h1>
              <p className="text-xl mb-8">
                Discover the Valley of Shepherds with its pristine beauty, lush meadows, and crystal-clear streams
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹11,999</span>
                  <span className="text-lg ml-2 text-black">per person</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Pahalgam%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-green-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">Pahalgam Valley</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🌲</div>
                <h3 className="font-semibold text-gray-800">Altitude</h3>
                <p className="text-gray-600">2130m above sea level</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🏞️</div>
                <h3 className="font-semibold text-gray-800">Attractions</h3>
                <p className="text-gray-600">3 Major Valleys</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🚣</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">River Rafting</p>
              </div>
            </div>

            {/* Pahalgam Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Pahalgam - Valley of Shepherds</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pahalgam, situated at an altitude of 2,130 meters, is one of Kashmir's most popular hill stations. 
                Known as the "Valley of Shepherds," this picturesque town is famous for its lush green meadows, 
                pine forests, and the gushing Lidder River that flows through the valley.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The town serves as the base camp for the annual Amarnath Yatra and offers numerous trekking 
                opportunities. Pahalgam is also famous for being a filming location for many Bollywood movies, 
                particularly in the beautiful Betaab Valley which was named after the movie "Betaab."
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive tour package covers all major attractions in and around Pahalgam, including 
                the scenic valleys, adventure activities, and cultural experiences that make this destination 
                a must-visit for nature lovers and adventure enthusiasts.
              </p>
            </div>

            {/* Valley Attractions */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Famous Valleys & Attractions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎬</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Betaab Valley</h4>
                  <p className="text-gray-600">Famous Bollywood filming location with stunning meadows and streams</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Aru Valley</h4>
                  <p className="text-gray-600">Pristine valley perfect for camping and trekking adventures</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">❄️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Chandanwari</h4>
                  <p className="text-gray-600">Starting point of Amarnath Yatra with glacier views</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌊</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Lidder River</h4>
                  <p className="text-gray-600">Crystal clear river perfect for fishing and rafting</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚶‍♀️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Nature Trails</h4>
                  <p className="text-gray-600">Multiple trekking routes through pine forests</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🐎</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Pony Rides</h4>
                  <p className="text-gray-600">Traditional pony rides to various viewpoints</p>
                </div>
              </div>
            </div>

            {/* Tour Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Pahalgam Tour Itinerary</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 1: Arrival in Srinagar</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Airport pickup and hotel check-in</li>
                    <li>Local sightseeing in Srinagar</li>
                    <li>Dal Lake Shikara ride</li>
                    <li>Visit Mughal Gardens</li>
                    <li>Overnight stay in Srinagar</li>
                  </ul>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 2: Srinagar to Pahalgam</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Drive to Pahalgam (95 km, 2.5 hours)</li>
                    <li>Check-in at Pahalgam hotel</li>
                    <li>Explore Pahalgam main market</li>
                    <li>Walk along Lidder River</li>
                    <li>Evening leisure time</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 3: Betaab Valley & Aru Valley</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Morning visit to Betaab Valley</li>
                    <li>Photography and nature walks</li>
                    <li>Lunch amidst scenic surroundings</li>
                    <li>Afternoon excursion to Aru Valley</li>
                    <li>Camping experience (optional)</li>
                    <li>Return to Pahalgam for overnight stay</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 4: Chandanwari Excursion</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Early morning drive to Chandanwari</li>
                    <li>Glacier viewing and snow activities</li>
                    <li>Pony rides to nearby viewpoints</li>
                    <li>Adventure activities and trekking</li>
                    <li>Return to Pahalgam</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 5: Adventure Activities</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>River rafting on Lidder River</li>
                    <li>Fishing in mountain streams</li>
                    <li>Nature photography tours</li>
                    <li>Local handicraft shopping</li>
                    <li>Cultural evening program</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 6: Return to Srinagar & Departure</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Check-out from Pahalgam hotel</li>
                    <li>Drive back to Srinagar</li>
                    <li>Last-minute shopping</li>
                    <li>Airport transfer and departure</li>
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