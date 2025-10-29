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

const KashmirWeatherInJune = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in June 2025 | Temperature, Climate & Best Places to Visit | Kashmir Tourism</title>
        <meta 
          name="description" 
          content="Kashmir weather in June 2025: 18-30°C temperature, perfect for Amarnath Yatra, trekking, sightseeing. Best time to visit Gulmarg, Pahalgam, Sonamarg. Complete June weather guide for Kashmir tourism with travel tips, what to pack, and top activities." 
        />
        <meta name="keywords" content="Kashmir weather June, Kashmir weather in June 2025, June Kashmir temperature, Kashmir climate June, Kashmir in June, Kashmir tourism June, Amarnath Yatra weather, Kashmir summer weather, Kashmir June travel guide, Kashmir weather forecast June, Kashmir temperature June, Kashmir rainfall June, best time visit Kashmir June, Kashmir tour packages June, Kashmir holiday June, Kashmir weather conditions June, Kashmir June tourism, Kashmir travel June, Kashmir sightseeing June, Kashmir activities June" />
        
        <meta property="og:title" content="Kashmir Weather in June 2025 | Complete Climate Guide" />
        <meta property="og:description" content="Kashmir weather in June: 18-30°C, perfect for Amarnath Yatra & trekking. Complete guide for Kashmir tourism in June." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="/kashmir-weather-in-june" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dw1sh368y/image/upload/v1760628223/Kashmir_in_June_2_ii7ftc.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Kashmir Weather in June 2025
                <span className="block text-2xl md:text-3xl font-medium mt-2 text-yellow-300">
                  Complete Climate Guide | 18-30°C | Perfect for Tourism
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Discover Kashmir's perfect June weather with warm temperatures (18-30°C), ideal for Amarnath Yatra, 
                trekking, sightseeing, and outdoor activities. Complete guide for Kashmir tourism in June 2025.
              </p>
              
              {/* Weather highlights */}
              <div className="flex flex-wrap justify-center gap-3 mt-6 text-black">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">🌡️ 18-30°C Perfect Weather</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">🏔️ Amarnath Yatra Season</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">🥾 Best for Trekking</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">📸 Clear Mountain Views</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">June Weather Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  June brings warm summer weather to Kashmir with longer days and the beginning of the Amarnath Yatra season. Temperatures are pleasant with occasional pre-monsoon showers providing relief from heat.
                </p>
                <p className="text-gray-700 mb-6">
                  Daytime temperatures range from 18°C to 30°C (64°F to 86°F), while nights remain comfortable at 12°C to 20°C (54°F to 68°F).
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-4">June Weather Facts:</h4>
                <ul className="space-y-3 text-orange-800">
                  <li className="flex items-center"><span className="mr-3">🌡️</span> Daytime: 18°C to 30°C (64°F to 86°F)</li>
                  <li className="flex items-center"><span className="mr-3">🌙</span> Nighttime: 12°C to 20°C (54°F to 68°F)</li>
                  <li className="flex items-center"><span className="mr-3">🏔️</span> Amarnath Yatra begins</li>
                  <li className="flex items-center"><span className="mr-3">🌧️</span> Pre-monsoon showers</li>
                  <li className="flex items-center"><span className="mr-3">☀️</span> Long sunny days</li>
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



export default KashmirWeatherInJune;
