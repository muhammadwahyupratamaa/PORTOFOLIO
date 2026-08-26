"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6">
      {/* Main Navbar */}
      <div
        className={`
          flex w-full items-center justify-between
          border
          backdrop-blur-2xl
          transition-all duration-500 ease-out
          ${
            scrolled
              ? "max-w-5xl rounded-2xl border-black/10 bg-white/70 px-4 py-3 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-black/60"
              : "max-w-7xl rounded-2xl border-black/5 bg-white/30 px-3 py-4 shadow-sm shadow-black/5 dark:border-white/10 dark:bg-white/5"
          }
        `}
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMobileMenu}
          className="group flex items-center gap-2 text-xl font-bold tracking-tight transition-opacity duration-200 hover:opacity-70 md:text-2xl"
        >
          <span>Portfolio</span>

          <span
            className="
              h-2 w-2 rounded-full
              bg-blue-600
              transition-transform duration-300
              group-hover:scale-125
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex lg:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                group relative
                text-sm font-medium
                text-gray-700
                transition-colors duration-200
                hover:text-blue-600
                dark:text-gray-300
                dark:hover:text-blue-400
              "
            >
              {item.label}

              {/* Hover Underline */}
              <span
                className="
                  absolute -bottom-1 left-0
                  h-px w-0
                  bg-blue-600
                  transition-all duration-300
                  group-hover:w-full
                  dark:bg-blue-400
                "
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-blue-600
              px-5 py-2.5
              text-sm font-medium text-white
              shadow-sm
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-md
              active:translate-y-0
            "
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            transition-colors duration-200
            hover:bg-black/5
            dark:hover:bg-white/10
            md:hidden
          "
        >
          {mobileMenuOpen ? (
            <X size={21} strokeWidth={1.8} />
          ) : (
            <Menu size={21} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="
            absolute left-4 right-4 top-[76px]
            overflow-hidden
            rounded-2xl
            border border-black/10
            bg-white/80
            shadow-xl shadow-black/10
            backdrop-blur-2xl
            dark:border-white/10
            dark:bg-black/70
            md:hidden
          "
        >
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="
                  rounded-xl
                  px-4 py-3
                  text-base font-medium
                  text-gray-700
                  transition-colors duration-200
                  hover:bg-black/5
                  hover:text-blue-600
                  dark:text-gray-300
                  dark:hover:bg-white/5
                  dark:hover:text-blue-400
                "
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="#contact"
              onClick={closeMobileMenu}
              className="
                mt-2
                rounded-xl
                bg-blue-600
                px-4 py-3
                text-center
                text-sm font-medium text-white
                transition-colors duration-200
                hover:bg-blue-700
              "
            >
              Hire Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
