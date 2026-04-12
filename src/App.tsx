// /src/App.tsx
import { BackgroundGlow } from "./components/BackgroundGlow";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AppsShowcase } from "./components/AppsShowcase";
import { TechSkillsPanel } from "./components/TechSkillsPanel";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { useResumeData } from "./hooks/useResumeData";

export default function App() {
  const { data, appCount } = useResumeData();

  return (
    <div className="min-h-screen bg-hero-radial text-white">
      <div className="relative min-h-screen overflow-hidden">
        <BackgroundGlow />
        <Navbar resume={data} />
        <main>
          <HeroSection resume={data} appCount={appCount} />
          <AppsShowcase publishedApps={data.publishedApps} />
          <TechSkillsPanel resume={data} />
          <ExperienceSection resume={data} />
        </main>
        <Footer resume={data} />
      </div>
    </div>
  );
}
