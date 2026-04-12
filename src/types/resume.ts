// /src/types/resume.ts
export type ResumeContact = {
  phone: string;
  email: string;
  website: string;
  github?: string;
  linkedIn?: string;
};

export type PublishedApp = {
  title: string;
  status: string;
  description: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type WorkExperience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type ResumeData = {
  displayName: string;
  roles: string[];
  summary: string;
  contact: ResumeContact;
  publishedApps: PublishedApp[];
  skillCategories: SkillCategory[];
  workExperience: WorkExperience[];
  education: string[];
  additional: string[];
  sourceLabel: string;
  sourceNote?: string;
};


