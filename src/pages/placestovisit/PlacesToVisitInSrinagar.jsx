import React from 'react';
import { Helmet } from 'react-helmet-async';
import KashmirTourPackages from '../../components/Packages/KashmirTourPackages'
import BestsellerKashmirTours from '../../components/Packages/BestsellerKashmirTours'
import HoneymoonSpecial from '../../components/Packages/HoneymoonSpecial'
import KashmirAdventureWinter from '../../components/Packages/KashmirAdventureWinter'
import KashmirCulturalToursAndPackages from '../../components/Packages/KashmirCulturalToursAndPackages'
import KashmirExcursionsSpecial from '../../components/Packages/KashmirExcursionsSpecial'
import KashmirFamilyPackages from '../../components/Packages/KashmirFamilyPackages'
const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1759909445/Gulmarg_to_Srinagar_Departure_ysf0sb.webp";
const PlacesToVisitInSrinagar = () => {
  return (
    <>
      <Helmet>
        <title>10 Best Places to Visit in Srinagar - Summer Capital of Kashmir 2025</title>
        <meta
          name="description"
          content="Discover the top 10 must-visit destinations in Srinagar including Dal Lake, Mughal Gardens, Tulip Garden, and more. Complete travel guide to Kashmir's summer capital."
        />
        <meta name="keywords" content="Srinagar places to visit, Dal Lake, Shalimar Bagh, Nishat Bagh, Tulip Garden, Srinagar tourism, Kashmir summer capital, Mughal gardens, houseboats" />

      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-30 bg-cover bg-center bg-no-repeat  min-h-[75vh]"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Places to Visit in Srinagar
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Explore the summer capital of Kashmir, where pristine lakes meet magnificent gardens
                and ancient temples tell stories of timeless beauty
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Srinagar, the jewel of Kashmir and its summer capital, sits gracefully on the banks of the
              Jhelum River, surrounded by the majestic Himalayas. Known for its pristine lakes, magnificent
              Mughal gardens, traditional houseboats, and vibrant floating markets, Srinagar offers an
              enchanting blend of natural beauty and rich cultural heritage that has captivated travelers for centuries.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              From the iconic Dal Lake with its colorful shikaras to the stunning Tulip Garden that blooms
              with millions of flowers, every corner of Srinagar tells a story of paradise on earth.
              Whether you're seeking romantic moments on houseboats, spiritual solace in ancient temples,
              or cultural immersion in Mughal architecture, Srinagar provides experiences that create lasting memories.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#dal-lake" className="text-emerald-600 hover:text-emerald-800 font-semibold">1. Dal Lake</a>
              <a href="#tulip-garden" className="text-emerald-600 hover:text-emerald-800 font-semibold">2. Tulip Garden</a>
              <a href="#shalimar-bagh" className="text-emerald-600 hover:text-emerald-800 font-semibold">3. Shalimar Bagh</a>
              <a href="#nishat-bagh" className="text-emerald-600 hover:text-emerald-800 font-semibold">4. Nishat Bagh</a>
              <a href="#shankaracharya-temple" className="text-emerald-600 hover:text-emerald-800 font-semibold">5. Shankaracharya Temple</a>
              <a href="#hazratbal-shrine" className="text-emerald-600 hover:text-emerald-800 font-semibold">6. Hazratbal Shrine</a>
              <a href="#pari-mahal" className="text-emerald-600 hover:text-emerald-800 font-semibold">7. Pari Mahal</a>
              <a href="#chashme-shahi" className="text-emerald-600 hover:text-emerald-800 font-semibold">8. Chashme Shahi</a>
              <a href="#nigeen-lake" className="text-emerald-600 hover:text-emerald-800 font-semibold">9. Nigeen Lake</a>
              <a href="#char-chinar" className="text-emerald-600 hover:text-emerald-800 font-semibold">10. Char Chinar</a>
            </div>
          </div>
          {/* Image Gallery Section 1 - After Hero */}
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Srinagar Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907937/Arrival_Dal_Lake_Introduction_dt4jja.webp"
                    alt="Exotic Kashmir Experience"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907938/Shankaracharya_Surroundings_kbsuvp.webp"
                    alt="Exotic Kashmir Experience"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                  </div>
                </div><div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907935/Mughal_Gardens_City_Tour_bonery.webp"
                    alt="Exotic Kashmir Experience"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                  </div>
                </div><div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486009/Kashmir_14_ndlkjn.webp"
                    alt="Exotic Kashmir Experience"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486005/Kashmir_11_Dallake_ujqsuw.webp"
                    alt="Comprehensive Kashmir Tour"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Complete Tour</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759219502/Stay_on_Heritage_Houseboats_vynbfb.webp"
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
          {/* Place 1: Dal Lake */}
          <section id="dal-lake" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907937/Arrival_Dal_Lake_Introduction_dt4jja.webp"
                alt="Dal Lake jewel of Srinagar"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Dal Lake - The Jewel of Srinagar</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Dal Lake is the crown jewel of Srinagar, a pristine water body spanning 15 kilometers that
                  perfectly reflects the snow-capped Pir Panjal mountains. This iconic lake is famous for its
                  traditional houseboats, colorful shikaras, floating gardens, and vibrant floating markets
                  that create a unique living ecosystem on water.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Shikara Rides</h4>
                    <p className="text-gray-700 mb-4">
                      Experience the magic of Dal Lake aboard traditional shikaras - beautifully decorated
                      wooden boats that glide silently through the crystal-clear waters. These rides offer
                      breathtaking views of the surrounding mountains and gardens.
                    </p>

                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Houseboat Stay</h4>
                    <p className="text-gray-700 mb-4">
                      Stay in traditional houseboats that float on the lake, offering a unique accommodation
                      experience. These floating palaces feature intricately carved walnut wood interiors
                      and provide an authentic Kashmir living experience.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Floating Markets</h4>
                    <p className="text-gray-700 mb-4">
                      Witness the fascinating floating vegetable market where vendors sell fresh produce
                      directly from their boats. This centuries-old tradition offers glimpses into the
                      unique lifestyle of Dal Lake's inhabitants.
                    </p>

                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Floating Gardens</h4>
                    <p className="text-gray-700 mb-4">
                      Marvel at the innovative floating gardens where locals grow vegetables on artificially
                      created plots that float on the lake surface. These gardens showcase the ingenuity
                      of Kashmiri people in adapting to their environment.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-3">Dal Lake Highlights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: April to October for pleasant weather</li>
                    <li>Early morning and sunset shikara rides offer the most scenic views</li>
                    <li>Book authentic houseboat stays for an unforgettable experience</li>
                    <li>Don't miss the floating market that operates early in the morning</li>
                    <li>Winter visits offer unique ice-skating opportunities when lake freezes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 2: Tulip Garden */}
          <section id="tulip-garden" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907938/Shankaracharya_Surroundings_kbsuvp.webp"
                alt="Indira Gandhi Memorial Tulip Garden"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Indira Gandhi Memorial Tulip Garden</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Asia's largest tulip garden spreads across 30 hectares in the foothills of the Zabarwan
                  Mountains, showcasing over 68 varieties of tulips in a spectacular seven-terraced layout.
                  During the blooming season, over 1.5 million tulips create a breathtaking carpet of colors
                  that attracts visitors from around the world.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-rose-800 mb-3">Tulip Festival</h4>
                    <p className="text-gray-700 mb-4">
                      The annual Tulip Festival held between March and May is a celebration of spring's
                      arrival in Kashmir. The garden comes alive with cultural performances, local handicraft
                      displays, and photography exhibitions during this period.
                    </p>

                    <h4 className="text-xl font-semibold text-rose-800 mb-3">Scenic Views</h4>
                    <p className="text-gray-700 mb-4">
                      The garden offers panoramic views of Dal Lake on one side and the majestic Zabarwan
                      Hills on the other. The terraced layout provides multiple vantage points for capturing
                      the perfect photograph with the mountain backdrop.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-rose-800 mb-3">Variety of Flowers</h4>
                    <p className="text-gray-700 mb-4">
                      Beyond tulips, the garden features roses, hyacinths, daffodils, and other seasonal
                      flowers. Each terrace is themed with different varieties, creating distinct color
                      zones that complement each other beautifully.
                    </p>

                    <h4 className="text-xl font-semibold text-rose-800 mb-3">Photography Paradise</h4>
                    <p className="text-gray-700 mb-4">
                      The garden is a photographer's dream with its carefully planned color arrangements,
                      mountain backdrops, and serene water features. Professional and amateur photographers
                      alike find endless opportunities for stunning captures.
                    </p>
                  </div>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-rose-800 mb-3">Tulip Garden Visit Tips</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: March to May when tulips are in full bloom</li>
                    <li>Garden opens from 9 AM to 6 PM during the season</li>
                    <li>Entry fee applies during the blooming season</li>
                    <li>Visit early morning for best lighting and fewer crowds</li>
                    <li>Check weather conditions as garden may close during heavy rain</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 3: Shalimar Bagh */}
          <section id="shalimar-bagh" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907935/Mughal_Gardens_City_Tour_bonery.webp"
                alt="Shalimar Bagh the abode of love"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Shalimar Bagh - The Abode of Love</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Shalimar Bagh, the largest Mughal Garden in Kashmir, was built in 1619 by Emperor Jahangir
                  for his beloved wife Nur Jahan. Spread across 31 hectares, this magnificent garden represents
                  the pinnacle of Mughal landscaping with its terraced layout, flowing water channels,
                  and architectural brilliance that has withstood the test of time.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Mughal Architecture</h4>
                    <p className="text-gray-700 mb-4">
                      The garden showcases classical Mughal design principles with its four terraced levels
                      representing different themes - public garden, guest garden, and private garden.
                      The symmetrical layout reflects the Mughal concept of paradise.
                    </p>

                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Water Features</h4>
                    <p className="text-gray-700 mb-4">
                      A central water channel flows through the garden, fed by natural springs and adorned
                      with beautiful fountains. The sound of flowing water creates a serene atmosphere
                      throughout the garden complex.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Chinar Trees</h4>
                    <p className="text-gray-700 mb-4">
                      Majestic Chinar trees line the pathways, providing shade and changing colors with
                      seasons. These centuries-old trees have witnessed the garden's rich history and
                      continue to be its crowning glory.
                    </p>

                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Pavilions and Structures</h4>
                    <p className="text-gray-700 mb-4">
                      Historic pavilions and structures within the garden showcase intricate Mughal
                      craftsmanship. The black marble pavilion in the top terrace was the emperor's
                      private retreat offering panoramic views.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">Shalimar Bagh Experience</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: April to October for lush greenery</li>
                    <li>Garden is illuminated in the evenings during tourist season</li>
                    <li>Guided tours available for deeper historical insights</li>
                    <li>Perfect spot for picnics and family gatherings</li>
                    <li>Autumn visits offer spectacular golden Chinar views</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 4: Nishat Bagh */}
          <section id="nishat-bagh" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486009/Kashmir_14_ndlkjn.webp"
                alt="Nishat Bagh garden of bliss"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Nishat Bagh - The Garden of Bliss</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nishat Bagh, known as the "Garden of Bliss," is the second-largest Mughal Garden in Kashmir,
                  built in 1633 by Asaf Khan, brother of Nur Jahan. Located on the eastern shores of Dal Lake
                  with the Zabarwan Mountains as its backdrop, this terraced garden offers one of the most
                  picturesque settings in Srinagar with its twelve levels representing the zodiac signs.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Terraced Layout</h4>
                    <p className="text-gray-700 mb-4">
                      The garden's twelve terraces descend gracefully toward Dal Lake, each level offering
                      different perspectives and experiences. The terraced design maximizes the natural
                      slope while creating distinct viewing areas.
                    </p>

                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Lake Views</h4>
                    <p className="text-gray-700 mb-4">
                      Nishat Bagh offers uninterrupted views of Dal Lake, making it a favorite spot for
                      sunset viewing. The garden's orientation provides perfect vantage points for
                      photography enthusiasts and nature lovers.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Seasonal Beauty</h4>
                    <p className="text-gray-700 mb-4">
                      Each season brings different charm to Nishat Bagh - spring blooms, summer greenery,
                      autumn colors, and winter snow create distinct experiences throughout the year.
                      The garden is particularly stunning during cherry blossom season.
                    </p>

                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Persian Influence</h4>
                    <p className="text-gray-700 mb-4">
                      The garden showcases strong Persian architectural influences in its design and
                      layout. The geometric patterns, water courses, and plant arrangements follow
                      traditional Persian garden principles.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Nishat Bagh Highlights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: Early morning or late afternoon for soft lighting</li>
                    <li>Perfect location for family photography sessions</li>
                    <li>Popular picnic spot with stunning natural backdrop</li>
                    <li>Accessible throughout the year with different seasonal attractions</li>
                    <li>Combine with Shalimar Bagh visit for complete Mughal garden experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 5: Shankaracharya Temple */}
          <section id="shankaracharya-temple" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907938/Shankaracharya_Surroundings_kbsuvp.webp"
                alt="Shankaracharya Temple ancient spiritual heights"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Shankaracharya Temple - Ancient Spiritual Heights</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Perched atop Shankaracharya Hill at 1,100 feet above sea level, this ancient temple dedicated
                  to Lord Shiva is one of Kashmir's oldest shrines. Named after the great philosopher Adi
                  Shankaracharya who is believed to have attained enlightenment here, the temple offers
                  panoramic views of Srinagar city and is accessible via 243 stone steps.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Panoramic Views</h4>
                    <p className="text-gray-700 mb-4">
                      The temple provides breathtaking 360-degree views of Srinagar city, Dal Lake,
                      and the surrounding mountain ranges. The vantage point offers perfect opportunities
                      for capturing the entire valley in one frame.
                    </p>

                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Ancient Architecture</h4>
                    <p className="text-gray-700 mb-4">
                      The temple showcases ancient Kashmir architecture with its stone construction and
                      octagonal pillars supporting a Shiva Lingam encircled by a serpent. The structure
                      has withstood centuries and natural calamities.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Spiritual Significance</h4>
                    <p className="text-gray-700 mb-4">
                      As one of Kashmir's most revered spiritual sites, the temple attracts devotees
                      and spiritual seekers from across India. The peaceful atmosphere and elevated
                      location create an ideal environment for meditation and prayer.
                    </p>

                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Historical Importance</h4>
                    <p className="text-gray-700 mb-4">
                      Also known as Jyeshteshwara Temple, this site has been mentioned in ancient texts
                      and has archaeological significance. The temple represents the continuous spiritual
                      tradition of Kashmir spanning over a millennium.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">Temple Visit Tips</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: May to September for clear views</li>
                    <li>Carry water and wear comfortable shoes for the climb</li>
                    <li>Early morning visits offer serene atmosphere and soft lighting</li>
                    <li>Photography of city views is highly recommended</li>
                    <li>Respect local customs and dress modestly when visiting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 6: Hazratbal Shrine */}
          <section id="hazratbal-shrine" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486005/Kashmir_11_Dallake_ujqsuw.webp"
                alt="Hazratbal Shrine the sacred relic"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Hazratbal Shrine - The Sacred Relic</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Located on the northern shores of Dal Lake, Hazratbal Shrine is Kashmir's holiest Muslim
                  shrine, housing the sacred hair relic (Moi-e-Muqqadas) of Prophet Muhammad. The white
                  marble structure with its distinctive dome and minarets creates a serene spiritual
                  atmosphere against the backdrop of Dal Lake and surrounding mountains.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Sacred Relic</h4>
                    <p className="text-gray-700 mb-4">
                      The shrine houses the Moi-e-Muqqadas, a sacred hair from Prophet Muhammad's beard,
                      which is displayed to the public during special religious occasions. This relic
                      has been preserved here for centuries and attracts pilgrims from across the world.
                    </p>

                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Architectural Beauty</h4>
                    <p className="text-gray-700 mb-4">
                      The shrine's white marble architecture with its central dome and four minarets
                      reflects traditional Islamic design principles. The structure's reflection in
                      Dal Lake creates a mesmerizing sight, especially during sunset.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Religious Festivals</h4>
                    <p className="text-gray-700 mb-4">
                      The shrine becomes the center of major Islamic celebrations, particularly during
                      the Prophet's birthday and other significant occasions when thousands of devotees
                      gather for prayers and ceremonies.
                    </p>

                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Peaceful Ambiance</h4>
                    <p className="text-gray-700 mb-4">
                      The shrine's location on Dal Lake's shores provides a tranquil environment perfect
                      for contemplation and prayer. The combination of spiritual significance and natural
                      beauty creates a unique peaceful atmosphere.
                    </p>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-teal-800 mb-3">Shrine Visit Guidelines</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Open to visitors of all faiths with respect for religious customs</li>
                    <li>Remove shoes before entering the shrine premises</li>
                    <li>Dress modestly and maintain quiet, respectful behavior</li>
                    <li>Photography may be restricted inside the shrine</li>
                    <li>Visit during religious festivals for special cultural experiences</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 7: Pari Mahal */}
          <section id="pari-mahal" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759219502/Stay_on_Heritage_Houseboats_vynbfb.webp"
                alt="Pari Mahal palace of fairies"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Pari Mahal - The Palace of Fairies</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Pari Mahal, literally meaning "Palace of Fairies," is a seven-terraced garden palace
                  perched on the Zabarwan mountain range above Dal Lake. Built by Dara Shikoh, the eldest
                  son of Shah Jahan, this magnificent structure served as his residence, library, and
                  observatory. The ruins today offer stunning panoramic views and showcase remarkable
                  Mughal architectural remnants.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Seven Terraces</h4>
                    <p className="text-gray-700 mb-4">
                      The palace is built on seven terraced levels, each serving different purposes in
                      its heyday. The terraced design follows the natural slope of the mountain while
                      providing distinct spaces for various activities including learning and astronomy.
                    </p>

                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Historical Significance</h4>
                    <p className="text-gray-700 mb-4">
                      Originally built as a residence and center of learning, Pari Mahal was later
                      dedicated to Dara Shikoh's Sufi teacher. The palace served as an important
                      educational center for astronomy, astrology, and Islamic philosophy.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Panoramic Views</h4>
                    <p className="text-gray-700 mb-4">
                      From its elevated position, Pari Mahal offers breathtaking views of Dal Lake,
                      Srinagar city, and the surrounding Kashmir valley. The sunset views from here
                      are particularly spectacular and attract photographers and nature lovers.
                    </p>

                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Garden Features</h4>
                    <p className="text-gray-700 mb-4">
                      The palace gardens feature a variety of flowering plants, trees, and shrubs that
                      bloom in different seasons. The terraced gardens create a beautiful ascending
                      pattern against the mountain backdrop.
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-3">Pari Mahal Experience</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: Late afternoon for sunset views</li>
                    <li>Carry warm clothing as it can get chilly at elevation</li>
                    <li>Perfect spot for panoramic photography of Srinagar</li>
                    <li>Combine with nearby Chashme Shahi Garden visit</li>
                    <li>Peaceful environment ideal for contemplation and relaxation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 8: Chashme Shahi */}
          <section id="chashme-shahi" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907937/Arrival_Dal_Lake_Introduction_dt4jja.webp"
                alt="Chashme Shahi the royal spring"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Chashme Shahi - The Royal Spring</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Chashme Shahi, meaning "Royal Spring," is the smallest but most charming of the Mughal
                  Gardens in Srinagar. Built in 1632 by Ali Mardan Khan under Shah Jahan's orders, this
                  three-terraced garden is famous for its natural spring that flows with crystal-clear
                  water believed to have medicinal properties. The garden's compact size and pristine
                  spring make it a unique jewel among Mughal architectural marvels.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-800 mb-3">Natural Spring</h4>
                    <p className="text-gray-700 mb-4">
                      The garden's centerpiece is a natural spring discovered by the saint Rupa Bhawani.
                      The spring water remains refreshingly cold even during summer and is believed to
                      have healing properties, attracting visitors seeking its therapeutic benefits.
                    </p>

                    <h4 className="text-xl font-semibold text-cyan-800 mb-3">Three Terraces</h4>
                    <p className="text-gray-700 mb-4">
                      The garden is designed in three distinct terraces with the spring originating from
                      the top level where a double-story pavilion stands. Each terrace offers different
                      perspectives of the garden and surrounding landscape.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-cyan-800 mb-3">Persian Design</h4>
                    <p className="text-gray-700 mb-4">
                      The garden showcases classic Persian architectural influences with its geometric
                      layout, water channels, and carefully planned flowerbeds. The design creates a
                      perfect harmony between natural elements and human craftsmanship.
                    </p>

                    <h4 className="text-xl font-semibold text-cyan-800 mb-3">Zabarwan Views</h4>
                    <p className="text-gray-700 mb-4">
                      Nestled in the foothills of the Zabarwan range, the garden offers stunning mountain
                      views and overlooks Dal Lake. The elevated position provides excellent vantage
                      points for photography and nature appreciation.
                    </p>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-800 mb-3">Chashme Shahi Visit Tips</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: Spring and summer for lush greenery</li>
                    <li>Try the natural spring water for its refreshing taste</li>
                    <li>Small size makes it perfect for quick, peaceful visits</li>
                    <li>Combine with Pari Mahal visit as they're located nearby</li>
                    <li>Early morning visits offer tranquil atmosphere and better lighting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 9: Nigeen Lake */}
          <section id="nigeen-lake" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907938/Shankaracharya_Surroundings_kbsuvp.webp"
                alt="Nigeen Lake jewel in the ring"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Nigeen Lake - The Jewel in the Ring</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nigeen Lake, connected to Dal Lake but maintaining its distinct character, is often called
                  "The Jewel in the Ring" due to the ring of trees surrounding it. This pristine lake offers
                  a more tranquil and less crowded alternative to Dal Lake while providing equally stunning
                  scenery, luxury houseboats, and peaceful shikara rides surrounded by willow and poplar trees.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-sky-800 mb-3">Tranquil Environment</h4>
                    <p className="text-gray-700 mb-4">
                      Nigeen Lake offers a more peaceful and secluded experience compared to the busier
                      Dal Lake. The quieter atmosphere makes it perfect for those seeking solitude and
                      deeper connection with nature's beauty.
                    </p>

                    <h4 className="text-xl font-semibold text-sky-800 mb-3">Luxury Houseboats</h4>
                    <p className="text-gray-700 mb-4">
                      The lake is home to some of Kashmir's most luxurious houseboats offering premium
                      accommodations with modern amenities while maintaining traditional charm. These
                      floating hotels provide exclusive experiences on pristine waters.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-sky-800 mb-3">Tree-lined Shores</h4>
                    <p className="text-gray-700 mb-4">
                      The lake is beautifully framed by tall willow and poplar trees that reflect in
                      the clear waters, creating picture-perfect scenes throughout the day. The trees
                      provide natural privacy and enhance the lake's serene atmosphere.
                    </p>

                    <h4 className="text-xl font-semibold text-sky-800 mb-3">Water Activities</h4>
                    <p className="text-gray-700 mb-4">
                      Enjoy peaceful shikara rides, water skiing, and fishing in the lake's calm waters.
                      The less congested environment allows for better appreciation of water sports and
                      leisure activities.
                    </p>
                  </div>
                </div>

                <div className="bg-sky-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-sky-800 mb-3">Nigeen Lake Highlights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: April to October for pleasant weather</li>
                    <li>Perfect for romantic getaways and peaceful retreats</li>
                    <li>Excellent sunrise and sunset viewing opportunities</li>
                    <li>Less crowded alternative to Dal Lake with equal beauty</li>
                    <li>Premium houseboat experiences available for luxury stays</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 10: Char Chinar */}
          <section id="char-chinar" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907935/Mughal_Gardens_City_Tour_bonery.webp"
                alt="Char Chinar four noble trees"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Char Chinar - The Four Noble Trees</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Char Chinar, also known as Rupa Lank, is a small island in Dal Lake famous for the four
                  majestic Chinar trees that stand at its corners, giving the island its name. Built by
                  Murad Bakhsh, brother of Mughal emperor Aurangzeb, this charming island offers a unique
                  perspective of Dal Lake and serves as a perfect picnic spot accessible only by shikara.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Four Chinar Trees</h4>
                    <p className="text-gray-700 mb-4">
                      The island's four ancient Chinar trees, each positioned at a corner, create a natural
                      pavilion that changes dramatically with seasons. In autumn, these trees transform
                      into golden and red canopies, creating one of Kashmir's most photographed scenes.
                    </p>

                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Island Experience</h4>
                    <p className="text-gray-700 mb-4">
                      Being completely surrounded by water, the island offers a unique perspective of
                      Dal Lake and Srinagar city. The secluded location provides privacy and tranquility
                      away from the mainland's hustle and bustle.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Seasonal Beauty</h4>
                    <p className="text-gray-700 mb-4">
                      Each season brings distinct charm to Char Chinar - spring's fresh green leaves,
                      summer's full canopy, autumn's golden colors, and winter's snow-covered branches
                      create year-round photographic opportunities.
                    </p>

                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Picnic Destination</h4>
                    <p className="text-gray-700 mb-4">
                      The island serves as a popular picnic spot for families and couples. The shaded
                      areas under the Chinar trees provide perfect spots for relaxation while enjoying
                      the surrounding lake views and mountain backdrop.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-amber-800 mb-3">Char Chinar Visit Tips</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Accessible only by shikara ride from Dal Lake</li>
                    <li>Best photography opportunities during autumn season</li>
                    <li>Perfect spot for romantic moments and family picnics</li>
                    <li>Combine with overall Dal Lake shikara tour</li>
                    <li>Early morning and late afternoon visits offer best lighting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Travel Guide Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Srinagar Travel Guide</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Best Time to Visit</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li><strong>Summer (April-June):</strong> Pleasant weather, tulip blooms</li>
                      <li><strong>Monsoon (July-September):</strong> Lush greenery, occasional rains</li>
                      <li><strong>Autumn (October-November):</strong> Golden Chinars, clear skies</li>
                      <li><strong>Winter (December-March):</strong> Snow activities, frozen lakes</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">How to Reach</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li><strong>By Air:</strong> Srinagar International Airport</li>
                      <li><strong>By Road:</strong> NH44 connects to major cities</li>
                      <li><strong>By Train:</strong> Nearest station Jammu Tawi (300km)</li>
                      <li><strong>Local Transport:</strong> Taxis, auto-rickshaws, buses</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">Where to Stay</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li><strong>Houseboats:</strong> Dal Lake, Nigeen Lake</li>
                      <li><strong>Luxury Hotels:</strong> Dalgate, Boulevard Road</li>
                      <li><strong>Budget Options:</strong> City center, Residency Road</li>
                      <li><strong>Homestays:</strong> Local family experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Experience the Magic of Srinagar</h2>
              <p className="text-lg leading-relaxed mb-6">
                Srinagar offers an unparalleled blend of natural beauty, rich history, and cultural heritage
                that creates lasting memories for every visitor. From the serene waters of Dal Lake to the
                magnificent Mughal gardens, from ancient temples to vibrant markets, each destination in
                Srinagar tells a unique story of Kashmir's timeless charm.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're seeking spiritual solace, romantic moments, family adventures, or cultural
                exploration, Srinagar's diverse attractions ensure that your journey through the summer
                capital of Kashmir becomes an unforgettable experience that will draw you back to this
                paradise on earth time and again.
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

export default PlacesToVisitInSrinagar;
