"use client";

import { useState, useEffect, lazy, Suspense, useCallback } from "react";
import { useIntersectionObserver } from "../lib/hooks/useIntersectionObserver";
import LoadingSkeleton from "./ui/LoadingSkeleton";
import type {
  DynamicSectionProps,
  SectionContext,
  SectionTypeMap,
} from "../types";
import axios from "axios";

const BannerSection = lazy(
  () => import("./sections/BannerSection/BannerSection")
);
const CarouselSection = lazy(
  () => import("./sections/CarouselSection/CarouselSection")
);
const CardListSection = lazy(
  () => import("./sections/CardListSection/CardListSection")
);
const TestimonialSection = lazy(() => import("./sections/TestimonialSection"));
const CTASection = lazy(() => import("./sections/CTASection"));

const sectionComponents: {
  [K in keyof SectionTypeMap]: React.ComponentType<{
    content: SectionTypeMap[K];
    context?: SectionContext;
    sectionId: string;
  }>;
} = {
  banner: BannerSection,
  carousel: CarouselSection,
  card_list: CardListSection,
  testimonial: TestimonialSection,
  cta: CTASection,
};

export default function DynamicSection<T extends keyof SectionTypeMap>({
  section,
  isLazyLoaded = false,
}: DynamicSectionProps<T>) {
  const [content, setContent] = useState<SectionTypeMap[T] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URI}/content/${section.content_key}`
      );

      if (!data?.success) {
        throw new Error(
          data?.message ?? `No content found for key: ${section.content_key}`
        );
      }

      setContent(data.data as SectionTypeMap[T]);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      console.error("Error fetching content:", err);
    } finally {
      setLoading(false);
    }
  }, [section.content_key]);

  useEffect(() => {
    if (!isLazyLoaded || isIntersecting) {
      fetchContent();
    }
  }, [isLazyLoaded, isIntersecting, fetchContent]);

  const SectionComponent = sectionComponents[
    section.type
  ] as React.ComponentType<{
    content: SectionTypeMap[T];
    context?: SectionContext;
    sectionId: string;
  }>;

  if (loading) {
    return (
      <div ref={isLazyLoaded ? ref : null}>
        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div ref={isLazyLoaded ? ref : null} className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
            <strong>Warning:</strong> Failed to load {section.type} section:{" "}
            {error}
            <button
              onClick={fetchContent}
              className="ml-4 text-yellow-800 underline hover:no-underline"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div ref={isLazyLoaded ? ref : null} className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded">
            No content available for this section.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={isLazyLoaded ? ref : null}
      className={`section section--${section.type}`}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        <SectionComponent
          content={content}
          context={section.context}
          sectionId={section.id}
        />
      </Suspense>
    </div>
  );
}
