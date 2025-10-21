import React from "react";
import heroBg from '../../assets/dal_lake.webp';
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
import BestsellerKashmirTours from "../../components/Packages/BestsellerKashmirTours";
import HoneymoonSpecial from "../../components/Packages/HoneymoonSpecial";
import KashmirFamilyPackages from "../../components/Packages/KashmirFamilyPackages";
import KashmirExcursionsSpecial from "../../components/Packages/KashmirExcursionsSpecial";
import KashmirAdventureWinter from "../../components/Packages/KashmirAdventureWinter";
import KashmirCulturalToursAndPackages from "../../components/Packages/KashmirCulturalToursAndPackages";

export default function KashmirFamilyTour() {

  const packageData = {
    name: "Kashmir Family Tour Package",
    description: "A perfect family holiday package covering the most beautiful destinations of Kashmir with activities suitable for all age groups.",
    price: "11999",
    duration: "6 days",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam"],
    highlights: [
      "Family-friendly accommodations",
      "Shikara rides for the whole family",
      "Gulmarg Gondola experience",
      "Pahalgam valley exploration",
      "Local sightseeing tours",
      "Traditional Kashmiri cuisine"
    ]
  };

  return (
    <>
      <SEO 
        pageType="family"
        customTitle="Kashmir Family Tour Package | 5 Nights 6 Days Family Holiday"
        customDescription="Perfect Kashmir family tour package for 5 nights covering Srinagar, Gulmarg, and Pahalgam. Family-friendly activities, comfortable accommodations, and memorable experiences. Starting at ₹11,999."
        customKeywords={["Kashmir family tour", "Kashmir family package", "5 nights Kashmir tour", "family holiday Kashmir", "Srinagar Gulmarg Pahalgam family tour"]}
        customImage="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514592/travelwiki/assets/Bestseller/kashmir-package.jpg"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": packageData.name,
            "description": packageData.description,
            "image": "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514592/travelwiki/assets/Bestseller/kashmir-package.jpg",
            "offers": {
              "@type": "Offer",
              "price": packageData.price,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-01-01",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "TravelAgency",
              "name": "Travel Wiki",
              "url": "https://travelwiki.org.in",
              "telephone": "+91 8899971960"
            },
            "duration": packageData.duration,
            "touristType": ["Family Travelers", "Multi-generational Groups", "Children and Parents"]
          })}
        </script>
      </SEO>
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div
          className="relative text-white py-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Family Tour Package
              </h1>
              <p className="text-xl mb-8">
                Create unforgettable family memories in the paradise of Kashmir with our specially designed family tour package
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹11,999</span>
                  <span className="text-lg ml-2 text-black">per person</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Family%20Tour%20Package%20from%20Travel%20Wiki."
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
                <div className="text-green-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">5 Nights / 6 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold text-gray-800">Family Friendly</h3>
                <p className="text-gray-600">All Age Groups</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🏨</div>
                <h3 className="font-semibold text-gray-800">Stay</h3>
                <p className="text-gray-600">Family Hotels</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-800">Transport</h3>
                <p className="text-gray-600">Private Vehicle</p>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Family Tour Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Kashmir Family Tour Package is specially designed to provide the perfect balance of adventure, 
                relaxation, and cultural experiences suitable for families with children of all ages. This 5-night 
                tour covers the most scenic and family-friendly destinations in Kashmir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From comfortable Shikara rides on Dal Lake to exciting Gondola rides in Gulmarg, every activity 
                is planned keeping families in mind. The tour includes visits to beautiful gardens, local markets, 
                and scenic viewpoints that will create lasting memories for the entire family.
              </p>
            </div>

            {/* Family Activities */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Family Activities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚣</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Shikara Rides</h4>
                  <p className="text-gray-600">Gentle boat rides perfect for families with children</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gondola Experience</h4>
                  <p className="text-gray-600">Safe and exciting cable car rides with stunning views</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌺</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Garden Visits</h4>
                  <p className="text-gray-600">Explore beautiful Mughal gardens perfect for family photos</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🐎</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Pony Rides</h4>
                  <p className="text-gray-600">Fun pony rides for children in Gulmarg and Pahalgam</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Shows</h4>
                  <p className="text-gray-600">Traditional Kashmiri cultural performances</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Shopping</h4>
                  <p className="text-gray-600">Family shopping for handicrafts and souvenirs</p>
                </div>
              </div>
            </div>

            {/* Destinations Covered */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Destinations Covered</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Srinagar</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Dal Lake Shikara rides</li>
                    <li>• Mughal Gardens</li>
                    <li>• Local markets</li>
                    <li>• Houseboat experience</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Gulmarg</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Gondola rides</li>
                    <li>• Snow activities (seasonal)</li>
                    <li>• Golf course views</li>
                    <li>• Mountain photography</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Pahalgam</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Betaab Valley</li>
                    <li>• Aru Valley</li>
                    <li>• River side walks</li>
                    <li>• Nature trails</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Package Sections */}
      <KashmirFamilyPackages />
      <BestsellerKashmirTours />
      <HoneymoonSpecial />
      <KashmirExcursionsSpecial />
      <KashmirAdventureWinter />
      <KashmirCulturalToursAndPackages />
    </>
  );
}