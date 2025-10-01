import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Custom hook for dynamic SEO management
 * @param {Object} seoData - SEO configuration object
 * @param {string} seoData.title - Page title
 * @param {string} seoData.description - Meta description
 * @param {string} seoData.keywords - Meta keywords
 * @param {string} seoData.image - Open Graph image
 * @param {string} seoData.url - Canonical URL
 * @param {string} seoData.type - Open Graph type
 * @param {Array} seoData.structuredData - Additional structured data
 */
export const useSEO = (seoData = {}) => {
  const defaultSEO = {
    title: "Kashmir Tourism | Best Kashmir Tour Packages & Holiday Deals",
    description: "Discover Jammu & Kashmir with curated tour packages: honeymoons, family trips, and adventure tours. Book trusted guides and exclusive deals today.",
    keywords: "Kashmir tourism, Kashmir tour packages, Kashmir honeymoon, Kashmir adventure tours, Kashmir family packages, Srinagar tours, Kashmir holiday packages",
    image: "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png",
    url: "https://yourdomain.com",
    type: "website"
  };

  const seo = { ...defaultSEO, ...seoData };

  useEffect(() => {
    // Update page title when component mounts
    document.title = seo.title;
  }, [seo.title]);

  return seo;
};

/**
 * SEO configurations for different pages
 */
export const SEOConfigs = {
  home: {
    title: "Kashmir Tourism | Best Kashmir Tour Packages & Holiday Deals",
    description: "Discover Jammu & Kashmir with curated tour packages: honeymoons, family trips, and adventure tours. Book trusted guides and exclusive deals today.",
    keywords: "Kashmir tourism, Kashmir tour packages, Kashmir honeymoon packages, Kashmir adventure tours, Kashmir cultural tours, Kashmir family packages, Srinagar tours, Kashmir holiday packages, Gulmarg tours, Pahalgam tours",
    url: "https://yourdomain.com/"
  },
  
  honeymoonPackages: {
    title: "Kashmir Honeymoon Packages | Romantic Tours for Couples",
    description: "Plan your perfect honeymoon in Kashmir with our romantic tour packages. Enjoy houseboat stays, Dal Lake shikaras, Gulmarg adventures, and intimate moments in paradise.",
    keywords: "Kashmir honeymoon packages, romantic Kashmir tours, Kashmir couple packages, houseboat honeymoon, Dal Lake romance, Gulmarg honeymoon, Pahalgam couples tour",
    url: "https://yourdomain.com/honeymoon-packages"
  },

  adventureTours: {
    title: "Kashmir Adventure Tours | Trekking, Skiing & Mountain Sports",
    description: "Experience thrilling Kashmir adventures with our specialized tour packages. Trekking, skiing, mountaineering, river rafting, and winter sports in the Himalayas.",
    keywords: "Kashmir adventure tours, Kashmir trekking, Kashmir skiing, Gulmarg skiing, Kashmir mountaineering, Kashmir river rafting, Kashmir winter sports, Himalayan adventures",
    url: "https://yourdomain.com/adventure-tours"
  },

  culturalTours: {
    title: "Kashmir Cultural Tours | Heritage & Traditional Experiences",
    description: "Immerse yourself in Kashmir's rich cultural heritage with our authentic tours. Visit historic temples, traditional crafts, local markets, and experience Kashmiri hospitality.",
    keywords: "Kashmir cultural tours, Kashmir heritage tours, Kashmiri culture, traditional Kashmir, Kashmir temples, Kashmiri crafts, Kashmir history tours",
    url: "https://yourdomain.com/cultural-tours"
  },

  familyPackages: {
    title: "Kashmir Family Packages | Perfect Family Vacation Tours",
    description: "Create unforgettable family memories in Kashmir with our specially designed family tour packages. Safe, comfortable, and fun activities for all age groups.",
    keywords: "Kashmir family packages, Kashmir family tours, family vacation Kashmir, Kashmir with kids, family friendly Kashmir tours, Kashmir group tours",
    url: "https://yourdomain.com/family-packages"
  },

  about: {
    title: "About Kashmir Tourism | Your Trusted Travel Partner",
    description: "Learn about Kashmir Tourism - your trusted partner for authentic Kashmir experiences. Professional guides, comfortable accommodations, and personalized service since 2020.",
    keywords: "about Kashmir tourism, Kashmir travel company, professional Kashmir guides, Kashmir tour operator, trusted Kashmir tours",
    url: "https://yourdomain.com/about"
  },

  contact: {
    title: "Contact Kashmir Tourism | Book Your Kashmir Tour Today",
    description: "Contact Kashmir Tourism for bookings and inquiries. Located in Bijbihara, Kashmir. Call +91-8899971960 for personalized tour packages and travel assistance.",
    keywords: "contact Kashmir tourism, book Kashmir tour, Kashmir tourism contact, Bijbihara tourism, Kashmir travel booking",
    url: "https://yourdomain.com/contact"
  }
};

/**
 * Generate structured data for tour packages
 * @param {Object} packageData - Tour package information
 */
export const generateTourPackageStructuredData = (packageData) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": packageData.name,
    "description": packageData.description,
    "image": packageData.image,
    "offers": {
      "@type": "Offer",
      "price": packageData.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "category": "Tourism"
    },
    "provider": {
      "@type": "Organization",
      "name": "Kashmir Tourism",
      "url": "https://yourdomain.com"
    },
    "touristType": packageData.touristType || "Tourist",
    "duration": packageData.duration,
    "location": {
      "@type": "Place",
      "name": "Kashmir, India",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Jammu & Kashmir",
        "addressCountry": "IN"
      }
    }
  };
};