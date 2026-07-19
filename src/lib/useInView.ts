import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Only trigger animation once
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        setIsInView(true);
        // Unobserve to prevent further checks
        observer.unobserve(entry.target);
      }
    }, {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isInView };
}
