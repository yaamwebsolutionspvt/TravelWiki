import React, { useState } from "react";
import OptimizedImage from "../OptimizedImage";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
const nw1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514678/travelwiki/assets/News/nw1.png";
const nw2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514685/travelwiki/assets/News/nw2.png";
const nw3 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514694/travelwiki/assets/News/nw3.png";
const nw4 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514701/travelwiki/assets/News/nw4.png";
const nw5 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514707/travelwiki/assets/News/nw5.png";  
const nw6 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514712/travelwiki/assets/News/nw6.png";

const newsData = [
  {
    image: nw1,
    title:
      "Jammu & Kashmir Tourism Honoured with Award of Excellence at 15th ATOAI Convention in Gujarat",
    date: "December 20th, 2023",
  },
  {
    image: nw2,
    title:
      "Kashmir’s Tourism Renaissance: Surpassing 3 Million Visitors and Counting as Confidence Returns Post Article 370 Revocation",
    date: "December 20th, 2023",
  },
  {
    image: nw3,
    title:
      "Lolab Valley Wins Best Offbeat Destination Award 2023: A Hidden Gem Unveiled",
    date: "December 19th, 2023",
  },
  // Add more entries as needed
  {
    image: nw4,
    title:
      "Kashmir’s Captivating Evolution French Newspaper Chronicles the Enchanting Transformation",
    date: "December 19th, 2023",
  },
  {    
    image: nw5,
    title:   "Army Transfers 139 Acres of Prime Srinagar Land to Boost Tourism Development",
    date: "December 18th, 2023",
  }, 
  {
    image: nw6,
    title: "Gulmarg Gondola Soars to New Heights, Generates Impressive Rs 108 Crore in Revenue",
    date: "December 18th, 2023",
  },
];

export default function NewsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCards, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCards, newsData.length - visibleCards)
    );
  };

  return (
    <div className="px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-8">News</h2>
      <div className="relative">
        <div className="flex items-center">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full shadow p-2 absolute -left-6 z-10"
          >
            <IoChevronBack className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
            {newsData.slice(startIndex, startIndex + visibleCards).map(
              ({ image, title, date }, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <OptimizedImage
                    src={image}
                    alt={title}
                    width={640}
                    height={360}
                    className="w-full h-64 object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-4">
                    <p className="text-cyan-500 text-sm mb-2">News</p>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-gray-500">{date}</p>
                  </div>
                </div>
              )
            )}
          </div>

          <button
            onClick={handleNext}
            className="bg-white rounded-full shadow p-2 absolute -right-6 z-10"
          >
            <IoChevronForward className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
