import React from 'react';
import { Helmet } from 'react-helmet-async';
// Removed local image import; using month-specific Cloudinary hero image

const KashmirInJune = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir in June - Summer Paradise & Amarnath Yatra Season 2025</title>
        <meta 
          name="description" 
          content="Visit Kashmir in June for perfect summer weather, Amarnath Yatra season, and lush green landscapes. Complete guide to summer activities and travel tips." 
        />
        <meta name="keywords" content="Kashmir in June, June Kashmir weather, Amarnath Yatra, Kashmir summer, June Kashmir activities, summer Kashmir guide" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Kashmir in June
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Summer at its finest - experience Kashmir's peak beauty during the holy Amarnath Yatra season
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              June marks the height of summer in Kashmir and is one of the most popular months for tourists. This is when the valley showcases its full summer glory with perfect weather conditions, making it ideal for family vacations, adventure activities, and spiritual journeys including the famous Amarnath Yatra.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The month offers consistently pleasant weather with warm days and cool nights, making Kashmir an ideal escape from the scorching heat of the Indian plains. June is also significant for pilgrims as it marks the beginning of the Amarnath Yatra season, adding a spiritual dimension to the natural beauty.
            </p>
          </div>

          {/* Weather Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-teal-900">Weather in Kashmir in June</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6">
                  June offers delightfully warm summer weather in Kashmir with daytime temperatures ranging from 20°C to 28°C (68°F to 82°F) and comfortable nights at 12°C to 18°C (54°F to 64°F). This is perfect weather for all outdoor activities.
                </p>
                
                <p className="text-gray-700 mb-6">
                  The month typically sees clear, sunny skies with occasional brief showers that help maintain the lush greenery. The weather is stable and predictable, making it excellent for planning outdoor adventures and sightseeing tours.
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="font-semibold text-teal-900 mb-4">June Weather Highlights:</h4>
                <ul className="space-y-3 text-teal-800">
                  <li className="flex items-center">
                    <span className="mr-3">🌡️</span> Daytime: 20°C to 28°C (68°F to 82°F)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🌙</span> Nighttime: 12°C to 18°C (54°F to 64°F)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">☀️</span> Long summer days
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">💧</span> Brief refreshing showers
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🌿</span> Peak lush greenery
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Major Attractions */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Attractions in Kashmir in June</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Amarnath Cave */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-2 border-orange-200">
                <h3 className="text-xl font-bold text-orange-900 mb-3">🕉️ Amarnath Cave</h3>
                <p className="text-gray-700 mb-4">
                  June marks the beginning of the holy Amarnath Yatra season. Thousands of pilgrims embark on this sacred journey to witness the naturally formed ice Shiva Lingam.
                </p>
                <ul className="text-sm text-orange-800">
                  <li>• Holy pilgrimage season begins</li>
                  <li>• Spiritual journey experience</li>
                  <li>• Well-organized yatra facilities</li>
                </ul>
              </div>

              {/* Srinagar */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Srinagar</h3>
                <p className="text-gray-700 mb-4">
                  Srinagar in June is perfect for family vacations with comfortable houseboat stays, pleasant Shikara rides, and Mughal Gardens in full summer bloom.
                </p>
                <ul className="text-sm text-blue-800">
                  <li>• Perfect family vacation weather</li>
                  <li>• Comfortable water activities</li>
                  <li>• Summer garden beauty</li>
                </ul>
              </div>

              {/* Gulmarg */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-3">Gulmarg</h3>
                <p className="text-gray-700 mb-4">
                  Gulmarg's meadows are at their greenest in June with wildflowers creating colorful carpets. The Gondola operates smoothly offering spectacular valley views.
                </p>
                <ul className="text-sm text-green-800">
                  <li>• Greenest meadow season</li>
                  <li>• Colorful wildflower displays</li>
                  <li>• Perfect Gondola conditions</li>
                </ul>
              </div>

              {/* Pahalgam */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">Pahalgam</h3>
                <p className="text-gray-700 mb-4">
                  Pahalgam serves as the base camp for Amarnath Yatra and offers excellent trekking conditions with lush valleys and flowing streams perfect for camping.
                </p>
                <ul className="text-sm text-yellow-800">
                  <li>• Amarnath Yatra base camp</li>
                  <li>• Excellent trekking conditions</li>
                  <li>• Perfect camping weather</li>
                </ul>
              </div>

              {/* Sonamarg */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Sonamarg</h3>
                <p className="text-gray-700 mb-4">
                  Sonamarg in June offers prime trekking season with accessible high-altitude routes and the famous Thajiwas Glacier providing refreshing mountain experiences.
                </p>
                <ul className="text-sm text-purple-800">
                  <li>• Prime high-altitude trekking</li>
                  <li>• Thajiwas Glacier access</li>
                  <li>• Mountain adventure activities</li>
                </ul>
              </div>

              {/* Kashmir Great Lakes */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-teal-900 mb-3">Kashmir Great Lakes</h3>
                <p className="text-gray-700 mb-4">
                  June opens up the famous Kashmir Great Lakes trek with accessible routes to pristine alpine lakes surrounded by snow-capped peaks and meadows.
                </p>
                <ul className="text-sm text-teal-800">
                  <li>• Great Lakes trek season</li>
                  <li>• Alpine lake access</li>
                  <li>• High-altitude meadows</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Activities */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">June Activities in Kashmir</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-4xl mb-4">🕉️</div>
                <h3 className="font-bold text-orange-900 mb-2">Amarnath Yatra</h3>
                <p className="text-sm text-gray-700">Sacred pilgrimage journey</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="font-bold text-green-900 mb-2">High-Altitude Trekking</h3>
                <p className="text-sm text-gray-700">Prime mountain trekking season</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-4">🚣</div>
                <h3 className="font-bold text-blue-900 mb-2">Water Adventures</h3>
                <p className="text-sm text-gray-700">Rafting and lake activities</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="font-bold text-purple-900 mb-2">Family Tours</h3>
                <p className="text-sm text-gray-700">Perfect family vacation weather</p>
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">Why Visit Kashmir in June?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🕉️</span>
                    <div>
                      <h4 className="font-semibold text-teal-900">Amarnath Yatra Season</h4>
                      <p className="text-gray-700">Experience the holy pilgrimage in perfect weather</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🌡️</span>
                    <div>
                      <h4 className="font-semibold text-teal-900">Perfect Summer Weather</h4>
                      <p className="text-gray-700">Ideal escape from heat with pleasant temperatures</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🏔️</span>
                    <div>
                      <h4 className="font-semibold text-teal-900">Peak Adventure Season</h4>
                      <p className="text-gray-700">All trekking routes and activities fully accessible</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">👨‍👩‍👧‍👦</span>
                    <div>
                      <h4 className="font-semibold text-teal-900">Family Friendly</h4>
                      <p className="text-gray-700">Perfect conditions for family vacations</p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">When does the Amarnath Yatra usually start?</h3>
                <p className="text-gray-700">The Amarnath Yatra typically begins in late June or early July, depending on weather conditions and the formation of the ice Shiva Lingam in the holy cave.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is June too crowded for Kashmir tourism?</h3>
                <p className="text-gray-700">June is peak tourist season, so popular destinations can be crowded. Book accommodations early and plan to visit attractions in early morning or late afternoon for better experiences.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What type of clothes should I pack for June in Kashmir?</h3>
                <p className="text-gray-700">Pack light summer clothes for daytime, a jacket for cool evenings, comfortable shoes for walking/trekking, and rain protection for occasional showers.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Are all trekking routes accessible in June?</h3>
                <p className="text-gray-700">Yes, June is when most high-altitude trekking routes become fully accessible with good weather conditions and well-established trails for adventure enthusiasts.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default KashmirInJune;