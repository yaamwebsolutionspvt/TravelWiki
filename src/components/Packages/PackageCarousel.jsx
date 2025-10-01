import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";

const PackageCarousel = ({
  title,
  subtitle,
  packages,
  sectionBgColor = "bg-gray-900",
  textColor = "text-white",
  subtitleColor,
  expandedContent
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine cards to show based on screen size
  const getVisibleCount = () => {
    if (windowWidth < 768) return 1; // Mobile: 1 card
    if (windowWidth < 1024) return 2; // Tablet: 2 cards
    return 4; // Desktop: 4 cards
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, packages.length - visibleCount);

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setStartIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    if (startIndex + visibleCount < packages.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const visiblePackages = packages.slice(startIndex, startIndex + visibleCount);

  // Responsive card width based on screen size
  const getCardWidth = () => {
    if (windowWidth < 768) return "w-full max-w-sm mx-auto";
    if (windowWidth < 1024) return "w-[280px]";
    return "w-[270px]";
  };

  const PackageCard = ({ pkg }) => {
    const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

    const CardContent = () => (
      <div className={`bg-white text-black rounded-lg shadow-md ${getCardWidth()} flex-shrink-0 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300`}>
        <div className="relative">
          <OptimizedImage 
            src={pkg.image}
            alt={pkg.title}
            width={400}
            height={200}
            className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
            decoding="async"
          />
          {/* Duration badge positioned on the image */}
          <div className="absolute top-2 left-2 text-xs bg-black text-white inline-block px-2 py-1 rounded">{pkg.duration}</div>
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="font-semibold text-sm sm:text-base mb-2 leading-tight line-clamp-2">{pkg.title}</h3>
          
          <div className="grid grid-cols-2 gap-1 text-xs text-gray-600 mb-2">
            <span className="flex items-center"><span className="mr-1">✈️</span> {pkg.flights} Flights</span>
            <span className="flex items-center"><span className="mr-1">🏨</span> {pkg.hotels} Hotels</span>
            <span className="flex items-center"><span className="mr-1">🎯</span> {pkg.activities} Activities</span>
            <span className="flex items-center"><span className="mr-1">🚗</span> {pkg.transfers} Transfers</span>
          </div>

          {/* Location Info - flexible for both nights and places */}
          {pkg.nights && (
            <div className="text-xs bg-gray-200 inline-block px-2 py-1 rounded mb-2 truncate max-w-full">
              {pkg.nights}
            </div>
          )}
          
          {pkg.places && (
            <div className="flex flex-wrap gap-1 mb-2">
              {pkg.places.map((place, i) => (
                <span key={i} className="bg-gray-100 px-1 py-1 rounded text-xs text-gray-700">
                  {place}
                </span>
              ))}
            </div>
          )}

          <ul className="list-disc list-inside text-xs text-gray-700 mb-2 space-y-1">
            {pkg.highlights.map((item, idx) => (
              <li key={idx} className="line-clamp-1">{item}</li>
            ))}
          </ul>
          
          <div className="text-base sm:text-lg font-bold text-black mb-1">
            ₹{pkg.price.toLocaleString()}{" "}
            <span className="text-xs text-gray-500">Per person</span>
          </div>
          
          <div className="text-green-600 text-sm font-semibold mb-2">
            <span className="line-through text-gray-400 mr-2">₹{pkg.originalPrice.toLocaleString()}</span>
            {discount}% OFF
          </div>
          
          <p className="text-xs text-gray-500 mb-3">Updated on: {pkg.updatedDate}</p>
          
          <button 
            onClick={() => {
              const url = `https://wa.me/918899971960?text=${encodeURIComponent(`Hi, I am interested in the ${pkg.title} from Travel Wiki.`)}`;
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Book Now on WhatsApp
          </button>
        </div>
      </div>
    );

    return pkg.link ? (
      <Link to={pkg.link} className="block">
        <CardContent />
      </Link>
    ) : (
      <CardContent />
    );
  };

  return (
    <section className={`${sectionBgColor} py-6 sm:py-8 md:py-12 ${textColor}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 px-2">
          {title}
        </h2>
        {subtitle && (
          <div className="max-w-4xl mx-auto mb-8 px-4 text-center">
            <p className={`text-sm sm:text-base md:text-lg ${
              subtitleColor ? subtitleColor : 
              (sectionBgColor.includes('gray-900') || sectionBgColor.includes('blue-900') || sectionBgColor.includes('blue-500') || sectionBgColor.includes('black')) 
                ? 'text-gray-300' 
                : 'text-gray-700'
            } mb-4`}>
              {subtitle}
            </p>
            
            {expandedContent && (
              <>
                {!isExpanded && (
                  <button 
                    onClick={toggleExpanded}
                    className={`font-semibold hover:underline text-lg ${
                      sectionBgColor.includes('gray-900') || sectionBgColor.includes('blue-900') || sectionBgColor.includes('blue-500') || sectionBgColor.includes('black')
                        ? 'text-orange-400 hover:text-orange-300'
                        : 'text-orange-600 hover:text-orange-500'
                    }`}
                  >
                    More ↓
                  </button>
                )}

                {isExpanded && (
                  <div className="mt-6">
                    <div className={`text-sm sm:text-base md:text-lg leading-relaxed space-y-4 text-left ${
                      subtitleColor ? subtitleColor : 
                      (sectionBgColor.includes('gray-900') || sectionBgColor.includes('blue-900') || sectionBgColor.includes('blue-500') || sectionBgColor.includes('black')) 
                        ? 'text-gray-300' 
                        : 'text-gray-700'
                    }`}>
                      {expandedContent}
                    </div>
                    <div className="mt-6 text-center">
                      <button 
                        onClick={toggleExpanded}
                        className={`font-semibold hover:underline text-lg ${
                          sectionBgColor.includes('gray-900') || sectionBgColor.includes('blue-900') || sectionBgColor.includes('blue-500') || sectionBgColor.includes('black')
                            ? 'text-orange-400 hover:text-orange-300'
                            : 'text-orange-600 hover:text-orange-500'
                        }`}
                      >
                        Less ↑
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
        
        {/* Desktop and Tablet Layout */}
        <div className="hidden sm:block relative">
          {maxIndex > 0 && (
            <>
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-300 ${
                  startIndex === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                aria-label="Previous tours"
              >
                <FaChevronLeft size={windowWidth < 1024 ? 16 : 18} />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + visibleCount >= packages.length}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-300 ${
                  startIndex + visibleCount >= packages.length
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                aria-label="Next tours"
              >
                <FaChevronRight size={windowWidth < 1024 ? 16 : 18} />
              </button>
            </>
          )}
          
          <div className="overflow-hidden mx-8">
            <div className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out">
              {visiblePackages.map((pkg, idx) => (
                <PackageCard key={idx} pkg={pkg} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="relative">
            {maxIndex > 0 && (
              <>
                <button
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-300 ${
                    startIndex === 0 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                  aria-label="Previous tour"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={startIndex + 1 >= packages.length}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-300 ${
                    startIndex + 1 >= packages.length
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                  aria-label="Next tour"
                >
                  <FaChevronRight size={14} />
                </button>
              </>
            )}
            
            <div className="overflow-hidden mx-8">
              <div className="flex transition-transform duration-500 ease-in-out">
                {visiblePackages.map((pkg, idx) => (
                  <PackageCard key={idx} pkg={pkg} />
                ))}
              </div>
            </div>
          </div>
          
          {maxIndex > 0 && (
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: packages.length }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setStartIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    startIndex === index
                      ? (sectionBgColor.includes('gray-900') || sectionBgColor.includes('blue-900') || sectionBgColor.includes('blue-500') || sectionBgColor.includes('black') ? 'bg-white' : 'bg-orange-500')
                      : '0 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to tour ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PackageCarousel;