// /src/components/AppCard.tsx
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import { PublishedApp } from "../types/resume";

type ShowcaseCard = {
  title: string;
  productName: string;
  image?: string;
  stack: string[];
  description: string;
  cta: string;
  secondaryCta: string;
};

type AppCardProps = {
  app: ShowcaseCard;
  publishedApps: PublishedApp[];
};

export const AppCard = ({ app, publishedApps }: AppCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const relatedResumeEntry = useMemo(
    () => publishedApps.find((item) => item.title.toLowerCase() === app.title.toLowerCase()) ?? publishedApps.find((item) => item.title.toLowerCase().includes(app.title.toLowerCase())),
    [app.title, publishedApps]
  );

  const hasImage = Boolean(app.image);

  return (
    <>
      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-5 shadow-card"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-purple/10 opacity-0 transition group-hover:opacity-100" />
        <div className="relative flex h-full flex-col gap-5">
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950">
            {hasImage ? (
              <img
                src={app.image}
                alt={`${app.title} app preview`}
                className="h-[23rem] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-[23rem] w-full flex-col justify-between bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.16),transparent_30%),linear-gradient(180deg,#020617,#071120)] p-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                  <CheckCircle2 size={13} />
                  iOS app
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Featured product</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">{app.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">{app.description}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{app.productName}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{app.title}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                Ready
              </span>
            </div>

            <p className="text-sm leading-7 text-slate-300">{app.description}</p>

            <div className="flex flex-wrap gap-2">
              {app.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              {app.cta}
              <ArrowUpRight size={15} />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300/40 hover:bg-white/10"
            >
              {app.secondaryCta}
            </button>
          </div>
        </div>
      </motion.article>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/85 p-4 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#071120] p-6 shadow-neon">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{app.productName}</p>
                <h4 className="mt-2 text-2xl font-semibold text-white">{app.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300 transition hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
              {hasImage ? (
                <img src={app.image} alt={`${app.title} app preview`} className="rounded-[1.5rem] border border-white/10 bg-slate-950" />
              ) : (
                <div className="flex min-h-[24rem] flex-col justify-end rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.16),transparent_30%),linear-gradient(180deg,#020617,#071120)] p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Featured product</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{app.title}</p>
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-white">Overview</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{app.description}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-white">Status</p>
                  <p className="mt-2 rounded-2xl border border-brand-green/20 bg-brand-green/10 px-4 py-3 text-sm text-brand-green">
                    {relatedResumeEntry?.status ?? "Ready for Distribution"}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-white">Notes</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {relatedResumeEntry?.description ?? app.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {app.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
