export interface SectionContext {
  duration?: number;
  autoSlide?: boolean;
  slideInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  columns?: number;
  stagger?: number;
  layout?: "centered" | "full-width";
}

export interface Section {
  id: string;
  type: "banner" | "carousel" | "card_list" | "testimonial" | "cta";
  context: SectionContext;
  content_key: string;
}

export interface BannerContent {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

export interface CarouselItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface CarouselContent {
  id: string;
  items: CarouselItem[];
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CardListContent {
  id: string;
  title: string;
  cards: FeatureCard[];
}

export interface TestimonialContent {
  id: string;
  quote: string;
  author: string;
  position: string;
  company?: string;
  image?: string;
}

export interface Button {
  text: string;
  link: string;
}

export interface CTAContent {
  id: string;
  title: string;
  description: string;
  primaryButton?: Button;
  secondaryButton?: Button;
}

export type SectionContent =
  | BannerContent
  | CarouselContent
  | CardListContent
  | TestimonialContent
  | CTAContent;

export interface SectionComponentProps<T = SectionContent> {
  content: T;
  context: SectionContext;
}

export interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface DynamicSectionProps {
  section: Section;
  isLazyLoaded?: boolean;
}
