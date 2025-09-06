import type { BannerContent as BannerContentType } from "@/types/";
import Link from "next/link";

type BannerContentProps = {
  content: BannerContentType;
};

const BannerContent = ({ content }: BannerContentProps) => {
  return (
    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        {content.title}
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
        {content.subtitle}
      </p>

      <Link
        href={content.buttonLink}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
      >
        {content.buttonText}
      </Link>

      <div className="sr-only">Navigate to {content.buttonLink}</div>
    </div>
  );
};

export default BannerContent;
