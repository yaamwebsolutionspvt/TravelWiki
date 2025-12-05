import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import OptimizedImage from "../../components/OptimizedImage";
import ItineraryAccordion from "./ItineraryAccordion";
import FaqSection from "./FaqSection";
import WhyLadakhTourism from "./WhyLadakhTourism";
import { ladakhPackages, ladakhContent } from "../../data/packages/ladakh";
import BestsellerKashmirTours from "../../components/Packages/BestsellerKashmirTours";
import HoneymoonSpecial from "../../components/Packages/HoneymoonSpecial";
import KashmirFamilyPackages from "../../components/Packages/KashmirFamilyPackages";
import KashmirExcursionsSpecial from "../../components/Packages/KashmirExcursionsSpecial";
import KashmirAdventureWinter from "../../components/Packages/KashmirAdventureWinter";
import KashmirCulturalToursAndPackages from "../../components/Packages/KashmirCulturalToursAndPackages"; ``

const bannerimage =
  "https://res.cloudinary.com/dw1sh368y/image/upload/v1759314589/Kashmir_With_Gurez_Valley_Cultural_Tour_wlx64s.png";

// ------------------- Filter Component -------------------
const FilterSection = ({ filters, setFilters, isFilterOpen, setIsFilterOpen }) => {
  const packageCategories = ["Best Seller", "Family/Leisure", "Jeep Safari"];
  const inclusionCategories = ["Cab Transfer", "Hotel Stay", "Meals", "Sightseeing"];
  const destinations = [
    "Gulmarg",
    "Hanle",
    "Jispa",
    "Kargil",
    "Leh",
    "Manali",
    "Nubra",
    "Pahalgam",
    "Pangong",
    "Sarchu",
    "Sonamarg",
    "Srinagar",
    "Tso Moriri",
  ];

  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      inclusions: [],
      destinations: [],
    });
  };

  if (!isFilterOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Filter Packages</h3>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            {/* Package Categories */}
            <div>
              <h4 className="font-semibold mb-3">Package categories</h4>
              <div className="space-y-2">
                {packageCategories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleFilterChange("categories", category)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Inclusion Categories */}
            <div>
              <h4 className="font-semibold mb-3">Inclusion categories</h4>
              <div className="space-y-2">
                {inclusionCategories.map((inclusion) => (
                  <label key={inclusion} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.inclusions.includes(inclusion)}
                      onChange={() => handleFilterChange("inclusions", inclusion)}
                      className="mr-2"
                    />
                    {inclusion}
                  </label>
                ))}
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="font-semibold mb-3">Destinations</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {destinations.map((destination) => (
                  <label key={destination} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.destinations.includes(destination)}
                      onChange={() => handleFilterChange("destinations", destination)}
                      className="mr-2"
                    />
                    {destination}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Apply Filter
            </button>
            <button
              onClick={clearFilters}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------- Package Card -------------------
const PackageCard = ({ package: pkg }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative">
      <OptimizedImage
        src={pkg.image}
        alt={pkg.title}
        width={600}
        height={360}
        className="w-full h-48 object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.target.src =
            "https://res.cloudinary.com/dwlxh3G8y/travelwiki/image/upload/w_200,f_auto,q_auto/public/logo.png";
        }}
      />
    </div>

    <div className="p-4">
      <Link to={pkg.link} className="block">
        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 mb-2 line-clamp-2">
          {pkg.title}
        </h3>
      </Link>

      <div className="text-sm text-gray-600 mb-3">
        <span className="font-medium">{pkg.duration}</span>
      </div>

      <div className="mb-3">
        <ul className="text-sm text-gray-600 space-y-1">
          {pkg.itinerary.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {pkg.inclusions.map((inclusion, index) => (
          <span
            key={index}
            className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
          >
            {inclusion}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mb-2">
        <div className="text-xl font-bold text-green-600">
          ₹{pkg.price}/ <span className="text-sm font-normal">Per person</span>
        </div>
      </div>

      <div className="text-xs text-gray-500 mb-3">
        Updated on: {pkg.updatedOn}
      </div>

      <Link
        to={pkg.link}
        className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 px-4 rounded hover:opacity-90 transition-opacity"
      >
        View Package
      </Link>
    </div>
  </div>
);

// ------------------- Main Component -------------------
const LehLadakhPackages = () => {
  const [filters, setFilters] = useState({
    categories: [],
    inclusions: [],
    destinations: [],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");

  // helper: extract duration number
  const getDuration = (str) => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  // Filter packages
  const filteredPackages = ladakhPackages.filter((pkg) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.some((cat) => pkg.categories.includes(cat))
    ) {
      return false;
    }
    if (
      filters.inclusions.length > 0 &&
      !filters.inclusions.every((inc) => pkg.inclusions.includes(inc))
    ) {
      return false;
    }
    if (
      filters.destinations.length > 0 &&
      !filters.destinations.some((dest) => pkg.destinations.includes(dest))
    ) {
      return false;
    }
    return true;
  });

  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseInt(a.price) - parseInt(b.price);
      case "price-high":
        return parseInt(b.price) - parseInt(a.price);
      case "duration-short":
        return getDuration(a.duration) - getDuration(b.duration);
      case "duration-long":
        return getDuration(b.duration) - getDuration(a.duration);
      default:
        return 0;
    }
  });

  return (
    <>
      <SEO
        pageType="ladakh"
        customTitle="Book Leh Ladakh Tour Packages Online Starting ₹9,999"
        customDescription="Explore the hand-picked selection of Leh Ladakh tour packages on Travel Wiki. Book thrilling and unforgettable Leh Ladakh holidays to the Land of High Passes in just a few clicks."
        customKeywords={["Leh Ladakh packages", "Ladakh tour packages", "Leh tour", "Nubra Valley", "Pangong Lake", "Tso Moriri", "Ladakh holiday packages"]}
        customImage={bannerimage}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Leh Ladakh Tour Packages",
            "description": "Explore the hand-picked selection of Leh Ladakh tour packages on Travel Wiki. Book thrilling and unforgettable Leh Ladakh holidays to the Land of High Passes.",
            "image": bannerimage,
            "url": "https://travelwiki.org.in/ladakh-packages",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Ladakh Tour Packages Collection",
              "numberOfItems": ladakhPackages.length,
              "itemListElement": ladakhPackages.slice(0, 5).map((pkg, index) => ({
                "@type": "TouristTrip",
                "position": index + 1,
                "name": pkg.title,
                "description": pkg.description,
                "offers": {
                  "@type": "Offer",
                  "price": pkg.price.toString(),
                  "priceCurrency": "INR"
                }
              }))
            },
            "provider": {
              "@type": "TravelAgency",
              "name": "Travel Wiki",
              "url": "https://travelwiki.org.in",
              "telephone": "+91 8899971960"
            }
          })}
        </script>
      </SEO>

      {/* Banner */}
      <div className="relative">
        <OptimizedImage
          src={bannerimage}
          alt="Leh Ladakh"
          width={1920}
          height={500}
          className="w-full h-[500px] object-cover"
          sizes="100vw"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Leh Ladakh Packages
            </h1>
            <p className="text-xl">Discover the Land of High Passes</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Leh Ladakh Tour Packages
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Explore the hand-picked selection of{" "}
            <strong>Leh Ladakh tour packages</strong> on Travel Wiki below, and
            book thrilling and unforgettable Leh Ladakh holidays to the Land of
            High Passes in just a few clicks. At Travel Wiki, we provide a
            diverse range of tour packages to Leh Ladakh for an ultimate
            Himalayan getaway. Our travel experts have curated Ladakh Leh
            holiday packages with suitable activities and attractions, promising
            a delightful Ladakh tour.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Whether you want to go on a Leh Ladakh honeymoon, a family holiday
            or adventure trip with friends, our Leh Ladakh holiday packages have
            you covered. Experience the natural splendour of snow-clad
            mountains, serene valleys and tranquillity of Pangong lake on your
            Ladakh holiday package. Visit the popular tourist places with Leh
            Ladakh tour package holidays. The top Ladakh places for tourists
            include Leh Palace, Hemis monastery, Thiksey monastery, and Shanti
            Stupa. Explore the enigmatic Magnetic Hill, the picturesque Nubra
            valley and Dha-Hanu Valley. With our best{" "}
            <strong>Leh Ladakh tour packages</strong>, adventure seekers can
            enjoy white water rafting at the Indus and Zanskar rivers, camel
            safari, trekking and more.
          </p>
        </div>

        {/* Filter and Sort */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Filter Packages
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          >
            <option value="">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="duration-short">Duration: Short to Long</option>
            <option value="duration-long">Duration: Long to Short</option>
          </select>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPackages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {/* No Results */}
        {sortedPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No packages found matching your filters.
            </p>
            <button
              onClick={() =>
                setFilters({
                  categories: [],
                  inclusions: [],
                  destinations: [],
                })
              }
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Filter Modal */}
      <FilterSection
        filters={filters}
        setFilters={setFilters}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
      />

      {/* Bottom Sections */}
      <ItineraryAccordion />
      <FaqSection />
      <WhyLadakhTourism />

      {/* Package Sections */}
      <BestsellerKashmirTours />
      <KashmirFamilyPackages />
      <HoneymoonSpecial />
      <KashmirExcursionsSpecial />
      <KashmirAdventureWinter />
      <KashmirCulturalToursAndPackages />
    </>
  );
};

export default LehLadakhPackages;
