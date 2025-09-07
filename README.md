# Dynamic CMS

A Next.js 15 + React 19 project for a dynamic content management system. Sections like banners, carousels, card lists, testimonials, and CTAs are fetched dynamically and lazy-loaded using Intersection Observer.

## Features

- Dynamic sections: Banner, Carousel, Card List, Testimonial, CTA
- Lazy-loading with Intersection Observer
- TypeScript support
- Tailwind CSS v4 styling
- Axios for API calls
- Turbopack support

## Installation

```bash
git clone https://github.com/amanpreetcs/dynamic-cms.git
cd dynamic-cms
npm install
```

## Running Locally

```bash
# Start development server on port 3003
npm run dev
```

## Building for Production

```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env` file with the following:

```
NEXT_PUBLIC_API_BASE_URI=http://localhost:3003/api/v1
```

## Usage

Sections are loaded dynamically using the `DynamicSection` component:

```tsx
<DynamicSection
  section={{ id: "banner_1", type: "banner", content_key: "banner_1" }}
  isLazyLoaded={true}
/>
```

## License

MIT
