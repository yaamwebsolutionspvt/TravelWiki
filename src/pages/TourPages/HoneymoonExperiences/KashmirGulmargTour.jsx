import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";

const gulmargImage =
  "https://res.cloudinary.com/dw1sh368y/image/upload/v1759909431/Srinagar_to_Gulmarg_hpxniv.webp";

export default function KashmirGulmargTour() {
  const seoData = useSEO({
    title: "Kashmir Gulmarg Tour Package | 3 Nights 4 Days Snow Adventure",
    description:
      "Experience the beauty of Gulmarg with our 3 nights 4 days Kashmir tour. Gondola rides, skiing, snow adventures, and breathtaking Himalayan views. Starting at ₹10,999.",
    keywords:
      "Kashmir Gulmarg tour, Gulmarg skiing, Gondola ride package, snow adventure Kashmir, Gulmarg holiday package",
    canonical: "https://res.cloudinary.com/dw1sh368y/image/upload/v1759909443/Full_Day_Gulmarg_Snow_Adventure_s0bqdn.webp",
  });

  const packageData = {
    name: "Kashmir Gulmarg Tour Package",
    description:
      "A scenic 3 nights 4 days adventure tour covering Srinagar and Gulmarg — enjoy snow activities, Gondola rides, and mountain serenity.",
    price: "10999",
    originalPrice: "13999",
    duration: "4 days",
    destinations: ["Srinagar", "Gulmarg"],
    highlights: [
      "Gulmarg Gondola Phase 1 & 2",
      "Skiing and snow activities",
      "Mountain photography",
      "Dal Lake Shikara ride",
      "Comfortable accommodations",
      "Professional guide services",
    ],
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />

      <div className="min-h-screen page-container" >
        {/* Hero Section */}
        <div
          className="relative text-white min-h-[75vh] overflow-hidden"
          style={{
            backgroundImage: `url(${gulmargImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative container mx-auto px-4 py-12 h-full flex items-center justify-center">
            <div className="max-w-4xl text-center">
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}
              >
                Kashmir Gulmarg Tour Package
              </h1>

              <p
                className="text-xl mb-8"
                style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
              >
                A perfect 3 Nights 4 Days snow adventure — experience skiing,
                Gondola rides, and Himalayan landscapes.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹10,999</span>
                  <span className="text-lg ml-2 text-gray-700">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹13,999</span>{" "}
                    <span className="text-green-300">21% OFF</span>
                  </div>
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

            {/* Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Gulmarg — The Meadow of Snow and Serenity
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Gulmarg, “The Meadow of Flowers,” becomes a magical snow-covered
                destination in winter, making it one of the most famous
                adventure hubs in India. Enjoy skiing, snowboarding, and the
                thrilling Gondola ride that takes you up to 13,500 feet for
                panoramic Himalayan views.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ideal for families, honeymooners, and adventure seekers alike —
                this tour combines relaxation, local sightseeing, and thrilling
                winter experiences.
              </p>
            </div>

            {/* Itinerary Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Detailed Itinerary
              </h2>

              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Arrival in Srinagar"
                  activities={[
                    "Airport pickup and transfer to hotel or houseboat",
                    "Local sightseeing covering Dal Lake and Mughal Gardens",
                    "01 Hour Shikara ride on Dal Lake",
                    "Evening leisure at Boulevard Road",
                    "Overnight stay in Srinagar",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485995/Kashmir_17_Srinagar_w6an3v.webp"
                  imageAlt="Srinagar Dal Lake"
                  imageTitle="Srinagar Arrival"
                  imageSubtitle="Welcome to Paradise"
                  icon="🏞️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Srinagar to Gulmarg"
                  activities={[
                    "Early morning drive to Gulmarg (approx. 52 km / 2 hrs)",
                    "Check-in at hotel and relax amidst pine forests",
                    "Enjoy Gondola Phase 1 ride to Kongdoori Base",
                    "Try snow activities and enjoy mountain views",
                    "Evening at leisure and overnight stay in Gulmarg",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759909443/Full_Day_Gulmarg_Snow_Adventure_s0bqdn.webp"
                  imageAlt="Gulmarg Gondola Ride"
                  imageTitle="Gulmarg Adventure"
                  imageSubtitle="Scenic Journey"
                  icon="🚡"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3: Full Day Gulmarg Snow Adventure"
                  activities={[
                    "Breakfast followed by full-day skiing or snowboarding",
                    "Gondola Phase 2 ride to Apharwat Peak (optional)",
                    "Explore snow trails and panoramic Himalayan viewpoints",
                    "Photography and snow leisure activities",
                    "Return to hotel for dinner and overnight stay",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759909431/Srinagar_to_Gulmarg_hpxniv.webp"
                  imageAlt="Gulmarg Skiing"
                  imageTitle="Snow Adventure"
                  imageSubtitle="Apharwat Peak Experience"
                  icon="⛷️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 4: Gulmarg to Srinagar – Departure"
                  activities={[
                    "Morning breakfast and check-out",
                    "Drive back to Srinagar (2 hours approx.)",
                    "Stop for shopping of Kashmiri handicrafts",
                    "Transfer to airport for onward journey",
                    "Tour concludes with unforgettable memories",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759909445/Gulmarg_to_Srinagar_Departure_ysf0sb.webp"
                  imageAlt="Farewell Gulmarg"
                  imageTitle="Departure"
                  imageSubtitle="Goodbye Kashmir"
                  icon="✈️"
                  imageOnRight={true}
                />
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Key Highlights of Gulmarg Tour
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Gondola Ride
                  </h4>
                  <p className="text-gray-600">
                    Enjoy the world’s second-highest cable car experience.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⛷️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Skiing</h4>
                  <p className="text-gray-600">
                    Try beginner or advanced slopes with professional trainers.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Himalayan Views
                  </h4>
                  <p className="text-gray-600">
                    Witness majestic snow peaks of Nanga Parbat range.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Photography
                  </h4>
                  <p className="text-gray-600">
                    Capture breathtaking snow landscapes and pine meadows.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛷</div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Snow Activities
                  </h4>
                  <p className="text-gray-600">
                    Enjoy sledging, snowman building, and winter fun.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Local Hospitality
                  </h4>
                  <p className="text-gray-600">
                    Stay in cozy Gulmarg resorts and enjoy Kashmiri warmth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
