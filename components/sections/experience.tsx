"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/lib/data/portfolio";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate each timeline row independently
      if (timelineRef.current) {
        const rows =
          timelineRef.current.querySelectorAll<HTMLElement>(".experience-row");
        rows.forEach((row) => {
          gsap.fromTo(
            row,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }

      // Animate the large 10+ statement
      if (statementRef.current) {
        const children = Array.from(statementRef.current.children);
        gsap.fromTo(
          children,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: "power4.out",
            scrollTrigger: {
              trigger: statementRef.current,
              start: "top 78%",
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
      id="experience"
      ref={sectionRef}
      aria-label="Professional experience"
      className="relative bg-[#0A0A0A] pt-32 pb-0 overflow-hidden border-t border-border/20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">

        {/* Section header */}
        <div className="mb-20 flex flex-col items-start gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
            [ 04 // CHRONOLOGY ]
          </span>
          <h2 className="font-heading text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-none tracking-tight text-foreground uppercase">
            PROFESSIONAL TIMELINE
          </h2>
        </div>

        {/* Timeline rows */}
        <div
          ref={timelineRef}
          className="flex flex-col border-b border-border/20"
        >
          {portfolio.experiences.map((exp) => {
            const startYear = exp.period.split(" ")[0] || "2024";

            return (
              <article
                key={exp.id}
                className="experience-row grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-12 border-t border-border/20 transition-colors duration-300 hover:bg-card/20 group px-2"
              >
                {/* Year */}
                <div className="md:col-span-3 flex flex-col items-start">
                  <span className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight text-secondary-text group-hover:text-primary transition-colors duration-300 select-none leading-none">
                    {startYear}
                  </span>
                  <span className="text-[9px] font-bold tracking-widest text-muted uppercase mt-2">
                    {exp.period}
                  </span>
                </div>

                {/* Details */}
                <div className="md:col-span-9 flex flex-col items-start">
                  <h3 className="font-heading text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 uppercase mb-1 sm:text-xl">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-semibold tracking-wider text-secondary-text uppercase">
                    {exp.company}
                    {exp.client ? (
                      <span className="text-muted ml-2 normal-case font-normal">
                        — client: {exp.client}
                      </span>
                    ) : null}
                  </p>

                  {/* Highlights */}
                  <ul
                    className="mt-6 flex flex-col gap-2.5 max-w-2xl"
                    role="list"
                  >
                    {exp.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-3 text-xs leading-relaxed text-secondary-text uppercase tracking-wide font-medium"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 bg-border group-hover:bg-primary/50 transition-colors duration-300"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div
                    className="mt-6 flex flex-wrap gap-2"
                    role="list"
                    aria-label="Technologies"
                  >
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        role="listitem"
                        className="border border-border/30 bg-card/50 px-2.5 py-1 text-[9px] font-bold tracking-widest text-muted uppercase select-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* 10+ Years Statement */}
        <div
          ref={statementRef}
          className="flex flex-col items-center justify-center text-center pt-24 pb-32 select-none"
          aria-hidden="true"
        >
          <div className="font-heading font-black leading-none text-primary text-[clamp(5rem,22vw,16rem)]">
            10+
          </div>
          <div className="font-heading font-extrabold tracking-[0.3em] text-foreground uppercase text-[clamp(1.5rem,5vw,5rem)] mt-2">
            YEARS
          </div>
          <div className="font-heading font-bold tracking-[0.35em] text-secondary-text uppercase text-[clamp(0.75rem,2vw,1.5rem)] mt-2">
            BUILDING FOR THE WEB.
          </div>
        </div>

      </div>
    </section>
  );
}
