"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "about", label: "ABOUT" },
  { href: "projects", label: "WORK" },
  { href: "experience", label: "EXPERIENCE" },
  { href: "contact", label: "CONTACT" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLUListElement>(null);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animation
  useEffect(() => {
    const overlay = menuOverlayRef.current;
    if (!overlay) return;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlay, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power4.out",
      });
      if (menuLinksRef.current) {
        gsap.fromTo(
          menuLinksRef.current.querySelectorAll("li"),
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.07,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      }
    } else {
      document.body.style.overflow = "";
      gsap.to(overlay, {
        opacity: 0,
        y: "-100%",
        duration: 0.35,
        ease: "power3.in",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, mobileOpen ? 400 : 0);
  };

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300 px-6 md:px-12",
          scrolled
            ? "py-4 bg-background/85 backdrop-blur-md border-b border-border/30"
            : "py-6 bg-transparent"
        )}
        role="banner"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* Logo / home link */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="font-heading text-sm font-bold tracking-widest text-foreground uppercase transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Khalid Sudrajat — home"
          >
            KHALID SUDRAJAT
          </a>

          {/* Availability badge — desktop */}
          <div
            className="hidden items-center gap-2 border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold tracking-widest text-primary md:flex"
            aria-label="Availability status: available for work"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            AVAILABLE FOR WORK
          </div>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-[11px] font-semibold tracking-widest text-secondary uppercase transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger — mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center p-2 text-foreground transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        id="mobile-menu"
        ref={menuOverlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed inset-0 z-[49] flex -translate-y-full flex-col justify-between bg-card px-8 pb-12 pt-28 opacity-0 md:hidden"
      >
        <div className="flex flex-col gap-10">
          {/* Availability badge */}
          <div className="self-start flex items-center gap-2 border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold tracking-widest text-primary">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            AVAILABLE FOR WORK
          </div>

          <ul
            ref={menuLinksRef}
            className="flex flex-col gap-5"
            role="list"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading text-4xl font-bold tracking-tight text-foreground uppercase transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/20 pt-6">
          <p className="text-[10px] tracking-widest text-muted uppercase">
            CONTACT
          </p>
          <a
            href="mailto:kholidsudrajat@gmail.com"
            className="text-sm font-medium text-secondary-text transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            kholidsudrajat@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
