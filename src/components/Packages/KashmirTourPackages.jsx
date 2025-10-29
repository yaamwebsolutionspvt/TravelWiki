import React, { useState } from "react";
import { Link } from "react-router-dom";
import KashmirTourPackagesTable from "./KashmirTourPackagesTable";
import { kashmirTourPackagesContent } from "../../data/packages/general";

const KashmirTourPackages = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewCount = 1; // show only the first paragraph initially
  const totalSections = kashmirTourPackagesContent.sections.length;
  const visibleSections = isExpanded
    ? kashmirTourPackagesContent.sections
    : kashmirTourPackagesContent.sections.slice(0, previewCount);

  return (
    <section 
      className="max-w-5xl mx-auto px-2 py-16 text-center text-gray-800"
      id="kashmir-tour-packages"
      aria-labelledby="kashmir-packages-heading"
    >
      <header className="mb-8">
        <h2 
          id="kashmir-packages-heading"
          className="text-3xl md:text-4xl font-bold mb-5 text-gray-900"
        >
          {kashmirTourPackagesContent.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover Kashmir's paradise with our carefully curated tour packages covering <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800 underline">Srinagar</Link>, <Link to="/places-to-visit-in-gulmarg" className="text-blue-600 hover:text-blue-800 underline">Gulmarg</Link>, <Link to="/places-to-visit-in-pahalgam" className="text-blue-600 hover:text-blue-800 underline">Pahalgam</Link>, <Link to="/places-to-visit-in-sonamarg" className="text-blue-600 hover:text-blue-800 underline">Sonamarg</Link>, and more destinations.
        </p>
      </header>

      <div className="prose prose-lg max-w-4xl mx-auto mb-4">
        {visibleSections.map((section, index) => (
          <p key={index} className="mb-5 text-lg leading-relaxed text-gray-700">
            {section}
          </p>
        ))}

        {isExpanded && (
          <p className="text-lg leading-relaxed text-gray-700">
            {kashmirTourPackagesContent.footer}{" "}
            <Link 
              to="/contact" 
              className="text-blue-600 underline hover:text-blue-800 font-semibold"
              aria-label="Contact us for customized Kashmir tour packages"
            >
              talk to us about Kashmir customised packages.
            </Link>
          </p>
        )}
      </div>

      {/* See more / less toggle */}
      {totalSections > previewCount && (
        <div className="max-w-4xl mx-auto mb-8">
          <button
            type="button"
            onClick={() => setIsExpanded((v) => !v)}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-colors"
            aria-expanded={isExpanded}
            aria-controls="kashmir-packages-more"
          >
            {isExpanded ? "See less" : "See more"}
          </button>
        </div>
      )}

      {/* SEO-friendly keywords section */}
      {isExpanded && (
      <div id="kashmir-packages-more" className="mb-8 text-sm text-gray-600">
        <p className="italic">
          Popular searches: <Link to="/packages-listing" className="text-blue-600 hover:text-blue-800">Kashmir tour packages</Link>, <Link to="/packages-listing" className="text-blue-600 hover:text-blue-800">Kashmir holiday packages</Link>, <Link to="/about-us" className="text-blue-600 hover:text-blue-800">Kashmir tourism</Link>, 
          <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800">Srinagar tours</Link>, <Link to="/places-to-visit-in-gulmarg" className="text-blue-600 hover:text-blue-800">Gulmarg packages</Link>, <Link to="/places-to-visit-in-pahalgam" className="text-blue-600 hover:text-blue-800">Pahalgam tours</Link>, <Link to="/packages/kashmir-honeymoon-tour" className="text-blue-600 hover:text-blue-800">Kashmir honeymoon packages</Link>, 
          <Link to="/packages/kashmir-family-tour" className="text-blue-600 hover:text-blue-800">Kashmir family tours</Link>, <Link to="/places-to-visit-in-srinagar" className="text-blue-600 hover:text-blue-800">Dal Lake tours</Link>, Kashmir adventure tours
        </p>
      </div>
      )}
      
      <div role="region" aria-label="Kashmir Tour Packages Table">
        <KashmirTourPackagesTable/>
      </div>
    </section>
  );
};

export default KashmirTourPackages;
