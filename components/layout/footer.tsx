import { portfolio } from "@/lib/data/portfolio";

const GITHUB_URL = "https://github.com/bowwsudrajat";
const LINKEDIN_URL = "https://www.linkedin.com/in/kholidsudrajat";

export function Footer() {
  const { personal } = portfolio;

  return (
    <footer
      className="border-t border-border/20 bg-[#0A0A0A]"
      aria-label="Site footer"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          {/* Identity */}
          <div className="flex flex-col gap-1">
            <p className="font-heading text-sm font-bold tracking-widest text-foreground uppercase">
              {personal.name}
            </p>
            <p className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase">
              Frontend Engineer
            </p>
          </div>

          {/* Social links */}
          <nav
            aria-label="Social links"
            className="flex items-center gap-6"
          >
            <FooterLink
              href={`mailto:${personal.email}`}
              label="Email"
              text="EMAIL"
            />
            <FooterLink
              href={GITHUB_URL}
              label="GitHub"
              text="GITHUB"
              external
            />
            <FooterLink
              href={LINKEDIN_URL}
              label="LinkedIn"
              text="LINKEDIN"
              external
            />
          </nav>

          {/* Copyright */}
          <p className="text-[10px] font-bold tracking-widest text-muted uppercase">
            © 2026
          </p>

        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
  text: string;
  external?: boolean;
}

function FooterLink({ href, label, text, external }: FooterLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background"
    >
      {text}
    </a>
  );
}
