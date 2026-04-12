// /src/components/Footer.tsx
import { ArrowUpRight, FileText, Github, Linkedin, Mail, Phone } from "lucide-react";
import { siteConfig } from "../site.config";
import { ResumeData } from "../types/resume";

type FooterProps = {
  resume: ResumeData;
};

export const Footer = ({ resume }: FooterProps) => {
  return (
    <footer id="contact" className="px-6 pb-10 pt-8 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-card">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Let’s connect</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Open to software developer opportunities.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              I’m looking for opportunities where I can keep building useful products, strengthen my engineering depth, and bring a practical, quality-focused approach to software teams.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.links.resume}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                <FileText size={16} />
                Download resume
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-green/40 hover:bg-white/10"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={siteConfig.links.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-blue/40 hover:bg-white/10"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6">
            <div className="flex items-center gap-4">
              <img
                src="/avatars/profile.png"
                alt={`${resume.displayName} profile`}
                className="h-16 w-16 rounded-2xl border border-white/10 object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-white">{resume.displayName}</p>
                <p className="text-sm text-slate-400">Full Stack Developer • iOS / React Native Developer</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-brand-green" />
                {resume.contact.email}
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-brand-blue" />
                {resume.contact.phone}
              </p>
            </div>

            <a
              href={siteConfig.links.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-brand-green"
            >
              View LinkedIn
              <ArrowUpRight size={15} />
            </a>

            <div className="mt-10 border-t border-white/10 pt-5 text-sm text-slate-400">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion.
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-2 text-xs text-slate-500">
        © 2026 {resume.displayName}. All rights reserved.
      </div>
    </footer>
  );
};
