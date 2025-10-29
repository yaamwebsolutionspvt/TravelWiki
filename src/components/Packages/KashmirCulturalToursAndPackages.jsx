import React from "react";
import PackageCarousel from "./PackageCarousel";
import { culturalPackages, culturalContent } from "../../data/packages/cultural";

const KashmirCulturalToursAndPackages = () => {
  const expandedContent = (
    <>
      <p className="mb-6">
        {culturalContent.expandedContent.intro}
      </p>
      
      <p className="font-medium mt-6 mb-4">{culturalContent.expandedContent.tableTitle}</p>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100">
              {culturalContent.expandedContent.culturalTable.headers.map((header, index) => (
                <th key={index} className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {culturalContent.expandedContent.culturalTable.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 1 ? "" : ""}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <PackageCarousel
      title={culturalContent.title}
      subtitle={culturalContent.subtitle}
      packages={culturalPackages}
      sectionBgColor={culturalContent.sectionBgColor}
      textColor={culturalContent.textColor}
      expandedContent={expandedContent}
    />
  );
};

export default KashmirCulturalToursAndPackages;
