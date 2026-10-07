import { createDummyUniversityPage } from "@/data/universities/dummy";
import type { UniversityPage } from "@/data/universities/types";

// DUMMY: every value comes from the placeholder factory (logo and campus photo are low-res
// mockup crops). Before launch, override field by field with official information, e.g.
// `{ ...createDummyUniversityPage({ ... }), intake: "July 2027" }`, or set a field to "" / []
// to hide that element.
export const chitkaraUniversity: UniversityPage = createDummyUniversityPage({
  slug: "chitkara-university",
  universityName: "Chitkara University",
  shortName: "Chitkara",
  degree: "B.Com",
  logo: "/images/universities/chitkara-logo.png",
  heroImage: "/images/universities/chitkara-campus.jpg",
});
