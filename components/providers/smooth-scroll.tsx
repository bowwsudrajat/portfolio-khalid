"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register ScrollTrigger globally
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Skip Lenis on reduced motion — use native scroll
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Sync Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP ticker to drive Lenis — keeps everything in sync
    const handleTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(handleTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(handleTick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
