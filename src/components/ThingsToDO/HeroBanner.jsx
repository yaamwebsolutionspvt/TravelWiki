import React from "react";

const HeroBanner = ({ 
  title, 
  subtitle, 
  backgroundImage 
}) => {
  return (
    <div
      className="relative flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat min-h-[75vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
