import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
import BestsellerKashmirTours from "../../../components/Packages/BestsellerKashmirTours";
import HoneymoonSpecial from "../../../components/Packages/HoneymoonSpecial";
import KashmirFamilyPackages from "../../../components/Packages/KashmirFamilyPackages";
import KashmirExcursionsSpecial from "../../../components/Packages/KashmirExcursionsSpecial";
import KashmirAdventureWinter from "../../../components/Packages/KashmirAdventureWinter";
import KashmirCulturalToursAndPackages from "../../../components/Packages/KashmirCulturalToursAndPackages";

const kashmirKargilImage = "https://res.cloudinary.com/dw1sh368y/image/upload/v1758606385/Day_1_Floating_into_Kashmir_Srinagar_Welcome_ved3ol.webp";

export default function KashmirWithKargilTour() {
  const seoData = useSEO({
    title: "Kashmir With Kargil | 6 Nights 7 Days Multi-Cultural Heritage Tour",
    description: "Explore Kashmir's diverse cultural landscape from Srinagar to Kargil, covering Sonmarg and Gulmarg. Experience Kashmiri, Balti, and Ladakhi cultures in one tour. Starting at ₹22,999.",
    keywords: "Kashmir Kargil cultural tour, 6 nights multi-cultural experience, Balti culture Kashmir, Ladakhi heritage tour, diverse Kashmir cultures, Sonmarg Gulmarg cultural tour",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-with-kargil/"
  });

  const packageData = {
    name: "Kashmir With Kargil Multi-Cultural Tour",
    description: "A diverse cultural journey exploring the multi-ethnic heritage of Kashmir, from traditional Kashmiri culture to Balti and Ladakhi influences in the Kargil region.",
    price: "22999",
    originalPrice: "27599",
    duration: "7 days",
    destinations: ["Srinagar", "Kargil", "Sonmarg", "Gulmarg"],
    highlights: [
      "01 Hr Shikara Ride",
      "Indian traditional lunch experiences",
      "Multi-cultural heritage exploration",
      "Balti culture experience in Kargil",
      "Diverse religious and cultural sites",
      "High-altitude cultural immersion"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />

      <div className="min-h-screen mt-4">
        {/* Hero Section */}
        <div
          className="relative text-white min-h-[75vh] overflow-hidden"
          style={{
            backgroundImage: `url(${kashmirKargilImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative container mx-auto px-4 py-12 h-full flex items-center justify-center">
            <div className="max-w-4xl text-center">
              <h1
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
              >
                Kashmir With Kargil Multi-Cultural Tour
              </h1>

              <p
                className="text-xl mb-8"
                style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
              >
                Discover the cultural harmony of Kashmir – from Srinagar’s traditions
                to the Balti and Ladakhi heritage of Kargil
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹22,999</span>
                  <span className="text-lg ml-2 text-gray-600">per person</span>
                  <div className="text-sm text-gray-200">
                    <span className="line-through text-gray-400">₹27,599</span>{" "}
                    <span className="text-green-300">17% OFF</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20With%20Kargil%20Multi-Cultural%20Tour%20from%20Travel%20Wiki."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Package Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quick Details */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">6 Nights / 7 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🌍</div>
                <h3 className="font-semibold text-gray-800">Cultures</h3>
                <p className="text-gray-600">Multi-Ethnic</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">14 Cultural</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-indigo-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Altitude</h3>
                <p className="text-gray-600">High Mountains</p>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Multi-Cultural Kashmir Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Journey through the heart of Kashmir’s cultural diversity, from the lush valleys of Srinagar
                to the rugged highlands of Kargil. This 6-night, 7-day tour reveals how distinct ethnic
                communities — Kashmiri, Balti, and Ladakhi — coexist and preserve their traditions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience the evolution of culture across geography and altitude, with opportunities to
                participate in traditional crafts, enjoy authentic cuisine, and interact with diverse
                communities along the ancient Silk Route.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ideal for culture enthusiasts, historians, and travelers seeking deep insight into Kashmir’s
                unique position as a cultural crossroads between Central Asia and South Asia.
              </p>
            </div>

            {/* Itinerary Section */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Multi-Cultural Discovery Itinerary
              </h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Srinagar Cultural Foundation"
                  activities={[
                    "Arrival and check-in to heritage houseboat or hotel",
                    "Cultural orientation about Kashmir’s ethnic communities",
                    "01 Hour Shikara ride with storytelling on Dal Lake",
                    "Visit Kashmiri old city and architectural landmarks",
                    "Evening introduction to Kashmiri folk traditions",
                    "Traditional dinner with live music performance"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759485995/Kashmir_17_Srinagar_w6an3v.webp"
                  imageAlt="Srinagar Cultural Foundation"
                  imageTitle="Srinagar Heritage"
                  imageSubtitle="Cultural Introduction"
                  icon="🏛️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Deep Kashmiri Cultural Immersion"
                  activities={[
                    "Visit traditional craft workshops – carpet weaving, papier-mâché",
                    "Explore Mughal Gardens and religious sites",
                    "Cultural lunch experience with local family",
                    "Learn about Kashmiri art, poetry, and traditions",
                    "Evening Rouf and Hafiza dance cultural show"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759489189/Journey_to_Gurez_Valley_dxjanc.webp"
                  imageAlt="Deep Kashmiri Cultural Immersion"
                  imageTitle="Kashmiri Heritage"
                  imageSubtitle="Artisan Experience"
                  icon="🎭"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3: Journey to Kargil via Sonmarg"
                  activities={[
                    "Depart Srinagar for Kargil via Sonmarg",
                    "Scenic drive through mountain passes and villages",
                    "Observe cultural transition from Kashmiri to Balti regions",
                    "Village stops for cultural photography and interaction",
                    "Arrival and check-in at Kargil accommodation",
                    "Evening Balti cultural orientation with dinner"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1758345483/8-Day_Kashmir_Ladakh_Scenic_Expedition_hiarjd.webp"
                  imageAlt="Journey to Kargil"
                  imageTitle="Mountain Cultural Transition"
                  imageSubtitle="Srinagar to Kargil"
                  icon="🚗"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 4: Kargil Balti Cultural Experience"
                  activities={[
                    "Full-day exploration of Balti culture and villages",
                    "Visit ancient monasteries and Buddhist-Islamic heritage sites",
                    "Learn about Balti language, architecture, and customs",
                    "Traditional Balti lunch and local folklore sessions",
                    "Evening folk performances and storytelling"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759493452/Balti_Village_Kargil_vlg8sh.webp"
                  imageAlt="Kargil Balti Cultural Experience"
                  imageTitle="Balti Heritage"
                  imageSubtitle="Cultural Fusion"
                  icon="🏔️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 5: Sonmarg Cultural & Natural Heritage"
                  activities={[
                    "Travel through scenic Sonmarg valleys",
                    "Visit nomadic Gujjar and Bakarwal settlements",
                    "Learn about transhumance and mountain life",
                    "Cultural lunch with local pastoral communities",
                    "Evening leisure amidst Himalayan landscapes"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759494480/Sonmarg_Cultural_Valley_rqenfr.webp"
                  imageAlt="Sonmarg Cultural Heritage"
                  imageTitle="Sonmarg Valley"
                  imageSubtitle="Cultural & Natural Harmony"
                  icon="🌄"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 6: Gulmarg Cultural & Adventure Fusion"
                  activities={[
                    "Drive to Gulmarg and explore local heritage sites",
                    "Visit traditional villages and meet local artisans",
                    "Learn about tourism’s impact on regional culture",
                    "Enjoy optional cable car experience (Gondola Ride)",
                    "Evening cultural reflection and farewell dinner"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759495120/Gulmarg_Cultural_Snow_Experience_y6ujkr.webp"
                  imageAlt="Gulmarg Cultural Experience"
                  imageTitle="Gulmarg Culture"
                  imageSubtitle="Adventure & Tradition"
                  icon="🎿"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 7: Cultural Integration & Departure"
                  activities={[
                    "Final breakfast and reflection on cultural learnings",
                    "Shopping for local handicrafts and souvenirs",
                    "Cultural summary session and photo documentation",
                    "Departure transfer with lifetime memories"
                  ]}
                  imageUrl="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Farewell+from+Kashmir"
                  imageAlt="Cultural Integration & Departure"
                  imageTitle="Farewell"
                  imageSubtitle="Final Day"
                  icon="✈️"
                  imageOnRight={false}
                />
              </div>
            </div>

            {/* Multi-Cultural Features */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Multi-Cultural Experience Features
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Diversity</h4>
                  <p className="text-gray-600">Experience Kashmiri, Balti, and Ladakhi influences across regions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Altitude Impact</h4>
                  <p className="text-gray-600">Learn how geography shapes unique cultural practices</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🕌</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Religious Harmony</h4>
                  <p className="text-gray-600">Explore temples, mosques, and monasteries in cultural unity</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Culinary Heritage</h4>
                  <p className="text-gray-600">Enjoy Kashmiri, Balti, and mountain cuisine varieties</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏘️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Community Interactions</h4>
                  <p className="text-gray-600">Meet diverse mountain communities and learn their lifestyles</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📚</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Learning</h4>
                  <p className="text-gray-600">Understand Kashmir’s role as a cultural bridge between Asia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Package Sections */}
      <KashmirCulturalToursAndPackages />
      <BestsellerKashmirTours />
      <KashmirFamilyPackages />
      <HoneymoonSpecial />
      <KashmirExcursionsSpecial />
      <KashmirAdventureWinter />
    </>
  );
}
