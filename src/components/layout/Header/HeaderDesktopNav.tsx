import React from "react";

const HeaderDesktopNav = () => {
  return (
    <nav
      className="hidden md:flex space-x-8"
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="#home"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
      >
        Home
      </a>
      <a
        href="#features"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
      >
        Features
      </a>
      <a
        href="#about"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
      >
        About
      </a>
      <a
        href="#contact"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
      >
        Contact
      </a>
    </nav>
  );
};

export default HeaderDesktopNav;
