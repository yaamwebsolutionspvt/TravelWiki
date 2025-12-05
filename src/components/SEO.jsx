import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/seo.js';
import {
  generateTitle,
  generateMetaDescription,
  SEO_KEYWORDS,
  validateSEOPage
} from '../utils/seoUtils.jsx';

const inferPageTypeFromPath = (pathname) => {
  if (!pathname || pathname === '/') return 'home';
  if (pathname.includes('/kashmirtourpackages')) return 'packages';
  if (pathname.includes('honeymoon')) return 'honeymoon';
  if (pathname.includes('family')) return 'family';
  if (pathname.includes('adventure')) return 'adventure';
  if (pathname.includes('cultural')) return 'cultural';
  if (pathname.includes('ladakh')) return 'ladakh';
  if (pathname.includes('srinagar')) return 'srinagar';
  if (pathname.includes('gulmarg')) return 'gulmarg';
  if (pathname.includes('pahalgam')) return 'pahalgam';
  if (pathname.includes('sonamarg')) return 'sonamarg';
  return 'home';
};

const buildCanonical = (baseUrl, pathname) => {
  const path = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${baseUrl}${path}`;
};

const SEO = ({
  pageType = 'home',
  customTitle = '',
  customDescription = '',
  customKeywords = [],
  customImage = '',
  headingManager = null,
  children
}) => {
  const location = useLocation();
  const inferredPageType = pageType || inferPageTypeFromPath(location?.pathname);
  // Get keywords for the page type
  const pageKeywords = SEO_KEYWORDS[inferredPageType] || SEO_KEYWORDS.home;

  // Generate title and description
  const title = customTitle || generateTitle(inferredPageType, Object.values(pageKeywords));
  const description = customDescription || generateMetaDescription(inferredPageType, Object.values(pageKeywords));

  // Combine custom keywords with page-specific keywords
  const allKeywords = [...Object.values(pageKeywords), ...customKeywords];

  // Validate SEO structure if heading manager is provided
  if (headingManager) {
    const validation = validateSEOPage(headingManager, pageType);
    if (!validation.isValid) {
      // SEO validation issues detected
    }
  }

  // Default image
  const image = customImage || siteConfig.defaultImage;

  // Canonical URL (absolute, no query/hash)
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, '');
  const canonicalUrl = buildCanonical(baseUrl, location?.pathname || '/');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Travel Wiki - Kashmir Tourism" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@travel_wikiofficial" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Travel Wiki" />
      <meta name="copyright" content="Travel Wiki 2025" />

      {/* Location and Business Meta Tags */}
      <meta name="geo.region" content="IN-JK" />
      <meta name="geo.placename" content="Srinagar, Kashmir, India" />
      <meta name="geo.position" content="34.0837;74.7973" />
      <meta name="ICBM" content="34.0837, 74.7973" />

      {/* Business Schema Meta Tags */}
      <meta name="business:contact:phone" content="+91 8899971960" />
      <meta name="business:contact:email" content="info@travelwiki.org.in" />
      <meta name="business:contact:address" content="Srinagar, Kashmir, India" />

      {/* Page-specific meta tags based on page type */}
      {inferredPageType === 'home' && (
        <>
          <meta name="page-type" content="homepage" />
          <meta name="primary-keyword" content="Kashmir Tourism" />
        </>
      )}

      {inferredPageType === 'packages' && (
        <>
          <meta name="page-type" content="tour-packages" />
          <meta name="primary-keyword" content="Kashmir Tour Packages" />
        </>
      )}

      {inferredPageType === 'honeymoon' && (
        <>
          <meta name="page-type" content="honeymoon-packages" />
          <meta name="primary-keyword" content="Kashmir Honeymoon Packages" />
        </>
      )}

      {inferredPageType === 'family' && (
        <>
          <meta name="page-type" content="family-packages" />
          <meta name="primary-keyword" content="Kashmir Family Packages" />
        </>
      )}

      {inferredPageType === 'adventure' && (
        <>
          <meta name="page-type" content="adventure-tours" />
          <meta name="primary-keyword" content="Kashmir Adventure Tours" />
        </>
      )}

      {inferredPageType === 'cultural' && (
        <>
          <meta name="page-type" content="cultural-tours" />
          <meta name="primary-keyword" content="Kashmir Cultural Tours" />
        </>
      )}

      {inferredPageType === 'ladakh' && (
        <>
          <meta name="page-type" content="ladakh-packages" />
          <meta name="primary-keyword" content="Ladakh Tour Packages" />
        </>
      )}

      {inferredPageType === 'srinagar' && (
        <>
          <meta name="page-type" content="destination-guide" />
          <meta name="primary-keyword" content="Srinagar Tourism" />
        </>
      )}

      {inferredPageType === 'gulmarg' && (
        <>
          <meta name="page-type" content="destination-guide" />
          <meta name="primary-keyword" content="Gulmarg Tourism" />
        </>
      )}

      {inferredPageType === 'pahalgam' && (
        <>
          <meta name="page-type" content="destination-guide" />
          <meta name="primary-keyword" content="Pahalgam Tourism" />
        </>
      )}

      {inferredPageType === 'sonamarg' && (
        <>
          <meta name="page-type" content="destination-guide" />
          <meta name="primary-keyword" content="Sonamarg Tourism" />
        </>
      )}

      {/* Structured Data for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Travel Wiki",
          "description": "Best Kashmir Tourism Company offering exclusive tour packages",
          "url": "https://travelwiki.org.in",
          "logo": "https://res.cloudinary.com/dw1sh368y/travelwiki/public/logo.png",
          "image": image,
          "telephone": "+91 8899971960",
          "email": "info@travelwiki.org.in",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Srinagar",
            "addressRegion": "Kashmir",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0837,
            "longitude": 74.7973
          },
          "openingHours": "Mo-Su 09:00-18:00",
          "priceRange": "₹₹",
          "currenciesAccepted": "INR",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer",
          "areaServed": ["Kashmir", "Ladakh", "India"],
          "serviceType": [
            "Kashmir Tour Packages",
            "Ladakh Tour Packages",
            "Honeymoon Packages",
            "Family Tours",
            "Adventure Tours",
            "Cultural Tours"
          ],
          "sameAs": [
            "https://www.facebook.com/travelwikiofficial",
            "https://www.instagram.com/travel_wikiofficial/"
          ]
        })}
      </script>

      {/* Additional structured data for current page */}
      {inferredPageType === 'home' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "url": canonicalUrl,
            "mainEntity": {
              "@type": "TravelAgency",
              "name": "Travel Wiki",
              "description": "Best Kashmir Tourism Company"
            }
          })}
        </script>
      )}

      {inferredPageType === 'packages' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Kashmir Tour Packages",
            "description": "Complete list of Kashmir tour packages and holiday deals",
            "url": canonicalUrl,
            "numberOfItems": 50,
            "itemListElement": [
              {
                "@type": "TouristTrip",
                "name": "Kashmir Honeymoon Package",
                "description": "Romantic Kashmir honeymoon package with houseboat stays"
              },
              {
                "@type": "TouristTrip",
                "name": "Kashmir Family Package",
                "description": "Family-friendly Kashmir tour package with activities for all ages"
              },
              {
                "@type": "TouristTrip",
                "name": "Kashmir Adventure Package",
                "description": "Thrilling Kashmir adventure package with outdoor activities"
              }
            ]
          })}
        </script>
      )}

      {/* Site-level WebSite schema with SearchAction */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteConfig.siteName,
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Breadcrumbs based on current path for rich results */}
      {location?.pathname && location.pathname !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": location.pathname
              .split('/')
              .filter(Boolean)
              .map((segment, index, segments) => {
                const url = buildCanonical(baseUrl, '/' + segments.slice(0, index + 1).join('/'));
                return {
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": segment.replace(/-/g, ' '),
                  "item": url
                };
              })
          })}
        </script>
      )}

      {children}
    </Helmet>
  );
};

export default SEO;
