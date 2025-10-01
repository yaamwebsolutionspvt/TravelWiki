import React from 'react';
import { FaUsers, FaShieldAlt, FaHandsHelping, FaThumbsUp } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

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

const WhyTravelWiki = () => {
  return (
    <section className="bg-[#072e69] text-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Why Travel Wiki</h2>
      <p className="max-w-3xl mx-auto text-lg mb-12">
        Travel Wiki is a travel company that specializes in Kashmir tours, offering a unique and personalized experience. Our team of experts is dedicated to providing the best travel solutions, ensuring that your trip is memorable and hassle-free. With our in-house operations, we guarantee transparency and reliability, making us the best choice for your Kashmir adventure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default WhyTravelWiki;
