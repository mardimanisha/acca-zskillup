// DUMMY content shared by every university page until official information is supplied.
// Every value here is a layout placeholder, NOT official university information. Before launch,
// replace each field in the university's own data file with official values, or set it to
// "" / [] to hide that element.

import { brochures } from "@/content/program-shared";
import type { CurriculumYear, UniversityPage } from "@/data/universities/types";

type Degree = "B.Com" | "BBA";

type Subject = [name: string, accaCode: string, taughtByZSkillup?: boolean];

const ZSKILLUP = "ZSkillup";

// Subjects follow the proposed degree + ACCA structure in the content PDF.
// ACCA codes, "Taught By", "Assessed By" and hours are placeholders.
const curricula: Record<Degree, readonly { title: string; subtitle: string; semesters: readonly (readonly Subject[])[] }[]> = {
  BBA: [
    {
      title: "Year 1",
      subtitle: "Business & Accounting Foundations",
      semesters: [
        [
          ["Financial Accounting", "K1"],
          ["Management Accounting & Business Analytics", "K2"],
          ["Business Law & Business Environment", "K3"],
          ["AI, Financial Modelling & Business Decision Making", "", true],
          ["Business Economics", ""],
        ],
        [
          ["Financial Reporting", "E2"],
          ["Taxation", "E1"],
          ["Performance Management & Data Analysis", "E5"],
          ["Business Communication", "", true],
          ["Principles of Marketing", ""],
        ],
      ],
    },
    {
      title: "Year 2",
      subtitle: "Professional Expertise & Management Breadth",
      semesters: [
        [
          ["Audit, Risk & Control", "E3"],
          ["Finance & Investment", "E4"],
          ["Management, People & Organisations", ""],
          ["Operations Management", ""],
        ],
        [
          ["Strategy, Leadership & Governance", ""],
          ["International Business & Marketing", ""],
          ["Business & Sustainability Reporting", "S1"],
          ["Business Research Methods", ""],
        ],
      ],
    },
    {
      title: "Year 3",
      subtitle: "Strategic Professional Level & Career Transition",
      semesters: [
        [
          ["Professional Specialisation", ""],
          ["Strategic Business Leader", "S2"],
          ["Career Readiness Lab I: CV, LinkedIn & Interview Skills", "", true],
          ["Entrepreneurship & Innovation", ""],
        ],
        [
          ["Advanced Professional Specialisation", ""],
          ["Corporate Strategy & Business Transformation", ""],
          ["Strategic Professional Option", ""],
          ["Career Readiness Lab II: Mock Interviews, Group Discussions & Placement Preparation", "", true],
        ],
      ],
    },
  ],
  "B.Com": [
    {
      title: "Year 1",
      subtitle: "Commerce & Accounting Foundations",
      semesters: [
        [
          ["Financial Accounting", "K1"],
          ["Management Accounting & Business Analytics", "K2"],
          ["Business Law & Business Environment", "K3"],
          ["AI, Financial Modelling & Business Decision Making", "", true],
          ["Managerial Economics", ""],
        ],
        [
          ["Financial Reporting", "E2"],
          ["Taxation", "E1"],
          ["Performance Management & Data Analysis", "E5"],
          ["Business Communication", "", true],
          ["Environmental Studies", ""],
        ],
      ],
    },
    {
      title: "Year 2",
      subtitle: "Professional Expertise & Commerce Breadth",
      semesters: [
        [
          ["Audit, Risk & Control", "E3"],
          ["Finance & Investment", "E4"],
          ["Corporate Accounting", ""],
          ["Cost Accounting", ""],
        ],
        [
          ["Strategy, Leadership & Governance", ""],
          ["Marketing Management", ""],
          ["Business & Sustainability Reporting", "S1"],
          ["Business Research Methods", ""],
        ],
      ],
    },
    {
      title: "Year 3",
      subtitle: "Strategic Professional Learning & Career Transition",
      semesters: [
        [
          ["Professional Specialisation", ""],
          ["Strategic Business Leader", "S2"],
          ["Career Readiness Lab I: CV, LinkedIn & Interview Skills", "", true],
          ["Corporate Governance & Business Ethics", ""],
        ],
        [
          ["Advanced Professional Specialisation", ""],
          ["International Business & Commerce", ""],
          ["Strategic Professional Option", ""],
          ["Career Readiness Lab II: Mock Interviews, Group Discussions & Placement Preparation", "", true],
        ],
      ],
    },
  ],
};

function dummyCurriculum(degree: Degree, shortName: string): readonly CurriculumYear[] {
  let semester = 0;
  return curricula[degree].map((year) => ({
    title: year.title,
    subtitle: year.subtitle,
    semesters: year.semesters.map((subjects) => ({
      title: `Semester ${++semester}`,
      subjects: subjects.map(([name, accaCode, zskillup]) => ({
        name,
        accaCode,
        taughtBy: zskillup ? ZSKILLUP : shortName,
        assessedBy: shortName,
        classHours: 55,
        selfStudyHours: 110,
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
    curriculum: dummyCurriculum(degree, shortName),
    curriculumPdf: "",
    recognitions: {
      ugcStatus: "UGC Status",
      naac: "NAAC",
      nirf: "NIRF",
      qsThe: "QS / THE",
      other: "Other Statutory or Academic Recognitions",
    },
    fees: {
      total: "3,60,000",
      semester: "60,000",
      paymentOptions: ["Semester-wise payment", "Instalments", "One-time payment"],
    },
  };
}
