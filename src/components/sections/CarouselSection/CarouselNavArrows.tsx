import React from "react";

type CarouselNavArrowsProps = {
  nextSlide: VoidFunction;
  prevSlide: VoidFunction;
};
const CarouselNavArrows = ({
  nextSlide,
  prevSlide,
}: CarouselNavArrowsProps) => {
  return (
    <>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-900 p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-900 p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </>
  );
};

export default CarouselNavArrows;
