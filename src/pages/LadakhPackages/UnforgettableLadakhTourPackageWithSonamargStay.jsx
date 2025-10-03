import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
const ld6 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514667/travelwiki/assets/Ladakh/ld6.jpg";

const UnforgettableLadakhTourPackageWithSonamargStay = () => {
  return (
    <>
      <SEO 
        pageType="ladakh"
        customTitle="Unforgettable Ladakh Tour Package with Sonamarg Stay - 11N/12D Starting ₹47,999"
        customDescription="Experience the ultimate Kashmir-Ladakh journey with our comprehensive 11 nights 12 days tour package. Includes Srinagar, Sonamarg, Kargil, Leh, Nubra Valley, Pangong Lake starting from ₹47,999 per person."
        customKeywords={["Kashmir Ladakh combo tour", "Sonamarg Ladakh package", "Srinagar to Manali tour", "comprehensive Himalayan tour", "Kashmir Ladakh holiday"]}
        customImage={ld6}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Unforgettable Ladakh Tour Package with Sonamarg Stay",
            "description": "Experience the ultimate Kashmir-Ladakh journey with our comprehensive 11 nights 12 days tour package. Includes Srinagar, Sonamarg, Kargil, Leh, Nubra Valley, Pangong Lake.",
            "image": ld6,
            "offers": {
              "@type": "Offer",
              "price": "47999",
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
            "duration": "P11DT12N",
            "touristType": ["Adventure Seekers", "Cultural Explorers", "Nature Lovers", "Photography Enthusiasts"]
          })}
        </script>
      </SEO>
      
      <div className="min-h-screen  pt-24">
        {/* Hero Section */}
        <div className="relative text-white h-[50vh] overflow-hidden bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-700">
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Unforgettable Ladakh Tour Package with Sonamarg Stay
              </h1>
              <p className="text-xl" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>11 Nights / 12 Days</p>
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
                  Embark on an exhilarating journey through the heart of the Himalayas with this extensive itinerary. 
                  Begin in the enchanting city of Srinagar, known for its serene Dal Lake and Mughal gardens, 
                  before traversing through Sonamarg's meadows and streams. From there, head to historic Kargil, 
                  steeped in tales of valour and history.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The route then leads to Leh, Ladakh's cultural hub, offering monasteries and a glimpse of local life. 
                  Explore the dramatic landscapes of Nubra Valley and the surreal beauty of Pangong Lake. 
                  Traverse through the majestic vistas of Jispa or Sarchu, nestled amid the towering mountains, 
                  before concluding the journey in Manali, known for its lush valleys and adventurous escapades.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This comprehensive 11 nights and 12 days Ladakh itinerary with Sonamarg stay weaves together diverse landscapes, 
                  rich cultural experiences, and thrilling adventures, promising an unforgettable odyssey through some of the most 
                  spellbinding regions of Northern India.
                </p>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Itinerary</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 1: Arrival in Srinagar</h3>
                    <p className="text-gray-700">
                      Upon your arrival in Srinagar, our representative will receive you with a warm welcome. 
                      You will then be travelling to your hotel or houseboat. Once you reach there, complete the check-in procedure, 
                      take some rest and begin your sightseeing tour. Enjoy a delightful walk at Boulevard Road surrounded by the perfect 
                      backdrop of majestic Zabarwan Mountain Ranges. Next, visit the famous Mughal Gardens and enjoy the beauty of its 
                      meticulously manicured terraces and serene waterways. Get amazed by the intricate architectural marvels and tranquil 
                      ambience that define these historical gardens. Later in the evening, take a relaxing Shikara ride at Dal Lake, 
                      gliding past floating markets and vibrant houseboats. Boating with your loved one in the lake covered by a carpet 
                      of lotus flowers and surrounded by the snow-covered mountains is an experience worth cherishing for a lifetime. 
                      Later, end your day by returning to the hotel or houseboat for dinner and a night stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 2: Srinagar to Sonamarg</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 85 km / 2 hours 30 minutes | <strong>Height:</strong> 2,730m
                    </p>
                    <p className="text-gray-700">
                      On Day 2, you will be travelling from Srinagar to Sonamarg after having a wholesome breakfast. 
                      Rightfully called the 'Meadow of Gold', Sonamarg is a mesmerizing hill station surrounded by the great Himalayan glaciers, 
                      including the Kolhoi Glacier and Machoi Glacier. It is a haven for travellers looking to embrace the majestic glaciers, 
                      snow-laden fields, spectacular blue sky, and serene lakes that cast a subtle spell on everyone who visits. 
                      On arrival, check in to your hotel and begin your sightseeing tour by visiting the Thajiwas Glacier, 
                      which is a major local attraction during summer. You can hire a pony to reach up to the glacier that is covered with snow. 
                      Next, reach the Vishansar Lake and explore a trekking expedition if you are a fan of adventure activities. 
                      The best thing about this lake is that during winter, the lake is completely frozen and in summer it is surrounded by lush greenery. 
                      End your day by visiting the Bollywood favourite, Baltal Valley. Spend quality moments with your loved ones and enjoy 
                      the scenic beauty around you. Head back to your hotel for dinner and a night stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 3: Sonamarg to Kargil</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 122.7 km / 3 hours | <strong>Height:</strong> 2,676m
                    </p>
                    <p className="text-gray-700">
                      Day 3 of your trip starts with morning breakfast and then you checkout from the hotel. 
                      Today you will be heading towards Kargil. So, pack your bags and get ready for your next road trip adventure. 
                      Enjoy eye-pleasing views on the way and gear up for the journey ahead. En route, you can visit the historic location 
                      where the Kargil War took place. Also, visit the Kargil War Museum at Drass which is constructed in memory of our brave 
                      Indian soldiers who lost their lives during the Kargil War. Reach your hotel in Kargil, complete your check-in process 
                      and rest for the day. Enjoy a steaming hot dinner and retire for the night.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 4: Kargil to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 216.6 km / 4 hours 41 minutes | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700">
                      Begin your day with a delicious breakfast and get ready to leave for Leh from Kargil. 
                      Make the most of your journey by visiting Lamayuru Monastery. It is a Tibetan Buddhist monastery situated at an altitude 
                      of 3510 meters on the Leh-Srinagar highway. It is one of the oldest and largest monasteries in Ladakh. 
                      It boasts outstanding architecture and houses a great collection of thangkas, paintings, scriptures, murals, and statues of Buddha. 
                      Once you reach your hotel in Leh, complete your check-in process for a night stay at the hotel.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 5: Sightseeing in Leh</h3>
                    <p className="text-gray-700">
                      Begin your morning with a scrumptious breakfast at the hotel and then head out for a sightseeing tour of Leh. 
                      The day is dedicated to ancient monastery visits and Sindhu Ghat Darshan. Ladakh boasts a rich cultural heritage 
                      steeped in centuries-old traditions and age-old monasteries. Explore the Buddhist traditions and history of Ladakh 
                      by immersing yourself in the serenity and spirituality of popular monasteries like Thiksey Monastery, Hemis Monastery, 
                      and Likir Monastery. Later, head to Sindhu Ghat, a calm and mesmerizing riverbank on the banks of the Indus River. 
                      Offer prayers and immerse yourself in a calm and peaceful environment while admiring the beauty of nature. 
                      If you have some more time in hand, you may also visit the Shanti Stupa and Leh Palace to get a peek into the history of Ladakh. 
                      In the evening, return to your hotel for a delicious dinner meal and an overnight stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 6: Leh to Nubra Valley via Khardung La Pass</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 160.3 km / 4 hours 43 minutes | <strong>Height:</strong> 10,000m
                    </p>
                    <p className="text-gray-700">
                      Have an early morning breakfast at the hotel, and get ready to embark on another adventurous destination, Nubra Valley. 
                      While travelling to Nubra Valley, you will cross the highest motorable road in the world, Khardung La Pass. 
                      It is an experience to be here at this height and gaze at the beautiful panorama around. 
                      Continue your drive towards Nubra and stop over at Diskit Monastery. Built in the 14th century, 
                      this monastery is believed to be the largest and oldest monastery in the region. You will be amazed to see 
                      the 106 feet Maitreya Buddha statue which is located just below the monastery. On reaching Nubra Valley, 
                      head to your camp and get some rest. After some time, head out to explore the village life and local culture at Hunder village. 
                      Meet and interact with locals to get familiar with the local life here. Indulge in adventure activities like 
                      two-humped Bactrian Camel ride and quad biking. Head back to Nubra Valley and enjoy an overnight stay at the camp.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 7: Excursion to Turtuk Village</h3>
                    <p className="text-gray-700">
                      Wake up fresh and savour a healthy breakfast at the camp. Today you will go on an excursion to Turtuk village. 
                      It is the last outpost in India after which the Pakistan-controlled Gilgit-Baltistan area commences. 
                      Turtuk is a lesser-explored destination in Ladakh as it has recently opened for tourists. 
                      It boasts picturesque beauty nestled along the Shyok River. A visit to the village will let you experience the Balti culture 
                      and learn their way of life. You can admire the stunning panoramic vistas of this village and visit its ancient monasteries. 
                      You will find lots of apricot trees loaded around the entire village so enjoy having them while you are here. 
                      After a full day of exploration, drive back to the camp at Nubra for a night stay and indulge in a lip-smacking dinner.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 8: Nubra Valley to Pangong via Shyok River / Wari La</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 140 km / 6 hours | <strong>Height:</strong> 4,250m
                    </p>
                    <p className="text-gray-700">
                      Have early morning breakfast at the camp in Nubra Valley and prepare to take a road trip to Pangong via Shyok River or Wari La. 
                      Both the routes are beautiful and you may take either of them depending on your choice. 
                      Reach Pangong Lake by afternoon and check in to your camp. Enjoy your day at Pangong Lake. 
                      The beauty of this lake is such that numerous Bollywood movies have been shot around this lake. 
                      It is also one of the most beautiful and scenic high-altitude saltwater lakes. India only controls one-third of this lake 
                      and the remaining two-thirds lies under the Chinese province. Go for a stroll around Pangong Lake in the evening 
                      and then head back to your camp for an overnight stay.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 9: Pangong to Leh</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 222.9 km / 5 hours 22 minutes | <strong>Height:</strong> 3,500m
                    </p>
                    <p className="text-gray-700">
                      Wake up to surreal views of the Pangong Lake. Have a healthy breakfast and prepare to drive from Pangong to Leh. 
                      On the way, you will cross Chang La Pass at an elevation of 5,360 meters. This high mountain pass is the second-highest 
                      motorable road in the world. You will drive past several Buddha stupas and Shey Palace and Monastery. 
                      The most fascinating feature of this monastery is that it houses a colossal statue of Shakyamuni Buddha made up of copper 
                      with gilded gold. It also offers panoramic views of the surrounding snowcapped mountains of Stok. 
                      Also, make a pit stop at the Rancho School from the famous 3 Idiots movie. On arrival at Leh, 
                      complete your check-in formalities and spend the evening at leisure. Overnight stay at the hotel in Leh.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 10: Leh to Sarchu / Jispa</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 259 km (7-8 hours) / 334 km (7 hours 30 minutes)
                    </p>
                    <p className="text-gray-700">
                      After breakfast, check out from the hotel in Leh and drive to Sarchu/Jispa early morning. 
                      Set at an altitude of 4,290 metres, Sarchu offers panoramic views and scenic picturesque landscapes. 
                      You will enjoy the calm and serenity of this place. It is also a heaven for adventure seekers and camping enthusiasts. 
                      Jispa is an off-the-beaten-path mountain locale enveloped by the majestic snow-clad Himalayas, 
                      adorned with Buddhist stupas, and dotted with glacial lakes. Its picturesque landscapes render Jispa a perfect spot 
                      for camping and trekking adventures. On arrival, check-in at the hotel. Overnight stay at Sarchu/Jispa.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-lime-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 11: Sarchu / Jispa to Manali</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Distance:</strong> 221 km (8 hours) / 92.6 km (2 hours 34 minutes) | <strong>Height:</strong> 2,050m
                    </p>
                    <p className="text-gray-700">
                      Begin the day with a delicious breakfast at the hotel and prepare for another road trip. Today you will drive to Manali. 
                      En route, you will pass by the Rohtang Pass (3978 m). It is a haven for those who cherish nature and seek adventure. 
                      It offers stunning views of the surrounding landscapes that will surely take your breath away. 
                      En route, you may stop over at various sightseeing destinations. On arrival, check in at the hotel in Manali. 
                      Overnight stay in the hotel.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-500 pl-4">
                    <h3 className="font-semibold text-lg">Day 12: Departure from Manali</h3>
                    <p className="text-gray-700">
                      Your Ladakh tour package with Sonamarg stay has come to an end. You will be heading to the Manali airport 
                      for your flight back home and all we hope is that you had a great time and made some wonderful memories on your Ladakh tour.
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
                    <h3 className="font-semibold text-lg mb-2">Srinagar</h3>
                    <p className="text-gray-700">Deluxe hotels and premium houseboats on Dal Lake</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Sonamarg</h3>
                    <p className="text-gray-700">Mountain resorts and comfortable hotels</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Kargil</h3>
                    <p className="text-gray-700">Royal Gashu, Kargil Heights, Royal Kargil, Chhutuk Heights</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Leh</h3>
                    <p className="text-gray-700">Naro, Kidar, Zimskhang Villa, The Ladakh</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Nubra Valley</h3>
                    <p className="text-gray-700">Visalta Camps, De Nubra Camps, Paradise North Camps / Apple Camps</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Pangong Lake</h3>
                    <p className="text-gray-700">Himalayan Innova Cottage, Royal Foster Cottage, Native Cottage, Ladakh Summer Camps</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Sarchu / Jispa</h3>
                    <p className="text-gray-700">Mountain camps and guesthouses</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">Manali</h3>
                    <p className="text-gray-700">Hill station hotels and resorts with valley views</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹47,999
                  </div>
                  <div className="text-gray-500 line-through text-lg">₹59,999</div>
                  <div className="text-red-600 font-semibold">20% OFF</div>
                  <div className="text-gray-600">Per person</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Updated on: 07 February 2025
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">11N / 12D</span>
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
                    <span className="font-semibold">Manali</span>
                  </div>
                </div>
                
                <a href="https://wa.me/918899971960?text=Hi%2C%20I%20am%20interested%20in%20the%20Unforgettable%20Ladakh%20Tour%20Package%20with%20Sonamarg%20Stay%20from%20Travel%20Wiki." target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold mb-4 block text-center">
                  Book Now
                </a>
                
                <div className="text-center mb-4">
                  <a href="tel:+918899971960" className="text-blue-600 hover:underline">
                    📞 Call: +91 8899971960
                  </a>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Comprehensive Journey Highlights</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Complete Kashmir-Ladakh-Himachal circuit</li>
                    <li>• Srinagar Dal Lake & Mughal Gardens</li>
                    <li>• Sonamarg 'Meadow of Gold' with glaciers</li>
                    <li>• Thajiwas Glacier pony ride experience</li>
                    <li>• Kargil War Memorial & historic sites</li>
                    <li>• Lamayuru Monastery - ancient Buddhist site</li>
                    <li>• Multiple Leh monasteries exploration</li>
                    <li>• Khardung La Pass - World's highest motorable road</li>
                    <li>• Nubra Valley Bactrian camel safari</li>
                    <li>• Turtuk Village - Last Indian outpost</li>
                    <li>• Pangong Lake overnight camping</li>
                    <li>• Chang La Pass - 2nd highest motorable road</li>
                    <li>• Rohtang Pass adventure crossing</li>
                    <li>• 8 different destinations in one journey</li>
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

export default UnforgettableLadakhTourPackageWithSonamargStay;