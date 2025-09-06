import React from "react";

type HeaderMenuProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

const HeaderMenu = ({ toggleMenu, isMenuOpen }: HeaderMenuProps) => {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded focus:ring-2 focus:ring-blue-500"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default HeaderMenu;
