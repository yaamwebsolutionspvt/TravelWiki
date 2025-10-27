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
import heroBg from '../../assets/dal_lake.webp';

const HowToReachSrinagar = () => {
  return (
    <>
      <Helmet>
        <title>How to Reach Srinagar - By Air, Rail & Road - Complete Travel Guide 2025</title>
        <meta 
          name="description" 
          content="Complete guide on how to reach Srinagar, the summer capital of Kashmir, by air, rail and road. Find the best transportation options to reach the heaven on earth." 
        />
        <meta name="keywords" content="how to reach Srinagar, Srinagar travel guide, travel to Srinagar, Srinagar airport, Dal Lake, houseboats, Kashmir travel" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How to Reach Srinagar
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Discover the best ways to reach Srinagar, the summer capital of Kashmir, 
                known for its houseboats, Shikaras, and magnificent Mughal gardens.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Srinagar is fondly known as heaven on earth. It is located in the union territory of the state, on the banks of the very famous river, Jhelum. The summer capital of the state is known for its houseboats and gondola-type rowboats- Shikaras on Dal Lake and Nigeen Lake.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Srinagar is considered to be the dream destination for honeymooners and family vacations. The Shikaras help tourists to visit the Floating Vegetable Market and the Mir Bahris – a community of locals who live on the lake itself. In addition, the houseboats provide a beautiful and unique stay experience at the lake.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Even Kashmiri cuisine is famous throughout the world. So, when in Srinagar, you must let your tastebuds experience some unique fragrant spices. Srinagar is also famous for its Kashmiri shawls, Kashmiri apples, and dried fruits. You can get these at the Lal Chowk Market.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4 4 4M8 17l4 4 4-4"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Dal Lake</h3>
              <p className="text-sm text-gray-600">Famous houseboats and Shikara rides</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mughal Gardens</h3>
              <p className="text-sm text-gray-600">Nishat Bagh, Shalimar Bagh</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Shopping</h3>
              <p className="text-sm text-gray-600">Kashmiri shawls and handicrafts</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cuisine</h3>
              <p className="text-sm text-gray-600">Traditional Kashmiri food</p>
            </div>
          </div>

          {/* Transport Options */}
          <div className="space-y-12">
            {/* By Air Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Reach Srinagar by Air</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you are planning to travel by air to Srinagar, then it is going to be the most convenient travel for you. Srinagar houses the Sheikh-Ul-Alam Airport (IATA code SXR) which is just 15kms away from the city centre. The airport is well connected to almost all major cities in the country that have direct and connecting flights running between them at regular intervals.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Airport Information:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Airport:</strong> Sheikh-Ul-Alam International Airport (SXR)</li>
                      <li>• <strong>Distance from city:</strong> 15km from Srinagar city center</li>
                      <li>• <strong>Connected cities:</strong> Delhi, Mumbai, Jammu, Kolkata, Bangalore</li>
                      <li>• <strong>Flight frequency:</strong> Multiple daily flights</li>
                      <li>• <strong>Transport:</strong> Taxi services available from airport</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Flight Tips</h4>
                    <ul className="space-y-3 text-blue-100">
                      <li className="flex items-center"><span className="mr-2">✈️</span> Book in advance for better fares</li>
                      <li className="flex items-center"><span className="mr-2">🎫</span> Check weather conditions before travel</li>
                      <li className="flex items-center"><span className="mr-2">🚖</span> Pre-paid taxis available at airport</li>
                      <li className="flex items-center"><span className="mr-2">📋</span> Carry valid photo identification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* By Rail Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Reach Srinagar by Rail</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Kashmir does not have a railway station. The nearest railway station to Srinagar is the Jammu Tawi railway station, which is located 300kms away. However, the frequency of trains to Jammu is terrific and almost all major cities have trains running to Jammu. So, a train journey can be a fruitful option to travel to Kashmir. From the Jammu Tawi Railway station, a private cab, state bus or private bus will help you to reach Srinagar.
                  </p>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Railway Information:</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Nearest station:</strong> Jammu Tawi Railway Station</li>
                      <li>• <strong>Distance:</strong> 300km from Srinagar</li>
                      <li>• <strong>Journey time:</strong> 6-8 hours by road from Jammu</li>
                      <li>• <strong>Major trains:</strong> Rajdhani Express, Jammu Mail</li>
                      <li>• <strong>Onward transport:</strong> Buses, taxis, private cabs</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Train Travel Tips</h4>
                    <ul className="space-y-3 text-green-100">
                      <li className="flex items-center"><span className="mr-2">🚂</span> Book train tickets well in advance</li>
                      <li className="flex items-center"><span className="mr-2">🎫</span> Pre-book taxi from Jammu to Srinagar</li>
                      <li className="flex items-center"><span className="mr-2">🕐</span> Allow full day for the journey</li>
                      <li className="flex items-center"><span className="mr-2">🧳</span> Keep essentials in carry-on bag</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* By Road Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Reach Srinagar by Road</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A road trip to Srinagar is going to be perfect. You can either take a bus service if it is available from your base destination, hire a private car or even self-drive to the summer capital of Kashmir. The road conditions are fantastic and suitable for an adventure-filled drive. And the route is so scenic that you will enjoy looking at the magnificent vistas while travelling to Srinagar.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-3">Road Travel Information:</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>Main route:</strong> Via Jammu-Srinagar Highway (NH44)</li>
                      <li>• <strong>From Delhi:</strong> 876km, 12-14 hours</li>
                      <li>• <strong>From Chandigarh:</strong> 630km, 10-12 hours</li>
                      <li>• <strong>Road condition:</strong> Well-maintained highways</li>
                      <li>• <strong>Scenic stops:</strong> Patnitop, Batote, Ramban</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Road Trip Tips</h4>
                    <ul className="space-y-3 text-orange-100">
                      <li className="flex items-center"><span className="mr-2">🛣️</span> Check road conditions before travel</li>
                      <li className="flex items-center"><span className="mr-2">⛽</span> Keep fuel tank filled</li>
                      <li className="flex items-center"><span className="mr-2">🗺️</span> Use GPS navigation for best routes</li>
                      <li className="flex items-center"><span className="mr-2">🎒</span> Carry emergency supplies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Best Time and Tips */}
          <div className="mt-12 bg-yellow-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-yellow-900 mb-6">Travel Tips for Srinagar</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-3">Best Time to Visit</h4>
                <p className="text-yellow-700 mb-2">The best time to visit the city is usually during the summer (March to October).</p>
                <p className="text-yellow-700">During winter, heavy snowfall affects the connectivity of Srinagar.</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-3">What to Pack</h4>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Warm clothes (even in summer evenings)</li>
                  <li>• Valid photo identification</li>
                  <li>• Camera for Dal Lake pictures</li>
                  <li>• Cash for local shopping</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-3">Must Visit Places</h4>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Dal Lake and Nigeen Lake</li>
                  <li>• Mughal Gardens</li>
                  <li>• Tulip Garden (seasonal)</li>
                  <li>• Lal Chowk Market</li>
                </ul>
              </div>
            </div>
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
      </div>
    </>
  );
};


export default HowToReachSrinagar;