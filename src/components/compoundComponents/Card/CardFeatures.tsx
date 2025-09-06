import React, { PropsWithChildren } from "react";

type CardFeaturesProps = PropsWithChildren<{
  className?: string;
}>;

const CardFeatures = ({ children, className }: CardFeaturesProps) => {
  return <ul className={`space-y-2 ${className ?? ""}`}>{children}</ul>;
};

export default CardFeatures;
