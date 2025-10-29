import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/seo';

/**
 * Component to add structured data for tour packages
 * This helps with rich snippets in search results
 */
const TourPackageSchema = ({ packages = [] }) => {
  // Default tour packages if none provided
  const defaultPackages = [
    {
      name: "Glimpse of Kashmir Tour",
      description: "A perfect introduction to Kashmir's beauty covering Srinagar, Gulmarg, and Pahalgam with comfortable accommodations and professional guides.",
      duration: "P5D", // 5 days in ISO 8601 format
      price: "15000",
      image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png",
      category: "Sightseeing",
      touristType: ["Tourist", "Family"]
    },
    {
      name: "Kashmir Honeymoon Tour",
      description: "Romantic honeymoon package featuring houseboat stays, shikara rides, and intimate experiences in Kashmir's most beautiful locations.",
      duration: "P7D", // 7 days
      price: "25000",
      image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png",
      category: "Honeymoon",
      touristType: ["Couple"]
    },
    {
      name: "Kashmir Adventure Winter Tour",
      description: "Thrilling winter adventure package including skiing in Gulmarg, snow activities, and mountain adventures in Kashmir's winter wonderland.",
      duration: "P6D", // 6 days
      price: "30000",
      image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png",
      category: "Adventure",
      touristType: ["AdventureTourist", "SkiEnthusiast"]
    },
    {
      name: "Kashmir Cultural Heritage Tour",
      description: "Immersive cultural experience showcasing Kashmir's rich heritage, traditional crafts, historical sites, and authentic local interactions.",
      duration: "P8D", // 8 days
      price: "20000",
      image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png",
      category: "Cultural",
      touristType: ["CulturalTourist", "HistoryEnthusiast"]
    },
    {
      name: "Kashmir Family Package",
      description: "Family-friendly tour package with activities suitable for all ages, comfortable accommodations, and safe guided experiences.",
      duration: "P10D", // 10 days
      price: "18000",
      image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png",
      category: "Family",
      touristType: ["Family", "Tourist"]
    }
  ];

  const packageList = packages.length > 0 ? packages : defaultPackages;

  // Generate ItemList structured data for all packages
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Kashmir Tour Packages",
    "description": "Complete list of Kashmir tour packages offered by Kashmir Tourism",
    "numberOfItems": packageList.length,
    "itemListElement": packageList.map((pkg, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristTrip",
        "@id": `${siteConfig.siteUrl}/#tour-package-${index + 1}`,
        "name": pkg.name,
        "description": pkg.description,
        "image": `${siteConfig.siteUrl}${pkg.image}`,
        "duration": pkg.duration,
        "touristType": Array.isArray(pkg.touristType) ? pkg.touristType : [pkg.touristType],
        "location": {
          "@type": "Place",
          "name": "Kashmir Valley, India",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kashmir",
            "addressRegion": "Jammu & Kashmir",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.0837",
            "longitude": "74.7973"
          }
        },
        "provider": {
          "@type": "Organization",
          "name": siteConfig.siteName,
          "url": siteConfig.siteUrl,
          "telephone": siteConfig.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.address?.street,
            "addressLocality": siteConfig.address?.city,
            "postalCode": siteConfig.address?.postalCode,
            "addressRegion": siteConfig.address?.state,
            "addressCountry": "IN"
          }
        },
        "offers": {
          "@type": "Offer",
          "price": pkg.price,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": new Date().toISOString(),
          "category": pkg.category,
          "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // Valid for 1 year
          "includesObject": [
            {
              "@type": "Thing",
              "name": "Accommodation"
            },
            {
              "@type": "Thing",
              "name": "Transportation"
            },
            {
              "@type": "Thing",
              "name": "Professional Guide"
            },
            {
              "@type": "Thing",
              "name": "Meals"
            }
          ]
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Difficulty Level",
            "value": pkg.category === "Adventure" ? "Moderate to Challenging" : "Easy to Moderate"
          },
          {
            "@type": "PropertyValue",
            "name": "Group Size",
            "value": "2-15 people"
          },
          {
            "@type": "PropertyValue",
            "name": "Booking Advance",
            "value": "7-14 days recommended"
          }
        ]
      }
    }))
  };

  // Generate FAQ structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time to visit Kashmir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time to visit Kashmir depends on your interests. Summer (May-August) is perfect for sightseeing and trekking. Autumn (September-November) offers beautiful colors. Winter (December-February) is ideal for snow activities and skiing. Spring (March-April) brings blooming flowers and pleasant weather."
        }
      },
      {
        "@type": "Question",
        "name": "Are Kashmir tour packages safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Kashmir tour packages are completely safe. We work with experienced local guides, use reliable transportation, and stay updated with current conditions. We prioritize guest safety and provide 24/7 support during tours."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in Kashmir tour packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Kashmir tour packages typically include accommodation, transportation, professional guide services, selected meals, and sightseeing as per itinerary. Specific inclusions vary by package - please check individual package details."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book a Kashmir tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking Kashmir tours at least 7-14 days in advance, especially during peak season (May-October). Early booking ensures better accommodation options and helps us customize your experience according to your preferences."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide customized Kashmir tour packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in customized Kashmir tour packages. Our team can tailor itineraries based on your interests, budget, group size, and duration. Contact us to discuss your specific requirements and preferences."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Tour Packages List Schema */}
      <script type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </script>
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default TourPackageSchema;
