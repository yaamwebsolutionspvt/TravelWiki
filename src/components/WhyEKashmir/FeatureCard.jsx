import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white text-[#072e69] p-6 rounded-xl shadow-lg flex flex-col items-center">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-center">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
