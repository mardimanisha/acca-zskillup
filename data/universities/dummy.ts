// DUMMY content shared by every university page until official information is supplied.
// Every value here is a layout placeholder, NOT official university information. Before launch,
// replace each field in the university's own data file with official values, or set it to
// "" / [] to hide that element.

import { curriculumYears, semesterLabel } from "@/content/curriculum-years";
import { homeFeesContent } from "@/content/home-fees";
import { bbaPage } from "@/content/program-bba-acca";
import { bcomPage } from "@/content/program-bcom-acca";
import { brochures } from "@/content/program-shared";
import type { CurriculumContent } from "@/content/program-types";
import type { CurriculumYear, UniversityPage } from "@/data/universities/types";

type Degree = "B.Com" | "BBA";

const ZSKILLUP = "ZSkillup";
const EMPLOYABILITY_BADGE = "Employability";

// Curriculum is the program page's own (content/program-bba-acca.ts, content/program-bcom-acca.ts),
// so every university offering a degree shows exactly that program's years, semesters and subjects.
// Only "Taught By" / "Assessed By" are placeholders; hours are left out (the program pages don't show them).
const programCurricula: Record<Degree, CurriculumContent> = {
  BBA: bbaPage.curriculum,
  "B.Com": bcomPage.curriculum,
};

function programCurriculum(degree: Degree, shortName: string): readonly CurriculumYear[] {
  return curriculumYears(programCurricula[degree].semesters).map((year) => ({
    title: year.title,
    subtitle: year.subtitle,
    semesters: year.semesters.map((sem) => ({
      title: semesterLabel(sem.label),
      subjects: sem.subjects.map((s) => ({
        name: s.name,
        accaCode: s.code ?? "",
        taughtBy: s.badge === EMPLOYABILITY_BADGE ? ZSKILLUP : shortName,
        assessedBy: shortName,
        badge: s.badge ?? "",
        classHours: 0,
        selfStudyHours: 0,
      })),
    })),
  }));
}

const officialDegreeNames: Record<Degree, string> = {
  BBA: "Bachelor of Business Administration (BBA)",
  "B.Com": "Bachelor of Commerce (B.Com)",
};

const degreeBrochures: Record<Degree, string> = {
  BBA: brochures.bba,
  "B.Com": brochures.bcom,
};

export type DummyUniversityInput = {
  slug: string;
  universityName: string;
  /** Short name used in the curriculum "Taught By" / "Assessed By" columns. */
  shortName: string;
  degree: Degree;
  logo: string;
  heroImage: string;
};

/** Builds a fully populated DUMMY university page so every section renders for layout review. */
export function createDummyUniversityPage({
  slug,
  universityName,
  shortName,
  degree,
  logo,
  heroImage,
}: DummyUniversityInput): UniversityPage {
  return {
    slug,
    universityName,
    degreeShort: degree,
    officialDegreeName: officialDegreeNames[degree],
    logo,
    heroImage,
    // Program brochure, not the university's own.
    brochureUrl: degreeBrochures[degree],
    // The template's own labels, not verified claims.
    trustMarkers: {
      ugc: "UGC Entitled",
      naac: "NAAC Grade",
      ranking: "NIRF / QS / Other Ranking",
      other: "Other Verified Trust Marker",
    },
    usps: [
      {
        title: "Flexible Online Learning",
        text: "Study through the university's digital learning platform at a pace that suits you.",
      },
      {
        title: "Experienced Faculty",
        text:
          degree === "BBA"
            ? "Learn from academic faculty across business and management disciplines."
            : "Learn from academic faculty across commerce and accounting disciplines.",
      },
      {
        title: "Student Support",
        text: "Access academic and administrative support throughout your degree.",
      },
      {
        title: "Digital Learning Resources",
        text: "Use e-library access, recorded lectures and online assessments.",
      },
    ],
    eligibility: "10+2 from a recognised board",
    examinationMode: "Online",
    intake: "January 2027",
    curriculum: programCurriculum(degree, shortName),
    curriculumPdf: "",
    recognitions: {
      ugcStatus: "UGC Status",
      naac: "NAAC",
      nirf: "NIRF",
      qsThe: "QS / THE",
      other: "Other Statutory or Academic Recognitions",
    },
    // DUMMY amounts: the homepage placeholder plans, not confirmed university fees.
    fees: { plans: homeFeesContent.plans },
  };
}
