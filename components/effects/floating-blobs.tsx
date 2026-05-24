"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className: "left-[10%] top-[15%] h-72 w-72 bg-primary/30",
    animate: { x: [0, 40, 0], y: [0, -30, 0] },
    duration: 12,
  },
  {
    className: "right-[15%] top-[25%] h-96 w-96 bg-secondary/20",
    animate: { x: [0, -50, 0], y: [0, 40, 0] },
    duration: 14,
  },
  {
    className: "bottom-[20%] left-[30%] h-64 w-64 bg-primary/20",
    animate: { x: [0, 30, 0], y: [0, 50, 0] },
    duration: 10,
  },
];

export function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
