import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
const holiday = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514636/travelwiki/assets/Honeymoon/kashmir-holiday.jpg";

export default function BestSellingKashmirTour() {
  const seoData = useSEO({
    title: "Best Selling Kashmir Tour | 5 Nights 6 Days Honeymoon Package",
    description: "Our best-selling Kashmir honeymoon package with 5 nights coverage of Srinagar, Pahalgam, Gulmarg and houseboat stay. Perfect romantic getaway with special arrangements. Starting at ₹19,999.",
    keywords: "best selling Kashmir tour, 5 nights Kashmir honeymoon, complete Kashmir package, Srinagar Pahalgam Gulmarg houseboat, popular Kashmir tour",
    canonical: "https://www.travelwiki.org.in/packages/best-selling-kashmir-tour/"
  });

  const packageData = {
    name: "Best Selling Kashmir Tour",
    description: "Our most popular Kashmir honeymoon package covering all major destinations with luxury accommodations and romantic experiences.",
    price: "19999",
    originalPrice: "23999",
    duration: "6 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Cake, Candle Light Dinner & Fresh Fruit Basket",
      "2N Srinagar + 1N Pahalgam + 1N Gulmarg + 1N Srinagar Houseboat",
      "9 exciting activities",
      "6 seamless transfers"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div
          className="relative text-white min-h-[75vh] py-30 overflow-hidden"
          style={{
            backgroundImage: `url(${holiday})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Best Selling Kashmir Tour
              </h1>
              <p className="text-xl mb-8">
                Our most popular and comprehensive Kashmir honeymoon package with complete destination coverage
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹19,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹23,999</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Best%20Selling%20Kashmir%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-emerald-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">5 Nights / 6 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Hotels</h3>
                <p className="text-gray-600">5 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">9 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-emerald-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">6 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Best Selling Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This is our most popular and comprehensive Kashmir honeymoon package, carefully designed based on 
                years of customer feedback and preferences. It perfectly balances romantic experiences with adventure 
                and covers all the must-visit destinations in Kashmir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the complete Kashmir journey with 2 nights in Srinagar hotels, 1 night in beautiful 
                Pahalgam, 1 night in adventurous Gulmarg, and a special final night in a romantic houseboat on Dal Lake.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Complete Kashmir Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Arrival in Srinagar"
                  activities={[
                    "Arrival at Srinagar Airport and VIP welcome",
                    "Check-in to premium hotel in Srinagar",
                    "Welcome cake and fresh fruit basket",
                    "Evening visit to local markets",
                    "Special candlelight dinner",
                    "Overnight stay in Srinagar hotel"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812843/Day_1_Relaxed_Srinagar_Arrival_qhbtfj.webp"
                  imageAlt="Srinagar Arrival"
                  imageTitle="Srinagar Arrival"
                  imageSubtitle="VIP Welcome"
                  icon="🏛️"
                />
                
                <ItineraryCard
                  title="Day 2: Srinagar Sightseeing"
                  activities={[
                    "Morning breakfast at hotel",
                    "Romantic 01 Hour Shikara ride on Dal Lake",
                    "Visit famous Mughal Gardens (Nishat & Shalimar)",
                    "Explore Shankaracharya Temple for panoramic views",
                    "Visit Hazratbal Shrine and Jamia Masjid",
                    "Shopping time at Boulevard Road",
                    "Overnight stay in Srinagar hotel"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812844/Srinagar_Highlights_Tour_aqw22q.webp"
                  imageAlt="Dal Lake Shikara Ride"
                  imageTitle="Dal Lake Shikara"
                  imageSubtitle="Romantic Experience"
                  icon="🚣‍♀️"
                />
                
                <ItineraryCard
                  title="Day 3: Pahalgam Excursion"
                  activities={[
                    "Morning breakfast and drive to Pahalgam",
                    "Check-in to hotel in Pahalgam",
                    "Visit Betab Valley (Bollywood shooting location)",
                    "Explore Aru Valley's pristine beauty",
                    "Horse riding or pony trekking experience",
                    "Evening walks along Lidder River",
                    "Overnight stay in Pahalgam"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Complete_Pahalgam_Valley_Experience_z90y7f.webp"
                  imageAlt="Pahalgam Valley Experience"
                  imageTitle="Pahalgam Valley"
                  imageSubtitle="Nature & Adventure"
                  icon="🌲"
                />
                
                <ItineraryCard
                  title="Day 4: Gulmarg Adventure"
                  activities={[
                    "Early breakfast and drive to Gulmarg",
                    "Check-in to hotel in Gulmarg",
                    "Gulmarg Gondola cable car ride (Phase 1 & 2)",
                    "Visit the world's highest golf course",
                    "Adventure activities and snow sports (seasonal)",
                    "Scenic photography at viewpoints",
                    "Overnight stay in Gulmarg"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486007/Kashmir_15_igkjmn.webp"
                  imageAlt="Gulmarg Gondola Experience"
                  imageTitle="Gulmarg Gondola"
                  imageSubtitle="Meadow of Flowers"
                  icon="🚡"
                />
                
                <ItineraryCard
                  title="Day 5: Houseboat Experience"
                  activities={[
                    "Morning breakfast and return to Srinagar",
                    "Check-in to traditional houseboat on Dal Lake",
                    "Leisure time on houseboat deck",
                    "Sunset Shikara ride with photography",
                    "Traditional Kashmiri dinner on houseboat",
                    "Romantic evening under the stars",
                    "Overnight stay in houseboat"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812844/Srinagar_Highlights_Tour_aqw22q.webp"
                  imageAlt="Houseboat Experience"
                  imageTitle="Houseboat Experience"
                  imageSubtitle="Traditional Stay"
                  icon="🏠"
                />
                
                <ItineraryCard
                  title="Day 6: Departure"
                  activities={[
                    "Morning breakfast on houseboat",
                    "Last-minute shopping for souvenirs",
                    "Check-out and departure transfer to airport",
                    "Departure with wonderful memories"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812842/Perfect_Holiday_Conclusion_vqxo7q.webp"
                  imageAlt="Departure"
                  imageTitle="Departure"
                  imageSubtitle="Wonderful Memories"
                  icon="✈️"
                />
              </div>
            </div>

            {/* Why This is Best Selling */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Why This is Our Best Seller</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Complete Coverage</h4>
                  <p className="text-gray-600">All major Kashmir destinations in perfect duration</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Perfect Romance</h4>
                  <p className="text-gray-600">Ideal blend of adventure and romantic experiences</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Best Value</h4>
                  <p className="text-gray-600">Maximum experiences at competitive pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}