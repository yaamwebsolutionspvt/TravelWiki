import React from "react";
import PackageCarousel from "./PackageCarousel";
import { adventurePackages, adventureContent } from "../../data/packages/adventure";

const KashmirAdventureWinter = () => {
  const expandedContent = (
    <>
      <p className="font-medium mt-6 mb-4">{adventureContent.expandedContent.activitiesTitle}</p>
      
      <div className="space-y-4">
        {adventureContent.expandedContent.activities.map((activity, index) => (
          <div key={index}>
            <p className="font-medium mb-2">{activity.title}</p>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
      
      {/* SEO-friendly additional content */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Kashmir Winter Adventure Activities
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-left text-gray-700">
          <div>
            <h4 className="font-medium mb-2">❄️ Winter Sports in Gulmarg</h4>
            <p className="text-sm">World-class skiing, snowboarding, Gondola rides, snow trekking, winter photography</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">🏔️ Adventure Destinations</h4>
            <p className="text-sm">Gulmarg ski resort, Pahalgam snow activities, Sonamarg winter treks, Yusmarg adventures</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">🎿 Best Winter Season</h4>
            <p className="text-sm">December to March for snow activities, January-February for peak skiing conditions</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">🏕️ Adventure Packages</h4>
            <p className="text-sm">Skiing packages, winter trekking, snow camping, adventure sports combinations</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section 
      id="kashmir-adventure-winter"
      aria-labelledby="adventure-winter-heading"
      role="region"
    >
      {/* SEO-friendly hidden heading */}
      <h2 id="adventure-winter-heading" className="sr-only">
        Kashmir Adventure Winter Packages - Skiing, Snowboarding & Winter Sports Tours
      </h2>
      
      <PackageCarousel
        title={adventureContent.title}
        subtitle={adventureContent.subtitle}
        packages={adventurePackages}
        sectionBgColor={adventureContent.sectionBgColor}
        textColor={adventureContent.textColor}
        subtitleColor={adventureContent.subtitleColor}
        expandedContent={expandedContent}
      />
    </section>
  );
};

export default KashmirAdventureWinter;
