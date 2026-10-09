import { createDummyUniversityPage } from "@/data/universities/dummy";
import type { UniversityPage } from "@/data/universities/types";

// DUMMY: content comes from the placeholder factory. Replace field by field with official
// information before launch, or set a field to "" / [] to hide that element.
export const jainUniversity: UniversityPage = createDummyUniversityPage({
  slug: "jain-university",
  universityName: "Jain University",
  shortName: "Jain",
  degree: "B.Com",
  logo: "/images/universities/jain-logo.png",
  heroImage: "/images/universities/jain-campus.jpg",
});
