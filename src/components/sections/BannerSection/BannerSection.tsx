"use client";

import Image from "next/image";
import type {
  BannerContent as BannerContentType,
  SectionComponentProps,
} from "../../../types";
import BannerScrollIndicator from "./BannerScrollIndicator";
import BannerContent from "./BannerContentComp";
import Section from "@/components/compoundComponents/Section";

interface BannerSectionProps extends SectionComponentProps<BannerContentType> {}

export default function BannerSection({ content }: BannerSectionProps) {
  return (
    <Section
      noPadding
      className={`relative min-h-screen flex items-center justify-center`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={content.backgroundImage}
          alt="Banner Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority={true}
          quality={85}
        />
        <div
          className="absolute inset-0 bg-black opacity-40"
          aria-hidden="true"
        ></div>
      </div>

      <BannerContent content={content} />

      <BannerScrollIndicator />
    </Section>
  );
}
