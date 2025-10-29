import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const sonamargTourPackageImage = "https://res.cloudinary.com/dw1sh368y/image/upload/v1759906649/Sonmarg_Cultural_Natural_Heritage_crdaj5.webp";

// Custom scrollbar styles
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #F3F4F6;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #10B981;
    border-radius: 10px;
    transition: background-color 0.2s ease;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #059669;
  }
  
  .dropdown-item {
    transition: all 0.2s ease;
    transform: translateX(0);
  }
  
  .dropdown-item:hover {
    transform: translateX(2px);
    background: linear-gradient(90deg, #F0FDF4 0%, #ECFDF5 100%);
  }
  
  .scroll-fade-top {
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  }
  
  .scroll-fade-bottom {
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  }
`;

// Add styles to head if not already added
if (typeof document !== 'undefined' && !document.getElementById('dropdown-scrollbar-styles')) {
  const style = document.createElement('style');
  style.id = 'dropdown-scrollbar-styles';
  style.textContent = scrollbarStyles;
  document.head.appendChild(style);
}

const DropdownMenu = ({ isMobile = false, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollFades, setShowScrollFades] = useState({ top: false, bottom: false });
  const [dropdownPosition, setDropdownPosition] = useState({ left: '50%', transform: 'translateX(-50%)' });
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const timeoutRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Calculate dropdown position based on button position
  const calculateDropdownPosition = () => {
    if (buttonRef.current && !isMobile) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const buttonCenter = buttonRect.left + buttonRect.width / 2;
      const dropdownWidth = 800; // Approximate width for large screens
      const leftPosition = buttonCenter - dropdownWidth / 2;
      
      // Ensure dropdown doesn't go off-screen
      const maxLeft = window.innerWidth - dropdownWidth - 20; // 20px margin
      const finalLeft = Math.max(20, Math.min(leftPosition, maxLeft));
      
      setDropdownPosition({
        left: `${finalLeft}px`,
        transform: 'none'
      });
    }
  };

  // Update position when dropdown opens
  useEffect(() => {
    if (isOpen && !isMobile) {
      calculateDropdownPosition();
    }
  }, [isOpen, isMobile]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && !isMobile) {
        calculateDropdownPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, isMobile]);
  const getRouteForItem = (sectionTitle, itemName) => {
    const routeMap = {
      "Kashmir Best Sellers": {
        "Quick Kashmir Getaway: 3 Nights in the Valley": "/packages/3-nights-4-days-srinagar-pahalgam-gulmarg-tour",
        "4N Kashmir Magic Tour – Lakes, Gardens & Meadows (4 Nights)": "/packages/magical-kashmir-tour",
        "5 Nights Exotic Kashmir Holiday – Lakes & Meadows": "/packages/kashmir-exotic-tour",
        "Kashmir Grand Discovery: 6 Nights Scenic Expedition": "/packages/magnificent-kashmir-valley-tour",
        "Marvelous Kashmir: 7 Nights Grand Holiday": "/packages/week-long-holiday-kashmir",
        "3 Nights Kashmir Valley Tour – Srinagar & Gulmarg": "/packages/kashmir-valley-tour",
        "Gurez Valley Tour (3 Nights)": "/packages/gurez-valley-tour",
        "Kashmir with Gurez Valley Tour (5 Nights)": "/packages/kashmir-with-gurez-valley-tour",
        "Kashmir Offbeat with Gurez (7 Nights)": "/packages/kashmir-offbeat-with-gurez",
        "True Gems Of Kashmir Valley (8 Nights)": "/packages/true-gems-of-kashmir-valley",
        "Kashmir with Kargil (6 Nights)": "/packages/kashmir-with-kargil",
        "Srinagar Tour Packages": "/packages/srinagar-tour-package",
        "Gulmarg Tour Packages": "/packages/kashmir-gulmarg-tour",
        "Pahalgam Tour Packages": "/packages/kashmir-pahalgam-tour",
        "Sonamarg Tour Packages": "/leh-packages/unforgettable-ladakh-tour-package-with-sonamarg-stay",
        "Ladakh Tour Packages": "/leh-ladakh-packages",
        "View All Kashmir Tour": "/packages-listing"
      },
      "Kashmir Tours By Duration": {
        "4 Nights / 5 Days": "/packages/magical-kashmir-tour",
        "5 Nights / 6 Days": "/packages/kashmir-exotic-tour",
        "6 Nights / 7 Days": "/packages/magnificent-kashmir-valley-tour",
        "7 Nights / 8 Days": "/packages/week-long-holiday-kashmir",
        "8 Nights / 9 Days": "/packages/true-gems-of-kashmir-valley",
        "View All": "/packages-listing"
      },
      "Kashmir Honeymoon Packages": {
        "3 Nights Kashmir Family Tour – Fun & Nature Escape": "/packages/glimpses-of-family-tour",
        "4N Kashmir Magic Tour – Lakes, Gardens & Meadows (4 Nights)": "/packages/honeymoon-magical-kashmir-tour",
        "Kashmir Bestseller Tour – 5 Nights Classic Itinerary": "/packages/best-selling-kashmir-tour",
        "Beautiful Kashmir Tour – 6 Nights Valley Discovery": "/packages/scenic-kashmir-tour",
        "Grand Kashmir Tour – 7 Nights Valley Experience": "/packages/kashmir-marvelous-tour",
        "Kashmir Refreshing Tour (3 Nights)": "/packages/kashmir-refreshing-tour",
        "View All Kashmir Honeymoon Packages": "/packages-listing"
      }
    };
    
    return routeMap[sectionTitle] && routeMap[sectionTitle][itemName] 
      ? routeMap[sectionTitle][itemName] 
      : null;
  };

  const sections = [
    {
      title: "Kashmir Best Sellers",
      items: [
        "Quick Kashmir Getaway: 3 Nights in the Valley",
        "4N Kashmir Magic Tour – Lakes, Gardens & Meadows (4 Nights)",
        "5 Nights Exotic Kashmir Holiday – Lakes & Meadows",
        "Kashmir Grand Discovery: 6 Nights Scenic Expedition",
        "Marvelous Kashmir: 7 Nights Grand Holiday",
        "3 Nights Kashmir Valley Tour – Srinagar & Gulmarg",
        "Gurez Valley Tour (3 Nights)",
        "Kashmir with Gurez Valley Tour (5 Nights)",
        "Kashmir Offbeat with Gurez (7 Nights)",
        "True Gems Of Kashmir Valley (8 Nights)",
        "Kashmir with Kargil (6 Nights)",
        "Srinagar Tour Packages",
        "Gulmarg Tour Packages",
        "Pahalgam Tour Packages",
        "Sonamarg Tour Packages",
        "Ladakh Tour Packages",
        "View All Kashmir Tour",
      ],
    },
    {
      title: "Kashmir Tours By Duration",
      items: [
        "4 Nights / 5 Days",
        "5 Nights / 6 Days",
        "6 Nights / 7 Days",
        "7 Nights / 8 Days",
        "8 Nights / 9 Days",
        "View All",
      ],
    },
    {
      title: "Kashmir Honeymoon Packages",
      items: [
        "3 Nights Kashmir Family Tour – Fun & Nature Escape",
        "4N Kashmir Magic Tour – Lakes, Gardens & Meadows (4 Nights)",
        "Kashmir Bestseller Tour – 5 Nights Classic Itinerary",
        "Beautiful Kashmir Tour – 6 Nights Valley Discovery",
        "Grand Kashmir Tour – 7 Nights Valley Experience",
        "Kashmir Refreshing Tour (3 Nights)",
        "View All Kashmir Honeymoon Packages",
      ],
    },
  ];

  // Handle scroll position and fade effects
  const handleScroll = (e) => {
    const container = e.target;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;

    setScrollPosition(scrollTop);
    setShowScrollFades({
      top: scrollTop > 10,
      bottom: scrollTop < (scrollHeight - clientHeight - 10)
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setExpandedSections([]);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setExpandedSections([]);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  // Handle mouse enter with delay for desktop only
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1280) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
      setExpandedSections([0, 1, 2]);
    }
  };

  // Handle mouse leave with delay for desktop only
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1280) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
        setExpandedSections([]);
      }, 300); // Reduced delay for better responsiveness
    }
  };

  const toggleDropdown = () => {
    if (window.innerWidth < 1280) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setExpandedSections([0, 1, 2]);
      } else {
        setExpandedSections([]);
      }
    }
  };

  const toggleSection = (index) => {
    if (isMobile) {
      setExpandedSections(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setExpandedSections([]);
    if (onClose) onClose();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        className={`text-gray-800 hover:text-green-600 font-medium flex items-center transition-colors duration-200 ${
          isMobile 
            ? 'w-full text-left py-2 px-2 rounded hover:bg-gray-50' 
            : 'text-sm lg:text-base px-2 py-1 rounded hover:bg-gray-50'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Kashmir Tour Packages 
        <span className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          {isMobile ? '▸' : '▾'}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`${
          isMobile 
            ? `mt-2 ${isOpen ? 'block' : 'hidden'}` 
            : `absolute z-50 mt-2 transition-all duration-200 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`
        } bg-white shadow-xl rounded-lg border border-gray-100 ${
          isMobile 
            ? 'w-full' 
            : 'w-[320px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[900px]'
        }`}
        style={!isMobile ? dropdownPosition : {}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={scrollContainerRef}
          className={`${isMobile ? 'p-2' : 'p-2 md:p-3 lg:p-4'} ${
            isMobile ? 'max-h-[500px]' : 'max-h-[600px]'
          } overflow-y-auto scroll-smooth custom-scrollbar relative`} 
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#10B981 #F3F4F6'
          }}
          onScroll={handleScroll}
        >
          {/* Scroll fade effects */}
          {!isMobile && showScrollFades.top && (
            <div className="absolute top-0 left-0 right-0 h-4 scroll-fade-top pointer-events-none z-10"></div>
          )}
          {!isMobile && showScrollFades.bottom && (
            <div className="absolute bottom-0 left-0 right-0 h-4 scroll-fade-bottom pointer-events-none z-10"></div>
          )}
          <div className={`grid gap-2 md:gap-3 ${
            isMobile 
              ? 'grid-cols-1' 
              : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {sections.map((section, index) => (
              <div key={index}>
                <button
                  className={`w-full text-left font-semibold text-green-700 mb-1 text-sm md:text-base hover:text-green-800 transition-colors duration-200 flex items-center justify-between py-1 px-3 rounded hover:bg-green-50 ${
                    !isMobile ? 'md:cursor-default md:hover:bg-transparent' : ''
                  }`}
                  onClick={() => toggleSection(index)}
                  aria-expanded={isMobile ? expandedSections.includes(index) : true}
                >
                  {section.title}
                  {isMobile && (
                    <span className={`transition-transform duration-200 ${
                      expandedSections.includes(index) ? 'rotate-90' : ''
                    }`}>
                      ▸
                    </span>
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isMobile 
                    ? (expandedSections.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0')
                    : 'max-h-[500px] opacity-100'
                }`}>
                  <ul className="space-y-0.5 md:space-y-1 text-xs md:text-sm text-gray-700 pl-1">
                    {section.items.map((item, idx) => {
                      const route = getRouteForItem(section.title, item);
                      
                      return (
                        <li key={idx}>
                          {route ? (
                            <Link
                              to={route}
                              className="dropdown-item hover:text-green-600 block transition-colors duration-200 py-0.5 px-1 rounded hover:bg-green-50 font-medium text-blue-600 group"
                              onClick={handleLinkClick}
                            >
                              {item}
                            </Link>
                          ) : (
                            <Link
                              to="/packages-listing"
                              className="dropdown-item hover:text-green-600 block transition-colors duration-200 py-0.5 px-1 rounded hover:bg-green-50 font-medium text-blue-600 group"
                              onClick={handleLinkClick}
                            >
                              {item}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator for more content */}
          {!isMobile && showScrollFades.bottom && (
            <div className="text-center py-2">
              <div className="inline-flex items-center text-xs text-gray-500 animate-bounce">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
                More items below
              </div>
            </div>
          )}

          {/* View All Packages Section */}
          {!isMobile && (
            <div className="border-t border-gray-200 mt-2 pt-2 text-center">
              <Link
                to="/packages-listing"
                className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={handleLinkClick}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                View All Packages
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
