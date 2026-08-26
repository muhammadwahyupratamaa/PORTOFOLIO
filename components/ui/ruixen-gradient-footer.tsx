"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Stop = {
  offset: number;
  color: string;
};

const VBW = 1271;
const VBH = 599;

/* ============================================================
   BLUE GRADIENT
============================================================ */

const BLUE_STOPS: Stop[] = [
  { offset: 0, color: "#020617" },
  { offset: 0.18, color: "#07152D" },
  { offset: 0.35, color: "#0B2A5B" },
  { offset: 0.52, color: "#1557B0" },
  { offset: 0.68, color: "#2563EB" },
  { offset: 0.82, color: "#38BDF8" },
  { offset: 1, color: "#93C5FD00" },
];

/* ============================================================
   BAR HEIGHT
============================================================ */

function bellHeights(n: number, peak: number, valley: number): number[] {
  const out: number[] = [];

  const mid = (n - 1) / 2;

  for (let i = 0; i < n; i++) {
    const t = mid === 0 ? 0 : Math.abs(i - mid) / mid;

    const eased = 1 - Math.pow(t, 1.24);

    out.push(peak * VBH * (valley + (1 - valley) * eased));
  }

  return out;
}

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

/* ============================================================
   PROPS
============================================================ */

export interface RuixenGradientFooterProps {
  children?: ReactNode;
  gradientHeight?: string;
  minReveal?: number;
  bars?: number;
  blur?: number;
  peak?: number;
  valley?: number;
  stops?: Stop[];
  className?: string;
  style?: CSSProperties;
}

/* ============================================================
   FOOTER
============================================================ */

export function RuixenGradientFooter({
  children,
  gradientHeight = "65vh",
  minReveal = 0.045,
  bars = 9,
  blur = 18,
  peak = 0.98,
  valley = 0.55,
  stops = BLUE_STOPS,
  className,
  style,
}: RuixenGradientFooterProps) {
  const uid = useId().replace(/:/g, "");

  const bandRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(minReveal);

  /* ==========================================================
     SCROLL REVEAL
  ========================================================== */

  useEffect(() => {
    const el = bandRef.current;

    if (!el) return;

    const doc = el.ownerDocument;

    const win = doc.defaultView ?? window;

    const measure = () => {
      const height = el.offsetHeight || 1;

      const left =
        doc.documentElement.scrollHeight - win.innerHeight - win.scrollY;

      const t = clamp01((height - left) / height);

      setProgress(minReveal + (1 - minReveal) * t);
    };

    measure();

    win.addEventListener("scroll", measure, { passive: true });

    win.addEventListener("resize", measure, { passive: true });

    return () => {
      win.removeEventListener("scroll", measure);

      win.removeEventListener("resize", measure);
    };
  }, [minReveal]);

  const colW = VBW / bars;

  return (
    <footer
      className={`
        relative
        overflow-hidden
        ${className ?? ""}
      `}
      style={{
        paddingBottom: gradientHeight,
        background:
          "linear-gradient(135deg, #020617 0%, #07152d 50%, #020b1c 100%)",
        ...style,
      }}
    >
      {/* ======================================================
          FOOTER CONTENT
      ======================================================= */}

      <div className="relative z-10">{children}</div>

      {/* ======================================================
          GRADIENT WAVE
      ======================================================= */}

      <div
        ref={bandRef}
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          height: gradientHeight,
          pointerEvents: "none",
          transformOrigin: "bottom",
          transform: `scaleY(${progress})`,
          willChange: "transform",
          zIndex: 0,
        }}
      >
        <svg
          style={{
            height: "100%",
            width: "100%",
            display: "block",
          }}
          viewBox={`0 0 ${VBW} ${VBH}`}
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* ==================================================
                MAIN BLUE GRADIENT
            ================================================== */}

            <linearGradient id={`grad-${uid}`} x1="0" y1="1" x2="0" y2="0">
              {stops.map((stop, index) => (
                <stop key={index} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>

            {/* ==================================================
                SOFT GLOW
            ================================================== */}

            <filter
              id={`blur-${uid}`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation={blur} />
            </filter>

            {/* ==================================================
                EXTRA BLUE LIGHT
            ================================================== */}

            <linearGradient id={`highlight-${uid}`} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#2563EB" stopOpacity="0" />

              <stop offset="0.55" stopColor="#60A5FA" stopOpacity="0.16" />

              <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ====================================================
              BLURRED BARS
          ===================================================== */}

          {bellHeights(bars, peak, valley).map((barH, index) => (
            <g key={index} filter={`url(#blur-${uid})`}>
              <rect
                x={index * colW}
                y={VBH - barH}
                width={colW * 1.23}
                height={barH}
                fill={`url(#grad-${uid})`}
              />
            </g>
          ))}

          {/* ====================================================
              SOFT HIGHLIGHT
          ===================================================== */}

          {bellHeights(bars, peak * 0.82, valley + 0.05).map((barH, index) => (
            <rect
              key={`highlight-${index}`}
              x={index * colW}
              y={VBH - barH}
              width={colW * 1.23}
              height={barH}
              fill={`url(#highlight-${uid})`}
              opacity="0.35"
            />
          ))}
        </svg>
      </div>

      {/* ======================================================
          TOP FADE
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[1]
          h-40
          bg-gradient-to-t
          from-[#020617]/40
          to-transparent
        "
      />
    </footer>
  );
}
