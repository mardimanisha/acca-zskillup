// Fixed copy for every university page (/universities/[slug]).
// University-specific values come from data/universities/<slug>.ts.

import type { UniversityPage } from "@/data/universities/types";

export const universityPageCopy = {
  hero: {
    eyebrow: "GLOBAL FINANCE & AI PROFESSIONAL PROGRAM",
    titleLine1: (u: UniversityPage) => `${u.degreeShort} + ACCA Pathway from`,
    body: (u: UniversityPage) =>
      `Earn your online ${u.officialDegreeName} from ${u.universityName} while building ACCA-aligned professional finance knowledge, AI capabilities and structured career readiness.`,
    advisor: "Talk to an Advisor",
    brochure: "Download University Brochure",
  },
  why: {
    eyebrow: (u: UniversityPage) => `WHY ${u.universityName.toUpperCase()}?`,
    title: ["Build Your Degree with an", "Institution You Can Trust"],
    cardTitle: "Recognition & Accreditations",
  },
  pathway: {
    eyebrow: "WHY THIS INTEGRATED PATHWAY?",
    title: "One Journey Across Degree, Finance, AI and Employability",
    cards: [
      {
        icon: "graduationCap",
        title: "University Degree",
        text: "Complete your recognised undergraduate degree online.",
      },
      {
        icon: "landmark",
        title: "Professional Finance",
        text: "Build ACCA-aligned professional knowledge alongside your academic curriculum.",
      },
      {
        icon: "brain",
        title: "AI & Digital Finance",
        text: "Develop finance capabilities relevant to a technology-driven workplace.",
      },
      {
        icon: "briefcase",
        title: "Career Readiness",
        text: "Prepare for professional opportunities with communication, CV and interview development.",
      },
    ],
  },
  overview: {
    eyebrow: "PROGRAM OVERVIEW",
    labels: {
      degree: "Degree",
      duration: "Duration",
      semesters: "Semesters",
      mode: "Mode",
      eligibility: "Eligibility",
      examinationMode: "Examination Mode",
      intake: "Intake",
      program: "Program",
    },
    fixed: {
      duration: "3 Years",
      semesters: "6",
      mode: "100% Online",
      program: "Global Finance & AI Professional Program",
    },
  },
  curriculum: {
    eyebrow: "CURRICULUM",
    title: "A Three-Year Integrated Pathway",
    download: "Download Curriculum (PDF)",
    viewFull: "View Full Curriculum",
    columns: {
      subject: "Subject",
      accaCode: "ACCA Code",
      taughtBy: "Taught By",
      assessedBy: "Assessed By",
      classHours: "Class",
      selfStudyHours: "Self",
    },
    hours: (h: number) => `${h}h`,
    summary: (subjects: number, classHours: number, selfHours: number) =>
      [
        `${subjects} subjects`,
        classHours ? `${classHours}h classroom` : "",
        selfHours ? `${selfHours}h self-study` : "",
      ]
        .filter(Boolean)
        .join(" · "),
    // Screen-reader-only labels.
    a11y: { years: "Curriculum years", semesters: "Semesters" },
  },
  admission: {
    eyebrow: "ADMISSION PROCESS",
    steps: [
      {
        number: "01",
        title: "Explore Your Program",
        text: "Understand the degree, professional pathway and fees.",
      },
      {
        number: "02",
        title: "Talk to an Advisor",
        text: "Get guidance on eligibility and available university options.",
      },
      {
        number: "03",
        title: "Complete Your Application",
        text: "Submit the required information and documents.",
      },
      {
        number: "04",
        title: "Complete Fee Payment",
        text: "Choose the available payment option and complete admission formalities.",
      },
      {
        number: "05",
        title: "Begin Your Learning Journey",
        text: "Receive onboarding and access to your learning ecosystem.",
      },
    ],
  },
  fees: {
    title: (u: UniversityPage) => `${u.universityName} ${u.degreeShort} + ACCA`,
    total: "Total Program Fee",
    semester: "Semester Fee",
    paymentOptions: "Available Payment Options",
    currency: "₹",
    cta: "Get Fee Details",
  },
  enquiryHref: "#enquiry-form",
  a11y: {
    logoAlt: (u: UniversityPage) => `${u.universityName} logo`,
    heroAlt: (u: UniversityPage) => `${u.universityName} campus`,
  },
} as const;
