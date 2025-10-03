import React from 'react';
import { Helmet } from 'react-helmet-async';

const KashmirWeatherInAugust = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in August 2025 - Late Monsoon & Clear Mountain Views</title>
        <meta 
          name="description" 
          content="Kashmir weather in August 2025 - late monsoon season, clearer skies, stable weather patterns, and excellent conditions for tourism." 
        />
        <meta name="keywords" content="Kashmir weather August, August Kashmir temperature, late monsoon Kashmir, August weather conditions" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Kashmir Weather in August</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Late monsoon with clearer skies and stable weather
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">August Weather Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  August marks the late monsoon period in Kashmir with more stable weather patterns, clearer skies, and excellent mountain visibility. The valley remains lush while weather becomes more predictable.
                </p>
                <p className="text-gray-700 mb-6">
                  Temperatures range from 18°C to 30°C (64°F to 86°F) during the day and 12°C to 20°C (54°F to 68°F) at night, with decreasing rainfall and improving conditions.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">August Weather Facts:</h4>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-center"><span className="mr-3">🌡️</span> Daytime: 18°C to 30°C (64°F to 86°F)</li>
                  <li className="flex items-center"><span className="mr-3">🌦️</span> Decreasing rainfall</li>
                  <li className="flex items-center"><span className="mr-3">🏔️</span> Better mountain visibility</li>
                  <li className="flex items-center"><span className="mr-3">☀️</span> More sunny intervals</li>
                  <li className="flex items-center"><span className="mr-3">🎯</span> Good for activities</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default KashmirWeatherInAugust;