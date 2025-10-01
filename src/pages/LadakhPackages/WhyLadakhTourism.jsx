import React from 'react';
import { FaUsers, FaShieldAlt, FaHandsHelping, FaThumbsUp } from 'react-icons/fa';
import FeatureCard from '../../components/WhyEKashmir/FeatureCard';

const features = [
  {
    icon: <FaUsers size={40} className="text-blue-500" />,
    title: 'No Third Party Mess',
    description: '100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!'
  },
  {
    icon: <FaShieldAlt size={40} className="text-blue-500" />,
    title: 'Best Travel Experts',
    description: 'Our travel experts have core and intense knowledge about Kashmir with 10+ years of experience to plan the best itinerary.'
  },
  {
    icon: <FaHandsHelping size={40} className="text-blue-500" />,
    title: '24 X 7 On-Trip Assistance',
    description: 'We are just a call away during your tour for any immediate help to make it enjoyable and hassle-free.'
  },
  {
    icon: <FaThumbsUp size={40} className="text-blue-500" />,
    title: 'Best Rate Guarantee',
    description: 'We ensure the best rates by avoiding third-party involvement with our own hotels and vehicles.'
  },
];

const WhyLadakhTourism = () => {
  return (
    <section className="bg-[#072e69] text-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Why Leh Ladakh Tourism</h2>
      <p className="max-w-3xl mx-auto text-lg mb-12">
       Leh Ladakh is a paradise for adrenaline junkies who are looking to push themselves to their limits. With activities like rock climbing and paragliding, there is no shortage of adventure sports in Leh Ladakh.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default WhyLadakhTourism;
