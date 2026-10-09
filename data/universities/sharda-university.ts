import { createDummyUniversityPage } from "@/data/universities/dummy";
import type { UniversityPage } from "@/data/universities/types";

// DUMMY: content comes from the placeholder factory. Replace field by field with official
// information before launch, or set a field to "" / [] to hide that element.
export const shardaUniversity: UniversityPage = createDummyUniversityPage({
  slug: "sharda-university",
  universityName: "Sharda University",
  shortName: "Sharda",
  degree: "BBA",
  logo: "/images/universities/sharda-university-logo.png",
  heroImage: "/images/universities/sharda-campus.jpg",
});
