import React from "react";
import { Link } from "react-router-dom";
import DestinationCard from "./DestinationCard";
import { destinations } from "./destinations";

const DestinationList = () => {
  return (
    <section 
      className="bg-cyan-400 py-12 px-4"
      id="kashmir-destinations"
      aria-labelledby="destinations-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 
            id="destinations-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Top Kashmir Tourist Destinations - Places to Visit
          </h2>
          <p className="text-lg text-white mb-6 max-w-4xl mx-auto">
            Explore Kashmir's most beautiful destinations including <Link to="/places-to-visit-in-srinagar" className="text-yellow-300 hover:text-yellow-200 underline">Srinagar's Dal Lake</Link>, <Link to="/places-to-visit-in-gulmarg" className="text-yellow-300 hover:text-yellow-200 underline">Gulmarg's ski slopes</Link>, 
            <Link to="/places-to-visit-in-pahalgam" className="text-yellow-300 hover:text-yellow-200 underline">Pahalgam's valleys</Link>, <Link to="/places-to-visit-in-sonamarg" className="text-yellow-300 hover:text-yellow-200 underline">Sonamarg's glaciers</Link>, and more. Each destination offers unique experiences 
            that make Kashmir the perfect tourist paradise.
          </p>
          
          {/* Destination highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-black">
            <span className="bg-white bg-opacity-20  px-4 py-2 rounded-full text-sm font-medium">🏞️ Scenic Valleys</span>
            <span className="bg-white bg-opacity-20  px-4 py-2 rounded-full text-sm font-medium">🏔️ Snow Mountains</span>
            <span className="bg-white bg-opacity-20  px-4 py-2 rounded-full text-sm font-medium">🚣 Beautiful Lakes</span>
            <span className="bg-white bg-opacity-20  px-4 py-2 rounded-full text-sm font-medium">🌸 Mughal Gardens</span>
          </div>
        </header>
        
        <div 
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Kashmir tourist destinations"
        >
          {destinations.map((place, idx) => (
            <div key={idx} role="listitem">
              <DestinationCard {...place} />
            </div>
          ))}
        </div>
        
        {/* SEO-friendly additional content */}
        <div className="mt-12 bg-white bg-opacity-10 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold  mb-6 text-center">
            Kashmir Destinations by Interest
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-semibold  mb-3">🏞️ Nature Lovers</h4>
              <ul className="text-sm  space-y-1">
                <li>• <Link to="/places-to-visit-in-srinagar" className="text-yellow-300 hover:text-yellow-400">Dal Lake & Nigeen Lake</Link></li>
                <li>• <Link to="/places-to-visit-in-pahalgam" className="text-yellow-300 hover:text-yellow-400">Betaab Valley, Aru Valley</Link></li>
                <li>• Doodhpathri, Yusmarg</li>
                <li>• <Link to="/places-to-visit-in-sonamarg" className="text-yellow-300 hover:text-yellow-400">Thajiwas Glacier</Link></li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-semibold  mb-3">⛷️ Adventure Seekers</h4>
              <ul className="text-sm text-white space-y-1">
                <li>• <Link to="/places-to-visit-in-gulmarg" className="text-yellow-300 hover:text-yellow-400">Gulmarg - Skiing & Gondola</Link></li>
                <li>• <Link to="/places-to-visit-in-pahalgam" className="text-yellow-300 hover:text-yellow-400">Pahalgam - Trekking Base</Link></li>
                <li>• <Link to="/places-to-visit-in-sonamarg" className="text-yellow-300 hover:text-yellow-400">Sonamarg - Glacier Treks</Link></li>
                <li>• <Link to="/leh-ladakh-packages" className="text-yellow-300 hover:text-yellow-400">Ladakh - High Altitude</Link></li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-semibold  mb-3">💑 Honeymooners</h4>
              <ul className="text-sm text-white space-y-1">
                <li>• <Link to="/places-to-visit-in-srinagar" className="text-yellow-300 hover:text-yellow-400">Srinagar Houseboats</Link></li>
                <li>• <Link to="/places-to-visit-in-gulmarg" className="text-yellow-300 hover:text-yellow-400">Gulmarg Mountain Views</Link></li>
                <li>• <Link to="/places-to-visit-in-pahalgam" className="text-yellow-300 hover:text-yellow-400">Pahalgam Romantic Walks</Link></li>
                <li>• <Link to="/places-to-visit-in-srinagar" className="text-yellow-300 hover:text-yellow-400">Mughal Gardens</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationList;
