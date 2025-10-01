// components/TourCarousel.jsx
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TourCarousel = ({ items, renderItem }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const getVisibleCount = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 4;
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, items.length - visibleCount);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setStartIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  const handlePrev = () => setStartIndex(prev => Math.max(prev - 1, 0));
  const handleNext = () => setStartIndex(prev => (prev + visibleCount < items.length ? prev + 1 : prev));

  return (
    <div className="relative">
      {maxIndex > 0 && (
        <>
          <button onClick={handlePrev} disabled={startIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full ${
              startIndex === 0 ? 'bg-gray-300 text-gray-500' : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}>
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} disabled={startIndex + visibleCount >= items.length}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full ${
              startIndex + visibleCount >= items.length ? 'bg-gray-300 text-gray-500' : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}>
            <FaChevronRight />
          </button>
        </>
      )}

      <div className="overflow-hidden mx-8">
        <div className="flex gap-4 transition-transform duration-500 ease-in-out">
          {visibleItems.map((item, index) => (
            <div key={index} className="flex-1">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourCarousel;