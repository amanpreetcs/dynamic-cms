"use client";

import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderDesktopNav from "./HeaderDesktopNav";
import HeaderCTA from "./HeaderCTA";
import HeaderMenu from "./HeaderMenu";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <HeaderLogo />
          <HeaderDesktopNav />
          <HeaderCTA />
          <HeaderMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        {isMenuOpen && <HeaderMobile closeMenu={closeMenu} />}
      </div>
    </header>
  );
}
