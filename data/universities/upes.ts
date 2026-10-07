import { createDummyUniversityPage } from "@/data/universities/dummy";
import type { UniversityPage } from "@/data/universities/types";

// DUMMY: every value comes from the placeholder factory (logo and campus photo are low-res
// mockup crops). Before launch, override field by field with official information, e.g.
// `{ ...createDummyUniversityPage({ ... }), intake: "July 2027" }`, or set a field to "" / []
// to hide that element.
export const upes: UniversityPage = createDummyUniversityPage({
  slug: "upes",
  universityName: "UPES University",
  shortName: "UPES",
  degree: "BBA",
  logo: "/images/universities/upes-logo.png",
  heroImage: "/images/universities/upes-campus.jpg",
});
