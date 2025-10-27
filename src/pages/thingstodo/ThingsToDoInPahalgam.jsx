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

const heroBg =
  "https://res.cloudinary.com/dw1sh368y/image/upload/v1760347737/1_Sightseeing_the_Hidden_Treasures_b9oq8h.webp";

const ThingsToDoInPahalgam = () => {
  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>
          10 Best Things to Do in Pahalgam - Valley of Shepherds Adventure Guide
          2025
        </title>
        <meta
          name="description"
          content="Explore the top 10 amazing things to do in Pahalgam, including river rafting, Aru Valley camping, Betaab Valley sightseeing, golfing, and trekking to Kolahoi Glacier."
        />
        <meta
          name="keywords"
          content="things to do in Pahalgam, Pahalgam activities, Aru Valley camping, Kolahoi Glacier trek, river rafting, Betaab Valley, Pahalgam tourism"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* HERO SECTION */}
        <HeroBanner
          title="Best Things to Do in Pahalgam"
          subtitle="Experience the Valley of Shepherds with thrilling adventures, pristine valleys, and unforgettable Himalayan experiences."
          backgroundImage={heroBg}
        />

        {/* INTRODUCTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A great way to make the most out of the land of the Himalayas is
              to explore the things to do in Pahalgam. Nature has been quite kind
              to this picturesque valley. With lush green meadows, pine and
              cedar forests, and sparkling rivers, it is a paradise for
              travellers and nature lovers.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The most popular tourist activities in Pahalgam include
              sightseeing, trekking, river rafting, golfing, and camping. But
              there are also plenty of hidden gems waiting to be discovered.
              Whether you are an adventure lover or a peace seeker, Pahalgam has
              something for everyone.
            </p>
          </div>

          {/* QUICK NAVIGATION */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Navigation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="#sightseeing"
                className="text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                1. Sightseeing in Betaab Valley
              </a>
              <a
                href="#camping"
                className="text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                2. Camping in Aru Valley
              </a>
              <a
                href="#river-rafting"
                className="text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                3. River Rafting in Lidder River
              </a>
              <a
                href="#kolahoi-trek"
                className="text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                4. Trek to Kolahoi Glacier
              </a>
              <a
                href="#chandanwari"
                className="text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                5. Visit Chandanwari
              </a>
              <a
                href="#golf"
                className="text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                6. Golfing in Pahalgam Club
              </a>
              <a
                href="#angling"
                className="text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                7. Trout Fishing and Angling
              </a>
              <a
                href="#sheshnag"
                className="text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                8. Sheshnag Lake Excursion
              </a>
              <a
                href="#shopping"
                className="text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                9. Shopping for Kashmiri Handicrafts
              </a>
              <a
                href="#local-cuisine"
                className="text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                10. Trying Local Cuisine - Rogan Josh & Kahwa
              </a>
            </div>
          </div>

          {/* ACTIVITY CARDS */}
          <div className="space-y-16">
            <ActivityCard
              id="sightseeing"
              title="1. Sightseeing in Betaab Valley"
              description="Betaab Valley, named after a famous Bollywood movie, is one of Pahalgam’s most scenic spots. Surrounded by snow-capped mountains and lush greenery, it’s ideal for photography and picnics."
              highlights={[
                "Picturesque landscapes and river views",
                "Named after Bollywood movie ‘Betaab’",
                "Snow-capped mountains backdrop",
                "Ideal for couples and families",
              ]}
              info={[
                "Best time: April to October",
                "Entry fee applicable",
                "Photography zone",
                "Ziplining and small cafes available",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760347737/Camping_in_Aru_Valley_rrrtmx.webp"
              imageOnRight={false}
            />

            <ActivityCard
              id="camping"
              title="2. Camping in Aru Valley"
              description="Aru Valley is a serene destination surrounded by pine forests and alpine meadows. Camping here is one of the best things to do in Pahalgam for nature and adventure lovers."
              highlights={[
                "Ideal for stargazing and bonfire nights",
                "Picturesque alpine valley",
                "Peaceful environment away from crowds",
                "Base point for treks",
              ]}
              info={[
                "Camping gear available for rent",
                "Jeep ride or trek from Pahalgam",
                "Ideal from May to October",
                "Eco-friendly stays available",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760347737/River_Rafting_in_the_Bubbly_Rivers_c4se0m.webp"
              imageOnRight={true}
            />

            <ActivityCard
              id="river-rafting"
              title="3. River Rafting in Lidder River"
              description="If you’re an adventure junkie, river rafting in Lidder River is a must. Experience the thrill of navigating through white-water rapids with snow-capped peaks around."
              highlights={[
                "Rafting grades I to III available",
                "Professional guides ensure safety",
                "Spectacular mountain backdrops",
                "Adrenaline-pumping experience",
              ]}
              info={[
                "Rafting season: May to September",
                "Safety jackets & helmets provided",
                "Group packages available",
                "Photography options on-site",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760347738/Skiing_in_the_Scenic_Slopes_aiydfe.webp"
              imageOnRight={false}
            />

            <ActivityCard
              id="kolahoi-trek"
              title="4. Trek to Kolahoi Glacier"
              description="The Kolahoi Glacier trek is one of the most scenic and adventurous treks starting from Aru Valley. It’s perfect for trekkers looking for breathtaking Himalayan landscapes."
              highlights={[
                "5-day trek from Aru Valley",
                "View of Kolahoi Peak (5425 m)",
                "Rich alpine flora and fauna",
                "Perfect for experienced trekkers",
              ]}
              info={[
                "Guided treks available",
                "Moderate to difficult trail",
                "Camping required overnight",
                "Best season: June to September",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760347738/Trek_to_Kolahoi_Glacier_h8qu52.webp"
              imageOnRight={true}
            />

            <ActivityCard
              id="chandanwari"
              title="5. Visit Chandanwari"
              description="Located 16 km from Pahalgam, Chandanwari is the starting point of the famous Amarnath Yatra. The icy streams and snow patches make it a charming short trip."
              highlights={[
                "Snow patches throughout the year",
                "Scenic drive from Pahalgam",
                "Base camp of Amarnath Yatra",
                "Ideal for family picnics",
              ]}
              info={[
                "Accessible by local cab",
                "Best visited in summer months",
                "Small tea stalls available",
                "Quick 2–3 hour visit",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760348117/Sledding_in_Chandanwari_bq8caq.webp"
              imageOnRight={false}
            />

            <ActivityCard
              id="golf"
              title="6. Golfing at Pahalgam Club"
              description="The Pahalgam Golf Course is a scenic 18-hole course offering stunning views of snow-clad peaks and meadows — a perfect mix of leisure and landscape."
              highlights={[
                "18-hole golf course",
                "Panoramic mountain backdrop",
                "Peaceful and crowd-free",
                "Beginner-friendly sessions",
              ]}
              info={[
                "Golf equipment rental available",
                "Entry fee applies",
                "Open from April to November",
                "Café nearby for refreshments",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760347740/Golfing_at_Pahalgam_Golf_Course_sphikf.webp"
            />

            <ActivityCard
              id="angling"
              title="7. Trout Fishing and Angling"
              description="The Lidder River is famous for its brown and rainbow trout. Fishing here offers a calm and relaxing experience for those who love nature and patience."
              highlights={[
                "Trout fishing with local guides",
                "Permit required from J&K Fisheries Dept",
                "Scenic riverside setting",
                "Ideal for solo travelers",
              ]}
              info={[
                "Fishing rods available for rent",
                "Permit cost nominal",
                "Best time: May to October",
                "Catch-and-release encouraged",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760352642/Go_for_Trout_Fishing_nrj097.webp"
              imageOnRight={false}
            />

            <ActivityCard
              id="sheshnag"
              title="8. Excursion to Sheshnag Lake"
              description="Located en route to Amarnath, Sheshnag Lake is an alpine waterbody surrounded by snow-clad mountains. Its turquoise waters are a sight to behold."
              highlights={[
                "Turquoise alpine lake",
                "Surrounded by mountain peaks",
                "Accessible via pony ride or trek",
                "Ideal for photography",
              ]}
              info={[
                "Trek of 12 km from Chandanwari",
                "Camping possible near the lake",
                "Avoid monsoon for safety",
                "Carry food and water",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760347738/Photography_at_Avantipur_Temple_jtzrey.webp"
              imageOnRight={true}
            />

            <ActivityCard
              id="shopping"
              title="9. Shopping for Kashmiri Handicrafts"
              description="The small bazaars of Pahalgam are filled with Kashmiri shawls, Pashmina, saffron, and walnut wood crafts — perfect souvenirs from your trip."
              highlights={[
                "Authentic local handicrafts",
                "Kashmiri shawls and carpets",
                "Walnut wood artifacts",
                "Saffron and dry fruits",
              ]}
              info={[
                "Main Market & Aru Road shops",
                "Bargaining recommended",
                "Open year-round",
                "Cash preferred over cards",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760347739/Experience_the_Fun_of_Zorbing_l4oey8.webp"
              imageOnRight={false}
                />

            <ActivityCard
              id="local-cuisine"
              title="10. Trying Local Cuisine - Rogan Josh & Kahwa"
              description="No trip to Pahalgam is complete without tasting Kashmiri cuisine. From Rogan Josh to Dum Aloo and traditional Kahwa, local food will warm your soul."
              highlights={[
                "Authentic Kashmiri dishes",
                "Rogan Josh, Gushtaba, Dum Aloo",
                "Kahwa - saffron spiced tea",
                "Rich in flavors and aroma",
              ]}
              info={[
                "Available in most local restaurants",
                "Kahwa served post meals",
                "Made with saffron, almonds, cinnamon",
                "Perfect to end your day in Pahalgam",
              ]}
              image="https://res.cloudinary.com/dw1sh368y/image/upload/v1760347743/Strolling_through_Baisaran_Hills_rzvoir.webp"
              imageOnRight={true}
            />
          </div>

          {/* CALL TO ACTION */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore Pahalgam?
            </h2>
            <p className="text-xl mb-6">
              Plan your perfect Pahalgam adventure with our customized tour
              packages.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Pahalgam Packages
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

export default ThingsToDoInPahalgam;
