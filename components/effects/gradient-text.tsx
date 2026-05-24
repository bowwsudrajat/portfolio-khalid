"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "span" | "p";
}

export function GradientText({
  children,
  className,
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-r from-primary via-[#A78BFA] to-secondary bg-clip-text text-transparent",
        className
      )}
    >
      <motion.span
        className="inline-block bg-gradient-to-r from-primary via-[#A78BFA] to-secondary bg-[length:200%_auto] bg-clip-text text-transparent"
        animate={{ backgroundPosition: ["0% center", "200% center", "0% center"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% auto" }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
