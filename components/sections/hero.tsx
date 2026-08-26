"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDownRight, Download } from "lucide-react";
import { portfolio } from "@/lib/data/portfolio";
import { BlobSculpture } from "@/components/3d/blob-sculpture";

export function Hero() {
  const { personal } = portfolio;
  const containerRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const nameLineOneRef = useRef<HTMLDivElement>(null);
  const nameLineTwoRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ delay: 1.6 }); // After preloader

    tl.fromTo(
      labelRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        nameLineOneRef.current,
        { opacity: 0, y: 60, skewY: 4 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, ease: "power4.out" },
        "-=0.3"
      )
      .fromTo(
        nameLineTwoRef.current,
        { opacity: 0, y: 60, skewY: 4 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-24 pb-12"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(245,245,240,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,245,240,0.025)_1px,transparent_1px)] bg-[size:5rem_5rem]"
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Text block */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Label */}
            <span
              ref={labelRef}
              className="mb-5 text-[10px] font-bold tracking-[0.3em] text-primary uppercase opacity-0"
              aria-label="Role"
            >
              [ FRONTEND ENGINEER ]
            </span>

            {/* Name */}
            <h1 className="font-heading font-black leading-[0.88] tracking-tighter text-foreground uppercase">
              <div
                ref={nameLineOneRef}
                className="overflow-hidden opacity-0"
              >
                <span className="block text-[clamp(4rem,14vw,11rem)]">
                  KHALID
                </span>
              </div>
              <div
                ref={nameLineTwoRef}
                className="overflow-hidden opacity-0"
              >
                <span className="block text-[clamp(4rem,14vw,11rem)] text-secondary-text">
                  SUDRAJAT
                </span>
              </div>
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              className="mt-8 max-w-md font-sans text-sm leading-relaxed text-secondary-text tracking-wide opacity-0 md:text-base"
            >
              10+ YEARS OF CRAFTING PREMIUM DIGITAL EXPERIENCES WITH MODERN
              JAVASCRIPT, REACT, AND CREATIVE TECHNOLOGY.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="mt-10 flex flex-wrap items-center gap-4 opacity-0"
            >
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center gap-2 border border-primary bg-primary/5 px-8 py-4 font-heading text-[10px] font-bold tracking-widest text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Scroll to contact section"
              >
                START A CONVERSATION
                <ArrowDownRight
                  className="h-4 w-4 transition-transform group-hover:rotate-45"
                  aria-hidden="true"
                />
              </button>
              <a
                href="/Khalid_Sudrajat_Frontend_Developer_CV.pdf"
                download
                className="inline-flex items-center gap-2 border border-border px-8 py-4 font-heading text-[10px] font-bold tracking-widest text-foreground uppercase transition-all duration-300 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Download CV PDF"
              >
                DOWNLOAD CV
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* 3D Blob */}
          <div
            className="flex justify-center lg:col-span-5 lg:justify-end"
            aria-hidden="true"
          >
            {/* <BlobSculpture /> */}
          </div>

        </div>

        {/* Footer info bar */}
        <div
          ref={scrollIndicatorRef}
          className="mt-16 flex items-center justify-between border-t border-border/20 pt-5 text-muted opacity-0"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase">
            BASED IN BEKASI, INDONESIA
          </span>
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background"
            aria-label="Scroll to about section"
          >
            SCROLL TO EXPLORE{" "}
            <span className="animate-bounce" aria-hidden="true">
              ↓
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
