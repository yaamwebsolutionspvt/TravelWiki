import React from "react";
import PackageCarousel from "./PackageCarousel";
import { familyPackages, familyContent } from "../../data/packages/family";

const KashmirFamilyPackages = () => {
  const expandedContent = (
    <>
      <p className="mb-6">
        {familyContent.expandedContent.intro}
      </p>
      
      <p className="font-medium mt-6 mb-4">{familyContent.expandedContent.placesTitle}</p>
      
      <div className="space-y-4">
        {familyContent.expandedContent.places.map((place, index) => (
          <div key={index}>
            <h3 className="font-semibold">{place.title}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <PackageCarousel
      title={familyContent.title}
      subtitle={familyContent.subtitle}
      packages={familyPackages}
      sectionBgColor={familyContent.sectionBgColor}
      textColor={familyContent.textColor}
      expandedContent={expandedContent}
    />
  );
};

export default KashmirFamilyPackages;