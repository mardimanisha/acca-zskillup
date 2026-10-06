// Shape of a university-specific page (/universities/[slug]).
// Every string here is rendered verbatim. Leave a field as "" (or an array empty)
// until the official value is confirmed: the page hides that element entirely.

export type UniversityUsp = {
  title: string;
  text: string;
};

export type CurriculumSemester = {
  /** Semester label exactly as it should appear, e.g. as supplied by the university. */
  title: string;
  subjects: readonly string[];
};

export type CurriculumYear = {
  /** Year label exactly as it should appear, e.g. as supplied by the university. */
  title: string;
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
  recognitions: {
    ugcStatus: string;
    naac: string;
    nirf: string;
    qsThe: string;
    other: string;
  };
  fees: {
    total: string;
    semester: string;
    paymentOptions: string;
  };
};
