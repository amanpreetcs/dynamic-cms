"use client";

import Image from "next/image";
import type { SectionComponentProps, TestimonialContent } from "../../types";
import Section from "../compoundComponents/Section";

interface TestimonialSectionProps
  extends SectionComponentProps<TestimonialContent> {}

export default function TestimonialSection({
  content,
  context,
}: TestimonialSectionProps) {
  const layoutClass =
    context?.layout === "centered" ? "text-center" : "text-left";

  return (
    <Section className="bg-gray-50">
      <Section.Wrapper>
        <div className={`${layoutClass}`}>
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
            <span>"</span>
            {content.quote}
            <span>"</span>
          </blockquote>

          <div
            className={`flex items-center ${
              context?.layout === "centered" ? "justify-center" : ""
            }`}
          >
            {content.image && (
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image
                  src={content.image}
                  alt={`Portrait of ${content.author}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            )}

            <div>
              <cite className="font-semibold text-gray-900 text-lg not-italic">
                {content.author}
              </cite>
              <div className="text-gray-600">
                <span>{content.position}</span>
                {content.company && (
                  <>
                    <span className="mx-1" aria-hidden="true">
                      •
                    </span>
                    <span>{content.company}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section.Wrapper>
    </Section>
  );
}
