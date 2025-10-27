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

const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1759216445/Photography_Walks_opiowj.webp";

const HowToReachGurezValley = () => {
  return (
    <>
      <Helmet>
        <title>How to Reach Gurez Valley - By Air, Rail & Road - Complete Travel Guide 2025</title>
        <meta 
          name="description" 
          content="Complete guide on how to reach Gurez Valley, the Hidden Gem of Kashmir, by air, rail and road. Find the best transportation options to reach this pristine valley." 
        />
        <meta name="keywords" content="how to reach Gurez Valley, Gurez Valley travel guide, travel to Gurez Valley, Kishanganga River, Habba Khatoon peak, Kashmir offbeat" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative  text-white py-24 min-h-[75vh]" style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How to Reach Gurez Valley
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Discover the best ways to reach Gurez Valley, the 'Hidden Gem of Kashmir', 
                a pristine valley surrounded by snow-capped mountains and diverse wildlife.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Gurez Valley is 2,400 meters above sea level in the high Himalayas. It is considered to be a hidden gem in Kashmir waiting to be explored. The valley is surrounded by snow-capped mountains and houses a diverse variety of fauna and wildlife. Gurez Valley is an ideal place to spend amidst some peace.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              When in Gurez Valley, don't forget to visit the Kishanganga River. The river is enclosed by stunning mountain ranges on both sides. Also, you can enjoy river rafting, trout fishing, and camping here. There is also the Habba Khatoon, which is a pyramid-shaped mountain range. It also has a spring that you can visit.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              During July or August, you can witness the three-day Gurez Festival in the valley. The local dance performances, folk songs, and adventure events will make you fall in love with the valley. Also, don't forget to indulge in some photography and click stunning pictures of the beautiful landscape.
            </p>
          </div>

          {/* Key Attractions */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4 4 4M8 17l4 4 4-4"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Kishanganga River</h3>
              <p className="text-sm text-gray-600">Pristine river with mountain backdrop</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Habba Khatoon Peak</h3>
              <p className="text-sm text-gray-600">Pyramid-shaped mountain</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Gurez Festival</h3>
              <p className="text-sm text-gray-600">Cultural celebration in July-August</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Adventure Sports</h3>
              <p className="text-sm text-gray-600">Rafting, fishing, camping</p>
            </div>
          </div>

          {/* Famous Locations */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-12">
            <div className="flex">
              <svg className="w-6 h-6 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <div>
                <h4 className="text-lg font-bold text-emerald-900 mb-2">Famous Spots in Gurez Valley</h4>
                <p className="text-emerald-800">
                  The other most famous spots to visit in the Gurez Valley are Razdan Pass, Dawar and Harmukh. 
                  Don't miss the hanging bridge at Taobatt and the picturesque villages scattered throughout the valley.
                </p>
              </div>
            </div>
          </div>

          {/* Transport Options */}
          <div className="space-y-12">
            {/* By Air Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Reach Gurez Valley by Air</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The best and fastest way to reach Gurez Valley in Kashmir is by flight. Srinagar in Kashmir houses an international airport and is well connected to major cities in India with regular direct and connecting flights from Delhi, Goa, Leh, Mumbai, Kolkata and Bangalore. Gurez Valley from Srinagar airport is at a distance of 125kms, approximately a 4hours drive. This is the closest the valley can get in comparison to any other mode of transport.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Airport Information:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Nearest airport:</strong> Srinagar International Airport</li>
                      <li>• <strong>Distance:</strong> 125km from Gurez Valley</li>
                      <li>• <strong>Journey time:</strong> 4 hours by taxi/car</li>
                      <li>• <strong>Connected cities:</strong> Delhi, Mumbai, Kolkata, Bangalore</li>
                      <li>• <strong>Transport:</strong> Cabs available outside airport</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Air Travel Advantages</h4>
                    <ul className="space-y-3 text-blue-100">
                      <li className="flex items-center"><span className="mr-2">✈️</span> Fastest and most convenient</li>
                      <li className="flex items-center"><span className="mr-2">🚖</span> Shortest road journey from airport</li>
                      <li className="flex items-center"><span className="mr-2">📅</span> Regular flights to Srinagar</li>
                      <li className="flex items-center"><span className="mr-2">⏰</span> Same day reach possible</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* By Rail Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Reach Gurez Valley by Rail</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The nearest railhead to Kashmir is in Jammu. Gurez Valley does not house a railway station and hence you will have to take a train to Jammu from your base destination and then a road trip to Gurez Valley, which is around 372kms away. You can board a train to Jammu from either Mumbai or other parts of the country to reach the Gurez valley. From the Jammu Tawi Railway station, a private cab, state bus or private bus will help you to reach Gurez.
                  </p>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Railway Information:</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Nearest station:</strong> Jammu Tawi Railway Station</li>
                      <li>• <strong>Distance:</strong> 372km from Gurez Valley</li>
                      <li>• <strong>Journey time:</strong> 10-12 hours by road from Jammu</li>
                      <li>• <strong>Connected cities:</strong> Delhi, Mumbai, Kolkata, Chennai</li>
                      <li>• <strong>Onward transport:</strong> Private cab, state bus, private bus</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Train Travel Planning</h4>
                    <ul className="space-y-3 text-green-100">
                      <li className="flex items-center"><span className="mr-2">🚂</span> Budget-friendly option</li>
                      <li className="flex items-center"><span className="mr-2">🎫</span> Book train tickets in advance</li>
                      <li className="flex items-center"><span className="mr-2">🚌</span> Arrange road transport from Jammu</li>
                      <li className="flex items-center"><span className="mr-2">📅</span> Plan for overnight journey</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* By Road Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Reach Gurez Valley by Road</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you are up for a road trip to Gurez Valley, it is going to be the most beautiful drive you must have ever taken. The road conditions are fantastic and suitable for an adventure-filled drive. Now the ball is in your court and it totally depends on where you would like to start your road trip. Either you drive from the city you belong to or begin from Jammu and then head to Gurez Valley.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-3">Road Journey Options:</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>From Srinagar:</strong> 125km, 4 hours (via Bandipora)</li>
                      <li>• <strong>From Jammu:</strong> 372km, 10-12 hours</li>
                      <li>• <strong>From Delhi:</strong> 1,001km, 16-18 hours</li>
                      <li>• <strong>Route condition:</strong> Well-maintained, scenic mountain roads</li>
                      <li>• <strong>Best season:</strong> May to October</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Road Trip Highlights</h4>
                    <ul className="space-y-3 text-orange-100">
                      <li className="flex items-center"><span className="mr-2">🏔️</span> Most scenic mountain drive</li>
                      <li className="flex items-center"><span className="mr-2">📸</span> Incredible photography opportunities</li>
                      <li className="flex items-center"><span className="mr-2">🛣️</span> Well-maintained roads</li>
                      <li className="flex items-center"><span className="mr-2">🚗</span> Self-drive or hire car options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Gurez Festival Information */}
          <div className="mt-12 bg-purple-50 border-l-4 border-purple-500 p-8">
            <div className="flex">
              <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Gurez Festival - Cultural Extravaganza</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Festival Highlights</h4>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Three-day cultural celebration</li>
                      <li>• Local folk dances and songs</li>
                      <li>• Traditional Kashmiri performances</li>
                      <li>• Adventure events and competitions</li>
                      <li>• Local handicraft exhibitions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">When & Where</h4>
                    <ul className="text-purple-700 space-y-1">
                      <li>• <strong>Time:</strong> July - August annually</li>
                      <li>• <strong>Duration:</strong> 3 days</li>
                      <li>• <strong>Venue:</strong> Gurez Valley main ground</li>
                      <li>• <strong>Best time to visit:</strong> During festival days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activities and Attractions */}
          <div className="mt-12 bg-emerald-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">What to Do in Gurez Valley</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-3">Adventure Activities</h4>
                <ul className="text-emerald-700 space-y-1">
                  <li>• River rafting on Kishanganga</li>
                  <li>• Trout fishing</li>
                  <li>• Camping by the riverbank</li>
                  <li>• Trekking to nearby peaks</li>
                  <li>• Photography expeditions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 mb-3">Natural Attractions</h4>
                <ul className="text-emerald-700 space-y-1">
                  <li>• Habba Khatoon peak</li>
                  <li>• Kishanganga River</li>
                  <li>• Razdan Pass</li>
                  <li>• Dawar village</li>
                  <li>• Harmukh peak views</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 mb-3">Best Experience</h4>
                <ul className="text-emerald-700 space-y-1">
                  <li>• Sunrise/sunset photography</li>
                  <li>• Interaction with locals</li>
                  <li>• Wildlife spotting</li>
                  <li>• Peaceful riverside camping</li>
                  <li>• Cultural immersion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Travel Tips */}
          <div className="mt-12 bg-yellow-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-yellow-900 mb-6">Essential Travel Tips for Gurez Valley</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-3">Best Time to Visit</h4>
                <p className="text-yellow-700 mb-4">
                  The best time to visit Gurez Valley is from May to October. The valley remains accessible during these months 
                  with pleasant weather and clear roads. Avoid winter months due to heavy snowfall.
                </p>
                
                <h4 className="font-semibold text-yellow-800 mb-3">What to Pack</h4>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Warm clothing (even in summer)</li>
                  <li>• Trekking shoes and comfortable clothes</li>
                  <li>• Camera with extra batteries</li>
                  <li>• First aid kit and medications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-3">Accommodation & Food</h4>
                <p className="text-yellow-700 mb-4">
                  Limited accommodation options available in Gurez Valley. Book guesthouses or homestays in advance. 
                  Local Kashmiri cuisine is available at most places.
                </p>
                
                <h4 className="font-semibold text-yellow-800 mb-3">Permits & Documentation</h4>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Valid photo ID required</li>
                  <li>• No special permits needed for Gurez</li>
                  <li>• Inform local police upon arrival</li>
                  <li>• Carry cash as ATMs are limited</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6">
            <div className="flex">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-2">Important Travel Information</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Mobile network connectivity may be limited</li>
                  <li>• Carry sufficient cash as ATM facilities are scarce</li>
                  <li>• Road conditions can vary due to weather</li>
                  <li>• Respect local customs and traditions</li>
                  <li>• Inform someone about your travel plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
         {/* Package Sections */}
         <div className="mt-16">
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



export default HowToReachGurezValley;