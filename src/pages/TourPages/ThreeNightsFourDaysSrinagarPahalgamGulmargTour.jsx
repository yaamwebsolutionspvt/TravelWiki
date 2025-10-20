import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
import ItineraryCard from "../../components/ItineraryCard";
const baloonRideKashmir = "https://res.cloudinary.com/dw1sh368y/image/upload/v1759485997/Kashmir_3_Dallake_qptcbd.webp";

export default function ThreeNightsFourDaysSrinagarPahalgamGulmargTour() {
  const seoData = useSEO({
    title: "3 Nights 4 Days Kashmir Package | Srinagar Pahalgam Gulmarg Tour",
    description: "Experience the best of Kashmir with our 3 nights 4 days tour package covering Srinagar, Pahalgam, and Gulmarg. Includes Shikara rides, Sonamarg excursion, Gulmarg Gondola, and more. Starting at ₹10,999.",
    keywords: "Kashmir tour package, 3 nights 4 days Kashmir, Srinagar Pahalgam Gulmarg tour, Kashmir itinerary, Sonamarg excursion, Gulmarg Gondola, Kashmir tourism",
    canonical: "https://www.travelwiki.org.in/packages/3-nights-4-days-srinagar-pahalgam-gulmarg-tour/"
  });

  const packageData = {
    name: "3 Nights 4 Days Kashmir Package",
    description: "A perfect short Kashmir tour covering the most beautiful destinations including Srinagar, Sonamarg, and Gulmarg with comprehensive sightseeing and activities.",
    price: "10999",
    originalPrice: "13999",
    duration: "4 days",
    destinations: ["Srinagar", "Sonamarg", "Gulmarg"],
    highlights: [
      "2-hour Shikara ride in Dal Lake",
      "Full day excursion to Sonamarg",
      "Gulmarg Gondola ride",
      "Skiing in Gulmarg",
      "Visit to Boulevard Road",
      "White River Rafting at Shutkari Bridge"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4" >
        {/* Hero Section */}
        <div
          className="relative text-white min-h-[75vh] overflow-hidden"
          style={{
            backgroundImage: `url(${baloonRideKashmir})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Glimpses Of Kashmir Valley
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Experience the magical beauty of Kashmir with our carefully crafted tour covering Srinagar, Sonamarg, and Gulmarg
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹11,549</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹13,899</span> <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Three%20Nights%20Four%20Days%20Srinagar%20Pahalgam%20Gulmarg%20Tour%20from%20Travel%20Wiki."
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

        {/* Package Overview */}
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
                <div className="text-blue-600 text-3xl mb-2">📍</div>
                <h3 className="font-semibold text-gray-800">Destinations</h3>
                <p className="text-gray-600">Srinagar, Sonamarg, Gulmarg</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Accommodation</h3>
                <p className="text-gray-600">Hotels & Houseboat</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transport</h3>
                <p className="text-gray-600">Private Cab</p>
              </div>
            </div>

            {/* Overview */}
            <div className=" -white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Package Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you are looking for a short but beautiful tour package then this is what you should consider. 
                The Glimpse of Kashmir tour package covers cities like Srinagar and Gulmarg. You will also be able 
                to visit Sonamarg on one of the days.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Srinagar is the capital city of Kashmir. It boasts twinkling lakes, magnificent Mughal architecture 
                and beautiful gardens. It is also famous for its cashews, saffron and Kashmiri Handicrafts. 
                Don't forget the shikara rides and the beautiful roads lined up with Chinnar trees.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Gulmarg is known for its beauty that will make you fall in love with the valley. The Western 
                Himalayas surround this town. To add to its scenic view are the colourful meadows, deep valleys 
                and pine-covered slopes.
              </p>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Detailed Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Arrival in Srinagar (Height 1585m)"
                  activities={[
                    "Walk around the scenic Boulevard Road with Dal Lake views",
                    "2-hour Shikara ride in Dal Lake",
                    "Photography of mountain ranges and lotus flowers",
                    "Overnight stay at houseboat or hotel"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485995/Kashmir_17_Srinagar_w6an3v.webp"
                  imageAlt="Srinagar Arrival"
                  imageTitle="Srinagar Arrival"
                  imageSubtitle="Capital Welcome"
                  icon="🏛️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Excursion to Sonamarg (Height 2730m)"
                  activities={[
                    "Scenic drive to Sonamarg with Himalayan peak views",
                    "Visit Vishansar Lake (freezes in winter, green grass in summer)",
                    "Explore Zoji La Pass with snow-covered roads",
                    "White River Rafting at Shutkari Bridge (optional)",
                    "Return to Srinagar for dinner and overnight stay"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485995/Kashmir_1_Sonamarg_rl5pqu.webp"
                  imageAlt="Sonamarg Excursion"
                  imageTitle="Sonamarg"
                  imageSubtitle="Meadow of Gold"
                  icon="🏔️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3: Srinagar to Gulmarg (Height 2650m)"
                  activities={[
                    "Transfer to Gulmarg and hotel check-in",
                    "Gulmarg Gondola ride (world's second-longest cable car)",
                    "Visit Kongdoori Station and Apharwat Peak",
                    "Skiing adventure (suitable for amateur and professional skiers)",
                    "Overnight stay in Gulmarg"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485996/Kashmir_2_Gulmarg_jaletq.webp"
                  imageAlt="Gulmarg Gondola Experience"
                  imageTitle="Gulmarg Gondola"
                  imageSubtitle="Meadow of Flowers"
                  icon="🚡"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 4: Gulmarg to Srinagar"
                  activities={[
                    "Check-out from Gulmarg hotel after breakfast",
                    "Drive back to Srinagar",
                    "Drop at Srinagar airport or railway station",
                    "Departure for onward journey"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485996/Kashmir_18_Gulmarg_to_srinagar_iu3pij.webp"
                  imageAlt="Departure"
                  imageTitle="Departure"
                  imageSubtitle="Journey End"
                  icon="✈️"
                  imageOnRight={true}
                    />
              </div>
            </div>

            {/* Package Inclusions */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Package Inclusions
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    3 nights accommodation (hotel/houseboat)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    All transfers by private cab
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Daily breakfast and dinner
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    2-hour Shikara ride in Dal Lake
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Full day Sonamarg excursion
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Gulmarg Gondola ride
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    All sightseeing as per itinerary
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  Package Exclusions
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Airfare to and from Srinagar
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Personal expenses and shopping
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Adventure activities not mentioned
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Travel insurance
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Tips and gratuities
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Lunch during sightseeing
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    Any services not mentioned in inclusions
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Package Highlights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚣</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Shikara Experience</h4>
                  <p className="text-gray-600">Enjoy a romantic 2-hour Shikara ride in the famous Dal Lake</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gulmarg Gondola</h4>
                  <p className="text-gray-600">Experience the world's second-longest cable car ride</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⛷️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Skiing Adventure</h4>
                  <p className="text-gray-600">Try skiing in the beautiful slopes of Gulmarg</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sonamarg Excursion</h4>
                  <p className="text-gray-600">Visit the "Meadow of Gold" with stunning mountain views</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌊</div>
                  <h4 className="font-semibold text-gray-800 mb-2">White River Rafting</h4>
                  <p className="text-gray-600">Optional rafting experience at Shutkari Bridge</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Houseboat Stay</h4>
                  <p className="text-gray-600">Unique accommodation experience on Dal Lake</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}