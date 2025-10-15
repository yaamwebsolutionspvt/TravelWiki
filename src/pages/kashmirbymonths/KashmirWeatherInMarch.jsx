import React from 'react';
import { Helmet } from 'react-helmet-async';
import dalLake from '../../assets/dal_lake.webp';

const KashmirWeatherInMarch = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in March 2025 - Spring Transition & Almond Blossoms</title>
        <meta 
          name="description" 
          content="Kashmir weather in March 2025 - transition from winter to spring, almond blossoms, temperature ranges, and detailed weather conditions." 
        />
        <meta name="keywords" content="Kashmir weather March, March Kashmir temperature, Kashmir spring weather, almond blossoms March Kashmir" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: `url(${dalLake})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Kashmir Weather in March</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Spring awakening with almond blossoms and gradually warming temperatures
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-6">March Weather Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  March marks the transition from harsh winter to gentle spring in Kashmir. The month brings the famous almond blossoms, gradually melting snow, and more pleasant daytime temperatures, though nights remain cold.
                </p>
                <p className="text-gray-700 mb-6">
                  Daytime temperatures range from 2°C to 12°C (36°F to 54°F), while nights stay cold at -2°C to -8°C (28°F to 18°F). Snow begins to melt in lower areas, but higher altitudes maintain winter conditions.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">March Weather Facts:</h4>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-center"><span className="mr-3">🌡️</span> Daytime: 2°C to 12°C (36°F to 54°F)</li>
                  <li className="flex items-center"><span className="mr-3">🌙</span> Nighttime: -2°C to -8°C (28°F to 18°F)</li>
                  <li className="flex items-center"><span className="mr-3">🌸</span> Almond blossoms peak</li>
                  <li className="flex items-center"><span className="mr-3">❄️</span> Snow melting begins</li>
                  <li className="flex items-center"><span className="mr-3">☀️</span> More sunny days: 12-15</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">March Weather Conditions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-3">🌡️ Temperature</h3>
                <p className="text-gray-700 mb-4">Gradual warming with pleasant afternoons</p>
                <ul className="text-sm text-green-800">
                  <li>• Max: 2°C to 12°C (36°F to 54°F)</li>
                  <li>• Min: -2°C to -8°C (28°F to 18°F)</li>
                  <li>• Pleasant afternoon warmth</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-pink-900 mb-3">🌸 Spring Signs</h3>
                <p className="text-gray-700 mb-4">Nature awakens with beautiful blossoms</p>
                <ul className="text-sm text-pink-800">
                  <li>• Almond blossoms peak</li>
                  <li>• Early flowers blooming</li>
                  <li>• Snow melting in valleys</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">☀️ Weather</h3>
                <p className="text-gray-700 mb-4">Mix of sun and occasional snow showers</p>
                <ul className="text-sm text-blue-800">
                  <li>• Sunny days: 12-15</li>
                  <li>• Light snow: 5-8 days</li>
                  <li>• Rainfall increases</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">March Weather FAQs</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">When do almond blossoms peak in Kashmir?</h3>
                <p className="text-gray-700">Almond blossoms typically peak in mid to late March, creating beautiful white and pink flowering landscapes throughout the Kashmir valley, especially in Badamwari gardens.</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is March a good time to visit Kashmir?</h3>
                <p className="text-gray-700">March is excellent for those who want to witness spring's arrival, almond blossoms, and enjoy milder weather while still experiencing some winter charm. Roads generally become more accessible.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default KashmirWeatherInMarch;