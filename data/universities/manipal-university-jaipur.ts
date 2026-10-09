import { createDummyUniversityPage } from "@/data/universities/dummy";
import type { UniversityPage } from "@/data/universities/types";

// DUMMY: content comes from the placeholder factory; logo and campus photo are copies of the
// Manipal placeholders. Replace with official information and assets before launch.
export const manipalUniversityJaipur: UniversityPage = createDummyUniversityPage({
  slug: "manipal-university-jaipur",
  universityName: "Manipal University Jaipur Online",
  shortName: "Manipal Jaipur",
  degree: "B.Com",
  logo: "/images/universities/muj-logo.png",
  heroImage: "/images/universities/muj-campus.jpg",
});
