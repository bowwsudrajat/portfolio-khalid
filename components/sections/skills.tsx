"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillCategories = [
  {
    title: "FRONTEND",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "UI",
    items: ["Tailwind CSS", "MUI", "Bootstrap", "Figma"],
  },
  {
    title: "OTHER",
    items: ["Git", "REST API", "Responsive Design", "WebGL / Three.js"],
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (categoriesRef.current) {
        const categories =
          categoriesRef.current.querySelectorAll(".skill-category");

        gsap.fromTo(
          categories,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: "top 80%",
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
      id="skills"
      ref={sectionRef}
      aria-label="Skills"
      className="relative flex min-h-screen items-center justify-center bg-[#0A0A0A] py-32 overflow-hidden border-t border-border/20"
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 -z-10 h-64 w-64 rounded-full bg-primary/4 blur-[100px]"
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

          {/* Section label */}
          <div className="lg:col-span-3">
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
              [ 02 // STACK &amp; EXPERTISE ]
            </span>
          </div>

          {/* Skills list */}
          <div ref={categoriesRef} className="lg:col-span-9 flex flex-col gap-16">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="skill-category border-b border-border/20 pb-12 last:border-b-0 last:pb-0"
              >
                {/* Category header */}
                <h3 className="mb-8 text-[10px] font-bold tracking-[0.25em] text-muted uppercase">
                  {"// "}{cat.title}
                </h3>

                {/* Inline skill items — oversized typographic list */}
                <div
                  className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-10 md:gap-y-4"
                  role="list"
                  aria-label={`${cat.title} skills`}
                >
                  {cat.items.map((skill) => (
                    <div
                      key={skill}
                      role="listitem"
                      className="group relative cursor-default select-none"
                    >
                      <span className="font-heading text-[clamp(1.75rem,4vw,3.5rem)] font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary inline-block">
                        {skill}
                      </span>
                      {/* Accent underline slide-in */}
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
