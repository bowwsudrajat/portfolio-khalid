"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/lib/data/portfolio";

export function About() {
  const { summary, additionalInfo } = portfolio;
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Word-by-word reveal for the statement
      if (textRef.current) {
        const words = textRef.current.innerText.trim().split(/\s+/);
        textRef.current.innerHTML = words
          .map(
            (word) =>
              `<span class="inline-block mr-[0.35em] opacity-0 translate-y-8 blur-[4px]">${word}</span>`
          )
          .join("");

        const spans = textRef.current.querySelectorAll("span");
        gsap.to(spans, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.04,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Slide up details block
      if (detailsRef.current) {
        gsap.fromTo(
          detailsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: detailsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About"
      className="relative flex min-h-[80vh] items-center justify-center bg-[#0A0A0A] py-32 overflow-hidden border-t border-border/20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

          {/* Label column */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
              [ 01 // INTRODUCTION ]
            </span>
          </div>

          {/* Content column */}
          <div className="lg:col-span-9 flex flex-col items-start gap-14">

            {/* Editorial statement */}
            <h2
              ref={textRef}
              className="font-heading text-[clamp(2rem,5.5vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-foreground uppercase"
            >
              I BUILD DIGITAL INTERFACES THAT TURN DESIGN INTO EXPERIENCE.
            </h2>

            {/* Description + Principles */}
            <div
              ref={detailsRef}
              className="grid grid-cols-1 gap-10 w-full md:grid-cols-12"
            >
              <div className="md:col-span-7">
                <p className="font-sans text-base leading-relaxed text-secondary-text tracking-wide">
                  {summary}
                </p>
              </div>

              <div className="md:col-span-5 flex flex-col gap-4 border-l border-border/20 pl-8">
                <p className="text-[10px] font-bold tracking-widest text-muted uppercase">
                  KEY PRINCIPLES
                </p>
                <ul className="flex flex-col gap-3" role="list">
                  {additionalInfo.map((info, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs text-secondary-text font-semibold uppercase tracking-wider"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary"
                        aria-hidden="true"
                      />
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
