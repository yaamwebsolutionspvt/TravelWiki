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

const KashmirWeatherInFebruary = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in February 2025 - Winter Temperature & Snow Conditions</title>
        <meta 
          name="description" 
          content="Kashmir weather guide for February 2025. Temperature ranges, snowfall patterns, and detailed weather information for your winter Kashmir trip." 
        />
        <meta name="keywords" content="Kashmir weather February, February Kashmir temperature, Kashmir snow February, Kashmir winter weather February" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dw1sh368y/image/upload/v1760071761/Kashmir_in_February_fbhhib.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Kashmir Weather in February
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Peak winter conditions with heavy snowfall and romantic winter landscapes
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Weather Overview */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-purple-900">February Weather Overview</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  February continues Kashmir's intense winter with persistent snowfall and freezing temperatures. Known as one of the most romantic months due to fresh snowfall and Valentine's Day celebrations, it remains one of the coldest periods of the year.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Temperatures range from -5°C to 4°C (23°F to 39°F) during the day and -12°C to -18°C (10°F to 0°F) at night. The month often brings significant snowstorms and maintains deep snow cover throughout the valley.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-4">February Weather Facts:</h4>
                <ul className="space-y-3 text-purple-800">
                  <li className="flex items-center">
                    <span className="mr-3">🌡️</span> Daytime: -5°C to 4°C (23°F to 39°F)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🌙</span> Nighttime: -12°C to -18°C (10°F to 0°F)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">❄️</span> Snowfall: 50-70cm average
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🏔️</span> Snow days: 12-18 days
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">💝</span> Valentine's season romance
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Detailed Conditions */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">February Weather Conditions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-3">🌡️ Temperature</h3>
                <p className="text-gray-700 mb-4">Severe cold continues with slight warming towards month-end</p>
                <ul className="text-sm text-purple-800">
                  <li>• Maximum: -1°C to 4°C (30°F to 39°F)</li>
                  <li>• Minimum: -12°C to -18°C (10°F to 0°F)</li>
                  <li>• Wind chill: -20°C to -25°C</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">❄️ Snowfall</h3>
                <p className="text-gray-700 mb-4">Heavy snowfall continues with romantic fresh snow</p>
                <ul className="text-sm text-gray-800">
                  <li>• Average: 50-70cm snowfall</li>
                  <li>• Snow days: 12-18 days</li>
                  <li>• Blizzards: 2-4 events</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🌤️ General Conditions</h3>
                <p className="text-gray-700 mb-4">Overcast skies with occasional clear romantic evenings</p>
                <ul className="text-sm text-blue-800">
                  <li>• Sunny days: 6-10 per month</li>
                  <li>• Humidity: 70-85%</li>
                  <li>• Fog: Common mornings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Travel Impact */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">February Travel Conditions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-900 mb-4">⚠️ Weather Challenges</h3>
                <ul className="space-y-2 text-red-800">
                  <li>• Frequent highway closures due to snowfall</li>
                  <li>• Airport delays and cancellations common</li>
                  <li>• Limited local transportation</li>
                  <li>• Power outages during snowstorms</li>
                  <li>• Heating essential for accommodation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-4">💕 Romantic Opportunities</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Valentine's Day celebrations in snow</li>
                  <li>• Cozy houseboat experiences</li>
                  <li>• Intimate winter photography</li>
                  <li>• Quiet romantic walks in snow</li>
                  <li>• Reduced crowds for privacy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">February Weather FAQs</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is February colder than January in Kashmir?</h3>
                <p className="text-gray-700">February is slightly warmer than January but still extremely cold. Daytime temperatures may reach 4°C compared to January's maximum of 2°C, but nights remain severely cold at -12°C to -18°C.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How much snowfall occurs in February?</h3>
                <p className="text-gray-700">February receives 50-70cm of snowfall on average, with 12-18 snow days. While slightly less than January, it still maintains heavy snow conditions throughout the month.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is February good for honeymoon in Kashmir?</h3>
                <p className="text-gray-700">February can be romantic for couples who enjoy winter wonderlands and cozy indoor experiences, especially around Valentine's Day. However, extreme cold and travel difficulties require careful planning.</p>
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


export default KashmirWeatherInFebruary;
