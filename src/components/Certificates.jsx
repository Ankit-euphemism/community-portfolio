import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { CheckIcon } from "./icons";

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 sm:py-24">
      <SectionHeading
        index="05"
        label="Certificates"
        title={"Certifications & Achievements"}
      />
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.certificates.map((cert) => (
          <li
            key={cert}
            className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3.5 transition-colors hover:border-border-strong"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-muted">
              <CheckIcon className="h-3.5 w-3.5 text-accent" />
            </span>
            <p className="text-sm font-medium text-muted-foreground">{cert}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
