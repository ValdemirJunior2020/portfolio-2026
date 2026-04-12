// /src/hooks/useResumeData.ts
import { useMemo } from "react";
import { fallbackResume } from "../data/fallbackResume";

export const useResumeData = () => {
  const appCount = useMemo(() => fallbackResume.publishedApps.length, []);

  return {
    data: fallbackResume,
    isLoading: false,
    error: "",
    appCount,
  };
};
