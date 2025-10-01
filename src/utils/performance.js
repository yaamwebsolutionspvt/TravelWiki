// Performance optimization utilities

// Debounce function to limit function calls
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function to limit function execution rate
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Image lazy loading helper
export const lazyLoadImage = (imgElement, src) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = createIntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    imageObserver.observe(imgElement);
  } else {
    // Fallback for older browsers
    imgElement.src = src;
  }
};

// Preload critical resources
export const preloadResource = (href, as = 'fetch') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch non-critical resources
export const prefetchResource = (href) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  return result;
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = performance.memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576 * 100) / 100,
      total: Math.round(memory.totalJSHeapSize / 1048576 * 100) / 100,
      limit: Math.round(memory.jsHeapSizeLimit / 1048576 * 100) / 100
    };
  }
  return null;
};

// Optimize images based on device pixel ratio with better compression
export const getOptimizedImageUrl = (baseUrl, width, height) => {
  const pixelRatio = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
  const optimizedWidth = width ? Math.round(width * pixelRatio) : undefined;
  const optimizedHeight = height ? Math.round(height * pixelRatio) : undefined;

  if (typeof baseUrl !== 'string') return baseUrl;

  // Cloudinary optimization: automatic format and quality, DPR-aware, crop to fit when size provided
  if (baseUrl.includes('res.cloudinary.com') || baseUrl.includes('cloudinary.com')) {
    const hasUpload = baseUrl.includes('/upload/');
    const transformParts = ['f_auto', 'q_auto:best']; // Use best quality for better compression
    if (optimizedWidth) transformParts.push(`w_${optimizedWidth}`);
    if (optimizedHeight) transformParts.push(`h_${optimizedHeight}`);
    if (optimizedWidth && optimizedHeight) transformParts.push('c_fill');
    // Add DPR optimization
    if (pixelRatio > 1) {
      transformParts.push(`dpr_${pixelRatio}`);
    }
    const transform = transformParts.join(',');

    if (hasUpload) {
      return baseUrl.replace('/upload/', `/upload/${transform}/`);
    }
    // If URL lacks /upload/, try to inject it after the version segment
    return baseUrl.replace(/(\/image\/)(v\d+\/)?/, (_, seg, ver) => `${seg}${ver || ''}${transform}/`);
  }

  return baseUrl;
};

// Generate responsive srcset for Cloudinary images using widths list
export const generateSrcSet = (baseUrl, widths = [320, 480, 640, 768, 1024, 1280, 1536]) => {
  if (typeof baseUrl !== 'string') return undefined;
  const isCloudinary = baseUrl.includes('res.cloudinary.com') || baseUrl.includes('cloudinary.com');
  if (!isCloudinary) return undefined;
  const entries = widths.map(w => {
    const url = getOptimizedImageUrl(baseUrl, w, undefined);
    return `${url} ${w}w`;
  });
  return entries.join(', ');
};

// Cache management
export const cacheData = (key, data, ttl = 300000) => { // 5 minutes default
  const item = {
    data,
    timestamp: Date.now(),
    ttl
  };
  try {
    localStorage.setItem(key, JSON.stringify(item));
  } catch (e) {
    // Failed to cache data
  }
};

export const getCachedData = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    const { data, timestamp, ttl } = JSON.parse(item);
    if (Date.now() - timestamp > ttl) {
      localStorage.removeItem(key);
      return null;
    }
    
    return data;
  } catch (e) {
    return null;
  }
};

// Service Worker registration helper
export const registerServiceWorker = async (swPath) => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(swPath);
      return registration;
    } catch (error) {
      return null;
    }
  }
  return null;
};

// Critical CSS inlining helper
export const inlineCriticalCSS = (css) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Resource hints for better performance
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//res.cloudinary.com' },
    { rel: 'preconnect', href: 'https://res.cloudinary.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    document.head.appendChild(link);
  });
};
