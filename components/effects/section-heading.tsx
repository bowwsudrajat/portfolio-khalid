import { Badge } from "@/components/ui/badge";
import { GradientText } from "@/components/effects/gradient-text";
import { Reveal } from "@/components/effects/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  highlight,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal className={cn("mb-16 md:mb-20", className)}>
      <div
        className={cn(
          "flex flex-col gap-4",
          isCenter && "items-center text-center"
        )}
      >
        <Badge variant="glow">{label}</Badge>
        <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {title}{" "}
          {highlight && <GradientText as="span">{highlight}</GradientText>}
        </h2>
        {description && (
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-muted md:text-lg",
              isCenter && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
