import React from 'react';
import { Helmet } from 'react-helmet-async';

import { FaWater, FaHome, FaTrain, FaPagelines, FaGolfBall, FaHorse, FaSeedling, FaShoppingBag, FaUtensils, FaSkiing, FaCampground, FaHiking, FaHotTub } from 'react-icons/fa';
import ActivityCard from '../../components/ThingsToDO/ActivityCard';
import HeroBanner from '../../components/ThingsToDO/HeroBanner';

const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1760340197/Shikara_Ride_on_Dal_Lake_Srinagar_nbonsd.webp";

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
        <HeroBanner
        title="Best Things to Do in Kashmir"
        subtitle="Experience the Paradise on Earth with unforgettable adventures, breathtaking scenery, and cultural treasures that will create memories for a lifetime."
        backgroundImage={heroBg}
      />

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

          <div className="container mx-auto px-4">
            <ActivityCard
              id="shikara-ride"
              title="1. Shikara Ride on Dal Lake, Srinagar"
              description="Step into the world of splendid beauty and serenity through a Shikara ride on Dal Lake. It's a mesmerizing lake offering majestic views of snow-capped mountains, picture-perfect sunset views, floating gardens, and much more."
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760340197/Shikara_Ride_on_Dal_Lake_Srinagar_nbonsd.webp"
              highlights={[
                "Majestic views of snow-capped mountains",
                "Picture-perfect sunset views",
                "Visit to floating gardens",
                "Shopping from floating markets",
                "Access to traditional houseboats",
              ]}
              info={[
                "Cost: INR 150 to 500 per person",
                "Hours: 6:00 AM to 5:00 PM",
                "Duration: 30 to 45 minutes",
                "Best Time: Early morning or sunset",
              ]}
            />
            <ActivityCard
              id="Houseboat Stay"
              title="2. Stay in a Houseboat"
              description=" Kashmiri houseboats reflect its rich cultural heritage and are the best accommodation option for
                  travellers. Beautifully made with walnut or other woods, carved intricately, and decorated amazingly,
                  these houseboats are a fascinating piece of architecture on the arresting lakes."
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760340198/Stay_in_a_Houseboat_ubt1ro.webp"
              highlights={[
                "Intricately carved walnut wood interiors",
                "Floating gardens and areas for leisurely walks",
                "Terrace views of mountains and sunset",
                "Lavish amenities and comfortable rooms",
                "Available from simple to luxurious options",
              ]}
              info={[
                "Cost: INR 2,000 to 15,000 per night",
                "Hours: 6:00 AM to 5:00 PM",
                "Duration: 30 to 45 minutes",
                "Best Time:Throughout the year",
              ]}
            />
            {/* Activity 3: Gondola Ride */}
            <ActivityCard
              id="gondola-ride"
              title="3. Gondola Cable Car Ride"
              description="If you want to experience mind-blowing natural beauty with sheer adventure, then go for a Gondola Ride in Gulmarg. It is a big hit with travellers who come here from across the globe. The views of the majestic snow-capped mountains, while you travel through the cable car to greater heights are a sight to behold."
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760340198/Gondola_Cable_Car_Ride_ein5vg.webp"
              highlights={[
                "Phase 1: Gulmarg to Kongdoori",
                "Phase 2: Kongdoori to Apharwat Peak",
                "Phase 3: Kongdoori to Mary Shoulder (Chairlift)",
              ]}
              info={[
                "Timings: 10:30 AM to 5:00 PM",
                "Ticket Sale: 9:00 AM to 3:00 PM",
                "Phase I Cost: INR 700",
                "Phase II Cost: INR 900",
                "Chairlift Cost: INR 300",
              ]}
            />
            {/* Activity 4: Mughal Gardens */}
            <ActivityCard
              id="mughal-gardens"
              title="4. Explore Mughal Gardens"
              description="The celebrated Mughal Gardens of Kashmir..."
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760340198/Explore_Mughal_Gardens_1_jnqyzj.webp"
              highlights={["Shalimar Bagh", "Nishat Bagh", "Pari Mahal", "Chasma Sahi Garden"]}
              info={[
                "Persian-style Charbagh structure",
                "Gurgling fountains and pools",
                "Well-laid pathways",
                "Stunning hill backdrops",
              ]}
              tips={[
                "Best time to visit: October to June",
                "Timings: 9:00 AM to 7:00 PM",
                "Entry fee: INR 20 for adults, INR 10 for children",
                "Perfect for photography and relaxation",
              ]}
              themeColor="indigo" // 👈 auto applies your color scheme
            />

            {/* Activity 5: Gulmarg Golf */}

            <ActivityCard
              id="gulmarg-golf"
              title="5. Gulmarg Golf Club"
              description="If you are a golf enthusiast, the Golf Course in Gulmarg is truly a paradise for you. It is a world-class 18-hole golf course established in 1911 and is famed to be the world's highest green golf course located at an altitude of 2,650 m."
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760340199/Gulmarg_Golf_Club_qgqdbx.webp"
              highlights={[
                "World's highest green golf course",
                "18-hole championship course",
                "Established in 1911",
                "Altitude: 2,650 meters",
                "Surrounded by pine and chinar trees",
              ]}
              info={[
                "Entry: INR 800 for non-members",
                "Best Time: May to November",
                "Hours: 8:30 AM to 10:00 PM",
                "Closed: December to April",
              ]}
              tips={[
                "Wear comfortable clothes and shoes",
                "Non-members should call before visiting",
                "Professional trainers available",
                "One of the best summer golfing destinations worldwide",
              ]}
              themeColor="green"
            />


            {/* Activity 6: Pony Ride */}
            <ActivityCard
              id="pony-ride"
              title="6. Pony Ride to Thajiwas Glacier"
              description="Marvel at the mesmerizing beauty of Sonmarg on your pony ride to Thajiwas Glacier located at an altitude of 3,000 m. The leisurely ride will take you through picturesque locations that seem to just pop out of a fairy tale book."
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760340199/Pony_Ride_to_Thajiwas_Glacier_aujfe3.webp"
              highlights={[
                "Journey to Thajiwas Glacier (3,000m altitude)",
                "Picturesque fairy-tale locations",
                "Duration: Approximately 1 hour each way",
                "Popular tourist destination in Sonmarg",
              ]}
              info={[
                "Cost: INR 500 to 1,000",
                "Best Time: April to October",
                "Return before dark",
                "Follow safety guidelines",
              ]}
              tips={[
                "Carry sunglasses, hat, and water bottle in summer",
                "Listen to your guide's instructions",
                "Treat ponies respectfully and don't overload them",
                "Make sure to return before dark",
              ]}
              themeColor="amber"
            />

            {/* Activity 7: Tulip Garden */}
            <ActivityCard
              id="tulip-garden"
              title="7. A Stroll at the Tulip Garden"
              description="Treating your senses to a wonderful world of colorful tulips at the Indira Gandhi Memorial Tulip Garden in Srinagar is an amazing thing to do in Kashmir. The garden boasts 68 varieties of tulips apart from other flowers and has entered the World Book of Records (London) as Asia's largest such park."
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760340199/A_Stroll_at_the_Tulip_Garden_rbpcgq.webp"
              highlights={[
                "Asia's largest tulip garden (30 hectares)",
                "68 varieties and 15 lakh tulips in total",
                "Located between Dal Lake and Zabarwan hills",
              ]}
              info={[
                "Opens from March to April during blooming season",
                "Entry fee: INR 60 for adults, INR 25 for children",
                "Hours: 8:00 AM to 7:00 PM",
              ]}
              tips={[
                "Visit early morning or late afternoon for best light",
                "Carry a camera — it's perfect for photography",
                "Wear comfortable shoes — large walking area",
              ]}
              themeColor="rose"
            />

            {/* Activity 10: Skiing */}
            <ActivityCard
              id="skiing"
              title="10. Skiing in Gulmarg"
              description="Skiing in Gulmarg is not just enthralling but a unique experience. It is a world-famous skiing destination that attracts adventure lovers from far and wide. The snow quality of Gulmarg is considered among the best in the world and is at par with Switzerland."
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760341472/Skiing_in_Apharwat_Peak_z8hzj4.webp"
             
              highlights={[
                "Snow quality at par with Switzerland",
                "Seasonal snowfall double that of the Alps",
                "Different phases: 2,600m to 3,400m altitude",
                "Professional guidance available",
              ]}
              info={[
                "Best Time: January to February",
                "Cost: Around INR 7,000 per package",
                "Gear available on rent",
                "Carry cash for transactions",
              ]}
              tips={[
                "Book your instructor or package in advance",
                "Wear proper ski gear and thermal layers",
                "Avoid skiing after sunset for safety",
                "Try beginner slopes if new to skiing",
              ]}
              themeColor="blue"
            />
          </div>


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