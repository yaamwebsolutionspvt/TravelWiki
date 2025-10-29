import React, { useState } from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";
import DropdownMenu from "./DropdownMenu";
import TourGuideDropdown from "./TourGuideDropdown";
const logo = "/logo.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6 py-3">
        {/* Top bar with logo, hamburger, and contact */}
        <div className="flex justify-between items-center gap-2 md:gap-4">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-2 flex-shrink-0 bg-transparent">
              <OptimizedImage
                src={logo}
                alt="Travel-Wiki-logo"
                width={128}
                height={128}
                className="h-14 md:h-16 lg:h-18 w-auto bg-transparent"
                sizes="(max-width: 768px) 120px, 160px"
                loading="eager"
                decoding="async"
              />
              <div>
                <span className="text-[#059669] font-bold text-base md:text-lg lg:text-3xl">
                  Travel
                </span>
                <span className="text-yellow-600 font-semibold text-xs md:text-sm lg:text-xl block -mt-1 ml-2 md:ml-3 lg:ml-8">
                  Wiki
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-3 lg:space-x-6 font-medium text-gray-800 items-center">
            {/* <Link
              to="/"
              className="hover:text-green-600 transition-colors text-sm lg:text-base"
            >
              Home
            </Link> */}
            <DropdownMenu />
            <TourGuideDropdown />
            <Link
              to="/packages-listing"
              className="hover:text-green-600 transition-colors text-sm lg:text-base"
            >
              All Packages
            </Link>
            <Link
              to="/leh-ladakh-packages"
              className="hover:text-green-600 transition-colors text-sm lg:text-base"
            >
              Ladakh Packages
            </Link>
            <Link
              to="/about-us"
              className="hover:text-green-600 transition-colors text-sm lg:text-base"
            >
              About Us
            </Link>
          </nav>

          {/* Right side - Contact & Hamburger */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            {/* Contact - Progressive showing */}
            <div className="hidden sm:block md:hidden lg:block text-xs lg:text-sm font-semibold text-gray-800">
              📞 +91 8899971960
            </div>
            <Link to='/contact'


              className="hidden sm:block bg-red-500 text-white px-2 md:px-3 lg:px-4 py-2 rounded hover:bg-red-600 text-xs md:text-sm whitespace-nowrap"
            >
              Enquiry Now

            </Link>

            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-8 h-8 text-gray-800 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

       
        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
              ? "max-h-[90vh] opacity-100 overflow-y-auto bg-white shadow-lg"
              : "max-h-0 opacity-0 overflow-hidden bg-transparent"
            }`}
        >
          <nav className="pt-4 pb-4 space-y-2 border-t border-gray-200 mt-3 px-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-base font-medium"
            >
              About Us
            </Link>
            <div className="px-1 py-1">
              <DropdownMenu isMobile={true} onClose={() => setIsMenuOpen(false)} />
            </div>
            <div className="px-1 py-1">
              <TourGuideDropdown isMobile={true} onClose={() => setIsMenuOpen(false)} />
            </div>
            <Link
              to="/packages-listing"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-base font-medium"
            >
              All Packages
            </Link>
            <Link
              to="/leh-ladakh-packages"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-base font-medium"
            >
              Ladakh Packages
            </Link>
            {/* Mobile contact info and enquiry button */}
            <div className="sm:hidden px-2 py-2 text-sm text-gray-600 border-t border-gray-100 mt-3 pt-3 text-center">
              📞 +91 8899971960
            </div>
            <div className="sm:hidden px-2 py-2">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm text-center"
              >
                Enquiry Now
              </Link>
            </div>
          </nav>
        </div>

      </div>
    </header >
  );
}