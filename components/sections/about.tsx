import { portfolio } from "@/lib/data/portfolio";
import { SectionHeading } from "@/components/effects/section-heading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/effects/reveal";
import { MapPin, Mail, Phone } from "lucide-react";

export function About() {
  const { personal, summary, additionalInfo } = portfolio;

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About"
          title="Building digital products with"
          highlight="precision & care"
          description="A decade of frontend craftsmanship across enterprise finance, healthcare, and e-commerce."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {summary}
              </p>
              <ul className="mt-8 space-y-3">
                {additionalInfo.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground/90 md:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <StaggerContainer className="flex flex-col gap-4 lg:col-span-2">
            {[
              {
                icon: MapPin,
                label: "Location",
                value: personal.location,
              },
              {
                icon: Mail,
                label: "Email",
                value: personal.email,
                href: `mailto:${personal.email}`,
              },
              {
                icon: Phone,
                label: "Phone",
                value: personal.phone,
                href: `tel:${personal.phone.replace(/\s/g, "")}`,
              },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="glass-card group rounded-2xl p-6 transition-all hover:border-primary/30">
                  <item.icon className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block font-medium text-foreground transition-colors group-hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </StaggerItem>
            ))}

            <StaggerItem>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="font-heading text-3xl font-bold text-foreground">10+</p>
                <p className="mt-1 text-sm text-muted">Years of frontend experience</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
