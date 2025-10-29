import React from 'react';
import { Helmet } from 'react-helmet-async';
// Package imports
import KashmirTourPackages from '../../components/Packages/KashmirTourPackages'
import BestsellerKashmirTours from '../../components/Packages/BestsellerKashmirTours'
import HoneymoonSpecial from '../../components/Packages/HoneymoonSpecial'
import KashmirAdventureWinter from '../../components/Packages/KashmirAdventureWinter'
import KashmirCulturalToursAndPackages from '../../components/Packages/KashmirCulturalToursAndPackages'
import KashmirExcursionsSpecial from '../../components/Packages/KashmirExcursionsSpecial'
import KashmirFamilyPackages from '../../components/Packages/KashmirFamilyPackages'

const KashmirWeatherInMay = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in May 2025 - Perfect Summer Weather & Peak Tourism</title>
        <meta 
          name="description" 
          content="Kashmir weather in May 2025 - perfect temperatures, peak tourist season, clear skies, and ideal conditions for all outdoor activities." 
        />
        <meta name="keywords" content="Kashmir weather May, May Kashmir temperature, Kashmir summer weather, peak season Kashmir May" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dw1sh368y/image/upload/v1760628033/Kashmir_in_May_2_bust2y.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Kashmir Weather in May</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Perfect summer weather and peak tourism season
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <img
              src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907935/Mughal_Gardens_City_Tour_bonery.webp"
              alt="Perfect May weather in Kashmir"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="p-8">
            <h2 className="text-3xl font-bold text-green-900 mb-6">May Weather Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  May offers the most perfect weather conditions in Kashmir with warm days, pleasant nights, and minimal precipitation. It's the peak tourist season with ideal conditions for all outdoor activities.
                </p>
                <p className="text-gray-700 mb-6">
                  Daytime temperatures range from 15°C to 25°C (59°F to 77°F), while nights are comfortable at 8°C to 15°C (46°F to 59°F). Clear skies dominate with excellent mountain visibility.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">May Weather Facts:</h4>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-center"><span className="mr-3">🌡️</span> Daytime: 15°C to 25°C (59°F to 77°F)</li>
                  <li className="flex items-center"><span className="mr-3">🌙</span> Nighttime: 8°C to 15°C (46°F to 59°F)</li>
                  <li className="flex items-center"><span className="mr-3">☀️</span> Sunny days: 22-26</li>
                  <li className="flex items-center"><span className="mr-3">🌄</span> Perfect mountain views</li>
                  <li className="flex items-center"><span className="mr-3">👥</span> Peak tourist season</li>
                </ul>
              </div>
            </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">May Weather Conditions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-3">🌡️ Temperature</h3>
                <p className="text-gray-700 mb-4">Ideal temperatures for all activities</p>
                <ul className="text-sm text-green-800">
                  <li>• Perfect daytime warmth</li>
                  <li>• Comfortable evenings</li>
                  <li>• No need for heavy clothing</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">☀️ Weather</h3>
                <p className="text-gray-700 mb-4">Mostly clear skies with minimal rain</p>
                <ul className="text-sm text-blue-800">
                  <li>• 22-26 sunny days</li>
                  <li>• Minimal rainfall</li>
                  <li>• Excellent visibility</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-3">🎯 Activities</h3>
                <p className="text-gray-700 mb-4">Perfect for all outdoor activities</p>
                <ul className="text-sm text-purple-800">
                  <li>• Trekking season begins</li>
                  <li>• Sightseeing ideal</li>
                  <li>• Photography perfect</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Package Sections */}
      <div>
        <KashmirTourPackages />
        <BestsellerKashmirTours />
        <HoneymoonSpecial />
        <KashmirAdventureWinter />
        <KashmirCulturalToursAndPackages />
        <KashmirExcursionsSpecial />
        <KashmirFamilyPackages />
      </div>
      </>
  );
};


export default KashmirWeatherInMay;
