import React from "react";

type CarouselPlayButtonProps = {
  togglePlayPause: VoidFunction;
  isPlaying: boolean;
};

const CarouselPlayButton = ({
  togglePlayPause,
  isPlaying,
}: CarouselPlayButtonProps) => {
  return (
    <button
      onClick={togglePlayPause}
      className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-900 p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {isPlaying ? (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
};

export default CarouselPlayButton;
