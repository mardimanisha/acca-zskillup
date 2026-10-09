import { createDummyUniversityPage } from "@/data/universities/dummy";
import type { UniversityPage } from "@/data/universities/types";

// DUMMY: content comes from the placeholder factory. Replace field by field with official
// information before launch, or set a field to "" / [] to hide that element.
export const chandigarhUniversity: UniversityPage = createDummyUniversityPage({
  slug: "chandigarh-university",
  universityName: "Chandigarh University",
  shortName: "Chandigarh University",
  degree: "BBA",
  logo: "/images/universities/chandigarh-university-logo.png",
  heroImage: "/images/universities/chandigarh-university-campus.jpg",
});
