import { nmimsUniversity } from "@/data/universities/nmims-university";
import { chandigarhUniversity } from "@/data/universities/chandigarh-university";
import { lovelyProfessionalUniversity } from "@/data/universities/lovely-professional-university";
import { amritaVishwaVidyapeetham } from "@/data/universities/amrita-vishwa-vidyapeetham";
import { jainUniversity } from "@/data/universities/jain-university";
import { shardaUniversity } from "@/data/universities/sharda-university";
import { amityUniversityOnline } from "@/data/universities/amity-university-online";
import { chitkaraUniversity } from "@/data/universities/chitkara-university";
import { manipalUniversity } from "@/data/universities/manipal-university";
import { opJindalGlobalUniversity } from "@/data/universities/op-jindal-global-university";
import { sageUniversity } from "@/data/universities/sage-university";
import { upes } from "@/data/universities/upes";
import { symbiosisOnline } from "@/data/universities/symbiosis-online";
import { manipalUniversityJaipur } from "@/data/universities/manipal-university-jaipur";
import type { UniversityPage } from "@/data/universities/types";

// Register each confirmed university partner here to publish /universities/<slug>.
// Same order as the /universities cards (data/universities.ts).
export const universityPages: readonly UniversityPage[] = [
  opJindalGlobalUniversity,
  chitkaraUniversity,
  manipalUniversity,
  upes,
  amityUniversityOnline,
  sageUniversity,
  amritaVishwaVidyapeetham,
  jainUniversity,
  shardaUniversity,
  nmimsUniversity,
  chandigarhUniversity,
  lovelyProfessionalUniversity,
  symbiosisOnline,
  manipalUniversityJaipur,
];

export function getUniversityPage(slug: string): UniversityPage | undefined {
  return universityPages.find((u) => u.slug === slug);
}

/** True when the curriculum has at least one named subject (the section is hidden otherwise). */
export function hasCurriculum(u: UniversityPage): boolean {
  return u.curriculum.some((year) =>
    year.semesters.some((sem) => sem.subjects.some((s) => s.name.trim().length > 0)),
  );
}
