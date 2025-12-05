import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
import BestsellerKashmirTours from "../../../components/Packages/BestsellerKashmirTours";
import HoneymoonSpecial from "../../../components/Packages/HoneymoonSpecial";
import KashmirFamilyPackages from "../../../components/Packages/KashmirFamilyPackages";
import KashmirExcursionsSpecial from "../../../components/Packages/KashmirExcursionsSpecial";
import KashmirAdventureWinter from "../../../components/Packages/KashmirAdventureWinter";
import KashmirCulturalToursAndPackages from "../../../components/Packages/KashmirCulturalToursAndPackages";

const holidayPackages = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514635/travelwiki/assets/Honeymoon/kashmir-holiday-pacakges.jpg";

export default function MagicalKashmirTour() {
  const seoData = useSEO({
    title: "4N Kashmir Magic Tour – Lakes, Gardens & Meadows | 4 Nights 5 Days Honeymoon Package",
    description: "Experience the magic of Kashmir with our 4 nights 5 days romantic tour. Srinagar houseboat, Pahalgam, Gulmarg with candlelight dinners and special arrangements. Starting at ₹15,999.",
    keywords: "4N Kashmir Magic Tour – Lakes, Gardens & Meadows, 4 nights Kashmir honeymoon, Srinagar Pahalgam Gulmarg tour, Kashmir couple package, romantic Kashmir getaway",
    canonical: "https://www.travelwiki.org.in/kashmirtourpackages/magical-kashmir-tour/"
  });

  const packageData = {
    name: "4N Kashmir Magic Tour – Lakes, Gardens & Meadows",
    description: "A magical 4-night Kashmir honeymoon tour covering Srinagar houseboat stay, Pahalgam valleys, and Gulmarg meadows with romantic arrangements.",
    price: "15999",
    originalPrice: "19199",
    duration: "5 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Cake, Candle Light Dinner & Fresh Fruit Basket",
      "2N Srinagar (1N Houseboat)",
      "1N Pahalgam",
      "1N Gulmarg",
      "8 romantic activities"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />

      {/* Hero Section */}
      <div
        className="relative text-white min-h-[75vh] py-30 overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600"
        style={{
          backgroundImage: `url(${holidayPackages})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">4N Kashmir Magic Tour – Lakes, Gardens & Meadows</h1>
            <p className="text-xl mb-8">
              Experience the true magic of Kashmir with our comprehensive 4-night romantic journey through paradise
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <span className="text-3xl font-bold text-black">₹15,999</span>
                <span className="text-lg ml-2 text-gray-200">per person</span>
                <div className="text-sm text-gray-200">
                  <span className="line-through text-gray-400">₹19,199</span>
                  <span className="text-green-300 ml-2">17% OFF</span>
                </div>
              </div>
              <a
                href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Magical%20Kashmir%20Tour%20from%20Travel%20Wiki."
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
              <div className="text-purple-600 text-3xl mb-2">🗓️</div>
              <h3 className="font-semibold text-gray-800">Duration</h3>
              <p className="text-gray-600">4 Nights / 5 Days</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-purple-600 text-3xl mb-2">🏨</div>
              <h3 className="font-semibold text-gray-800">Hotels</h3>
              <p className="text-gray-600">4 Hotels</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-purple-600 text-3xl mb-2">🎯</div>
              <h3 className="font-semibold text-gray-800">Activities</h3>
              <p className="text-gray-600">8 Activities</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-purple-600 text-3xl mb-2">🚗</div>
              <h3 className="font-semibold text-gray-800">Transfers</h3>
              <p className="text-gray-600">5 Transfers</p>
            </div>
          </div>

          {/* Tour Overview */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Magical Kashmir Experience</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Embark on a magical journey through Kashmir's most enchanting destinations. This 4-night tour 
              combines the romantic charm of Srinagar's houseboats, the pristine beauty of Pahalgam's valleys, 
              and the alpine splendor of Gulmarg's meadows.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With special honeymoon arrangements including houseboat stays, candlelight dinners, and romantic 
              Shikara rides, this tour creates magical memories that will last a lifetime.
            </p>
          </div>

          {/* Detailed Itinerary with ItineraryCard */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Magical Kashmir Itinerary</h2>
            <div className="space-y-8">
              <ItineraryCard
                title="Day 1: Arrival in Srinagar"
                activities={[
                  "Arrival at Srinagar Airport and warm welcome",
                  "Check-in to premium hotel in Srinagar",
                  "Welcome cake and fresh fruit basket",
                  "Evening leisure or local market visit",
                  "Special candlelight dinner",
                  "Overnight stay in Srinagar hotel"
                ]}
                imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812843/Day_1_Relaxed_Srinagar_Arrival_qhbtfj.webp"
                imageAlt="Srinagar Arrival"
                imageTitle="Arrival in Srinagar"
                imageSubtitle="Warm Welcome & Leisure"
                icon="🏛️"
              />
              <ItineraryCard
                title="Day 2: Srinagar Houseboat Experience"
                activities={[
                  "Morning breakfast and check-out from hotel",
                  "Romantic 01 Hour Shikara ride on Dal Lake",
                  "Check-in to traditional houseboat",
                  "Visit Mughal Gardens (Nishat & Shalimar)",
                  "Explore Shankaracharya Temple",
                  "Romantic evening on houseboat deck",
                  "Overnight stay in houseboat"
                ]}
                imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812844/Srinagar_Highlights_Tour_aqw22q.webp"
                imageAlt="Houseboat Experience"
                imageTitle="Srinagar Houseboat"
                imageSubtitle="Romantic Shikara & Gardens"
                icon="🚣‍♀️"
              />
              <ItineraryCard
                title="Day 3: Journey to Pahalgam"
                activities={[
                  "Morning breakfast on houseboat",
                  "Scenic drive to Pahalgam (Valley of Shepherds)",
                  "Check-in to hotel in Pahalgam",
                  "Visit Betab Valley and Aru Valley",
                  "Horse riding or pony trekking",
                  "Evening walks along Lidder River",
                  "Overnight stay in Pahalgam"
                ]}
                imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Complete_Pahalgam_Valley_Experience_z90y7f.webp"
                imageAlt="Pahalgam Valley"
                imageTitle="Pahalgam Trip"
                imageSubtitle="Scenic Valleys & Adventures"
                icon="🌲"
              />
              <ItineraryCard
                title="Day 4: Gulmarg Adventure"
                activities={[
                  "Early breakfast and drive to Gulmarg",
                  "Gulmarg Gondola cable car ride",
                  "Explore Gulmarg's famous golf course",
                  "Adventure activities and snow sports (seasonal)",
                  "Photography at scenic viewpoints",
                  "Return to Srinagar for overnight stay"
                ]}
                imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486007/Kashmir_15_igkjmn.webp"
                imageAlt="Gulmarg Adventure"
                imageTitle="Gulmarg Exploration"
                imageSubtitle="Alpine Meadows & Adventure"
                icon="🚡"
              />
              <ItineraryCard
                title="Day 5: Departure"
                activities={[
                  "Morning breakfast at hotel",
                  "Last-minute shopping for souvenirs",
                  "Check-out and departure transfer to airport",
                  "Departure with magical memories of Kashmir"
                ]}
                imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812842/Perfect_Holiday_Conclusion_vqxo7q.webp"
                imageAlt="Departure"
                imageTitle="Departure"
                imageSubtitle="Farewell from Kashmir"
                icon="✈️"
              />
            </div>
          </div>

          {/* Special Features */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Magical Tour Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h4 className="font-semibold text-gray-800 mb-2">Houseboat Stay</h4>
                <p className="text-gray-600">Romantic night on traditional Kashmir houseboat</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎂</div>
                <h4 className="font-semibold text-gray-800 mb-2">Special Arrangements</h4>
                <p className="text-gray-600">Cake, candlelight dinner & fruit basket</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏔️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Complete Coverage</h4>
                <p className="text-gray-600">Srinagar, Pahalgam, and Gulmarg in one tour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Package Sections */}
      <HoneymoonSpecial />
      <KashmirFamilyPackages />
      <BestsellerKashmirTours />
      <KashmirExcursionsSpecial />
      <KashmirAdventureWinter />
      <KashmirCulturalToursAndPackages />
    </>
  );
}
