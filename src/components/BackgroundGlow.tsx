// /src/components/BackgroundGlow.tsx
export const BackgroundGlow = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-blue/15 blur-3xl" />
      <div className="absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-brand-purple/10 blur-3xl" />
      <div className="absolute bottom-0 right-20 h-80 w-80 rounded-full bg-brand-cyan/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
    </div>
  );
};


