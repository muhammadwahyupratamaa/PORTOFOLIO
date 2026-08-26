"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface BrilianItem {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  alt: string;
}

const items: BrilianItem[] = [
  {
    id: "01",
    title: "Store",
    category: "Customer Experience",
    description: "The main shopping experience for customers.",
    src: "/projects/brilianshop-store.png",
    alt: "BrilianShop customer storefront",
  },
  {
    id: "02",
    title: "Products",
    category: "Product Management",
    description: "Product discovery, browsing, and detailed views.",
    src: "/projects/brilianshop-products.png",
    alt: "BrilianShop products page",
  },
  {
    id: "03",
    title: "Checkout",
    category: "Commerce Flow",
    description: "A complete flow from cart to order confirmation.",
    src: "/projects/brilianshop-checkout.png",
    alt: "BrilianShop checkout flow",
  },
  {
    id: "04",
    title: "Admin",
    category: "Administration",
    description: "Dashboard for managing the commerce platform.",
    src: "/projects/brilianshop-admin.png",
    alt: "BrilianShop admin dashboard",
  },
  {
    id: "05",
    title: "API",
    category: "Backend",
    description: "REST API and backend infrastructure behind the platform.",
    src: "/projects/brilianshop-api.png",
    alt: "BrilianShop backend architecture",
  },
];

export function ElasticGallery() {
  const [activeId, setActiveId] = useState("04");

  const activeIndex = items.findIndex((item) => item.id === activeId);
  const activeItem = items[activeIndex];

  return (
    <section className="w-full">
      {/* =========================================================
          GALLERY
      ========================================================== */}

      <div className="relative">
        <div className="md:hidden">
          <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-[#080808]">
            <div className="flex h-7 items-center gap-1.5 border-b border-white/10 bg-[#151515] px-3">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <div className="ml-2 h-3 flex-1 rounded-full bg-white/[0.04]" />
            </div>

            <div className="relative aspect-[4/3] w-full">
              <Image
                key={activeItem.id}
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-contain p-3"
              />
            </div>

            <div className="border-t border-white/[0.08] p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-blue-300/60">
                  {activeItem.category}
                </span>
                <span className="text-[9px] tracking-[0.2em] text-white/30">
                  {activeItem.id} / 05
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {activeItem.title}
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-white/45">
                {activeItem.description}
              </p>
            </div>
          </div>

          <div className="mt-2.5 grid grid-cols-5 gap-1.5">
            {items.map((item) => {
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "flex min-w-0 flex-col items-center gap-1 rounded-xl border px-1 py-2.5 transition-colors",
                    isActive
                      ? "border-blue-400/35 bg-blue-400/10 text-blue-200"
                      : "border-white/[0.07] bg-white/[0.025] text-white/35",
                  )}
                >
                  <span className="text-[9px] font-semibold">{item.id}</span>
                  <span className="max-w-full truncate text-[8px]">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="hidden h-[620px] w-full gap-3 md:flex">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <article
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-2xl",
                  "border border-white/[0.08] bg-white/[0.02]",
                  "transition-[flex,filter] duration-700",
                  "ease-[cubic-bezier(0.25,1,0.5,1)]",
                  isActive ? "flex-[5]" : "flex-[1]",
                  isActive
                    ? "brightness-100"
                    : "brightness-[0.35] hover:brightness-[0.55]",
                )}
              >
                {/* =================================================
    IMAGE
================================================= */}

                <div
                  className={cn(
                    "absolute inset-0 overflow-hidden bg-[#080808]",
                    "transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                >
                  {/* Ambient glow */}

                  <div
                    className={cn(
                      "absolute left-1/2 top-1/2",
                      "h-[70%] w-[70%]",
                      "-translate-x-1/2 -translate-y-1/2",
                      "rounded-full bg-white/[0.035]",
                      "blur-3xl",
                      "transition-all duration-1000",
                      isActive ? "scale-100 opacity-100" : "scale-75 opacity-0",
                    )}
                  />

                  {/* Screenshot */}

                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center",
                      "p-5 md:p-8 lg:p-10",
                      "transition-all duration-1000",
                      "ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-8 scale-[0.94] opacity-0",
                    )}
                  >
                    <div
                      className="
        relative
        h-full
        w-full
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#111]
        shadow-[0_30px_100px_rgba(0,0,0,0.5)]
      "
                    >
                      {/* Browser chrome */}

                      <div className="flex h-7 items-center gap-1.5 border-b border-white/10 bg-[#151515] px-3">
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="h-2 w-2 rounded-full bg-white/20" />

                        <div className="ml-3 h-3 flex-1 rounded-full bg-white/[0.04]" />
                      </div>

                      {/* Screenshot */}

                      <div className="relative h-[calc(100%-28px)] w-full">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 70vw"
                          className="
            object-contain
            object-center
            transition-transform
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom fade */}

                  <div
                    className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      h-1/2
      bg-gradient-to-t
      from-black
      via-black/20
      to-transparent
    "
                  />
                </div>

                {/* =================================================
                    PROJECT NUMBER
                ================================================== */}

                <div className="absolute left-5 top-5 z-10 md:left-6 md:top-6">
                  <span
                    className={cn(
                      "text-[10px] font-medium tracking-[0.2em]",
                      "transition-colors duration-500",
                      isActive ? "text-white/70" : "text-white/35",
                    )}
                  >
                    {item.id}
                  </span>
                </div>

                {/* =================================================
                    ACTIVE CONTENT
                ================================================== */}

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-8">
                  <div
                    className={cn(
                      "max-w-xl",
                      "transition-all duration-700",
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0",
                    )}
                  >
                    {/* Category */}

                    <div className="mb-3">
                      <span
                        className="
                          inline-flex
                          rounded-full
                          border border-white/15
                          bg-white/10
                          px-3
                          py-1.5
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          text-white/70
                          backdrop-blur-xl
                        "
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* Title */}

                    <h3 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-2 max-w-md text-xs leading-5 text-white/50 md:text-sm md:leading-6">
                      {item.description}
                    </p>

                    {/* Action */}

                    <div className="mt-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 md:text-xs">
                      <span>Explore Project</span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    INACTIVE TITLE
                ================================================== */}

                <div
                  className={cn(
                    "absolute bottom-6 left-1/2 z-10",
                    "-translate-x-1/2",
                    "transition-all duration-500",
                    isActive
                      ? "scale-75 opacity-0"
                      : "scale-100 opacity-100 delay-200",
                  )}
                >
                  <span className="hidden whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-white/70 [writing-mode:vertical-rl] md:block">
                    {item.title}
                  </span>

                  <span className="block text-[10px] font-medium tracking-[0.2em] text-white/50 md:hidden">
                    {item.id}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================================
            PROGRESS
        ========================================================== */}

        <div className="mt-5 hidden items-center gap-4 md:flex">
          <span className="text-[10px] font-medium tracking-[0.2em] text-white/40">
            {activeItem.id}
          </span>

          <div className="h-px flex-1 bg-white/10">
            <div
              className="h-px bg-white/60 transition-all duration-700"
              style={{
                width: `${((activeIndex + 1) / items.length) * 100}%`,
              }}
            />
          </div>

          <span className="text-[10px] font-medium tracking-[0.2em] text-white/30">
            05
          </span>
        </div>
      </div>
    </section>
  );
}
