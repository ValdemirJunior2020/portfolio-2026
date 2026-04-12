// /src/data/fallbackResume.ts
import { ResumeData } from "../types/resume";

export const fallbackResume: ResumeData = {
  displayName: "Valdemir Junior",
  roles: ["Full Stack Developer", "iOS / Android Developer", "Quality Assurance Manager"],
  summary:
    "I am a full stack developer and iOS / Android developer with hands-on experience building real apps, shipping to the App Store, and creating internal tools that improve workflows. I also work as a Quality Assurance Manager, which has strengthened how I think about reliability, user experience, and production readiness.",
  contact: {
    phone: "754-366-9922",
    email: "infojr.83@gmail.com",
    website: "portfolio-two-phi-54.vercel.app",
    github: "https://github.com/ValdemirJunior2020",
    linkedIn: "https://www.linkedin.com/in/valdemir-junior-23442676/",
  },
  publishedApps: [
    {
      title: "ReceiptAI Pro",
      status: "iOS 1.0.1 – Ready for distribution and available in the App Store",
      description:
        "An AI-powered receipt scanning and expense tracking app built around image capture, data extraction, subscriptions, and a polished mobile workflow.",
    },
    {
      title: "BlazeoffireApp",
      status: "iOS 1.0.2 – Ready for distribution and available in the App Store",
      description:
        "A church and ministry mobile app focused on live video, prayer support, authentication, account management, and community connection.",
    },
    {
      title: "Congregate-Church",
      status: "iOS 1.0 – Ready for distribution and available in the App Store",
      description:
        "A church community and ministry management app designed to support engagement, communication, and day-to-day ministry needs.",
    },
  ],
  skillCategories: [
    {
      category: "Mobile",
      items: [
        "React Native",
        "iOS (iPadOS)",
        "Expo",
        "Hermes Engine",
        "TurboModules",
        "App Store Connect",
        "TestFlight",
      ],
    },
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Swift (basic)", "HTML", "CSS", "Node.js"],
    },
    {
      category: "Frontend",
      items: ["React", "React Native Navigation", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "REST APIs", "MongoDB", "SQL", "Firebase"],
    },
    {
      category: "AI / APIs",
      items: ["OpenAI API", "Anthropic Claude API", "LLM integration", "Prompt engineering"],
    },
    {
      category: "Delivery & QA",
      items: [
        "GitHub",
        "Xcode",
        "App Store submission",
        "Crash analysis",
        "Quality assurance",
        "Process improvement",
      ],
    },
  ],
  workExperience: [
    {
      company: "HotelPlanner.com",
      role: "Quality Assurance Manager",
      period: "April 2023 – Present",
      highlights: [
        "Lead quality assurance operations for multiple outsourced call centers and support performance improvement across teams.",
        "Built internal tools to track meeting notes, performance reports, QA feedback, and agent KPIs.",
        "Use data, coaching, and process reviews to improve consistency, accountability, and service quality.",
      ],
    },
    {
      company: "Bethel School of Technology",
      role: "Full Stack Developer Intern",
      period: "Aug 2020 – Aug 2021",
      highlights: [
        "Built a stroke recovery community platform using MVC architecture.",
        "Collaborated on group projects using GitHub and agile workflows.",
        "Worked with JavaScript, React, HTML/CSS, and MongoDB in full stack projects.",
      ],
    },
    {
      company: "DNA Painting",
      role: "Owner / Contractor",
      period: "2010 – 2020",
      highlights: [
        "Ran a painting and pressure-cleaning business and managed clients, crews, budgets, and project delivery.",
        "Built strong communication, leadership, and accountability skills that still shape how I work in software today.",
      ],
    },
  ],
  education: [
    "Bethel School of Technology | Full Stack Web Development Bootcamp (Powered by Woz U) — 2020–2021",
    "Udemy | ColdFusion Backend Development — August 2023",
  ],
  additional: [
    "Ordained pastor with leadership, counseling, mentorship, and community outreach experience.",
    "Interests: gardening, drums, and music.",
  ],
  sourceLabel: "Portfolio profile",
  sourceNote: "Focused on production-ready mobile apps, internal tools, and developer opportunities.",
};