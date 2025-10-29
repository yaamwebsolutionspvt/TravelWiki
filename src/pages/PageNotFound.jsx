import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, MapPin, Phone, Mail, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import SEO from '../components/SEO';

const PageNotFound = () => {
  const quickLinks = [
    { 
      to: "/", 
      label: "Home", 
      icon: Home,
      description: "Return to homepage"
    },
    { 
      to: "/packages-listing", 
      label: "Tour Packages", 
      icon: Package,
      description: "Browse all packages"
    },
    { 
      to: "/places-to-visit", 
      label: "Places to Visit", 
      icon: MapPin,
      description: "Explore destinations"
    },
    { 
      to: "/leh-ladakh-packages", 
      label: "Ladakh Tours", 
      icon: Mountain,
      description: "Adventure packages"
    },
  ];

  return (
    <>
      <SEO 
        customTitle="404 - Page Not Found | Kashmir Tourism"
        customDescription="The page you're looking for doesn't exist. Explore our Kashmir tour packages and travel guides."
      />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          <div className="shadow-xl rounded-2xl p-8 md:p-12 text-center bg-white">
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-blue-700 mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              404
            </motion.h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Page Not Found
            </h2>
            
            <p className="text-gray-600 mb-8 text-base md:text-lg">
              The page you're looking for doesn't exist or has been moved. 
              Let us help you find your way back to paradise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Link to={link.to}>
                    <div className="flex items-start gap-3 p-4 rounded-xl border-2 border-blue-100 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 text-left group">
                      <link.icon className="w-6 h-6 text-blue-600 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold text-gray-800 group-hover:text-blue-700">
                          {link.label}
                        </div>
                        <div className="text-sm text-gray-500">
                          {link.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="border-t pt-6 mt-6">
              <p className="text-gray-700 font-medium mb-3">Need Assistance?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm">
                <a 
                  href="tel:+918899971960" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                >
                  <Phone size={16} />
                  <span>+91 8899971960</span>
                </a>
                <span className="hidden sm:inline text-gray-300">|</span>
                <a 
                  href="mailto:info@travelwiki.org.in" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                >
                  <Mail size={16} />
                  <span>info@travelwiki.org.in</span>
                </a>
              </div>
            </div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Take Me Home
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PageNotFound;
