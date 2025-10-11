import React from 'react';
import { Helmet } from 'react-helmet-async';
const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1760071761/Best_Places_to_Visit_in_Ladakh_woorvv.webp";

const PlacesToVisitInLadakh = () => {
  return (
    <>
      <Helmet>
        <title>10 Best Places to Visit in Ladakh - Land of High Passes 2025</title>
        <meta 
          name="description" 
          content="Discover the top 10 must-visit destinations in Ladakh including Pangong Tso, Nubra Valley, Leh Palace, Hemis Monastery, and more. Complete travel guide to the Land of High Passes." 
        />
        <meta name="keywords" content="Ladakh places to visit, Pangong Tso, Nubra Valley, Leh Palace, Hemis Monastery, Khardung La Pass, Zanskar Valley, Tso Moriri, Shanti Stupa, Magnetic Hill" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative text-white py-30 bg-cover bg-center bg-no-repeat min-h-[75vh]"
        style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Places to Visit in Ladakh
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Explore the "Land of High Passes" where ancient monasteries meet pristine lakes, 
                lunar landscapes challenge adventurers, and Buddhist culture thrives in the Trans-Himalayas
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Ladakh, known as the "Land of High Passes," is a mesmerizing region in the northernmost 
              part of India that offers some of the world's most spectacular landscapes and unique 
              cultural experiences. Situated at an average altitude of 3,500 meters, this cold desert 
              region is characterized by dramatic mountain ranges, pristine high-altitude lakes, ancient 
              Buddhist monasteries, and lunar-like landscapes that have earned it the nickname "Moonland 
              on Earth." From the azure waters of Pangong Tso to the sand dunes of Nubra Valley, Ladakh 
              presents a fascinating blend of natural wonders and spiritual heritage.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The region's unique position at the crossroads of Central Asia, Tibet, and the Indian 
              subcontinent has created a distinctive culture that seamlessly blends Tibetan Buddhism 
              with local traditions. Whether you're seeking spiritual enlightenment in ancient gompas, 
              adventure on the world's highest motorable passes, or tranquility beside mirror-like 
              alpine lakes, Ladakh offers transformative experiences that challenge both body and soul 
              while revealing the incredible resilience of life in one of Earth's most extreme environments.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#pangong-tso" className="text-amber-600 hover:text-amber-800 font-semibold">1. Pangong Tso</a>
              <a href="#nubra-valley" className="text-amber-600 hover:text-amber-800 font-semibold">2. Nubra Valley</a>
              <a href="#leh-palace" className="text-amber-600 hover:text-amber-800 font-semibold">3. Leh Palace</a>
              <a href="#hemis-monastery" className="text-amber-600 hover:text-amber-800 font-semibold">4. Hemis Monastery</a>
              <a href="#tso-moriri" className="text-amber-600 hover:text-amber-800 font-semibold">5. Tso Moriri</a>
              <a href="#khardung-la" className="text-amber-600 hover:text-amber-800 font-semibold">6. Khardung La Pass</a>
              <a href="#zanskar-valley" className="text-amber-600 hover:text-amber-800 font-semibold">7. Zanskar Valley</a>
              <a href="#shanti-stupa" className="text-amber-600 hover:text-amber-800 font-semibold">8. Shanti Stupa</a>
              <a href="#magnetic-hill" className="text-amber-600 hover:text-amber-800 font-semibold">9. Magnetic Hill</a>
              <a href="#zoji-la" className="text-amber-600 hover:text-amber-800 font-semibold">10. Zoji La Pass</a>
            </div>
          </div>
           {/* Image Gallery Section 1 - After Hero */}
         <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ladakh Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dw1sh368y/image/upload/v1760071761/Best_Places_to_Visit_in_Ladakh_woorvv.webp" 
                  alt="Exotic Kashmir Experience" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759912427/Excursion_to_Pangong_Lake_jqa3nj.webp" 
                  alt="Exotic Kashmir Experience" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                </div>
              </div><div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759912429/Departure_from_Leh_ur1igi.webp" 
                  alt="Exotic Kashmir Experience" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                </div>
              </div><div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759912426/Excursion_to_Sham_Valley_kpsnge.webp" 
                  alt="Exotic Kashmir Experience" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Exotic Adventure</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759912426/Leh_to_Nubra_Valley_via_Khardung_La_Pass_n4gg1k.webp" 
                  alt="Comprehensive Kashmir Tour" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Complete Tour</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759911228/Unforgettable_Ladakh_Tour_Package_with_Sonamarg_Stay_pxpir9.webp" 
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

          {/* Place 1: Pangong Tso */}
          <section id="pangong-tso" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Pangong Tso - The Magical Lake</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Pangong Tso, situated at an altitude of 4,350 meters, is one of the world's most 
                  beautiful high-altitude saline lakes, extending 134 kilometers from India to Tibet. 
                  This endorheic lake is renowned for its miraculous color-changing properties, shifting 
                  from deep blue to light blue to green and sometimes silver throughout the day as light 
                  conditions change. Despite being a saltwater lake at such extreme altitude, Pangong 
                  Tso never completely freezes, earning it the mystical reputation of being a "magical 
                  lake" that defies conventional expectations.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Color-Changing Marvel</h4>
                    <p className="text-gray-700 mb-4">
                      The lake's most famous characteristic is its ability to change colors multiple 
                      times throughout the day. This phenomenon occurs due to the varying depths, 
                      mineral content, and the angle of sunlight reflection, creating a natural 
                      spectacle that mesmerizes every visitor.
                    </p>

                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Trans-Boundary Waters</h4>
                    <p className="text-gray-700 mb-4">
                      Approximately 60% of the lake lies in Tibet (China) while 40% is in Indian 
                      territory. This makes it one of the few trans-boundary lakes in the world, 
                      and its pristine beauty remains largely untouched due to its remote location.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Wildlife Sanctuary</h4>
                    <p className="text-gray-700 mb-4">
                      Despite the harsh conditions, the lake supports diverse wildlife including 
                      bar-headed geese, brahminy ducks, and various species of gulls. The area 
                      around the lake is also home to wild horses, yaks, and the rare Changpa goats.
                    </p>

                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Bollywood Fame</h4>
                    <p className="text-gray-700 mb-4">
                      The lake gained international recognition after being featured in the Bollywood 
                      blockbuster "3 Idiots," where its stunning beauty captivated audiences worldwide 
                      and made it a must-visit destination for travelers to Ladakh.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Pangong Tso Visit Tips</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: June to September for optimal weather and accessibility</li>
                    <li>Permits required: Inner Line Permit (ILP) for Indian nationals, Protected Area Permit for foreigners</li>
                    <li>Stay overnight for sunrise and sunset views - camping or guesthouses available</li>
                    <li>Distance from Leh: 160 km (5-6 hours drive) via Chang La Pass</li>
                    <li>Carry warm clothing as temperatures can drop drastically even in summer</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 2: Nubra Valley */}
          <section id="nubra-valley" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Nubra Valley - Valley of Flowers</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nubra Valley, located at an average altitude of 3,048 meters, is a high-altitude 
                  cold desert that offers a surreal landscape unique to Ladakh. This valley, formed 
                  by the Nubra and Shyok rivers, is accessible via the world-famous Khardung La Pass 
                  and was historically part of the ancient Silk Route connecting Central Asia with Tibet. 
                  The valley's most distinctive feature is its sand dunes at Hunder, where the rare 
                  double-humped Bactrian camels roam freely, creating an otherworldly desert experience 
                  surrounded by snow-capped peaks.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-yellow-800 mb-3">Double-Humped Camels</h4>
                    <p className="text-gray-700 mb-4">
                      Nubra Valley is home to the rare Bactrian camels, descendants of the ancient 
                      Silk Route caravan animals. These double-humped camels are perfectly adapted 
                      to the cold desert conditions and offer unique camel safari experiences among 
                      sand dunes with Himalayan peaks as backdrop.
                    </p>

                    <h4 className="text-xl font-semibold text-yellow-800 mb-3">Ancient Silk Route</h4>
                    <p className="text-gray-700 mb-4">
                      The valley served as a crucial link on the ancient Silk Route, connecting 
                      Central Asia with Tibet and India. This historical significance is evident 
                      in the region's diverse culture and the presence of ancient monasteries and 
                      trading posts.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-yellow-800 mb-3">Sand Dunes & Hot Springs</h4>
                    <p className="text-gray-700 mb-4">
                      The Hunder sand dunes create a desert-like landscape complete with shifting 
                      sands and unique flora. The valley also features natural hot springs at 
                      Panamik, believed to have therapeutic properties and providing warm respite 
                      in the cold desert environment.
                    </p>

                    <h4 className="text-xl font-semibold text-yellow-800 mb-3">Diskit Monastery</h4>
                    <p className="text-gray-700 mb-4">
                      The 14th-century Diskit Monastery houses a massive 32-meter statue of 
                      Maitreya Buddha, visible from kilometers away. This monastery offers 
                      panoramic views of the entire valley and serves as a spiritual center 
                      for the region's Buddhist community.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3">Nubra Valley Adventure</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: May to September for accessible roads and pleasant weather</li>
                    <li>Permits required: Inner Line Permit mandatory for all visitors</li>
                    <li>Key destinations: Hunder (sand dunes), Diskit (monastery), Turtuk (border village)</li>
                    <li>Activities: Camel safari, monastery visits, hot spring baths, village walks</li>
                    <li>Stay options: Desert camps, guesthouses, homestays in traditional villages</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 3: Leh Palace */}
          <section id="leh-palace" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Leh Palace - Little Potala</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The majestic Leh Palace, built in the 17th century by King Sengge Namgyal, stands 
                  as a testament to Ladakh's royal heritage and architectural brilliance. This nine-story 
                  structure, often called the "Little Potala" due to its resemblance to the Potala Palace 
                  in Lhasa, served as the royal residence until the Dogra forces conquered Ladakh in the 
                  mid-19th century. Today, this architectural marvel houses a museum displaying royal 
                  artifacts, ancient manuscripts, traditional costumes, and precious stones, while 
                  offering panoramic views of Leh town and the surrounding Zanskar Range.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Architectural Marvel</h4>
                    <p className="text-gray-700 mb-4">
                      The palace showcases traditional Tibetan architecture with its distinctive 
                      sloping walls, flat roofs, and intricate woodwork. Built using local stone, 
                      mud bricks, and poplar wood, it represents the ingenuity of Ladakhi craftsmen 
                      in creating earthquake-resistant structures.
                    </p>

                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Royal Artifacts</h4>
                    <p className="text-gray-700 mb-4">
                      The palace museum houses an impressive collection of royal belongings including 
                      ceremonial dresses, crowns, precious stones, ancient coins, and weapons. The 
                      library contains rare Buddhist manuscripts and thankas (scroll paintings) dating 
                      back several centuries.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Panoramic Views</h4>
                    <p className="text-gray-700 mb-4">
                      From the palace rooftop, visitors enjoy breathtaking 360-degree views of Leh 
                      town, the Indus Valley, and the surrounding mountain ranges. The sunrise and 
                      sunset views from here are particularly spectacular, casting golden hues over 
                      the entire landscape.
                    </p>

                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Conservation Efforts</h4>
                    <p className="text-gray-700 mb-4">
                      The palace is currently under restoration by the Archaeological Survey of India 
                      to preserve its historical significance. Various international organizations 
                      have also contributed to conservation efforts to maintain this architectural 
                      heritage for future generations.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">Leh Palace Visit Information</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: April to October for optimal accessibility and weather</li>
                    <li>Opening hours: 7:00 AM to 4:00 PM, closed on Sundays</li>
                    <li>Entry fee: Nominal charges for museum access and photography</li>
                    <li>Location: Central Leh, easily accessible on foot from main market</li>
                    <li>Best photography: Early morning and late afternoon for golden light</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 4: Hemis Monastery */}
          <section id="hemis-monastery" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Hemis Monastery - Crown Jewel of Drukpa Buddhism</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Hemis Monastery, founded in 1630 by Stagsang Raspa Nawang Gyatso, is the largest and 
                  wealthiest monastery in Ladakh, serving as the spiritual heart of the Drukpa Buddhist 
                  tradition. Located on the west bank of the Indus River, this monastery houses one of 
                  the largest Buddhist stupas in Ladakh and contains an extensive collection of ancient 
                  manuscripts, thankas, gold and silver statues, and precious stones. The monastery is 
                  world-famous for the Hemis Festival, held annually to commemorate Guru Padmasambhava's 
                  birth anniversary, featuring spectacular masked dances and colorful celebrations.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-red-800 mb-3">Hemis Festival</h4>
                    <p className="text-gray-700 mb-4">
                      The annual Hemis Festival, held in June or July, is Ladakh's most famous religious 
                      celebration featuring mesmerizing Cham dances performed by monks wearing elaborate 
                      masks and colorful robes. Every 12 years, a giant thanka (silk painting) is 
                      unfurled, making it an extremely auspicious occasion.
                    </p>

                    <h4 className="text-xl font-semibold text-red-800 mb-3">Spiritual Treasures</h4>
                    <p className="text-gray-700 mb-4">
                      The monastery houses invaluable spiritual treasures including a massive copper 
                      statue of Buddha, rare manuscripts in Tibetan and Sanskrit, ancient thankas, 
                      and a sacred stupa containing relics of Buddha. The library contains over 
                      108 volumes of Buddhist teachings.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-red-800 mb-3">Architectural Grandeur</h4>
                    <p className="text-gray-700 mb-4">
                      The monastery's architecture reflects traditional Tibetan design with massive 
                      walls, flat roofs, and intricate woodwork. The main assembly hall (Dukhang) 
                      features beautiful murals depicting Buddhist deities and the life of Buddha, 
                      painted with natural pigments that have retained their vibrancy for centuries.
                    </p>

                    <h4 className="text-xl font-semibold text-red-800 mb-3">Monastic Life</h4>
                    <p className="text-gray-700 mb-4">
                      Over 150 monks reside in the monastery, following strict Buddhist practices 
                      including meditation, studies, and ritual ceremonies. Visitors can observe 
                      daily prayer sessions and learn about Buddhist philosophy and monastic 
                      traditions from the resident monks.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">Hemis Monastery Experience</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: June to September, with Hemis Festival being the highlight</li>
                    <li>Distance from Leh: 45 km south-east, accessible by road year-round</li>
                    <li>Entry fee: Minimal charges for photography and museum access</li>
                    <li>Festival dates: Usually in June/July, check lunar calendar for exact dates</li>
                    <li>Respectful attire required: Cover shoulders and legs when entering monastery halls</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 5: Tso Moriri */}
          <section id="tso-moriri" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Tso Moriri - The Mountain Lake</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Tso Moriri, situated at an altitude of 4,522 meters in the Changthang plateau, is 
                  one of the highest lakes in India and a designated Wetland of International Importance 
                  under the Ramsar Convention. This pristine mountain lake, fed by springs and melting 
                  glaciers, maintains its water levels throughout the year and never completely freezes 
                  despite the extreme altitude. The lake spans approximately 28 kilometers in length 
                  and supports diverse wildlife including the rare black-necked crane, bar-headed geese, 
                  and various migratory birds, making it a paradise for wildlife enthusiasts and 
                  photographers.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Wildlife Sanctuary</h4>
                    <p className="text-gray-700 mb-4">
                      The lake and its surrounding wetlands support over 34 bird species including 
                      the endangered black-necked crane, brown-headed gulls, great crested grebe, 
                      and Tibetan sandpiper. The area also hosts mammals like Tibetan wild ass (kiang), 
                      Tibetan gazelle, and blue sheep.
                    </p>

                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Changpa Nomads</h4>
                    <p className="text-gray-700 mb-4">
                      The lake region is home to the semi-nomadic Changpa people who rear the famous 
                      Pashmina goats. These traditional herders have coexisted with the fragile 
                      ecosystem for centuries, following sustainable practices that preserve both 
                      their livelihood and the environment.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Pristine Environment</h4>
                    <p className="text-gray-700 mb-4">
                      Tso Moriri's crystal-clear waters reflect the surrounding snow-capped peaks, 
                      creating mirror-like images that change throughout the day. The lake's isolation 
                      has helped preserve its pristine condition, making it one of the cleanest 
                      high-altitude lakes in the world.
                    </p>

                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Korzok Village</h4>
                    <p className="text-gray-700 mb-4">
                      The small village of Korzok on the lake's northwestern shore is one of the 
                      highest permanently inhabited villages in the world. The village features 
                      a beautiful monastery and offers insights into traditional Ladakhi life at 
                      extreme altitudes.
                    </p>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-teal-800 mb-3">Tso Moriri Wildlife Experience</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: May to September for wildlife viewing and accessibility</li>
                    <li>Distance from Leh: 240 km (7-8 hours drive) through scenic mountain roads</li>
                    <li>Permits required: Inner Line Permit for Indian nationals, special permits for camping</li>
                    <li>Accommodation: Basic guesthouses in Korzok village, camping with permits</li>
                    <li>Wildlife viewing: Early morning and evening hours for best bird spotting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 6: Khardung La Pass */}
          <section id="khardung-la" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Khardung La Pass - Gateway to Nubra</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Khardung La Pass, standing majestically at 5,359 meters (17,582 feet), holds the 
                  distinction of being one of the world's highest motorable passes. Originally built 
                  in 1976 and opened to civilian traffic in 1988, this strategic mountain pass serves 
                  as the gateway to the Nubra and Shyok valleys and was historically crucial for 
                  military operations near the Siachen Glacier. The pass has become a pilgrimage site 
                  for adventure enthusiasts, particularly motorcyclists and automobile enthusiasts, 
                  who consider crossing Khardung La as the ultimate high-altitude driving challenge.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Extreme Altitude Challenge</h4>
                    <p className="text-gray-700 mb-4">
                      At 5,359 meters, the pass presents significant challenges including oxygen 
                      deficiency, extreme weather conditions, and altitude sickness risks. The 
                      thin air contains only 50% of sea-level oxygen, making every breath and 
                      movement a conscious effort for visitors.
                    </p>

                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Strategic Importance</h4>
                    <p className="text-gray-700 mb-4">
                      Built by the Border Roads Organisation (BRO), the pass serves crucial strategic 
                      importance for defense operations in the Siachen region. The road construction 
                      at such extreme altitude represents remarkable engineering achievement and 
                      military necessity.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Adventure Destination</h4>
                    <p className="text-gray-700 mb-4">
                      Khardung La has become legendary among motorcyclists worldwide as the ultimate 
                      high-altitude riding challenge. Thousands of adventurers attempt the journey 
                      annually, testing both their riding skills and physical endurance against 
                      some of the world's most challenging road conditions.
                    </p>

                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Spectacular Views</h4>
                    <p className="text-gray-700 mb-4">
                      From the pass, visitors enjoy breathtaking panoramic views of the Karakoram 
                      and Ladakh mountain ranges, the Shyok and Nubra river valleys, and on clear 
                      days, glimpses of the K2 peak in the distance. The stark lunar landscape 
                      creates an otherworldly experience.
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-3">Khardung La Pass Expedition</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to cross: May to September when roads are generally accessible</li>
                    <li>Distance from Leh: 39 km (2-3 hours drive depending on conditions)</li>
                    <li>Health precautions: Acclimatize in Leh for 2-3 days before attempting the pass</li>
                    <li>Essential items: Warm clothing, sunglasses, sunscreen, oxygen canisters</li>
                    <li>Vehicle requirements: Well-maintained vehicles with winter fuel recommended</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 7: Zanskar Valley */}
          <section id="zanskar-valley" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Zanskar Valley - The Hidden Kingdom</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Zanskar Valley, situated at an average altitude of 3,500-4,000 meters, is one of 
                  the most remote and pristine regions in Ladakh, often referred to as the "Hidden 
                  Kingdom" due to its isolation and preserved Buddhist culture. This high-altitude 
                  desert valley, accessible only for a few months each year, maintains traditional 
                  Tibetan Buddhist lifestyle almost unchanged for centuries. The valley is famous 
                  for the frozen Zanskar River trek (Chadar Trek) in winter, ancient monasteries 
                  like Phugtal and Karsha, and its dramatic landscape of towering cliffs, deep 
                  gorges, and barren mountains that create an otherworldly experience.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Chadar Trek</h4>
                    <p className="text-gray-700 mb-4">
                      The famous Chadar Trek involves walking on the frozen Zanskar River in winter 
                      when temperatures drop to -30°C. This extreme adventure trek, traditionally 
                      used by locals as the only winter route, offers an unparalleled experience 
                      of walking on a river frozen solid.
                    </p>

                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Ancient Monasteries</h4>
                    <p className="text-gray-700 mb-4">
                      Zanskar houses some of Ladakh's most spectacular monasteries, including the 
                      cave monastery of Phugtal built into a cliff face, Karsha Monastery perched 
                      on a mountainside, and Zangla Palace ruins that speak of the region's royal 
                      heritage.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Pristine Culture</h4>
                    <p className="text-gray-700 mb-4">
                      The valley's isolation has preserved authentic Tibetan Buddhist culture, 
                      traditional architecture, and ancient customs. Villages like Padum, Karsha, 
                      and Zangla offer glimpses into a way of life that has remained largely 
                      unchanged for centuries.
                    </p>

                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Extreme Landscape</h4>
                    <p className="text-gray-700 mb-4">
                      Zanskar's terrain features dramatic contrasts from barren mountains and deep 
                      gorges to green oases around villages. The landscape appears lunar-like in 
                      many areas, with erosion-carved formations creating natural sculptures that 
                      defy imagination.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-3">Zanskar Valley Adventure</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Summer access: July to September via Kargil-Padum road (weather permitting)</li>
                    <li>Winter access: January to March via Chadar Trek (for experienced trekkers only)</li>
                    <li>Permits required: Inner Line Permit and special permits for certain areas</li>
                    <li>Accommodation: Basic guesthouses, homestays, and camping options</li>
                    <li>Essential preparation: High-altitude experience, proper gear, local guides recommended</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 8: Shanti Stupa */}
          <section id="shanti-stupa" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Shanti Stupa - Monument of Peace</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Shanti Stupa, perched on a hilltop in Changspa overlooking Leh town, is a magnificent 
                  white-domed Buddhist stupa built to promote world peace and commemorate 2,500 years 
                  of Buddhism. Constructed by the Japanese Buddhist organization Nipponzan Myohoji in 
                  1991 with support from the 14th Dalai Lama, this architectural marvel represents 
                  peace and non-violence. The stupa houses relics of Buddha enshrined by the Dalai 
                  Lama himself and features beautiful reliefs depicting Buddha's life, making it both 
                  a spiritual center and an architectural landmark that offers panoramic views of 
                  Leh valley and surrounding mountain ranges.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white-800 mb-3">Symbol of Peace</h4>
                    <p className="text-gray-700 mb-4">
                      Built as part of the Peace Pagoda mission to promote world peace, Shanti Stupa 
                      stands as a symbol of non-violence and harmony. The white dome structure 
                      visible from miles away serves as a beacon of peace in the rugged Himalayan 
                      landscape.
                    </p>

                    <h4 className="text-xl font-semibold text-white-800 mb-3">Sacred Relics</h4>
                    <p className="text-gray-700 mb-4">
                      The stupa contains precious relics of Lord Buddha, including fragments of 
                      his bone, which were enshrined during the consecration ceremony attended 
                      by the Dalai Lama. These relics make the stupa a pilgrimage site for 
                      Buddhists worldwide.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white-800 mb-3">Architectural Beauty</h4>
                    <p className="text-gray-700 mb-4">
                      The stupa features traditional Buddhist architecture with its gleaming white 
                      dome, golden spire, and intricate reliefs depicting scenes from Buddha's life. 
                      The structure incorporates both Japanese and traditional Ladakhi architectural 
                      elements.
                    </p>

                    <h4 className="text-xl font-semibold text-white-800 mb-3">Panoramic Views</h4>
                    <p className="text-gray-700 mb-4">
                      From the stupa's elevated position, visitors enjoy spectacular 360-degree 
                      views of Leh town, the Indus Valley, Leh Palace, and the surrounding mountain 
                      ranges. The sunrise and sunset views from here are particularly breathtaking.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Shanti Stupa Visit Guide</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: April to October for optimal weather and accessibility</li>
                    <li>Access: 5 km from Leh center, reachable by taxi or 512-step climb from Changspa</li>
                    <li>Best viewing times: Sunrise (5:30-6:30 AM) and sunset (6:30-7:30 PM)</li>
                    <li>Entry: Free access, but respectful behavior expected at religious site</li>
                    <li>Meditation sessions: Early morning and evening prayers open to visitors</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 9: Magnetic Hill */}
          <section id="magnetic-hill" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Magnetic Hill - Gravity Defying Wonder</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Magnetic Hill, located on the Leh-Kargil-Baltic National Highway about 30 kilometers 
                  from Leh, is one of Ladakh's most intriguing natural phenomena that appears to defy 
                  the laws of gravity. This remarkable geographical anomaly creates an optical illusion 
                  where vehicles seem to roll uphill when placed in neutral gear, reaching speeds of 
                  up to 20 kilometers per hour. The phenomenon, scientifically explained as a gravity 
                  hill caused by the unique topography and surrounding landscape, has made this stretch 
                  of road famous worldwide and earned it recognition from the Indian Air Force, which 
                  has installed a signboard marking the "Magnetic Hill" location.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Optical Illusion</h4>
                    <p className="text-gray-700 mb-4">
                      The magnetic hill phenomenon is actually a gravity hill optical illusion where 
                      the layout of surrounding land and lack of visible horizon create the impression 
                      that a slightly downhill slope appears to be an uphill slope, making vehicles 
                      appear to roll upward against gravity.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Scientific Explanation</h4>
                    <p className="text-gray-700 mb-4">
                      The effect is created by the unique topography where the layout of the surrounding 
                      terrain creates a visual reference that conflicts with gravity. The brain interprets 
                      the visual cues incorrectly, making downhill motion appear as uphill movement.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Aviation Interest</h4>
                    <p className="text-gray-700 mb-4">
                      The Indian Air Force has marked this location with official signage due to reports 
                      that aircraft flying over this area need to increase power to maintain altitude, 
                      though this is likely another manifestation of the same topographical optical 
                      illusion affecting depth perception.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Tourist Attraction</h4>
                    <p className="text-gray-700 mb-4">
                      The site has become a popular tourist stop where visitors test the phenomenon 
                      with their vehicles, creating a fun and mystifying experience. The surrounding 
                      landscape also offers beautiful views of the Indus Valley and opportunity for 
                      photography.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Magnetic Hill Experience</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: Year-round, though summer months offer best road conditions</li>
                    <li>Distance from Leh: 30 km on Leh-Kargil highway (45-minute drive)</li>
                    <li>How to experience: Place vehicle in neutral gear at marked spot and observe</li>
                    <li>Safety note: Ensure clear road and follow traffic rules while experimenting</li>
                    <li>Combined visits: Often combined with Gurudwara Pathar Sahib and Sangam viewpoint</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Place 10: Zoji La Pass */}
          <section id="zoji-la" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Zoji La Pass - Gateway to Ladakh</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Zoji La Pass, situated at an altitude of 3,528 meters (11,575 feet) on National 
                  Highway 1, serves as the crucial gateway connecting Kashmir Valley with Ladakh and 
                  is one of the most strategically important mountain passes in India. This treacherous 
                  pass, located on the border between Jammu & Kashmir and Ladakh, presents extreme 
                  challenges with its narrow roads, steep gradients, and severe weather conditions 
                  that keep it closed for nearly six months each year due to heavy snowfall. The pass 
                  holds significant historical importance, having been the site of crucial military 
                  operations during the 1947-48 Indo-Pakistani War and continuing to serve vital 
                  strategic functions for India's defense.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">Strategic Lifeline</h4>
                    <p className="text-gray-700 mb-4">
                      Zoji La serves as the only road link between Kashmir and Ladakh, making it 
                      strategically crucial for both military operations and civilian transportation. 
                      The pass connects Srinagar to Leh and serves as the lifeline for supplies 
                      to Ladakh during the accessible months.
                    </p>

                    <h4 className="text-xl font-semibold text-slate-800 mb-3">Engineering Challenge</h4>
                    <p className="text-gray-700 mb-4">
                      The Border Roads Organisation (BRO) maintains this treacherous route under 
                      extreme conditions. Plans for an all-weather tunnel (Zoji La Tunnel) are 
                      underway to provide year-round connectivity, which will be one of India's 
                      longest road tunnels at 14.15 kilometers.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">Historical Significance</h4>
                    <p className="text-gray-700 mb-4">
                      The pass played a crucial role during Operation Bison in 1948 when Indian 
                      forces, led by Lieutenant Colonel Prithi Singh Brar, recaptured it from 
                      Pakistani infiltrators. This operation was vital for maintaining India's 
                      control over the Ladakh region.
                    </p>

                    <h4 className="text-xl font-semibold text-slate-800 mb-3">Extreme Conditions</h4>
                    <p className="text-gray-700 mb-4">
                      The pass experiences some of the harshest weather conditions in India, with 
                      temperatures dropping to -45°C in winter and snowfall exceeding 10 meters. 
                      The pass remains closed from November to May, isolating Ladakh from road 
                      connectivity during winter months.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Zoji La Pass Crossing</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Open season: Usually June to October, subject to weather and snow conditions</li>
                    <li>Distance from Srinagar: 108 km via Sonamarg (3-4 hours in good conditions)</li>
                    <li>Travel advisories: Check with authorities for current road conditions and permits</li>
                    <li>Vehicle requirements: 4WD recommended, carry emergency supplies and warm clothing</li>
                    <li>Alternative route: Manali-Leh highway when Zoji La is closed (much longer journey)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Travel Guide Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Ladakh Travel Guide</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Best Time to Visit</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li><strong>Summer (June-September):</strong> Peak season, all roads accessible</li>
                      <li><strong>Autumn (October-November):</strong> Clear skies, fewer crowds</li>
                      <li><strong>Winter (December-March):</strong> Extreme cold, limited access</li>
                      <li><strong>Spring (April-May):</strong> Variable weather, some routes closed</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">How to Reach</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li><strong>By Air:</strong> Leh Airport (direct flights from major cities)</li>
                      <li><strong>By Road from Srinagar:</strong> 434 km via Zoji La Pass</li>
                      <li><strong>By Road from Manali:</strong> 479 km via Rohtang Pass</li>
                      <li><strong>Local Transport:</strong> Taxis, bikes, buses for internal travel</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">Important Considerations</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li><strong>Altitude Sickness:</strong> Acclimatize for 2-3 days in Leh</li>
                      <li><strong>Permits Required:</strong> ILP for restricted areas</li>
                      <li><strong>Cash Important:</strong> Limited ATMs, carry sufficient cash</li>
                      <li><strong>Medical Kit:</strong> Essential for high-altitude travel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Experience the Land of High Passes</h2>
              <p className="text-lg leading-relaxed mb-6">
                Ladakh offers an extraordinary journey through some of Earth's most extreme and beautiful 
                landscapes, where ancient Buddhist culture thrives amid towering peaks and pristine lakes. 
                From the magical waters of Pangong Tso to the spiritual heights of Hemis Monastery, from 
                the challenging passes of Khardung La to the hidden kingdom of Zanskar Valley, every 
                destination in Ladakh provides profound experiences that challenge perceptions and 
                transform perspectives.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're seeking spiritual awakening in ancient monasteries, adrenaline-pumping 
                adventures on the world's highest passes, or peaceful contemplation beside mirror-like 
                lakes, Ladakh provides experiences that resonate long after you've returned to sea level. 
                Come discover why this Land of High Passes has captivated travelers, spiritual seekers, 
                and adventurers for generations, offering a glimpse into a world where nature and 
                spirituality exist in perfect harmony.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PlacesToVisitInLadakh;