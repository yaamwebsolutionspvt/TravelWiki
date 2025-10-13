import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroBanner from '../../components/ThingsToDO/HeroBanner';
import ActivityCard from '../../components/ThingsToDO/ActivityCard';
const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1760341724/Exploring_Gulmarg_Biosphere_Reserve_grdghv.png";

const ThingsToDoInLadakh = () => {
  return (
    <>
      <Helmet>
        <title>35 Best Things to Do in Ladakh - Land of High Passes Adventure Guide 2025</title>
        <meta
          name="description"
          content="Discover the top 35 unforgettable things to do in Ladakh including Pangong Lake, Khardung La, monasteries, trekking, river rafting, and unique high-altitude experiences."
        />
        <meta name="keywords" content="things to do in Ladakh, Leh Ladakh activities, Pangong Lake, Khardung La, monasteries, trekking Ladakh, river rafting, Nubra Valley, Ladakh tourism" />

      </Helmet>


      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroBanner
          title="Best Things to Do in Ladakh"
          subtitle="Experience the Land of High Passes with breathtaking landscapes, ancient monasteries, 
                and adventures at 3,000 meters above sea level"
          backgroundImage={heroBg}
        />


        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              What are the best things to do in Ladakh? Let's take you through this magical piece of land that
              sits at a lofty height of 3,000m above sea level. Ladakh is a destination where every experience
              becomes a lifetime memory, from sunrise at Pangong Lake to the spiritual ambiance of ancient monasteries.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The varied geography and unique culture make Ladakh perfect for all kinds of travelers - adventure
              enthusiasts, spiritual seekers, nature lovers, and those seeking tranquility in the lap of the
              Himalayas. Let's explore the chronological guide of how you should spend your days while touring
              around Leh-Ladakh and get Leh'ed!
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation - Top Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#homestay" className="text-emerald-600 hover:text-emerald-800 font-semibold">1. Stay in Local Homestays</a>
              <a href="#pangong-sunrise" className="text-emerald-600 hover:text-emerald-800 font-semibold">2. Pangong Lake Sunrise</a>
              <a href="#thiksey-prayers" className="text-emerald-600 hover:text-emerald-800 font-semibold">3. Thiksey Monastery Prayers</a>
              <a href="#maitreya-buddha" className="text-emerald-600 hover:text-emerald-800 font-semibold">4. Maitreya Buddha Blessings</a>
              <a href="#shanti-stupa" className="text-emerald-600 hover:text-emerald-800 font-semibold">5. Shanti Stupa Visit</a>
              <a href="#leh-palace" className="text-emerald-600 hover:text-emerald-800 font-semibold">6. Leh Palace History</a>
              <a href="#zanskar-valley" className="text-emerald-600 hover:text-emerald-800 font-semibold">7. Zanskar Valley Adventure</a>
              <a href="#rafting" className="text-emerald-600 hover:text-emerald-800 font-semibold">8. Zanskar River Rafting</a>
              <a href="#chadar-trek" className="text-emerald-600 hover:text-emerald-800 font-semibold">9. Chadar Trek</a>
              <a href="#magnetic-hill" className="text-emerald-600 hover:text-emerald-800 font-semibold">10. Magnetic Hill Mystery</a>
              <a href="#khardung-la" className="text-emerald-600 hover:text-emerald-800 font-semibold">11. Khardung La Pass</a>
              <a href="#nubra-valley" className="text-emerald-600 hover:text-emerald-800 font-semibold">12. Nubra Valley Camping</a>
            </div>
            <p className="text-sm text-gray-600 mt-4">*Showing top 12 of 35 activities - scroll down to explore all experiences</p>
          </div>

          {/* Top Activities - Featured Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top 12 Must-Do Experiences</h2>

            <div className="space-y-12">
              <ActivityCard
                id="homestay"
                title="1. Stay Local to Be a Local in Ladakh"
                description="If you want to explore the real colors of Ladakh, check into a local homestay or lodge. Staying in local homestays allows you to spend time with local hosts and families, know about their culture and traditions, interact with them, dine with them, and get acquainted with their lifestyle."
                image="https://example.com/homestay.jpg"
                highlights={[
                  "Experience authentic Ladakhi lifestyle and culture",
                  "Great hospitality and utmost generosity from hosts",
                  "Traditional meals prepared with local ingredients",
                  "Learn about local customs and Buddhist traditions",
                  "More affordable than luxury hotels",
                ]}
                themeColor="blue"
              />

              <ActivityCard
                id="pangong-sunrise"
                title="2. Enchanting Sunrise Views at Pangong Lake"
                description="What could be the best way to begin your day, but by catching the eternal flames of the rising sun? Seated gracefully at an elevation of 4,350m (14,270ft), Pangong Lake is one of the best places on earth to enjoy the virgin beauty of the rising sun."
                image="https://example.com/pangong-sunrise.jpg"
                highlights={[
                  "Elevation: 4,350m (14,270ft)",
                  "Azure blue water that changes colors",
                  "Stretches across India-China border",
                  "Perfect mirror reflection of mountains",
                  "Golden rays creating magical ambiance",
                ]}
                themeColor="cyan"
              />

              <ActivityCard
                id="thiksey-prayers"
                title="3. Morning Prayers at Thiksey Monastery"
                description="Peace, serenity, divinity, and solace of mind make wanderlusts get Leh'ed! Wake up to the prayer chants of Thiksey Monastery in Ladakh. This place can pacify your mornings and enlighten your day with spiritual blessings."
                image="https://example.com/thiksey-monastery.jpg"
                highlights={[
                  "Unique sense of devotion and spirituality",
                  "Melodious 'sutras' (prayers) chanted by monks",
                  "Drum beats and mollifying tunes of bugles",
                  "Positivity and calmness for mind and soul",
                  "Authentic Buddhist monastery experience",
                ]}
                themeColor="amber"
              />

              <ActivityCard
                id="maitreya-buddha"
                title="4. Seek Blessings from Maitreya Buddha"
                description="Visit the golden statue of Maitreya Buddha at Thiksey Monastery. The largest statue of the future Lord Buddha is considered a devout source of blessings and sanctity. This divine form of the Lord helps usher spirituality and begin your Ladakh tour with purity and calmness."
                image="https://example.com/maitreya-buddha.jpg"
                highlights={[
                  "Largest statue of future Lord Buddha",
                  "Spiritual and serene ambiance",
                  "Seek blessings for your spiritual journey",
                  "Find inner peace in the presence of the statue",
                ]}
                themeColor="yellow"
              />

              <ActivityCard
                id="shanti-stupa"
                title="5. Visit Shanti Stupa - Contribute to World Peace"
                description="The Shanti Stupa in Ladakh is a universal testimony that irrespective of who we are, we all crave love and peace. Positioned atop a scenic hill in Chanspa, this white-colored dome structure was built by Japanese Buddhist Organization to promote World Peace."
                image="https://example.com/shanti-stupa.jpg"
                
                highlights={[
                  "White-colored dome structure atop scenic hill",
                  "Built by Japanese Buddhist Organization",
                  "Commemorates 2 centuries of Buddhism",
                  "Promotes World Peace message",
                  "Stunning views of Leh valley",
                ]}
                themeColor="purple"
               
              />

              {/* Continue adding ActivityCard components for 6–12 */}
            </div>
          </div>

          {/* Additional Activities Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Adventures Await</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quick cards for remaining activities */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Khardung La Pass</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Test your driving skills at the world's highest motorable pass at 18,379ft elevation.
                </p>
                <div className="text-emerald-600 text-sm font-semibold">World's Highest Motorable Pass</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Nubra Valley Desert</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Camp under stars in Hundur Sand Dunes and enjoy double-humped camel rides.
                </p>
                <div className="text-emerald-600 text-sm font-semibold">High-Altitude Desert Experience</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Chadar Trek</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Walk on frozen Zanskar River in one of the world's most challenging winter treks.
                </p>
                <div className="text-emerald-600 text-sm font-semibold">Frozen River Walking</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Magnetic Hill</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Experience the mysterious gravitational pull that defies natural laws.
                </p>
                <div className="text-emerald-600 text-sm font-semibold">Gravity-Defying Mystery</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Tso Moriri Lake</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Bird watching at high-altitude lake and enjoy serene emerald waters.
                </p>
                <div className="text-emerald-600 text-sm font-semibold">High-Altitude Bird Watching</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Hemis Monastery</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Attend the colorful Hemis Festival with traditional mask dances and cultural performances.
                </p>
                <div className="text-emerald-600 text-sm font-semibold">Cultural Festival Experience</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Snow Leopard Spotting</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Unique wildlife experience at Hemis High Altitude Wildlife Sanctuary.
                </p>
                <div className="text-emerald-600 text-sm font-semibold">Rare Wildlife Encounter</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Lamayuru Moonland</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Visit lunar-like landscapes and experience feeling like you're on the moon.
                </p>
                <div className="text-emerald-600 text-sm font-semibold">Moon-like Terrain</div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Local Cuisine Experience</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Try Thukpa, Chang, and Chhupri (Yak cheese) - authentic Ladakhi delicacies.
                </p>
                <div className="text-emerald-600 text-sm font-semibold">Authentic Local Food</div>
              </div>
            </div>
          </div>

          {/* Full Activity List */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete List of 35 Things to Do in Ladakh</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-emerald-600">Spiritual & Cultural (1-10)</div>
                <ul className="text-gray-700 space-y-1">
                  <li>1. Stay in Local Homestays</li>
                  <li>2. Pangong Lake Sunrise</li>
                  <li>3. Thiksey Monastery Prayers</li>
                  <li>4. Maitreya Buddha Blessings</li>
                  <li>5. Shanti Stupa Visit</li>
                  <li>6. Leh Palace History</li>
                  <li>7. Hemis Monastery Festival</li>
                  <li>8. Hang with Monks</li>
                  <li>9. Tibetan Culture Experience</li>
                  <li>10. Gurbaani at Guru Patthhar Sahib</li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-blue-600">Adventure & Nature (11-20)</div>
                <ul className="text-gray-700 space-y-1">
                  <li>11. Zanskar Valley Adventure</li>
                  <li>12. Zanskar River Rafting</li>
                  <li>13. Chadar Trek</li>
                  <li>14. Magnetic Hill Mystery</li>
                  <li>15. Khardung La Driving</li>
                  <li>16. Nubra Valley Camping</li>
                  <li>17. Bactrian Camel Rides</li>
                  <li>18. Spituk Monastery Trek</li>
                  <li>19. Spituk-Stok Trek</li>
                  <li>20. Snow Leopard Spotting</li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-purple-600">Unique Experiences (21-35)</div>
                <ul className="text-gray-700 space-y-1">
                  <li>21. Jeep Safari Changthang</li>
                  <li>22. Donkey Sanctuary Visit</li>
                  <li>23. Tso Kar Lake Serenity</li>
                  <li>24. Tso Moriri Bird Watching</li>
                  <li>25. World's Highest Cafeteria</li>
                  <li>26. Lamayuru Moonland</li>
                  <li>27. Stargazing Experience</li>
                  <li>28. Drang-Drung Glacier Trek</li>
                  <li>29. Himalayan Biking</li>
                  <li>30. Motorcycle Expedition</li>
                  <li>31. Hall of Fame Tribute</li>
                  <li>32. Leh Marketplace Shopping</li>
                  <li>33. Chang & Thukpa Tasting</li>
                  <li>34. Chhupri & Vintage Wine</li>
                  <li>35. Photography Expeditions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Time & Tips */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Ladakh Travel Information</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-orange-800 mb-3">Best Time to Visit</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Summer (May-September):</strong> Perfect weather for most activities</li>
                  <li>• <strong>Winter (November-February):</strong> For Chadar Trek and frozen lake experiences</li>
                  <li>• <strong>Monsoon (July-August):</strong> Road conditions can be challenging</li>
                  <li>• <strong>Festival Season (June-July):</strong> For cultural festivals and celebrations</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-red-800 mb-3">Important Tips</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Acclimatize for 24-48 hours upon arrival</li>
                  <li>• Carry sufficient cash (limited ATMs)</li>
                  <li>• Pack warm clothes even in summer</li>
                  <li>• Stay hydrated and avoid alcohol initially</li>
                  <li>• Respect local customs and photography restrictions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Leh'ed?</h2>
            <p className="text-xl mb-6">
              Plan your ultimate Ladakh adventure with our comprehensive tour packages covering all 35 experiences
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Ladakh Packages
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThingsToDoInLadakh;