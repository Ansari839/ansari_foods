'use client'
import { useState, useEffect, useRef } from 'react';

export const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // Stops observing after the first time the section is visible
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer && observer.unobserve) observer.unobserve(ref.current);
    };
  }, [options]);

  return [isInView, ref];
};
