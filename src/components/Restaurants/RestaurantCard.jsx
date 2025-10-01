import React from "react";
import OptimizedImage from "../OptimizedImage";

const RestaurantCard = ({ image, name, description, location, cost }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <OptimizedImage 
        src={image}
        alt={name}
        width={600}
        height={360}
        className="w-full h-48 object-cover group-hover:blur-sm transition duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        decoding="async"
      />
      <div className="p-4">
        <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-2">
          Cost for 2: {cost} Appx.
        </div>
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-gray-800 font-medium mt-2">{location}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
