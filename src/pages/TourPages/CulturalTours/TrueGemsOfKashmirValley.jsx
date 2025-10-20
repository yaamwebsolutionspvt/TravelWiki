import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";

const trueGemsImage =
  "https://res.cloudinary.com/dw1sh368y/image/upload/v1759485995/Kashmir_17_Srinagar_w6an3v.webp";

export default function TrueGemsOfKashmirValleyTour() {
  const seoData = useSEO({
    title:
      "True Gems of Kashmir Valley | 6 Nights 7 Days Cultural & Scenic Experience",
    description:
      "Discover the true essence of Kashmir with our 6N/7D cultural and scenic journey. Visit Mughal Gardens, Gulmarg, Pahalgam, and experience authentic Kashmiri traditions. Starting at ₹22,499.",
    keywords:
      "Kashmir Valley tour, Kashmir cultural tour, Kashmir scenic package, Gulmarg Pahalgam Srinagar tour, heritage Kashmir trip",
    canonical: "https://www.travelwiki.org.in/packages/true-gems-of-kashmir-valley/",
  });

  const packageData = {
    name: "True Gems of Kashmir Valley Tour",
    description:
      "Explore the cultural, spiritual, and scenic gems of Kashmir Valley with this 6-night, 7-day immersive experience covering Srinagar, Gulmarg, Pahalgam, and Sonmarg.",
    price: "22499",
    originalPrice: "26999",
    duration: "7 days",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
    highlights: [
      "Shikara ride on Dal Lake",
      "Visits to Mughal Gardens & temples",
      "Gulmarg gondola experience",
      "Lidder River walk in Pahalgam",
      "Local craft & culinary workshops",
      "Evening cultural performances",
    ],
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />

      <div className="min-h-screen mt-4">
        {/* 🏔️ Hero Section */}
        <div
          className="relative text-white min-h-[75vh] overflow-hidden"
          style={{
            backgroundImage: `url(${trueGemsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
              >
                True Gems of Kashmir Valley
              </h1>
              <p
                className="text-xl mb-8"
                style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
              >
                Explore the scenic, spiritual, and cultural essence of Kashmir
                — from Mughal Gardens to mountain valleys and traditional
                Kashmiri heritage.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹22,499</span>
                  <span className="text-lg ml-2 text-gray-600">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-500">₹26,999</span>{" "}
                    <span className="text-green-300">17% OFF</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20True%20Gems%20of%20Kashmir%20Valley%20Tour%20from%20Travel%20Wiki."
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

        {/* 📜 Package Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quick Details */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                ["🗓️", "Duration", "6 Nights / 7 Days"],
                ["🏔️", "Destinations", "Srinagar, Gulmarg, Pahalgam, Sonmarg"],
                ["🎯", "Activities", "Cultural + Scenic"],
                ["🏠", "Stays", "6 Accommodations"],
              ].map(([icon, title, text], i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  <div className="text-purple-600 text-3xl mb-2">{icon}</div>
                  <h3 className="font-semibold text-gray-800">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Experience Kashmir’s Cultural and Natural Wonders
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This 7-day journey through the Kashmir Valley reveals the
                region’s most enchanting destinations — Srinagar, Gulmarg,
                Pahalgam, and Sonmarg — each offering a unique blend of natural
                beauty and cultural charm.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From serene Shikara rides to vibrant Mughal gardens, traditional
                artisan workshops to Sufi shrines, this tour showcases the true
                essence of Kashmiri life and its timeless traditions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ideal for culture seekers, photographers, and travelers craving
                meaningful exploration, this package combines heritage,
                hospitality, and heart-touching landscapes.
              </p>
            </div>

            {/* Itinerary */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Detailed Itinerary
              </h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Arrival & Srinagar Heritage Walk"
                  activities={[
                    "Arrival at Srinagar and check-in at houseboat/hotel",
                    "Welcome with Kahwa and local sweets",
                    "Shikara ride on Dal Lake",
                    "Evening walk through the old Srinagar markets",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759489189/Journey_to_Gurez_Valley_dxjanc.webp"
                  imageAlt="Srinagar Heritage Walk"
                  imageTitle="Srinagar Arrival"
                  imageSubtitle="Dal Lake & Old City"
                  icon="🛶"
                />

                <ItineraryCard
                  title="Day 2: Mughal Gardens & Local Culture"
                  activities={[
                    "Visit Shalimar, Nishat & Chashme Shahi Gardens",
                    "Explore Pari Mahal and local shrine",
                    "Paper mache & shawl weaving workshops",
                    "Evening cultural performance in Srinagar",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759219519/Explore_Mughal_Gardens_xtzfnd.webp"
                  imageAlt="Mughal Gardens"
                  imageTitle="Mughal Heritage"
                  imageSubtitle="Srinagar Culture"
                  icon="🏛️"
                  imageOnRight
                />

                <ItineraryCard
                  title="Day 3: Gulmarg – Meadow of Flowers"
                  activities={[
                    "Scenic drive to Gulmarg",
                    "Visit St. Mary’s Church & Golf Course",
                    "Gondola ride up to Kongdori",
                    "Evening leisure walk in Gulmarg meadows",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759489191/Offbeat_Gurez_Valley_jclimq.webp"
                  imageAlt="Gulmarg Gondola"
                  imageTitle="Gulmarg Adventure"
                  imageSubtitle="Nature & Fun"
                  icon="🚠"
                />

                <ItineraryCard
                  title="Day 4: Pahalgam Valley Exploration"
                  activities={[
                    "Drive to Pahalgam along Lidder River",
                    "Stop at saffron fields & Avantipur ruins",
                    "Walk through Aru & Betaab Valleys",
                    "Local market exploration & dinner",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759489188/traditional_Gurez_village_gfcslb.webp"
                  imageAlt="Pahalgam Valley"
                  imageTitle="Pahalgam Discovery"
                  imageSubtitle="Rivers & Villages"
                  icon="🏞️"
                  imageOnRight
                />

                <ItineraryCard
                  title="Day 5: Sonmarg Day Excursion"
                  activities={[
                    "Drive to Sonmarg (Meadow of Gold)",
                    "Visit Thajiwas Glacier viewpoint",
                    "Short pony ride or leisure photography",
                    "Return to Srinagar for overnight stay",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485995/Kashmir_1_Sonamarg_rl5pqu.webp"
                  imageAlt="Sonmarg Day Trip"
                  imageTitle="Sonmarg Excursion"
                  imageSubtitle="Mountain Beauty"
                  icon="🏔️"
                />

                <ItineraryCard
                  title="Day 6: Local Crafts & Culinary Day"
                  activities={[
                    "Morning visit to artisan colony in Srinagar",
                    "Cooking session with local Kashmiri family",
                    "Explore cultural museum and carpet factory",
                    "Evening free for leisure",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485999/Kashmir_21_srinagar_and_sightseen_od99ya.webp"
                  imageAlt="Kashmiri Culture"
                  imageTitle="Local Crafts"
                  imageSubtitle="Culinary & Handicrafts"
                  icon="🎨"
                  imageOnRight
                />

                <ItineraryCard
                  title="Day 7: Farewell from Paradise"
                  activities={[
                    "Breakfast with scenic view",
                    "Final souvenir shopping",
                    "Departure transfer with beautiful memories",
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812842/Perfect_Holiday_Conclusion_vqxo7q.webp"
                  imageAlt="Farewell Kashmir"
                  imageTitle="Departure"
                  imageSubtitle="Memories Forever"
                  icon="✈️"
                />
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Cultural & Scenic Highlights
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  ["🏞️", "Scenic Valleys", "Gulmarg, Pahalgam & Sonmarg beauty"],
                  [
                    "🕌",
                    "Heritage Sites",
                    "Explore Mughal Gardens & shrines of Srinagar",
                  ],
                  ["🎭", "Folk Culture", "Local performances & artisan visits"],
                  ["🍛", "Cuisine", "Authentic Wazwan meals & cooking demo"],
                  [
                    "🎨",
                    "Craft Workshops",
                    "Hands-on learning from master craftsmen",
                  ],
                  ["📸", "Photography", "Perfect blend of culture & nature"],
                ].map(([icon, title, text], i) => (
                  <div key={i}>
                    <div className="text-4xl mb-4">{icon}</div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {title}
                    </h4>
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
