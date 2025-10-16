import React from 'react';
import { Helmet } from 'react-helmet-async';
// Removed local image import; using month-specific Cloudinary hero image

const KashmirInSeptember = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir in September - Perfect Autumn Weather & Golden Landscapes 2025</title>
        <meta 
          name="description" 
          content="Experience Kashmir in September with perfect autumn weather, golden landscapes, and ideal conditions for all activities. Complete travel guide and tips." 
        />
        <meta name="keywords" content="Kashmir in September, September Kashmir weather, autumn Kashmir, golden season Kashmir, September Kashmir travel" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Kashmir in September
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Golden autumn begins - experience Kashmir's transition to fall with perfect weather and stunning landscapes
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              September marks the beginning of autumn in Kashmir and is considered one of the most pleasant months to visit the valley. The weather is perfect with comfortable temperatures, clear skies, and the landscape begins its transformation from summer green to autumn gold, offering visitors the best of both seasons.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This month offers ideal conditions for all types of travelers - families, couples, adventure enthusiasts, and nature lovers. September provides excellent weather for outdoor activities, sightseeing, and photography with stable conditions and spectacular natural beauty as autumn colors begin to emerge.
            </p>
          </div>

          {/* Weather Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-amber-900">Weather in Kashmir in September</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6">
                  September offers ideal weather conditions with comfortable daytime temperatures ranging from 15°C to 23°C (59°F to 73°F) and pleasant nights at 8°C to 14°C (46°F to 57°F). The weather is stable with minimal rainfall and abundant sunshine.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Clear skies dominate September, offering excellent visibility for mountain views and perfect conditions for all outdoor activities. The transition to autumn begins with subtle changes in foliage colors, creating beautiful golden hues throughout the valley.
                </p>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-4">September Weather Highlights:</h4>
                <ul className="space-y-3 text-amber-800">
                  <li className="flex items-center">
                    <span className="mr-3">🌡️</span> Daytime: 15°C to 23°C (59°F to 73°F)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🌙</span> Nighttime: 8°C to 14°C (46°F to 57°F)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">☀️</span> Clear skies and sunshine
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🍂</span> Early autumn colors emerge
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">💧</span> Minimal rainfall
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Major Attractions */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">September Attractions in Kashmir</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Srinagar */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Srinagar</h3>
                <p className="text-gray-700 mb-4">
                  Srinagar in September offers perfect weather for exploring houseboats, Mughal Gardens, and Dal Lake with comfortable temperatures and clear skies ideal for all activities.
                </p>
                <ul className="text-sm text-blue-800">
                  <li>• Perfect houseboat weather</li>
                  <li>• Ideal Shikara ride conditions</li>
                  <li>• Comfortable garden exploration</li>
                </ul>
              </div>

              {/* Gulmarg */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-3">Gulmarg</h3>
                <p className="text-gray-700 mb-4">
                  Gulmarg meadows begin their autumn transformation while maintaining lush beauty. The Gondola offers spectacular views with perfect weather conditions.
                </p>
                <ul className="text-sm text-green-800">
                  <li>• Early autumn meadow beauty</li>
                  <li>• Perfect Gondola conditions</li>
                  <li>• Ideal hiking weather</li>
                </ul>
              </div>

              {/* Pahalgam */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">Pahalgam</h3>
                <p className="text-gray-700 mb-4">
                  September in Pahalgam offers excellent conditions for trekking and camping with stable weather, clear streams, and early autumn colors in the valleys.
                </p>
                <ul className="text-sm text-yellow-800">
                  <li>• Excellent trekking conditions</li>
                  <li>• Perfect camping weather</li>
                  <li>• Early autumn forest colors</li>
                </ul>
              </div>

              {/* Sonamarg */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Sonamarg</h3>
                <p className="text-gray-700 mb-4">
                  Sonamarg lives up to its name "Golden Meadow" in September with the landscape beginning its golden transformation under clear autumn skies.
                </p>
                <ul className="text-sm text-orange-800">
                  <li>• Golden meadow beauty</li>
                  <li>• Clear mountain access</li>
                  <li>• Prime adventure conditions</li>
                </ul>
              </div>

              {/* Autumn Landscapes */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Autumn Landscapes</h3>
                <p className="text-gray-700 mb-4">
                  September showcases the beginning of Kashmir's famous autumn colors with chinar trees and meadows starting their golden transformation.
                </p>
                <ul className="text-sm text-amber-800">
                  <li>• Early chinar color changes</li>
                  <li>• Golden meadow hues</li>
                  <li>• Perfect autumn photography</li>
                </ul>
              </div>

              {/* Valley Views */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Valley Panoramas</h3>
                <p className="text-gray-700 mb-4">
                  Crystal-clear September skies offer the most spectacular valley and mountain panoramas with enhanced visibility and perfect lighting conditions.
                </p>
                <ul className="text-sm text-purple-800">
                  <li>• Crystal-clear mountain views</li>
                  <li>• Perfect panoramic visibility</li>
                  <li>• Ideal photography lighting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Activities */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">September Activities in Kashmir</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-amber-50 rounded-lg">
                <div className="text-4xl mb-4">🥾</div>
                <h3 className="font-bold text-amber-900 mb-2">Trekking</h3>
                <p className="text-sm text-gray-700">Perfect weather for all treks</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl mb-4">📷</div>
                <h3 className="font-bold text-green-900 mb-2">Photography</h3>
                <p className="text-sm text-gray-700">Early autumn color photography</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-4">🏕️</div>
                <h3 className="font-bold text-blue-900 mb-2">Camping</h3>
                <p className="text-sm text-gray-700">Ideal outdoor camping conditions</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-4">🎣</div>
                <h3 className="font-bold text-purple-900 mb-2">Fishing</h3>
                <p className="text-sm text-gray-700">Perfect stream fishing weather</p>
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Why Visit Kashmir in September?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🌡️</span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Perfect Weather</h4>
                      <p className="text-gray-700">Ideal temperatures for all activities and sightseeing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🍂</span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Autumn Beauty Begins</h4>
                      <p className="text-gray-700">Witness the start of Kashmir's famous autumn colors</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">☀️</span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Clear Skies</h4>
                      <p className="text-gray-700">Minimal rainfall with abundant sunshine</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🎯</span>
                    <div>
                      <h4 className="font-semibold text-amber-900">All Activities Available</h4>
                      <p className="text-gray-700">Perfect conditions for every type of tourism</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is September a good time to visit Kashmir?</h3>
                <p className="text-gray-700">September is excellent for visiting Kashmir with perfect weather conditions, clear skies, minimal rainfall, and the beginning of beautiful autumn colors making it ideal for all activities.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">When do autumn colors start appearing in Kashmir?</h3>
                <p className="text-gray-700">Autumn colors typically begin appearing in September with chinar trees and meadows starting their golden transformation, reaching peak colors in October and November.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What clothes should I pack for September in Kashmir?</h3>
                <p className="text-gray-700">Pack light layers for comfortable daytime temperatures, a warm jacket for cool evenings, comfortable walking shoes, and light rain protection just in case.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Are all tourist attractions accessible in September?</h3>
                <p className="text-gray-700">Yes, September offers excellent accessibility to all major tourist attractions with stable weather, clear roads, and perfect conditions for exploring Kashmir's beauty.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default KashmirInSeptember;