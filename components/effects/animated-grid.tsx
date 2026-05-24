"use client";

import { motion } from "framer-motion";

export function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #27272A 1px, transparent 1px),
            linear-gradient(to bottom, #27272A 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8B5CF6 1px, transparent 1px),
            linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, black 10%, transparent 60%)",
        }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
