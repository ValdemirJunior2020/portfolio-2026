// /src/components/ExperienceSection.tsx
import { motion } from "framer-motion";
import { ResumeData } from "../types/resume";
import { SectionHeading } from "./SectionHeading";

type ExperienceSectionProps = {
  resume: ResumeData;
};

export const ExperienceSection = ({ resume }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Built with quality standards, real-world delivery, and hands-on development."
          description="My background combines software development, App Store delivery, and quality assurance leadership. That mix helps me build practical tools, think carefully about edge cases, and stay focused on software that is reliable and useful."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {resume.workExperience.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-card"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                {experience.period}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {experience.company}
              </h3>

              <p className="mt-2 text-sm font-medium text-brand-green">
                {experience.role}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue shadow-[0_0_14px_rgba(59,130,246,0.9)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};