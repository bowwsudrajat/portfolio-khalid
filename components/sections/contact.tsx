"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { portfolio } from "@/lib/data/portfolio";
import { SectionHeading } from "@/components/effects/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/effects/gradient-text";

export function Contact() {
  const { personal } = portfolio;
  const whatsappNumber = personal.whatsapp.replace(/\D/g, "").replace(/^0/, "62");

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Contact"
          title="Let's build something"
          highlight="remarkable"
          align="center"
        />

        <Reveal>
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 text-center backdrop-blur-xl md:p-16"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

            <div className="relative z-10">
              <h3 className="font-heading text-2xl font-bold text-foreground md:text-4xl">
                Ready to collaborate,{" "}
                <GradientText as="span">{personal.name.split(" ")[0]}</GradientText>?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Open to frontend roles, contract work, and consulting on UI
                modernization. Based in {personal.location}.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={`mailto:${personal.email}`}>
                    <Mail className="h-4 w-4" />
                    {personal.email}
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {personal.phone}
                </a>
                <span className="hidden text-border sm:inline">|</span>
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4 text-secondary" />
                  {personal.location}
                </span>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
