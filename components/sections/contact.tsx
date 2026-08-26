"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/lib/data/portfolio";

const GITHUB_URL = "https://github.com/bowwsudrajat";
const LINKEDIN_URL = "https://www.linkedin.com/in/kholidsudrajat";

export function Contact() {
  const { personal } = portfolio;
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Heading lines stagger up
      if (headingRef.current) {
        const lines = headingRef.current.querySelectorAll(".contact-line");
        gsap.fromTo(
          lines,
          { opacity: 0, y: 80, skewY: 3 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Details fade in
      if (detailsRef.current) {
        gsap.fromTo(
          detailsRef.current,
          { opacity: 0, y: 30 },
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

      // CTA scale in
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // CTA hover — GSAP hover effect on the arrow span
  const handleCtaEnter = () => {
    gsap.to(".cta-arrow", { x: 6, duration: 0.3, ease: "power2.out" });
    gsap.to(".cta-underline", { scaleX: 1, duration: 0.4, ease: "power3.out" });
  };
  const handleCtaLeave = () => {
    gsap.to(".cta-arrow", { x: 0, duration: 0.3, ease: "power2.out" });
    gsap.to(".cta-underline", { scaleX: 0, duration: 0.4, ease: "power3.out" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-label="Contact"
      className="relative bg-[#0A0A0A] pt-32 pb-0 overflow-hidden border-t border-border/20"
    >
      {/* Subtle accent blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/5 blur-[160px]"
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">

        {/* Section label */}
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
            [ 05 // CONTACT ]
          </span>
        </div>

        {/* Large cinematic heading */}
        <div ref={headingRef} className="overflow-hidden mb-20">
          <div className="contact-line overflow-hidden">
            <h2 className="font-heading text-[clamp(3rem,12vw,10rem)] font-black leading-[0.88] tracking-tighter text-foreground uppercase select-none">
              LET&rsquo;S BUILD
            </h2>
          </div>
          <div className="contact-line overflow-hidden">
            <span className="font-heading text-[clamp(3rem,12vw,10rem)] font-black leading-[0.88] tracking-tighter text-foreground uppercase select-none block">
              SOMETHING
            </span>
          </div>
          <div className="contact-line overflow-hidden">
            <span className="font-heading text-[clamp(3rem,12vw,10rem)] font-black leading-[0.88] tracking-tighter text-primary uppercase select-none block">
              GOOD.
            </span>
          </div>
        </div>

        {/* Contact details row */}
        <div
          ref={detailsRef}
          className="grid grid-cols-1 gap-10 border-t border-border/20 pt-12 lg:grid-cols-12"
        >
          {/* Left: description */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <p className="font-sans text-sm leading-relaxed text-secondary-text tracking-wide max-w-sm">
              Open to frontend roles, consulting work, and creative technology
              collaborations. Based in {personal.location}.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-[10px] font-bold tracking-widest text-muted uppercase">
                STATUS
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Available for work
                </span>
              </div>
            </div>
          </div>

          {/* Right: links */}
          <div className="lg:col-span-7 flex flex-col gap-0">
            <ContactLink
              label="EMAIL"
              value={personal.email}
              href={`mailto:${personal.email}`}
            />
            <ContactLink
              label="GITHUB"
              value="github.com/bowwsudrajat"
              href={GITHUB_URL}
              external
            />
            <ContactLink
              label="LINKEDIN"
              value="linkedin.com/in/kholidsudrajat"
              href={LINKEDIN_URL}
              external
            />
          </div>
        </div>

        {/* Main CTA */}
        <div className="mt-20 pb-28">
          <a
            ref={ctaRef}
            href={`mailto:${personal.email}`}
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
            className="group relative inline-flex items-center gap-4 font-heading text-xl font-bold tracking-widest text-foreground uppercase transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Start a conversation via email"
          >
            <span className="relative">
              START A CONVERSATION
              {/* Underline that slides in on hover */}
              <span
                className="cta-underline absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-primary"
                aria-hidden="true"
              />
            </span>
            <span
              className="cta-arrow inline-block text-primary"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

interface ContactLinkProps {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

function ContactLink({ label, value, href, external }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between border-b border-border/20 py-5 transition-colors duration-300 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background"
    >
      <span className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase group-hover:text-primary transition-colors duration-300">
        {label}
      </span>
      <span className="font-sans text-sm font-medium text-secondary-text group-hover:text-foreground transition-colors duration-300">
        {value}
      </span>
      <span
        className="ml-4 text-muted opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 translate-x-1 group-hover:translate-x-0"
        aria-hidden="true"
      >
        ↗
      </span>
    </a>
  );
}
