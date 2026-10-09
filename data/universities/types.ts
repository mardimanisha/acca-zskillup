// Shape of a university-specific page (/universities/[slug]).
// Every string here is rendered verbatim. Leave a field as "" (or an array empty)
// until the official value is confirmed: the page hides that element entirely.

import type { FeePlan } from "@/content/home-fees";

export type UniversityUsp = {
  title: string;
  text: string;
};

export type CurriculumSubject = {
  name: string;
  /** ACCA paper code the subject is mapped to (e.g. "K1"); "" when not ACCA-mapped. */
  accaCode: string;
  /** Who teaches the subject, exactly as it should appear (e.g. the university's short name). */
  taughtBy: string;
  assessedBy: string;
  /** Peach pill next to the subject (e.g. "Employability", "Option"); "" hides it. */
  badge: string;
  /** Classroom hours; 0 hides the value. */
  classHours: number;
  /** Self-study hours; 0 hides the value. */
  selfStudyHours: number;
};

export type CurriculumSemester = {
  /** Semester label exactly as it should appear, e.g. as supplied by the university. */
  title: string;
  subjects: readonly CurriculumSubject[];
};

export type CurriculumYear = {
  /** Year label exactly as it should appear, e.g. "Year 1". */
  title: string;
  /** Year theme, e.g. "Business & Accounting Foundations"; "" hides it. */
  subtitle: string;
  semesters: readonly CurriculumSemester[];
};

export type UniversityPage = {
  slug: string;
  universityName: string;
  degreeShort: string;
  officialDegreeName: string;
  /** Path under /public or absolute URL. */
  logo: string;
  /** Path under /public or absolute URL. */
  heroImage: string;
  brochureUrl: string;
  trustMarkers: {
    ugc: string;
    naac: string;
    ranking: string;
    other: string;
  };
  usps: readonly UniversityUsp[];
  eligibility: string;
  examinationMode: string;
  /** Month / Year. */
  intake: string;
  /** Final university-approved curriculum only. */
  curriculum: readonly CurriculumYear[];
  /** Full curriculum PDF; "" hides "Download Curriculum (PDF)" and "View Full Curriculum". */
  curriculumPdf: string;
  recognitions: {
    ugcStatus: string;
    naac: string;
    nirf: string;
    qsThe: string;
    other: string;
  };
  fees: {
    /** One card per payment plan; empty hides the fee cards. */
    plans: readonly FeePlan[];
  };
};
