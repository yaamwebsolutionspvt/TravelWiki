import React from "react";
import { Helmet } from "react-helmet-async";
import HeroBanner from "../../components/ThingsToDO/HeroBanner";
import ActivityCard from "../../components/ThingsToDO/ActivityCard";
import KashmirTourPackages from '../../components/Packages/KashmirTourPackages'
import BestsellerKashmirTours from '../../components/Packages/BestsellerKashmirTours'
import HoneymoonSpecial from '../../components/Packages/HoneymoonSpecial'
import KashmirAdventureWinter from '../../components/Packages/KashmirAdventureWinter'
import KashmirCulturalToursAndPackages from '../../components/Packages/KashmirCulturalToursAndPackages'
import KashmirExcursionsSpecial from '../../components/Packages/KashmirExcursionsSpecial'
import KashmirFamilyPackages from '../../components/Packages/KashmirFamilyPackages'

const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1760347737/1_Sightseeing_the_Hidden_Treasures_b9oq8h.webp";

const ThingsToDoInSonamarg = () => {
  return (
    <>
      <Helmet>
        <title>8 Best Things to Do in Sonamarg - Meadow of Gold Adventure Guide 2025</title>
        <meta
          name="description"
          content="Discover the top 8 thrilling things to do in Sonamarg including trekking, river rafting, skiing, camping, and visits to Thajiwas Glacier. Complete adventure guide."
        />
        <meta
          name="keywords"
          content="things to do in Sonamarg, Sonamarg activities, Thajiwas Glacier, trekking Sonamarg, river rafting, skiing, Sonamarg tourism"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroBanner
          title="Best Things to Do in Sonamarg"
          subtitle="Explore the Meadow of Gold with thrilling adventures, pristine glaciers, and breathtaking Himalayan landscapes."
          backgroundImage={heroBg}
        />

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With plenty of things to do in Sonamarg, hundreds of tourists visit to witness the sheer beauty of this
              Himalayan paradise. Lush meadows, alpine snow-covered mountains, and enchanting rivers create a perfect
              vacation site. The picturesque location of this place also attracts nature lovers and adventurers to
              enjoy all the sightseeing and outdoor activities.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Trekking, white river rafting, and skiing are among the most popular adventure things to do in Sonamarg.
              Moreover, the photogenic landscapes invite photographers to capture stunning views. This place is also an
              ideal destination for honeymooners to begin their journey amidst natural beauty.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#trekking" className="text-emerald-600 hover:text-emerald-800 font-semibold">
                1. Trekking in Sonamarg
              </a>
              <a href="#river-rafting" className="text-emerald-600 hover:text-emerald-800 font-semibold">
                2. White River Rafting
              </a>
              <a href="#skiing" className="text-emerald-600 hover:text-emerald-800 font-semibold">
                3. Skiing in Soft Snow
              </a>
              <a href="#camping" className="text-emerald-600 hover:text-emerald-800 font-semibold">
                4. Camping in Verdant Meadows
              </a>
              <a href="#hiking" className="text-emerald-600 hover:text-emerald-800 font-semibold">
                5. Hiking across Countryside
              </a>
              <a href="#fishing" className="text-emerald-600 hover:text-emerald-800 font-semibold">
                6. Trout Fishing
              </a>
              <a href="#sledding" className="text-emerald-600 hover:text-emerald-800 font-semibold">
                7. Sledding in Thajiwas Glacier
              </a>
              <a href="#zojila-pass" className="text-emerald-600 hover:text-emerald-800 font-semibold">
                8. Trip to Zojila Pass
              </a>
            </div>
          </div>

          {/* Activity Cards */}
          <div className="space-y-16">
            <ActivityCard
              id="trekking"
              title="1. Trekking in Sonamarg"
              description="The Himalayan glaciers and mountainous routes around Sonamarg are a paradise for trekkers. Whether you are an adventure junkie or a nature lover, trekking here rewards you with stunning vistas and serene trails."
              highlights={[
                "Popular trails: Thajiwas Glacier, Kolahoi Peak, Machoi Peak",
                "Breathtaking valley and glacier views",
                "Trek routes for all experience levels",
                "Ideal for nature photography and solitude",
              ]}
              info={[
                "Best time: May to October",
                "Winter treks require professional gear",
                "Local guides available for safe routes",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760352639/1_Trekking_in_Sonamarg_fvpf1j.webp"
              imageOnRight={false}
                />

            <ActivityCard
              id="river-rafting"
              title="2. White River Rafting in Glacial Waters"
              description="Experience the thrill of rafting in the glacial waters of the Indus River. This adventurous activity offers both excitement and scenic beauty as you navigate through mountain-fed rapids."
              highlights={[
                "Raft through Indus River’s pristine waters",
                "Suitable for beginners and experts alike",
                "Surrounded by snow-capped peaks and pine forests",
                "Combine with camping or picnic",
              ]}
              info={[
                "Best months: April to June & September to November",
                "All safety gear provided locally",
                "Avoid during heavy rains or winter",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760352639/White_River_Rafting_in_Glacial_Water_vsjcsr.webp"
              imageOnRight={false}
              />

            <ActivityCard
              id="skiing"
              title="3. Skiing in the Soft Snow"
              description="During winter, Sonamarg transforms into a white wonderland perfect for skiing and snow adventures. Its natural slopes and snow blanket create an ideal setup for both beginners and pros."
              highlights={[
                "Soft snow blanket from December to February",
                "Gorgeous panoramic mountain views",
                "Opportunities for sledding and snowboarding",
                "Ideal for winter sports enthusiasts",
              ]}
              info={[
                "Equipment available for rent",
                "Dress warmly with waterproof layers",
                "Combine with a visit to Thajiwas Glacier",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760352641/Skiing_in_the_Soft_Snow_fp1yon.webp"
              imageOnRight={true}
              />

            <ActivityCard
              id="camping"
              title="4. Camping in Verdant Meadows"
              description="The meadows of Sonamarg offer some of the most scenic camping experiences in Kashmir. Enjoy sleeping under the stars with snow-covered peaks as your backdrop and the soothing sound of streams nearby."
              highlights={[
                "Camp near Thajiwas Glacier or Baltal Valley",
                "Stunning alpine views",
                "Star-lit skies and bonfire nights",
                "Serene and refreshing atmosphere",
              ]}
              info={[
                "Best season: April to October",
                "Carry personal tents or book guided camps",
                "Avoid monsoon season for safety",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760352641/Camping_in_the_Verdant_Meadows_d4bz5t.webp"
              imageOnRight={false}
              />

            <ActivityCard
              id="hiking"
              title="5. Hiking across Countryside"
              description="Sonamarg’s countryside trails are perfect for relaxed hikes through dense forests, flower-filled meadows, and panoramic valley views. Each step offers serenity and photo-worthy moments."
              highlights={[
                "Gentle forest and valley trails",
                "Ideal for beginners and families",
                "Mesmerizing countryside views",
                "Local guides available for forest hikes",
              ]}
              info={[
                "Best time: Summer months for clear views",
                "Carry water, snacks, and proper footwear",
                "Don’t miss golden sunset views",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760352641/Hiking_across_Countryside_hqx35h.webp"
              imageOnRight={true}
              />

            <ActivityCard
              id="fishing"
              title="6. Go for Trout Fishing"
              description="Try your hand at trout fishing in the tranquil waters of the Indus River, Vishansar, and Krishansar Lakes. The serene atmosphere makes it an unforgettable leisure activity."
              highlights={[
                "Popular spots: Indus River, Vishansar & Krishansar Lakes",
                "Catch trout and mahseer fish",
                "Peaceful and scenic environment",
                "Perfect for unwinding and picnicking",
              ]}
              info={[
                "Permits required for fishing",
                "Bring or rent gear from Srinagar",
                "Best season: May to October",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760352642/Go_for_Trout_Fishing_nrj097.webp"
              imageOnRight={false}
              />

            <ActivityCard
              id="sledding"
              title="7. Sledding at Thajiwas Glacier"
              description="Walk up to the magnificent Thajiwas Glacier for a thrilling sledding experience. Slide down the snowy slopes as you enjoy breathtaking views of azure valleys and frozen beauty."
              highlights={[
                "Popular winter activity near Sonamarg",
                "Hire sleds from local vendors",
                "Enjoy snow spray and cold breeze",
                "Family-friendly and exciting",
              ]}
              info={[
                "Best time: December to March",
                "Negotiate sled rental prices",
                "Dress warmly with gloves and boots",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760352644/Sledding_in_Thajiwas_Glacier_i5vwry.webp"
              imageOnRight={true}
              />

            <ActivityCard
              id="zojila-pass"
              title="8. A Trip to Zojila Pass"
              description="Take a scenic drive to Zojila Pass — one of India’s highest mountain passes connecting Kashmir and Ladakh. The breathtaking landscapes and thrilling routes make it an unforgettable experience."
              highlights={[
                "Situated on National Highway 1D",
                "Snow-covered peaks throughout",
                "Strategic and scenic mountain pass",
                "Ideal for adventure road trips",
              ]}
              info={[
                "Closed in winter due to heavy snowfall",
                "Best months: May to October",
                "Carry warm clothes even in summer",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760352645/A_Trip_to_Zojila_Pass_aigxbr.webp"
              imageOnRight={false}
              />
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Sonamarg?</h2>
            <p className="text-xl mb-6">
              Plan your perfect Sonamarg adventure with our customized tour packages.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Sonamarg Packages
            </button>
          </div>

          {/* Package Sections */}
          <div className="mt-16">
            <KashmirTourPackages />
            <BestsellerKashmirTours />
            <HoneymoonSpecial />
            <KashmirAdventureWinter />
            <KashmirCulturalToursAndPackages />
            <KashmirExcursionsSpecial />
            <KashmirFamilyPackages />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThingsToDoInSonamarg;
