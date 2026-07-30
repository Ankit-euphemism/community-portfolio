export default function SectionHeading({ index, label, title, description }) {
  return (
    <div className="mb-10 sm:mb-14 flex flex-col gap-3">
      <p className="font-mono text-xs sm:text-sm text-accent tracking-widest uppercase">
        <span className="text-subtle-foreground">{index}</span>
        {" — "}
        {label}
      </p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
