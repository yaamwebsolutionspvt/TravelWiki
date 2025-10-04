import React, { useState } from "react";
import { Link } from "react-router-dom";
import { packageTableLeft, packageTableRight, kashmirTourismContent } from "../../data/packages/general";

const PackageTable = ({ data }) => (
  <table className="w-full border text-left text-sm">
    <thead className="bg-gray-100 text-gray-800 font-semibold">
      <tr>
        <th className="px-2 py-2 border">Package Name</th>
        <th className="px-2 py-2 border">Nights</th>
        <th className="px-2 py-2 border">Price (₹)</th>
        <th className="px-2 py-2 border"></th>
      </tr>
    </thead>
    <tbody className="text-gray-700">
      {data.map((pkg, idx) => (
        <tr key={idx} className="border-t">
          <td className="px-2 py-2 border">{pkg.name}</td>
          <td className="px-2 py-2 border">{pkg.nights}</td>
          <td className="px-2 py-2 border">{pkg.price || "-"}</td>
          <td className="px-2 py-2 border">
          <Link to={pkg.link || "#"} className="text-blue-600 hover:underline">
            <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded hover:opacity-90 cursor-pointer transition-all duration-300 w-full min-w-[100px] h-[36px] flex items-center justify-center">
              View Details
            </button>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const KashmirTourPackagesTable = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <PackageTable data={packageTableLeft} />
        <PackageTable data={packageTableRight} />
      </div>

      {!isExpanded && (
        <div className="text-center mt-6">
          <button 
            onClick={toggleExpanded}
            className="text-orange-600 font-semibold hover:underline text-lg"
          >
            More ↓
          </button>
        </div>
      )}

      {isExpanded && (
        <div className="mt-8 bg-white p-2 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{kashmirTourismContent.title}</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            {kashmirTourismContent.sections.map((section, index) => (
              <p key={index}>
                {section}
              </p>
            ))}
            
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">{kashmirTourismContent.whyBookWithUs.title}</h3>
            <p>
              {kashmirTourismContent.whyBookWithUs.intro}
            </p>
            {kashmirTourismContent.whyBookWithUs.sections.map((section, index) => (
              <p key={index}>
                {section}
              </p>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <button 
              onClick={toggleExpanded}
              className="text-orange-600 font-semibold hover:underline text-lg"
            >
              Less ↑
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default KashmirTourPackagesTable;
