"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { portfolio } from "@/lib/data/portfolio";
import { GradientText } from "@/components/effects/gradient-text";
import { AnimatedGrid } from "@/components/effects/animated-grid";
import { FloatingBlobs } from "@/components/effects/floating-blobs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function Hero() {
  const { personal } = portfolio;
  const { x, y } = useMousePosition();
  const firstName = personal.name.split(" ")[0];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20"
    >
      <AnimatedGrid />
      <FloatingBlobs />

      {/* Mouse-follow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(139,92,246,0.06), transparent 40%)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="glow" className="mb-8 gap-2 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </Badge>
          </motion.div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {personal.title} · {personal.location}
          </p>

          <h1 className="font-heading max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I&apos;m{" "}
            <GradientText as="span">{firstName}</GradientText>
            <br />
            I craft interfaces
            <br />
            <span className="text-muted">that feel </span>
            <GradientText as="span">premium</GradientText>
          </h1>

          <motion.p
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {portfolio.summary.slice(0, 160)}...
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Sparkles className="h-4 w-4" />
              Let&apos;s work together
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="/Kholid Sudrajat.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-20 flex flex-col items-center gap-2 text-muted"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
