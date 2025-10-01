import React from "react";
import FaqItem from "./FaqItem";

const faqData = [
  {
    question: "Q: How do I plan my Kashmir trip?",
    answer:
      "Kashmir has well-laid roadway connectivity with the rest of the country. The state also has regular air and railway connectivity with the other parts of India. You can travel to Jammu Tawi Railway Station in order to reach Kashmir by train. Srinagar Airport has flights at regular intervals from almost all major Indian cities.",
  },
  {
    question: "Q: What is the best time to take the Kashmir tour package?",
    answer:
      "Summer (April to June) is known to be the best time to book Kashmir tour packages.",
  },
  {
    question: "Q: How much does the Kashmir travel package cost?",
    answer:
      "An ideal Kashmir tour package would cost you somewhere between INR10,000 to INR15,000. However, we offer some of the most budget-friendly Kashmir tour packages that can also be customised according to your needs and convenience.",
  },
  {
    question: "Q: What should be the ideal duration of any Kashmir tour package?",
    answer:
      "Kashmir is cosseted with the untouched beauty of Mother Nature. You would require at least 5 to 7 days witnessing and enjoying the magical beauty of this paradise on earth.",
  },
  {
    question: "Q: How can I plan a 5 days Kashmir tour itinerary?",
    answer: `Day 01: Arrival in Srinagar
Day 02: Srinagar to Sonamarg | Sonamarg to Srinagar
Day 03: Srinagar to Pahalgam
Day 04: Sightseeing in Pahalgam
Day 05: Pahalgam to Gulmarg
Day 06: Gulmarg to Srinagar | Departure from Srinagar`,
  },
  {
    question:
     " Q: What are the most popular destinations covered in most of the Kashmir tour packages?",
    answer:
      "The entire Kashmir region is dotted with picturesque destinations. However, most of the Kashmir holiday packages cover – Srinagar (Heaven on Earth), Sonamarg (Land of Gold), Gulmarg (Meadow of Flowers), Kupwara (Pleasure of Kashmir), and Kathua (The Treasure Land).",
  },
  {
    question: "Q: Is it safe for families to go for a Kashmir tour?",
    answer:
      "Once you land on this piece of heaven, the first thing you would experience is the heart warming smiles of the Kashmiris! The locals here are extremely friendly, helpful, and treat their guests with utmost love and affection. However, you may also witness army personnel often while moving around the cities and towns.",
  },
  {
    question: "Q: How about the Kashmir romantic holiday packages?",
    answer:
      "Kashmir has been rated as one of the most coveted romantic holiday destinations in the world. And we must tell you, Kashmir Honeymoon Packages are the most sought after holiday packages.",
  },
  {
    question: "Q: How can I plan a Kashmir tour myself?",
    answer:
      "To plan your Kashmir tour, you need to first decide how you want to reach Kashmir – air, train, or by road? Based on your choice, you can book the tickets. Post this; you must decide the number of days you want to dedicate to your Kashmir holiday package. We would recommend considering at least 5 days.",
  },
  {
    question: "Q: What are the best Kashmir travel packages?",
    answer: `Kashmir travel packages are available for almost all celebrations and group size. Here is a list of our 10 best and hottest Kashmir holiday packages:
a. Magical Kashmir Tour Package (4 Nights / 5 Days)
b. Kashmir Unconnected Tour (5 Nights / 6 Days)
c. Kashmir offbeat Tour (5 Nights / 6 Days)
d. Kashmir Marvellous Tour (6 Nights / 7 Days)
e. Kashmir Magnificent Tour (6 Nights / 7 Days)
f. Kashmir Magical Tour (6 Nights / 7 Days)
g. Glimpse of Kashmir (3 Nights / 4 Days)
h. Exotic Kashmir Trip (4 Nights / 5 Days)
i. Celestial Kashmir Trip (3 Nights / 4 Days)
j. Glimpse of Kashmir Tour (3 Nights / 4 Days)`,
  },
  {
    question: "Q: Do I need a permit for the Kashmir tour?",
    answer:
      "Till you are the Jammu and Kashmir valley, you won’t require any special permission. However, if you plan to visit Leh-Ladakh, you have to apply for Inner Line Permit to visit some of the sensitive destinations.",
  },
  {
    question: "Q: Will I find snow on my Kashmir holiday package in December?",
    answer:
      "If you book your Kashmir holidays during the winter (December to March), you can experience snowfall in the region.",
  },
  {
    question: "Q: How can I make the best budget-friendly Kashmir tour plan?",
    answer:
      "Since Kashmir is among the most sought-after tourist destinations in the world, you have to consider a lot of factors to plan budget-friendly Kashmir tour packages. First, try to plan your holiday during the offbeat season to avail the best offers and discounts on hotel booking, flights, cabs, and other services. You should also be flexible enough to alter dates in case you don’t find tickets or if the prices go up. Also, while picking up destinations for your Kashmir tour, you should select adjacent destinations so that you can save time while moving from one place to another.",
  },
  {
    question: "Q: Are houseboats covered in all Kashmir tour packages?",
    answer:
      "Most of the Kashmir tours or tour packages cover the houseboats. In fact, any tour packages that include Srinagar tour offer amazing shikara or houseboat experiences.",
  },
  {
    question: "Q: Can I stay in 5-star hotels during my Kashmir tour?",
    answer:
      "Yes, you can. Kashmir offers a mix of hotels ranging from budget-friendly to 5-star ones.",
  },
];

const FaqList = () => {
  return (
    <section 
      className="bg-yellow-100 px-4 md:px-16 py-12"
      id="kashmir-tourism-faq"
      aria-labelledby="faq-heading"
      role="region"
    >
      <header className="text-center mb-12">
        <h3 
          id="faq-heading"
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
        >
          Kashmir Tourism FAQ - Frequently Asked Questions
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Get answers to the most common questions about Kashmir tour packages, travel planning, 
          best time to visit, costs, destinations, and more. Plan your perfect Kashmir trip with expert guidance.
        </p>
      </header>
      
      <div 
        className="max-w-4xl mx-auto"
        role="list"
        aria-label="Kashmir tourism frequently asked questions"
      >
        {faqData.map((item, index) => (
          <div key={index} role="listitem">
            <FaqItem question={item.question} answer={item.answer} />
          </div>
        ))}
      </div>
      
      {/* SEO-friendly additional content */}
      <div className="mt-12 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Quick Kashmir Tourism Guide
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-blue-900 mb-3">🗓️ Best Time to Visit Kashmir</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Summer: April-June (Pleasant weather)</li>
                <li>• Monsoon: July-August (Ladakh season)</li>
                <li>• Autumn: September-November (Chinar colors)</li>
                <li>• Winter: December-March (Snow activities)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-3">💰 Kashmir Tour Package Costs</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Budget packages: ₹8,000-12,000</li>
                <li>• Standard packages: ₹12,000-20,000</li>
                <li>• Premium packages: ₹20,000-35,000</li>
                <li>• Luxury packages: ₹35,000+</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 mb-3">🏞️ Must-Visit Kashmir Places</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Srinagar: Dal Lake, Mughal Gardens</li>
                <li>• Gulmarg: Gondola, Skiing</li>
                <li>• Pahalgam: Betaab Valley, Aru Valley</li>
                <li>• Sonamarg: Thajiwas Glacier</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqList;
