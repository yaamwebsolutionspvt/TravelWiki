import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const ex2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514616/travelwiki/assets/Excursion/ex2.png";

export default function FunFilledVacationKashmirPackage() {
  const seoData = useSEO({
    title: "Fun-Filled Vacation Kashmir Package | 5 Nights 6 Days Srinagar Getaway",
    description: "Enjoy a fun-filled Kashmir vacation with 5 nights in Srinagar. Experience Dal Lake, Mughal Gardens, local culture, and exciting activities. Perfect family getaway at ₹17,999.",
    keywords: "fun-filled Kashmir vacation, 5 nights Srinagar package, Kashmir family holiday, Dal Lake excursion, Srinagar getaway package",
    canonical: "https://www.travelwiki.org.in/packages/fun-filled-vacation-kashmir-package/"
  });

  const packageData = {
    name: "Fun-Filled Vacation Kashmir Package",
    description: "A delightful and entertaining Kashmir vacation focused on Srinagar, packed with fun activities, cultural experiences, and relaxing moments for the perfect family getaway.",
    price: "17999",
    originalPrice: "21599",
    duration: "6 days",
    destinations: ["Srinagar"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Complete Tour of Pahalgam Valley",
      "Fun-filled family activities",
      "Cultural entertainment programs",
      "Local sightseeing and shopping",
      "Relaxing houseboat experience"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white h-[75vh] overflow-hidden bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600">
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fun-Filled Vacation Kashmir Package
              </h1>
              <p className="text-xl mb-8">
                Experience the ultimate fun-filled family vacation in Kashmir with exciting activities, cultural entertainment, and memorable experiences
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹17,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹21,599</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Fun-Filled%20Vacation%20Kashmir%20Package%20from%20Travel%20Wiki."
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
                <div className="text-green-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">5 Nights / 6 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🎉</div>
                <h3 className="font-semibold text-gray-800">Focus</h3>
                <p className="text-gray-600">Fun & Entertainment</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">12 Fun-Filled</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold text-gray-800">Perfect For</h3>
                <p className="text-gray-600">Families</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ultimate Fun-Filled Kashmir Vacation</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get ready for the most entertaining and fun-filled Kashmir vacation with our specially designed 5-night, 
                6-day package! Based entirely in beautiful Srinagar, this exciting getaway is packed with engaging 
                activities, cultural entertainment, and memorable experiences perfect for families and fun-seekers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From thrilling Shikara rides and exciting day excursions to cultural shows and local entertainment, 
                every day brings new adventures and fun experiences. This package ensures non-stop entertainment while 
                allowing you to discover the beauty and culture of Kashmir in the most enjoyable way possible.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for families with children, groups of friends, and anyone seeking a vacation filled with joy, 
                laughter, and unforgettable memories. Experience Kashmir like never before with our fun-focused approach 
                to tourism that keeps excitement levels high throughout your stay.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Fun-Filled Vacation Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎉 Day 1: Fun Welcome to Kashmir</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Exciting arrival at Srinagar with fun welcome ceremony</li>
                    <li>• Check-in to family-friendly hotel with entertainment facilities</li>
                    <li>• Welcome refreshments with local Kashmiri treats</li>
                    <li>• Fun orientation session about Kashmir's attractions</li>
                    <li>• Evening leisure with hotel entertainment activities</li>
                    <li>• Traditional Kashmiri dinner with cultural program</li>
                    <li>• Overnight stay in comfortable Srinagar accommodation</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Dal Lake Fun & Entertainment</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Exciting 01 Hour Shikara ride with fun activities on Dal Lake</li>
                    <li>• Visit floating gardens and interact with local boat communities</li>
                    <li>• Fun photography sessions with beautiful lake backdrops</li>
                    <li>• Visit vibrant floating market for unique shopping experience</li>
                    <li>• Lunch at lakeside restaurant with panoramic views</li>
                    <li>• Afternoon fun activities like pedal boating</li>
                    <li>• Evening sunset viewing from Dal Lake with snacks</li>
                    <li>• Overnight stay with entertainment programs at hotel</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌸 Day 3: Mughal Gardens Fun Exploration</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Fun-filled tour of magnificent Mughal Gardens</li>
                    <li>• Interactive garden games and activities for families</li>
                    <li>• Visit Shalimar Bagh, Nishat Bagh, and Chashme Shahi</li>
                    <li>• Fun photo contests and garden exploration challenges</li>
                    <li>• Picnic lunch in beautiful garden settings</li>
                    <li>• Visit Shankaracharya Temple with panoramic fun views</li>
                    <li>• Evening shopping at Lal Chowk with local entertainment</li>
                    <li>• Traditional dinner with live folk performances</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚗 Day 4: Pahalgam Valley Fun Excursion</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Exciting day trip to beautiful Pahalgam Valley</li>
                    <li>• Fun scenic drive with multiple photo stops</li>
                    <li>• Complete tour of Pahalgam with engaging activities</li>
                    <li>• Visit Betab Valley with fun nature games</li>
                    <li>• Exciting pony rides and adventure activities</li>
                    <li>• Fun picnic lunch by the Lidder River</li>
                    <li>• Engaging nature walks and wildlife spotting</li>
                    <li>• Return to Srinagar with evening entertainment</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎨 Day 5: Cultural Fun & Local Experiences</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Fun-filled cultural workshops and handicraft demonstrations</li>
                    <li>• Interactive sessions with local artisans</li>
                    <li>• Fun cooking classes for traditional Kashmiri cuisine</li>
                    <li>• Exciting visits to spice markets and local bazaars</li>
                    <li>• Fun cultural games and traditional music sessions</li>
                    <li>• Houseboat experience with entertainment programs</li>
                    <li>• Evening fun activities on houseboat deck</li>
                    <li>• Overnight stay in traditional houseboat</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 6: Final Fun & Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final breakfast with fun morning activities</li>
                    <li>• Last-minute shopping with fun bargaining games</li>
                    <li>• Fun souvenir collection and memory making</li>
                    <li>• Group photos and fun farewell activities</li>
                    <li>• Transfer to airport with entertainment during journey</li>
                    <li>• Departure with loads of fun memories from Kashmir</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fun Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Fun-Filled Package Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Entertainment Focus</h4>
                  <p className="text-gray-600">Every day packed with fun activities and entertainment</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Family Perfect</h4>
                  <p className="text-gray-600">Designed specially for families with children</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Shows</h4>
                  <p className="text-gray-600">Live cultural performances and interactive programs</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Entertainment Hotels</h4>
                  <p className="text-gray-600">Hotels with family entertainment facilities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Interactive Activities</h4>
                  <p className="text-gray-600">Engaging and interactive experiences throughout</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Memory Making</h4>
                  <p className="text-gray-600">Professional photo sessions and memory documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}