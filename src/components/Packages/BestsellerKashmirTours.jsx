import React from "react";
import { Link } from "react-router-dom";
import PackageCarousel from "./PackageCarousel";
import { bestsellerPackages, bestsellerContent } from "../../data/packages/bestseller";

const BestsellerKashmirTours = () => {
  return (
    <section
      id="bestseller-tours"
      className="py-10"
      aria-labelledby="bestseller-heading"
      role="region"
    >
      {/* SEO-friendly hidden heading */}
      <h2 id="bestseller-heading" className="sr-only">
        Bestseller Kashmir Tour Packages - Most Popular Kashmir Holiday Deals
      </h2>

      {/* SEO content */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explore our most popular Kashmir tour packages featuring <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800 underline">Srinagar's Dal Lake</Link>, <Link to="/places-to-visit-in-gulmarg" className="text-blue-600 hover:text-blue-800 underline">Gulmarg's snow activities</Link>,
            <Link to="/places-to-visit-in-pahalgam" className="text-blue-600 hover:text-blue-800 underline">Pahalgam's scenic valleys</Link>, and <Link to="/places-to-visit-in-sonamarg" className="text-blue-600 hover:text-blue-800 underline">Sonamarg's glaciers</Link>. Perfect for <Link to="/kashmirtourpackages/kashmir-honeymoon-tour" className="text-blue-600 hover:text-blue-800 underline">honeymoons</Link>, <Link to="/kashmirtourpackages/kashmir-family-tour" className="text-blue-600 hover:text-blue-800 underline">family vacations</Link>, and adventure seekers.
          </p>
        </div>
      </div>

      <PackageCarousel
        title={bestsellerContent.title}
        packages={bestsellerPackages}
        sectionBgColor={bestsellerContent.sectionBgColor}
        textColor={bestsellerContent.textColor}
      />

      {/* Additional SEO content */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="text-center text-sm text-gray-500">
          <p>
            <strong>Popular Kashmir destinations:</strong> <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800">Srinagar</Link>, <Link to="/places-to-visit-in-gulmarg" className="text-blue-600 hover:text-blue-800">Gulmarg</Link>, <Link to="/places-to-visit-in-pahalgam" className="text-blue-600 hover:text-blue-800">Pahalgam</Link>, <Link to="/places-to-visit-in-sonamarg" className="text-blue-600 hover:text-blue-800">Sonamarg</Link>, <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800">Dal Lake</Link>, Nigeen Lake,
            Betaab Valley, Aru Valley, Doodhpathri, Yusmarg |
            <strong>Best time to visit:</strong> <Link to="/kashmir-weather-in-april" className="text-blue-600 hover:text-blue-800">April</Link> to <Link to="/kashmir-weather-in-october" className="text-blue-600 hover:text-blue-800">October</Link> for sightseeing, <Link to="/kashmir-weather-in-december" className="text-blue-600 hover:text-blue-800">December</Link> to <Link to="/kashmir-weather-in-march" className="text-blue-600 hover:text-blue-800">March</Link> for snow activities
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestsellerKashmirTours;
