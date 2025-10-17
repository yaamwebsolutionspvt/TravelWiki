import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ItineraryCard from "../../components/ItineraryCard";
const ld8 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1760705854/Kashmir_and_ladakh_combo_Package_wsowum.webp";

const KashmirAndLadakhComboPackageWithKargilStay = () => {
  return (
    <>
      <SEO 
        pageType="ladakh"
        customTitle="Kashmir and Ladakh Combo Package with Kargil Stay - 9N/10D Starting ₹36,999"
        customDescription="Experience the best of Kashmir and Ladakh in one comprehensive tour. Visit Srinagar, Gulmarg, Pahalgam, Kargil, Leh, Nubra Valley & Pangong Lake starting from ₹36,999 per person."
        customKeywords={["Kashmir Ladakh combo tour", "Kargil stay package", "Srinagar Gulmarg Pahalgam Ladakh tour", "comprehensive Kashmir Ladakh package"]}
        customImage={ld8}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Kashmir and Ladakh Combo Package with Kargil Stay",
            "description": "Experience the best of Kashmir and Ladakh in one comprehensive tour. Visit Srinagar, Gulmarg, Pahalgam, Kargil, Leh, Nubra Valley & Pangong Lake.",
            "image": ld8,
            "offers": {
              "@type": "Offer",
              "price": "36999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-01-01",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "TravelAgency",
              "name": "Travel Wiki",
              "url": "https://travelwiki.org.in",
              "telephone": "+91 8899971960"
            },
            "duration": "P9DT10N",
            "touristType": ["Cultural Explorers", "Nature Lovers", "Adventure Seekers", "Photography Enthusiasts"]
          })}
        </script>
      </SEO>
      
      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ld8})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Kashmir and Ladakh Combo Package with Kargil Stay
              </h1>
              <p className="text-xl">9 Nights / 10 Days</p>
            </div>
          </div>
        </div>

        {/* Package Details */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Embark on a mesmerising journey to Kashmir, Ladakh and Kargil through the breathtaking landscapes in our exclusive combo package. 
                  Begin your adventure through the pristine lakes and lush green meadows of the serene Kashmir Valley. 
                  The adventure continues as you step into the rugged terrains of Kar0gil. As you enter the majestic Ladakh, 
                  ancient monasteries and stark mountains await you. On the trip, you will explore the captivating beauty of the Pangong Lake 
                  and immerse yourself in the vibrant local culture of the place.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This comprehensive itinerary is a perfect blend of natural wonders and cultural richness. 
                  This 9 nights and 10 days Kashmir, Kargil and Ladakh tour package lets you experience nature's beauty and take you to a never-seen world. 
                  This package promises to give you one of the most memorable memories and enchanting experiences.
                </p>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 1: Arrival in Srinagar</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Height:</strong> 1,585m
                    </p>
                    <p className="text-gray-700">
                      Arrive at the Srinagar airport and head to your hotel or houseboat. Complete your check-in formalities 
                      and then embark on the sightseeing tour to the Mughal Gardens. Explore the timeless gardens and immerse yourself 
                      in the serene charm of the picturesque surroundings of Srinagar. You can even go for a Shikara ride at the iconic Dal Lake 
                      and explore the beauty of nature. Then you settle for an overnight stay at the hotel or houseboat.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 2: Excursion to Gulmarg</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 51 km / 1 hour 20 minutes | <strong>Height:</strong> 2,650m
                    </p>
                    <p className="text-gray-700">
                      Start your morning with a delicious breakfast and then you head for an excursion to Gulmarg. 
                      The breathtaking landscapes and pristine beauty of Gulmarg are a treat to your eyes and soul. 
                      It takes around an hour drive to reach Gulmarg from Srinagar. Explore the scenic Strawberry Valley. 
                      You will enjoy the snow-capped wonders of Apharwat Peak. You may also indulge yourself in winter sports 
                      or play golf in the panoramic views of the valley. It is one of the world's highest-altitude golf courses. 
                      Hop on a cable car for a sky-high ride. If you are visiting in the winter season, enjoy a sleigh ride 
                      through the snow-covered slopes. Return to Srinagar in the evening and relax at your hotel after having dinner.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 3: Excursion to Pahalgam</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 89.2 km / 2 hours 15 minutes | <strong>Height:</strong> 2,740m
                    </p>
                    <p className="text-gray-700">
                      The third day of your Kashmir and Ladakh trip begins with a hot morning breakfast in Srinagar. 
                      Then you will start your excursion to Pahalgam from Srinagar. It takes around two and a half hours of drive to reach the destination. 
                      Pahalgam is surrounded by verdant valleys and meandering rivers. It is a paradise for nature lovers. 
                      You may visit the Betaab Valley which is named after the Bollywood movie 'Betaab'. Betaab Valley is a stunning expanse 
                      by the Lidder River, offering panoramic views of the Himalayas. It boasts a picture-perfect landscape with a carpet of emerald green 
                      coupled with a free-flowing river and snow-clad mountains in the background. The surreal beauty of Aru Valley with its picturesque vistas, 
                      majestic snow-covered Himalayan peaks and mountain river flowing through it makes it a must-visit place. 
                      Explore the ancient Mamleshwar Temple and relish the tranquillity of the Lidder River. Later you head back to Srinagar.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 4: Srinagar to Kargil</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 201.5 km / 5 hours 30 minutes | <strong>Height:</strong> 2,676m
                    </p>
                    <p className="text-gray-700">
                      Day 4 of your trip starts with morning breakfast and then you checkout from the hotel. Today you will be heading towards Kargil. 
                      It will take around 5-6 hours to reach the destination. The route towards Kargil is scenic and you can enjoy taking photographs 
                      at various photo stops. On reaching Kargil, you may visit the historic location where the Kargil War took place. 
                      Also, visit the Kargil War Museum at Drass which is constructed in memory of our brave Indian soldiers who lost their lives 
                      during the Kargil War. Upon arriving at your hotel in Kargil, complete your check-in process and rest for the day. 
                      Enjoy dinner and a night stay at the hotel in Kargil.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 5: Kargil to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 216.6 km / 4 hours 41 minutes | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700">
                      Begin the day with a delicious breakfast and prepare for checkout from the hotel. Today you will head towards Leh. 
                      To reach Leh from Kargil it takes around 5 hours of drive. On the way, you will cross many high-altitude passes 
                      where you can enjoy a stopover and witness the scenic beauty. These high-altitude passes offer breathtaking vistas 
                      and thrilling adventures, serving as gateways to the region's stunning landscapes. Taking pictures is another must on this route. 
                      Once you reach Leh, check in to the hotel. Take the hot delicious meal and mark the end of the day with a good sleep.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 6: Leh to Nubra Valley</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 160.3 km / 4 hours 43 minutes | <strong>Height:</strong> 10,000m
                    </p>
                    <p className="text-gray-700">
                      Mark the start of the day with a scrumptious breakfast and then you embark on a journey from Leh to Nubra Valley. 
                      It takes 5 hours of drive from Leh to reach Nubra. During the drive, you will come across the world's highest motorable pass, 
                      Khardung La where you can absorb the panoramic views. Nubra Valley is a surreal desert landscape nestled in the Himalayas. 
                      On reaching the Nubra Valley, you can explore the Diskit Monastery and the iconic Maitreya Buddha. 
                      The Monastery is famed for its serene atmosphere and houses the iconic 32-meter-tall Maitreya Buddha statue. 
                      It offers a spiritual haven and panoramic views that leave a lasting impression on visitors. 
                      You can indulge yourself in a unique Bactrian camel ride amidst the sand dunes of Hunder. 
                      As the day ends, retire in a comfortable camp in Nubra, immersing yourself in the tranquillity of the surroundings.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 7: Nubra to Pangong Lake</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 140 km / 6 hours | <strong>Height:</strong> 4,250m
                    </p>
                    <p className="text-gray-700">
                      After a mesmerizing night in the Nubra camp, you have your delicious breakfast in the morning and prepare yourself 
                      for heading towards the Pangong Lake. It takes around 8 hours of drive to reach Pangong from Nubra. 
                      The route is quite scenic and you will enjoy capturing the incredible view in your camera. 
                      It is one of the most adventurous trips you will ever have. On reaching Pangong, immerse yourself in the beauty of Pangong Lake. 
                      It is one of the most scenic high-altitude lakes in Leh Ladakh. This lake is nature lovers paradise. 
                      The blue water of the lake has beautiful and colour-changing qualities, shifting hues from mesmerizing blues to vibrant shades. 
                      The lake boasts tranquil and picturesque landscapes in the backdrop. After relishing the beauty of the lake, 
                      check in to the hotel, have your dinner and take rest.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 8: Pangong to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 222.9 km / 5 hours 22 minutes | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700">
                      Begin your morning with a beautiful view of Pangong Lake. Take your breakfast with the majestic scenic view. 
                      After your breakfast, you prepare yourself for a road journey towards Leh. The distance between Pangong to Leh is around 220 km. 
                      It will take around 6 hours drive to reach Leh. The route is adventurous and you will pass through the Chang La Pass, 
                      one of the world's highest motorable passes. Take a moment there and enjoy the panoramic view of the surrounding mountains. 
                      On reaching Leh, check in to the hotel and take some rest. You can stroll down the local market at night and indulge in some 
                      local shopping of Tibetan handicrafts, Pashmina shawls, and unique trinkets. Later you head back to your hotel and have your 
                      dinner followed by sound sleep.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 9: Sightseeing in Leh</h3>
                    <p className="text-gray-700">
                      The second last day of your trip begins with a relaxed morning and breakfast. Today you will be visiting Thiksey Monastery and Sindhu Darshan. 
                      Thiksey Monastery is at a distance of 20 minutes from Leh. This monastery is a spiritual gem representing the stunning Tibetan architecture. 
                      Perched on a hill, you can explore the serene ambience and stunning view of the Himalayan landscape. 
                      After the monastery, you can head to Sindhu Ghat which is located near it. It is one of the most peaceful banks. 
                      Indus River flows throw it which is considered sacred. The best time to visit this Ghat is during the Sindhu Darshan festival. 
                      It is one of the best experiences of the culture and beauty of the place. After spending time at the Sindhu Ghat, 
                      you head back to Leh. You can stroll down the streets of the city spending time among the locals. 
                      Later you head back to the hotel, have dinner and sleep.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 10: Departure from Leh</h3>
                    <p className="text-gray-700">
                      This is the last day of your trip. After having your breakfast, check out from the hotel. 
                      You proceed to the Leh Airport for departure. Hope this was one of the most mesmerizing journeys of your life.
                    </p>
                  </div>
                </div>
              </div>

              {/* Package Inclusions */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Inclusions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Accommodation in Base Category Rooms</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Stay on MAP Basis (Dinner and Breakfast)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>01 Non AC Cab for arrival/departure & sightseeing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Assistance at airport while arriving and departing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Porterages at hotel and airport</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>All applicable luxury/road taxes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Innerline Permit</span>
                  </div>
                </div>
              </div>

              {/* Package Exclusions */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Exclusions</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Airfares and train fare</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Any monastery entrance fees, river rafting, or any joy ride</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Medical expenses (apart from first aid) and insurance of any kind</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Car is meant for sightseeing as per the itinerary, not on a disposal basis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Expenses for tips, laundry, liquors, wines, mineral water, telephone charges, oxygen cylinders, camera fees</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span>Any cost arising due to natural calamity or road blockage must be paid directly by the guest</span>
                  </div>
                </div>
              </div>

              {/* Hotel Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Accommodation Details</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Srinagar (3 Nights)</h3>
                    <p className="text-gray-700">Deluxe hotels and premium houseboats on Dal Lake</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Kargil (1 Night)</h3>
                    <p className="text-gray-700">Royal Gashu, Kargil Heights, Royal Kargil, Chhutuk Heights</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Leh (3 Nights Total)</h3>
                    <p className="text-gray-700">Naro, Kidar, Zimskhang Villa, The Ladakh</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Nubra Valley (1 Night)</h3>
                    <p className="text-gray-700">Visalta Camps, De Nubra Camps, Paradise North Camps / Apple Camps</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Pangong Lake (1 Night)</h3>
                    <p className="text-gray-700">Himalayan Innova Cottage, Royal Foster Cottage, Native Cottage, Ladakh Summer Camps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹36,999
                  </div>
                  <div className="text-gray-500 line-through text-lg">₹46,249</div>
                  <div className="text-red-600 font-semibold">20% OFF</div>
                  <div className="text-gray-600">Per person</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Updated on: 07 February 2025
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">9N / 10D</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-semibold">May - Oct</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-semibold">2-15 People</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starting Point:</span>
                    <span className="font-semibold">Srinagar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ending Point:</span>
                    <span className="font-semibold">Leh</span>
                  </div>
                </div>
                
                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Kashmir%20and%20Ladakh%20Combo%20Package%20with%20Kargil%20Stay%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold mb-4 block text-center">
                  Book Now
                </a>
                
                <div className="text-center mb-4">
                  <a href="tel:+918899971960" className="text-blue-600 hover:underline">
                    📞 Call: +91 8899971960
                  </a>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Kashmir-Ladakh Combo Highlights</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Complete Kashmir & Ladakh experience</li>
                    <li>• Srinagar Dal Lake & Mughal Gardens</li>
                    <li>• Gulmarg cable car & skiing</li>
                    <li>• Pahalgam Betaab & Aru Valley</li>
                    <li>• Kargil War Memorial & Museum</li>
                    <li>• Historic Drass battlefield visit</li>
                    <li>• Khardung La - World's highest motorable road</li>
                    <li>• Nubra Valley Bactrian camel safari</li>
                    <li>• Diskit Monastery 32m Maitreya Buddha</li>
                    <li>• Pangong Lake overnight camping</li>
                    <li>• Chang La Pass - 2nd highest motorable road</li>
                    <li>• Thiksey Monastery & Sindhu Ghat</li>
                    <li>• Local market shopping in Leh</li>
                    <li>• Perfect blend of culture & adventure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KashmirAndLadakhComboPackageWithKargilStay;