import React from 'react';
import { Helmet } from 'react-helmet-async';
import KashmirTourPackages from '../../components/Packages/KashmirTourPackages'
import BestsellerKashmirTours from '../../components/Packages/BestsellerKashmirTours'
import HoneymoonSpecial from '../../components/Packages/HoneymoonSpecial'
import KashmirAdventureWinter from '../../components/Packages/KashmirAdventureWinter'
import KashmirCulturalToursAndPackages from '../../components/Packages/KashmirCulturalToursAndPackages'
import KashmirExcursionsSpecial from '../../components/Packages/KashmirExcursionsSpecial'
import KashmirFamilyPackages from '../../components/Packages/KashmirFamilyPackages'
const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1760071763/Best_Places_to_Visit_in_Pahalgam_mgfgfa.webp";

const PlacesToVisitInPahalgam = () => {
  return (
    <>
      <Helmet>
        <title>10 Best Places to Visit in Pahalgam - Valley of Shepherds 2025</title>
        <meta
          name="description"
          content="Discover the top 10 must-visit destinations in Pahalgam including Betaab Valley, Chandanwari, Aru Valley, and more. Complete travel guide to Kashmir's adventure capital."
        />
        <meta name="keywords" content="Pahalgam places to visit, Betaab Valley, Chandanwari, Aru Valley, Pahalgam tourism, Kashmir valley of shepherds, Lidder River, Amarnath base" />

      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-30 bg-cover bg-center bg-no-repeat min-h-[75vh]"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute "></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Places to Visit in Pahalgam
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Explore the "Valley of Shepherds" where pristine valleys meet adventurous trails,
                sacred caves, and the melodious flow of the Lidder River
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Pahalgam, situated at an altitude of 7,200 feet and 94 kilometers from Srinagar, is a
              breathtaking hill station known as the "Valley of Shepherds." This picturesque destination
              serves as the base camp for the sacred Amarnath Yatra and offers some of Kashmir's most
              stunning valleys, including the famous Betaab Valley and Aru Valley. With the melodious
              Lidder River flowing through lush meadows and pine forests, Pahalgam provides the perfect
              blend of adventure, spirituality, and natural beauty.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              From Bollywood movie locations to ancient temples, from challenging glacier treks to peaceful
              riverside picnics, Pahalgam offers diverse experiences for every type of traveler. The town
              transforms dramatically with seasons - from snow-covered wonderlands in winter to vibrant
              green valleys in summer, making it a year-round destination for those seeking to connect
              with nature's magnificence.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#betaab-valley" className="text-green-600 hover:text-green-800 font-semibold">1. Betaab Valley</a>
              <a href="#chandanwari" className="text-green-600 hover:text-green-800 font-semibold">2. Chandanwari</a>
              <a href="#aru-valley" className="text-green-600 hover:text-green-800 font-semibold">3. Aru Valley</a>
              <a href="#baisaran" className="text-green-600 hover:text-green-800 font-semibold">4. Baisaran Valley</a>
              <a href="#lidder-river" className="text-green-600 hover:text-green-800 font-semibold">5. Lidder River</a>
              <a href="#kolahoi-glacier" className="text-green-600 hover:text-green-800 font-semibold">6. Kolahoi Glacier</a>
              <a href="#tulian-lake" className="text-green-600 hover:text-green-800 font-semibold">7. Tulian Lake</a>
              <a href="#mamaleshwar-temple" className="text-green-600 hover:text-green-800 font-semibold">8. Mamaleshwar Temple</a>
              <a href="#amarnath-cave" className="text-green-600 hover:text-green-800 font-semibold">9. Amarnath Cave</a>
              <a href="#overa-wildlife" className="text-green-600 hover:text-green-800 font-semibold">10. Overa Wildlife Sanctuary</a>
            </div>
          </div>

          {/* Image Gallery Section 1 - After Hero */}
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Pahalgam Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1760071763/Best_Places_to_Visit_in_Pahalgam_mgfgfa.webp"
                    alt="Exotic Kashmir Experience"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910377/Betaab_Valley_Aru_Valley_tys9zk.webp"
                    alt="Exotic Kashmir Experience"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                  </div>
                </div><div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910374/Return_to_Srinagar_Departure_z5cvb2.webp"
                    alt="Exotic Kashmir Experience"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                  </div>
                </div><div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910374/Adventure_Activities_ax6sog.webp"
                    alt="Exotic Kashmir Experience"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485998/Kashmir_5_Pahalgam_t9jyon.webp"
                    alt="Comprehensive Kashmir Tour"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Complete Tour</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Complete_Pahalgam_Valley_Experience_z90y7f.webp"
                    alt="Kashmir Valley Exploration"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Valley Exploration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Place 1: Betaab Valley */}
          <section id="betaab-valley" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910377/Betaab_Valley_Aru_Valley_tys9zk.webp"
                alt="Betaab Valley Bollywood's paradise"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Betaab Valley - Bollywood's Paradise</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Betaab Valley, located 15 kilometers from Pahalgam, is one of Kashmir's most picturesque
                  destinations, named after the Bollywood movie "Betaab" filmed here in 1983. This stunning
                  valley is embraced by snow-capped mountains, dense pine forests, and the crystal-clear
                  waters of the Lidder River. The valley's natural beauty has made it a favorite location
                  for numerous Bollywood productions and a must-visit destination for nature lovers.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Cinematic Beauty</h4>
                    <p className="text-gray-700 mb-4">
                      The valley's pristine beauty has served as the backdrop for numerous Hindi films,
                      making it famous across India. The dramatic landscape of meadows, mountains, and
                      rivers creates picture-perfect scenes that have captivated filmmakers and tourists alike.
                    </p>

                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Adventure Activities</h4>
                    <p className="text-gray-700 mb-4">
                      Betaab Valley offers excellent opportunities for trekking, horse riding, and nature
                      walks. The gentle terrain makes it suitable for families while still providing
                      adventure enthusiasts with scenic trails leading into the surrounding mountains.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Photography Paradise</h4>
                    <p className="text-gray-700 mb-4">
                      With its combination of flowing rivers, verdant meadows, and towering deodars,
                      Betaab Valley provides endless photography opportunities. The valley looks spectacular
                      throughout the day, with changing light creating different moods and atmospheres.
                    </p>

                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Peaceful Ambiance</h4>
                    <p className="text-gray-700 mb-4">
                      Despite its popularity, the valley maintains a peaceful atmosphere perfect for
                      relaxation and meditation. The sound of flowing water and rustling leaves creates
                      a natural symphony that soothes the soul and refreshes the mind.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-3">Betaab Valley Experience</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: April to October for pleasant weather and greenery</li>
                    <li>Distance from Pahalgam: 15 km, accessible by taxi or private vehicle</li>
                    <li>Perfect for family picnics and romantic getaways</li>
                    <li>Horse riding and pony rides available for valley exploration</li>
                    <li>Carry camera equipment for stunning landscape photography</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 2: Chandanwari */}
          <section id="chandanwari" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910374/Return_to_Srinagar_Departure_z5cvb2.webp"
                alt="Chandanwari gateway to sacred heights"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Chandanwari - Gateway to Sacred Heights</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Chandanwari, situated 16 kilometers from Pahalgam at an elevation of 2,895 meters, serves
                  as the traditional starting point for the sacred Amarnath Yatra pilgrimage. This snow-laden
                  destination remains covered with pristine white snow for most of the year, creating a
                  winter wonderland even during summer months. The area offers breathtaking views of the
                  surrounding peaks and valleys, with the Lidder River adding to its scenic charm.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Amarnath Yatra Base</h4>
                    <p className="text-gray-700 mb-4">
                      Chandanwari is the traditional starting point for the Amarnath pilgrimage, making it
                      a spiritually significant destination. During the Yatra season, the area transforms
                      into a bustling hub with temporary facilities for thousands of pilgrims.
                    </p>

                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Year-round Snow</h4>
                    <p className="text-gray-700 mb-4">
                      Due to its high altitude, Chandanwari offers snow experiences even during summer months.
                      Visitors can enjoy snowball fights, snow photography, and the unique experience of
                      touching snow while surrounded by green valleys below.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Mountain Vistas</h4>
                    <p className="text-gray-700 mb-4">
                      The location provides spectacular panoramic views of the Himalayan ranges, glaciated
                      peaks, and deep valleys. The dramatic landscape offers some of the most impressive
                      mountain scenery accessible by road in Kashmir.
                    </p>

                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Adventure Starting Point</h4>
                    <p className="text-gray-700 mb-4">
                      Chandanwari serves as the base for several challenging treks including routes to
                      Kolahoi Glacier and other high-altitude destinations. The area attracts serious
                      trekkers and mountaineers seeking Himalayan adventures.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Chandanwari Visit Tips</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: May to September for road accessibility</li>
                    <li>Carry warm clothing even in summer due to high altitude and snow</li>
                    <li>Road conditions can be challenging; hire experienced drivers</li>
                    <li>Perfect for experiencing snow in summer months</li>
                    <li>Respect religious significance during Amarnath Yatra season</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 3: Aru Valley */}
          <section id="aru-valley" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910377/Betaab_Valley_Aru_Valley_tys9zk.webp"
                alt="Aru Valley trekker's paradise"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Aru Valley - Trekker's Paradise</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Aru Valley, located 12 kilometers from Pahalgam, is a pristine alpine valley that serves
                  as the base camp for some of Kashmir's most famous treks, including the Kolahoi Glacier
                  and Tarsar-Marsar lakes. This unspoiled valley is characterized by expansive meadows,
                  dense pine forests, and the sparkling Aru River that flows through its heart. The valley
                  offers a perfect combination of natural beauty and adventure opportunities.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Trek Base Camp</h4>
                    <p className="text-gray-700 mb-4">
                      Aru Valley serves as the starting point for several renowned treks including the
                      Kolahoi Glacier trek, Tarsar-Marsar twin lakes trek, and the challenging routes
                      to Lidderwat and Sheshnag. The valley provides essential facilities for trekkers.
                    </p>

                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Pristine Meadows</h4>
                    <p className="text-gray-700 mb-4">
                      The valley features vast green meadows that burst with wildflowers during summer.
                      These meadows provide perfect camping spots and offer stunning views of the
                      surrounding mountain ranges and glaciated peaks.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Traditional Lifestyle</h4>
                    <p className="text-gray-700 mb-4">
                      Aru Valley offers glimpses into traditional Kashmiri pastoral life. Visitors can
                      observe local shepherds with their flocks, traditional wooden houses, and experience
                      the authentic lifestyle of mountain communities.
                    </p>

                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Adventure Activities</h4>
                    <p className="text-gray-700 mb-4">
                      The valley offers excellent opportunities for horse riding, camping, fishing in
                      the Aru River, and nature photography. During winter, the snow-covered landscape
                      provides opportunities for skiing and other snow activities.
                    </p>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-teal-800 mb-3">Aru Valley Adventure</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time for trekking: June to September for clear mountain access</li>
                    <li>Perfect base camp for multi-day Himalayan treks</li>
                    <li>Local guides and ponies available for hire</li>
                    <li>Camping equipment can be rented locally</li>
                    <li>Respect local customs and environmental guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 4: Baisaran Valley */}
          <section id="baisaran" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910374/Adventure_Activities_ax6sog.webp"
                alt="Baisaran Valley mini Switzerland"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Baisaran Valley - Mini Switzerland</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Baisaran Valley, affectionately known as "Mini Switzerland," is a picturesque highland
                  meadow located 5 kilometers from Pahalgam. This hilltop valley offers panoramic views
                  of the entire Pahalgam region, Lidder Valley, and surrounding mountain ranges. The valley
                  is characterized by rolling green meadows dotted with pine trees and surrounded by
                  snow-capped peaks, creating a landscape remarkably similar to the Swiss Alps.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Swiss-like Landscape</h4>
                    <p className="text-gray-700 mb-4">
                      The valley's rolling green meadows, scattered pine trees, and mountain backdrop
                      create a landscape so similar to Switzerland that it earned the nickname "Mini
                      Switzerland." This resemblance makes it a favorite among photographers and nature lovers.
                    </p>

                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Panoramic Views</h4>
                    <p className="text-gray-700 mb-4">
                      From Baisaran, visitors enjoy breathtaking 360-degree views of the surrounding
                      mountain ranges, including clear vistas of Pahalgam town below and the Lidder
                      Valley stretching into the distance.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Perfect Camping</h4>
                    <p className="text-gray-700 mb-4">
                      The valley provides excellent camping opportunities with level ground, fresh air,
                      and stunning surroundings. It serves as a popular overnight camping destination
                      for those wanting to experience the magic of Kashmir's mountain nights.
                    </p>

                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Horse Riding Paradise</h4>
                    <p className="text-gray-700 mb-4">
                      The open meadows and gentle terrain make Baisaran perfect for horse riding. Visitors
                      can enjoy leisurely rides across the valley while taking in the spectacular mountain
                      scenery and fresh alpine air.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">Baisaran Valley Experience</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: May to October for lush green meadows</li>
                    <li>Accessible by trek or pony ride from Pahalgam</li>
                    <li>Perfect for camping under the stars with permits</li>
                    <li>Excellent horse riding opportunities available</li>
                    <li>Ideal location for peaceful meditation and relaxation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 5: Lidder River */}
          <section id="lidder-river" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485998/Kashmir_5_Pahalgam_t9jyon.webp"
                alt="Lidder River lifeline of Pahalgam"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Lidder River - Lifeline of Pahalgam</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Lidder River, originating from the Kolahoi Glacier, is the lifeline of Pahalgam,
                  flowing for 73 kilometers through pristine valleys and meadows before joining the Jhelum
                  River. This glacial river provides the soundtrack to Pahalgam with its constant melodious
                  flow over rocks and boulders. The river supports rich aquatic life, offers excellent
                  fishing opportunities, and provides water sports activities that attract adventure
                  enthusiasts from across the country.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-800 mb-3">Trout Fishing</h4>
                    <p className="text-gray-700 mb-4">
                      The Lidder River is famous for its brown and rainbow trout population, making it
                      a premier fishing destination in Kashmir. The river offers excellent angling
                      opportunities with proper licenses, attracting fishing enthusiasts from around the world.
                    </p>

                    <h4 className="text-xl font-semibold text-cyan-800 mb-3">White Water Rafting</h4>
                    <p className="text-gray-700 mb-4">
                      During summer months, the river provides thrilling white water rafting experiences
                      with varying difficulty levels. The rafting routes offer spectacular views of the
                      surrounding valleys and mountains while providing adrenaline-pumping adventure.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-cyan-800 mb-3">Riverside Picnics</h4>
                    <p className="text-gray-700 mb-4">
                      The river banks provide perfect spots for family picnics and relaxation. The sound
                      of flowing water, combined with the scenic mountain backdrop, creates an ideal
                      environment for peaceful moments and quality time with loved ones.
                    </p>

                    <h4 className="text-xl font-semibold text-cyan-800 mb-3">Photography Opportunities</h4>
                    <p className="text-gray-700 mb-4">
                      The Lidder River offers countless photography opportunities with its clear waters,
                      rocky bed, surrounding forests, and mountain reflections. Different seasons provide
                      varying moods and colors for stunning landscape photography.
                    </p>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-800 mb-3">Lidder River Activities</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Trout fishing season: March to October with proper permits</li>
                    <li>White water rafting available during summer months</li>
                    <li>Perfect riverside locations for camping and picnics</li>
                    <li>Best photography opportunities during golden hours</li>
                    <li>Swimming possible in calmer sections during warm weather</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 6: Kolahoi Glacier */}
          <section id="kolahoi-glacier" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Complete_Pahalgam_Valley_Experience_z90y7f.webp"
                alt="Kolahoi Glacier goddess of light"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Kolahoi Glacier - Goddess of Light</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Kolahoi Glacier, known as the "Goddess of Light," is Kashmir's most accessible major
                  glacier and the source of the Lidder River. Located at the base of Mount Kolahoi
                  (5,425 meters), this magnificent 5-kilometer-long hanging glacier offers one of the
                  most rewarding trekking experiences in Kashmir. The glacier trek combines stunning
                  alpine scenery, pristine meadows, cascading waterfalls, and the ultimate reward of
                  witnessing a massive Himalayan glacier up close.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Challenging Trek</h4>
                    <p className="text-gray-700 mb-4">
                      The trek to Kolahoi Glacier is considered moderate to challenging, taking 2-3 days
                      to complete. The route passes through Aru Valley, Lidderwat, and Shekwas before
                      reaching the glacier, offering diverse landscapes and stunning mountain vistas.
                    </p>

                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Glacial Formations</h4>
                    <p className="text-gray-700 mb-4">
                      The glacier displays impressive ice formations, crevasses, and seracs that showcase
                      the dynamic nature of glacial movement. Visitors can witness the birthplace of
                      the Lidder River as it emerges from the glacier's snout.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Alpine Wildlife</h4>
                    <p className="text-gray-700 mb-4">
                      The trek route offers opportunities to spot Himalayan wildlife including ibex,
                      snow leopards (rare), marmots, and various high-altitude bird species. The diverse
                      ecosystem supports unique flora and fauna adapted to extreme mountain conditions.
                    </p>

                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Mountain Views</h4>
                    <p className="text-gray-700 mb-4">
                      The glacier provides spectacular views of surrounding peaks including Mount Kolahoi,
                      Brahma Peak, and other towering summits. The panoramic mountain vistas from the
                      glacier vicinity are among Kashmir's most impressive.
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-3">Kolahoi Glacier Trek</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best trekking season: June to September for clear mountain access</li>
                    <li>Trek duration: 4-5 days including acclimatization and return</li>
                    <li>Requires good physical fitness and mountain experience</li>
                    <li>Professional guide and proper equipment essential</li>
                    <li>Permits required for glacier trekking activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 7: Tulian Lake */}
          <section id="tulian-lake" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910377/Betaab_Valley_Aru_Valley_tys9zk.webp"
                alt="Tulian Lake alpine jewel"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Tulian Lake - Alpine Jewel</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Tulian Lake, situated at an altitude of 3,353 meters, is one of Kashmir's most beautiful
                  high-altitude lakes, located 16 kilometers from Pahalgam. This pristine alpine lake is
                  surrounded by the magnificent Pir Panjal and Zanskar mountain ranges, creating a dramatic
                  amphitheater of snow-capped peaks. The lake requires a challenging 2-day trek through
                  Baisaran Valley, but rewards visitors with its turquoise waters, snow patches, and
                  breathtaking mountain scenery.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-rose-800 mb-3">High-Altitude Beauty</h4>
                    <p className="text-gray-700 mb-4">
                      The lake's pristine turquoise waters reflect the surrounding snow-capped peaks,
                      creating a mirror-like surface that perfectly captures the mountain amphitheater.
                      The high altitude ensures snow patches remain around the lake even during summer.
                    </p>

                    <h4 className="text-xl font-semibold text-rose-800 mb-3">Challenging Trek</h4>
                    <p className="text-gray-700 mb-4">
                      The trek to Tulian Lake is considered moderate to difficult, requiring overnight
                      camping and proper mountain equipment. The route passes through diverse landscapes
                      including meadows, forests, and rocky terrain.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-rose-800 mb-3">Camping Paradise</h4>
                    <p className="text-gray-700 mb-4">
                      The lake area provides excellent camping opportunities with level ground and
                      stunning surroundings. Camping beside the lake under starlit skies surrounded
                      by towering peaks creates an unforgettable Himalayan experience.
                    </p>

                    <h4 className="text-xl font-semibold text-rose-800 mb-3">Photography Marvel</h4>
                    <p className="text-gray-700 mb-4">
                      Tulian Lake offers exceptional photography opportunities with its dramatic mountain
                      reflections, changing light conditions, and pristine alpine environment. The
                      contrast between the blue lake and white peaks creates stunning compositions.
                    </p>
                  </div>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-rose-800 mb-3">Tulian Lake Trek Guide</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: July to September for optimal weather conditions</li>
                    <li>Trek difficulty: Moderate to challenging, requires overnight camping</li>
                    <li>Essential to carry warm clothing and camping equipment</li>
                    <li>Hire experienced local guide for safe navigation</li>
                    <li>Respect the pristine environment and practice Leave No Trace</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 8: Mamaleshwar Temple */}
          <section id="mamaleshwar-temple" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910374/Return_to_Srinagar_Departure_z5cvb2.webp"
                alt="Mamaleshwar Temple ancient sacred site"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Mamaleshwar Temple - Ancient Sacred Site</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Mamaleshwar Temple, dedicated to Lord Shiva, is one of Kashmir's oldest and most revered
                  temples, located on the banks of the Lidder River in Pahalgam. Built during the reign
                  of King Jayasimha in the 12th century, this ancient stone temple showcases the remarkable
                  architectural heritage of Kashmir. The temple's unique construction entirely from stone
                  blocks, without any binding material, demonstrates the sophisticated engineering skills
                  of ancient Kashmiri craftsmen.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Ancient Architecture</h4>
                    <p className="text-gray-700 mb-4">
                      The temple is constructed entirely from stone blocks fitted together with remarkable
                      precision without any mortar or binding material. This ancient technique has allowed
                      the structure to withstand centuries of harsh mountain weather and earthquakes.
                    </p>

                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Spiritual Significance</h4>
                    <p className="text-gray-700 mb-4">
                      Dedicated to Lord Shiva, the temple attracts devotees from across Kashmir and India.
                      The temple's location on the sacred Lidder River banks adds to its spiritual
                      importance and creates a peaceful atmosphere for prayer and meditation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Historical Importance</h4>
                    <p className="text-gray-700 mb-4">
                      As one of Kashmir's oldest surviving temples, Mamaleshwar represents the rich
                      cultural and religious heritage of the region. The temple provides insights into
                      ancient Kashmiri architecture and religious practices.
                    </p>

                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Scenic Setting</h4>
                    <p className="text-gray-700 mb-4">
                      The temple's location beside the flowing Lidder River, surrounded by pine forests
                      and mountains, creates a serene and spiritually uplifting environment. The natural
                      setting enhances the temple's peaceful and sacred atmosphere.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-amber-800 mb-3">Temple Visit Guidelines</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Open year-round with easy access from Pahalgam town</li>
                    <li>Respect religious customs and remove shoes before entering</li>
                    <li>Best photography opportunities during soft morning light</li>
                    <li>Peaceful location perfect for meditation and contemplation</li>
                    <li>Combine temple visit with Lidder River exploration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 9: Amarnath Cave */}
          <section id="amarnath-cave" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759910374/Adventure_Activities_ax6sog.webp"
                alt="Amarnath Cave sacred ice lingam"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Amarnath Cave - Sacred Ice Lingam</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  The sacred Amarnath Cave, located at an altitude of 3,888 meters, is one of Hinduism's
                  most revered pilgrimage sites and is accessible via Pahalgam through the traditional
                  route. The cave houses a natural ice formation that resembles a Shiva Lingam, which
                  forms naturally each year and waxes and wanes with the lunar cycle. The annual pilgrimage,
                  known as Amarnath Yatra, attracts hundreds of thousands of devotees who undertake the
                  challenging 46-kilometer trek from Pahalgam to seek blessings.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Sacred Ice Formation</h4>
                    <p className="text-gray-700 mb-4">
                      The cave's main attraction is the naturally formed ice Shiva Lingam that appears
                      each year during summer months. This ice formation is considered miraculous by
                      devotees as it waxes and wanes according to the lunar calendar.
                    </p>

                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Annual Pilgrimage</h4>
                    <p className="text-gray-700 mb-4">
                      The Amarnath Yatra is one of India's most challenging religious pilgrimages, typically
                      conducted between June and August. The journey tests devotees' physical and spiritual
                      endurance while providing profound religious experiences.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Spiritual Journey</h4>
                    <p className="text-gray-700 mb-4">
                      The pilgrimage route from Pahalgam passes through spectacular mountain scenery,
                      creating a spiritual journey that combines physical challenge with natural beauty.
                      The experience is considered deeply transformative by participants.
                    </p>

                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Cultural Significance</h4>
                    <p className="text-gray-700 mb-4">
                      The cave holds immense cultural and religious significance in Hindu mythology,
                      believed to be the place where Lord Shiva revealed the secret of immortality to
                      Goddess Parvati. This adds profound spiritual depth to the pilgrimage experience.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">Amarnath Yatra Information</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Pilgrimage season: Typically June to August (dates vary yearly)</li>
                    <li>Registration mandatory through official channels with health certificate</li>
                    <li>Traditional route via Pahalgam takes 4-5 days</li>
                    <li>Alternative helicopter services available from Pahalgam to Panchtarni</li>
                    <li>Respect religious customs and follow all safety guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 10: Overa Wildlife Sanctuary */}
          <section id="overa-wildlife" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485998/Kashmir_5_Pahalgam_t9jyon.webp"
                alt="Overa Wildlife Sanctuary natural heritage"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Overa-Aru Wildlife Sanctuary - Natural Heritage</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Overa-Aru Wildlife Sanctuary, spanning 425 square kilometers around Pahalgam,
                  preserves the rich biodiversity of the Kashmir Himalayas. This protected area encompasses
                  diverse ecosystems from riverine forests along the Lidder River to alpine meadows and
                  high-altitude environments. The sanctuary serves as a crucial habitat for endangered
                  Himalayan wildlife and offers eco-tourism opportunities for nature enthusiasts seeking
                  to experience Kashmir's pristine wilderness.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Diverse Wildlife</h4>
                    <p className="text-gray-700 mb-4">
                      The sanctuary is home to endangered species including Kashmir stag (Hangul),
                      brown bear, leopard, and Himalayan black bear. The diverse habitats support
                      over 50 mammal species and numerous bird species including the Himalayan snowcock.
                    </p>

                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Varied Ecosystems</h4>
                    <p className="text-gray-700 mb-4">
                      The sanctuary encompasses multiple ecosystem zones from temperate forests of
                      pine, fir, and birch to alpine grasslands and rocky terrain. This diversity
                      supports a wide range of flora and fauna adapted to different altitudes.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Conservation Efforts</h4>
                    <p className="text-gray-700 mb-4">
                      The sanctuary plays a crucial role in conserving Kashmir's endangered wildlife,
                      particularly the Kashmir stag. Conservation programs work to protect habitats
                      and maintain ecological balance in this sensitive Himalayan environment.
                    </p>

                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Eco-Tourism</h4>
                    <p className="text-gray-700 mb-4">
                      The sanctuary offers responsible eco-tourism opportunities including wildlife
                      viewing, bird watching, and nature photography. Guided tours help visitors
                      appreciate the area's biodiversity while supporting conservation efforts.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-3">Wildlife Sanctuary Guidelines</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best wildlife viewing: Early morning and late afternoon hours</li>
                    <li>Permits required for entry - available from forest department</li>
                    <li>Follow all sanctuary rules and maintain respectful distance from wildlife</li>
                    <li>Photography allowed with proper equipment and guidelines</li>
                    <li>Support conservation by choosing eco-friendly tour operators</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Travel Guide Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Pahalgam Travel Guide</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Best Time to Visit</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li><strong>Summer (April-June):</strong> Pleasant weather, ideal for trekking</li>
                      <li><strong>Monsoon (July-August):</strong> Lush greenery, Amarnath Yatra season</li>
                      <li><strong>Autumn (September-November):</strong> Clear skies, golden colors</li>
                      <li><strong>Winter (December-March):</strong> Snow activities, limited accessibility</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">How to Reach</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li><strong>From Srinagar:</strong> 94 km via NH244 (2.5 hours drive)</li>
                      <li><strong>From Anantnag:</strong> 45 km direct route</li>
                      <li><strong>From Jammu:</strong> 315 km via Srinagar</li>
                      <li><strong>Local Transport:</strong> Taxis, ponies for valley visits</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">Where to Stay</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li><strong>Luxury Hotels:</strong> Multi-star properties in town</li>
                      <li><strong>Mid-range Hotels:</strong> Comfortable accommodations</li>
                      <li><strong>Budget Options:</strong> Guesthouses and budget hotels</li>
                      <li><strong>Camping:</strong> Designated areas with permits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Experience the Valley of Shepherds</h2>
              <p className="text-lg leading-relaxed mb-6">
                Pahalgam offers an extraordinary blend of natural beauty, adventure, and spiritual significance
                that makes it one of Kashmir's most beloved destinations. From the cinematic beauty of Betaab
                Valley to the challenging treks leading to pristine glaciers and lakes, every experience in
                Pahalgam connects you with the raw magnificence of the Himalayas and the rich cultural heritage
                of Kashmir.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're seeking thrilling adventures through glacier treks, peaceful moments by the
                Lidder River, spiritual journeys to sacred caves, or simply want to immerse yourself in the
                valley's pristine beauty, Pahalgam provides experiences that nourish the soul and create
                memories that last a lifetime. Come discover why this valley of shepherds has captured hearts
                for generations and continues to be Kashmir's adventure capital.
              </p>
            </div>
          </section>


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

export default PlacesToVisitInPahalgam;