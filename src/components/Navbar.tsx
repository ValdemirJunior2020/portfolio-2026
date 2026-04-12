// /src/components/Navbar.tsx
import { FileText, Github, Linkedin, Mail, Menu } from "lucide-react";
import { siteConfig } from "../site.config";
import { ResumeData } from "../types/resume";

type NavbarProps = {
  resume: ResumeData;
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Apps", href: "#apps" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = ({ resume }: NavbarProps) => {
  const emailHref = `mailto:${resume.contact.email || siteConfig.links.emailFallback}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-slate-900/80 shadow-neon transition-transform duration-300 group-hover:scale-105">
            <span className="bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple bg-clip-text text-lg font-black text-transparent">
              VJ
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{resume.displayName}</p>
            <p className="text-xs text-slate-400">Full Stack • iOS • React Native</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-brand-green/40 hover:text-white"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.links.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-brand-blue/40 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={emailHref}
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-brand-purple/40 hover:text-white"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={siteConfig.links.resume}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-green/50 hover:bg-white/10"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-200 lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
};
