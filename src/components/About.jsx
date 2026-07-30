import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <SectionHeading index="01" label="About" title="About Me" />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6 sm:p-8">
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
            {portfolioData.about}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {portfolioData.education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-xl border border-border bg-card p-5 sm:p-6"
            >
              <p className="font-mono text-xs text-accent tracking-wider uppercase mb-2">
                Education
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-foreground text-balance">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {edu.institution}
              </p>
              <p className="mt-2 font-mono text-xs text-subtle-foreground">
                {edu.duration} · {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
