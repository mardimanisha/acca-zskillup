import type { Accent } from "@/lib/accent";

export type WhyAccent = Accent;

type WhyCardContent = {
  number: string;
  accent: WhyAccent;
  icon: string;
  title: string;
  description: string;
};

export const homeWhyContent = {
  eyebrow: "TWO STRENGTHS. ENDLESS POSSIBILITIES.",
  heading: {
    navy: "Global Recognition.",
    teal: "Career-Ready Learning.",
  },
  subtext:
    "Build professional finance capabilities through ACCA-aligned learning, while developing the digital, AI and workplace skills modern finance careers increasingly demand.",
  acca: {
    heading: { navy: "Why", teal: "ACCA?" },
    subheading: "A Globally Respected Professional Qualification",
    paragraph:
      "ACCA is a global professional accountancy body with members and future members across 180 countries, preparing finance professionals for careers across industries and markets.",
    globe: {
      src: "/images/why/globe.svg",
      width: 640,
      height: 600,
    },
    items: [
      {
        icon: "globe",
        title: "Global Recognition",
        description:
          "Build professional knowledge recognised across international markets.",
      },
      {
        icon: "briefcase",
        title: "Broad Career Possibilities",
        description:
          "Explore opportunities across accounting, finance, audit, taxation, reporting, advisory and business.",
      },
      {
        icon: "barChart",
        title: "Future-Focused Qualification",
        description:
          "Develop technical, business, digital and professional capabilities.",
      },
      {
        icon: "users",
        title: "Global Community",
        description:
          "Become part of an international community of finance professionals.",
      },
    ],
  },
  zskillup: {
    heading: { navy: "Why", teal: "ZSkillup?" },
    subheading: "Go Beyond Exam Preparation",
    paragraph:
      "The Global Finance & AI Professional Program brings together ACCA-aligned professional learning, degree pathways, AI-enabled finance skills and structured employability preparation.",
    cards: [
      {
        number: "01",
        accent: "teal",
        icon: "graduationCap",
        title: "Structured Professional Learning",
        description:
          "Follow a clear learning journey from finance fundamentals to advanced professional topics, supported by structured preparation, revision and practice.",
      },
      {
        number: "02",
        accent: "purple",
        icon: "brainCircuit",
        title: "Free AI & Digital Finance Classes",
        description:
          "Go beyond the core curriculum with additional learning in AI, financial modelling, analytics and technology-driven financial decision-making.",
      },
      {
        number: "03",
        accent: "orange",
        icon: "headset",
        title: "Free Career Readiness Sessions",
        description:
          "Build your CV, LinkedIn profile, communication and interview skills through dedicated career-readiness sessions alongside your academic and professional learning.",
      },
      {
        number: "04",
        accent: "teal",
        icon: "users",
        title: "Best-in-Class Industry Faculty",
        description:
          "Learn from academic toppers and experienced industry professionals, including faculty members with achievements across CA, CS, FRM, CPA and ACCA, bringing practical industry context into every class.",
      },
      {
        number: "05",
        accent: "purple",
        icon: "clipboardCheck",
        title: "Professional Preparation",
        description:
          "Strengthen your exam readiness through structured revision, mock exams, practice and exam-focused preparation.",
      },
    ] satisfies readonly WhyCardContent[],
  },
} as const;

export type AccaItemIcon = (typeof homeWhyContent.acca.items)[number]["icon"];
export type ZSkillupCardIcon =
  (typeof homeWhyContent.zskillup.cards)[number]["icon"];
