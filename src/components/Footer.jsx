import { portfolioData } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./icons";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-card/40 safe-bottom"
      style={{ paddingBottom: "max(0px, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              {"Let's Connect"}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
              {
                "I'm excited about new opportunities, collaborations, and interesting projects. Feel free to reach out!"
              }
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <MailIcon className="h-4 w-4 shrink-0" />
              {portfolioData.contact.email}
            </a>
            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <PhoneIcon className="h-4 w-4 shrink-0" />
              {portfolioData.contact.phone}
            </a>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6">
          <p className="font-mono text-xs text-subtle-foreground">
            © 2025 Ankit Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
