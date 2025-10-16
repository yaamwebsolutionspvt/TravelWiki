import React from 'react';
import { Helmet } from 'react-helmet-async';
// Removed local image import; using month-specific Cloudinary hero image

const KashmirInMay = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir in May - Peak Tourist Season & Perfect Summer Weather 2025</title>
        <meta 
          name="description" 
          content="Visit Kashmir in May for perfect summer weather, lush green landscapes, and peak tourist season activities. Complete guide to attractions, trekking, and travel tips." 
        />
        <meta name="keywords" content="Kashmir in May, May Kashmir weather, peak season Kashmir, Kashmir summer travel, May Kashmir trekking, Kashmir May tourism" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dw1sh368y/image/upload/v1760628033/Kashmir_in_May_2_bust2y.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Kashmir in May
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Peak season paradise - experience Kashmir at its most vibrant with perfect weather and lush landscapes
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              May marks the beginning of peak tourist season in Kashmir, and for good reason. The valley is at its most vibrant and lush, with perfect weather conditions that make it ideal for all types of travelers. From families to adventure enthusiasts, May offers something spectacular for everyone.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This is when Kashmir truly becomes the "Switzerland of India" with emerald green meadows, crystal-clear lakes, snow-capped peaks, and pleasant temperatures. The month offers the perfect balance of warm days and cool nights, making it comfortable for extended outdoor activities and sightseeing tours.
            </p>
          </div>

          {/* Weather Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-green-900">Weather in Kashmir in May</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6">
                  May offers the most pleasant weather in Kashmir with warm, comfortable days and cool, refreshing nights. Daytime temperatures range from 18°C to 25°C (64°F to 77°F), while nights are pleasant at 10°C to 16°C (50°F to 61°F).
                </p>
                
                <p className="text-gray-700 mb-6">
                  This is the month of consistent sunshine, minimal rainfall, and perfect atmospheric conditions. The clear skies offer spectacular views of snow-capped peaks, while the valley floor is covered in lush greenery and blooming flowers. It's the ideal weather for all outdoor activities.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">May Weather Highlights:</h4>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-center">
                    <span className="mr-3">🌡️</span> Daytime: 18°C to 25°C (64°F to 77°F)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🌙</span> Nighttime: 10°C to 16°C (50°F to 61°F)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">☀️</span> Long sunny days
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🌿</span> Lush green landscapes
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Attractions in Kashmir in May</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Srinagar */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Srinagar</h3>
                <p className="text-gray-700 mb-4">
                  Srinagar in May is a perfect blend of comfort and beauty. Dal Lake sparkles under sunny skies, houseboats offer luxury experiences, and Mughal Gardens showcase their full glory.
                </p>
                <ul className="text-sm text-blue-800">
                  <li>• Perfect houseboat weather</li>
                  <li>• Comfortable Shikara rides</li>
                  <li>• Mughal Gardens at peak beauty</li>
                </ul>
              </div>

              {/* Gulmarg */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-3">Gulmarg</h3>
                <p className="text-gray-700 mb-4">
                  Gulmarg transforms into a emerald paradise with vast meadows covered in wildflowers. The Gondola ride offers breathtaking views of the Kashmir valley and surrounding peaks.
                </p>
                <ul className="text-sm text-green-800">
                  <li>• Emerald green meadows</li>
                  <li>• Wildflower carpets</li>
                  <li>• Perfect Gondola weather</li>
                </ul>
              </div>

              {/* Pahalgam */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">Pahalgam</h3>
                <p className="text-gray-700 mb-4">
                  Pahalgam's valleys are at their most beautiful in May with rushing streams, dense forests, and meadows perfect for camping and trekking adventures.
                </p>
                <ul className="text-sm text-yellow-800">
                  <li>• Perfect trekking conditions</li>
                  <li>• Ideal camping weather</li>
                  <li>• Crystal clear streams</li>
                </ul>
              </div>

              {/* Sonamarg */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Sonamarg</h3>
                <p className="text-gray-700 mb-4">
                  Sonamarg opens up completely in May with accessible trekking routes, adventure activities, and the famous "Golden Meadow" living up to its name with golden wildflowers.
                </p>
                <ul className="text-sm text-orange-800">
                  <li>• Prime trekking season</li>
                  <li>• Adventure activities available</li>
                  <li>• Golden meadow views</li>
                </ul>
              </div>

              {/* Dal Lake */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-teal-900 mb-3">Dal Lake</h3>
                <p className="text-gray-700 mb-4">
                  Dal Lake in May offers perfect conditions for all water activities. The lake reflects the clear blue skies and surrounding mountains creating picture-perfect moments.
                </p>
                <ul className="text-sm text-teal-800">
                  <li>• Perfect water activities</li>
                  <li>• Clear reflective waters</li>
                  <li>• Comfortable boat rides</li>
                </ul>
              </div>

              {/* Betaab Valley */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Betaab Valley</h3>
                <p className="text-gray-700 mb-4">
                  Betaab Valley showcases pristine natural beauty in May with lush green meadows, flowing streams, and surrounded by snow-capped peaks creating a fairy-tale landscape.
                </p>
                <ul className="text-sm text-purple-800">
                  <li>• Pristine natural beauty</li>
                  <li>• Perfect picnic spots</li>
                  <li>• Fairy-tale landscapes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Activities */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">May Activities in Kashmir</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl mb-4">🥾</div>
                <h3 className="font-bold text-green-900 mb-2">Trekking</h3>
                <p className="text-sm text-gray-700">Prime season for mountain trekking</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-4">🏕️</div>
                <h3 className="font-bold text-blue-900 mb-2">Camping</h3>
                <p className="text-sm text-gray-700">Perfect weather for outdoor camping</p>
              </div>
              
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="text-4xl mb-4">🚣</div>
                <h3 className="font-bold text-yellow-900 mb-2">Water Sports</h3>
                <p className="text-sm text-gray-700">Rafting and lake activities</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-4">🎣</div>
                <h3 className="font-bold text-purple-900 mb-2">Fishing</h3>
                <p className="text-sm text-gray-700">Trout fishing in clear streams</p>
              </div>
            </div>
          </section>

          {/* Travel Tips */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Travel Tips for Kashmir in May</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Peak Season Planning</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Book accommodations well in advance</li>
                  <li>• Expect higher prices during peak season</li>
                  <li>• Plan activities early in the day</li>
                  <li>• Pack comfortable summer clothes</li>
                  <li>• Light jacket for evening coolness</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Activity Essentials</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sunscreen and sunglasses mandatory</li>
                  <li>• Comfortable trekking shoes</li>
                  <li>• Camera with extra batteries</li>
                  <li>• Water bottles for outdoor activities</li>
                  <li>• First aid kit for adventures</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-6">Why Visit Kashmir in May?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🌡️</span>
                    <div>
                      <h4 className="font-semibold text-green-900">Perfect Weather</h4>
                      <p className="text-gray-700">Ideal temperatures for all activities and sightseeing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🌿</span>
                    <div>
                      <h4 className="font-semibold text-green-900">Peak Natural Beauty</h4>
                      <p className="text-gray-700">Kashmir at its most lush and vibrant</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🏔️</span>
                    <div>
                      <h4 className="font-semibold text-green-900">Adventure Season</h4>
                      <p className="text-gray-700">Prime time for trekking and outdoor adventures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">📸</span>
                    <div>
                      <h4 className="font-semibold text-green-900">Photography Paradise</h4>
                      <p className="text-gray-700">Perfect lighting and landscapes for photography</p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is May the best month to visit Kashmir?</h3>
                <p className="text-gray-700">May is considered one of the best months to visit Kashmir due to perfect weather conditions, lush landscapes, and ideal conditions for all types of activities and sightseeing.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What activities are best in Kashmir during May?</h3>
                <p className="text-gray-700">May is perfect for trekking, camping, water sports, sightseeing, photography, fishing, and all outdoor adventures due to excellent weather conditions.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I book accommodations in advance for May?</h3>
                <p className="text-gray-700">Yes, May is peak tourist season in Kashmir, so it's essential to book accommodations, transportation, and activities well in advance to ensure availability and better rates.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What type of clothes should I pack for Kashmir in May?</h3>
                <p className="text-gray-700">Pack comfortable summer clothes for daytime, a light jacket for evenings, comfortable walking/trekking shoes, sunglasses, and sunscreen for perfect May weather.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default KashmirInMay;