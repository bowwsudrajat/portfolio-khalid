"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function LoadingScreen() {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const obj = { value: 0 };
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 0.3 : 1.2;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: prefersReducedMotion ? 0.3 : 0.8,
          ease: "power4.inOut",
          onComplete: () => {
            setIsVisible(false);
            document.body.style.overflow = "";
          }
        });
      }
    });

    tl.to(obj, {
      value: 100,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        setPercent(Math.floor(obj.value));
      }
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
    >
      <div className="flex flex-col items-start px-8">
        <div className="font-heading text-8xl font-bold tracking-tighter text-primary select-none sm:text-9xl md:text-[12rem]">
          {percent.toString().padStart(3, "0")}
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground font-semibold">
            Khalid Sudrajat
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted">
            Interactive Frontend Engineer
          </p>
        </div>
      </div>
    </div>
  );
}
