// /src/utils/resumeParser.ts
import * as mammoth from "mammoth/mammoth.browser";
import { fallbackResume } from "../data/fallbackResume";
import { siteConfig } from "../site.config";
import { PublishedApp, ResumeData, SkillCategory, WorkExperience } from "../types/resume";

const sectionSlice = (text: string, start: string, end?: string) => {
  const startIndex = text.indexOf(start);
  if (startIndex === -1) return "";
  const from = startIndex + start.length;
  const tail = text.slice(from);
  if (!end) return tail.trim();
  const endIndex = tail.indexOf(end);
  return (endIndex === -1 ? tail : tail.slice(0, endIndex)).trim();
};

const compactLines = (text: string) =>
  text
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);

const parseContact = (text: string) => {
  const phone = text.match(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/)?.[0] ?? fallbackResume.contact.phone;
  const email = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] ?? fallbackResume.contact.email;
  const website =
    text.match(/(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[\w.-]*)*/i)?.[0] ??
    fallbackResume.contact.website;

  return {
    phone,
    email,
    website: website.replace(/^https?:\/\//, ""),
    github: fallbackResume.contact.github,
    linkedIn: fallbackResume.contact.linkedIn,
  };
};

const parsePublishedApps = (text: string): PublishedApp[] => {
  const matches = [...text.matchAll(/([A-Za-z0-9\- ]+?)\s*\[([^\]]+)\]\s*([\s\S]*?)(?=(?:[A-Za-z0-9\- ]+?\s*\[[^\]]+\])|$)/g)];
  if (!matches.length) return fallbackResume.publishedApps;

  return matches
    .map((match) => ({
      title: match[1].replace(/^[•▸\-\s]+/, "").trim(),
      status: match[2].trim(),
      description: match[3].replace(/\s+/g, " ").trim(),
    }))
    .filter((item) => item.title && item.description);
};

const parseSkillCategories = (text: string): SkillCategory[] => {
  const lines = compactLines(text);
  const categories: SkillCategory[] = [];
  for (let index = 0; index < lines.length; index += 2) {
    const category = lines[index];
    const next = lines[index + 1];
    if (!category || !next) continue;
    categories.push({
      category,
      items: next.split(",").map((item) => item.trim()).filter(Boolean),
    });
  }
  return categories.length ? categories : fallbackResume.skillCategories;
};

const parseWorkExperience = (text: string): WorkExperience[] => {
  const lines = compactLines(text);
  const entries: WorkExperience[] = [];
  let index = 0;

  while (index < lines.length) {
    const companyRole = lines[index];
    const period = lines[index + 1];

    if (!companyRole || !period || !companyRole.includes("|")) {
      index += 1;
      continue;
    }

    const [company, role] = companyRole.split("|").map((part) => part.trim());
    const highlights: string[] = [];
    index += 2;

    while (index < lines.length && !lines[index].includes("|")) {
      highlights.push(lines[index]);
      index += 1;
    }

    entries.push({
      company,
      role,
      period,
      highlights,
    });
  }

  return entries.length ? entries : fallbackResume.workExperience;
};

const parseEducation = (text: string) => compactLines(text);
const parseAdditional = (text: string) => compactLines(text);

const detectDisplayName = (rawText: string): { displayName: string; note?: string } => {
  const lines = compactLines(rawText);
  const candidate = lines.find(
    (line) =>
      !/developer|summary|skills|applications|experience|education|additional/i.test(line) &&
      /^[A-Z][A-Za-z' -]{2,}$/.test(line)
  );

  if (candidate) {
    return { displayName: candidate };
  }

  return {
    displayName: siteConfig.identity.displayName,
    note:
      "The resume source did not include a dedicated full-name line, so the portfolio uses the configurable public display name fallback.",
  };
};

export const parseResumeRawText = (rawText: string, sourceLabel: string): ResumeData => {
  const summary = sectionSlice(rawText, "PROFESSIONAL SUMMARY", "PUBLISHED IOS APPLICATIONS")
    .replace(/\s+/g, " ")
    .trim();
  const appsText = sectionSlice(rawText, "PUBLISHED IOS APPLICATIONS", "TECHNICAL SKILLS");
  const skillsText = sectionSlice(rawText, "TECHNICAL SKILLS", "WORK EXPERIENCE");
  const workText = sectionSlice(rawText, "WORK EXPERIENCE", "EDUCATION & CERTIFICATIONS");
  const educationText = sectionSlice(rawText, "EDUCATION & CERTIFICATIONS", "ADDITIONAL");
  const additionalText = sectionSlice(rawText, "ADDITIONAL");
  const lines = compactLines(rawText);
  const { displayName, note } = detectDisplayName(rawText);

  return {
    displayName,
    roles: lines.slice(0, 3).filter((line) => !line.includes("@") && !line.includes("portfolio-two")),
    summary: summary || fallbackResume.summary,
    contact: parseContact(rawText),
    publishedApps: parsePublishedApps(appsText),
    skillCategories: parseSkillCategories(skillsText),
    workExperience: parseWorkExperience(workText),
    education: parseEducation(educationText),
    additional: parseAdditional(additionalText),
    sourceLabel,
    sourceNote: note ?? fallbackResume.sourceNote,
  };
};

export const parseResumeFromArrayBuffer = async (
  arrayBuffer: ArrayBuffer,
  sourceLabel: string
): Promise<ResumeData> => {
  const result = await mammoth.extractRawText({ arrayBuffer });
  return parseResumeRawText(result.value, sourceLabel);
};


