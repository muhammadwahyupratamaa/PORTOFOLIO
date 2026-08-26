"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Code2,
  FolderKanban,
  Home,
  Mail,
  UserRound,
  type LucideIcon,
} from "lucide-react";

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    label: "About",
    href: "#about",
    icon: UserRound,
  },
  {
    label: "Skills",
    href: "#skills",
    icon: Code2,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: FolderKanban,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

/* =========================================================
   LIQUID GLASS
========================================================= */

function LiquidGlass({
  children,
  className = "",
  style = {},
}: LiquidGlassProps) {
  const glassStyle: React.CSSProperties = {
    boxShadow:
      "0 8px 30px rgba(0, 0, 0, 0.08), inset 1px 1px 1px rgba(255,255,255,0.45)",
    ...style,
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={glassStyle}>
      {/* Liquid blur / distortion */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          filter: "url(#liquid-glass-distortion)",
          isolation: "isolate",
        }}
      />

      {/* Glass surface */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08))",
        }}
      />

      {/* Inner highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit]"
        style={{
          boxShadow:
            "inset 1.5px 1.5px 1px rgba(255,255,255,0.45), inset -1px -1px 1px rgba(255,255,255,0.18)",
        }}
      />

      {/* Top light reflection */}
      <div
        className="
          pointer-events-none
          absolute
          -left-10
          -top-16
          z-20
          h-32
          w-1/2
          rotate-[-12deg]
          rounded-full
          bg-white/20
          blur-2xl
        "
      />

      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );
}

/* =========================================================
   SVG LIQUID GLASS FILTER
========================================================= */

function GlassFilter() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute h-0 w-0">
      <defs>
        <filter
          id="liquid-glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001 0.005"
            numOctaves="1"
            seed="17"
            result="turbulence"
          />

          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />

            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />

            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>

          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>

          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="35"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function LiquidGlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* -----------------------------------------
     Scroll detection
  ----------------------------------------- */

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
    const sections = navItems
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.2, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* SVG filter */}
      <GlassFilter />

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="fixed left-0 right-0 top-0 z-50 hidden justify-center px-6 pt-4 md:flex">
        <LiquidGlass
          className={`
            w-full
            transition-all
            duration-500
            ease-out
            ${scrolled ? "max-w-5xl rounded-2xl" : "max-w-7xl rounded-3xl"}
          `}
        >
          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-500
              ${scrolled ? "px-4 py-3" : "px-5 py-4"}
            `}
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="#home"
              className="
                group
                flex
                items-center
                gap-2
                text-xl
                font-bold
                tracking-tight
                text-gray-900
                transition-opacity
                duration-300
                hover:opacity-70
                dark:text-white
                md:text-2xl
              "
            >
              <span>Portfolio</span>

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_12px_rgba(59,130,246,0.7)]
                  transition-transform
                  duration-300
                  group-hover:scale-125
                "
              />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="hidden items-center gap-7 md:flex lg:gap-9">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    group
                    relative
                    text-lg
                    font-medium
                    text-black
                    transition-colors
                    duration-300
                    hover:text-gray-950
                    dark:text-gray-200
                    dark:hover:text-white
                  "
                >
                  {item.label}

                  {/* Underline */}
                  <span
                    className="
                      absolute
                      -bottom-1
                      left-1/2
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-current
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* =================================================
                DESKTOP CTA
            ================================================= */}

            <Link
              href="#contact"
              className="
                hidden
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-white/20
                px-5
                py-2.5
                text-sm
                font-medium
                text-gray-900
                shadow-[inset_1px_1px_1px_rgba(255,255,255,0.4)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/30
                hover:shadow-lg
                md:inline-flex
                dark:text-white
              "
            >
              Hire Me
            </Link>

          </div>
        </LiquidGlass>
      </header>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-3 bottom-3 z-50 rounded-[1.4rem] border border-white/10 bg-slate-950/85 p-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] shadow-[0_16px_55px_rgba(2,6,23,0.55)] backdrop-blur-2xl md:hidden"
      >
        <div className="grid grid-cols-5 gap-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-1 transition-colors duration-300 ${
                  isActive
                    ? "bg-blue-500/15 text-blue-300"
                    : "text-slate-400 active:bg-white/[0.06] active:text-white"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className="h-[18px] w-[18px]"
                  strokeWidth={isActive ? 2.2 : 1.7}
                />
                <span className="text-[9px] font-medium tracking-wide">
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute top-1 h-0.5 w-4 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
