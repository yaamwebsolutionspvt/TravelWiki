import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const ex3 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514618/travelwiki/assets/Excursion/ex3.png";

export default function ThrillingKashmirHolidayPackage() {
  const seoData = useSEO({
    title: "Thrilling Kashmir Holiday Package | 7 Nights 8 Days Adventure Excursion",
    description: "Experience a thrilling Kashmir holiday with 7 nights covering Srinagar, Pahalgam, and Gulmarg. Adventure activities, scenic beauty, and exciting experiences at ₹23,999.",
    keywords: "thrilling Kashmir holiday, 7 nights adventure package, Kashmir thrill excursion, Pahalgam Gulmarg adventure, exciting Kashmir tour",
    canonical: "https://www.travelwiki.org.in/kashmirtourpackages/thrilling-kashmir-holiday-package/"
  });

  const packageData = {
    name: "Thrilling Kashmir Holiday Package",
    description: "An adrenaline-pumping Kashmir adventure combining scenic beauty with thrilling activities across Srinagar, Pahalgam, and Gulmarg for an unforgettable holiday experience.",
    price: "23999",
    originalPrice: "28799",
    duration: "8 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Complete Tour of Pahalgam Valley",
      "Thrilling adventure activities",
      "Gulmarg Gondola and skiing",
      "Mountain adventure experiences",
      "Scenic valley exploration"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen page-container">
        {/* Hero Section */}
        <div className="relative text-white min-h-[75vh] overflow-hidden bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600">
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Thrilling Kashmir Holiday Package
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Experience the ultimate thrilling adventure in Kashmir with exciting activities, breathtaking scenery, and adrenaline-pumping experiences
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹23,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹28,799</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Thrilling%20Kashmir%20Holiday%20Package%20from%20Travel%20Wiki."
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
                <div className="text-red-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">7 Nights / 8 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-800">Adventure Level</h3>
                <p className="text-gray-600">High Thrill</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">12 Thrilling</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Destinations</h3>
                <p className="text-gray-600">3 Adventure Spots</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ultimate Thrilling Kashmir Adventure</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get your adrenaline pumping with our most thrilling Kashmir holiday package! This action-packed 7-night, 
                8-day adventure takes you through three spectacular destinations - Srinagar, Pahalgam, and Gulmarg - each 
                offering unique thrilling experiences and breathtaking scenic beauty.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From heart-racing Gondola rides and skiing in Gulmarg to exciting river activities in Pahalgam and 
                adventurous lake sports in Srinagar, every day brings new thrills and excitement. This package is 
                designed for adventure seekers who want to experience Kashmir's natural beauty through exciting activities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for young adventurers, thrill-seekers, and anyone looking to add excitement to their Kashmir 
                vacation. Experience the perfect combination of natural beauty and adrenaline-pumping activities that 
                will create unforgettable memories and stories to share for years to come.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Thrilling Adventure Itinerary</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Day 1: Thrilling Arrival in Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• High-energy arrival at Srinagar with adventure briefing</li>
                    <li>• Check-in to adventure-friendly accommodation</li>
                    <li>• Equipment check and safety orientation session</li>
                    <li>• Evening adventure preparation and group bonding</li>
                    <li>• Welcome dinner with excitement for upcoming thrills</li>
                    <li>• Overnight stay with anticipation for adventure</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🚣‍♀️ Day 2: Srinagar Water Adventures</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Thrilling 01 Hour Shikara ride with water sports activities</li>
                    <li>• Exciting kayaking and paddle boarding on Dal Lake</li>
                    <li>• Adventure photography sessions with scenic backdrops</li>
                    <li>• Thrilling water skiing experiences (seasonal)</li>
                    <li>• Lunch at floating restaurant with adventure stories</li>
                    <li>• Afternoon jet skiing and speed boat rides</li>
                    <li>• Evening campfire with adventure tales sharing</li>
                    <li>• Overnight stay with adrenaline still pumping</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 3-4: Srinagar Mountain Adventures</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Thrilling trekking expeditions in nearby mountains</li>
                    <li>• Rock climbing and rappelling adventure activities</li>
                    <li>• Mountain biking through challenging terrain</li>
                    <li>• Paragliding experiences with valley views (seasonal)</li>
                    <li>• Adventure picnics in scenic mountain locations</li>
                    <li>• Night camping under stars with bonfire</li>
                    <li>• Survival skills workshop and adventure games</li>
                    <li>• Return to Srinagar with thrilling memories</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🌊 Day 5: Pahalgam River Adventures</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Exciting drive to Pahalgam with scenic photo stops</li>
                    <li>• Check-in to adventure lodge near Lidder River</li>
                    <li>• Thrilling white water rafting on Lidder River</li>
                    <li>• Complete tour of Pahalgam Valley with adventure activities</li>
                    <li>• Exciting pony trekking to remote valley locations</li>
                    <li>• Adventure lunch by the riverside</li>
                    <li>• Evening fishing and river sports</li>
                    <li>• Overnight stay with sound of rushing river</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎿 Day 6: Gulmarg Snow Adventures</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Thrilling journey to Gulmarg - "Meadow of Flowers"</li>
                    <li>• Heart-racing Gulmarg Gondola ride to Apharwat Peak</li>
                    <li>• Exciting skiing and snowboarding activities</li>
                    <li>• Snow adventure sports and sledging</li>
                    <li>• Thrilling snow trekking expeditions</li>
                    <li>• Adventure lunch at high altitude</li>
                    <li>• Evening snow games and activities</li>
                    <li>• Overnight stay in mountain adventure lodge</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Day 7: Final Gulmarg Thrills & Return</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final morning of high-altitude adventure activities</li>
                    <li>• Thrilling mountain climbing and adventure challenges</li>
                    <li>• Adventure group competitions and team activities</li>
                    <li>• Scenic return journey to Srinagar with photo stops</li>
                    <li>• Check-in to hotel for final night celebrations</li>
                    <li>• Adventure achievement ceremony and awards</li>
                    <li>• Farewell dinner with adventure video screening</li>
                    <li>• Overnight stay with incredible adventure memories</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✈️ Day 8: Thrilling Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Final breakfast with adventure story sharing</li>
                    <li>• Last-minute adventure souvenir shopping</li>
                    <li>• Adventure photo compilation and memory book</li>
                    <li>• Transfer to airport with adventure highlights review</li>
                    <li>• Departure with lifelong thrilling memories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Thrilling Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Thrilling Package Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">High Adrenaline</h4>
                  <p className="text-gray-600">Non-stop thrilling activities and adventure sports</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎿</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Adventure Sports</h4>
                  <p className="text-gray-600">Skiing, rafting, paragliding, and more exciting activities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mountain Adventures</h4>
                  <p className="text-gray-600">High-altitude thrills and mountain expedition experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌊</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Water Sports</h4>
                  <p className="text-gray-600">Exciting water activities and aquatic adventures</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏕️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Adventure Camping</h4>
                  <p className="text-gray-600">Thrilling outdoor camping with survival experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎖️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Achievement Awards</h4>
                  <p className="text-gray-600">Adventure completion certificates and achievement recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
