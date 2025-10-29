import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Performance Optimizer Component
 * Handles resource hints, preloading, and performance optimizations
 */
const PerformanceOptimizer = () => {
  return (
    <Helmet>
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      <link rel="dns-prefetch" href="//platform.twitter.com" />
      <link rel="dns-prefetch" href="//www.instagram.com" />

      {/* Preconnect to critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* Resource hints for better loading */}
      
      {/* Critical CSS preload (if you have critical CSS) */}
      {/* <link rel="preload" href="/critical.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" /> */}

      {/* Performance and security headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Prevent FOUC (Flash of Unstyled Content) */}
      {/* Note: Do NOT hide the entire HTML by default; this caused a blank screen if DOMContentLoaded already fired before this script mounted. */}
      <style>{`
        /* Start visible by default; apply a quick fade-in once loaded class is present */
        html { visibility: visible; opacity: 1; }
        html.loaded { visibility: visible; opacity: 1; }
      `}</style>

      {/* Ensure 'loaded' class is added whether or not DOMContentLoaded has already fired */}
      <script>{`
        (function() {
          function setLoaded(){
            try { document.documentElement.classList.add('loaded'); } catch(_) {}
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setLoaded);
          } else {
            setLoaded();
          }
        })();
      `}</script>
    </Helmet>
  );
};

export default PerformanceOptimizer;
