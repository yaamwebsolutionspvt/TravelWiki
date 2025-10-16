import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";

const travelPackages = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514641/travelwiki/assets/Honeymoon/kashmir-travel-packages.jpg";

export default function KashmirRefreshingTour() {
  const seoData = useSEO({
    title: "Kashmir Refreshing Tour | 3 Nights 4 Days Quick Honeymoon Getaway",
    description: "Refresh your bond with a quick Kashmir honeymoon. 3 nights covering Srinagar houseboat and Pahalgam with romantic arrangements. Perfect short getaway at ₹13,999.",
    keywords: "Kashmir refreshing tour, quick Kashmir honeymoon, 3 nights Kashmir tour, short Kashmir getaway, budget Kashmir honeymoon",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-refreshing-tour/"
  });

  const packageData = {
    name: "Kashmir Refreshing Tour",
    description: "A refreshing and rejuvenating 3-night Kashmir tour perfect for couples seeking a quick romantic getaway with essential Kashmir experiences.",
    price: "13999",
    originalPrice: "16799",
    duration: "4 days",
    destinations: ["Srinagar", "Pahalgam"],
    highlights: [
      "01 Hr Shikara Ride",
      "Cake, Candle Light Dinner & Fresh Fruit Basket",
      "1N Srinagar (1N Houseboat) + 2N Pahalgam",
      "6 refreshing activities",
      "4 comfortable transfers"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white min-h-[75vh] py-25 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Refreshing Tour
              </h1>
              <p className="text-xl mb-8">
                Refresh your mind, body, and soul with a perfect short honeymoon getaway in Kashmir's serene beauty
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹13,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹16,799</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Refreshing%20Tour%20from%20Travel%20Wiki."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Now
                </a>
                <a
                  href="/packages-listing"
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View All Kashmir Honeymoon Packages
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
                <div className="text-cyan-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Nights / 4 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-cyan-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">3 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-cyan-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">6 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-cyan-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">4 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Refreshing Kashmir Escape</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Perfect for couples with limited time but unlimited love, our Refreshing Kashmir Tour offers 
                the essential Kashmir honeymoon experience in just 3 nights. This carefully curated itinerary 
                ensures you don't miss the key romantic experiences while keeping the pace comfortable and refreshing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the tranquil beauty of Srinagar's houseboat culture and the refreshing valleys of 
                Pahalgam, all while enjoying special honeymoon arrangements that make your short getaway truly memorable.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Refreshing Kashmir Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Arrival & Houseboat Check-in"
                  activities={[
                    "Warm arrival at Srinagar Airport",
                    "Direct transfer to traditional houseboat on Dal Lake",
                    "Welcome ceremony with cake and fresh fruit basket",
                    "Romantic 01 Hour Shikara ride on Dal Lake",
                    "Evening leisure on houseboat deck",
                    "Candlelight dinner on houseboat with lake views",
                    "Overnight stay in houseboat"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812844/Srinagar_Highlights_Tour_aqw22q.webp"
                  imageAlt="Dal Lake houseboat"
                  imageTitle="Dal Lake Houseboat"
                  imageSubtitle="Traditional floating accommodation"
                  icon="🏛️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Journey to Pahalgam"
                  activities={[
                    "Morning breakfast on houseboat with lake views",
                    "Scenic drive to Pahalgam (Valley of Shepherds)",
                    "Check-in to comfortable hotel in Pahalgam",
                    "Visit to famous Betab Valley",
                    "Exploration of Aru Valley's natural beauty",
                    "Evening walks along Lidder River",
                    "Overnight stay in Pahalgam"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Complete_Pahalgam_Valley_Experience_z90y7f.webp"
                  imageAlt="Pahalgam valley"
                  imageTitle="Pahalgam Valley"
                  imageSubtitle="Valley of Shepherds"
                  icon="🌲"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3: Pahalgam Adventures"
                  activities={[
                    "Morning breakfast with mountain views",
                    "Horse riding or pony trekking experience",
                    "Visit to Chandanwari (starting point of Amarnath Yatra)",
                    "Picnic lunch in scenic meadows",
                    "Nature photography session",
                    "Return to Srinagar for final night",
                    "Overnight stay in Srinagar hotel"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Complete_Pahalgam_Valley_Experience_z90y7f.webp"
                  imageAlt="Chandanwari"
                  imageTitle="Chandanwari"
                  imageSubtitle="Starting point of Amarnath Yatra"
                  icon="🏔️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 4: Refreshed Departure"
                  activities={[
                    "Refreshing morning breakfast",
                    "Quick visit to Mughal Gardens (time permitting)",
                    "Shopping for Kashmir souvenirs",
                    "Check-out and departure transfer to airport",
                    "Departure feeling refreshed and rejuvenated"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812842/Perfect_Holiday_Conclusion_vqxo7q.webp"
                  imageAlt="Srinagar departure"
                  imageTitle="Srinagar Airport"
                  imageSubtitle="Departure with memories"
                  icon="✈️"
                  imageOnRight={true}
                />
              </div>
            </div>

            {/* Refreshing Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Refreshing Tour</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Perfect Duration</h4>
                  <p className="text-gray-600">Ideal for couples with limited time availability</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Great Value</h4>
                  <p className="text-gray-600">Essential Kashmir experiences at budget-friendly price</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌿</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Refreshing Pace</h4>
                  <p className="text-gray-600">Relaxed itinerary without rushing through destinations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Houseboat Experience</h4>
                  <p className="text-gray-600">Traditional Kashmir houseboat stay included</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎂</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Romantic Touches</h4>
                  <p className="text-gray-600">Cake, candlelight dinner, and fruit basket</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌄</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Essential Coverage</h4>
                  <p className="text-gray-600">Key destinations: Srinagar houseboat and Pahalgam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}