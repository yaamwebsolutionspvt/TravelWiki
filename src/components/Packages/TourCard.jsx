// components/TourCard.jsx
import React from "react";
import OptimizedImage from "../OptimizedImage";

const TourCard = ({
  title,
  duration,
  image,
  flights,
  hotels,
  activities,
  transfers,
  highlights,
  price,
  originalPrice,
  nights,
  updatedDate = "30 July 2025",
  buttonText = "Send Enquiry",
  buttonStyle = "bg-orange-500 hover:bg-orange-600",
  discountBadgeColor = "bg-green-600",
  showDiscount = true,
  onEnquiry,
}) => {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="bg-white border shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <div className="relative">
        <OptimizedImage 
          src={image}
          alt={title}
          width={600}
          height={360}
          className="w-full h-48 object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-3 left-3 bg-gray-800 text-white px-2 py-1 rounded text-sm">
          {duration}
        </div>
        {showDiscount && (
          <div className={`absolute top-3 right-3 ${discountBadgeColor} text-white px-2 py-1 rounded text-sm`}>
            {discount}% OFF
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col h-full">
        <h3 className="font-bold text-lg mb-2">{title}</h3>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
          <span>✈ {flights} Flights</span>
          <span>🏨 {hotels} Hotels</span>
          <span>🏃 {activities} Activities</span>
          <span>🚗 {transfers} Transfers</span>
        </div>

        {nights && <div className="text-sm bg-gray-100 px-2 py-1 rounded mb-3">{nights}</div>}

        <ul className="list-disc text-sm text-gray-700 pl-5 mb-3 flex-1">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="text-left mb-2">
          <span className="text-xl font-bold text-orange-600">₹{price.toLocaleString()}</span>
          <span className="line-through text-gray-500 text-sm ml-2">₹{originalPrice.toLocaleString()}</span>
        </div>

        <p className="text-sm text-gray-500 mb-3">Updated on: {updatedDate}</p>

        <button className={`w-full ${buttonStyle} text-white py-3 rounded font-semibold`} onClick={onEnquiry}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TourCard;