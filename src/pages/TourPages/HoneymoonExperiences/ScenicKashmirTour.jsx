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

const tourPackages = "https://res.cloudinary.com/dw1sh368y/image/upload/v1759812843/Day_1_Relaxed_Srinagar_Arrival_qhbtfj.webp";

export default function ScenicKashmirTour() {
  const seoData = useSEO({
    title: "Scenic Kashmir Tour | 6 Nights 7 Days Premium Honeymoon Package",
    description: "Experience scenic Kashmir with our premium 6 nights package. Extended stays in Srinagar houseboat, Pahalgam, Gulmarg with luxury arrangements. Starting at ₹23,999.",
    keywords: "scenic Kashmir tour, 6 nights Kashmir honeymoon, premium Kashmir package, extended Kashmir stay, luxury honeymoon Kashmir",
    canonical: "https://www.travelwiki.org.in/packages/scenic-kashmir-tour/"
  });

  const packageData = {
    name: "Scenic Kashmir Tour",
    description: "A premium scenic Kashmir tour with extended stays at each destination for a leisurely and comprehensive honeymoon experience.",
    price: "23999",
    originalPrice: "28799",
    duration: "7 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Cake, Candle Light Dinner & Fresh Fruit Basket",
      "2N Srinagar (1N Houseboat) + 2N Pahalgam + 2N Gulmarg",
      "11 scenic activities",
      "7 comfortable transfers"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div className="relative text-white min-h-[75vh] py-30 overflow-hidden bg-gradient-to-br from-pink-600 via-rose-600 to-red-600" style={{
            backgroundImage: `url(${tourPackages})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Scenic Kashmir Tour
              </h1>
              <p className="text-xl mb-8">
                Immerse yourself in Kashmir's scenic beauty with extended stays and premium experiences at every destination
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
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Scenic%20Kashmir%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-indigo-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">6 Nights / 7 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">6 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">11 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">7 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Premium Scenic Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Scenic Kashmir Tour offers extended stays at each destination, allowing you to truly absorb 
                the natural beauty and cultural richness of Kashmir. With 6 nights of premium accommodations 
                and 11 carefully curated activities, this tour provides ample time for relaxation and exploration.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience 2 nights each in Pahalgam and Gulmarg for deeper exploration, plus 2 nights in 
                Srinagar including a romantic houseboat stay. This leisurely pace ensures you don't miss 
                any of Kashmir's scenic wonders.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Scenic Kashmir Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Arrival in Srinagar"
                  activities={[
                    "VIP arrival at Srinagar Airport",
                    "Check-in to luxury hotel in Srinagar",
                    "Welcome ceremony with cake and fruit basket",
                    "Evening leisure at Dal Lake Boulevard",
                    "Special candlelight dinner",
                    "Overnight stay in Srinagar hotel"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812843/Day_1_Relaxed_Srinagar_Arrival_qhbtfj.webp"
                  imageAlt="Srinagar arrival"
                  imageTitle="Srinagar Arrival"
                  imageSubtitle="Luxury hotel check-in"
                  icon="🏛️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Srinagar to Houseboat"
                  activities={[
                    "Morning breakfast and sightseeing",
                    "Romantic 01 Hour Shikara ride on Dal Lake",
                    "Visit Mughal Gardens (Nishat, Shalimar, Chashme Shahi)",
                    "Check-in to premium houseboat",
                    "Sunset photography session",
                    "Traditional dinner on houseboat",
                    "Overnight stay in houseboat"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812844/Srinagar_Highlights_Tour_aqw22q.webp"
                  imageAlt="Dal Lake houseboat"
                  imageTitle="Dal Lake Houseboat"
                  imageSubtitle="Premium floating accommodation"
                  icon="🚣‍♀️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3: Journey to Pahalgam"
                  activities={[
                    "Morning breakfast on houseboat",
                    "Scenic drive to Pahalgam with photo stops",
                    "Check-in to premium resort in Pahalgam",
                    "Visit Betab Valley and explore film locations",
                    "Evening walks along Lidder River",
                    "Overnight stay in Pahalgam"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Complete_Pahalgam_Valley_Experience_z90y7f.webp"
                  imageAlt="Pahalgam valley"
                  imageTitle="Pahalgam Valley"
                  imageSubtitle="Valley of Shepherds"
                  icon="🌲"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 4: Pahalgam Extended Exploration"
                  activities={[
                    "Early morning visit to Aru Valley",
                    "Extended exploration of Chandanwari",
                    "Horse riding or pony trekking to Baisaran",
                    "Picnic lunch in scenic meadows",
                    "Nature photography workshop",
                    "Evening cultural program",
                    "Overnight stay in Pahalgam"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Complete_Pahalgam_Valley_Experience_z90y7f.webp"
                  imageAlt="Chandanwari"
                  imageTitle="Chandanwari"
                  imageSubtitle="Starting point of Amarnath Yatra"
                  icon="🏔️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 5: Gulmarg Adventure Day 1"
                  activities={[
                    "Morning drive to Gulmarg",
                    "Check-in to luxury hotel in Gulmarg",
                    "Gulmarg Gondola Phase 1 & 2 to Apharwat Peak",
                    "Snow activities and skiing (seasonal)",
                    "Visit the world's highest golf course",
                    "Adventure sports and mountain biking",
                    "Overnight stay in Gulmarg"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486007/Kashmir_15_igkjmn.webp"
                  imageAlt="Gulmarg Gondola"
                  imageTitle="Gulmarg Gondola"
                  imageSubtitle="Experience to Apharwat Peak"
                  icon="🚡"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 6: Gulmarg Extended Experience"
                  activities={[
                    "Morning alpine trekking",
                    "Extended Gondola experience",
                    "Visit St. Mary's Church",
                    "Gulmarg Biosphere Reserve exploration",
                    "Professional photography session",
                    "Return to Srinagar for final night",
                    "Overnight stay in Srinagar"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486007/Kashmir_15_igkjmn.webp"
                  imageAlt="Gulmarg activities"
                  imageTitle="Gulmarg Activities"
                  imageSubtitle="Adventure and nature exploration"
                  icon="⛷️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 7: Departure"
                  activities={[
                    "Leisurely breakfast at hotel",
                    "Final shopping at Lal Chowk",
                    "Souvenir collection",
                    "Departure transfer to airport",
                    "Farewell with scenic memories"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812842/Perfect_Holiday_Conclusion_vqxo7q.webp"
                  imageAlt="Srinagar departure"
                  imageTitle="Srinagar Airport"
                  imageSubtitle="Departure with memories"
                  icon="✈️"
                  imageOnRight={false}
                />
              </div>
            </div>

            {/* Scenic Highlights */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Scenic Tour Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Extended Stays</h4>
                  <p className="text-gray-600">2 nights each in Pahalgam and Gulmarg for deeper exploration</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography Focus</h4>
                  <p className="text-gray-600">Professional photography sessions at scenic locations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Complete Coverage</h4>
                  <p className="text-gray-600">Every major scenic spot with unhurried exploration</p>
                </div>
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