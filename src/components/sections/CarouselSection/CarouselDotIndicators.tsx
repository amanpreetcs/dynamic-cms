import { CarouselContent } from "@/types";
import React from "react";

type CarouselDotIndicatorsProps = {
  items: CarouselContent["items"];
  goToSlide: (index: number) => void;
  currentSlide: number;
};

const CarouselDotIndicators = ({
  items,
  goToSlide,
  currentSlide,
}: CarouselDotIndicatorsProps) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {items.map((_, index: number) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            currentSlide === index ? "bg-white" : "bg-white opacity-50"
          }`}
        />
      ))}
    </div>
  );
};

export default CarouselDotIndicators;
