import { siteConfig } from "../site.config";
import type { PublishedApp } from "../types/resume";
import { AppCard } from "./AppCard";
import { SectionHeading } from "./SectionHeading";

type AppsShowcaseProps = {
  publishedApps: PublishedApp[];
};

export function AppsShowcase({ publishedApps }: AppsShowcaseProps) {
  return (
    <section id="apps" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Apps I’ve Built"
          title="Projects I designed and developed from idea to implementation."
          description="A selection of apps I built to solve real problems, improve user experience, and strengthen my skills across frontend, backend, and product-focused development."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {siteConfig.appShowcase.map((app) => (
            <AppCard
              key={app.title}
              app={app}
              publishedApps={publishedApps}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
