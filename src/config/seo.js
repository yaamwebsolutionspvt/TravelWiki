// Central SEO configuration
export const siteConfig = {
  siteUrl: import.meta?.env?.VITE_SITE_URL || "https://travelwiki.org.in",
  siteName: "Kashmir Tourism - Travel Wiki",
  defaultImage: "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png",
  twitterHandle: "@travel_wikiofficial",
  facebookHandle: "travelwikiofficiall",
  instagramHandle: "travel_wikiofficial",
  phone: "+91 8899971960",
  email: "info@travelwiki.org.in",
  address: {
    street: "Near SumoStand, Near HDFC Bank",
    city: "Bijbihara",
    state: "Jammu & Kashmir",
    postalCode: "190001",
    country: "India"
  },
  businessHours: {
    opens: "09:00",
    closes: "18:00",
    timezone: "Asia/Kolkata"
  }
};

export const defaultSEO = {
  title: "Kashmir Tourism | Best Kashmir Tour Packages & Holiday Deals 2025",
  description:
    "Discover Jammu & Kashmir with curated tour packages: honeymoons, family trips, and adventure tours. Book trusted guides and exclusive deals today.",
  keywords:
    "Kashmir tourism, Kashmir tour packages, Kashmir honeymoon packages, Kashmir adventure tours, Kashmir family packages, Srinagar tours, Gulmarg skiing, Pahalgam valleys, Kashmir holiday packages, Dal Lake tours",
  type: "website",
  author: "Kashmir Tourism - Travel Wiki",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
};