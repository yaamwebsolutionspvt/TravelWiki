import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Analytics Component
 * Handles Google Analytics, Facebook Pixel, and other tracking scripts
 * Using Google Analytics 4 (GA4) for better tracking and insights
 */
const Analytics = () => {
  // Default GA4 ID for TravelWiki - can be overridden via environment variable
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
  const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID;
  const GTM_ID = import.meta.env.VITE_GTM_ID;

  return (
    <Helmet>
      {/* Defer all analytics to idle to avoid impacting LCP */}
      <script>
        {`
          (function(){
            var GA_ID = ${JSON.stringify(GA_MEASUREMENT_ID || '')};
            var GTM_ID = ${JSON.stringify(GTM_ID || '')};
            var FB_ID = ${JSON.stringify(FB_PIXEL_ID || '')};
            function loadScript(src){
              var s=document.createElement('script');
              s.async=true; s.src=src; document.head.appendChild(s);
            }
            function init(){
              if (GA_ID && GA_ID !== 'G-XXXXXXXXXX') {
                loadScript('https://www.googletagmanager.com/gtag/js?id='+GA_ID);
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', GA_ID, { 
                  anonymize_ip: true, 
                  cookie_flags: 'SameSite=None;Secure',
                  send_page_view: true,
                  page_title: document.title,
                  page_location: window.location.href
                });
              }
              if (GTM_ID) {
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer',GTM_ID);
              }
              if (FB_ID) {
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
                window.fbq && window.fbq('init', FB_ID) && window.fbq('track','PageView');
              }
            }
            if ('requestIdleCallback' in window) requestIdleCallback(init, { timeout: 3000 });
            else setTimeout(init, 1500);
          })();
        `}
      </script>

      {/* Schema.org for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://travelwiki.org.in/#localbusiness",
          "name": "Kashmir Tourism - Travel Wiki",
          "description": "Leading Kashmir tourism company providing authentic travel experiences across the Kashmir Valley with expert local guides and premium accommodations.",
          "url": "https://travelwiki.org.in",
          "telephone": "+91-8899971960",
          "email": "info@travelwiki.org.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Near SumoStand, Near HDFC Bank",
            "addressLocality": "Bijbihara",
            "addressRegion": "Jammu & Kashmir",
            "postalCode": "190001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.8339",
            "longitude": "75.1582"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/travelwikiofficiall",
            "https://www.instagram.com/travel_wikiofficial/"
          ],
          "priceRange": "$$",
          "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI"],
          "currenciesAccepted": "INR",
          "areaServed": {
            "@type": "Place",
            "name": "Kashmir Valley, Jammu & Kashmir, India"
          }
        })}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://travelwiki.org.in/"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default Analytics;
