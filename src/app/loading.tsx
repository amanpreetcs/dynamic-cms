import { JSX } from "react";

export default function Loading(): JSX.Element {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
