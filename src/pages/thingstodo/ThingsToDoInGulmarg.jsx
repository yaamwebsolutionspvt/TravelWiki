import React from 'react';
import { Helmet } from 'react-helmet-async';
import ActivityCard from '../../components/ThingsToDO/ActivityCard';
import HeroBanner from '../../components/ThingsToDO/HeroBanner';
import KashmirTourPackages from '../../components/Packages/KashmirTourPackages'
import BestsellerKashmirTours from '../../components/Packages/BestsellerKashmirTours'
import HoneymoonSpecial from '../../components/Packages/HoneymoonSpecial'
import KashmirAdventureWinter from '../../components/Packages/KashmirAdventureWinter'
import KashmirCulturalToursAndPackages from '../../components/Packages/KashmirCulturalToursAndPackages'
import KashmirExcursionsSpecial from '../../components/Packages/KashmirExcursionsSpecial'
import KashmirFamilyPackages from '../../components/Packages/KashmirFamilyPackages'
const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1760341473/Riding_a_Gulmarg_Gondola_etupys.webp";


const ThingsToDoInGulmarg = () => {
  return (
    <>
      <Helmet>
        <title>8 Best Things to Do in Gulmarg - Meadow of Flowers Adventure Guide 2025</title>
        <meta
          name="description"
          content="Discover the top 8 exciting things to do in Gulmarg including skiing, Gondola rides, golf, trekking, and exploring the biosphere reserve. Complete adventure guide."
        />
        <meta name="keywords" content="things to do in Gulmarg, Gulmarg activities, skiing Gulmarg, Gondola ride, Apharwat Peak, Gulmarg golf, Alpather Lake trek, Gulmarg tourism" />

      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroBanner
        title="Best Things to Do in Gulmarg"
        subtitle="Experience the Meadow of Flowers with world-class skiing, scenic gondola rides, and unforgettable Himalayan adventures"
        backgroundImage={heroBg}
      />

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              When we talk about the things to do in Gulmarg, our bucket list gets overloaded with fun, thrill,
              and excitement! Gulmarg is an exquisite place that remains snow-covered for the most part of the year.
              The snow-capped mountains, beautifully laid out meadows, and water streams create a breathtaking view
              that is a treat to the eye.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              There are plenty of adventure things to do in Gulmarg. Skiing, sledding, trekking, etc. are some of
              the favourite tourist activities here. Although it is more popular for winter activities, there is also
              a plethora of sightseeing opportunities in the region. So, while you are preparing your itinerary, here
              are some of the popular Gulmarg things to do.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#skiing" className="text-emerald-600 hover:text-emerald-800 font-semibold">1. Skiing in Apharwat Peak</a>
              <a href="#gondola" className="text-emerald-600 hover:text-emerald-800 font-semibold">2. Gulmarg Gondola Ride</a>
              <a href="#golf" className="text-emerald-600 hover:text-emerald-800 font-semibold">3. Golf Course Experience</a>
              <a href="#alpather-trek" className="text-emerald-600 hover:text-emerald-800 font-semibold">4. Trek to Alpather Lake</a>
              <a href="#biosphere" className="text-emerald-600 hover:text-emerald-800 font-semibold">5. Biosphere Reserve</a>
              <a href="#pony-ride" className="text-emerald-600 hover:text-emerald-800 font-semibold">6. Pony Ride to Khilanmarg</a>
              <a href="#ningle-nallah" className="text-emerald-600 hover:text-emerald-800 font-semibold">7. Ningle Nallah Photography</a>
              <a href="#local-cuisine" className="text-emerald-600 hover:text-emerald-800 font-semibold">8. Local Cuisine Experience</a>
            </div>
          </div>

          <div className="space-y-16">
            <ActivityCard
              id="skiing"
              title="1. Skiing in Apharwat Peak"
              description="The peak of Mount Apharwat has some of the best adventure things to do in Gulmarg. One of them is skiing. Every year hundreds of adventurers and winter sports lovers gather here to have a great time skiing. It is also the best place to ski in India."
              highlights={[
                "Best skiing destination in India",
                "Mount Apharwat peak location",
                "Steep and smooth gradient slopes",
                "Ideal for skiing and snowboarding",
              ]}
              info={[
                "Three slopes available for beginners",
                "Expert instructors available",
                "Daily or weekly training packages",
                "Perfect learning environment",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760341472/Skiing_in_Apharwat_Peak_z8hzj4.webp"
              imageOnRight={false}
            />

            <ActivityCard
              id="gondola"
              title="2. Riding a Gulmarg Gondola"
              description="Do you want to add a little more thrill while enjoying the best things to do in Gulmarg? Take a ride on a Gulmarg Gondola. It is a two-tiered ride that takes you to incredible heights with breathtaking views."
              highlights={[
                "Phase 1: To Kongdori (2600 m elevation)",
                "Phase 2: To Apharwat Peak (3980 m elevation)",
                "Best tourist activities at Apharwat Peak",
                "Stunning mountain views throughout",
              ]}
              info={[
                "Cable car ride to great heights",
                "Panoramic Himalayan views",
                "Access to skiing areas",
                "Year-round operation",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760341473/Riding_a_Gulmarg_Gondola_etupys.webp"
              imageOnRight={true}
            />

            <ActivityCard
              id="golf"
              title="3. Golfing on Second Highest Golf Course"
              description="One of the fun and relaxing tourist activities in Gulmarg is trying your hand at golf. Gulmarg Golf Course is an 18-hole golf course that is spread over an area of 7505 yards. It’s also the world’s second-highest golf course."
              highlights={[
                "World's second highest golf course",
                "18-hole championship course",
                "Spread over 7505 yards",
                "Established in 1911",
              ]}
              info={[
                "Verdant meadows surrounding",
                "Distant mountain views",
                "Peaceful, crowd-free environment",
                "No vehicle noise disturbance",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760341473/Golfing_on_Second_Highest_Golf_Course_ipu9qy.webp"
              imageOnRight={false}
            />

            <ActivityCard
              id="alpather-trek"
              title="4. Trek to Alpather Lake"
              description="The magical charm of this lake invites numerous tourists to trek through the mountainous routes and witness its beauty. Located at the foot of twin Apharwat Peaks, this trek is one of the best things to do in Gulmarg."
              highlights={[
                "Located at foot of twin Apharwat Peak",
                "4 km trek from Kongdori",
                "Altitude: 4380 meters",
                "Most prominent Gulmarg attraction",
              ]}
              info={[
                "Frozen most of the year",
                "Huge chunks of ice floating",
                "Sparkling natural beauty",
                "Perfect for relaxation after trek",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760341473/Trek_to_Alpather_Lake_ixvrix.webp"
              imageOnRight={true}
            />

            <ActivityCard
              id="biosphere"
              title="5. Exploring Gulmarg Biosphere Reserve"
              description="For a perfect family holiday, exploring the rich diversity of Gulmarg is a must. It is home to various species of flora and fauna, making it a paradise for photographers and nature lovers."
              highlights={[
                "Himalayan musk deer",
                "Red fox",
                "Brown bear",
                "Various migratory birds",
              ]}
              info={[
                "Bird watching",
                "Wildlife photography",
                "Nature walks",
                "Flora and fauna exploration",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760341724/Exploring_Gulmarg_Biosphere_Reserve_grdghv.webp"
              imageOnRight={false}
            />

            <ActivityCard
              id="pony-ride"
              title="6. Riding a Pony to Khilanmarg"
              description="Khilanmarg valley offers a tranquil atmosphere with exciting adventures. Since there’s no motorway, the best way to explore is by pony, through magnificent landscapes and deodar trees."
              highlights={[
                "No motorway access",
                "Only accessible by foot or pony",
                "Magnificent landscape views",
                "Snow-capped mountain vistas",
              ]}
              info={[
                "Tall deodar trees",
                "Vibrant flowers along the path",
                "Tranquil atmosphere",
                "Perfect for photography",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760342077/Riding_a_Pony_to_Khilanmarg_os9slv.webp"
              imageOnRight={true}
            />

            <ActivityCard
              id="ningle-nallah"
              title="7. Instagram Worthy Pictures in Ningle Nallah"
              description="The picturesque valley of Ningle Nallah invites tourists to capture its beauty. Snowy peaks, vibrant flowers, and clear streams make it perfect for photos and picnics."
              highlights={[
                "Picture-perfect scenery",
                "Snowy peaks backdrop",
                "Vibrant flowers and meadows",
                "Crystal-clear water streams",
              ]}
              info={[
                "Family picnics",
                "Romantic getaways",
                "Instagram photography",
                "Nature relaxation",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760342498/Instagram_Worthy_Pictures_in_Ningle_Nallah_aho2kd.webp"
              imageOnRight={false}
            />

            <ActivityCard
              id="local-cuisine"
              title="8. Trying Local Cuisine - Wazwan and Kahwa"
              description="Trying local Kashmiri cuisine is one of the best things to do in Gulmarg. Wazwan is a royal feast of 32 dishes, while Kahwa is a spiced tea that completes your meal."
              highlights={[
                "Special platter with 32 dishes",
                "Gushtaba and Rogan Josh highlights",
                "Each dish has unique specialty",
                "Traditional Kashmiri feast",
              ]}
              info={[
                "Traditional Kashmiri tea (Kahwa)",
                "Made with green tea, saffron, cinnamon, and cardamom",
                "Often garnished with crushed nuts and roses",
                "Aids in digestion after a meal",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760342619/Trying_Local_Cuisine_-_Wazwan_and_Kahwa_knuasm.webp"
              imageOnRight={true}
              />
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Gulmarg?</h2>
            <p className="text-xl mb-6">
              Plan your perfect Gulmarg adventure with our customized tour packages
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Gulmarg Packages
            </button>
          </div>

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

export default ThingsToDoInGulmarg;