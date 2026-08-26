"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/data/portfolio";
import { ProjectModal } from "@/components/sections/project-modal";
import type { Project } from "@/types/portfolio";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>(".project-block");
      blocks.forEach((block) => {
        const info = block.querySelector(".project-info");
        const visual = block.querySelector(".project-visual");

        gsap.fromTo(
          [info, visual],
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        aria-label="Selected work"
        className="relative bg-[#0A0A0A] py-32 overflow-hidden border-t border-border/20"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">

          {/* Section header */}
          <div className="mb-24 flex flex-col items-start gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
              [ 03 // SELECTED WORK ]
            </span>
            <h2 className="font-heading text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-none tracking-tight text-foreground uppercase">
              SHIPPED PRODUCTS
            </h2>
          </div>

          {/* Projects list */}
          <div className="flex flex-col gap-28">
            {portfolio.projects.map((project, idx) => {
              const indexStr = String(idx + 1).padStart(2, "0");
              const visualLetter = project.name.charAt(0);

              return (
                <article
                  key={project.id}
                  className="project-block grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 border-b border-border/10 pb-24 last:border-b-0 last:pb-0"
                >
                  {/* Project info — left */}
                  <div className="project-info lg:col-span-6 flex flex-col items-start">

                    {/* Index + Name */}
                    <div className="flex items-baseline gap-4 mb-3">
                      <span
                        className="font-heading text-base font-bold text-primary select-none tabular-nums"
                        aria-hidden="true"
                      >
                        {indexStr}
                      </span>
                      <h3 className="font-heading text-[clamp(1.75rem,4.5vw,4rem)] font-extrabold tracking-tight text-foreground uppercase">
                        {project.name}
                      </h3>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 text-[10px] font-bold tracking-wider text-muted uppercase mb-6">
                      <span>{project.role}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm leading-relaxed text-secondary-text mb-6 max-w-md">
                      {project.description}
                    </p>

                    {/* Migration note */}
                    {project.migration && (
                      <div
                        className="mb-6 border border-primary/20 bg-primary/5 px-4 py-2.5 text-[10px] text-primary font-mono tracking-widest select-none"
                        role="note"
                      >
                        MIGRATION: {project.migration}
                      </div>
                    )}

                    {/* Tech stack */}
                    <div
                      className="flex flex-wrap gap-2 mb-8"
                      role="list"
                      aria-label="Technologies used"
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          role="listitem"
                          className="border border-border/40 bg-card px-3 py-1 text-[9px] font-bold tracking-widest text-secondary-text uppercase select-none"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3">
                      <ProjectCTA
                        href={project.demoUrl}
                        fallbackId="contact"
                        icon={<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
                        label={project.demoUrl ? `View ${project.name} live` : `Request details for ${project.name}`}
                        text={project.demoUrl ? "LIVE DEMO" : "REQUEST DETAILS"}
                        variant="primary"
                      />
                      <ProjectCTA
                        href={project.githubUrl}
                        fallbackId="contact"
                        icon={<Code2 className="h-3.5 w-3.5" aria-hidden="true" />}
                        label={project.githubUrl ? `View ${project.name} on GitHub` : `Discuss ${project.name}`}
                        text={project.githubUrl ? "GITHUB" : "DISCUSS PROJECT"}
                        variant="outline"
                      />
                    </div>
                  </div>

                  {/* Visual — right (clickable to open modal) */}
                  <div className="project-visual lg:col-span-6">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      data-cursor="project"
                      className="group/visual relative aspect-video w-full flex items-center justify-center bg-[#111111] border border-border/20 overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary/30"
                      aria-label={`View details for ${project.name}`}
                    >
                      {/* Hover border accent */}
                      <div className="absolute inset-0 border border-primary/0 group-hover/visual:border-primary/20 transition-colors duration-500" />

                      {/* Large background letter */}
                      <span className="font-heading text-[10rem] font-black text-[#1c1c1c] group-hover/visual:text-primary/5 transition-colors duration-700 ease-out transform group-hover/visual:scale-110 select-none">
                        {visualLetter}
                      </span>

                      {/* Centered label */}
                      <div className="absolute flex flex-col items-center gap-2">
                        <span className="text-[9px] font-bold tracking-[0.4em] text-muted group-hover/visual:text-primary transition-colors duration-300 uppercase">
                          {project.name.toUpperCase()}
                        </span>
                        <span className="text-[8px] font-bold tracking-[0.3em] text-muted/0 group-hover/visual:text-primary/60 transition-all duration-300 uppercase">
                          CLICK TO VIEW
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="absolute top-4 right-4 opacity-0 -translate-y-2 translate-x-2 group-hover/visual:opacity-100 group-hover/visual:translate-y-0 group-hover/visual:translate-x-0 transition-all duration-300">
                        <ArrowUpRight className="h-4 w-4 text-primary" aria-hidden="true" />
                      </div>
                    </button>
                  </div>

                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Project detail modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

interface ProjectCTAProps {
  href?: string;
  fallbackId: string;
  icon: React.ReactNode;
  label: string;
  text: string;
  variant: "primary" | "outline";
}

function ProjectCTA({ href, fallbackId, icon, label, text, variant }: ProjectCTAProps) {
  const baseClass =
    "inline-flex items-center gap-2 px-5 py-3 font-heading text-[9px] font-bold tracking-widest uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variantClass =
    variant === "primary"
      ? "border border-primary bg-primary/5 text-primary hover:bg-primary hover:text-background"
      : "border border-border/40 text-secondary-text hover:border-primary/50 hover:text-primary";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`${baseClass} ${variantClass}`}
      >
        {icon}
        {text}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() =>
        document.getElementById(fallbackId)?.scrollIntoView({ behavior: "smooth" })
      }
      className={`${baseClass} ${variantClass}`}
    >
      {icon}
      {text}
    </button>
  );
}
