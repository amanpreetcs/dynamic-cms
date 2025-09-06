import type { PropsWithChildren } from "react";

type SectionTitleProps = PropsWithChildren<{
  className?: string;
}>;

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <div className={`text-center mb-12 ${className ?? ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
