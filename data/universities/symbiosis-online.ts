import { createDummyUniversityPage } from "@/data/universities/dummy";
import type { UniversityPage } from "@/data/universities/types";

// DUMMY: content comes from the placeholder factory; logo is a text stand-in (PNG) and the campus
// photo is a borrowed placeholder. Replace with official information and assets before launch.
export const symbiosisOnline: UniversityPage = createDummyUniversityPage({
  slug: "symbiosis-online",
  universityName: "Symbiosis School for Online and Digital Learning",
  shortName: "Symbiosis",
  degree: "BBA",
  logo: "/images/universities/symbiosis-logo.png",
  heroImage: "/images/universities/symbiosis-campus.jpg",
});
