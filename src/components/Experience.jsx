import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <SectionHeading
        index="02"
        label="Experience"
        title={"Where I've Worked"}
      />
      <div className="relative flex flex-col gap-8 border-l border-border pl-6 sm:pl-10">
        {portfolioData.experience.map((exp) => (
          <article key={`${exp.company}-${exp.role}`} className="relative">
            <span
              className="absolute -left-[calc(1.5rem+5px)] sm:-left-[calc(2.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
              aria-hidden="true"
            />
            <div className="rounded-xl border border-border bg-card p-5 sm:p-7 transition-colors hover:border-border-strong">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm sm:text-base text-accent font-medium">
                    {exp.company}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-xs text-subtle-foreground">
                  {exp.duration}
                </p>
              </div>
              <p className="mt-1 text-xs text-subtle-foreground">
                {exp.location}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {exp.description.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
