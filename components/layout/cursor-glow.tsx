"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed z-[5] hidden h-[500px] w-[500px] rounded-full md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)",
        left: x - 250,
        top: y - 250,
      }}
      animate={{ left: x - 250, top: y - 250 }}
      transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.5 }}
    />
  );
}
