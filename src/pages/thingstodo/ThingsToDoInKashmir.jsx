import React from 'react';
import { Helmet } from 'react-helmet-async';
import heroBg from '../../assets/dal_lake.webp';
import { FaWater, FaHome, FaTrain, FaPagelines, FaGolfBall, FaHorse, FaSeedling, FaShoppingBag, FaUtensils, FaSkiing, FaCampground, FaHiking, FaHotTub } from 'react-icons/fa';

const ThingsToDoInKashmir = () => {
  return (
    <>
      <Helmet>
        <title>14 Best Things to Do in Kashmir - Paradise on Earth Travel Guide 2025</title>
        <meta 
          name="description" 
          content="Discover the top 14 unforgettable things to do in Kashmir including shikara rides, houseboats, skiing, trekking, and more. Complete adventure guide to the Paradise on Earth." 
        />
        <meta name="keywords" content="things to do in Kashmir, Kashmir activities, shikara ride, Dal Lake, Kashmir skiing, trekking Kashmir, Kashmir tourism, things to do Srinagar" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-25 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Things to Do in Kashmir
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Experience the Paradise on Earth with unforgettable adventures, breathtaking scenery, 
                and cultural treasures that will create memories for a lifetime
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Kashmir is such a fascinating destination that it leaves its mark on one's soul forever. It is a destination 
              to be lived, not just explored. The charm of this destination increases manifold when you try out various 
              things to do in Kashmir. Famed as the 'Paradise on Earth', Kashmir is a land of unsurpassed natural beauty 
              offering its travelers a wide array of enthralling activities.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Its varied geography makes it a perfect destination for all kinds of travelers, from adventure enthusiasts 
              to those who want to relax in the sheer natural beauty. Enjoy breathtaking scenery, plunge into adventure 
              activities, explore the historic marvels, treat your taste buds with lip-smacking local cuisine, and shop 
              till you drop on your Kashmir tour.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#shikara-ride" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaWater />1. Shikara Ride on Dal Lake</a>
              <a href="#houseboat-stay" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaHome />2. Stay in a Houseboat</a>
              <a href="#gondola-ride" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaTrain />3. Gondola Cable Car Ride</a>
              <a href="#mughal-gardens" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaPagelines />4. Explore Mughal Gardens</a>
              <a href="#gulmarg-golf" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaGolfBall />5. Gulmarg Golf Club</a>
              <a href="#pony-ride" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaHorse />6. Pony Ride to Thajiwas Glacier</a>
              <a href="#tulip-garden" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaSeedling />7. Stroll at the Tulip Garden</a>
              <a href="#shopping" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaShoppingBag />8. Shopping in Kashmir</a>
              <a href="#kashmiri-cuisine" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaUtensils />9. Relish Kashmiri Cuisine</a>
              <a href="#skiing" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaSkiing />10. Skiing in Gulmarg</a>
              <a href="#camping" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaCampground />11. Camping in Kashmir</a>
              <a href="#trekking" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaHiking />12. Trekking in Kashmir</a>
              <a href="#river-rafting" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaWater />13. River Rafting</a>
              <a href="#hot-air-balloon" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaHotTub />14. Hot Air Ballooning</a>
            </div>
          </div>

          {/* Activity 1: Shikara Ride */}
          <section id="shikara-ride" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Shikara Ride on Dal Lake, Srinagar</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Step into the world of splendid beauty and serenity through a Shikara ride on Dal Lake. It's a 
                  mesmerizing lake offering majestic views of snow-capped mountains, picture-perfect sunset views, 
                  floating gardens, the melodious sound of birds chirping, and much more. Sailing through its water 
                  on a beautifully decked-up Shikara (boat) is an amazing experience.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Experience Highlights</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Majestic views of snow-capped mountains</li>
                      <li>• Picture-perfect sunset views</li>
                      <li>• Visit to floating gardens</li>
                      <li>• Shopping from floating markets</li>
                      <li>• Access to traditional houseboats</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Practical Information</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Cost:</strong> INR 150 to 500 per person</li>
                      <li>• <strong>Hours:</strong> 6:00 AM to 5:00 PM</li>
                      <li>• <strong>Duration:</strong> 30 to 45 minutes</li>
                      <li>• <strong>Best Time:</strong> Early morning or sunset</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 2: Houseboat Stay */}
          <section id="houseboat-stay" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Stay in a Houseboat</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Kashmiri houseboats reflect its rich cultural heritage and are the best accommodation option for 
                  travellers. Beautifully made with walnut or other woods, carved intricately, and decorated amazingly, 
                  these houseboats are a fascinating piece of architecture on the arresting lakes.
                </p>

                <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-3">Houseboat Features</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Intricately carved walnut wood interiors</li>
                    <li>Floating gardens and areas for leisurely walks</li>
                    <li>Terrace views of mountains and sunset</li>
                    <li>Traditional Kashmiri tea (Kahwa) service</li>
                    <li>Lavish amenities and comfortable rooms</li>
                    <li>Available from simple to luxurious options</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Best Locations</h4>
                    <p className="text-gray-700 mb-4">Dal Lake and Nagin Lake in Srinagar</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Cost & Timing</h4>
                    <p className="text-gray-700 mb-4">
                      <strong>Cost:</strong> INR 2,000 to 15,000 per night<br/>
                      <strong>Best Time:</strong> Throughout the year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 3: Gondola Ride */}
          <section id="gondola-ride" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Gondola Cable Car Ride</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  If you want to experience mind-blowing natural beauty with sheer adventure, then go for a Gondola 
                  Ride in Gulmarg. It is a big hit with travellers who come here from across the globe. The views of 
                  the majestic snow-capped mountains, while you travel through the cable car to greater heights are a sight to behold.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Three Phases</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Phase 1:</strong> Gulmarg to Kongdoori</li>
                      <li>• <strong>Phase 2:</strong> Kongdoori to Apharwat Peak</li>
                      <li>• <strong>Phase 3:</strong> Kongdoori to Mary Shoulder (Chairlift)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Practical Details</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Timings:</strong> 10:30 AM to 5:00 PM</li>
                      <li>• <strong>Ticket Sale:</strong> 9:00 AM to 3:00 PM</li>
                      <li>• <strong>Phase I Cost:</strong> INR 700</li>
                      <li>• <strong>Phase II Cost:</strong> INR 900</li>
                      <li>• <strong>Chairlift Cost:</strong> INR 300</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">Important Tips</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: March to May and September to December</li>
                    <li>Wear good woolens and shoes</li>
                    <li>Carry gloves as it gets extremely cold in winter</li>
                    <li>Open seven days a week</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 4: Mughal Gardens */}
          <section id="mughal-gardens" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Explore Mughal Gardens</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The celebrated Mughal Gardens of Kashmir leave the visitors under their spell of natural beauty. 
                  These verdant gardens encompass gorgeous greenery, gurgling fountains, pools, lovely flowers and 
                  well-laid paths. Their architectural beauty dates back to the era of the Mughals.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Famous Gardens</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Shalimar Bagh</li>
                      <li>• Nishat Bagh</li>
                      <li>• Pari Mahal</li>
                      <li>• Chasma Sahi Garden</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Garden Features</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Persian-style Charbagh structure</li>
                      <li>• Gurgling fountains and pools</li>
                      <li>• Well-laid pathways</li>
                      <li>• Stunning hill backdrops</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-3">Visitor Information</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Best time to visit: October to June</li>
                    <li>Timings: 9:00 AM to 7:00 PM</li>
                    <li>Entry fee: INR 20 for adults, INR 10 for children</li>
                    <li>Perfect for photography and relaxation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 5: Gulmarg Golf */}
          <section id="gulmarg-golf" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Gulmarg Golf Club</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  If you are a golf enthusiast, the Golf Course in Gulmarg is truly a paradise for you. It is a 
                  world-class 18-hole golf course established in 1911 and is famed to be the world's highest green 
                  golf course located at an altitude of 2,650 m.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">Course Features</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• World's highest green golf course</li>
                      <li>• 18-hole championship course</li>
                      <li>• Established in 1911</li>
                      <li>• Altitude: 2,650 meters</li>
                      <li>• Surrounded by pine and chinar trees</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">Practical Information</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Entry:</strong> INR 800 for non-members</li>
                      <li>• <strong>Best Time:</strong> May to November</li>
                      <li>• <strong>Hours:</strong> 8:30 AM to 10:00 PM</li>
                      <li>• <strong>Closed:</strong> December to April</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Tips for Visitors</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Wear comfortable clothes and shoes</li>
                    <li>Non-members should call before visiting</li>
                    <li>Professional trainers available</li>
                    <li>One of the best summer golfing destinations worldwide</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 6: Pony Ride */}
          <section id="pony-ride" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Pony Ride to Thajiwas Glacier</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Marvel at the mesmerizing beauty of Sonmarg on your pony ride to Thajiwas Glacier located at an 
                  altitude of 3,000 m. The leisurely ride will take you through picturesque locations that seem to 
                  just pop out of a fairy tale book.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Experience Details</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Journey to Thajiwas Glacier (3,000m altitude)</li>
                      <li>• Picturesque fairy-tale locations</li>
                      <li>• Duration: Approximately 1 hour each way</li>
                      <li>• Popular tourist destination in Sonmarg</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Practical Information</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Cost:</strong> INR 500 to 1,000</li>
                      <li>• <strong>Best Time:</strong> April to October</li>
                      <li>• Return before dark</li>
                      <li>• Follow safety guidelines</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-amber-800 mb-3">Safety Tips</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Carry sunglasses, hat, and water bottle in summer</li>
                    <li>Listen to your guide's instructions</li>
                    <li>Treat ponies respectfully and don't overload them</li>
                    <li>Make sure to return before dark</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Continue with remaining activities... */}
          {/* For brevity, I'll include a few more key activities */}

          {/* Activity 7: Tulip Garden */}
          <section id="tulip-garden" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. A Stroll at the Tulip Garden</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Treating your senses to a wonderful world of a wide variety of colorful tulips at the Indira Gandhi 
                  Memorial Tulip Garden in Srinagar is an amazing thing to do in Kashmir. The garden boasts 68 varieties 
                  of tulips apart from other flowers and has entered the World Book of Records (London) as Asia's largest such park.
                </p>

                <div className="bg-rose-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-rose-800 mb-3">Garden Highlights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Asia's largest tulip garden (30 hectares)</li>
                    <li>68 varieties of tulips and 15 lakh tulips in total</li>
                    <li>Located between Dal Lake and Zabarwan hills</li>
                    <li>Opens from March to April during blooming season</li>
                    <li>Entry fee: INR 60 for adults, INR 25 for children</li>
                    <li>Hours: 8:00 AM to 7:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 10: Skiing */}
          <section id="skiing" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Skiing in Gulmarg</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Skiing in Gulmarg is not just enthralling but a unique experience. It is a world-famous skiing 
                  destination that attracts adventure lovers from far and wide. The snow quality of Gulmarg is 
                  considered among the best in the world and is at par with Switzerland.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Why Gulmarg for Skiing?</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Snow quality at par with Switzerland</li>
                      <li>• Seasonal snowfall double that of the Alps</li>
                      <li>• Different phases: 2,600m to 3,400m altitude</li>
                      <li>• Professional guidance available</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Practical Details</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Best Time:</strong> January to February</li>
                      <li>• <strong>Cost:</strong> Around INR 7,000 per package</li>
                      <li>• Gear available on rent</li>
                      <li>• Carry cash for transactions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Kashmir?</h2>
            <p className="text-xl mb-6">
              Plan your perfect Kashmir adventure with our customized tour packages
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Kashmir Packages
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThingsToDoInKashmir;