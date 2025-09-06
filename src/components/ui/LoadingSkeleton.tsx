import { FC } from "react";

interface SkeletonProps {
  className?: string;
  "aria-label"?: string;
}

const Skeleton: FC<SkeletonProps> = ({
  className = "",
  "aria-label": ariaLabel,
}) => (
  <div
    className={`animate-pulse bg-gray-300 rounded ${className}`}
    aria-label={ariaLabel}
    role="status"
  />
);

const LoadingSkeleton: FC = () => {
  return (
    <div className="animate-pulse" role="status" aria-label="Loading content">
      {/* Header Skeleton */}
      <Skeleton className="h-16 mb-4" aria-label="Loading header" />

      {/* Hero Section Skeleton */}
      <Skeleton
        className="h-96 mb-8 rounded-lg"
        aria-label="Loading hero section"
      />

      {/* Content Sections Skeleton */}
      <div className="space-y-8 px-4 max-w-6xl mx-auto">
        {/* Section 1 */}
        <section aria-label="Loading feature section">
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/2 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }, (_, i) => (
                <article key={i} className="space-y-3">
                  <Skeleton className="h-48 rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section aria-label="Loading testimonial section">
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/3 mx-auto" />
            <Skeleton className="h-32 rounded-lg" />
          </div>
        </section>

        {/* Section 3 */}
        <section aria-label="Loading statistics section">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <article key={i} className="space-y-3 text-center">
                <Skeleton className="h-12 w-12 rounded-full mx-auto" />
                <Skeleton className="h-6 w-2/3 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Skeleton */}
      <Skeleton className="h-64 mt-16" aria-label="Loading footer" />
    </div>
  );
};

export default LoadingSkeleton;
