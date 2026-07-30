import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <SectionHeading index="04" label="Skills" title="Technical Skills" />
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        {Object.entries(portfolioData.skills).map(
          ([category, skillsList], i) => (
            <div
              key={category}
              className={`flex flex-col gap-3 p-5 sm:p-6 sm:flex-row sm:items-baseline sm:gap-8 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <h3 className="w-full shrink-0 font-mono text-xs uppercase tracking-widest text-accent sm:w-40">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-background px-3 py-1 text-xs sm:text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
