import React, { PropsWithChildren } from "react";

type CardIconProps = PropsWithChildren<{
  className?: string;
}>;

const CardIcon = ({ className, children }: CardIconProps) => {
  return (
    <div className={`text-4xl mb-4 text-center ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default CardIcon;
