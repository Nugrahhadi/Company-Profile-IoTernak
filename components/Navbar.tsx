"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/brainers", label: "Team" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 pt-6 px-6 sm:px-12 flex justify-between items-center">
      <Link
        href="/"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        onClick={closeMobileMenu}
      >
        <img
          src="/images/IoTernak.png"
          alt="IoTernak Logo"
          className="h-11 w-auto"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm border border-gray-100 dark:border-gray-700 rounded-full px-2 py-1.5 items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive(link.href)
                ? "bg-primary text-white shadow-md"
                : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          className="hidden sm:flex bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg items-center gap-2"
          href="https://wa.me/6283197391127"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Get Product</span>
          <span className="material-icons text-sm">chat</span>
        </a>
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-secondary transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="material-icons text-white">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Bubble */}
      {mobileMenuOpen && (
        <div className="absolute top-14 right-6 md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-2xl border border-gray-100 dark:border-gray-700 rounded-3xl min-w-[200px] overflow-hidden">
          <div className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-primary text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
            <a
              className="px-4 py-2.5 bg-primary hover:bg-secondary text-white rounded-2xl text-sm font-medium transition-colors flex items-center gap-2 justify-center"
              href="https://wa.me/6283197391127"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              <span>Get Product</span>
              <span className="material-icons text-sm">chat</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
