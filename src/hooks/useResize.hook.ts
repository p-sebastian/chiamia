import { useState, useEffect } from 'react';

export const useResize = () => {
  const [dimensions, setDimensions] =
    useState ({ width: 0, height: 0 });

  useEffect (() => {
    const handleResize = () =>
      setDimensions ({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener ('resize', handleResize);
      setDimensions ({ width: window.innerWidth, height: window.innerHeight });
    return () => window.removeEventListener ('resize', handleResize);
  }, []);

  return dimensions;
};
