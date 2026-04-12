// /src/components/TechSkillsPanel.tsx
import { motion } from "framer-motion";
import { Braces, Database, Rocket, Smartphone } from "lucide-react";
import { siteConfig } from "../site.config";
import { ResumeData } from "../types/resume";
import { SectionHeading } from "./SectionHeading";

type TechSkillsPanelProps = {
  resume: ResumeData;
};

const iconByTech = (tech: string) => {
  if (/swift|kotlin|react native|react/i.test(tech)) return Smartphone;
  if (/node|sql|mongo|firebase/i.test(tech)) return Database;
  if (/tailwind|next|typescript/i.test(tech)) return Braces;
  return Rocket;
};

export const TechSkillsPanel = ({ resume }: TechSkillsPanelProps) => {
  return (
    <section id="skills" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technologies & skills"
          title="Tools I use to build, ship, and improve products."
          description="My experience spans mobile development, frontend work, backend services, QA-driven problem solving, and product-focused execution."
        />

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Core stack</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {siteConfig.featuredTech.map((tech, index) => {
                const Icon = iconByTech(tech);
                return (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 text-sky-200">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-white">{tech}</p>
                        <p className="text-sm text-slate-400">Production-focused tool</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Experience areas</p>
            <div className="mt-6 space-y-5">
              {resume.skillCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                    <span className="rounded-full border border-sky-400/15 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
                      {category.items.length} items
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-brand-green/30 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
