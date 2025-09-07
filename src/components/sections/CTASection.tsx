"use client";

import Link from "next/link";
import type { CTAContent, SectionComponentProps } from "../../types";
import Section from "../compoundComponents/Section";

export default function CTASection({
  content,
  context,
}: SectionComponentProps<CTAContent>) {
  const isFullWidth = context?.layout === "full-width";
  const containerClass = isFullWidth ? "w-full" : "max-w-4xl mx-auto";

  return (
    <Section
      className={`${
        isFullWidth
          ? "bg-gradient-to-r from-blue-600 to-purple-600"
          : "bg-gray-900"
      }`}
    >
      <div className={`${containerClass} px-4`}>
        <div className={`text-center transition-all duration-1000`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {content.title}
          </h2>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {content.primaryButton && (
              <Link
                href={content.primaryButton.link}
                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                {content.primaryButton.text}
              </Link>
            )}

            {content.secondaryButton && (
              <Link
                href={content.secondaryButton.link}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                {content.secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
