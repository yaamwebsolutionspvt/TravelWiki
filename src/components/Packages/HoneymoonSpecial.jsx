import React from "react";
import { Link } from "react-router-dom";
import PackageCarousel from "./PackageCarousel";
import { honeymoonPackages, honeymoonContent } from "../../data/packages/honeymoon";

const HoneymoonSpecial = () => {
  const expandedContent = (
    <>
      <p>
        {honeymoonContent.expandedContent.intro}
      </p>
      
      <p className="font-medium mt-6 mb-4">{honeymoonContent.expandedContent.activitiesTitle}</p>
      
      <div className="space-y-4">
        {honeymoonContent.expandedContent.activities.map((activity, index) => (
          <div key={index}>
            <p className="font-medium mb-2">{activity.title}</p>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section 
      className="px-4 py-8 bg-white text-center"
      id="kashmir-honeymoon-packages"
      aria-labelledby="honeymoon-heading"
      role="region"
    >
      <header className="mb-8">
        <h2 
          id="honeymoon-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900"
        >
          {honeymoonContent.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
          Create unforgettable memories with our romantic Kashmir honeymoon packages. Experience the magic of <Link to="/places-to-visit-in-srinagar" className="text-pink-600 hover:text-pink-800 underline">Dal Lake houseboats</Link>, 
          <Link to="/places-to-visit-in-gulmarg" className="text-pink-600 hover:text-pink-800 underline">Gulmarg's snow-capped mountains</Link>, and <Link to="/places-to-visit-in-pahalgam" className="text-pink-600 hover:text-pink-800 underline">Pahalgam's serene valleys</Link> with your loved one.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">💕 Romantic Houseboats</span>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">🌹 Shikara Rides</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">🏔️ Mountain Views</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">🎿 Couple Activities</span>
        </div>
      </header>
      
      <PackageCarousel
        title=""
        subtitle={honeymoonContent.subtitle}
        packages={honeymoonPackages}
        sectionBgColor="bg-transparent"
        textColor="text-black"
        expandedContent={expandedContent}
      />
      
      {/* SEO-friendly additional content */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Why Choose Kashmir for Your Honeymoon?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-left text-gray-700">
            <div>
              <h4 className="font-medium mb-2">🏞️ Romantic Destinations</h4>
              <p className="text-sm"><Link to="/places-to-visit-in-srinagar" className="text-pink-600 hover:text-pink-800">Dal Lake houseboats</Link>, <Link to="/places-to-visit-in-gulmarg" className="text-pink-600 hover:text-pink-800">Gulmarg gondola rides</Link>, <Link to="/places-to-visit-in-pahalgam" className="text-pink-600 hover:text-pink-800">Pahalgam meadows</Link>, <Link to="/places-to-visit-in-sonamarg" className="text-pink-600 hover:text-pink-800">Sonamarg glaciers</Link></p>
            </div>
            <div>
              <h4 className="font-medium mb-2">🌸 Best Honeymoon Season</h4>
              <p className="text-sm"><Link to="/kashmir-weather-in-april" className="text-pink-600 hover:text-pink-800">April</Link>-<Link to="/kashmir-weather-in-june" className="text-pink-600 hover:text-pink-800">June</Link> for pleasant weather, <Link to="/kashmir-weather-in-december" className="text-pink-600 hover:text-pink-800">December</Link>-<Link to="/kashmir-weather-in-february" className="text-pink-600 hover:text-pink-800">February</Link> for snow romance</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">💑 Couple Activities</h4>
              <p className="text-sm">Shikara rides, skiing, trekking, photography, Mughal garden visits</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">🏨 Luxury Accommodations</h4>
              <p className="text-sm">Premium houseboats, luxury hotels, romantic resorts with mountain views</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoneymoonSpecial;
