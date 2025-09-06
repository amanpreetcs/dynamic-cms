import React, { PropsWithChildren } from "react";

type CardTitleProps = PropsWithChildren<{
  className?: string;
}>;

const CardTitle = ({ className, children }: CardTitleProps) => {
  return (
    <h3
      className={`text-xl font-bold text-gray-900 mb-3 text-center ${
        className ?? ""
      }`}
    >
      {children}
    </h3>
  );
};

export default CardTitle;
