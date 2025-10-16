import React from 'react';
import { Helmet } from 'react-helmet-async';
// Removed local image import; using month-specific Cloudinary hero image

const KashmirWeatherInNovember = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in November 2025 - Late Autumn & Pre-Winter Conditions</title>
        <meta 
          name="description" 
          content="Kashmir weather in November 2025 - late autumn conditions, pre-winter temperatures, weather patterns, and travel conditions." 
        />
        <meta name="keywords" content="Kashmir weather November, November Kashmir temperature, late autumn Kashmir, pre-winter weather" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dw1sh368y/image/upload/v1760629335/Kashmir_in_November_kxpoec.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Kashmir Weather in November</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Late autumn transition to pre-winter conditions
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">November Weather Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  November marks the transition from autumn to pre-winter conditions in Kashmir. Temperatures drop significantly, and the first snowfall may occur in higher altitudes while the valley experiences cooler, crisp weather.
                </p>
                <p className="text-gray-700 mb-6">
                  Temperatures range from 8°C to 16°C (46°F to 61°F) during the day and 0°C to 6°C (32°F to 43°F) at night, with occasional frost and misty mornings.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-4">November Weather Facts:</h4>
                <ul className="space-y-3 text-slate-800">
                  <li className="flex items-center"><span className="mr-3">🌡️</span> Daytime: 8°C to 16°C (46°F to 61°F)</li>
                  <li className="flex items-center"><span className="mr-3">🌙</span> Nighttime: 0°C to 6°C (32°F to 43°F)</li>
                  <li className="flex items-center"><span className="mr-3">❄️</span> First snow in mountains</li>
                  <li className="flex items-center"><span className="mr-3">🌫️</span> Misty mornings</li>
                  <li className="flex items-center"><span className="mr-3">🍂</span> Late autumn beauty</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default KashmirWeatherInNovember;