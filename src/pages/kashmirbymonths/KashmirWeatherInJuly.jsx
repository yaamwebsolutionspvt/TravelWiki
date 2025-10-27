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

const KashmirWeatherInJuly = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in July 2025 - Monsoon Season & Lush Green Landscapes</title>
        <meta 
          name="description" 
          content="Kashmir weather in July 2025 - monsoon season, lush green valleys, rainfall patterns, and temperature conditions during summer monsoons." 
        />
        <meta name="keywords" content="Kashmir weather July, July Kashmir temperature, Kashmir monsoon, July rainfall Kashmir" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dw1sh368y/image/upload/v1760628379/Kashmir_in_July_2_eyhe0b.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Kashmir Weather in July</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Monsoon beauty with lush green valleys and refreshing rains
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-6">July Weather Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  July brings monsoon rains to Kashmir, creating lush green landscapes and cooler temperatures. The valley experiences its most verdant period with frequent showers and misty conditions.
                </p>
                <p className="text-gray-700 mb-6">
                  Temperatures range from 20°C to 32°C (68°F to 90°F) during the day and 15°C to 22°C (59°F to 72°F) at night, with high humidity and regular rainfall.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">July Weather Facts:</h4>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-center"><span className="mr-3">🌡️</span> Daytime: 20°C to 32°C (68°F to 90°F)</li>
                  <li className="flex items-center"><span className="mr-3">🌧️</span> Monsoon season peaks</li>
                  <li className="flex items-center"><span className="mr-3">🌿</span> Valley at its greenest</li>
                  <li className="flex items-center"><span className="mr-3">💧</span> High humidity 70-85%</li>
                  <li className="flex items-center"><span className="mr-3">🌫️</span> Misty conditions common</li>
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



export default KashmirWeatherInJuly;