import { portfolioData } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from "./icons";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "DSA (Java)",
  "AI Explorer",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 sm:py-20"
    >
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex w-full flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <p className="font-mono text-xs sm:text-sm text-accent tracking-widest uppercase">
            {"> BTech CSE Student · Building for Future"}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance">
            Ankit Kumar
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {role}
              </span>
            ))}
          </div>

          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
            Building scalable applications and solving real-world problems
            with modern tech. Currently exploring full-stack development, AI
            and machine learning.
          </p>

          <p className="flex items-center gap-1.5 text-xs sm:text-sm text-subtle-foreground">
            <MapPinIcon className="h-4 w-4" />
            Lucknow, UP, India
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
            <a
              href="#contact-form"
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border-strong px-6 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View My Work
            </a>
            <div className="flex items-center gap-1">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-accent"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-accent"
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                title="Email"
                className="flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-accent"
              >
                <MailIcon className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="relative h-44 w-44 sm:h-56 sm:w-56 lg:h-72 lg:w-72 overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={portfolioData.imageUrl}
              alt={portfolioData.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground shadow-lg">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
            Open to opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
