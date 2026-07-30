import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <SectionHeading
        index="03"
        label="Projects"
        title="Featured Projects"
        description="A selection of full-stack, AI/ML, and web projects. Every card links to the source on GitHub."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.projects.map((project) => {
          const techList = project.tech.split(", ");
          return (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 sm:p-6 transition-all hover:border-border-strong hover:bg-card-hover"
            >
              <div className="mb-4 flex items-center justify-between">
                <GithubIcon className="h-5 w-5 text-subtle-foreground transition-colors group-hover:text-muted-foreground" />
                <ArrowUpRightIcon className="h-4 w-4 text-subtle-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {techList.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {techList.length > 3 && (
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-xs text-subtle-foreground">
                    +{techList.length - 3}
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
