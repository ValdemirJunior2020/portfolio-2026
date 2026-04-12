// /src/components/SectionHeading.tsx
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-8 flex flex-col gap-3 ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-slate-900/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
        <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_14px_rgba(34,197,94,0.85)]" />
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
      </div>
    </div>
  );
};


