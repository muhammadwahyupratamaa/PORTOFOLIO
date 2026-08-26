"use client";

import React, { ReactNode, useCallback, useEffect, useId, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

interface MarqueeAlongSvgPathProps {
  children: ReactNode;
  path: string;
  viewBox: string;
  baseVelocity?: number;
  slowdownOnHover?: boolean;
  slowDownFactor?: number;
  draggable?: boolean;
  dragSensitivity?: number;
  repeat?: number;
  responsive?: boolean;
  grabCursor?: boolean;
  className?: string;
  pathId?: string;
}

const wrap = (min: number, max: number, value: number) => {
  const range = max - min;

  return ((((value - min) % range) + range) % range) + min;
};

export default function MarqueeAlongSvgPath({
  children,
  path,
  viewBox,
  baseVelocity = 5,
  slowdownOnHover = false,
  slowDownFactor = 0.2,
  draggable = false,
  dragSensitivity = 0.08,
  repeat = 2,
  responsive = false,
  grabCursor = false,
  className = "",
  pathId,
}: MarqueeAlongSvgPathProps) {
  const generatedId = useId().replace(/:/g, "");

  const stablePathId = pathId ?? `marquee-path-${generatedId}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const progress = useMotionValue(0);
  const velocity = useMotionValue(baseVelocity);

  const scrollRef = useRef(0);
  const isHovered = useRef(false);

  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);

  const smoothScrollVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const scrollFactor = useTransform(
    smoothScrollVelocity,
    [-1000, 0, 1000],
    [-1.5, 0, 1.5],
  );

  const items = Array.from(
    { length: Math.max(1, repeat) },
    (_, index) => index,
  );

  const getPathLength = useCallback(() => {
    return pathRef.current?.getTotalLength() ?? 1000;
  }, []);

  const getResponsiveScale = useCallback(() => {
    if (!responsive || !containerRef.current) {
      return 1;
    }

    const width = containerRef.current.offsetWidth;

    if (width < 640) return 0.55;
    if (width < 768) return 0.7;
    if (width < 1024) return 0.85;

    return 1;
  }, [responsive]);

  useEffect(() => {
    const unsubscribe = scrollFactor.on("change", (value) => {
      scrollRef.current = value;
    });

    return () => unsubscribe();
  }, [scrollFactor]);

  useAnimationFrame((_, delta) => {
    const pathLength = getPathLength();

    let currentVelocity = baseVelocity;

    if (slowdownOnHover && isHovered.current) {
      currentVelocity *= slowDownFactor;
    }

    currentVelocity += scrollRef.current;

    velocity.set(currentVelocity);

    const movement = (currentVelocity * delta) / Math.max(pathLength, 1);

    progress.set(progress.get() + movement);
  });

  const getPoint = (index: number) => {
    const pathElement = pathRef.current;

    if (!pathElement) {
      return {
        x: 0,
        y: 0,
      };
    }

    const length = getPathLength();

    const normalizedProgress = wrap(
      0,
      1,
      progress.get() + index / Math.max(items.length, 1),
    );

    const point = pathElement.getPointAtLength(normalizedProgress * length);

    return point;
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggable) return;

    event.currentTarget.setPointerCapture(event.pointerId);

    const startX = event.clientX;
    const startProgress = progress.get();

    const handleMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - startX;

      progress.set(startProgress + deltaX * dragSensitivity * 0.001);
    };

    const handleUp = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  };

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full ${
        grabCursor
          ? draggable
            ? "cursor-grab active:cursor-grabbing"
            : "cursor-default"
          : ""
      } ${className}`}
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={() => {
        isHovered.current = false;
      }}
      onPointerDown={handlePointerDown}
    >
      {/* Invisible SVG path used as the motion guide */}

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible opacity-0"
        viewBox={viewBox}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          id={stablePathId}
          d={path}
          fill="none"
          stroke="currentColor"
        />
      </svg>

      {/* Moving items */}

      <div className="absolute inset-0">
        {items.map((_, index) => {
          const progressValue = useTransform(progress, (value) => {
            const normalized = wrap(0, 1, value + index / items.length);

            return normalized;
          });

          const x = useTransform(progressValue, (value) => {
            const pathElement = pathRef.current;

            if (!pathElement) {
              return "50%";
            }

            const point = pathElement.getPointAtLength(
              value * pathElement.getTotalLength(),
            );

            return `${point.x}px`;
          });

          const y = useTransform(progressValue, (value) => {
            const pathElement = pathRef.current;

            if (!pathElement) {
              return "50%";
            }

            const point = pathElement.getPointAtLength(
              value * pathElement.getTotalLength(),
            );

            return `${point.y}px`;
          });

          const scale = getResponsiveScale();

          return (
            <motion.div
              key={index}
              style={{
                left: x,
                top: y,
                scale,
              }}
              className="
                absolute
                -translate-x-1/2
                -translate-y-1/2
                will-change-transform
              "
            >
              {children}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
