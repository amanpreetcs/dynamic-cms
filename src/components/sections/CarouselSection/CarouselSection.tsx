"use client";

import { useState, useEffect, useRef } from "react";
import type {
  CarouselContent as CarouselContentType,
  CarouselItem,
  SectionComponentProps,
} from "../../../types";
import Section from "@/components/compoundComponents/Section";
import CarouselImage from "./CarouselImage";
import CarouselContent from "./CarouselContent";
import CarouselNavArrows from "./CarouselNavArrows";
import CarouselPlayButton from "./CarouselPlayButton";
import CarouselDotIndicators from "./CarouselDotIndicators";

interface CarouselSectionProps
  extends SectionComponentProps<CarouselContentType> {}

export default function CarouselSection({
  content,
  context,
}: CarouselSectionProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const items: CarouselItem[] = content?.items || [];

  useEffect(() => {
    if (context?.autoSlide && items.length > 1 && isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % items.length);
      }, context.slideInterval || 3000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [context, items.length, isPlaying]);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const togglePlayPause = (): void => {
    setIsPlaying(!isPlaying);
  };

  if (!items.length) return <></>;

  return (
    <Section className="bg-gray-50">
      <Section.Wrapper>
        <div
          className="relative overflow-hidden rounded-lg shadow-lg focus-within:ring-2 focus-within:ring-blue-500"
          tabIndex={0}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <CarouselImage item={item} isPriority={index === 0} />

                <CarouselContent item={item} />
              </div>
            ))}
          </div>

          {context?.showArrows && items.length > 1 && (
            <CarouselNavArrows nextSlide={nextSlide} prevSlide={prevSlide} />
          )}

          {context?.autoSlide && (
            <CarouselPlayButton
              togglePlayPause={togglePlayPause}
              isPlaying={isPlaying}
            />
          )}

          {context?.showDots && items.length > 1 && (
            <CarouselDotIndicators
              items={items}
              currentSlide={currentSlide}
              goToSlide={goToSlide}
            />
          )}
        </div>
      </Section.Wrapper>
    </Section>
  );
}
