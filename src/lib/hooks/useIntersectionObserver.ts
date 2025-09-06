import { useState, useEffect, useRef, RefObject } from "react";
import type { UseIntersectionObserverOptions } from "../../types";

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [RefObject<HTMLDivElement>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [hasIntersected, setHasIntersected] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // checking if it is visible in the viewport & updating the state accordingly.
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting && options.triggerOnce && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || "0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [
    options.threshold,
    options.rootMargin,
    options.triggerOnce,
    hasIntersected,
  ]);

  return [ref, options.triggerOnce ? hasIntersected : isIntersecting];
}
