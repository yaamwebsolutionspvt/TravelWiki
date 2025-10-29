import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
import ItineraryCard from "../../../components/ItineraryCard";
import { Link } from "react-router-dom";
import BestsellerKashmirTours from "../../../components/Packages/BestsellerKashmirTours";
import KashmirFamilyPackages from "../../../components/Packages/KashmirFamilyPackages";
import HoneymoonSpecial from "../../../components/Packages/HoneymoonSpecial";
import KashmirExcursionsSpecial from "../../../components/Packages/KashmirExcursionsSpecial";
import KashmirAdventureWinter from "../../../components/Packages/KashmirAdventureWinter";
import KashmirCulturalToursAndPackages from "../../../components/Packages/KashmirCulturalToursAndPackages";

const srinagarTourPackageImage = "https://res.cloudinary.com/dw1sh368y/image/upload/v1759907937/Arrival_Dal_Lake_Introduction_dt4jja.webp";

export default function SrinagarTourPackage() {

  const seoData = useSEO({
    title: "Srinagar Tour Package | 6 Nights Capital City Experience",
    description: "Comprehensive Srinagar city tour package covering Dal Lake, Mughal Gardens, houseboats, and local attractions. 6 nights in the summer capital of Kashmir. Explore the Venice of East.",
    keywords: "Srinagar tour package, Dal Lake tour, Mughal Gardens Srinagar, houseboat stay Srinagar, Kashmir capital tour, Venice of East tour",
    canonical: "https://www.travelwiki.org.in/packages/srinagar-tour-package/"
  });

  const packageData = {
    name: "Srinagar Tour Package",
    description: "Complete exploration of Srinagar, the summer capital of Kashmir, featuring comprehensive city tours, cultural experiences, and iconic attractions.",
    price: "Contact for pricing",
    duration: "7 days",
    destinations: ["Srinagar", "Dal Lake", "Nigeen Lake"],
    highlights: [
      "Comprehensive city tour",
      "Dal Lake and Nigeen Lake",
      "All Mughal Gardens",
      "Traditional houseboat stay",
      "Local cultural experiences",
      "Heritage walks and markets"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />

      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-30" style={{ backgroundImage: `url(${srinagarTourPackageImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Srinagar Tour Package
              </h1>
              <p className="text-xl mb-8">
                Discover the Venice of the East with our comprehensive Srinagar city tour covering all major attractions and cultural experiences
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-2xl font-bold text-black">Contact for Pricing</span>
                </div>
                <Link to='/contact' className="hoveer:cursor-pointer">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Enquire Now
                  </button>
                </Link>
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
                <div className="text-teal-600 text-3xl mb-2">🏛️</div>
                <h3 className="font-semibold text-gray-800">Focus</h3>
                <p className="text-gray-600">Srinagar City</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🚣</div>
                <h3 className="font-semibold text-gray-800">Lakes</h3>
                <p className="text-gray-600">Dal & Nigeen</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🌺</div>
                <h3 className="font-semibold text-gray-800">Gardens</h3>
                <p className="text-gray-600">All Mughal Gardens</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-teal-600 text-3xl mb-2">🏠</div>
                <h3 className="font-semibold text-gray-800">Culture</h3>
                <p className="text-gray-600">Heritage & Traditions</p>
              </div>
            </div>

            {/* Srinagar Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Srinagar - The Venice of the East</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Srinagar, the summer capital of Jammu and Kashmir, is renowned for its pristine lakes, magnificent
                Mughal gardens, and unique houseboat accommodations. Often referred to as the "Venice of the East,"
                this beautiful city sits at an altitude of 1,585 meters in the Kashmir Valley, surrounded by the
                stunning Himalayan ranges.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The city is famous for its intricate network of canals, bridges, and waterways, with Dal Lake being
                its crown jewel. Srinagar showcases a perfect blend of natural beauty and rich cultural heritage,
                featuring magnificent Mughal architecture, traditional Kashmiri handicrafts, and warm hospitality
                that has been welcoming visitors for centuries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive Srinagar tour package is designed for travelers who want to deeply explore this
                magnificent city, its culture, traditions, and every iconic attraction it has to offer. From floating
                markets to ancient temples, from luxury houseboats to traditional markets, experience it all.
              </p>
            </div>

            {/* Major Attractions */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Major Srinagar Attractions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏞️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dal Lake</h4>
                  <p className="text-gray-600">Iconic lake with houseboats, Shikara rides, and floating gardens</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌸</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mughal Gardens</h4>
                  <p className="text-gray-600">Shalimar, Nishat, Chashme Shahi with terraced lawns and fountains</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🕌</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Jamia Masjid</h4>
                  <p className="text-gray-600">Historic mosque with Indo-Saracenic architecture</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛥️</div>
                  <h4 className="font-semibeld text-gray-800 mb-2">Houseboats</h4>
                  <p className="text-gray-600">Traditional floating accommodations with carved interiors</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Shankaracharya Hill</h4>
                  <p className="text-gray-600">Ancient temple with panoramic city views</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Local Markets</h4>
                  <p className="text-gray-600">Traditional bazaars with handicrafts, carpets, and spices</p>
                </div>
              </div>
            </div>

            {/* Cultural Experiences */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Cultural & Heritage Experiences</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎭 Traditional Experiences</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Traditional Kashmiri Wazwan cuisine tasting
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Local handicraft workshops and demonstrations
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Pashmina and carpet weaving center visits
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Traditional Kashmiri music and dance programs
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Local family home visits and cultural exchange
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Heritage Walks</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Old city heritage walk with local guide
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Historic bridges and canals exploration
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Ancient temples and religious sites tours
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Traditional architecture appreciation tours
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      Photography walks through historic quarters
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Comprehensive Srinagar Itinerary</h2>

              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Arrival & Dal Lake Introduction"
                  activities={[
                    "Airport pickup and transfer to houseboat",
                    "Traditional welcome with Kahwa tea",
                    "Houseboat orientation and local briefing",
                    "Evening Shikara ride on Dal Lake",
                    "Dinner on houseboat with local cuisine"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907937/Arrival_Dal_Lake_Introduction_dt4jja.webp"
                  imageAlt="Dal Lake Introduction"
                  imageTitle="Dal Lake Introduction"
                  imageSubtitle="Traditional Welcome Experience"
                  icon="🏛️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Mughal Gardens & City Tour"
                  activities={[
                    "Morning visit to Shalimar Bagh (Abode of Love)",
                    "Nishat Bagh (Garden of Joy) exploration",
                    "Chashme Shahi (Royal Spring) visit",
                    "Local handicraft shopping and demonstrations",
                    "Evening leisure at Boulevard Road"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907935/Mughal_Gardens_City_Tour_bonery.webp"
                  imageAlt="Mughal Gardens & City Tour"
                  imageTitle="Mughal Gardens"
                  imageSubtitle="Royal Garden Experience"
                  icon="🌸"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3: Heritage & Culture Day"
                  activities={[
                    "Old city heritage walk with expert guide",
                    "Jamia Masjid and historic mosques tour",
                    "Traditional bazaars and local markets",
                    "Kashmiri handicraft workshops visit",
                    "Cultural program with traditional music"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907927/Heritage_Culture_Day_yqpgfu.webp"
                  imageAlt="Heritage & Culture Day"
                  imageTitle="Heritage & Culture"
                  imageSubtitle="Traditional Experience"
                  icon="🏛️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 4: Nigeen Lake & Local Experiences"
                  activities={[
                    "Morning boat ride on Nigeen Lake",
                    "Visit to floating vegetable market",
                    "Local family home visit and cultural exchange",
                    "Traditional Wazwan lunch experience",
                    "Sunset photography session"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907927/Nigeen_Lake_Local_Experiences_pu4nzh.webp"
                  imageAlt="Nigeen Lake & Local Experiences"
                  imageTitle="Nigeen Lake"
                  imageSubtitle="Local Cultural Exchange"
                  icon="🛥️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 5: Shankaracharya & Surroundings"
                  activities={[
                    "Early morning visit to Shankaracharya Temple",
                    "Panoramic views of Srinagar city",
                    "Pari Mahal (Palace of Fairies) exploration",
                    "Botanical garden and nature walks",
                    "Traditional carpet weaving center visit"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907938/Shankaracharya_Surroundings_kbsuvp.webp"
                  imageAlt="Shankaracharya & Surroundings"
                  imageTitle="Shankaracharya Temple"
                  imageSubtitle="Panoramic City Views"
                  icon="🏔️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 6: Arts & Crafts Deep Dive"
                  activities={[
                    "Pashmina weaving workshops and factory visits",
                    "Paper mache art demonstrations",
                    "Walnut wood carving workshops",
                    "Saffron cultivation and processing tour",
                    "Shopping for authentic souvenirs"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907928/Arts_Crafts_Deep_Dive_ci85bl.webp"
                  imageAlt="Arts & Crafts Deep Dive"
                  imageTitle="Arts & Crafts"
                  imageSubtitle="Traditional Workshops"
                  icon="🎨"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 7: Farewell & Departure"
                  activities={[
                    "Final Shikara ride with breakfast on lake",
                    "Last-minute shopping and souvenir collection",
                    "Check-out from houseboat",
                    "Airport transfer with cultural send-off",
                    "Departure with authentic Kashmir memories"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907929/Farewell_Departure_qyuqut.webp"
                  imageAlt="Farewell & Departure"
                  imageTitle="Farewell & Departure"
                  imageSubtitle="Final Memories"
                  icon="✈️"
                  imageOnRight={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestsellerKashmirTours />
      <KashmirFamilyPackages />
      <HoneymoonSpecial />
      <KashmirExcursionsSpecial />
      <KashmirAdventureWinter />
      <KashmirCulturalToursAndPackages />
    </>
  );
}
