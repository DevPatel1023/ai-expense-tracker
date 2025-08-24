"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const closedMobileMenu = () => {
    setIsMobileMenu(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 dark:bg-white/5 border-b border-white/20 dark:border-white/10 shadow-md shadow-black/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* logo section */}
          <div className="flex items-center">
            <Link href='/' className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group transition-all duration-300 hover:scale-105"
            onClick={closedMobileMenu}>
              <div className="w-7 h-7 sm:w-8 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center">

              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
