import React from 'react';
import { Helmet } from 'react-helmet-async';

const HowToReachPahalgam = () => {
  return (
    <>
      <Helmet>
        <title>How to Reach Pahalgam - By Air, Rail & Road - Complete Travel Guide 2025</title>
        <meta 
          name="description" 
          content="Complete guide on how to reach Pahalgam, the Valley of Shepherds, by air, rail and road. Find the best transportation options to reach this scenic destination in Kashmir." 
        />
        <meta name="keywords" content="how to reach Pahalgam, Pahalgam travel guide, travel to Pahalgam, Betaab Valley, Aru Valley, Amarnath yatra, Kashmir travel" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-900 to-teal-900 text-white py-24">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How to Reach Pahalgam
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Discover the best ways to reach Pahalgam, the 'Valley of the Shepherds', 
                famous for its scenic beauty, trekking routes, and as the base for Amarnath Yatra.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Pahalgam is famous for its scenic beauty and is considered a jewel of the breathtaking Liddar valley. It is located in the western part of Kashmir, in the northern region of India. The valley sits at an altitude of 2130 m above sea level surrounded by the great mountains of the Himalaya.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The place is ideal for hiking, trekking and fishing. In fact, it is also the starting point of the Amarnath yatra which is an annual pilgrimage. One of the most beautiful and popular treks in the region is the Kolhoi Glaciers trek via a beautiful village named Aru.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Pahalgam is also the place where Sunny Deol's and Amrita Singh's famous Bollywood movie Betaab, was shot. The valley was then named Betaab Valley. The place houses famous attractions such as Chandanwari, Betaab Valley, Aru Valley, Kolahoi Glacier, Sheshnaag Lake, etc.
            </p>
          </div>

          {/* Key Attractions */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Betaab Valley</h3>
              <p className="text-sm text-gray-600">Famous Bollywood filming location</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Aru Valley</h3>
              <p className="text-sm text-gray-600">Base for Kolhoi Glacier trek</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Amarnath Base</h3>
              <p className="text-sm text-gray-600">Starting point for pilgrimage</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4 4 4M8 17l4 4 4-4"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Liddar Valley</h3>
              <p className="text-sm text-gray-600">Scenic river valley</p>
            </div>
          </div>

          {/* Transport Options */}
          <div className="space-y-12">
            {/* By Air Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Reach Pahalgam by Air</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The fastest, easiest and most convenient way to reach Pahalgam is by air. However, Pahalgam does not have an airport, but the closest airport is in Srinagar. Srinagar airport is well connected to almost all major cities in the country that have direct and connecting flights running between them at regular intervals. Srinagar airport is 96kms away from Pahalgam. Once at the Srinagar airport, you can hire a cab from outside the airport that will take you to Pahalgam.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Airport Information:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Nearest airport:</strong> Srinagar International Airport</li>
                      <li>• <strong>Distance:</strong> 96km from Pahalgam</li>
                      <li>• <strong>Journey time:</strong> 2.5-3 hours by taxi</li>
                      <li>• <strong>Connected cities:</strong> Delhi, Mumbai, Jammu, Kolkata</li>
                      <li>• <strong>Airlines:</strong> Air India, IndiGo, SpiceJet</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Air Travel Tips</h4>
                    <ul className="space-y-3 text-blue-100">
                      <li className="flex items-center"><span className="mr-2">✈️</span> Most convenient option</li>
                      <li className="flex items-center"><span className="mr-2">🚖</span> Pre-book taxi to Pahalgam</li>
                      <li className="flex items-center"><span className="mr-2">🧳</span> Pack warm clothes</li>
                      <li className="flex items-center"><span className="mr-2">📋</span> Carry valid photo ID</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* By Rail Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Reach Pahalgam by Train</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Pahalgam does not have a railway station. About 217 km from Pahalgam, Udhampur is the closest station. However, if you are travelling by train, Jammu is better connected to cities like Mumbai, Delhi, Kanyakumari, Indore, Pune, Chennai, Kolkata, and Rishikesh as compared to Udhampur. Taking a train to Jammu will be preferable. Jammu is 285 km from Pahalgam, so from Jammu, you can take a bus ride, hire a car or self-drive to Pahalgam.
                  </p>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Railway Information:</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Preferred station:</strong> Jammu Tawi (285km)</li>
                      <li>• <strong>Alternative:</strong> Udhampur (217km, limited connectivity)</li>
                      <li>• <strong>Journey time:</strong> 7-8 hours by road from Jammu</li>
                      <li>• <strong>Major trains:</strong> Rajdhani Express, Jammu Mail</li>
                      <li>• <strong>Onward transport:</strong> Bus, taxi, self-drive</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Train Travel Tips</h4>
                    <ul className="space-y-3 text-green-100">
                      <li className="flex items-center"><span className="mr-2">🚂</span> Choose Jammu over Udhampur</li>
                      <li className="flex items-center"><span className="mr-2">🎫</span> Book tickets well in advance</li>
                      <li className="flex items-center"><span className="mr-2">🚌</span> Arrange onward transport</li>
                      <li className="flex items-center"><span className="mr-2">⏰</span> Allow full day for journey</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* By Road Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Reach Pahalgam by Road</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Pahalgam is 96kms far from Srinagar. If you are in Srinagar then you are close by. But if you are planning a road trip from your base destination you can either hire a car, self-drive or look for bus services. From Delhi and Chandigarh, you will easily get bus services to the valley. However, keep in mind that the transport service is restricted on the route from Jammu to Pahalgam during the Amarnath yatra. But there are special yatra coaches available from Jammu and Srinagar.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-3">Road Travel Information:</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>From Srinagar:</strong> 96km, 2.5-3 hours</li>
                      <li>• <strong>From Delhi:</strong> 972km, 14-16 hours</li>
                      <li>• <strong>From Jammu:</strong> 285km, 7-8 hours</li>
                      <li>• <strong>Route:</strong> Via Anantnag</li>
                      <li>• <strong>Road condition:</strong> Good, scenic mountain roads</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Road Trip Tips</h4>
                    <ul className="space-y-3 text-orange-100">
                      <li className="flex items-center"><span className="mr-2">🛣️</span> Scenic drive through valleys</li>
                      <li className="flex items-center"><span className="mr-2">📸</span> Multiple photo stops</li>
                      <li className="flex items-center"><span className="mr-2">⛽</span> Fuel up before leaving Srinagar</li>
                      <li className="flex items-center"><span className="mr-2">🏔️</span> Check weather conditions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Amarnath Yatra Information */}
          <div className="mt-12 bg-purple-50 border-l-4 border-purple-500 p-8">
            <div className="flex">
              <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Amarnath Yatra Special Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Yatra Season (July-August)</h4>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Transport restrictions apply</li>
                      <li>• Special yatra buses from Jammu/Srinagar</li>
                      <li>• Heavy pilgrim traffic</li>
                      <li>• Pre-registration required</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Planning Tips</h4>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Book accommodation well in advance</li>
                      <li>• Carry required permits and documents</li>
                      <li>• Physical fitness certificate needed</li>
                      <li>• Follow designated routes only</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-12 bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6">What to Expect in Pahalgam</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Natural Attractions</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Betaab Valley</li>
                  <li>• Aru Valley</li>
                  <li>• Chandanwari</li>
                  <li>• Kolahoi Glacier</li>
                  <li>• Sheshnaag Lake</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Activities</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Trekking and hiking</li>
                  <li>• Trout fishing</li>
                  <li>• Horse riding</li>
                  <li>• Photography</li>
                  <li>• River rafting (Liddar River)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Best Season</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• <strong>Summer:</strong> April-November</li>
                  <li>• <strong>Weather:</strong> Pleasant, cool nights</li>
                  <li>• <strong>Amarnath:</strong> July-August</li>
                  <li>• <strong>Avoid:</strong> December-March (heavy snow)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Travel Tips */}
          <div className="mt-8 bg-yellow-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">Important Travel Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Pre-Travel Planning</h4>
                <p className="text-yellow-700 mb-4">It is best to plan your travel from your start point to your endpoint. Do not depend on the availability of taxi and bus services outside the airport or railway station. Make sure you book your ride before you reach your destination.</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Weather Preparation</h4>
                <p className="text-yellow-700 mb-4">Weather in Pahalgam is alpine. Summers are pleasant but winters are very chilly with heavy snowfall. Pack warm clothes even during summer months.</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Shopping</h4>
                <p className="text-yellow-700">When in Pahalgam, don't forget to go shopping and buy authentic Kashmiri saffron from nearby Pampore area.</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Accommodation</h4>
                <p className="text-yellow-700">Book accommodation in advance, especially during peak season (April-October) and Amarnath Yatra period.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToReachPahalgam;