import React, { PropsWithChildren } from "react";

type CardDescProps = PropsWithChildren<{
  className?: string;
}>;

const CardDesc = ({ children, className }: CardDescProps) => {
  return (
    <p className={`text-gray-600 mb-4 text-center ${className ?? ""}`}>
      {children}
    </p>
  );
};

export default CardDesc;
