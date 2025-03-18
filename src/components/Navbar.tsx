
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-xl font-display font-semibold bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">ProjectPro</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#methodologies" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
            Methodologies
          </a>
          <a href="#guide" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
            Guide
          </a>
          <a href="#resources" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
            Resources
          </a>
          <a href="#contact" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 rounded-md text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-zinc-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#methodologies"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Methodologies
            </a>
            <a
              href="#guide"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Guide
            </a>
            <a
              href="#resources"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
