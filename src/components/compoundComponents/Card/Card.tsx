import React, { PropsWithChildren } from "react";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";
import CardFeatures from "./CardFeatures";
import CardFeature from "./CardFeature";
import CardIcon from "./CardIcon";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

const Card = ({ children, className }: CardProps) => {
  return (
    <article
      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 ${
        className ?? ""
      } `}
    >
      {children}
    </article>
  );
};

Card.Title = CardTitle;
Card.Desc = CardDesc;
Card.Features = CardFeatures;
Card.Feature = CardFeature;
Card.Icon = CardIcon;

export default Card;
