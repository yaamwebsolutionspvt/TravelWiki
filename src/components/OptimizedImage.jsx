import React, { useState, useEffect, useRef, useMemo } from 'react';
import { lazyLoadImage, getOptimizedImageUrl, generateSrcSet } from '../utils/performance';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Memoize the optimized image URL
  const optimizedSrc = useMemo(() => {
    if (width && height) {
      return getOptimizedImageUrl(src, width, height);
    }
    return src;
  }, [src, width, height]);

  const srcSet = useMemo(() => {
    if (width && height) {
      // Generate more appropriate sizes based on actual display dimensions
      const displayWidth = Math.min(width, 1920); // Cap at reasonable max
      // Desktop-optimized breakpoints
      const widths = [320, 480, 640, 768, 1024, 1280, 1536, 1920].filter(w => w <= displayWidth);
      return generateSrcSet(src, widths);
    }
    // Default responsive breakpoints for desktop
    return generateSrcSet(src, [320, 480, 640, 768, 1024, 1280, 1536, 1920]);
  }, [src, width, height]);

  useEffect(() => {
    if (loading === 'lazy' && imgRef.current) {
      lazyLoadImage(imgRef.current, optimizedSrc);
    } else {
      setImageSrc(optimizedSrc);
    }
  }, [optimizedSrc, loading]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    setImageSrc(optimizedSrc);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    setImageSrc(placeholder);
    onError?.(e);
  };

  const imageClasses = [
    className,
    isLoaded ? 'opacity-100' : 'opacity-0',
    'transition-opacity duration-300'
  ].filter(Boolean).join(' ');

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      srcSet={srcSet}
      sizes={width ? `${width}px` : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      alt={alt}
      width={width}
      height={height}
      className={imageClasses}
      loading={loading}
      decoding={decoding}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        // backgroundColor: '#f3f4f6',
        ...(width && height && { aspectRatio: `${width}/${height}` }),
        objectFit: 'cover'
      }}
      {...props}
    />
  );
};

export default OptimizedImage;
