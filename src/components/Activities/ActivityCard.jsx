import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ActivityCard = ({
  image,
  title,
  description,
  location,
  duration,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-full max-w-xs text-black flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm mb-4">{description}</p>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600 mt-auto">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> {location}
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> {duration}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
