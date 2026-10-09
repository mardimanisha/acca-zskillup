import { createDummyUniversityPage } from "@/data/universities/dummy";
import type { UniversityPage } from "@/data/universities/types";

// DUMMY: content comes from the placeholder factory. Replace field by field with official
// information before launch, or set a field to "" / [] to hide that element.
export const nmimsUniversity: UniversityPage = createDummyUniversityPage({
  slug: "nmims-university",
  universityName: "NMIMS University",
  shortName: "NMIMS",
  degree: "BBA",
  logo: "/images/universities/nmims-logo.png",
  heroImage: "/images/universities/nmims-campus.jpg",
});
