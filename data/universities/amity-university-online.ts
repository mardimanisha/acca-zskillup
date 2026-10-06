import type { UniversityPage } from "@/data/universities/types";

// Fields left as "" / [] are awaiting official values and stay hidden on the page.
export const amityUniversityOnline: UniversityPage = {
  slug: "amity-university-online",
  universityName: "Amity University Online",
  degreeShort: "BBA",
  officialDegreeName: "", // [DATA] official degree name
  logo: "", // [DATA] official logo file
  heroImage: "", // [DATA] campus/building photo
  brochureUrl: "", // [DATA]
  trustMarkers: {
    ugc: "", // [DATA] official wording only
    naac: "",
    ranking: "",
    other: "",
  },
  usps: [
    { title: "", text: "" }, // [DATA]
    { title: "", text: "" },
    { title: "", text: "" },
    { title: "", text: "" },
  ],
  eligibility: "", // [DATA]
  examinationMode: "", // [DATA]
  intake: "", // [DATA] Month / Year
  curriculum: [], // [DATA] final university-approved curriculum
  recognitions: {
    ugcStatus: "", // [DATA]
    naac: "",
    nirf: "",
    qsThe: "",
    other: "",
  },
  fees: {
    total: "", // [DATA]
    semester: "",
    paymentOptions: "",
  },
};
