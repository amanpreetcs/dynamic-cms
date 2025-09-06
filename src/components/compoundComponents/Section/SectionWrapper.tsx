import type { PropsWithChildren } from "react";

type SectionWrapperProps = PropsWithChildren<{
  className?: string;
}>;

const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 ${className}`}>{children}</div>
  );
};

export default SectionWrapper;
