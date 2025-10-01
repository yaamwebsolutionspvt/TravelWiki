import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { FaMountain, FaMapMarkerAlt, FaCalendarAlt, FaWalking, FaMap, FaSnowflake } from 'react-icons/fa';

const TourGuideDropdown = ({ isMobile = false, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState([]);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const sections = [
    {
      title: "Places To Visit",
      icon: <FaMap className="inline mr-2 text-green-500" />,
      items: [
        { name: "Kashmir", route: "/places-to-visit-in-kashmir" },
        { name: "Srinagar", route: "/places-to-visit-in-srinagar" },
        { name: "Gulmarg", route: "/places-to-visit-in-gulmarg" },
        { name: "Pahalgam", route: "/places-to-visit-in-pahalgam" },
        { name: "Sonamarg", route: "/places-to-visit-in-sonamarg" },
        { name: "Ladakh", route: "/places-to-visit-in-ladakh" }
      ]
    },
    {
      title: "Things To Do",
      icon: <FaWalking className="inline mr-2 text-orange-500" />,
      items: [
        { name: "Kashmir", route: "/things-to-do-in-kashmir" },
        { name: "Gulmarg", route: "/things-to-do-in-gulmarg" },
        { name: "Pahalgam", route: "/things-to-do-in-pahalgam" },
        { name: "Sonamarg", route: "/things-to-do-in-sonamarg" },
        { name: "Ladakh", route: "/things-to-do-in-ladakh" }
      ]
    },
    {
      title: "How To Reach",
      icon: <FaMapMarkerAlt className="inline mr-2 text-blue-500" />,
      items: [
        { name: "Kashmir", route: "/how-to-reach-kashmir" },
        { name: "Srinagar", route: "/how-to-reach-srinagar" },
        { name: "Gulmarg", route: "/how-to-reach-gulmarg" },
        { name: "Pahalgam", route: "/how-to-reach-pahalgam" },
        { name: "Sonamarg", route: "/how-to-reach-sonamarg" },
        { name: "Ladakh", route: "/how-to-reach-ladakh" },
        { name: "Gurez Valley", route: "/how-to-reach-gurez-valley" }
      ]
    },
    {
      title: "Best Time To Visit",
      icon: <FaCalendarAlt className="inline mr-2 text-purple-500" />,
      items: [
        { name: "Kashmir", route: "/best-time-to-visit-kashmir" },
        { name: "Srinagar", route: "/best-time-to-visit-srinagar" },
        { name: "Gulmarg", route: "/best-time-to-visit-gulmarg" },
        { name: "Pahalgam", route: "/best-time-to-visit-pahalgam" },
        { name: "Sonamarg", route: "/best-time-to-visit-sonamarg" },
        { name: "Ladakh", route: "/best-time-to-visit-ladakh" }
      ]
    },
    {
      title: "Kashmir By Months",
      icon: <FaSnowflake className="inline mr-2 text-cyan-500" />,
      items: [
        { name: "January", route: "/kashmir-in-january" },
        { name: "February", route: "/kashmir-in-february" },
        { name: "March", route: "/kashmir-in-march" },
        { name: "April", route: "/kashmir-in-april" },
        { name: "May", route: "/kashmir-in-may" },
        { name: "June", route: "/kashmir-in-june" },
        { name: "July", route: "/kashmir-in-july" },
        { name: "August", route: "/kashmir-in-august" },
        { name: "September", route: "/kashmir-in-september" },
        { name: "October", route: "/kashmir-in-october" },
        { name: "November", route: "/kashmir-in-november" },
        { name: "December", route: "/kashmir-in-december" }
      ]
    },
    {
      title: "Weather Guide",
      icon: <FaSnowflake className="inline mr-2 text-cyan-500" />,
      items: [
        { name: "January Weather", route: "/kashmir-weather-in-january" },
        { name: "February Weather", route: "/kashmir-weather-in-february" },
        { name: "March Weather", route: "/kashmir-weather-in-march" },
        { name: "April Weather", route: "/kashmir-weather-in-april" },
        { name: "May Weather", route: "/kashmir-weather-in-may" },
        { name: "June Weather", route: "/kashmir-weather-in-june" },
        { name: "July Weather", route: "/kashmir-weather-in-july" },
        { name: "August Weather", route: "/kashmir-weather-in-august" },
        { name: "September Weather", route: "/kashmir-weather-in-september" },
        { name: "October Weather", route: "/kashmir-weather-in-october" },
        { name: "November Weather", route: "/kashmir-weather-in-november" },
        { name: "December Weather", route: "/kashmir-weather-in-december" }
      ]
    }
  ];

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

  // Handle mouse enter with delay for desktop - optimized for accessibility
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1280 && !isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
      setExpandedSections([0, 1, 2, 3, 4, 5]);
    }
  };

  // Handle mouse leave with delay for desktop - optimized for accessibility
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1280 && !isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
        setExpandedSections([]);
      }, 200); // Reduced delay for better responsiveness
    }
  };

  const toggleDropdown = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setExpandedSections([0, 1, 2, 3, 4, 5]);
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
        aria-controls="tour-guide-dropdown"
        role="button"
        tabIndex={0}
      >
        Tour Guide 
        <span className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          {isMobile ? '▸' : '▾'}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div 
        id="tour-guide-dropdown"
        role="menu"
        aria-label="Tour Guide Menu"
        className={`${
          isMobile 
            ? `mt-2 ${isOpen ? 'block' : 'hidden'}` 
            : `absolute left-1/2 -translate-x-1/2 z-50 mt-2 transition-all duration-200 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`
        } bg-white shadow-xl rounded-lg border border-gray-100 ${
          isMobile 
            ? 'w-full' 
            : 'w-[320px] sm:w-[400px] md:w-[700px] lg:w-[900px] xl:w-[1100px]'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${isMobile ? 'p-2' : 'p-3 md:p-4 lg:p-6'} ${
          isMobile ? 'max-h-[500px]' : 'max-h-[600px]'
        } overflow-y-auto`}>
          <div className={`grid gap-2 md:gap-3 ${
            isMobile 
              ? 'grid-cols-1' 
              : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'
          }`}>
            {sections.map((section, index) => (
              <div key={index} className="min-w-0">
                <button
                  className={`w-full text-left font-semibold text-green-700 mb-1 text-sm md:text-base hover:text-green-800 transition-colors duration-200 flex items-center justify-between py-1 px-2 rounded hover:bg-green-50 ${
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
                    {section.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.route}
                          className="hover:text-green-600 block transition-colors duration-200 py-0.5 px-1 rounded hover:bg-green-50 font-medium text-blue-600"
                          onClick={handleLinkClick}
                        >
                          {section.icon} {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuideDropdown;