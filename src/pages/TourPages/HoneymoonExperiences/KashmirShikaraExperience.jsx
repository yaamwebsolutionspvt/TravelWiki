import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const dalLakeKashmir = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514591/travelwiki/assets/Bestseller/gandola-ride-kashmir.jpg";

export default function KashmirShikaraExperience() {
  const seoData = useSEO({
    title: "Kashmir Shikara Experience | Romantic Dal Lake Boat Rides",
    description: "Experience the enchanting Shikara rides on Dal Lake in Kashmir. Private boat rides for couples with flower decorations, sunset views, and traditional Kashmiri hospitality. Starting at ₹1,999.",
    keywords: "Kashmir Shikara ride, Dal Lake boat ride, Kashmir romantic experience, Srinagar Shikara, Kashmir water sports, Dal Lake tourism",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-shikara-experience/"
  });

  const packageData = {
    name: "Kashmir Shikara Experience",
    description: "A romantic and serene boat ride experience on the famous Dal Lake with traditional Kashmiri Shikaras.",
    price: "1999",
    originalPrice: "2499",
    duration: "2-3 hours",
    destinations: ["Dal Lake", "Nigeen Lake"],
    highlights: [
      "Private Shikara with flower decorations",
      "Sunset/Sunrise rides available",
      "Traditional Kashmiri snacks",
      "Photography assistance",
      "Floating garden visits",
      "Lotus picking experience"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen page-container">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-teal-700 text-white py-30" style={{
          backgroundImage: `url(${dalLakeKashmir})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Shikara Experience
              </h1>
              <p className="text-xl mb-8">
                Glide through the serene waters of Dal Lake in a traditional Kashmiri Shikara and create unforgettable memories
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-white">₹1,999</span>
                  <span className="text-lg line-through ml-2 text-gray-200">₹2,499</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded ml-2">20% OFF</span>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Book Experience
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quick Details */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">⏰</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">2-3 Hours</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🚣‍♀️</div>
                <h3 className="font-semibold text-gray-800">Boat Type</h3>
                <p className="text-gray-600">Traditional Shikara</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🌅</div>
                <h3 className="font-semibold text-gray-800">Best Time</h3>
                <p className="text-gray-600">Sunrise & Sunset</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">👥</div>
                <h3 className="font-semibold text-gray-800">Capacity</h3>
                <p className="text-gray-600">2-6 People</p>
              </div>
            </div>

            {/* About Experience */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Shikara Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Shikara ride is one of the most iconic experiences Kashmir has to offer. These traditional wooden boats, 
                elegantly decorated with vibrant cushions and canopies, have been gliding across Dal Lake for centuries. 
                A Shikara ride offers a unique perspective of Srinagar's beauty, allowing you to witness the floating gardens, 
                lotus blooms, and the majestic Himalayas reflected in the crystal-clear waters.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our romantic Shikara experience is specially designed for couples seeking intimate moments amidst nature's grandeur. 
                The boat is decorated with fresh flowers, and you'll be served traditional Kashmiri snacks and kehwa (saffron tea) 
                as you drift peacefully across the lake.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you choose a sunrise ride to witness the golden hour or a sunset cruise to see the sky painted in 
                brilliant hues, this experience will remain etched in your memories forever.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience Highlights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Flower Decorations</h4>
                  <p className="text-gray-600">Shikara beautifully decorated with fresh rose petals and marigolds</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mountain Views</h4>
                  <p className="text-gray-600">Panoramic views of snow-capped Himalayas surrounding the valley</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🪷</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Floating Gardens</h4>
                  <p className="text-gray-600">Navigate through beautiful floating vegetable gardens and lotus fields</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography</h4>
                  <p className="text-gray-600">Perfect photo opportunities with traditional costumes available</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">☕</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Traditional Refreshments</h4>
                  <p className="text-gray-600">Complimentary Kashmiri kehwa and local snacks during the ride</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎵</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Local Music</h4>
                  <p className="text-gray-600">Optional traditional Kashmiri folk music to enhance the experience</p>
                </div>
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Experience Inclusions
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Private Shikara for 2-3 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Flower decorations and cushions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Traditional Kashmiri snacks
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Kehwa (saffron tea) service
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Photography assistance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Floating garden tour
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Life jackets for safety
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  Not Included
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Transportation to Dal Lake
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Additional food and beverages
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Personal expenses
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Professional photography
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Accommodation
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Tips and gratuities
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking Information */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Booking Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Available Time Slots</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Early Morning: 6:00 AM - 9:00 AM (Sunrise Special)</li>
                    <li>• Morning: 9:00 AM - 12:00 PM</li>
                    <li>• Afternoon: 2:00 PM - 5:00 PM</li>
                    <li>• Evening: 5:00 PM - 8:00 PM (Sunset Special)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Important Notes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Advance booking recommended</li>
                    <li>• Weather dependent activity</li>
                    <li>• Suitable for all ages</li>
                    <li>• Cancellation 24 hours prior allowed</li>
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
