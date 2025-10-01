import React, { useEffect } from 'react';

/**
 * Performance Monitor Component
 * Tracks Core Web Vitals and performance metrics
 */
const PerformanceMonitor = () => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Track LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            // LCP tracked
            
            // Send to analytics if needed
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(lastEntry.startTime),
                event_category: 'Web Vitals'
              });
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          // LCP tracking failed
        }

        // Track FID (First Input Delay)
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              // FID tracked
              
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  name: 'FID',
                  value: Math.round(entry.processingStart - entry.startTime),
                  event_category: 'Web Vitals'
                });
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (error) {
          // FID tracking failed
        }

        // Track CLS (Cumulative Layout Shift)
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            // CLS tracked
            
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'CLS',
                value: Math.round(clsValue * 1000),
                event_category: 'Web Vitals'
              });
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          // CLS tracking failed
        }
      }
    };

    // Track page load performance
    const trackPageLoad = () => {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0];
          if (navigation) {
            const metrics = {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
              firstByte: navigation.responseStart - navigation.fetchStart,
              domInteractive: navigation.domInteractive - navigation.fetchStart
            };
            
            // Page load metrics tracked
            
            if (window.gtag) {
              window.gtag('event', 'page_load_metrics', {
                dom_content_loaded: Math.round(metrics.domContentLoaded),
                load_complete: Math.round(metrics.loadComplete),
                total_load_time: Math.round(metrics.totalLoadTime),
                first_byte: Math.round(metrics.firstByte),
                dom_interactive: Math.round(metrics.domInteractive),
                event_category: 'Performance'
              });
            }
          }
        }, 0);
      });
    };

    // Initialize tracking
    trackWebVitals();
    trackPageLoad();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
