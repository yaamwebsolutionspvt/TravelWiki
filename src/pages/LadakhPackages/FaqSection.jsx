import React, { useState } from "react";

const faqs = [
  {
    question: "How much will a Ladakh trip cost?",
    answer:
      "The cost of a Ladakh trip depends mostly on your travel style. If you are planning for a budget plan, you can probably plan a Ladakh trip within INR 20,000-30,000. This budget would cover basic accommodation, food, and transportation. However, if you want to explore more while enjoying all the luxury and comfort, a Ladakh trip may cost you INR 50,000 or above. Also, planning the trip off-season will cost you less than the peak holiday season.",
  },
  {
    question: "Which is the best month to go to Ladakh?",
    answer:
      "Well, this would highly depend on the type of travellers. If you are planning a leisure Ladakh trip, you should plan your trip between the months of May and October. This is the time when the weather remains very pleasant with moderate temperatures and most of the roads being open to visitors. Post-October, as snowfall starts, some of the roads remain closed limiting access to remote places in Ladakh. However, if you are an adventure lover, you must plan a Ladakh trip between November and February.",
  },
  {
    question: "Are 4 days enough for Ladakh?",
    answer:
      "For places like Leh-Ladakh, it would be unfair to plan a Ladakh trip based on the number of days. However, since the Leh-Ladakh circuit requires acclimatization, a 4-day Ladakh trip might not be a good idea. You must keep in mind that you should take at least a day to get acclimatized to Ladakh’s climate or the high altitudes. Hence, you may have to add additional days to your itinerary if you have 4-day trip in mind!",
  },
  {
    question: "How to plan a 7-day trip to Ladakh?",
    answer: `Here is a ready-to-start 7-day trip itinerary for Ladakh:
Day 1: Arrive in Leh and rest for acclimatization.
Day 2: Explore Leh (Monasteries, Magnetic Hill).
Day 3: Leh to Nubra Valley (via Khardung La).
Day 4: Nubra to Pangong Lake.
Day 5: Pangong to Leh.
Day 6: Visit Tso Moriri or local spots.
Day 7: Depart from Leh.
`,
  },
  {
    question: "How to travel to Ladakh on a low budget?",
    answer: `If you are planning for a Ladakh trip on a low budget, you must consider the following:

        Transportation: public buses and shared taxis
        Accommodation: guest houses, homestays, and shared hostels
        Food: local eateries
        Travel Season: off-season (April to October)`,
  },
  {
    question: "Can we go to Ladakh in a small car?",
    answer:
      "Yes, you can plan a Ladakh trip in a small car. However, you should not ignore the fact that since this region comprises mostly uneven and coarse roads, or stretches that are steep and require vehicles with high-engine power and maximum ground clearance, you should double-check with your vehicle. Usually, SUVs are highly recommended for a Ladakh trip.",
  },
  {
    question: "What is the new rule for Ladakh trips?",
    answer:
      "Till new rules or policies are concerned, both domestic and foreign visitors should now contribute to the 'Ecology Contribution Fund'. This is applicable to all the locations they are planning to visit. This fee has been made mandatory since August 2022 and will be checked at Phyang and Kharu check post (towards Pangong Lake). Also, a total plastic ban has been enforced in this region. However, it would be advisable to check with the local authorities before planning a Ladakh trip. You can also get in touch with us while planning for a trip.",
  },
  {
    question: "Is food expensive in Leh-Ladakh??",
    answer:
      "Considering the geography and connectivity of Ladakh with the rest of the country, the cost of food can be called moderate in Ladakh. If you hit the local eateries, dhabas, or other smaller food joints, you can enjoy a meal with INR 200-300. However, if you wish to visit the small restaurants, a meal can cost you somewhere between INR 500-700. The price would go high depending on the place you choose.",
  },
  {
    question: "Can I swim in Pangong Lake?",
    answer:
      "Yes, you can enjoy swimming in Pangong Lake if you are an expert swimmer. Also, you must have a high level of fitness and endurance to sustain the extreme level of cold at such a great height. Remember, the lake’s temperatures are often near freezing, and hypothermia risks are high, and there won’t be any lifeguards to come in for rescue.",
  },
  {
    question: "How do I prepare for a Leh-Ladakh trip?",
    answer:
      "Packing for a Leh-Ladakh trip could be very easy if you follow the basic norms. Since the region is located at a soaring height, you must prepare by maintaining a basic level of body fitness. You should also be mentally prepared to remain calm irrespective of how tough the situation gets. In addition to this, you should also concentrate on packing according to the climate of Leh-Ladakh. You must carry basic medications and portable oxygen tanks. Also, please don’t forget to carry valid ID proofs accordingly.",
  },

  {
    question: "What is the difference between Leh and Ladakh?",
    answer:
      "Ladakh is a high-altitude region in North India. It has two districts, Leh and Kargil. Leh is the capital and the major city in the Ladakh region. Almost all the Leh-Ladakh trip originates from the Leh City.",
  },
  {
    question: "Is it safe to travel to Leh-Ladakh?",
    answer:
      "The Leh-Ladakh region can be considered extremely safe for visitors with all the necessary precautions and tour guidelines being followed. For example, if visitors follow proper acclimatization, they can easily avoid altitude sickness and travel safely within the region. Visitors taking their vehicles must be careful while on the roads to avoid any unwanted conditions.",
  },
  {
    question: "Which car is best for a Ladakh trip?",
    answer:
      "SUVs are considered best for any Ladakh trip. In our convoy, we prefer only high-performing SUVs like Mahindra Thar, Mahindra Xylo, Mahindra Bolero, Tata Safari, Toyota Fortuner, Toyota Innova, etc. However, if you travel during the summer, we may also offer hatchbacks and sedans.",
  },
  {
    question: "Which is the best time to visit Ladakh?",
    answer: `May/June to September (Summer): Ideal time for outdoor activities like hiking, camping, sightseeing, and rafting. Usually a festive season with pleasant temperatures.
November to February (Winter): Good time for winter lovers who yearn to enjoy snowfall. The temperature might drop down to -25 degrees. Some of the routes may shut down due to heavy snowfall.
July to August (Off-season): Though the temperature remains very pleasant, mild to heavy rains can offer challenges in manoeuvring across places. Good time for budget travellers.`,
  },

  {
    question: "Does Leh have snow?",
    answer:
      "If you visit Leh between November to February, you can experience snowfall in the city. But do keep in mind that snowfall is pretty common in the entire Leh-Ladakh region especially if you plan your trip during the winter season (November to February).",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-yellow-50 py-10 px-2 sm:px-8 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-5xl mx-auto divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <p className="font-semibold">Q. {faq.question}</p>
              <span className="text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">A. {faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
