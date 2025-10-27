import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import { FaWater, FaMountain, FaPagelines, FaTree, FaCampground, FaLeaf } from 'react-icons/fa';
import KashmirTourPackages from '../../components/Packages/KashmirTourPackages'
import BestsellerKashmirTours from '../../components/Packages/BestsellerKashmirTours'
import HoneymoonSpecial from '../../components/Packages/HoneymoonSpecial'
import KashmirAdventureWinter from '../../components/Packages/KashmirAdventureWinter'
import KashmirCulturalToursAndPackages from '../../components/Packages/KashmirCulturalToursAndPackages'
import KashmirExcursionsSpecial from '../../components/Packages/KashmirExcursionsSpecial'
import KashmirFamilyPackages from '../../components/Packages/KashmirFamilyPackages'
const heroBg = 'https://res.cloudinary.com/dw1sh368y/image/upload/v1759910384/Arrival_in_Srinagar_xgxvgp.webp';

const PlacesToVisitInKashmir = () => {
  return (
    <>
      <SEO
        title="10 Best Places to Visit in Kashmir - Kashmir Tourism Guide 2025"
        description="Discover the top 10 must-visit destinations in Kashmir including Srinagar, Gulmarg, Pahalgam, Sonamarg, and more. Complete travel guide with attractions, tips, and highlights."
        keywords="Kashmir places to visit, Srinagar, Gulmarg, Pahalgam, Sonamarg, Gurez Valley, Yusmarg, Kashmir tourism, Kashmir travel guide, Dal Lake, Gulmarg Gondola, Betaab Valley"
        url="https://yourdomain.com/places-to-visit-in-kashmir"
      />

      <div className="min-h-screen bg-gray-50 ">
        {/* Hero Section */}
        <div className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-[95vh] text-white py-30 text-center items-center " style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mt-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Places to Visit in Kashmir
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Discover the heaven on earth through its magnificent landscapes, pristine lakes,
                snow-capped mountains, and breathtaking valleys
              </p>
            </div>
          </div>
        </div>


        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Kashmir, often called "Paradise on Earth," is a land of unparalleled beauty where nature has
              painted its masterpiece with snow-capped peaks, crystal-clear lakes, lush meadows, and vibrant gardens.
              From the serene Dal Lake in Srinagar to the adventure-filled slopes of Gulmarg, every destination
              in Kashmir offers a unique experience that captivates travelers from around the world.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Whether you're seeking romantic getaways, family adventures, or solo explorations, Kashmir's
              diverse landscapes and rich cultural heritage provide the perfect backdrop for unforgettable memories.
              Here's our comprehensive guide to the most spectacular places you must visit in Kashmir.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#srinagar" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"><FaWater />1. Srinagar</a>
              <a href="#gulmarg" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"><FaPagelines />2. Gulmarg</a>
              <a href="#pahalgam" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"><FaCampground />3. Pahalgam</a>
              <a href="#sonamarg" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"><FaMountain />4. Sonamarg</a>
              <a href="#gurez-valley" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"><FaTree />5. Gurez Valley</a>
              <a href="#yusmarg" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"><FaLeaf />6. Yusmarg</a>
            </div>
          </div>

          {/* Image Gallery Section 1 - After Hero */}


          {/* Place 1: Srinagar */}
          <section id="srinagar" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907937/Arrival_Dal_Lake_Introduction_dt4jja.webp"
                alt="Dal Lake and houseboats in Srinagar"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Srinagar - The Jewel of Kashmir</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Srinagar, the summer capital of Jammu and Kashmir, is the heart and soul of the valley.
                  Nestled along the banks of the Jhelum River and surrounded by the majestic Himalayas,
                  this city is famous for its houseboats, shikaras, Mughal gardens, and the iconic Dal Lake.
                  The name Srinagar means "City of Wealth," reflecting its historical importance as a major trading center.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Attractions in Srinagar</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Dal Lake</h4>
                    <p className="text-gray-700 mb-4">
                      The crown jewel of Srinagar, Dal Lake is famous for its shikara rides, floating gardens,
                      and traditional houseboats. Experience the magical sunset views while gliding through
                      the serene waters surrounded by snow-capped mountains.
                    </p>

                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Mughal Gardens</h4>
                    <p className="text-gray-700 mb-4">
                      Visit the stunning Shalimar Bagh, Nishat Bagh, and Chashme Shahi gardens, each showcasing
                      the architectural brilliance of the Mughal era with terraced lawns, fountains, and colorful flowerbeds.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Shankaracharya Temple</h4>
                    <p className="text-gray-700 mb-4">
                      Perched atop the Shankaracharya Hill at 1,100 feet, this ancient temple dedicated to
                      Lord Shiva offers panoramic views of the entire Srinagar city and Dal Lake.
                    </p>

                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Tulip Garden</h4>
                    <p className="text-gray-700 mb-4">
                      Asia's largest tulip garden blooms with over 68 varieties of tulips spread across
                      30 hectares. Best visited during March-April when millions of tulips create a
                      spectacular carpet of colors.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Travel Tips for Srinagar</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: April to October for pleasant weather</li>
                    <li>Stay in traditional houseboats for an authentic experience</li>
                    <li>Don't miss the floating vegetable market on Dal Lake</li>
                    <li>Try local delicacies like Wazwan and Kashmiri tea (Kahwa)</li>
                    <li>Shop for Pashmina shawls, carpets, and saffron at local markets</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 2: Gulmarg */}
          <section id="gulmarg" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759909443/Full_Day_Gulmarg_Snow_Adventure_s0bqdn.webp"
                alt="Snowy landscape and gondola in Gulmarg"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Gulmarg - The Meadow of Flowers</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Gulmarg, literally meaning "Meadow of Flowers," is a pristine hill station located in a
                  cup-shaped valley in the Pir Panjal range. Famous for its world-class ski slopes,
                  golf course, and the iconic Gulmarg Gondola, this destination offers year-round attractions
                  for adventure enthusiasts and nature lovers alike.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Attractions in Gulmarg</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">Gulmarg Gondola</h4>
                    <p className="text-gray-700 mb-4">
                      Asia's highest and longest cable car system takes you from Gulmarg to Apharwat Peak
                      at 13,400 feet. The two-phase journey offers breathtaking views of snow-capped peaks
                      and is a must-do experience in any season.
                    </p>

                    <h4 className="text-xl font-semibold text-green-800 mb-3">Skiing Paradise</h4>
                    <p className="text-gray-700 mb-4">
                      Gulmarg is India's premier skiing destination with powdery snow and slopes suitable
                      for all skill levels. The skiing season runs from December to March, attracting
                      enthusiasts from around the world.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">Gulmarg Golf Course</h4>
                    <p className="text-gray-700 mb-4">
                      The world's highest green golf course at 8,700 feet offers an 18-hole championship
                      course surrounded by snow-capped mountains. Open from May to October, it's a golfer's paradise.
                    </p>

                    <h4 className="text-xl font-semibold text-green-800 mb-3">Alpather Lake</h4>
                    <p className="text-gray-700 mb-4">
                      A pristine alpine lake accessible via trekking, surrounded by snow-capped peaks
                      and wildflower meadows. The trek is moderately challenging but rewards visitors
                      with stunning natural beauty.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Travel Tips for Gulmarg</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Winter (December-March): Perfect for skiing and snow activities</li>
                    <li>Summer (May-August): Ideal for gondola rides and golf</li>
                    <li>Book gondola tickets in advance during peak season</li>
                    <li>Carry warm clothing even in summer due to high altitude</li>
                    <li>Try snowboarding and sledging activities in winter</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 3: Pahalgam */}
          <section id="pahalgam" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1758273930/Pahalgam_Valley_of_Shepherds_xhlbfg.webp"
                alt="Betaab Valley in Pahalgam"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Pahalgam - The Valley of Shepherds</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Pahalgam, known as the "Valley of Shepherds," is a picturesque town located at the confluence
                  of the Lidder River and Sheshnag River. Famous as the base camp for the Amarnath Yatra,
                  Pahalgam offers pristine valleys, pine forests, and adventure activities that make it
                  a favorite among filmmakers and tourists alike.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Attractions in Pahalgam</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Betaab Valley</h4>
                    <p className="text-gray-700 mb-4">
                      Named after the Bollywood movie "Betaab," this stunning valley features lush green
                      meadows, snow-capped mountains, and crystal-clear streams. It's perfect for photography
                      and peaceful walks amidst nature.
                    </p>

                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Aru Valley</h4>
                    <p className="text-gray-700 mb-4">
                      A pristine valley at 2,400 meters altitude, serving as the base camp for several treks
                      including Kolahoi Glacier. The valley offers stunning views, horse riding, and camping opportunities.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Chandanwari</h4>
                    <p className="text-gray-700 mb-4">
                      Famous as the starting point of the Amarnath Yatra, Chandanwari remains snow-covered
                      for most of the year. Visitors can enjoy sledging and witness the source of the Lidder River.
                    </p>

                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Baisaran Valley</h4>
                    <p className="text-gray-700 mb-4">
                      Known as "Mini Switzerland," this meadow is surrounded by dense pine forests and offers
                      panoramic views of snow-capped peaks. It's accessible by pony rides or short hikes.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">Travel Tips for Pahalgam</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: April to October for pleasant weather</li>
                    <li>Book pony rides in advance for valley excursions</li>
                    <li>Try river rafting in the Lidder River during summer</li>
                    <li>Carry comfortable walking shoes for exploring valleys</li>
                    <li>Visit during different seasons for varied experiences</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 4: Sonamarg */}
          <section id="sonamarg" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910373/Chandanwari_Excursion_w5vtvd.webp"
                alt="Thajiwas Glacier in Sonamarg"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Sonamarg - The Meadow of Gold</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Sonamarg, meaning "Meadow of Gold," is a spectacular alpine valley located at an altitude
                  of 2,800 meters. Serving as the gateway to Ladakh, this destination offers pristine glaciers,
                  alpine lakes, and challenging treks. The valley gets its name from the golden light that
                  bathes the meadows during sunrise and sunset.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Attractions in Sonamarg</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Thajiwas Glacier</h4>
                    <p className="text-gray-700 mb-4">
                      Located at 9,186 feet, this accessible glacier offers stunning views of frozen lakes
                      and snow-capped peaks. Visitors can trek or take pony rides to reach this natural wonder,
                      perfect for snow activities.
                    </p>

                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Zoji La Pass</h4>
                    <p className="text-gray-700 mb-4">
                      A high mountain pass at 11,575 feet connecting Kashmir to Ladakh. The pass offers
                      dramatic landscapes and is crucial for accessing the remote regions of Ladakh and Baltistan.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Krishnasar Lake</h4>
                    <p className="text-gray-700 mb-4">
                      One of the alpine lakes accessible through the Kashmir Great Lakes Trek, surrounded
                      by colorful meadows and reflecting the surrounding peaks like a mirror.
                    </p>

                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Baltal Valley</h4>
                    <p className="text-gray-700 mb-4">
                      A base camp for Amarnath pilgrims, this valley offers spectacular views of glaciers
                      and serves as a starting point for various treks in the region.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">Travel Tips for Sonamarg</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: May to October when roads are accessible</li>
                    <li>Carry warm clothing due to high altitude and cold weather</li>
                    <li>Perfect base for trekking expeditions and glacier visits</li>
                    <li>Road may be closed in winter due to heavy snowfall</li>
                    <li>Ideal for adventure enthusiasts and nature photographers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 5: Gurez Valley */}
          <section id="gurez-valley" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1758868866/Summer_Meadow_Walks_Golf_wqj3pd.webp"
                alt="Habba Khatoon Peak in Gurez Valley"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Gurez Valley - The Hidden Paradise</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Gurez Valley is one of Kashmir's most remote and pristine destinations, located at an altitude
                  of 2,400 meters near the Line of Control. This off-the-beaten-path valley offers unspoiled
                  natural beauty, unique Dard culture, and spectacular views of Nanga Parbat peak.
                  The valley remains cut off during winter months, adding to its mystique.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Attractions in Gurez Valley</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Kishanganga River</h4>
                    <p className="text-gray-700 mb-4">
                      A pristine river flowing through the valley, offering opportunities for angling and
                      riverside camping. The river's crystal-clear waters reflect the surrounding mountains
                      creating picture-perfect moments.
                    </p>

                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Habba Khatoon Peak</h4>
                    <p className="text-gray-700 mb-4">
                      A pyramid-shaped peak named after the famous Kashmiri poetess, offering spectacular
                      sunrise and sunset views. The peak dominates the valley's skyline and is steeped in local folklore.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Razdan Pass</h4>
                    <p className="text-gray-700 mb-4">
                      The gateway to Gurez Valley at 3,300 meters, offering panoramic views of the surrounding
                      mountains and valleys. The pass is closed during winter due to heavy snowfall.
                    </p>

                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Dard Culture</h4>
                    <p className="text-gray-700 mb-4">
                      Experience the unique culture of the Dard tribe, one of Kashmir's oldest communities.
                      Witness their traditional lifestyle, wooden architecture, and warm hospitality.
                    </p>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-teal-800 mb-3">Travel Tips for Gurez Valley</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: June to September due to road accessibility</li>
                    <li>Carry necessary permits as it's near the border area</li>
                    <li>Limited accommodation options - plan stays in advance</li>
                    <li>Perfect for those seeking solitude and pristine nature</li>
                    <li>Road conditions can be challenging - suitable for adventurous travelers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 6: Yusmarg */}
          <section id="yusmarg" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759314589/Kashmir_With_Gurez_Valley_Cultural_Tour_wlx64s.webp"
                alt="Meadows and river in Yusmarg"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Yusmarg - The Meadow of Jesus</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Yusmarg, known as the "Meadow of Jesus," is a lesser-known gem located at 2,400 meters
                  altitude in the Budgam district. This peaceful valley offers vast meadows, dense forests,
                  and excellent trekking opportunities. Legend suggests that Jesus Christ once visited this valley,
                  giving it its unique name and spiritual significance.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Attractions in Yusmarg</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Doodhganga River</h4>
                    <p className="text-gray-700 mb-4">
                      A pristine river with milky white water flowing through the valley, perfect for trout
                      fishing and peaceful riverside picnics. The river's unique color gives it its distinctive name.
                    </p>

                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Nilnag Lake</h4>
                    <p className="text-gray-700 mb-4">
                      A beautiful alpine lake accessible through a scenic trek, surrounded by pine forests
                      and meadows. The lake's deep blue waters create stunning reflections of the surrounding landscape.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Tosa Maidan</h4>
                    <p className="text-gray-700 mb-4">
                      A vast meadow at 3,000 meters altitude, once used as a firing range but now open to tourists.
                      The meadow offers excellent trekking, camping, and panoramic mountain views.
                    </p>

                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Charar-i-Sharief</h4>
                    <p className="text-gray-700 mb-4">
                      A nearby pilgrimage site with historical significance, featuring the shrine of Sheikh Noor-ud-din
                      Wali, adding spiritual depth to your Yusmarg visit.
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-3">Travel Tips for Yusmarg</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: April to October for pleasant weather</li>
                    <li>Perfect for day trips from Srinagar (47 km away)</li>
                    <li>Excellent for trekking, horse riding, and photography</li>
                    <li>Limited commercial development maintains natural charm</li>
                    <li>Ideal for those seeking peace and tranquility</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Seasonal Guide */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Visit Kashmir</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-green-800 mb-4">Summer (April - October)</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Pleasant weather perfect for sightseeing</li>
                      <li>Tulip gardens in full bloom (March-April)</li>
                      <li>Best time for trekking and outdoor activities</li>
                      <li>All roads and destinations accessible</li>
                      <li>Ideal for family vacations and honeymoons</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-4">Winter (November - March)</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Snow-covered landscapes and winter sports</li>
                      <li>Skiing and snowboarding in Gulmarg</li>
                      <li>Frozen Dal Lake (during extreme cold)</li>
                      <li>Some remote areas may be inaccessible</li>
                      <li>Perfect for adventure enthusiasts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Plan Your Kashmir Adventure</h2>
              <p className="text-lg leading-relaxed mb-6">
                Kashmir offers an incredible diversity of experiences, from the tranquil houseboats of Dal Lake
                to the adventurous slopes of Gulmarg. Each destination has its unique charm and attractions that
                cater to different types of travelers. Whether you're seeking spiritual solace, adventure thrills,
                or simply want to immerse yourself in nature's beauty, Kashmir provides the perfect setting.
              </p>
              <p className="text-lg leading-relaxed">
                Start planning your Kashmir journey today and discover why this region has captured the hearts
                of travelers for centuries. From the bustling markets of Srinagar to the pristine wilderness of
                Gurez Valley, every moment in Kashmir promises to be extraordinary.
              </p>
            </div>
          </section>

          {/* Package Sections */}

        </div>
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

export default PlacesToVisitInKashmir;
