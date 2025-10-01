import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
const kashmirPackage = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514592/travelwiki/assets/Bestseller/kashmir-package.jpg";

export default function KashmirValleyTour() {
  const seoData = useSEO({
    title: "Kashmir Valley Tour Package | 7 Nights Complete Kashmir Experience",
    description: "Comprehensive Kashmir Valley tour covering all major destinations. 7 nights package including Srinagar, Gulmarg, Pahalgam, and Sonamarg. Complete paradise experience at ₹16,999.",
    keywords: "Kashmir valley tour, complete Kashmir package, 7 nights Kashmir tour, Kashmir valley experience, comprehensive Kashmir tour",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-valley-tour/"
  });

  const packageData = {
    name: "Kashmir Valley Tour Package",
    description: "The most comprehensive tour package covering entire Kashmir valley with all major destinations and attractions for the complete paradise experience.",
    price: "11999",
    originalPrice: "14999",
    duration: "8 days",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour to Chandanwari, Aru & Betab Valley IN Pahalgam",
      "1N Srinagar, 1N Pahalgam, 1N Gulmarg, 1N Srinagar HB",
      "3 Hotels, 6 Activities, 4 Transfers",
      "Complete valley coverage",
      "All major attractions included"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Kashmir Valley Tour Package
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Experience the complete beauty of Kashmir valley with our comprehensive 7 nights tour covering all major destinations
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹16,999</span>
                  <span className="text-lg ml-2 text-black">per person</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Valley%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-purple-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">7 Nights / 8 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Coverage</h3>
                <p className="text-gray-600">Complete Valley</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">📍</div>
                <h3 className="font-semibold text-gray-800">Destinations</h3>
                <p className="text-gray-600">4 Major Places</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">⭐</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Premium Tour</p>
              </div>
            </div>

            {/* Valley Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Complete Kashmir Valley Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Kashmir Valley Tour Package is the most comprehensive tour offering that covers every major 
                destination and attraction in the Kashmir valley. This 7-night, 8-day journey takes you through 
                the most beautiful landscapes, cultural sites, and adventure destinations that Kashmir has to offer.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From the serene Dal Lake in Srinagar to the snow-capped peaks of Gulmarg, from the lush meadows 
                of Pahalgam to the golden meadows of Sonamarg, this tour ensures you experience every facet of 
                Kashmir's natural beauty and cultural richness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The package includes premium accommodations, experienced guides, comfortable transportation, and 
                carefully planned itineraries that maximize your experience while ensuring comfort and safety. 
                Perfect for those who want to see everything Kashmir has to offer in a single, well-organized trip.
              </p>
            </div>

            {/* Destinations Coverage */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Complete Valley Coverage</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Srinagar (2 Nights)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Dal Lake and Shikara rides</li>
                    <li>• Mughal Gardens (Shalimar, Nishat, Chashme Shahi)</li>
                    <li>• Floating vegetable market</li>
                    <li>• Traditional houseboat experience</li>
                    <li>• Local markets and handicraft shopping</li>
                    <li>• Jamia Masjid and old city tour</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚡 Gulmarg (2 Nights)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Gulmarg Gondola Phase 1 & 2</li>
                    <li>• Skiing and snow activities</li>
                    <li>• Apharwat Peak exploration</li>
                    <li>• Golf course views (summer)</li>
                    <li>• Local walks and photography</li>
                    <li>• St. Mary's Church visit</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌲 Pahalgam (2 Nights)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Betaab Valley scenic beauty</li>
                    <li>• Aru Valley camping experience</li>
                    <li>• Chandanwari glacier point</li>
                    <li>• Lidder River activities</li>
                    <li>• Nature walks and trekking</li>
                    <li>• Pony rides to viewpoints</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Sonamarg (Day Trip)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Thajiwas Glacier exploration</li>
                    <li>• Zoji La Pass views</li>
                    <li>• Sindh River activities</li>
                    <li>• Alpine meadows photography</li>
                    <li>• Pony rides to glacier</li>
                    <li>• Local trout fishing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Premium Tour Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Stays</h4>
                  <p className="text-gray-600">Carefully selected hotels and houseboats for maximum comfort</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Private Transport</h4>
                  <p className="text-gray-600">Comfortable private vehicles with experienced drivers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Expert Guides</h4>
                  <p className="text-gray-600">Knowledgeable local guides for cultural insights</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Authentic Cuisine</h4>
                  <p className="text-gray-600">Traditional Kashmiri meals and local delicacies</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography Tours</h4>
                  <p className="text-gray-600">Dedicated time for capturing stunning landscapes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Programs</h4>
                  <p className="text-gray-600">Traditional music and dance performances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}