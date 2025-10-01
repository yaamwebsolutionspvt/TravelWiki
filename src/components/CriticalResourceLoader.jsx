import React, { useEffect } from 'react';

/**
 * Critical Resource Loader Component
 * Handles critical resource loading and optimization
 */
const CriticalResourceLoader = () => {
  useEffect(() => {
    // Preload critical resources after initial render
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/src/index.css';
      criticalCSS.as = 'style';
      criticalCSS.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
      };
      document.head.appendChild(criticalCSS);

      // Preload critical JavaScript chunks (only in development)
      if (import.meta.env.DEV) {
        const criticalJS = document.createElement('link');
        criticalJS.rel = 'preload';
        criticalJS.href = '/src/main.jsx';
        criticalJS.as = 'script';
        document.head.appendChild(criticalJS);
      }
    };

    // Load critical resources after a short delay to not block initial render
    const timeoutId = setTimeout(preloadCriticalResources, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return null;
};

export default CriticalResourceLoader;
