import { CarouselContent } from "@/types";
import Image from "next/image";
import React from "react";

type CarouselImageProps = {
  item: CarouselContent["items"][number];
  isPriority?: boolean;
};

const CarouselImage = ({ item, isPriority }: CarouselImageProps) => {
  return (
    <div className="relative h-96 md:h-[500px]">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover"
        priority={isPriority}
      />
      <div
        className="absolute inset-0 bg-black opacity-40"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default CarouselImage;
