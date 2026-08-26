"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const animateOut = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: onClose,
    });
    tl.to(panelRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
    }).to(
      overlayRef.current,
      { opacity: 0, duration: 0.25, ease: "power2.in" },
      "-=0.15"
    );
  }, [onClose]);

  // Animate in on mount
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(panelRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline();
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    }).to(
      panelRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease: "power4.out" },
      "-=0.1"
    );

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") animateOut();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [animateOut]);

  if (!project) return null;

  const visualLetter = project.name.charAt(0);

  return (
    <div
      ref={overlayRef}
      data-lenis-prevent="true"
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.name}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={animateOut}
        aria-hidden="true"
      />

      {/* Panel with smooth custom scrollbar */}
      <div
        ref={panelRef}
        data-lenis-prevent="true"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-[#0d0d0d] border border-border/30 shadow-2xl flex flex-col"
      >
        {/* Sticky Close button */}
        <button
          type="button"
          onClick={animateOut}
          className="sticky top-4 right-4 self-end z-30 mr-4 -mb-10 flex h-10 w-10 items-center justify-center border border-border/40 bg-[#0d0d0d]/90 backdrop-blur-md text-secondary-text transition-all duration-300 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Visual hero banner */}
        <div className="relative h-44 sm:h-56 md:h-64 w-full flex items-center justify-center bg-[#111111] border-b border-border/20 overflow-hidden shrink-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0d0d0d]" />

          {/* Large background letter */}
          <span className="font-heading text-[12rem] sm:text-[16rem] font-black text-[#191919] select-none leading-none pointer-events-none">
            {visualLetter}
          </span>

          {/* Center project name badge */}
          <div className="absolute flex flex-col items-center gap-1.5 px-4 text-center">
            <span className="text-[10px] font-bold tracking-[0.35em] text-primary uppercase">
              {project.role}
            </span>
            <span className="font-heading text-2xl sm:text-4xl font-black tracking-tight text-foreground uppercase">
              {project.name}
            </span>
          </div>

          {/* Year badge */}
          <div className="absolute top-4 left-4 border border-border/30 bg-background/70 backdrop-blur-sm px-3 py-1">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase tabular-nums">
              {project.year}
            </span>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-10 flex flex-col gap-8">
          {/* Header row */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between border-b border-border/20 pb-6">
            <div className="flex flex-col gap-2 max-w-xl">
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground uppercase">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-3 text-[10px] font-bold tracking-wider text-muted uppercase">
                <span>{project.role}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* Visit website CTA */}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex items-center gap-2 shrink-0 border border-primary bg-primary/5 px-6 py-3 font-heading text-[10px] font-bold tracking-widest text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Visit ${project.name} website`}
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                VISIT WEBSITE
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Description / Overview Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase">
                // OVERVIEW &amp; DESCRIPTION
              </p>
            </div>
            <div className="rounded-sm bg-card/30 border border-border/20 p-5 sm:p-6">
              <p className="font-sans text-sm sm:text-base leading-relaxed text-secondary-text tracking-wide whitespace-pre-line">
                {project.detailedDescription || project.description}
              </p>
            </div>
          </div>

          {/* Migration note if any */}
          {project.migration && (
            <div className="border border-primary/25 bg-primary/5 px-5 py-3 text-[10px] text-primary font-mono tracking-widest select-none flex items-center gap-2">
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>MIGRATION: {project.migration}</span>
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase">
              // TECH STACK
            </p>
            <div
              className="flex flex-wrap gap-2.5"
              role="list"
              aria-label="Technologies used"
            >
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  role="listitem"
                  className="border border-border/40 bg-card px-4 py-2 text-[10px] font-bold tracking-widest text-secondary-text uppercase select-none transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom actions bar */}
          <div className="pt-6 border-t border-border/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 font-heading text-[9px] font-bold tracking-widest text-secondary-text uppercase transition-all duration-300 border border-border/40 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  LIVE SITE
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 font-heading text-[9px] font-bold tracking-widest text-secondary-text uppercase transition-all duration-300 border border-border/40 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  DEMO
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={animateOut}
              className="font-heading text-[9px] font-bold tracking-widest text-muted uppercase hover:text-primary transition-colors duration-300 py-2 cursor-pointer"
            >
              CLOSE [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
