import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package } from "lucide-react";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="shadow-xl rounded-2xl p-8 max-w-md text-center bg-white">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
          <p className="text-gray-600 mb-6 text-lg">
            Oops! The page you are looking for doesn’t exist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button className="w-full sm:w-auto flex items-center gap-2 rounded-2xl px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition">
                <Home size={18} /> Go Home
              </button>
            </Link>

            <Link to="/packages-listing">
              <button className="w-full sm:w-auto flex items-center gap-2 rounded-2xl px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                <Package size={18} /> View Packages
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
