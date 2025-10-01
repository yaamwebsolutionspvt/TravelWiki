import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";

export default function LoveInKashmirPackage() {
  const seoData = useSEO({
    title: "Love in Kashmir Package | 5 Nights Romantic Couple Getaway",
    description: "Ultimate romantic Kashmir package for couples. 5 nights of love, romance, and intimacy in paradise. Houseboat stays, candlelight dinners, and couple activities. Starting at ₹15,999.",
    keywords: "Love in Kashmir package, romantic Kashmir tour, couple Kashmir package, romantic getaway Kashmir, Kashmir love package, couple tour Kashmir",
    canonical: "https://www.travelwiki.org.in/packages/love-in-kashmir-package/"
  });

  const packageData = {
    name: "Love in Kashmir Package",
    description: "The most romantic Kashmir package designed exclusively for couples, featuring intimate experiences, luxury accommodations, and romantic activities in paradise.",
    price: "15999",
    duration: "6 days",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam"],
    highlights: [
      "Luxury houseboat romance",
      "Private candlelight dinners",
      "Exclusive couple activities",
      "Professional couple photography",
      "Romantic sunset experiences",
      "Intimate spa treatments"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-pink-700 to-purple-800 text-white py-25">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Love in Kashmir Package
              </h1>
              <p className="text-xl mb-8">
                Experience the ultimate romantic getaway in paradise on earth with luxury, intimacy, and unforgettable moments
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹15,999</span>
                  <span className="text-lg ml-2 text-black">per couple</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Love%20in%20Kashmir%20Package%20from%20Travel%20Wiki."
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
                <div className="text-pink-600 text-3xl mb-2">💕</div>
                <h3 className="font-semibold text-gray-800">Romance</h3>
                <p className="text-gray-600">Ultimate Love Package</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-pink-600 text-3xl mb-2">🏩</div>
                <h3 className="font-semibold text-gray-800">Luxury</h3>
                <p className="text-gray-600">Premium Stays</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-pink-600 text-3xl mb-2">🥂</div>
                <h3 className="font-semibold text-gray-800">Dining</h3>
                <p className="text-gray-600">Private Candlelight</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-pink-600 text-3xl mb-2">📸</div>
                <h3 className="font-semibold text-gray-800">Memories</h3>
                <p className="text-gray-600">Professional Photos</p>
              </div>
            </div>

            {/* Romantic Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ultimate Romantic Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The "Love in Kashmir" package is specially curated for couples seeking the most romantic and intimate 
                experience in paradise on earth. This luxury package goes beyond ordinary tourism to create magical 
                moments that couples will treasure forever. Every detail is designed to celebrate love and create 
                the perfect romantic atmosphere.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From luxury houseboat accommodations with rose petal decorations to private candlelight dinners 
                under the stars, this package ensures that every moment is filled with romance. The tour includes 
                exclusive couple activities, professional photography sessions, and intimate experiences that are 
                impossible to find in regular tour packages.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're celebrating an anniversary, honeymoon, or simply want to rekindle the romance, 
                this package provides the perfect setting with Kashmir's breathtaking beauty as your backdrop. 
                Experience luxury, privacy, and romance in the most beautiful destination on earth.
              </p>
            </div>

            {/* Romantic Experiences */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Exclusive Romantic Experiences</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🛥️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Luxury Houseboat Suite</h4>
                  <p className="text-gray-600">Premium houseboat with jacuzzi, private deck, and romantic decorations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🕯️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Candlelight Dinners</h4>
                  <p className="text-gray-600">Private rooftop dinners with live music and personalized service</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌅</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sunrise Breakfast</h4>
                  <p className="text-gray-600">Private breakfast on Dal Lake watching the sunrise together</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💆‍♀️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Couple Spa</h4>
                  <p className="text-gray-600">Relaxing couple massage and spa treatments</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚁</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Helicopter Romance</h4>
                  <p className="text-gray-600">Private helicopter ride over Kashmir valley</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📷</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Couple Photography</h4>
                  <p className="text-gray-600">Professional photographer for intimate couple portraits</p>
                </div>
              </div>
            </div>

            {/* Luxury Inclusions */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Luxury Package Inclusions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏩 Accommodation & Dining</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">❤️</span>
                      Luxury houseboat suite with romantic decorations
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">❤️</span>
                      Premium hotels in Gulmarg and Pahalgam
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">❤️</span>
                      Private candlelight dinners with live music
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">❤️</span>
                      Romantic room service and champagne
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">❤️</span>
                      Flower decorations and special arrangements
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">💕 Romantic Activities</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">❤️</span>
                      Private Shikara rides with flower decorations
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">❤️</span>
                      Exclusive couple photography sessions
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">❤️</span>
                      Sunset viewing from romantic locations
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">❤️</span>
                      Private gardens visits with picnic setup
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">❤️</span>
                      Couple spa and wellness treatments
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Romantic Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Romantic Itinerary</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 1: Romantic Arrival</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>VIP airport pickup with flower garlands</li>
                    <li>Transfer to luxury houseboat with welcome drinks</li>
                    <li>Room decorated with rose petals and candles</li>
                    <li>Evening private Shikara ride at sunset</li>
                    <li>Romantic dinner on houseboat terrace</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 2: Love in Srinagar</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Private sunrise breakfast on Dal Lake</li>
                    <li>Exclusive visit to Mughal Gardens with picnic</li>
                    <li>Couple photography session in gardens</li>
                    <li>Shopping for romantic souvenirs</li>
                    <li>Candlelight dinner with live classical music</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 3: Gulmarg Romance</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Transfer to Gulmarg luxury resort</li>
                    <li>Private Gondola ride for two</li>
                    <li>Snow activities and romantic photoshoot</li>
                    <li>Couple spa treatment and relaxation</li>
                    <li>Private dinner with mountain views</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 4: Pahalgam Paradise</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Scenic drive to Pahalgam with stops</li>
                    <li>Private cottage check-in</li>
                    <li>Romantic walk in Betaab Valley</li>
                    <li>Private picnic by the river</li>
                    <li>Bonfire dinner under the stars</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 5: Adventure & Romance</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Optional helicopter ride over valley</li>
                    <li>Visit to Aru Valley with pony rides</li>
                    <li>Professional couple photography</li>
                    <li>Romantic sunset viewing</li>
                    <li>Special anniversary/celebration dinner</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day 6: Farewell Romance</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Late romantic breakfast</li>
                    <li>Final couple photoshoot</li>
                    <li>Shopping for romantic keepsakes</li>
                    <li>VIP airport transfer</li>
                    <li>Departure with lifetime memories</li>
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