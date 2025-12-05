import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import OptimizedImage from "../../components/OptimizedImage";

const bannerimage = "https://res.cloudinary.com/dw1sh368y/image/upload/v1759912426/Leh_to_Nubra_Valley_via_Khardung_La_Pass_n4gg1k.webp";

// All Ladakh package data with proper routing
const ladakhPackagesData = [
  {
    id: 1,
    title: "Classic Leh, Nubra Valley, Pangong, Tso Moriri & Hanle Holiday Package",
    duration: "9N / 10D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760701119/experience_the_ultimate_ladakh_adventure_tea2qw.webp",
    description: "Experience the ultimate Ladakh adventure covering all major destinations including Leh, Nubra Valley, Pangong Lake, Tso Moriri, and Hanle.",
    price: "42999",
    route: "/leh-ladakh-packages/classic-leh-nubra",
    highlights: ["Leh Palace", "Nubra Valley", "Pangong Lake", "Tso Moriri", "Hanle Observatory"],
    category: "Best Seller"
  },
  {
    id: 2,
    title: "Ladakh Tour Package With Kargil Stay",
    duration: "6N / 7D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760701121/ladakh_tour_package_with_kargil_kai8yb.webp",
    description: "Explore Ladakh with a stay in Kargil, covering Leh, Nubra Valley, and Pangong Lake with historical insights.",
    price: "25999",
    route: "/leh-ladakh-packages/with-kargil",
    highlights: ["Kargil War Memorial", "Leh Palace", "Nubra Valley", "Pangong Lake"],
    category: "Family/Leisure"
  },
  {
    id: 3,
    title: "Ladakh Getaway with Nubra & Pangong Stay",
    duration: "4N / 5D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760701130/Ladakh_Getway_with_Nubra_Pangong_jkk36a.webp",
    description: "Perfect short getaway to Ladakh covering the essential destinations of Leh, Nubra Valley, and Pangong Lake.",
    price: "18999",
    route: "/leh-ladakh-packages/getaway-nubra-pangong",
    highlights: ["Leh Palace", "Nubra Valley", "Pangong Lake", "Khardung La Pass"],
    category: "Best Seller"
  },
  {
    id: 4,
    title: "Breathtaking Ladakh with Turtuk & Pangong Excursion",
    duration: "5N / 6D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760701638/Breathtaking_ladakh_with_turtuk_tapabl.webp",
    description: "Discover the hidden gem of Turtuk along with the stunning Pangong Lake in this comprehensive Ladakh tour.",
    price: "21999",
    route: "/leh-ladakh-packages/breathtaking-turtuk",
    highlights: ["Turtuk Village", "Pangong Lake", "Nubra Valley", "Leh Palace"],
    category: "Family/Leisure"
  },
  {
    id: 5,
    title: "Jeep Safari Tour From Manali – Leh Ladakh – Manali",
    duration: "8N / 9D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760702352/Jeep_Safari_Tour_from_Manali_zzkltk.webp",
    description: "Epic road trip from Manali to Leh via the famous Manali-Leh highway with stops at Sarchu and Jispa.",
    price: "46999",
    route: "/leh-ladakh-packages/jeep-safari-manali",
    highlights: ["Manali-Leh Highway", "Sarchu", "Jispa", "Nubra Valley", "Pangong Lake"],
    category: "Jeep Safari"
  },
  {
    id: 6,
    title: "Budget Ladakh Tour Package",
    duration: "4N / 5D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760702817/Budget_Ladakh_Tour_Package_bbmamb.webp",
    description: "Affordable Ladakh tour covering Leh and Nubra Valley, perfect for budget-conscious travelers.",
    price: "15999",
    route: "/leh-ladakh-packages/budget",
    highlights: ["Leh Palace", "Nubra Valley", "Khardung La Pass", "Hemis Monastery"],
    category: "Budget"
  },
  {
    id: 7,
    title: "Unforgettable Ladakh Tour Package with Sonamarg Stay",
    duration: "7N / 8D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760702817/Budget_Ladakh_Tour_Package_bbmamb.webp",
    description: "Comprehensive tour starting from Sonamarg, covering the best of Kashmir and Ladakh in one package.",
    price: "35999",
    route: "/leh-ladakh-packages/unforgettable-sonamarg",
    highlights: ["Sonamarg", "Leh Palace", "Nubra Valley", "Pangong Lake"],
    category: "Family/Leisure"
  },
  {
    id: 8,
    title: "Kashmir and Ladakh Combo Package with Kargil Stay",
    duration: "8N / 9D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760705854/Kashmir_and_ladakh_combo_Package_wsowum.webp",
    description: "Ultimate combo package covering both Kashmir and Ladakh with a stay in Kargil for the complete experience.",
    price: "39999",
    route: "/leh-ladakh-packages/kashmir-combo-kargil",
    highlights: ["Srinagar", "Kargil", "Leh Palace", "Nubra Valley", "Pangong Lake"],
    category: "Combo"
  },
  {
    id: 9,
    title: "Highlights of Ladakh Package",
    duration: "3N / 4D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760705855/Highlights_of_Ladakh_Package_rsb7xy.webp",
    description: "Quick escape to Ladakh covering the essential highlights of Leh and Nubra Valley in a short duration.",
    price: "12999",
    route: "/leh-ladakh-packages/highlights",
    highlights: ["Leh Palace", "Nubra Valley", "Khardung La Pass"],
    category: "Quick Escape"
  },
  {
    id: 10,
    title: "Amazing Ladakh Tour with Nubra Stay",
    duration: "5N / 6D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760705857/Amazing_Ladakh_Tour_With_Nubra_Stay_h02hfj.webp",
    description: "Explore the beauty of Ladakh with extended stay in Nubra Valley for a deeper experience.",
    price: "22999",
    route: "/leh-ladakh-packages/amazing-nubra",
    highlights: ["Leh Palace", "Nubra Valley", "Camel Safari", "Khardung La Pass"],
    category: "Family/Leisure"
  },
  {
    id: 11,
    title: "Jeep Safari Tour Package from Manali to Leh Ladakh",
    duration: "6N / 7D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760705861/Jeep_Sarafi_Tour_Package_from_Manali_to_Leh_ghi93i.webp",
    description: "Adventure-packed jeep safari from Manali to Leh covering the scenic route with stops at key destinations.",
    price: "34999",
    route: "/leh-ladakh-packages/jeep-safari-manali-leh",
    highlights: ["Manali-Leh Highway", "Sarchu", "Leh Palace", "Nubra Valley", "Pangong Lake"],
    category: "Jeep Safari"
  },
  {
    id: 12,
    title: "Enthralling Ladakh Tour from Srinagar",
    duration: "6N / 7D",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1760705864/Enthralling_Ladakh_Tour_from_Srinagar_btjgeq.webp",
    description: "Start your Ladakh journey from Srinagar, covering Kargil, Leh, Nubra Valley, and Pangong Lake.",
    price: "27999",
    route: "/leh-ladakh-packages/from-srinagar",
    highlights: ["Srinagar", "Kargil", "Leh Palace", "Nubra Valley", "Pangong Lake"],
    category: "Family/Leisure"
  }
];

// Package Card Component
const PackageCard = ({ package: pkg }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="relative">
      <OptimizedImage
        src={pkg.image}
        alt={pkg.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.target.src = "https://res.cloudinary.com/dwlxh3G8y/travelwiki/image/upload/w_200,f_auto,q_auto/public/logo.png";
        }}
      />
      <div className="absolute top-3 left-3">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {pkg.category}
        </span>
      </div>
      <div className="absolute top-3 right-3">
        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {pkg.duration}
        </span>
      </div>
    </div>

    <div className="p-6">
      <Link to={pkg.route} className="block">
        <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 mb-3 line-clamp-2 transition-colors">
          {pkg.title}
        </h3>
      </Link>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {pkg.description}
      </p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
        <div className="flex flex-wrap gap-1">
          {pkg.highlights.slice(0, 3).map((highlight, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {highlight}
            </span>
          ))}
          {pkg.highlights.length > 3 && (
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              +{pkg.highlights.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold text-green-600">
          ₹{pkg.price}
          <span className="text-sm font-normal text-gray-500">/person</span>
        </div>
      </div>

      <Link
        to={pkg.route}
        className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium"
      >
        View Package Details
      </Link>
    </div>
  </div>
);

// Main Component
const LehLadakhPage = () => {
  return (
    <>
      <SEO
        pageType="ladakh"
        customTitle="Leh Ladakh Tour Packages - Book Online Starting ₹12,999"
        customDescription="Discover the best Leh Ladakh tour packages with Travel Wiki. From budget-friendly 3-day trips to comprehensive 10-day adventures covering Nubra Valley, Pangong Lake, and more. Book now!"
        customKeywords={["Leh Ladakh packages", "Ladakh tour packages", "Nubra Valley tour", "Pangong Lake tour", "Ladakh holiday packages", "Leh tour packages"]}
        customImage={bannerimage}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Leh Ladakh Tour Packages",
            "description": "Discover the best Leh Ladakh tour packages with Travel Wiki. From budget-friendly 3-day trips to comprehensive 10-day adventures covering Nubra Valley, Pangong Lake, and more.",
            "image": bannerimage,
            "url": "https://travelwiki.org.in/leh-ladakh-packages",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Ladakh Tour Packages Collection",
              "numberOfItems": ladakhPackagesData.length,
              "itemListElement": ladakhPackagesData.slice(0, 5).map((pkg, index) => ({
                "@type": "TouristTrip",
                "position": index + 1,
                "name": pkg.title,
                "description": pkg.description,
                "offers": {
                  "@type": "Offer",
                  "price": pkg.price,
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

      {/* Hero Banner */}
      <div className="relative">
        <OptimizedImage
          src={bannerimage}
          alt="Leh Ladakh Packages"
          width={1920}
          height={600}
          className="w-full h-[600px] object-cover"
          sizes="100vw"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Leh Ladakh Packages
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover the Land of High Passes with Our Curated Tour Packages
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Starting ₹12,999
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                12+ Packages
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Best Deals
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Explore Ladakh with Our Handpicked Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From budget-friendly quick escapes to comprehensive adventures, our Leh Ladakh tour packages
            are designed to give you the best experience of this mystical land. Whether you want to explore
            the serene Pangong Lake, ride camels in Nubra Valley, or witness the beauty of Tso Moriri,
            we have the perfect package for you.
          </p>
        </div>

        {/* Package Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Package Categories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Best Seller", "Family/Leisure", "Jeep Safari", "Budget", "Combo", "Quick Escape"].map((category) => (
              <span
                key={category}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ladakhPackagesData.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Explore Ladakh?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our travel experts to customize your perfect Ladakh adventure or get answers to any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918899971960"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Call Now: +91 8899971960
            </a>
            <a
              href="https://wa.me/918899971960"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LehLadakhPage;
