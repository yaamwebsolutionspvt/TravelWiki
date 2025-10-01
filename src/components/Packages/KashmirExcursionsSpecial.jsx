import React from "react";
import PackageCarousel from "./PackageCarousel";
import { excursionPackages, excursionContent } from "../../data/packages/excursions";

const KashmirExcursionsSpecial = () => {
  return (
    <PackageCarousel
      title={excursionContent.title}
      subtitle={excursionContent.subtitle}
      packages={excursionPackages}
      sectionBgColor={excursionContent.sectionBgColor}
      textColor={excursionContent.textColor}
      subtitleColor={excursionContent.subtitleColor}
    />
  );
};

export default KashmirExcursionsSpecial;