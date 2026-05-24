"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/data/portfolio";
import { SectionHeading } from "@/components/effects/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills"
          title="Tools & technologies I"
          highlight="work with daily"
          align="center"
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((category) => (
            <StaggerItem key={category.label}>
              <motion.div
                className="glass-card group h-full rounded-2xl p-6"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading mb-4 text-lg font-semibold text-foreground">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="transition-colors group-hover:border-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
