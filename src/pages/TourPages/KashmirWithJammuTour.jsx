import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
import ItineraryCard from "../../components/ItineraryCard";

export default function KashmirWithJammuTour() {
  const seoData = useSEO({
    title: "Kashmir with Jammu Tour Package | 6 Nights Cultural Heritage Tour",
    description: "Explore Kashmir valley and Jammu heritage in one comprehensive tour. 6 nights covering Srinagar, Gulmarg, Pahalgam, and historic Jammu. Cultural and natural experiences at ₹14,999.",
    keywords: "Kashmir Jammu tour, Kashmir with Jammu package, cultural heritage tour, 6 nights Kashmir Jammu, complete J&K tour",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-with-jammu-tour/"
  });

  const packageData = {
    name: "Kashmir with Jammu Tour Package",
    description: "A perfect combination tour covering the natural beauty of Kashmir valley and the rich cultural heritage of Jammu region.",
    price: "14999",
    duration: "7 days",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Jammu"],
    highlights: [
      "Kashmir valley exploration",
      "Jammu cultural heritage sites",
      "Raghunath Temple visit",
      "Bahu Fort exploration",
      "Traditional Dogra culture",
      "Complete J&K experience"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-orange-600 to-red-700 text-white py-25">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir with Jammu Tour Package
              </h1>
              <p className="text-xl mb-8">
                Experience the complete Jammu & Kashmir with natural beauty of valley and rich cultural heritage of Jammu
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹14,999</span>
                  <span className="text-lg ml-2 text-black">per person</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20with%20Jammu%20Tour%20Package%20from%20Travel%20Wiki."
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
                <div className="text-orange-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">6 Nights / 7 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-orange-600 text-3xl mb-2">🏛️</div>
                <h3 className="font-semibold text-gray-800">Heritage</h3>
                <p className="text-gray-600">Cultural Tours</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-orange-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Nature</h3>
                <p className="text-gray-600">Valley Beauty</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-orange-600 text-3xl mb-2">🎭</div>
                <h3 className="font-semibold text-gray-800">Culture</h3>
                <p className="text-gray-600">Dogra Traditions</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Kashmir & Jammu Combined Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This unique tour package combines the ethereal beauty of Kashmir valley with the rich cultural 
                heritage of Jammu, offering you a complete experience of the Jammu & Kashmir state. The tour 
                showcases the diverse landscapes, cultures, and traditions that make this region truly special.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                While Kashmir mesmerizes you with its natural beauty, pristine lakes, and snow-capped mountains, 
                Jammu introduces you to ancient temples, forts, and the vibrant Dogra culture. This 6-night tour 
                ensures you experience both the Paradise on Earth and the City of Temples.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The package includes visits to iconic temples like Raghunath Temple, historic forts like Bahu Fort, 
                along with all major Kashmir attractions including Dal Lake, Gulmarg, and Pahalgam valleys.
              </p>
            </div>

            {/* Regional Highlights */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Regional Highlights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Kashmir Valley (4 Nights)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Srinagar: Dal Lake, Mughal Gardens, Houseboats</li>
                    <li>• Gulmarg: Gondola rides, Snow activities</li>
                    <li>• Pahalgam: Betaab Valley, Aru Valley exploration</li>
                    <li>• Sonamarg: Day trip to meadow of gold</li>
                    <li>• Traditional Kashmiri hospitality</li>
                    <li>• Local handicrafts and cuisine</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Jammu Region (2 Nights)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Raghunath Temple complex visit</li>
                    <li>• Bahu Fort and gardens exploration</li>
                    <li>• Ranbireshwar Temple darshan</li>
                    <li>• Amar Mahal Palace museum</li>
                    <li>• Local Dogra cuisine experience</li>
                    <li>• Traditional markets and bazaars</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cultural Experiences */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Cultural Experiences</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🕉️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Temple Tours</h4>
                  <p className="text-gray-600">Visit ancient temples and experience spiritual heritage</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Historic Forts</h4>
                  <p className="text-gray-600">Explore historic forts and learn about Dogra dynasty</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎪</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Programs</h4>
                  <p className="text-gray-600">Traditional music, dance, and cultural performances</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Regional Cuisine</h4>
                  <p className="text-gray-600">Taste authentic Kashmiri and Dogra delicacies</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Handicraft Shopping</h4>
                  <p className="text-gray-600">Shop for local handicrafts and traditional items</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📿</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Spiritual Journey</h4>
                  <p className="text-gray-600">Experience the spiritual essence of both regions</p>
                </div>
              </div>
            </div>

            {/* Tour Itinerary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tour Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Arrival in Jammu"
                  activities={[
                    "Airport/Railway station pickup",
                    "Hotel check-in and freshening up",
                    "Visit Raghunath Temple complex",
                    "Explore Bahu Fort and gardens",
                    "Evening leisure and local market visit"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Jammu arrival"
                  imageTitle="Jammu Arrival"
                  imageSubtitle="City of Temples"
                  icon="🏛️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Jammu Sightseeing & Transfer"
                  activities={[
                    "Morning visit to Ranbireshwar Temple",
                    "Amar Mahal Palace museum tour",
                    "Departure for Srinagar (300 km, 7 hours)",
                    "Scenic drive through mountains",
                    "Arrival and hotel check-in in Srinagar"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Jammu sightseeing"
                  imageTitle="Jammu Sightseeing"
                  imageSubtitle="Cultural heritage exploration"
                  icon="🏛️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3-4: Srinagar Exploration"
                  activities={[
                    "Dal Lake Shikara rides and houseboat experience",
                    "Mughal Gardens tour (Shalimar, Nishat, Chashme Shahi)",
                    "Local sightseeing and handicraft shopping",
                    "Cultural evening programs"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Srinagar sightseeing"
                  imageTitle="Srinagar Sightseeing"
                  imageSubtitle="Mughal Gardens and Dal Lake"
                  icon="🌲"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 5: Gulmarg Day Trip"
                  activities={[
                    "Early morning departure to Gulmarg",
                    "Gondola ride and snow activities",
                    "Explore Gulmarg meadows",
                    "Return to Srinagar in evening"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Gulmarg Gondola"
                  imageTitle="Gulmarg Gondola"
                  imageSubtitle="Experience to Apharwat Peak"
                  icon="🚡"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 6: Pahalgam Excursion"
                  activities={[
                    "Full day trip to Pahalgam",
                    "Visit Betaab Valley and Aru Valley",
                    "Nature walks and photography",
                    "Return to Srinagar for overnight stay"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Pahalgam valley"
                  imageTitle="Pahalgam Valley"
                  imageSubtitle="Valley of Shepherds"
                  icon="🏔️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 7: Departure"
                  activities={[
                    "Check-out and last-minute shopping",
                    "Transfer to Srinagar airport",
                    "Departure with wonderful memories"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png"
                  imageAlt="Srinagar departure"
                  imageTitle="Srinagar Airport"
                  imageSubtitle="Departure with memories"
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