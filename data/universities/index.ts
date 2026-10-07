import { amityUniversityOnline } from "@/data/universities/amity-university-online";
import type { UniversityPage } from "@/data/universities/types";

// Register each confirmed university partner here to publish /universities/<slug>.
export const universityPages: readonly UniversityPage[] = [amityUniversityOnline];

export function getUniversityPage(slug: string): UniversityPage | undefined {
  return universityPages.find((u) => u.slug === slug);
}

/** True when the curriculum has at least one named subject (the section is hidden otherwise). */
export function hasCurriculum(u: UniversityPage): boolean {
  return u.curriculum.some((year) =>
    year.semesters.some((sem) => sem.subjects.some((s) => s.name.trim().length > 0)),
  );
}
