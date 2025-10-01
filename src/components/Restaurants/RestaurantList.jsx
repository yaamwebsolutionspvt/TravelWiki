import React from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "./restaurants";

const RestaurantList = () => {
  return (
    <section 
      className="py-12 px-4 max-w-7xl mx-auto"
      id="kashmir-restaurants"
      aria-labelledby="restaurants-heading"
      role="region"
    >
      <header className="text-center mb-12">
        <h3 
          id="restaurants-heading"
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
        >
          Best Kashmir Restaurants & Local Food Places
        </h3>
        <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">
          Discover authentic Kashmiri cuisine at the best restaurants in <Link to="/places-to-visit-in-srinagar" className="text-orange-600 hover:text-orange-800 underline">Srinagar</Link>, <Link to="/places-to-visit-in-gulmarg" className="text-orange-600 hover:text-orange-800 underline">Gulmarg</Link>, and <Link to="/places-to-visit-in-pahalgam" className="text-orange-600 hover:text-orange-800 underline">Pahalgam</Link>. 
          Experience traditional Wazwan, Rogan Josh, Kahwa, and local delicacies at these handpicked dining spots 
          that showcase Kashmir's rich culinary heritage.
        </p>
        
        {/* Food highlights */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">🍛 Wazwan Cuisine</span>
          <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">🥘 Rogan Josh</span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">☕ Kashmiri Kahwa</span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">🍞 Local Breads</span>
        </div>
      </header>
      
      <div 
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        role="list"
        aria-label="Kashmir restaurants and food places"
      >
        {restaurants.map((place, idx) => (
          <div key={idx} role="listitem">
            <RestaurantCard {...place} />
          </div>
        ))}
      </div>
      
      {/* SEO-friendly additional content */}
      <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Kashmir Food Guide - Must-Try Dishes & Restaurants
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-red-900 mb-3">🍛 Traditional Wazwan</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Rogan Josh (Red Lamb Curry)</li>
              <li>• Yakhni (Yogurt-based Curry)</li>
              <li>• Tabak Maaz (Fried Ribs)</li>
              <li>• Gushtaba (Meatball Curry)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-green-900 mb-3">☕ Kashmiri Beverages</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Kahwa (Saffron Tea)</li>
              <li>• Noon Chai (Pink Salt Tea)</li>
              <li>• Sheer Chai (Milk Tea)</li>
              <li>• Kashmiri Green Tea</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-purple-900 mb-3">🍞 Local Breads & Snacks</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Kashmiri Naan</li>
              <li>• Sheermal (Sweet Bread)</li>
              <li>• Bakarkhani (Layered Bread)</li>
              <li>• Kulcha (Stuffed Bread)</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            <strong>Best areas for food in Kashmir:</strong> <Link to="/places-to-visit-in-srinagar" className="text-orange-600 hover:text-orange-800">Srinagar Lal Chowk</Link>, <Link to="/places-to-visit-in-srinagar" className="text-orange-600 hover:text-orange-800">Dal Lake restaurants</Link>, 
            <Link to="/places-to-visit-in-gulmarg" className="text-orange-600 hover:text-orange-800">Gulmarg resort dining</Link>, <Link to="/places-to-visit-in-pahalgam" className="text-orange-600 hover:text-orange-800">Pahalgam local eateries</Link>, <Link to="/places-to-visit-in-srinagar" className="text-orange-600 hover:text-orange-800">Boulevard Road cafes</Link>, <Link to="/places-to-visit-in-srinagar" className="text-orange-600 hover:text-orange-800">Residency Road restaurants</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RestaurantList;
