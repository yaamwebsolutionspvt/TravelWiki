import React from "react";
import { useSEO } from "../../../hooks/useSEO";
import SEO from "../../../components/SEO";
import TourPackageSchema from "../../../components/TourPackageSchema";
const kashmirTravelPackages = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514641/travelwiki/assets/Honeymoon/kashmir-travel-packages.jpg";

export default function KashmirShoppingGuide() {
  const seoData = useSEO({
    title: "Kashmir Shopping Guide | Best Markets & Handicrafts Shopping Tour",
    description: "Explore the best shopping destinations in Kashmir with our guided shopping tour. Discover authentic Kashmiri handicrafts, saffron, dry fruits, shawls, and carpets. Perfect for couples and families. Starting at ₹1,499.",
    keywords: "Kashmir shopping guide, Kashmiri handicrafts shopping, saffron shopping Kashmir, Pashmina shawls Kashmir, Kashmir carpet shopping, traditional shopping Kashmir",
    canonical: "https://www.travelwiki.org.in/packages/kashmir-shopping-guide/"
  });

  const packageData = {
    name: "Kashmir Shopping Guide",
    description: "A comprehensive shopping tour covering the best markets and authentic handicraft stores in Kashmir.",
    price: "1499",
    originalPrice: "1999",
    duration: "Half Day",
    destinations: ["Lal Chowk", "Residency Road", "Polo View Market", "Dal Lake Markets"],
    highlights: [
      "Visit to authentic handicraft stores",
      "Saffron and dry fruits shopping",
      "Pashmina shawls and carpets",
      "Antique jewelry and artifacts",
      "Price negotiation assistance",
      "Authenticity guarantee"
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <TourPackageSchema data={packageData} />
      
      <div className="min-h-screen page-container">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-600 to-emerald-700 text-white py-30" style={{
          backgroundImage: `url(${kashmirTravelPackages})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kashmir Shopping Guide
              </h1>
              <p className="text-xl mb-8">
                Discover the finest Kashmiri handicrafts, saffron, and authentic souvenirs with our expert shopping guide
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <span className="text-3xl font-bold text-white">₹1,499</span>
                  <span className="text-lg line-through ml-2 text-gray-200">₹1,999</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded ml-2">25% OFF</span>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Book Shopping Tour
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Shopping Guide Overview */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Quick Details */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🛍️</div>
                <h3 className="font-semibold text-gray-800">Markets</h3>
                <p className="text-gray-600">5+ Best Locations</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Duration</h3>
                <p className="text-gray-600">4-5 Hours</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">✅</div>
                <h3 className="font-semibold text-gray-800">Authenticity</h3>
                <p className="text-gray-600">100% Guaranteed</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-green-600 text-3xl mb-2">🤝</div>
                <h3 className="font-semibold text-gray-800">Assistance</h3>
                <p className="text-gray-600">Price Negotiation</p>
              </div>
            </div>

            {/* About Shopping Guide */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Kashmir Shopping Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kashmir is renowned worldwide for its exquisite handicrafts, aromatic saffron, luxurious Pashmina shawls, 
                and intricate carpets. Our guided shopping tour takes you to the most authentic and trusted stores where 
                you can find genuine Kashmiri products at the best prices. Whether you're looking for souvenirs for 
                loved ones or investing in premium handicrafts, our expert guide ensures you get the best deals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Navigate through bustling markets like Lal Chowk, explore the artisan quarters, and visit government 
                emporiums that guarantee authenticity. Our shopping guide not only helps you find what you're looking 
                for but also educates you about the rich heritage behind each product, ensuring you make informed purchases.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From the world's finest saffron to hand-knotted carpets that take months to complete, every purchase 
                in Kashmir tells a story of centuries-old craftsmanship and cultural heritage.
              </p>
            </div>

            {/* Shopping Categories */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What to Shop in Kashmir</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">🧶</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Pashmina & Shawls</h4>
                  <p className="text-gray-600 text-center">Authentic Pashmina shawls, stoles, and scarves made from finest Changthangi goat wool</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">🌸</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Saffron & Spices</h4>
                  <p className="text-gray-600 text-center">World's finest Kashmiri saffron and aromatic spices directly from farmers</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">🪟</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Carpets & Rugs</h4>
                  <p className="text-gray-600 text-center">Hand-knotted silk and wool carpets with intricate Persian and Kashmiri designs</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">🏺</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Handicrafts</h4>
                  <p className="text-gray-600 text-center">Papier-mâché items, wood carvings, copper work, and traditional Kashmiri crafts</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">💍</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Jewelry & Antiques</h4>
                  <p className="text-gray-600 text-center">Traditional Kashmiri jewelry, antique items, and decorative artifacts</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl mb-4 text-center">🥜</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-center">Dry Fruits & Nuts</h4>
                  <p className="text-gray-600 text-center">Premium quality almonds, walnuts, apricots, and other Kashmiri dry fruits</p>
                </div>
              </div>
            </div>

            {/* Shopping Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Shopping Tour Itinerary</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">10:00 AM - Lal Chowk Market</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Start at Kashmir's main commercial center</li>
                    <li>Visit authentic Pashmina and shawl stores</li>
                    <li>Learn to identify genuine vs. fake products</li>
                    <li>Price comparison and negotiation tips</li>
                  </ul>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">11:30 AM - Government Emporium</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Visit government-certified stores</li>
                    <li>Explore authentic saffron and spice collections</li>
                    <li>Learn about quality grading and pricing</li>
                    <li>Certificate of authenticity provided</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">1:00 PM - Carpet Showrooms</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Visit renowned carpet weaving centers</li>
                    <li>Witness live carpet making demonstrations</li>
                    <li>Understand different knot densities and designs</li>
                    <li>Interact with master weavers</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">2:30 PM - Handicraft Markets</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Explore papier-mâché workshops</li>
                    <li>Visit wood carving and copper work studios</li>
                    <li>Browse through antique and jewelry shops</li>
                    <li>Customization options available</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">4:00 PM - Floating Markets (Seasonal)</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Experience unique Dal Lake floating vegetable market</li>
                    <li>Purchase fresh local produce and flowers</li>
                    <li>Unique shopping experience on Shikaras</li>
                    <li>Photography opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Shopping Tips & Inclusions */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Tour Includes
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Expert shopping guide
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Transportation between markets
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Price negotiation assistance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Authenticity verification
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Quality assessment guidance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Certificate of authenticity for premium items
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="text-blue-500 mr-2">💡</span>
                  Shopping Tips
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Always ask for authenticity certificates
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Compare prices at multiple stores
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Check thread count for Pashmina quality
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Smell test for genuine saffron
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Negotiate respectfully and patiently
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Keep budget in mind before starting
                  </li>
                </ul>
              </div>
            </div>

            {/* Authenticity Guarantee */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Authenticity Guarantee</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Quality Verification</h4>
                  <p className="text-gray-600">Every product is verified for authenticity and quality by our experts</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📜</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Certificates Provided</h4>
                  <p className="text-gray-600">Official certificates of authenticity for all premium purchases</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">↩️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Return Policy</h4>
                  <p className="text-gray-600">7-day return policy if products don't meet quality standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
