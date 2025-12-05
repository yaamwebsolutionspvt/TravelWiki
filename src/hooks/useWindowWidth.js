import { useState, useEffect } from 'react';

// A custom hook to get and subscribe to window width changes
const useWindowWidth = () => {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    // Cleanup function to remove the listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this runs only once on mount

  return width;
};

export default useWindowWidth;