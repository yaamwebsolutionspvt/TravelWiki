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
// Removed local image import; using month-specific Cloudinary hero image

const KashmirWeatherInApril = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in April 2025 - Spring Blooms & Perfect Temperatures</title>
        <meta 
          name="description" 
          content="Kashmir weather in April 2025 - tulip season, perfect spring temperatures, cherry blossoms, and ideal weather conditions for sightseeing." 
        />
        <meta name="keywords" content="Kashmir weather April, April Kashmir temperature, Kashmir spring weather, tulips Kashmir April" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dw1sh368y/image/upload/v1760628033/Kashmir_in_April_bwdvbv.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Kashmir Weather in April</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Perfect spring weather with tulip gardens in full bloom
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <img
              src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907935/Mughal_Gardens_City_Tour_bonery.webp"
              alt="April weather in Kashmir with perfect spring conditions"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="p-8">
            <h2 className="text-3xl font-bold text-yellow-900 mb-6">April Weather Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  April brings perfect spring weather to Kashmir with the famous tulip festival, pleasant temperatures, and blooming gardens throughout the valley. It's considered one of the best months to visit Kashmir.
                </p>
                <p className="text-gray-700 mb-6">
                  Daytime temperatures range from 10°C to 20°C (50°F to 68°F), while nights are cool at 2°C to 8°C (36°F to 46°F). The weather is generally stable with minimal rainfall.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-4">April Weather Facts:</h4>
                <ul className="space-y-3 text-yellow-800">
                  <li className="flex items-center"><span className="mr-3">🌡️</span> Daytime: 10°C to 20°C (50°F to 68°F)</li>
                  <li className="flex items-center"><span className="mr-3">🌙</span> Nighttime: 2°C to 8°C (36°F to 46°F)</li>
                  <li className="flex items-center"><span className="mr-3">🌷</span> Tulip festival season</li>
                  <li className="flex items-center"><span className="mr-3">☀️</span> Sunny days: 18-22</li>
                  <li className="flex items-center"><span className="mr-3">🌺</span> Peak flowering season</li>
                </ul>
                </div>
              </div>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <img
              src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907937/Arrival_Dal_Lake_Introduction_dt4jja.webp"
              alt="April weather conditions in Kashmir"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">April Weather Conditions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">🌡️ Temperature</h3>
                <p className="text-gray-700 mb-4">Perfect comfortable temperatures for all activities</p>
                <ul className="text-sm text-yellow-800">
                  <li>• Pleasant daytime warmth</li>
                  <li>• Cool comfortable nights</li>
                  <li>• Light jacket sufficient</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-pink-900 mb-3">🌷 Flowers</h3>
                <p className="text-gray-700 mb-4">Peak blooming season throughout Kashmir</p>
                <ul className="text-sm text-pink-800">
                  <li>• Tulip gardens at peak</li>
                  <li>• Cherry blossoms</li>
                  <li>• Apple orchards flowering</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">☀️ Weather</h3>
                <p className="text-gray-700 mb-4">Clear skies with minimal precipitation</p>
                <ul className="text-sm text-blue-800">
                  <li>• 18-22 sunny days</li>
                  <li>• Light rain: 3-5 days</li>
                  <li>• Excellent visibility</li>
                </ul>
                </div>
              </div>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">April Weather FAQs</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is April the best time to visit Kashmir?</h3>
                <p className="text-gray-700">April is considered one of the best months for Kashmir with perfect weather, tulip festivals, and comfortable conditions for all activities. Roads are fully accessible and weather is stable.</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What should I pack for Kashmir in April?</h3>
                <p className="text-gray-700">Pack light layers including cotton clothes for daytime, a light sweater for evenings, comfortable walking shoes, and a light jacket. The weather is very pleasant requiring minimal winter gear.</p>
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



export default KashmirWeatherInApril;