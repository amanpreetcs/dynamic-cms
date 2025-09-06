"use client";

import { useState, useEffect } from "react";
import DynamicSection from "./DynamicSection";
import LoadingSkeleton from "./ui/LoadingSkeleton";
import type { Section } from "../types";
import axios from "axios";

export default function DynamicPageRenderer() {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URI}/sections`
      );
      if (!data) throw new Error("Unknown error occurred");

      const sectionsData: Section[] = data.data;

      if (!Array.isArray(sectionsData)) {
        throw new Error("Invalid sections data format");
      }

      setSections(sectionsData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      console.error("Error fetching sections:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div
            className="text-red-500 text-6xl mb-4"
            role="img"
            aria-label="Warning"
          >
            ⚠️
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Unable to Load Content
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchSections}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (sections.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No Content Available
          </h2>
          <p className="text-gray-600">No sections have been configured yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sections-container">
      {sections.map((section, index) => (
        <DynamicSection
          key={section.id}
          section={section}
          isLazyLoaded={index >= 2}
        />
      ))}
    </div>
  );
}
