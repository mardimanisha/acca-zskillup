import type { CurriculumYear, UniversityPage } from "@/data/universities/types";

// DUMMY: see note on `curriculum` below.
const dummyCurriculum: readonly CurriculumYear[] = [
  {
    title: "Year 1",
    subtitle: "Business & Accounting Foundations",
    semesters: [
      {
        title: "Semester 1",
        subjects: [
          { name: "Financial Accounting", accaCode: "K1", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Management Accounting & Business Analytics", accaCode: "K2", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Business Law & Business Environment", accaCode: "K3", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "AI, Financial Modelling & Business Decision Making", accaCode: "", taughtBy: "ZSkillup", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Business Economics", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
        ],
      },
      {
        title: "Semester 2",
        subjects: [
          { name: "Financial Reporting", accaCode: "E2", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Taxation", accaCode: "E1", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Performance Management & Data Analysis", accaCode: "E5", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Business Communication", accaCode: "", taughtBy: "ZSkillup", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Principles of Marketing", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
        ],
      },
    ],
  },
  {
    title: "Year 2",
    subtitle: "Professional Expertise & Management Breadth",
    semesters: [
      {
        title: "Semester 3",
        subjects: [
          { name: "Audit, Risk & Control", accaCode: "E3", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Finance & Investment", accaCode: "E4", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Management, People & Organisations", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Operations Management", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
        ],
      },
      {
        title: "Semester 4",
        subjects: [
          { name: "Strategy, Leadership & Governance", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "International Business & Marketing", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Business & Sustainability Reporting", accaCode: "S1", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Business Research Methods", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
        ],
      },
    ],
  },
  {
    title: "Year 3",
    subtitle: "Strategic Professional Level & Career Transition",
    semesters: [
      {
        title: "Semester 5",
        subjects: [
          { name: "Professional Specialisation", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Strategic Business Leader", accaCode: "S2", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Career Readiness Lab I: CV, LinkedIn & Interview Skills", accaCode: "", taughtBy: "ZSkillup", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Entrepreneurship & Innovation", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
        ],
      },
      {
        title: "Semester 6",
        subjects: [
          { name: "Advanced Professional Specialisation", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Corporate Strategy & Business Transformation", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Strategic Professional Option", accaCode: "", taughtBy: "Amity", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
          { name: "Career Readiness Lab II: Mock Interviews, Group Discussions & Placement Preparation", accaCode: "", taughtBy: "ZSkillup", assessedBy: "Amity", classHours: 55, selfStudyHours: 110 },
        ],
      },
    ],
  },
];

// Fields left as "" / [] are awaiting official values and stay hidden on the page.
export const amityUniversityOnline: UniversityPage = {
  slug: "amity-university-online",
  universityName: "Amity University Online",
  degreeShort: "BBA",
  // ─── DUMMY HERO PREVIEW ─────────────────────────────────────────────────────
  // Every value in this block is a layout placeholder, NOT official information.
  // Replace each with the university's official value before launch, or set it to "" to hide.
  officialDegreeName: "Bachelor of Business Administration (BBA)", // DUMMY [DATA] official degree name
  logo: "/images/universities/amity-logo.png", // DUMMY [DATA] low-res crop, not the official logo file
  heroImage: "/images/universities/amity-campus.jpg", // DUMMY [DATA] low-res placeholder photo
  brochureUrl: "/brochures/bba-acca-brochure.pdf", // DUMMY [DATA] program brochure, not the university's
  trustMarkers: {
    ugc: "UGC Entitled", // DUMMY [DATA] official wording only
    naac: "NAAC Grade", // DUMMY
    ranking: "NIRF / QS / Other Ranking", // DUMMY
    other: "Other Verified Trust Marker", // DUMMY
  },
  // ─── END DUMMY HERO PREVIEW ─────────────────────────────────────────────────
  // DUMMY USPs for layout only. Replace with the university's official USPs before launch.
  usps: [
    {
      title: "Flexible Online Learning", // DUMMY [DATA]
      text: "Study through the university's digital learning platform at a pace that suits you.",
    },
    {
      title: "Experienced Faculty", // DUMMY
      text: "Learn from academic faculty across business and management disciplines.",
    },
    {
      title: "Student Support", // DUMMY
      text: "Access academic and administrative support throughout your degree.",
    },
    {
      title: "Digital Learning Resources", // DUMMY
      text: "Use e-library access, recorded lectures and online assessments.",
    },
  ],
  // DUMMY program overview values for layout only. Replace with official university information.
  eligibility: "10+2 from a recognised board", // DUMMY [DATA]
  examinationMode: "Online", // DUMMY [DATA]
  intake: "January 2027", // DUMMY [DATA] Month / Year
  // DUMMY curriculum for layout only: subjects follow the proposed BBA + ACCA structure, and
  // ACCA codes, "Taught By", "Assessed By" and hours are placeholders. Replace with the final
  // university-approved curriculum before launch, or set to [] to hide the section.
  curriculum: dummyCurriculum, // [DATA] final university-approved curriculum
  curriculumPdf: "", // [DATA] full curriculum PDF; "" hides the download + "View Full Curriculum" links
  // DUMMY recognitions (the template's own labels) so the card renders. Replace with official wording.
  recognitions: {
    ugcStatus: "UGC Status", // DUMMY [DATA]
    naac: "NAAC", // DUMMY
    nirf: "NIRF", // DUMMY
    qsThe: "QS / THE", // DUMMY
    other: "Other Statutory or Academic Recognitions", // DUMMY
  },
  // DUMMY fees for layout only: amounts and options are placeholders, not Amity's fees.
  // Replace with the official fee sheet before launch, or set to "" / [] to hide.
  fees: {
    total: "3,60,000", // DUMMY [DATA]
    semester: "60,000", // DUMMY [DATA]
    paymentOptions: ["Semester-wise payment", "Instalments", "One-time payment"], // DUMMY [DATA]
  },
};
