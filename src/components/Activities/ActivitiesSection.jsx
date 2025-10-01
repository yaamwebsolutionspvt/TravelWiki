import React from 'react';
import ActivityCard from './ActivityCard';
const ac1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514569/travelwiki/assets/Activities/ac1.png";
const ac2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514570/travelwiki/assets/Activities/ac2.png";
const ac3 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514572/travelwiki/assets/Activities/ac3.png";
const ac4 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514573/travelwiki/assets/Activities/ac4.png";
const ac5 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514574/travelwiki/assets/Activities/ac5.png";
const ac6 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514575/travelwiki/assets/Activities/ac6.png";
const ac7 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514577/travelwiki/assets/Activities/ac7.png";
const ac8 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514578/travelwiki/assets/Activities/ac8.png";

const activities = [
  {
    image: ac1,
    title: 'Hot Air Ballooning',
    description:
      'Soar above the alluring city of Srinagar and enjoy the magic of Kashmir as you embark on a hot-air ballooning adventure from the serene Zabarwan Park.',
    location: 'Srinagar',
    duration: '3 hours Appx.',
  },
  {
    image: ac2,
    title: 'Gondola / Cable Car Ride',
    description:
      "Ascend to the skies in Gulmarg's iconic Gondola, a thrilling journey unfolding majestic Himalayas panoramas.",
    location: 'Gulmarg',
    duration: '3 hours Appx.',
  },
  {
    image: ac3,
    title: 'Camping',
    description:
      "Embrace the untamed beauty of Gurez Valley through summer camping. Sleep under the stars, surrounded by lush meadows and a sense of tranquillity that's unmatched.",
    location: 'Gurez Valley',
    duration: '24 hours',
  },
  {
    image: ac4,
    title: 'Skiing',
    description:
      'Seek the thrill of the slopes in the renowned skiing haven of Gulmarg. With snow-covered mountains as your canvas, carve through powdered trails and create memories of exhilarating downhill descents.',
    location: 'Gulmarg',
    duration: '6 Hours Appx.',
  },
   {
    image: ac5,
    title: 'Golfing',
    description:
      'Tee off amidst the serene beauty of Srinagar and Gulmarg, where lush greens meet towering mountains. Experience golfing like never before, surrounded by an enchanting natural setting that enhances every swing.',
    location: 'Srinagar',
    duration: '5 Hours Appx.',
  },
   {
    image: ac6,
    title: 'Trekking',
    description:
      "Lace-up your boots for an unforgettable journey through Kashmir's diverse trekking trails. From the alpine meadows of Pahalgam to the crystalline lakes of Naranag, each trek promises an exploration of nature's finest.",
    location: 'Kashmir',
    duration: '48 Hours Appx.',
  },
    {
        image: ac7,
        title: 'River Rafting',
        description:
         "Navigate the thrilling currents of Pahalgam's rivers and Ganderbal's Wayil, as you embark on a river rafting adventure that combines adrenaline rushes with the breathtaking scenery of the surrounding landscapes.",
        location: 'Pahalgam',
        duration: '3 Hours Appx.',
    },
    {
        image: ac8,
        title: 'Horse Riding',
        description:
        'Traverse the picturesque hill stations of Kashmir in style – on horseback. Let the rhythmic clip-clop of hooves guide you through verdant landscapes, providing a timeless and unique exploration experience.',
        location: 'Pahalgam',
        duration: '4 Hours Appx.',
    },

];

const ActivitiesSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-5 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Popular Adventure Sports In Kashmir For A <span className="text-yellow-400">Thrilling Vacay</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Kashmir is not just about its immense beauty but an array of adventure sports that inject exhilaration into your journey, ensuring memories that forever linger.
          </p>
        </div>
        
        {/* Activities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
