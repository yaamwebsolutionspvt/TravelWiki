import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
import ItineraryCard from "../../components/ItineraryCard";

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
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Romantic Arrival"
                  activities={[
                    "VIP airport pickup with flower garlands",
                    "Transfer to luxury houseboat with welcome drinks",
                    "Room decorated with rose petals and candles",
                    "Evening private Shikara ride at sunset",
                    "Romantic dinner on houseboat terrace"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Romantic arrival in Srinagar"
                  imageTitle="Srinagar Arrival"
                  imageSubtitle="Luxury houseboat check-in"
                  icon="💞"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Love in Srinagar"
                  activities={[
                    "Private sunrise breakfast on Dal Lake",
                    "Exclusive visit to Mughal Gardens with picnic",
                    "Couple photography session in gardens",
                    "Shopping for romantic souvenirs",
                    "Candlelight dinner with live classical music"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Srinagar romantic day"
                  imageTitle="Srinagar Romance"
                  imageSubtitle="Gardens and Dal Lake"
                  icon="🌹"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3: Gulmarg Romance"
                  activities={[
                    "Transfer to Gulmarg luxury resort",
                    "Private Gondola ride for two",
                    "Snow activities and romantic photoshoot",
                    "Couple spa treatment and relaxation",
                    "Private dinner with mountain views"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Gulmarg romance"
                  imageTitle="Gulmarg"
                  imageSubtitle="Gondola and spa"
                  icon="🎿"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 4: Pahalgam Paradise"
                  activities={[
                    "Scenic drive to Pahalgam with stops",
                    "Private cottage check-in",
                    "Romantic walk in Betaab Valley",
                    "Private picnic by the river",
                    "Bonfire dinner under the stars"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Pahalgam paradise"
                  imageTitle="Pahalgam"
                  imageSubtitle="Valleys and riversides"
                  icon="🌄"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 5: Adventure & Romance"
                  activities={[
                    "Optional helicopter ride over valley",
                    "Visit to Aru Valley with pony rides",
                    "Professional couple photography",
                    "Romantic sunset viewing",
                    "Special anniversary/celebration dinner"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Adventure and romance"
                  imageTitle="Aru Valley"
                  imageSubtitle="Adventure day"
                  icon="🚁"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 6: Farewell Romance"
                  activities={[
                    "Late romantic breakfast",
                    "Final couple photoshoot",
                    "Shopping for romantic keepsakes",
                    "VIP airport transfer",
                    "Departure with lifetime memories"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Farewell day"
                  imageTitle="Farewell"
                  imageSubtitle="Memories to cherish"
                  icon="✈️"
                  imageOnRight={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}