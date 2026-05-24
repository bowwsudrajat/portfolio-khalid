"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/data/portfolio";
import { SectionHeading } from "@/components/effects/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Experience"
          title="A timeline of"
          highlight="professional growth"
          description="Over a decade shipping interfaces for finance, automotive, healthcare, and digital products."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-primary via-border to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {portfolio.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <Reveal key={exp.id} delay={index * 0.05}>
                  <div
                    className={`relative flex flex-col gap-6 md:flex-row ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-8 hidden md:left-1/2 md:block md:-translate-x-1/2">
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-card shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]"
                        whileInView={{ scale: [0.8, 1.1, 1] }}
                        viewport={{ once: true }}
                      >
                        <Briefcase className="h-4 w-4 text-primary" />
                      </motion.div>
                    </div>

                    <div className={`md:w-1/2 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                      <div className="glass-card rounded-2xl p-6 md:p-8">
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                          <Badge variant="secondary">{exp.period}</Badge>
                        </div>

                        <h3 className="font-heading text-lg font-bold text-foreground md:text-xl">
                          {exp.role}
                        </h3>
                        <p className="mt-1 font-medium text-primary">
                          {exp.company}
                        </p>
                        {exp.client && (
                          <p className="mt-0.5 text-sm text-muted">
                            Client: {exp.client}
                          </p>
                        )}

                        <ul className="mt-4 space-y-2">
                          {exp.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.techStack.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
