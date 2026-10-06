import { amityUniversityOnline } from "@/data/universities/amity-university-online";
import type { UniversityPage } from "@/data/universities/types";

// Register each confirmed university partner here to publish /universities/<slug>.
export const universityPages: readonly UniversityPage[] = [amityUniversityOnline];

export function getUniversityPage(slug: string): UniversityPage | undefined {
  return universityPages.find((u) => u.slug === slug);
}
