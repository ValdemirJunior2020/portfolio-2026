// /src/components/HeroSection.tsx
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { siteConfig } from "../site.config";
import { ResumeData } from "../types/resume";

type HeroSectionProps = {
  resume: ResumeData;
  appCount: number;
};

const mockupCards = [
  { image: "/app-shots/congregate.png", rotate: "-10deg", top: "10%", left: "2%" },
  { image: "/app-shots/receiptai-pro.png", rotate: "7deg", top: "0%", left: "36%" },
  { image: "/app-shots/blazeoffire.png", rotate: "14deg", top: "18%", left: "62%" },
];

export const HeroSection = ({ resume, appCount }: HeroSectionProps) => {
  const emailHref = `mailto:${resume.contact.email}`;

  return (
    <section id="home" className="relative overflow-hidden px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-green"
          >
            <Sparkles size={14} />
            Available for developer opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-6 flex items-center gap-4"
          >
            <img
              src="/avatars/profile.png"
              alt={`${resume.displayName} profile`}
              className="h-20 w-20 rounded-2xl border border-white/10 object-cover shadow-neon"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Full Stack • iOS • React Native</p>
              <p className="mt-1 text-sm text-slate-300">{resume.contact.email}</p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {resume.displayName}
            <span className="mt-3 block bg-gradient-to-r from-brand-green via-sky-300 to-brand-purple bg-clip-text text-transparent">
              {siteConfig.identity.tagline}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.12 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {resume.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.18 }}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-300"
          >
            {resume.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#apps"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              View selected apps
              <ArrowRight size={16} />
            </a>
            <a
              href={siteConfig.links.resume}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/40 hover:bg-white/10"
            >
              Download resume
              <Download size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.3 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-slate-900/70 p-3 text-slate-300 transition hover:border-brand-green/40 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.links.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-slate-900/70 p-3 text-slate-300 transition hover:border-brand-blue/40 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={emailHref}
              className="rounded-full border border-white/10 bg-slate-900/70 p-3 text-slate-300 transition hover:border-brand-purple/40 hover:text-white"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <div className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
              {resume.contact.phone} • {resume.contact.website}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.35 }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-card">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Published iOS apps</p>
              <p className="mt-3 text-3xl font-semibold text-white">{appCount}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-card">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Primary stack</p>
              <p className="mt-3 text-lg font-semibold text-white">React Native + Full Stack</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-card">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Background</p>
              <p className="mt-3 text-lg font-semibold text-white">Engineering + QA leadership</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-purple/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-neon backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Portfolio highlights</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Real apps, shipping experience, and product focus</h3>
              </div>
              <div className="rounded-full border border-brand-green/20 bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                Hiring-ready
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              I focus on building useful products, improving workflows, and shipping software with a strong eye for quality, clarity, and follow-through.
            </p>

            <div className="mt-6 grid gap-3">
              {resume.publishedApps.map((app) => (
                <div
                  key={app.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                >
                  <p className="text-sm font-semibold text-white">{app.title}</p>
                  <p className="mt-1 text-sm text-brand-green">{app.status}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-8 h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_35%),linear-gradient(180deg,rgba(2,6,23,0.8),rgba(2,6,23,0.35))]">
              {mockupCards.map((card, index) => (
                <motion.img
                  key={card.image}
                  src={card.image}
                  alt=""
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + index * 0.08 }}
                  className="absolute h-[24rem] rounded-[1.75rem] border border-white/10 bg-slate-950 shadow-neon"
                  style={{ transform: `rotate(${card.rotate})`, top: card.top, left: card.left }}
                />
              ))}
              <div className="absolute bottom-6 left-6 rounded-[1.5rem] border border-white/10 bg-slate-950/85 p-5 shadow-card">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Featured app</p>
                <p className="mt-2 text-xl font-semibold text-white">ReceiptAI Pro</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">
                  Approved iOS app focused on receipt capture, data extraction, and expense tracking.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
