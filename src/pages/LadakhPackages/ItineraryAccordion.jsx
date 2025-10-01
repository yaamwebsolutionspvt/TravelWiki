import React, { useState } from "react";
import OptimizedImage from "../../components/OptimizedImage";

const it1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514739/travelwiki/assets/Ladakh/itinaries/it1.png";
const it2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514741/travelwiki/assets/Ladakh/itinaries/it2.png";
const it3 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514743/travelwiki/assets/Ladakh/itinaries/it3.png";        
const it4 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514744/travelwiki/assets/Ladakh/itinaries/it4.png";
const it5 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514746/travelwiki/assets/Ladakh/itinaries/it5.png";
const it6 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514749/travelwiki/assets/Ladakh/itinaries/it6.png";

const itineraryData = [
  {
    title:
      "5 Nights and 6 Days Leh Ladakh Tour Package - Leh 2N | Nubra 1N | Pangong 1N | Leh 1N",
    image: it1, // Replace with actual image path
    days: [
      "Day 1: Arrival in Leh, Leh Bazaar tour & sightseeing",
      "Day 2: Day tour of Sham Valley",
      "Day 3: Trip from Leh to Nubra Valley via Khardungla Pass",
      "Day 4: Visit to Pangong Lake via Shayok River",
      "Day 5: Back to Leh from Pangong",
      "Day 6: Airport transfer & Departure from Leh",
    ],
  },
  {
    title:
      "6 Nights and 7 Days Best Leh Ladakh Packages - Leh 2N | Nubra 2N | Pangong 1N | Leh 2N",
    image: it2, // Replace with actual image path
    days: [
      "Day 1: Airport Pickup, Hotel Check-in & Bazaar Tour",
      "Day 2: Day tour of Sham Valley & Local Sightseeing",
      "Day 3: Road trip to Nubra Valley via Khardungla Pass",
      "Day 3: Road trip to Nubra Valley via Khardungla Pass.",
      "Day 4: Road trip from Nubra to Pangong Lake via Shayok River",
      "Day 5: Pangong to Leh & Hotel Stay",
      "Day 6: Sightseeing in Leh, visit to Tso Moriri, Leh Palace",
      "Day 7: Airport transfer & Departure from Leh.",
    ],
  },
  {
    title:
      "6 Nights and 7 Days Best Ladakh Trip Package with Turtuk - Leh 2N | Nubra 2N | Pangong 1N | Leh 1N",
    image: it3, // Replace with actual image path
    days: [
      "Day 1: Airport Pickup & Hotel Transfer",
      "Day 2: Trip to Sham Valley & Local Sightseeing",
      "Day 3:  Road Excursion to Nubra Valley via Khardungla Pass",
      "Day 4: Day tour of Turtuk with Sightseeing",
      "Day 5: Visit to Pangong Lake from Nubra Valley via Shayok River",
      "Day 6: Travel back to Leh from Pangong, Rest & Sightseeing",
      "Day 7: Airport transfer & Departure from Leh.",
    ],
  },
  {
    title:
      "7 Nights and 8 Days Leh Ladakh Tour Package - Leh 2N | Nubra 2N | Pangong 1N | Tso Moriri 1N | Leh 1N",
    image: it4, // Replace with actual image path
    days: [
      "Day 1: Arrival in Leh, Hotel Transfer, Bazaar Exploration",
      "Day 2: Trip to Sham Valley & Sightseeing (Magnetic Hills, Alchi Gompa & more)",
      "Day 3: Road Trip from Leh to Nubra Valley via Khardungla Pass",
      "Day 4: Road Excursion to Pangong Lake from Nubra via Shayok River",
      "Day 5: Back to Leh from Pangong, Hotel check-in & Rest",
      "Day 6: Quick Getaway to Tso Moriri from Leh via Road.",
      "Day 7: Tso Moriri to Leh, Check-in & Local Sightseeing",
      "Day 8: End of Ladakh Tour, Airport transfer & Departure from Leh",
    ],
  },
  {
    title:
      "8 Nights and 9 Days Best Leh Ladakh Travel Itinerary - Leh 2N | Nubra 2N | Pangong 2N | Leh 1N | Tso Moriri 1N | Leh 1N",
    image: it5, //Replace with actual image path
    days: [
      "Day 1: Arrival in Leh, Hotel Transfer, Check-in, & Bazaar Tour",
      "Day 2: Expedition to Sham Valley with Local Sightseeing",
      "Day 3: Road Journey to Nubra Valley via Khardungla Pass & Sightseeing",
      "Day 4: Day Tour from Nubra Valley to Turtuk",
      "Day 5: Trip from Nubra to Pangong Lake via Shayok River.",
      "Day 6: Travel Back to Leh from Pangong & Hotel Check-in",
      "Day 7: Road trip from Leh to Tso Moriri via Chumathang.",
      "Day 8: Back to Leh from Tso Moriri & Enjoy a Leisure Day",
      "Day 9: End of Ladakh Tour, Airport transfer & Departure from Leh",
    ],
  },
  {
    title:
      "9 Nights and 10 Days Best Leh Ladakh Trip Itinerary - Srinagar 3N | Kargil 1N | Leh 2N | Nubra 1N |Pangong 1N | Leh 1N",
    image: it6, //Replace with actual image path
    days: [
      "Day 1: Arrival in Srinagar, Hotel/Houseboat transfer, Sightseeing",
      "Day 2: Day tour of Pahalgam, Kashmir",
      "Day 3: Expedition to Gulmarg",
      "Day 4: Trip to Kargil via Sonamarg",
      "Day 5: Road Trip to Leh from Kargil via Lamayuru",
      "Day 6: Local sightseeing in Leh",
      "Day 7: Road Trip from Leh to Nubra Valley via Khardungla Pass.",
      "Day 8: Journey from Nubra to Pangong Lake via Shayok river",
      "Day 9: Pangong to Leh, Rest and Leisure Day",
      "Day 10: End of Ladakh Tour, Airport transfer & Departure from Leh",
    ],
  },
  // Add more packages if needed
];

export default function ItineraryAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Ready Made Leh Ladakh Itineraries for your Trip
      </h1>
      <div className="divide-y">
        {itineraryData.map((item, index) => (
          <div key={index} className="py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </div>

            {openIndex === index && (
              <div className="mt-4">
                <OptimizedImage
                  src={item.image}
                  alt="Itinerary"
                  width={256}
                  height={176}
                  className="w-64 h-44 object-cover mb-4"
                  sizes="(max-width: 768px) 100vw, 256px"
                  loading="lazy"
                  decoding="async"
                />
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {item.days.map((day, idx) => (
                    <li key={idx}>{day}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
