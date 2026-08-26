"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  // Effect 1: Detect capabilities and toggle visibility
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setIsHidden(isTouch || prefersReduced);
  }, []);

  // Effect 2: Set up GSAP only after DOM elements exist (isHidden === false)
  useEffect(() => {
    if (isHidden) return;

    // Bail if refs are not yet attached (safety guard)
    if (!cursorRef.current || !followerRef.current) return;

    // Add class to body so CSS can hide native cursor
    document.documentElement.classList.add("has-custom-cursor");

    // Capture refs for stable closure
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // GSAP quickTo for buttery smooth performance
    const xTo = gsap.quickTo(follower, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(follower, "y", {
      duration: 0.35,
      ease: "power3.out",
    });
    const dotXTo = gsap.quickTo(cursor, "x", {
      duration: 0.08,
      ease: "power3.out",
    });
    const dotYTo = gsap.quickTo(cursor, "y", {
      duration: 0.08,
      ease: "power3.out",
    });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3,
      });
    };
    const onMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3,
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const projectHover = target.closest("[data-cursor='project']");
      const interactive = target.closest(
        "a, button, [role='button'], input, select, textarea"
      );

      if (projectHover) {
        setCursorText("VIEW");
        gsap.to(follower, {
          width: 72,
          height: 72,
          backgroundColor: "#D9FF00",
          borderColor: "#D9FF00",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursor, { scale: 0, duration: 0.2 });
      } else if (interactive) {
        gsap.to(follower, {
          width: 44,
          height: 44,
          borderColor: "#D9FF00",
          backgroundColor: "rgba(217, 255, 0, 0.08)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const projectHover = target.closest("[data-cursor='project']");
      const interactive = target.closest(
        "a, button, [role='button'], input, select, textarea"
      );

      if (interactive || projectHover) {
        setCursorText("");
        gsap.to(follower, {
          width: 24,
          height: 24,
          borderColor: "rgba(245, 245, 240, 0.4)",
          backgroundColor: "transparent",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
      />
      {/* Outer follower ring */}
      <div
        ref={followerRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(245,245,240,0.4)]"
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-wider text-black select-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}

