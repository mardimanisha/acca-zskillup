import { createDummyUniversityPage } from "@/data/universities/dummy";
import type { UniversityPage } from "@/data/universities/types";

// DUMMY: content comes from the placeholder factory. Replace field by field with official
// information before launch, or set a field to "" / [] to hide that element.
export const lovelyProfessionalUniversity: UniversityPage = createDummyUniversityPage({
  slug: "lovely-professional-university",
  universityName: "Lovely Professional University",
  shortName: "LPU",
  degree: "B.Com",
  logo: "/images/universities/lpu-logo.png",
  heroImage: "/images/universities/lpu-campus.jpg",
});
