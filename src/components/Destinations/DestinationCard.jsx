import React from "react";
import OptimizedImage from "../OptimizedImage";

const DestinationCard = ({ image, name, description }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-md">
      <OptimizedImage
        src={image}
        alt={name}
        width={640}
        height={384}
        className="w-full h-64 object-cover group-hover:blur-sm transition duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="text-center">
          <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
