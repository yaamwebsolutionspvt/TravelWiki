import React from "react";
import { Link } from "react-router-dom";
import { activities } from "./activities";
import ActivityCard from "./ActivityCard";

const ThingsToDo = () => {
  return (
    <section 
      className="bg-white py-14 px-4"
      id="things-to-do-kashmir"
      aria-labelledby="activities-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h3 
            id="activities-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Things to Do in Kashmir - Top Activities & Attractions
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
            Discover Kashmir's incredible activities and attractions. From <Link to="/things-to-do-in-kashmir" className="text-blue-600 hover:text-blue-800 underline">Dal Lake shikara rides</Link> to <Link to="/things-to-do-in-gulmarg" className="text-blue-600 hover:text-blue-800 underline">Gulmarg skiing</Link>, 
            <Link to="/things-to-do-in-pahalgam" className="text-blue-600 hover:text-blue-800 underline">Pahalgam trekking</Link> to <Link to="/things-to-do-in-sonamarg" className="text-blue-600 hover:text-blue-800 underline">Sonamarg glacier visits</Link> - experience the best of <Link to="/about-us" className="text-blue-600 hover:text-blue-800 underline">Kashmir tourism</Link> with our curated activity guide.
          </p>
          
          {/* Activity categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">🚣 Water Activities</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">🏔️ Adventure Sports</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">🎨 Cultural Experiences</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">📸 Sightseeing</span>
          </div>
        </header>

        <div 
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Kashmir activities and attractions"
        >
          {activities.map((item, i) => (
            <div key={i} role="listitem">
              <ActivityCard {...item} />
            </div>
          ))}
        </div>
        
        {/* SEO-friendly additional content */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Popular Kashmir Activities by Season
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-900 mb-2">🌸 Spring (<Link to="/kashmir-weather-in-march" className="text-blue-600 hover:text-blue-800">Mar</Link>-<Link to="/kashmir-weather-in-may" className="text-blue-600 hover:text-blue-800">May</Link>)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800">Tulip Garden visits</Link></li>
                <li>• <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800">Shikara rides on Dal Lake</Link></li>
                <li>• <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800">Mughal garden tours</Link></li>
                <li>• Photography walks</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-900 mb-2">☀️ Summer (<Link to="/kashmir-weather-in-june" className="text-green-600 hover:text-green-800">Jun</Link>-<Link to="/kashmir-weather-in-august" className="text-green-600 hover:text-green-800">Aug</Link>)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <Link to="/places-to-visit-in-gulmarg" className="text-green-600 hover:text-green-800">Gulmarg Gondola rides</Link></li>
                <li>• <Link to="/places-to-visit-in-pahalgam" className="text-green-600 hover:text-green-800">Pahalgam valley treks</Link></li>
                <li>• <Link to="/places-to-visit-in-srinagar" className="text-green-600 hover:text-green-800">Houseboat stays</Link></li>
                <li>• River rafting</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-orange-900 mb-2">🍂 Autumn (Sep-Nov)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Chinar leaf viewing</li>
                <li>• Apple orchard visits</li>
                <li>• Cultural festivals</li>
                <li>• Handicraft shopping</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-purple-900 mb-2">❄️ Winter (<Link to="/kashmir-weather-in-december" className="text-purple-600 hover:text-purple-800">Dec</Link>-<Link to="/kashmir-weather-in-february" className="text-purple-600 hover:text-purple-800">Feb</Link>)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <Link to="/places-to-visit-in-gulmarg" className="text-purple-600 hover:text-purple-800">Skiing in Gulmarg</Link></li>
                <li>• Snow activities</li>
                <li>• Winter photography</li>
                <li>• Frozen lake visits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
