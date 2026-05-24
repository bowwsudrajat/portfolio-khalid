"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/data/portfolio";
import { SectionHeading } from "@/components/effects/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolio.projects)[0];
  index: number;
}) {
  const contactHref = "#contact";

  return (
    <StaggerItem className="h-full">
      <motion.article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm",
          project.featured && "md:col-span-2"
        )}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/50 via-secondary/30 to-primary/50" />
          <div className="absolute inset-[1px] rounded-2xl bg-card" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mb-4 flex items-start justify-between">
            <div>
              {project.featured && (
                <Badge variant="glow" className="mb-3">
                  Featured
                </Badge>
              )}
              <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">
                {project.name}
              </h3>
            </div>
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/50 text-muted transition-colors group-hover:border-primary/50 group-hover:text-primary"
              whileHover={{ rotate: 45 }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-muted md:text-base">
            {project.description}
          </p>

          <div
            className={cn(
              "mb-4 min-h-[2.75rem]",
              !project.migration && "invisible"
            )}
            aria-hidden={!project.migration}
          >
            {project.migration && (
              <p className="rounded-lg border border-secondary/20 bg-secondary/5 px-3 py-2 text-xs text-secondary">
                {project.migration}
              </p>
            )}
          </div>

          <div className="mb-6 flex flex-1 flex-wrap content-start gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            <Button variant="default" size="sm" asChild>
              <a
                href={project.demoUrl ?? contactHref}
                onClick={
                  !project.demoUrl
                    ? (e) => {
                        e.preventDefault();
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    : undefined
                }
                target={project.demoUrl ? "_blank" : undefined}
                rel={project.demoUrl ? "noopener noreferrer" : undefined}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {project.demoUrl ? "Live demo" : "Request details"}
              </a>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <a
                href={project.githubUrl ?? contactHref}
                onClick={
                  !project.githubUrl
                    ? (e) => {
                        e.preventDefault();
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    : undefined
                }
                target={project.githubUrl ? "_blank" : undefined}
                rel={project.githubUrl ? "noopener noreferrer" : undefined}
              >
                <Code2 className="h-3.5 w-3.5" />
                {project.githubUrl ? "GitHub" : "Discuss project"}
              </a>
            </Button>
          </div>
        </div>

        {/* Index number decoration */}
        <span className="pointer-events-none absolute -bottom-4 -right-2 font-heading text-[6rem] font-bold leading-none text-foreground/[0.03]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.article>
    </StaggerItem>
  );
}

export function Projects() {
  const featured = portfolio.projects.filter((p) => p.featured);
  const others = portfolio.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="Selected work across"
          highlight="industries & stacks"
          description="From enterprise finance platforms to healthcare and e-commerce — real products shipped in production."
        />

        <StaggerContainer className="mb-8 grid auto-rows-fr gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </StaggerContainer>

        <StaggerContainer
          className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {others.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + featured.length}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
