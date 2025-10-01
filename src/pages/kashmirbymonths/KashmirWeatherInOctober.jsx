import React from 'react';
import { Helmet } from 'react-helmet-async';

const KashmirWeatherInOctober = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in October 2025 - Peak Autumn & Golden Chinar Season</title>
        <meta 
          name="description" 
          content="Kashmir weather in October 2025 - peak autumn colors, golden chinar trees, perfect temperatures, and ideal weather for tourism." 
        />
        <meta name="keywords" content="Kashmir weather October, October Kashmir temperature, autumn Kashmir, golden chinars October" />
        <link rel="canonical" href="/kashmir-weather-in-october" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-gradient-to-r from-orange-800 to-red-800 text-white py-24">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Kashmir Weather in October</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Peak autumn colors and golden chinar season
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">October Weather Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  October showcases Kashmir's most spectacular autumn colors with golden chinar trees and perfect weather conditions. Crisp air and clear skies provide excellent visibility for photography and sightseeing.
                </p>
                <p className="text-gray-700 mb-6">
                  Temperatures range from 12°C to 20°C (54°F to 68°F) during the day and 4°C to 10°C (39°F to 50°F) at night, with minimal rainfall and brilliant autumn sunshine.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-4">October Weather Facts:</h4>
                <ul className="space-y-3 text-orange-800">
                  <li className="flex items-center"><span className="mr-3">🌡️</span> Daytime: 12°C to 20°C (54°F to 68°F)</li>
                  <li className="flex items-center"><span className="mr-3">🍁</span> Peak golden chinars</li>
                  <li className="flex items-center"><span className="mr-3">☀️</span> Brilliant autumn sunshine</li>
                  <li className="flex items-center"><span className="mr-3">📸</span> Photography paradise</li>
                  <li className="flex items-center"><span className="mr-3">🌤️</span> Clear mountain views</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default KashmirWeatherInOctober;