"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { useIntersectionObserver } from "../lib/hooks/useIntersectionObserver";
import LoadingSkeleton from "./ui/LoadingSkeleton";
import type { DynamicSectionProps, SectionContent } from "../types";
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

const sectionComponents = {
  banner: BannerSection,
  carousel: CarouselSection,
  card_list: CardListSection,
  testimonial: TestimonialSection,
  cta: CTASection,
} as const;

export default function DynamicSection({
  section,
  isLazyLoaded = false,
}: DynamicSectionProps) {
  const [content, setContent] = useState<SectionContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // For lazy loading using Intersection Observer
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!isLazyLoaded || isIntersecting) {
      fetchContent();
    }
  }, [isLazyLoaded, isIntersecting, section.content_key]);

  const fetchContent = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URI}/content/${section.content_key}`
      );

      if (!data) {
        throw new Error(`Failed to fetch content`);
      } else if (!data.success && data.message.includes("NoContentFound")) {
        throw new Error(`No content found for key: ${section.content_key}`);
      }

      const contentData: SectionContent = data.data;
      setContent(contentData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      console.error("Error fetching content:", err);
    } finally {
      setLoading(false);
    }
  };

  const SectionComponent = sectionComponents[section.type];

  if (!SectionComponent) {
    return null;
  }

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
