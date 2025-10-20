import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PackagesListing = () => {
  return (
    <>
      <Helmet>
        <title>Kashmir Tour Packages 2025 | Srinagar, Gulmarg, Pahalgam, Dal Lake | Best Kashmir Holiday Packages</title>
        <meta 
          name="description" 
          content="Discover Kashmir tour packages covering Srinagar, Gulmarg, Pahalgam, Dal Lake, Sonamarg. Best Kashmir holiday packages, honeymoon tours, Ladakh trips, weather guides & tourist attractions. Book Kashmir travel packages now!" 
        />
        <meta name="keywords" content="Kashmir tour packages, Srinagar Kashmir trip package, Dal Lake Srinagar, Kashmir holiday packages, Kashmir tourist places, Kashmir tour package, Gulmarg tour packages, Pahalgam tour packages, Kashmir honeymoon packages, Sonamarg places to visit, Kashmir weather June, Kashmir weather July, Kashmir weather December, Kashmir weather November, Kashmir tourist attractions, Kashmir travel packages, places to visit in Kashmir, Kashmir tourism, Ladakh tour packages, Leh Ladakh packages, Kashmir with Kargil, Gurez Valley tour, Kashmir cultural tours, Kashmir adventure tours, Kashmir family packages, Jammu Kashmir tour package, Kashmir weather in May, Kashmir weather in April, Kashmir temperature, best time to visit Kashmir, Kashmir in winter, Kashmir in summer, Kashmir railway, Kashmir airport, places to see in Kashmir, Kashmir sightseeing places, tourist destinations in Kashmir, Kashmir vacation packages, Kashmir trip, things to do in Kashmir, Kashmir attractions, beautiful places in Kashmir, Kashmir nature, Kashmir scenic tours" />
        <link rel="canonical" href="/packages-listing" />
        <meta property="og:title" content="Kashmir Tour Packages 2025 | Complete Guide to Kashmir Tourism" />
        <meta property="og:description" content="Explore Kashmir's beauty with our comprehensive tour packages. Visit Dal Lake, Gulmarg, Pahalgam, Sonamarg. Weather guides, best times to visit & tourist attractions included." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kashmir Tour Packages | Srinagar, Gulmarg, Pahalgam Tours" />
        <meta name="twitter:description" content="Best Kashmir holiday packages covering all major tourist destinations. Weather guides, seasonal tours & customized Kashmir travel experiences." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kashmir Tour Packages 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Discover the paradise on earth with our comprehensive Kashmir holiday packages. Explore Srinagar's Dal Lake, Gulmarg's snow-capped peaks, Pahalgam's meadows, and Sonamarg's glaciers. Perfect for honeymoons, family vacations, and adventure seekers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">✈️ Kashmir Tourism</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">🏔️ Ladakh Tours</span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">💕 Honeymoon Packages</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">🌤️ Weather Guides</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Kashmir Best Sellers */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Kashmir Best Seller Tour Packages</h2>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/3-nights-4-days-srinagar-pahalgam-gulmarg-tour" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Glimpses of Kashmir Valley (3 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/magical-kashmir-tour" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Magical Kashmir Tour (4 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-exotic-tour" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Kashmir Exotic Tour (5 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/magnificent-kashmir-valley-tour" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Magnificent Kashmir Valley Tour (6 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/week-long-holiday-kashmir" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Kashmir Marvellous Tour (7 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-valley-tour" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Kashmir Valley Tour (3 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/gurez-valley-tour" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Gurez Valley Tour (3 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-with-gurez-valley-tour" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Kashmir with Gurez Valley Tour (5 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-offbeat-with-gurez" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Kashmir Offbeat with Gurez (7 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/true-gems-of-kashmir-valley" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  True Gems Of Kashmir Valley (8 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-with-kargil" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Kashmir with Kargil (6 Nights) →
                </Link>
              </div>
            </div>
          </div>

          {/* Kashmir Honeymoon Packages */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Kashmir Honeymoon Holiday Packages</h2>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 hover:bg-pink-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/glimpses-of-family-tour" 
                  className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
                >
                  Glimpses of Family Tour (3 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-pink-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/honeymoon-magical-kashmir-tour" 
                  className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
                >
                  Magical Kashmir Tour (4 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-pink-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/best-selling-kashmir-tour" 
                  className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
                >
                  Best Selling Kashmir Tour (5 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-pink-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/scenic-kashmir-tour" 
                  className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
                >
                  Scenic Kashmir Tour (6 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-pink-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-marvelous-tour" 
                  className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
                >
                  Kashmir Marvelous Tour (7 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-pink-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-refreshing-tour" 
                  className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
                >
                  Kashmir Refreshing Tour (3 Nights) →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-pink-50 rounded-lg transition-colors">
                <Link 
                  to="/packages-listing" 
                  className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
                >
                  View All Kashmir Honeymoon Packages →
                </Link>
              </div>
            </div>
          </div>

          {/* Location-Based Packages */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Kashmir Tourist Places & Destinations</h2>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 hover:bg-green-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/srinagar-tour-package" 
                  className="text-green-600 hover:text-green-800 font-medium transition-colors"
                >
                  Srinagar Tour Packages - Dal Lake & Houseboats →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-green-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-gulmarg-tour" 
                  className="text-green-600 hover:text-green-800 font-medium transition-colors"
                >
                  Gulmarg Tour Packages - Gondola & Skiing →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-green-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-pahalgam-tour" 
                  className="text-green-600 hover:text-green-800 font-medium transition-colors"
                >
                  Pahalgam Tour Packages - Betaab Valley →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-green-50 rounded-lg transition-colors">
                <Link 
                  to="/leh-packages/unforgettable-ladakh-tour-package-with-sonamarg-stay" 
                  className="text-green-600 hover:text-green-800 font-medium transition-colors"
                >
                  Sonamarg Tour Packages - Thajiwas Glacier →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-green-50 rounded-lg transition-colors">
                <Link 
                  to="/leh-ladakh-packages" 
                  className="text-green-600 hover:text-green-800 font-medium transition-colors"
                >
                  Leh Ladakh Tour Packages - Nubra Valley →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-green-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-with-kargil" 
                  className="text-green-600 hover:text-green-800 font-medium transition-colors"
                >
                  Kargil Kashmir Tour Packages →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-green-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/gurez-valley-tour" 
                  className="text-green-600 hover:text-green-800 font-medium transition-colors"
                >
                  Gurez Valley Tour - Offbeat Kashmir →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-green-50 rounded-lg transition-colors">
                <Link 
                  to="/packages-listing" 
                  className="text-green-600 hover:text-green-800 font-medium transition-colors"
                >
                  View All Kashmir Tourist Places →
                </Link>
              </div>
            </div>
          </div>

          {/* Tours By Duration */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Kashmir Tours By Duration</h2>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 hover:bg-purple-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/magical-kashmir-tour" 
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  4 Nights / 5 Days →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-purple-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/kashmir-exotic-tour" 
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  5 Nights / 6 Days →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-purple-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/magnificent-kashmir-valley-tour" 
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  6 Nights / 7 Days →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-purple-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/week-long-holiday-kashmir" 
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  7 Nights / 8 Days →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-purple-50 rounded-lg transition-colors">
                <Link 
                  to="/packages/true-gems-of-kashmir-valley" 
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  8 Nights / 9 Days →
                </Link>
              </div>
              
              <div className="p-3 hover:bg-purple-50 rounded-lg transition-colors">
                <Link 
                  to="/packages-listing" 
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  View All →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Weather & Seasonal Tours */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kashmir Weather Guide & Seasonal Tours</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Best Time to Visit */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Kashmir Weather Guide</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Summer (April - June)</h4>
                  <p className="text-blue-800 text-sm mb-2">Kashmir weather in April, May & June: Pleasant 15-30°C</p>
                  <p className="text-blue-700 text-sm">Perfect for sightseeing, Dal Lake shikara rides, and Gulmarg Gondola</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Monsoon (July - August)</h4>
                  <p className="text-green-800 text-sm mb-2">Kashmir weather in July: Mild rains, 20-25°C</p>
                  <p className="text-green-700 text-sm">Great for Ladakh tours, Nubra Valley, and Pangong Lake visits</p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Autumn (September - November)</h4>
                  <p className="text-orange-800 text-sm mb-2">Kashmir weather in November: Cool 5-20°C</p>
                  <p className="text-orange-700 text-sm">Ideal for photography, Chinar trees, and cultural tours</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Winter (December - March)</h4>
                  <p className="text-purple-800 text-sm mb-2">Kashmir weather in December: Snow season -5 to 10°C</p>
                  <p className="text-purple-700 text-sm">Perfect for skiing in Gulmarg, snow activities, and winter sports</p>
                </div>
              </div>
            </div>

            {/* Seasonal Tour Packages */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 10h6M9 14h6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Seasonal Tour Packages</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 hover:bg-teal-50 rounded-lg transition-colors">
                  <Link 
                    to="/packages/kashmir-summer-tour" 
                    className="text-teal-600 hover:text-teal-800 font-medium transition-colors"
                  >
                    Kashmir Summer Tours (April-June) →
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">Best weather for Dal Lake, Gulmarg, Pahalgam</p>
                </div>
                
                <div className="p-3 hover:bg-teal-50 rounded-lg transition-colors">
                  <Link 
                    to="/leh-ladakh-packages" 
                    className="text-teal-600 hover:text-teal-800 font-medium transition-colors"
                  >
                    Ladakh Tours (July-September) →
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">Leh, Nubra Valley, Pangong Lake, Tso Moriri</p>
                </div>
                
                <div className="p-3 hover:bg-teal-50 rounded-lg transition-colors">
                  <Link 
                    to="/packages/kashmir-autumn-tour" 
                    className="text-teal-600 hover:text-teal-800 font-medium transition-colors"
                  >
                    Kashmir Autumn Tours (September-November) →
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">Chinar leaves, pleasant weather, photography</p>
                </div>
                
                <div className="p-3 hover:bg-teal-50 rounded-lg transition-colors">
                  <Link 
                    to="/packages/kashmir-winter-tour" 
                    className="text-teal-600 hover:text-teal-800 font-medium transition-colors"
                  >
                    Kashmir Winter Tours (December-March) →
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">Snow activities, skiing, winter sports in Gulmarg</p>
                </div>
                
                <div className="p-3 hover:bg-teal-50 rounded-lg transition-colors">
                  <Link 
                    to="/packages/manali-leh-highway" 
                    className="text-teal-600 hover:text-teal-800 font-medium transition-colors"
                  >
                    Manali to Leh Highway Tours →
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">Road trip adventure, high altitude passes</p>
                </div>
                
                <div className="p-3 hover:bg-teal-50 rounded-lg transition-colors">
                  <Link 
                    to="/packages/kashmir-cultural-tours" 
                    className="text-teal-600 hover:text-teal-800 font-medium transition-colors"
                  >
                    Kashmir Cultural Tours →
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">Local traditions, handicrafts, Kashmiri cuisine</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Packages */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kashmir Tourist Attractions & Special Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Kashmir Tourist Places */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kashmir Tourist Places</h3>
              <div className="space-y-2">
                <Link 
                  to="/packages/dal-lake-srinagar-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Dal Lake Srinagar Tours →
                </Link>
                <Link 
                  to="/packages/nigeen-lake-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Nigeen Lake Tours →
                </Link>
                <Link 
                  to="/packages/betaab-valley-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Betaab Valley Pahalgam →
                </Link>
                <Link 
                  to="/packages/doodhpathri-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Doodhpathri Valley →
                </Link>
                <Link 
                  to="/packages/thajiwas-glacier-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Thajiwas Glacier Sonamarg →
                </Link>
              </div>
            </div>

            {/* Ladakh Attractions */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ladakh Tourist Spots</h3>
              <div className="space-y-2">
                <Link 
                  to="/packages/pangong-lake-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Pangong Lake Tours →
                </Link>
                <Link 
                  to="/packages/nubra-valley-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Nubra Valley & Hunder →
                </Link>
                <Link 
                  to="/packages/tso-moriri-lake-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Tso Moriri Lake →
                </Link>
                <Link 
                  to="/packages/alchi-monastery-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Alchi Monastery →
                </Link>
                <Link 
                  to="/packages/zanskar-valley-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Zanskar Valley →
                </Link>
              </div>
            </div>

            {/* Kashmir Experiences */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kashmir Experiences</h3>
              <div className="space-y-2">
                <Link 
                  to="/packages/kashmir-houseboat-stay" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Kashmir Houseboat Stay →
                </Link>
                <Link 
                  to="/packages/shikara-ride-dal-lake" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Shikara Ride Dal Lake →
                </Link>
                <Link 
                  to="/packages/gulmarg-gondola-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Gulmarg Gondola Ride →
                </Link>
                <Link 
                  to="/packages/kashmir-skiing-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Kashmir Skiing Tours →
                </Link>
                <Link 
                  to="/packages/kashmir-trekking-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Kashmir Trekking →
                </Link>
              </div>
            </div>

            {/* Extended Tours */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Extended Tours</h3>
              <div className="space-y-2">
                <Link 
                  to="/packages/jammu-kashmir-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Jammu Kashmir Tours →
                </Link>
                <Link 
                  to="/packages/vaishno-devi-kashmir" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Vaishno Devi + Kashmir →
                </Link>
                <Link 
                  to="/packages/kashmir-himachal-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Kashmir Himachal Tours →
                </Link>
                <Link 
                  to="/packages/delhi-kashmir-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Delhi to Kashmir Tours →
                </Link>
                <Link 
                  to="/packages/kashmir-railway-tour" 
                  className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  Kashmir by Train →
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Kashmir Travel Information */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kashmir Travel Information & Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">How to Reach Kashmir</h3>
              <ul className="text-blue-800 text-sm space-y-2">
                <li>✈️ <strong>By Air:</strong> Srinagar Airport (SXR) - Direct flights from Delhi, Mumbai</li>
                <li>🚂 <strong>By Train:</strong> Jammu Tawi Railway Station + Road (290km to Srinagar)</li>
                <li>🚗 <strong>By Road:</strong> NH44 from Delhi via Jammu (876km total)</li>
                <li>🏔️ <strong>Manali-Leh Highway:</strong> Seasonal road (May-October)</li>
              </ul>
            </div>
            
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Best Time to Visit</h3>
              <ul className="text-green-800 text-sm space-y-2">
                <li>🌸 <strong>Summer (Apr-Jun):</strong> Perfect weather, all attractions open</li>
                <li>🌧️ <strong>Monsoon (Jul-Aug):</strong> Best for Ladakh, light rains in Kashmir</li>
                <li>🍂 <strong>Autumn (Sep-Nov):</strong> Beautiful Chinar colors, pleasant weather</li>
                <li>❄️ <strong>Winter (Dec-Mar):</strong> Snow activities, skiing in Gulmarg</li>
              </ul>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Kashmir Altitude Guide</h3>
              <ul className="text-purple-800 text-sm space-y-2">
                <li>🏞️ <strong>Srinagar:</strong> 1,585m - No altitude issues</li>
                <li>⛷️ <strong>Gulmarg:</strong> 2,650m - Mild altitude effects</li>
                <li>🏔️ <strong>Leh Ladakh:</strong> 3,500m - Acclimatization needed</li>
                <li>🏕️ <strong>Nubra Valley:</strong> 3,048m - Gradual ascent recommended</li>
              </ul>
            </div>
            
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Popular Kashmir Tourist Circuits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Classic Kashmir Circuit (5-7 Days)</h4>
                <p className="text-amber-700 text-sm">Srinagar → Gulmarg → Pahalgam → Sonamarg → Srinagar</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Kashmir + Ladakh Circuit (10-12 Days)</h4>
                <p className="text-amber-700 text-sm">Srinagar → Kargil → Leh → Nubra → Pangong → Leh → Srinagar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Kashmir Paradise?</h2>
            <p className="text-xl mb-6">Book your Kashmir tour package today and experience the beauty of Dal Lake, Gulmarg, Pahalgam, and more!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Book Kashmir Tour Now
              </Link>
              <Link 
                to="/packages" 
                className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PackagesListing;