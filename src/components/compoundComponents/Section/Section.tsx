import type { PropsWithChildren } from "react";
import SectionTitle from "./SectionTitle";
import SectionWrapper from "./SectionWrapper";

type SectionProps = PropsWithChildren<{
  className?: string;
  noPadding?: boolean;
}>;

const Section = ({ children, className, noPadding = false }: SectionProps) => {
  return (
    <section className={`${noPadding ? "" : "py-16"} ${className}`}>
      {children}
    </section>
  );
};

Section.Wrapper = SectionWrapper;
Section.Title = SectionTitle;

export default Section;
