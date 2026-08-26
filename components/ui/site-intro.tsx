"use client";

import { useEffect, useState } from "react";
import { Component as RocketLoader } from "@/components/ui/rocket-loader";

const INTRO_DURATION = 2400;
const EXIT_DURATION = 650;

export default function SiteIntro() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
      document.body.style.overflow = previousOverflow;
    }, INTRO_DURATION);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, INTRO_DURATION + EXIT_DURATION);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`site-intro ${isLeaving ? "site-intro--leaving" : ""}`}
      role="status"
      aria-label="Opening Muhammad Wahyu's portfolio"
    >
      <div className="site-intro__grid" aria-hidden="true" />
      <div className="site-intro__orb site-intro__orb--left" aria-hidden="true" />
      <div className="site-intro__orb site-intro__orb--right" aria-hidden="true" />

      <div className="site-intro__content">
        <RocketLoader />

        <div className="site-intro__identity">
          <p className="site-intro__eyebrow">Portfolio of</p>
          <p className="site-intro__name">
            Muhammad Wahyu <span>Pratama</span>
          </p>
          <div className="site-intro__progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
