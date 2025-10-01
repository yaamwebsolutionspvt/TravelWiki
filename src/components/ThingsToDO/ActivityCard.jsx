import React from "react";
import OptimizedImage from "../OptimizedImage";
import { IoLocationSharp, IoCalendar } from "react-icons/io5";

const ActivityCard = ({ image, title, cost, location, season }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white">
      <div className="relative">
        <OptimizedImage 
          src={image}
          alt={title}
          width={520}
          height={312}
          className="w-full h-52 object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute bottom-0 left-0 bg-cyan-500 text-white px-4 py-1 text-sm font-semibold rounded-tr-xl">
          Avg. Cost: {cost}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="text-gray-600 text-sm flex items-start gap-2 mb-1">
          <IoLocationSharp size={16} className="mt-0.5" />
          <span>{location}</span>
        </div>
        <div className="text-gray-600 text-sm flex items-start gap-2">
          <IoCalendar size={16} className="mt-0.5" />
          <span>{season}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
