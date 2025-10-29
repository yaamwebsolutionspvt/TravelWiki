import React from 'react';
import { Helmet } from 'react-helmet-async';
import KashmirTourPackages from '../../components/Packages/KashmirTourPackages'
import BestsellerKashmirTours from '../../components/Packages/BestsellerKashmirTours'
import HoneymoonSpecial from '../../components/Packages/HoneymoonSpecial'
import KashmirAdventureWinter from '../../components/Packages/KashmirAdventureWinter'
import KashmirCulturalToursAndPackages from '../../components/Packages/KashmirCulturalToursAndPackages'
import KashmirExcursionsSpecial from '../../components/Packages/KashmirExcursionsSpecial'
import KashmirFamilyPackages from '../../components/Packages/KashmirFamilyPackages'

const heroBg = "https://res.cloudinary.com/dw1sh368y/image/upload/v1760352641/Skiing_in_the_Soft_Snow_fp1yon.webp";

const HowToReachKashmir = () => {
  return (
    <>
      <Helmet>
        <title>How To Reach Kashmir Valley - By Air, Rail & Road - Complete Travel Guide 2025</title>
        <meta 
          name="description" 
          content="Complete guide on how to reach Kashmir Valley by air, rail and road. Discover the best ways to travel to the Paradise on Earth with detailed transport information." 
        />
        <meta name="keywords" content="how to reach Kashmir, Kashmir travel guide, travel to Kashmir, Kashmir by air, Kashmir by train, Kashmir by road, Srinagar airport, Jammu railway station" />
        
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative text-white py-24 min-h-[75vh]"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How To Reach Kashmir Valley
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Your complete travel guide to reaching the Paradise on Earth by air, rail, and road. 
                Plan your journey to Kashmir with our detailed transportation guide.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The state of Jammu & Kashmir is considered to be paradise on earth. It is the 19th largest state in India and it is located in the Himalayan mountains. The state consists of three main regions – Jammu, the Kashmir Valley and Ladakh. All these three places offer beautiful mountains and valleys, religious shrines and remote mountains. The locals are warm and hospitable, and they will welcome you into their land with open arms.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Kashmir valley is the epitome of natural beauty. It is renowned around the globe for that. One can come here and soak their senses in the many lakes, gardens and hill stations that attract thousands of tourists year after year. From wildlife, temples, art and culture, festivals and cuisines, the valley has it all.
            </p>
          </div>

          {/* Transport Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">By Air</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Visiting Kashmir by flight is the most convenient choice. Srinagar has an international airport, connected to almost all major cities of India.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Srinagar International Airport</li>
                <li>• Direct flights from Delhi, Mumbai, Bangalore</li>
                <li>• Multiple daily flights available</li>
                <li>• Taxi services from airport</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">By Rail</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Kashmir Valley is accessible by multiple railway stations. Banihal and Srinagar are connected on the Banihal–Baramulla rail line, while Jammu Tawi is the main long-distance railhead.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Banihal Railway Station</strong>: Closest major railhead (~110 km from Srinagar)</li>
                <li>• <strong>Srinagar Railway Station</strong>: Within city; connected to Banihal and Baramulla</li>
                <li>• <strong>Jammu Tawi Railway Station</strong>: ~300 km; trains from major Indian cities</li>
                <li>• <strong>Future</strong>: USBRL project will directly link Srinagar with rest of India</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">By Road</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A road trip to Kashmir is scenic with few sharp inclines and bends. You can travel by bus or self-drive to Kashmir.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Scenic drive through mountains</li>
                <li>• Start from Delhi or Chandigarh</li>
                <li>• Well-maintained highways</li>
                <li>• Self-drive or bus options</li>
              </ul>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {/* By Air Section */}
            <section className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759907937/Arrival_Dal_Lake_Introduction_dt4jja.webp"
                alt="Srinagar International Airport and Dal Lake"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How To Reach Kashmir Valley by Air</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Visiting Kashmir by flight is the most convenient choice. In Srinagar, there is one international airport, connected to almost all major cities of India. This makes it easy to visit Kashmir via flight. There are multiple direct and connecting flights that connect to Srinagar, daily. From Srinagar airport, you will find taxi services that will help you reach your destination in the Kashmir valley.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Airport Details:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Airport:</strong> Sheikh-Ul-Alam International Airport, Srinagar</li>
                      <li>• <strong>Distance from city:</strong> 15km from Srinagar city center</li>
                      <li>• <strong>Connected cities:</strong> Delhi, Mumbai, Kolkata, Chennai, Bangalore</li>
                      <li>• <strong>Airlines:</strong> Air India, IndiGo, SpiceJet, Vistara</li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            </section>

            {/* By Rail Section */}
            <section className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759486005/Kashmir_11_Dallake_ujqsuw.webp"
                alt="Railway journey to Kashmir Valley"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How To Reach Kashmir Valley by Rail</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You can reach Kashmir Valley by rail via multiple stations. The Banihal–Baramulla rail line connects Banihal, Srinagar, and Baramulla within the valley. Long-distance trains from across India arrive at Jammu Tawi, from where you can continue by road or by train up to Banihal and onward to Srinagar.
                  </p>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Railway Details:</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• <strong>Banihal Railway Station</strong>: Closest major railhead to Srinagar (~110 km); connected to Srinagar and Baramulla via the Banihal–Baramulla line</li>
                      <li>• <strong>Srinagar Railway Station</strong>: Located within the city; part of the Banihal–Baramulla line (connected to Banihal, Baramulla, and intermediate towns)</li>
                      <li>• <strong>Jammu Tawi Railway Station</strong>: About 300 km from Srinagar; well-connected with trains from major Indian cities; continue by road or by train up to Banihal and then onward to Srinagar</li>
                      <li>• <strong>Future Connectivity (USBRL)</strong>: The Udhampur–Srinagar–Baramulla Rail Link is nearing completion and will directly link Srinagar with the rest of India by rail</li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            </section>

            {/* By Road Section */}
            <section className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1759214299/Sind_River_Scenic_Drives_xnevb8.webp"
                alt="Scenic road journey to Kashmir Valley"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How To Reach Kashmir Valley by Road</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    From nearby cities of the Kashmir valley, a road trip to paradise on earth is one of the popular options. The route to Kashmir is scenic with few sharp inclines and bends. You can travel by bus or even self-drive to Kashmir. The closest major city to start from would be Delhi or Chandigarh.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-3">Road Journey Details:</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• <strong>From Delhi:</strong> 876km, 12-14 hours</li>
                      <li>• <strong>From Chandigarh:</strong> 630km, 10-12 hours</li>
                      <li>• <strong>Route:</strong> Via Jammu-Srinagar Highway (NH44)</li>
                      <li>• <strong>Best time:</strong> April to November (weather dependent)</li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            </section>
          </div>

          {/* Travel Tips */}
          <div className="mt-12 bg-yellow-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">Important Travel Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Best Time to Visit</h4>
                <p className="text-yellow-700">Summer months (April-October) are ideal for travel. Winter travel may face weather-related delays.</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Documentation</h4>
                <p className="text-yellow-700">Carry valid photo ID. Inner Line Permits may be required for certain areas near the border.</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Booking in Advance</h4>
                <p className="text-yellow-700">Book flights and accommodations well in advance, especially during peak tourist season.</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Weather Considerations</h4>
                <p className="text-yellow-700">Check weather conditions before travel. Road conditions can change rapidly in winter.</p>
              </div>
            </div>
          </div>

        
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
    </>
  );
};

export default HowToReachKashmir;
