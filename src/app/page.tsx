import { Metadata } from "next";
import DynamicPageRenderer from "../components/DynamicPageRenderer";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Experience the power of dynamic content management with our modern platform",
};

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <DynamicPageRenderer />
      </main>
      <Footer />
    </div>
  );
}
