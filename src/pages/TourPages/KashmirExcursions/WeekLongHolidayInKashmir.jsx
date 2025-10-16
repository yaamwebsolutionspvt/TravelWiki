import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
const ex4 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1759812843/Week_Long_Holiday_In_Kashmir_dykfgx.webp";

export default function WeekLongHolidayInKashmir() {
  const seoData = useSEO({
    title: "Week Long Holiday In Kashmir | 6 Nights 7 Days Perfect Valley Tour",
    description: "Enjoy a perfect week-long holiday in Kashmir with 6 nights covering Srinagar, Pahalgam, and Gulmarg. Complete relaxation and sightseeing experience at ₹20,999.",
    keywords: "week long Kashmir holiday, 6 nights Kashmir tour, perfect Kashmir vacation, Srinagar Pahalgam Gulmarg tour, complete Kashmir experience",
    canonical: "https://www.travelwiki.org.in/packages/week-long-holiday-kashmir/"
  });

  const packageData = {
    name: "Week Long Holiday In Kashmir Package",
    description: "The perfect week-long Kashmir holiday combining relaxation, sightseeing, and cultural experiences across three beautiful destinations for an ideal vacation.",
    price: "20999",
    originalPrice: "25199",
    duration: "7 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride on Dal Lake",
      "Complete Tour of Pahalgam Valley",
      "Perfect balance of activity and relaxation",
      "Comprehensive valley coverage",
      "Cultural and natural experiences",
      "Ideal week-long vacation pace"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div
          className="relative text-white h-[75vh] overflow-hidden"
          style={{
            backgroundImage: `url(${ex4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Week Long Holiday In Kashmir
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Experience the perfect week-long Kashmir holiday with ideal balance of relaxation, adventure, and cultural exploration
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹20,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹25,199</span> 
                    <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Week%20Long%20Holiday%20In%20Kashmir%20from%20Travel%20Wiki."
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
                <div className="text-purple-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">6 Nights / 7 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">⚖️</div>
                <h3 className="font-semibold text-gray-800">Balance</h3>
                <p className="text-gray-600">Perfect Pace</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">14 Experiences</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-purple-600 text-3xl mb-2">🏖️</div>
                <h3 className="font-semibold text-gray-800">Style</h3>
                <p className="text-gray-600">Relaxed Holiday</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Perfect Week-Long Kashmir Holiday</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Discover the perfect rhythm for a Kashmir vacation with our thoughtfully designed week-long holiday package. 
                This 6-night, 7-day journey offers the ideal balance between sightseeing and relaxation, ensuring you 
                experience Kashmir's beauty without feeling rushed while having enough time to truly unwind and enjoy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Covering three magnificent destinations - Srinagar, Pahalgam, and Gulmarg - this package allows for 
                meaningful exploration of each location. With strategically planned activities and ample leisure time, 
                you'll return home feeling refreshed and fulfilled with comprehensive Kashmir memories.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for couples, families, and travelers who prefer a relaxed vacation pace. This package ensures 
                you don't miss Kashmir's highlights while providing the luxury of time to savor each experience and 
                create lasting memories at a comfortable, unhurried pace.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Perfect Week Holiday Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Relaxed Srinagar Arrival"
                  activities={[
                    "Comfortable arrival at Srinagar with warm welcome",
                    "Check-in to quality hotel with excellent amenities",
                    "Relaxed afternoon with welcome refreshments",
                    "Gentle orientation about the week's itinerary",
                    "Evening leisure time to settle in comfortably",
                    "Welcome dinner with local specialties",
                    "Peaceful overnight stay in Srinagar"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812843/Day_1_Relaxed_Srinagar_Arrival_qhbtfj.webp"
                  imageAlt="Srinagar Arrival"
                  imageTitle="Srinagar Arrival"
                  imageSubtitle="Relaxed Welcome"
                  icon="🌟"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 2: Srinagar Highlights Tour"
                  activities={[
                    "Leisurely 01 Hour Shikara ride on beautiful Dal Lake",
                    "Comprehensive tour of stunning Mughal Gardens",
                    "Visit Shalimar Bagh, Nishat Bagh with ample time for photos",
                    "Relaxed lunch at garden restaurant",
                    "Visit Shankaracharya Temple for panoramic views",
                    "Evening free time for personal exploration",
                    "Comfortable overnight stay"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812835/Peaceful_Pahalgam_Journey_lq89p2.webp"
                  imageAlt="Dal Lake Shikara Ride"
                  imageTitle="Dal Lake Shikara"
                  imageSubtitle="01 Hour Experience"
                  icon="🚣‍♀️"
                  imageOnRight={true}
                />
                
                <ItineraryCard
                  title="Day 3: Peaceful Pahalgam Journey"
                  activities={[
                    "Comfortable morning departure for Pahalgam",
                    "Scenic drive with multiple photo stops",
                    "Check-in to riverside hotel in Pahalgam",
                    "Relaxed lunch with valley views",
                    "Afternoon leisure time by Lidder River",
                    "Evening walk in Pahalgam's natural surroundings",
                    "Peaceful overnight stay with nature sounds"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Complete_Pahalgam_Valley_Experience_z90y7f.webp"
                  imageAlt="Pahalgam Valley"
                  imageTitle="Pahalgam Valley"
                  imageSubtitle="Nature & Peace"
                  icon="🌲"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 4: Complete Pahalgam Valley Experience"
                  activities={[
                    "Comprehensive tour of Pahalgam Valley attractions",
                    "Visit beautiful Betab Valley with leisure time",
                    "Exploration of scenic Aru Valley",
                    "Optional pony rides for valley exploration",
                    "Relaxed picnic lunch in natural settings",
                    "Visit Chandanwari with glacial views",
                    "Evening relaxation at hotel",
                    "Comfortable overnight stay"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Gulmarg_Meadow_Experience_j5zsmc.webp"
                  imageAlt="Betab Valley Experience"
                  imageTitle="Betab Valley"
                  imageSubtitle="Bollywood Location"
                  icon="🏔️"
                  imageOnRight={true}
                />
                
                <ItineraryCard
                  title="Day 5: Gulmarg Meadow Experience"
                  activities={[
                    "Scenic journey to beautiful Gulmarg meadows",
                    "Check-in to hotel with meadow views",
                    "Gulmarg Gondola ride to Apharwat Peak at leisure pace",
                    "Snow activities and mountain exploration",
                    "Relaxed lunch at high altitude",
                    "Visit to world's highest golf course",
                    "Evening leisure time in meadow surroundings",
                    "Peaceful overnight stay in mountain air"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486007/Kashmir_15_igkjmn.webp"
                  imageAlt="Gulmarg Gondola Experience"
                  imageTitle="Gulmarg Gondola"
                  imageSubtitle="Meadow of Flowers"
                  icon="🎿"
                  imageOnRight={false}
                />
                
                <ItineraryCard
                  title="Day 6: Final Srinagar Experiences"
                  activities={[
                    "Relaxed return journey to Srinagar",
                    "Check-in to comfortable hotel",
                    "Visit local handicraft centers and markets",
                    "Final shopping for Kashmir specialties",
                    "Sunset Shikara ride with reflection time",
                    "Farewell dinner with traditional cuisine",
                    "Final comfortable night in Kashmir"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812844/Srinagar_Highlights_Tour_aqw22q.webp"
                  imageAlt="Srinagar Sunset"
                  imageTitle="Srinagar Sunset"
                  imageSubtitle="Final Experiences"
                  icon="🌅"
                  imageOnRight={true}
                />
                
                <ItineraryCard
                  title="Day 7: Perfect Holiday Conclusion"
                  activities={[
                    "Relaxed final breakfast with Kashmir views",
                    "Last-minute souvenir shopping",
                    "Comfortable transfer to Srinagar Airport",
                    "Departure with perfect holiday memories"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812842/Perfect_Holiday_Conclusion_vqxo7q.webp"
                  imageAlt="Departure"
                  imageTitle="Departure"
                  imageSubtitle="Perfect Holiday End"
                  icon="✈️"
                  imageOnRight={false}
                  />
              </div>
            </div>

            {/* Perfect Holiday Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Perfect Holiday Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Perfect Balance</h4>
                  <p className="text-gray-600">Ideal mix of activities and relaxation time</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Quality Accommodation</h4>
                  <p className="text-gray-600">Comfortable hotels with excellent amenities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Comprehensive Coverage</h4>
                  <p className="text-gray-600">All major attractions without rushing</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Comfortable Transport</h4>
                  <p className="text-gray-600">Quality vehicles with scenic route planning</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Quality Dining</h4>
                  <p className="text-gray-600">Best local restaurants and hotel dining</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Memory Making</h4>
                  <p className="text-gray-600">Ample time for photography and memories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}