import React from 'react';
import { Helmet } from 'react-helmet-async';
// Removed local image import; using month-specific Cloudinary hero image

const KashmirWeatherInSeptember = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Weather in September 2025 - Post-Monsoon & Early Autumn</title>
        <meta 
          name="description" 
          content="Kashmir weather in September 2025 - post-monsoon clarity, early autumn signs, perfect temperatures, and ideal tourist conditions." 
        />
        <meta name="keywords" content="Kashmir weather September, September Kashmir temperature, post monsoon Kashmir, early autumn Kashmir" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dw1sh368y/image/upload/v1760628759/Kashmir_in_September_bayema.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Kashmir Weather in September</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Post-monsoon clarity and early autumn beauty
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">September Weather Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg">
                  September brings post-monsoon clarity to Kashmir with crisp air, clear skies, and the beginning of autumn colors. It's considered one of the best months for photography and outdoor activities.
                </p>
                <p className="text-gray-700 mb-6">
                  Temperatures range from 15°C to 25°C (59°F to 77°F) during the day and 8°C to 15°C (46°F to 59°F) at night, with minimal rainfall and excellent visibility.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-4">September Weather Facts:</h4>
                <ul className="space-y-3 text-amber-800">
                  <li className="flex items-center"><span className="mr-3">🌡️</span> Daytime: 15°C to 25°C (59°F to 77°F)</li>
                  <li className="flex items-center"><span className="mr-3">🍂</span> Early autumn colors</li>
                  <li className="flex items-center"><span className="mr-3">☀️</span> Excellent visibility</li>
                  <li className="flex items-center"><span className="mr-3">💧</span> Minimal rainfall</li>
                  <li className="flex items-center"><span className="mr-3">📷</span> Perfect for photography</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default KashmirWeatherInSeptember;