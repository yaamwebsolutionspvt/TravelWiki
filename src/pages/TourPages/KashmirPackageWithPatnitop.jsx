import React from "react";
import { useSEO } from "../../hooks/useSEO";
import SEO from "../../components/SEO";
import TourPackageSchema from "../../components/TourPackageSchema";

const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1759812841/Gulmarg_Meadow_Experience_j5zsmc.webp";

export default function KashmirPackageWithPatnitop() {
  const seoData = useSEO({
    title: "Kashmir Package with Patnitop | 8 Nights 9 Days Complete Tour",
    description: "Comprehensive Kashmir tour package including Patnitop hill station. 8 nights covering Srinagar, Gulmarg, Pahalgam, and Patnitop. Complete mountain experience at ₹21,999.",
    keywords: "Kashmir Patnitop tour, Kashmir with Patnitop package, 8 nights Kashmir tour, Patnitop hill station tour, complete Kashmir tour",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-package-with-patnitop/"
  });

  const packageData = {
    name: "Kashmir Package with Patnitop",
    description: "An extensive tour package combining the beauty of Kashmir valley with the serene hill station of Patnitop in Jammu region.",
    price: "21999",
    duration: "9 days",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Patnitop", "Jammu"],
    highlights: [
      "Complete Kashmir valley tour",
      "Patnitop hill station experience",
      "Nathatop adventure activities",
      "Comprehensive sightseeing",
      "Mountain railway experience",
      "Local cultural immersion"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen  mt-4">
        {/* Hero Section */}
        <div className="relative  text-white py-25 min-h-[75vh]" style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Package with Patnitop
              </h1>
              <p className="text-xl mb-8">
                Experience the complete beauty of Kashmir valley combined with the scenic hill station of Patnitop
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-black">₹21,999</span>
                  <span className="text-lg ml-2 text-black">per person</span>
                </div>
                <a
                  href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20Package%20with%20Patnitop%20from%20Travel%20Wiki."
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
                <div className="text-green-600 text-3xl mb-2">🗓️</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">8 Nights / 9 Days</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🏔️</div>
                <h3 className="font-semibold text-gray-800">Destinations</h3>
                <p className="text-gray-600">5 Major Places</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🚂</div>
                <h3 className="font-semibold text-gray-800">Experience</h3>
                <p className="text-gray-600">Hill Station Tour</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Activities</h3>
                <p className="text-gray-600">Adventure & Culture</p>
              </div>
            </div>

            {/* Package Overview */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Complete Kashmir & Patnitop Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This comprehensive tour package offers the perfect combination of Kashmir's paradise-like beauty 
                with Patnitop's serene hill station charm. Spanning 8 nights and 9 days, this tour covers all 
                major destinations in Kashmir valley along with the scenic beauty of Patnitop in Jammu region.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Patnitop, located at an altitude of 2,024 meters, offers panoramic views of the Chenab basin 
                and surrounding mountains. Known for its pleasant climate and natural beauty, it serves as a 
                perfect complement to the Kashmir valley experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The tour includes adventure activities, cultural experiences, comfortable accommodations, and 
                comprehensive sightseeing that showcases the diverse beauty of the region from the famous 
                Dal Lake to the pristine meadows of Patnitop.
              </p>
            </div>

            {/* Destinations Covered */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Destinations Covered</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏞️</div>
                  <h4 className="font-semibold text-gray-800 mb-4">Kashmir Valley</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Srinagar (2 nights)</li>
                    <li>• Gulmarg (2 nights)</li>
                    <li>• Pahalgam (2 nights)</li>
                    <li>• Sonamarg day trip</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h4 className="font-semibold text-gray-800 mb-4">Patnitop Region</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Patnitop (2 nights)</li>
                    <li>• Nathatop adventure</li>
                    <li>• Sanasar meadows</li>
                    <li>• Madhatop viewpoint</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h4 className="font-semibold text-gray-800 mb-4">Cultural Sites</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Mughal Gardens</li>
                    <li>• Local temples</li>
                    <li>• Traditional markets</li>
                    <li>• Heritage sites</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Package Highlights */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Package Highlights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Kashmir Valley Experience</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Dal Lake Shikara rides and houseboat experience
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Gulmarg Gondola and skiing activities
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Pahalgam valley exploration (Betaab, Aru)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Sonamarg excursion and Thajiwas glacier
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Mughal Gardens and local sightseeing
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Patnitop Hill Station</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Scenic drive through mountain roads
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Nathatop adventure activities and views
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Sanasar meadows and camping experience
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Madhatop panoramic viewpoint
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Local temple visits and cultural tours
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}