import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";
import ItineraryCard from "../../components/ItineraryCard";

const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1758780039/Shri_Mata_Vaishno_Devi_pglisz.webp";

export default function KashmirWithVaishnoDevi() {
  const seoData = useSEO({
    title: "Kashmir with Vaishno Devi Tour | 8 Nights Spiritual & Scenic Package",
    description: "Combine spiritual journey to Vaishno Devi with Kashmir valley beauty. 8 nights package covering darshan, Srinagar, Gulmarg, and Pahalgam. Complete pilgrimage tour at ₹20,999.",
    keywords: "Kashmir Vaishno Devi tour, spiritual Kashmir package, Mata Vaishno Devi darshan, Kashmir pilgrimage tour, 8 nights spiritual tour",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-with-vaishno-devi/"
  });

  const packageData = {
    name: "Kashmir with Vaishno Devi Tour",
    description: "A perfect spiritual and scenic tour combining the divine blessings of Mata Vaishno Devi with the natural beauty of Kashmir valley.",
    price: "20999",
    duration: "9 days",
    destinations: ["Katra", "Vaishno Devi", "Srinagar", "Gulmarg", "Pahalgam"],
    highlights: [
      "Vaishno Devi darshan",
      "Helicopter services available",
      "Kashmir valley tour",
      "Spiritual and scenic combination",
      "Comfortable accommodations",
      "Complete pilgrimage experience"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative text-white py-30 min-h-[75vh]" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className=""></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir with Vaishno Devi Tour
              </h1>
              <p className="text-xl mb-8">
                Seek divine blessings at Mata Vaishno Devi and experience the paradise of Kashmir in one spiritual journey
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹20,999</span>
                  <span className="text-lg ml-2 text-black">per person</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20With%20Vaishno%20Devi%20Tour%20from%20Travel%20Wiki."
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
                <div className="text-red-600 text-3xl mb-2">🕉️</div>
                <h3 className="font-semibold text-gray-800">Pilgrimage</h3>
                <p className="text-gray-600">Vaishno Devi Darshan</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">🚁</div>
                <h3 className="font-semibold text-gray-800">Options</h3>
                <p className="text-gray-600">Helicopter Available</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Kashmir</h3>
                <p className="text-gray-600">Valley Tour</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-red-600 text-3xl mb-2">🙏</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Spiritual Journey</p>
              </div>
            </div>

            {/* Spiritual Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Spiritual & Scenic Journey</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This unique tour package combines the spiritual fulfillment of seeking blessings at the holy shrine 
                of Mata Vaishno Devi with the breathtaking natural beauty of Kashmir valley. Experience divine grace 
                and natural paradise in one comprehensive journey that nourishes both soul and senses.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The tour begins with the sacred pilgrimage to Vaishno Devi temple, one of India's most revered shrines, 
                where millions of devotees visit annually. Located in the Trikota Mountains of Jammu, the temple 
                offers spiritual solace and divine blessings. We provide options for both traditional trek and helicopter 
                services for darshan.
              </p>
              <p className="text-gray-600 leading-relaxed">
                After the spiritual experience, the tour transitions to the scenic beauty of Kashmir valley, often 
                called "Paradise on Earth." This perfect combination ensures you return home with both divine blessings 
                and unforgettable memories of natural beauty.
              </p>
            </div>

            {/* Tour Components */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tour Components</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🕉️ Spiritual Experience (3 Days)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Arrival in Katra base camp</li>
                    <li>• Vaishno Devi temple darshan</li>
                    <li>• Traditional trek or helicopter option</li>
                    <li>• Ardhkuwari cave visit</li>
                    <li>• Bhawan temple prayers</li>
                    <li>• Sacred prasadam and blessings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🏔️ Kashmir Valley (5 Days)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Srinagar: Dal Lake, Mughal Gardens</li>
                    <li>• Gulmarg: Gondola rides, snow activities</li>
                    <li>• Pahalgam: Betaab Valley, Aru Valley</li>
                    <li>• Sonamarg: Thajiwas glacier excursion</li>
                    <li>• Local sightseeing and shopping</li>
                    <li>• Traditional Kashmiri hospitality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pilgrimage Information */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Vaishno Devi Pilgrimage Information</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚶‍♀️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Traditional Trek</h4>
                  <p className="text-gray-600">13 km uphill trek to the holy shrine with ponies and palanquins available</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚁</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Helicopter Service</h4>
                  <p className="text-gray-600">Quick helicopter ride to Sanjichhat for easy access to temple</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">24/7 Open</h4>
                  <p className="text-gray-600">Temple remains open throughout the year, day and night</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Accommodation</h4>
                  <p className="text-gray-600">Various accommodation options available in Katra</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Facilities</h4>
                  <p className="text-gray-600">Food courts, rest areas, and medical facilities along the route</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎫</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Booking</h4>
                  <p className="text-gray-600">We arrange all bookings including helicopter tickets if required</p>
                </div>
              </div>
            </div>

            {/* Complete Itinerary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Complete Tour Itinerary</h2>
              <div className="space-y-8">
                <ItineraryCard
                  title="Day 1: Arrival in Katra"
                  activities={[
                    "Arrival at Jammu airport/railway station",
                    "Transfer to Katra (48 km, 1.5 hours)",
                    "Hotel check-in and preparation for darshan",
                    "Evening rest and early sleep"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1760626930/Arrival_in_Katra_jyyewg.webp"
                  imageAlt="Katra arrival"
                  imageTitle="Katra Base Camp"
                  imageSubtitle="Gateway to Vaishno Devi"
                  icon="🕉️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 2: Vaishno Devi Darshan"
                  activities={[
                    "Early morning start for darshan (2-3 AM)",
                    "Trek/helicopter to Vaishno Devi temple",
                    "Darshan and prayers at holy shrine",
                    "Return to Katra base camp",
                    "Rest and recovery"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1760626931/Vaishno_Devi_Darshan_aqvqwf.webp"
                  imageAlt="Vaishno Devi temple"
                  imageTitle="Vaishno Devi Temple"
                  imageSubtitle="Sacred shrine darshan"
                  icon="🕉️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 3: Katra to Srinagar"
                  activities={[
                    "Check-out from Katra hotel",
                    "Drive to Srinagar (270 km, 6-7 hours)",
                    "Scenic journey through mountains",
                    "Arrival and check-in at Srinagar hotel",
                    "Evening leisure at Dal Lake"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1760626932/Katra_to_Srinagar_ddv7on.webp"
                  imageAlt="Srinagar arrival"
                  imageTitle="Srinagar Arrival"
                  imageSubtitle="Gateway to Kashmir valley"
                  icon="🏛️"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 4-5: Srinagar Exploration"
                  activities={[
                    "Dal Lake Shikara rides and houseboat experience",
                    "Mughal Gardens tour (Shalimar, Nishat, Chashme Shahi)",
                    "Local sightseeing and market visits",
                    "Traditional Kashmiri cuisine experiences"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1760626938/Srinagar_Exploration1_fz0cc1.webp"
                  imageAlt="Srinagar sightseeing"
                  imageTitle="Srinagar Sightseeing"
                  imageSubtitle="Mughal Gardens and Dal Lake"
                  icon="🌲"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 6: Gulmarg Day Trip"
                  activities={[
                    "Full day excursion to Gulmarg",
                    "Gondola rides and snow activities",
                    "Explore meadows and take photographs",
                    "Return to Srinagar in evening"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1760626940/Gulmarg_Day_Trip1_xsjjmb.webp"
                  imageAlt="Gulmarg Gondola"
                  imageTitle="Gulmarg Gondola"
                  imageSubtitle="Experience to Apharwat Peak"
                  icon="🚡"
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 7: Pahalgam Excursion"
                  activities={[
                    "Day trip to Pahalgam valley",
                    "Visit Betaab Valley and Aru Valley",
                    "Nature walks and photography",
                    "Return to Srinagar for overnight stay"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1760610715/Pahalgam_Paradise_exlo88.webp"
                  imageAlt="Pahalgam valley"
                  imageTitle="Pahalgam Valley"
                  imageSubtitle="Valley of Shepherds"
                  icon="🏔️"
                  imageOnRight={true}
                />

                <ItineraryCard
                  title="Day 8: Sonamarg Day Trip"
                  activities={[
                    "Excursion to Sonamarg (Meadow of Gold)",
                    "Visit Thajiwas Glacier",
                    "Pony rides and snow activities",
                    "Return to Srinagar"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1760610716/Adventure_and_Romance_kbwujf.webp"
                  imageAlt="Sonamarg"
                  imageTitle="Sonamarg"
                  imageSubtitle="Meadow of Gold"
                  icon="⛷️"
                  
                  imageOnRight={false}
                />

                <ItineraryCard
                  title="Day 9: Departure"
                  activities={[
                    "Check-out and final shopping",
                    "Transfer to Srinagar airport",
                    "Departure with blessings and memories"
                  ]}
                  imageUrl="https://res.cloudinary.com/dw1sh368y/image/upload/v1760610717/Farewell_Romance_tvlp3d.png"
                  imageAlt="Srinagar departure"
                  imageTitle="Srinagar Airport"
                  imageSubtitle="Departure with blessings"
                  icon="✈️"
                  imageOnRight={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
