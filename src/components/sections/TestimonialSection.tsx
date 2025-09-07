"use client";

import Image from "next/image";
import type { SectionComponentProps, TestimonialContent } from "../../types";
import Section from "../compoundComponents/Section";

export default function TestimonialSection({
  content,
  context,
}: SectionComponentProps<TestimonialContent>) {
  const layoutClass =
    context?.layout === "centered" ? "text-center" : "text-left";

  return (
    <Section className="bg-gray-50">
      <Section.Wrapper>
        <div className={`${layoutClass}`}>
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
            <span>&quot;</span>
            {content.quote}
            <span>&quot;</span>
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
                      O&#771;
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
