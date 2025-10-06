import React from 'react';

const ItineraryCard = ({ 
  title, 
  activities, 
  imageUrl, 
  imageAlt, 
  imageTitle, 
  imageSubtitle,
  icon = "🏛️",
  imageOnRight = false // New prop for alternating image position
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-stretch">
        {/* Image Section - Alternating Position */}
        <div className={`${imageOnRight ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative group overflow-hidden rounded-lg shadow-lg h-full min-h-[300px]">
            <img 
              src={imageUrl} 
              alt={imageAlt} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h4 className="font-bold text-lg">{imageTitle}</h4>
                <p className="text-sm opacity-90">{imageSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section - Alternating Position */}
        <div className={`flex flex-col justify-center ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-6">{icon} {title}</h3>
          <ul className="text-gray-600 space-y-3 flex-1">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
