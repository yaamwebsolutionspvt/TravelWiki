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

const KashmirWeatherInDecember = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in December 2025 - Winter Begins & Early Snowfall</title>
        <meta 
          name="description" 
          content="Kashmir weather in December 2025 - winter season begins, early snowfall, cold temperatures, and winter weather patterns." 
        />
        <meta name="keywords" content="Kashmir weather December, December Kashmir temperature, Kashmir winter December, early snow Kashmir" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dw1sh368y/image/upload/v1760629556/Kashmir_in_December_lsntgq.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Kashmir Weather in December</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Winter season begins with early snowfall and cold temperatures
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">December Weather Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  December marks the beginning of Kashmir's winter season with early snowfall and significantly dropping temperatures. The valley starts its transformation into a winter wonderland with increasing snow cover.
                </p>
                <p className="text-gray-700 mb-6">
                  Temperatures range from -2°C to 7°C (28°F to 45°F) during the day and -6°C to -11°C (21°F to 12°F) at night, with frequent snowfall and freezing conditions.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-4">December Weather Facts:</h4>
                <ul className="space-y-3 text-indigo-800">
                  <li className="flex items-center"><span className="mr-3">🌡️</span> Daytime: -2°C to 7°C (28°F to 45°F)</li>
                  <li className="flex items-center"><span className="mr-3">🌙</span> Nighttime: -6°C to -11°C (21°F to 12°F)</li>
                  <li className="flex items-center"><span className="mr-3">❄️</span> Early winter snowfall</li>
                  <li className="flex items-center"><span className="mr-3">🏔️</span> Winter wonderland begins</li>
                  <li className="flex items-center"><span className="mr-3">🌨️</span> Frequent snow storms</li>
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


export default KashmirWeatherInDecember;
