"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const LAYER_1 =
  "https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp";

const LAYER_2 =
  "https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp";

const LAYER_3 =
  "https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const hero = heroRef.current;

    if (!hero) return;

    const layersContainer = hero.querySelector(
      "[data-parallax-layers]"
    );

    if (!layersContainer) return;

    const ctx = gsap.context(() => {
      /*
      ============================================================
      PARALLAX LAYERS
      ============================================================
      */

      const layers = [
        {
          layer: "1",
          yPercent: 70,
        },
        {
          layer: "2",
          yPercent: 55,
        },
        {
          layer: "3",
          yPercent: 40,
        },
        {
          layer: "4",
          yPercent: 10,
        },
      ];

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: layersContainer,
          start: "top top",
          end: "bottom top",
          scrub: 0,
        },
      });

      layers.forEach((layer, index) => {
        timeline.to(
          layersContainer.querySelectorAll(
            `[data-parallax-layer="${layer.layer}"]`
          ),
          {
            yPercent: layer.yPercent,
            ease: "none",
          },
          index === 0 ? undefined : "<"
        );
      });
    }, hero);

    /*
    ============================================================
    LENIS
    ============================================================
    */

    const lenis = new Lenis({
      lerp: 0.08,
      autoRaf: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();

      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        h-[100svh]
        min-h-[680px]
        w-full
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          PARALLAX VISUALS
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          h-[120%]
          w-full
        "
      >
        {/* =================================================
            PARALLAX LAYERS
        ================================================== */}

        <div
          data-parallax-layers
          className="
            absolute
            inset-0
            h-full
            w-full
            overflow-hidden
          "
        >
          {/* =================================================
              LAYER 1 — BACKGROUND
          ================================================== */}

          <img
            src={LAYER_1}
            alt=""
            aria-hidden="true"
            data-parallax-layer="1"
            draggable={false}
            className="
              pointer-events-none
              absolute
              left-0
              top-[-17.5%]
              h-[117.5%]
              w-full
              max-w-none
              select-none
              object-cover
            "
          />

          {/* =================================================
              LAYER 2 — MOUNTAIN / MIDGROUND
          ================================================== */}

          <img
            src={LAYER_2}
            alt=""
            aria-hidden="true"
            data-parallax-layer="2"
            draggable={false}
            className="
              pointer-events-none
              absolute
              left-0
              top-[-17.5%]
              h-[117.5%]
              w-full
              max-w-none
              select-none
              object-cover
            "
          />

          {/* =================================================
              LAYER 3 — TITLE
          ================================================== */}

          <div
            data-parallax-layer="3"
            className="
              absolute
              left-0
              top-0
              flex
              h-[100svh]
              w-full
              items-center
              justify-center
            "
          >
            <h1
              className="
                pointer-events-none
                select-none
                text-center
                font-serif
                text-[15vw]
                font-bold
                uppercase
                leading-[0.78]
                tracking-[-0.065em]
                text-white
                md:text-[10vw]
              "
            >
              Muhammad
              <br />
              Wahyu
            </h1>
          </div>

          {/* =================================================
              LAYER 4 — PERSON / FOREGROUND
          ================================================== */}

          <img
            src={LAYER_3}
            alt=""
            aria-hidden="true"
            data-parallax-layer="4"
            draggable={false}
            className="
              pointer-events-none
              absolute
              left-0
              top-[-17.5%]
              h-[117.5%]
              w-full
              max-w-none
              select-none
              object-cover
            "
          />
        </div>

        {/* =================================================
            DARK FADE
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-30
            h-[35%]
            w-full
            bg-gradient-to-t
            from-black
            via-black/60
            to-transparent
          "
        />

        {/* =================================================
            VIGNETTE
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-30
            bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.45)_100%)]
          "
        />
      </div>

      {/* =====================================================
          TOP LEFT
      ====================================================== */}

      <div
        className="
          absolute
          left-6
          top-6
          z-50
          flex
          items-center
          gap-3
          md:left-10
          md:top-28
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-blue-400
            shadow-[0_0_12px_rgba(96,165,250,0.8)]
          "
        />

        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-white/75
            md:text-[10px]
          "
        >
          Fullstack Developer
        </span>
      </div>

      {/* =====================================================
          TOP RIGHT
      ====================================================== */}

      <div
        className="
          absolute
          right-6
          top-28
          z-50
          hidden
          text-right
          md:right-10
          md:block
        "
      >
        <span
          className="
            block
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/50
          "
        >
          Based in
        </span>

        <span
          className="
            mt-1
            block
            font-serif
            text-sm
            text-white/80
          "
        >
          Indonesia
        </span>
      </div>

      {/* =====================================================
          BOTTOM LEFT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-8
          left-6
          z-50
          hidden
          items-end
          gap-4
          md:flex
          md:left-10
        "
      >
        <div
          className="
            relative
            h-11
            w-px
            bg-white/50
          "
        >
          <span
            className="
              absolute
              bottom-0
              left-1/2
              h-1.5
              w-1.5
              -translate-x-1/2
              rounded-full
              bg-white
            "
          />
        </div>

        <span
          className="
            pb-0.5
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/70
          "
        >
          Scroll to explore
        </span>
      </div>

      {/* =====================================================
          BOTTOM RIGHT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-9
          right-6
          z-50
          hidden
          md:right-10
          md:block
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/60
          "
        >
          React · Next.js · Node · Go
        </span>
      </div>

      {/* =====================================================
          CENTER SCROLL
      ====================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-50
          hidden
          -translate-x-1/2
          md:block
        "
      >
        <div
          className="
            flex
            h-14
            w-7
            items-start
            justify-center
            rounded-full
            border
            border-white/60
            pt-3
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-white
              animate-bounce
            "
          />
        </div>
      </div>
    </section>
  );
}
