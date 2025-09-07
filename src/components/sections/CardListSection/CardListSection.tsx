"use client";

import Card from "@/components/compoundComponents/Card";
import type {
  CardListContent,
  FeatureCard,
  SectionComponentProps,
} from "../../../types";
import Section from "@/components/compoundComponents/Section";

export default function CardListSection({
  content,
  context,
}: SectionComponentProps<CardListContent>) {
  const cards: FeatureCard[] = content?.cards || [];

  if (!cards.length) return null;

  const gridCols =
    context?.columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3 lg:grid-cols-4";

  return (
    <Section>
      <Section.Wrapper>
        {content.title && <Section.Title>{content.title}</Section.Title>}

        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {cards.map((card, index) => (
            <Card key={index}>
              <Card.Icon>{card.icon}</Card.Icon>

              <Card.Title className="text-xl font-bold text-gray-900 mb-3 text-center">
                {card.title}
              </Card.Title>

              <Card.Desc>{card.description}</Card.Desc>

              {card.features && card.features.length > 0 && (
                <Card.Features>
                  {card.features.map((feature, featureIndex) => (
                    <Card.Feature key={featureIndex}>{feature}</Card.Feature>
                  ))}
                </Card.Features>
              )}
            </Card>
          ))}
        </div>
      </Section.Wrapper>
    </Section>
  );
}
