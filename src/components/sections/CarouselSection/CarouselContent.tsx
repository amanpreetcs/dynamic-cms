import type { CarouselContent } from "@/types";
import React from "react";

type CarouselContentProps = {
  item: CarouselContent["items"][number];
  isPriority?: boolean;
};

const CarouselContent = ({ item }: CarouselContentProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h3>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">{item.description}</p>
        <a
          href={item.link}
          className="inline-block bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CarouselContent;
