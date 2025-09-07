import { useState, useEffect, useRef, RefObject } from "react";
import type { UseIntersectionObserverOptions } from "../../types";

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [RefObject<HTMLDivElement | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [hasIntersected, setHasIntersected] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting && options.triggerOnce && !hasIntersected) {
          setHasIntersected(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold ?? 0,
        rootMargin: options.rootMargin ?? "0px",
      }
    );

    observer.observe(element);

    return () => {
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
