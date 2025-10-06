import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
import ItineraryCard from "../../components/ItineraryCard";
const dalLake = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514589/travelwiki/assets/Bestseller/exotic_tour.jpg";

export default function KashmirExoticTour() {
  const seoData = useSEO({
    title: "Kashmir Exotic Tour Package | 5 Nights 6 Days Complete Kashmir Experience",
    description: "Comprehensive Kashmir exotic tour covering Srinagar, Pahalgam, and Gulmarg in 5 nights. Houseboat stays, valley tours, and adventure activities at ₹16,999.",
    keywords: "Kashmir exotic tour, 5 nights Kashmir package, Kashmir tour 5N6D, exotic Kashmir experience, comprehensive Kashmir tour",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-exotic-tour/"
  });

  const packageData = {
    name: "Kashmir Exotic Tour Package",
    description: "An exotic and comprehensive Kashmir tour covering all major destinations with extended stays for deeper exploration of Kashmir's natural beauty.",
    price: "16999",
    originalPrice: "20399",
    duration: "6 days",
    destinations: ["Srinagar", "Pahalgam", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour to Chandanwari, Aru & Betab Valley in Pahalgam",
      "2N Srinagar (IN HB), 2N Pahalgam, 1N Gulmarg",
      "5 Hotels, 9 Activities, 6 Transfers",
      "Extended Pahalgam stay (2 nights)",
      "Houseboat experience"
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
            backgroundImage: `url(${dalLake})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-16 sm:mt-20 md:mt-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Kashmir Exotic Tour Package
              </h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                Indulge in an exotic Kashmir experience with extended stays in paradise. 5 nights of comprehensive exploration across Kashmir's most beautiful destinations
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹16,999</span>
                  <span className="text-lg ml-2 text-gray-200">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹20,399</span> <span className="text-green-300 ml-2">17% OFF</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Exotic%20Tour%20from%20Travel%20Wiki."
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

        {/* Image Gallery Section 1 - After Hero */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Exotic Kashmir Moments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Image+1" 
                  alt="Exotic Kashmir Experience" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300/059669/FFFFFF?text=Image+2" 
                  alt="Comprehensive Kashmir Tour" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Complete Tour</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Image+3" 
                  alt="Kashmir Valley Exploration" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Valley Exploration</span>
                </div>
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
                <div className="text-green-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">5 Nights / 6 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Accommodations</h3>
                <p className="text-gray-600">5 Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">9 Activities</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transfers</h3>
                <p className="text-gray-600">6 Transfers</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Exotic Kashmir Adventure</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on an exotic Kashmir journey that offers extended exploration of the valley's most magnificent 
                destinations. This 5 nights 6 days tour is designed for travelers who want to experience Kashmir in 
                its full glory with deeper immersion into each location.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With an extended 2-night stay in Pahalgam, you'll have ample time to explore the pristine valleys, 
                engage in adventure activities, and truly connect with Kashmir's natural beauty. The tour combines 
                the tranquility of houseboat stays with the excitement of mountain adventures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This exotic package is perfect for nature lovers, photography enthusiasts, and adventure seekers 
                who want to experience the complete essence of Kashmir without rushing through the destinations.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Exotic Kashmir Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Srinagar (2 Nights - 1 Night Houseboat)"
                  activities={[
                    "Arrival and transfer to traditional Kashmir houseboat",
                    "01 Hour exotic Shikara ride exploring Dal Lake's hidden corners",
                    "Comprehensive tour of Mughal Gardens - Shalimar, Nishat, Chashme Shahi",
                    "Early morning floating vegetable market experience",
                    "Visit Hazratbal Shrine and Jamia Masjid",
                    "Explore local handicraft workshops and artisan centers",
                    "Traditional Kashmiri Wazwan cuisine experience",
                    "Sunset photography at Boulevard Road"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Srinagar+Houseboat"
                  imageAlt="Srinagar Houseboat Experience"
                  imageTitle="Srinagar Houseboat"
                  imageSubtitle="2 Nights with 1 Night Houseboat"
                  icon="🏛️"
                />
                
                <ItineraryCard
                  title="Pahalgam Extended Stay (2 Nights)"
                  activities={[
                    "Scenic drive to Pahalgam with stops at Awantipora ruins",
                    "Day 1: Comprehensive tour to Chandanwari glacier point",
                    "Extended exploration of Aru Valley with picnic lunch",
                    "Visit Betab Valley and Mini Switzerland",
                    "Day 2: Adventure activities - white water rafting (seasonal)",
                    "Pony trekking to Baisaran meadows (Mini Switzerland)",
                    "Lidder River nature walks and trout fishing",
                    "Local village visits and cultural interactions",
                    "Photography sessions in pristine landscapes"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/EA580C/FFFFFF?text=Pahalgam+Extended"
                  imageAlt="Pahalgam Extended Stay Experience"
                  imageTitle="Pahalgam Extended"
                  imageSubtitle="2 Nights Valley Exploration"
                  icon="🌲"
                />
                
                <ItineraryCard
                  title="Gulmarg (1 Night)"
                  activities={[
                    "Drive to Gulmarg through scenic pine forests",
                    "Gulmarg Gondola Phase 1 & 2 to Apharwat Peak",
                    "Snow activities and skiing (winter season)",
                    "Alpine walking trails and meadow exploration",
                    "Visit to world's highest golf course (summer)",
                    "St. Mary's Church and local market exploration",
                    "Adventure activities - ATV rides and horse riding",
                    "Sunset views from Apharwat Peak"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/0891B2/FFFFFF?text=Gulmarg+Adventure"
                  imageAlt="Gulmarg Adventure Experience"
                  imageTitle="Gulmarg Adventure"
                  imageSubtitle="1 Night Mountain Experience"
                  icon="🚡"
                />
              </div>
            </div>

            {/* Image Gallery Section 2 - Itinerary Highlights */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Exotic Itinerary Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://via.placeholder.com/500x350/7C3AED/FFFFFF?text=Shikara+Ride" 
                      alt="Exotic Shikara Ride Experience" 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-bold text-lg">Exotic Shikara Ride</h3>
                        <p className="text-sm opacity-90">01 Hour experience on Dal Lake</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://via.placeholder.com/500x350/EA580C/FFFFFF?text=Pahalgam+Valley" 
                      alt="Pahalgam Valley Tours" 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-bold text-lg">Pahalgam Valley</h3>
                        <p className="text-sm opacity-90">Extended 2-night valley exploration</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://via.placeholder.com/500x350/0891B2/FFFFFF?text=Houseboat+Stay" 
                      alt="Luxury Houseboat Experience" 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-bold text-lg">Luxury Houseboat</h3>
                        <p className="text-sm opacity-90">2 nights in Srinagar houseboat</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://via.placeholder.com/500x350/059669/FFFFFF?text=Gulmarg+Adventure" 
                      alt="Gulmarg Adventure Activities" 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-bold text-lg">Gulmarg Adventure</h3>
                        <p className="text-sm opacity-90">1 night mountain experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery Section 3 - Package Experience */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Exotic Package Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Valley+Tours" 
                    alt="Exotic Valley Tours" 
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">Valley Tours</h3>
                      <p className="text-sm opacity-90">Chandanwari, Aru & Betab Valley</p>
                    </div>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="https://via.placeholder.com/400x300/059669/FFFFFF?text=Extended+Stay" 
                    alt="Extended Accommodations" 
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">Extended Stay</h3>
                      <p className="text-sm opacity-90">5 hotels, 9 activities, 6 transfers</p>
                    </div>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Complete+Experience" 
                    alt="Complete Kashmir Experience" 
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">Complete Experience</h3>
                      <p className="text-sm opacity-90">Comprehensive Kashmir exploration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Exotic Tour Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Extended Valley Exploration</h4>
                  <p className="text-gray-600">2 full nights in Pahalgam for comprehensive valley tours</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Authentic Houseboat Stay</h4>
                  <p className="text-gray-600">Experience traditional Kashmir living on Dal Lake</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Adventure Activities</h4>
                  <p className="text-gray-600">Rafting, trekking, skiing, and mountain adventures</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Photography Tours</h4>
                  <p className="text-gray-600">Dedicated time for capturing exotic landscapes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Culinary Experiences</h4>
                  <p className="text-gray-600">Traditional Wazwan and authentic Kashmiri cuisine</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🧘</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Wellness & Relaxation</h4>
                  <p className="text-gray-600">Peaceful moments in nature for complete rejuvenation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}