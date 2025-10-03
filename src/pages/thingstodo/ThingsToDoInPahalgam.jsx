import React from 'react';
import { Helmet } from 'react-helmet-async';
import heroBg from '../../assets/dal_lake.webp';
import { FaBinoculars, FaCampground, FaWater, FaSkiing, FaHiking, FaGolfBall, FaLandmark, FaCircle, FaMountain, FaSnowflake } from 'react-icons/fa';

const ThingsToDoInPahalgam = () => {
  return (
    <>
      <Helmet>
        <title>10 Best Things to Do in Pahalgam - Valley of Shepherds Adventure Guide 2025</title>
        <meta 
          name="description" 
          content="Discover the top 10 exciting things to do in Pahalgam including river rafting, skiing, trekking to Kolahoi Glacier, camping in Aru Valley, and more adventures." 
        />
        <meta name="keywords" content="things to do in Pahalgam, Pahalgam activities, Aru Valley camping, Kolahoi Glacier trek, river rafting, Betaab Valley, Pahalgam tourism" />
        
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
                Best Things to Do in Pahalgam
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Experience the Valley of Shepherds with thrilling adventures, pristine valleys, 
                and unforgettable Himalayan experiences
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A great way to make the most out of the land of the Himalayas is to explore the things to do in 
              Pahalgam. Nature has been quite kind to this picturesque valley. With lush green meadows, pine and 
              cedar forests, it is a paradise for travellers and nature lovers.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The most popular tourist activities in Pahalgam are sightseeing, trekking, river rafting, and camping. 
              But there are also a plethora of other adventure activities. This valley is perfect for taking some 
              time off of the busy schedule and soaking in nature's best. Whether you plan on visiting with family, 
              friends, or your partner, here are the most exciting things to do in Pahalgam.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#sightseeing" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaBinoculars />1. Sightseeing Hidden Treasures</a>
              <a href="#camping" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaCampground />2. Camping in Aru Valley</a>
              <a href="#river-rafting" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaWater />3. River Rafting</a>
              <a href="#skiing" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaSkiing />4. Skiing in Scenic Slopes</a>
              <a href="#kolahoi-trek" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaHiking />5. Trek to Kolahoi Glacier</a>
              <a href="#golf" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaGolfBall />6. Pahalgam Golf Course</a>
              <a href="#avantipur" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaLandmark />7. Avantipur Temple</a>
              <a href="#zorbing" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaCircle />8. Zorbing Experience</a>
              <a href="#baisaran" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaMountain />9. Baisaran Hills</a>
              <a href="#chandanwari" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-semibold"><FaSnowflake />10. Sledding in Chandanwari</a>
            </div>
          </div>

          {/* Activity 1: Sightseeing */}
          <section id="sightseeing" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Sightseeing the Hidden Treasures</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Pahalgam is blessed with some of the most exquisite sceneries that one can ever witness. The 
                  verdant meadows, alpine snow-clad mountains, and tall pine and cedar trees create a unique and 
                  pleasant atmosphere. Sightseeing is one of the popular tourist things to do in Pahalgam, and most 
                  visitors often come here to witness its hidden treasures.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Betaab Valley</h4>
                    <p className="text-gray-700 mb-4">
                      Photographers adore Betaab Valley due to its lush greenery and the enchanting melody of rivers. 
                      This place is equipped with several adventure activities such as zipline, fishing, etc. The 
                      tranquillity of this valley also invites visitors to enjoy a quiet and peaceful time.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-emerald-800 mb-3">Natural Beauty</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Verdant meadows and alpine mountains</li>
                      <li>• Tall pine and cedar trees</li>
                      <li>• Crystal-clear mountain streams</li>
                      <li>• Perfect for photography</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 2: Camping */}
          <section id="camping" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Camping in Aru Valley</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  One of the popular tourist activities in Pahalgam is camping in the verdant meadows of Aru Valley. 
                  The snowy peaks, forested meadows, and pristine water bodies create a perfect site for camping. 
                  As you arrive, the sheer beauty will soak you in its serenity; you can lay back and relax while 
                  enjoying the charming beauty of the valley.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">Camping Experience</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Verdant meadows of Aru Valley</li>
                      <li>• Snowy peaks backdrop</li>
                      <li>• Forested meadows setting</li>
                      <li>• Pristine water bodies nearby</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">Additional Activities</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Trout fishing</li>
                      <li>• Picnicking</li>
                      <li>• Nature photography</li>
                      <li>• Perfect for families and couples</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Camping Benefits</h4>
                  <p className="text-gray-700">
                    Whether you're visiting with family or your partner, the valley's solidarity will caress you 
                    with the magic of refreshment and provide the perfect escape from urban life.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 3: River Rafting */}
          <section id="river-rafting" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. River Rafting in the Bubbly Rivers</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  It is one of the most thrilling adventure things to do in Pahalgam that is adored by adventure 
                  lovers. The bubbling water of Lidder and Zanskar River invites tourists to experience the thrill 
                  of their water. Whether you are a beginner or a veteran, in this valley, everyone has their chance 
                  to seek some adrenaline rush.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">For Beginners</h4>
                    <p className="text-gray-700 mb-4">
                      The moderate level 2.5 km stretch is suitable for learners and provides the perfect 
                      introduction to river rafting in the pristine waters of the region.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">For Veterans</h4>
                    <p className="text-gray-700 mb-4">
                      For those wanting the top-level buzz, a 5-8 km stretch will give you a hair-raising rafting 
                      adventure with challenging rapids and thrilling experiences.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Rivers for Rafting</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Lidder River - Perfect for beginners and moderate adventures</li>
                    <li>Zanskar River - More challenging routes for experienced rafters</li>
                    <li>Both rivers offer stunning mountain scenery</li>
                    <li>Professional guides and safety equipment provided</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 4: Skiing */}
          <section id="skiing" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Skiing in the Scenic Slopes</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  After Gulmarg, this valley holds the title of the second best skiing destination in Jammu & Kashmir. 
                  In fact, it is one of the favourite winter things to do in Pahalgam. The scenic slopes of Aru Valley 
                  witness countless tourists and locals skiing in these snow-covered landscapes.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Snow Festival</h4>
                    <p className="text-gray-700 mb-4">
                      Every year in January, a two-day snow festival is conducted. On this occasion, tourists from 
                      all over the world make a visit to enjoy the major winter activities and other adventure things to do in Pahalgam.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-3">Skiing Experience</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Second-best skiing in J&K</li>
                      <li>• Scenic slopes of Aru Valley</li>
                      <li>• Snow-covered landscapes</li>
                      <li>• Ideal mountainous slopes</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">Festival Highlight</h4>
                  <p className="text-gray-700">
                    The highlight of the annual snow festival has always been skiing on the ideal mountainous slopes, 
                    attracting winter sports enthusiasts from around the globe.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 5: Kolahoi Trek */}
          <section id="kolahoi-trek" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Trek to Kolahoi Glacier</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For adventure seekers, there are abundant things to do in Pahalgam. One of them is the trek to 
                  the famous Kolahoi Glacier. It is a hanging glacier located at an elevation of 1800 ft. Thousands 
                  of tourists and adventurers visit this glacier, and the only way to reach is by trekking through 
                  the unbeaten mountainous routes.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Trek Details</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Hanging glacier at 1800 ft elevation</li>
                      <li>• Short but challenging trek</li>
                      <li>• Unbeaten mountainous routes</li>
                      <li>• Popular among adventure enthusiasts</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-orange-800 mb-3">Trek Experience</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Magnificent valley views</li>
                      <li>• Adrenaline-pumping adventure</li>
                      <li>• Tricky and rigid nature</li>
                      <li>• Rewarding destination</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">What Makes It Special</h4>
                  <p className="text-gray-700">
                    This trek anticipates some of the magnificent views of the valley that give an adrenaline rush 
                    and make you pumped to reach the destination, making it one of the wonderful tourist activities in Pahalgam.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 6: Golf */}
          <section id="golf" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Golfing at Pahalgam Golf Course</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  While you are in the Valley of Shepherds, try your hand at golfing at Pahalgam Golf Course. 
                  Avid golfers are fond of this popular tourist thing to do in Pahalgam. This course is nestled 
                  between the Himalayan ranges, which is further beautified by the ever-flowing Lidder River.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Course Features</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Nestled between Himalayan ranges</li>
                      <li>• Beautified by Lidder River</li>
                      <li>• 18-hole golfing arena</li>
                      <li>• One of the best in the country</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">For Beginners</h4>
                    <p className="text-gray-700 mb-4">
                      Even if you haven't touched a golf stick in your life, this golf course provides a training 
                      facility where you can explore this popular Pahalgam activity while enjoying gorgeous valley views.
                    </p>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-teal-800 mb-3">Perfect Setting</h4>
                  <p className="text-gray-700">
                    It is a paradise for golf lovers, and this 18-hole golfing arena is one of the best in the 
                    country, offering gorgeous views of the valley that are a treat to the eye.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 7: Avantipur Temple */}
          <section id="avantipur" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Photography at Avantipur Temple</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  If you are looking for some unique things to do in Pahalgam, then you must pay a visit to this 
                  historical place. This ancient temple is located 57 km from Pahalgam where you can show off your 
                  photography skills. This temple was built between 855 AD and 883 AD and its ruins hold great 
                  historical and architectural significance.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Historical Significance</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Built between 855 AD and 883 AD</li>
                      <li>• Great historical importance</li>
                      <li>• Ancient architectural marvel</li>
                      <li>• 57 km from Pahalgam</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">Photography Opportunities</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Carved sculptures and pillars</li>
                      <li>• Architectural brilliance showcase</li>
                      <li>• Popular among photographers</li>
                      <li>• Unique stone ruins</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-amber-800 mb-3">Temple Features</h4>
                  <p className="text-gray-700">
                    The carved sculptures and pillars portray the architectural brilliance of that era, making it 
                    an adored site for photographers and history enthusiasts from across the globe.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 8: Zorbing */}
          <section id="zorbing" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Experience the Fun of Zorbing</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The tranquil meadows of Baisaran hold one of the fun-filled tourist things to do in Pahalgam, 
                  i.e. zorbing. Enclosed by snow-capped mountains and tall pine trees, zorbing in the verdant 
                  grassland is extremely popular among tourists. Whether you visit with your friends or family, 
                  this offbeat Pahalgam activity is a must-try.
                </p>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3">Zorbing Experience</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Located in the tranquil meadows of Baisaran</li>
                    <li>Enclosed by snow-capped mountains and pine trees</li>
                    <li>Rolling down hills in inflated plastic balls</li>
                    <li>Perfect for friends and families</li>
                    <li>Fun-filled offbeat adventure activity</li>
                    <li>Popular among tourists of all ages</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 9: Baisaran Hills */}
          <section id="baisaran" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Strolling through Baisaran Hills</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Covered with dense pine and cedar vegetation, it is one of the most beautiful and serene places 
                  in Pahalgam. It is an hour's drive from Pahalgam city and a great place to be away from all the 
                  hustle-bustle of city life. Accompanied by the serene and peaceful environment, horse riding and 
                  zorbing are popular tourist activities here.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Natural Beauty</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Dense pine and cedar vegetation</li>
                      <li>• Most beautiful and serene location</li>
                      <li>• One hour drive from Pahalgam city</li>
                      <li>• Away from city hustle-bustle</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">Activities Available</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Horse riding</li>
                      <li>• Zorbing</li>
                      <li>• Nature walks</li>
                      <li>• Photography</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-3">Perfect for Romance</h4>
                  <p className="text-gray-700">
                    If you are looking for some romantic things to do in Pahalgam, this is the perfect place. 
                    The taxi and cab services make it easy to drive back to the city after a romantic day out.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity 10: Chandanwari */}
          <section id="chandanwari" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Sledding in Chandanwari</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With a number of tourists arriving in Chandanwari for picnics and shooting of movies, sledding 
                  has become one of the popular tourist things to do in Pahalgam. It is also the starting point 
                  of Amarnath Yatra, and visitors never miss a chance to experience the thrill of sledding.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-red-800 mb-3">Chandanwari Features</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Popular for picnics and movie shooting</li>
                      <li>• Starting point of Amarnath Yatra</li>
                      <li>• Beautiful mountain location</li>
                      <li>• Lidder River racing through rocks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-red-800 mb-3">Sledding Experience</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Thrilling sledding adventures</li>
                      <li>• Gumboots available for rent</li>
                      <li>• Local guides for safety</li>
                      <li>• Popular winter activity</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">Safety & Convenience</h4>
                  <p className="text-gray-700">
                    To make your Pahalgam activities hassle-free, the nearby shops provide gumboots for rent. 
                    Moreover, the locals will guide you about the safety guidelines before you start the excursion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Pahalgam?</h2>
            <p className="text-xl mb-6">
              Plan your perfect Pahalgam adventure with our customized tour packages
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Pahalgam Packages
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThingsToDoInPahalgam;