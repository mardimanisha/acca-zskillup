import { createDummyUniversityPage } from "@/data/universities/dummy";
import type { UniversityPage } from "@/data/universities/types";

// DUMMY: content comes from the placeholder factory. Replace field by field with official
// information before launch, or set a field to "" / [] to hide that element.
export const amritaVishwaVidyapeetham: UniversityPage = createDummyUniversityPage({
  slug: "amrita-vishwa-vidyapeetham",
  universityName: "Amrita Vishwa Vidyapeetham",
  shortName: "Amrita",
  degree: "B.Com",
  logo: "/images/universities/amrita-logo.png",
  heroImage: "/images/universities/amrita-campus.jpg",
});
