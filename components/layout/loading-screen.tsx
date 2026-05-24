"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolio } from "@/lib/data/portfolio";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="h-12 w-12 rounded-xl border border-border bg-card"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(139,92,246,0)",
                  "0 0 40px 0 rgba(139,92,246,0.4)",
                  "0 0 0 0 rgba(139,92,246,0)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <div className="text-center">
              <p className="font-heading text-lg font-semibold text-foreground">
                {portfolio.personal.name.split(" ")[0]}
              </p>
              <p className="text-sm text-muted">Loading portfolio</p>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-16 h-1 w-48 overflow-hidden rounded-full bg-border"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
