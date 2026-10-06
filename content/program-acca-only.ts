// ACCA Only program page copy, from "ZSkillupACCA Website Content.pdf" (PAGE 4 | ACCA ONLY).
// Do not edit wording here without sign-off.

import { programHeroImage } from "@/content/program-bba-acca";
import { brochures } from "@/content/program-shared";
import type {
  FeatureGridContent,
  FinalCtaContent,
  HeroContent,
  LevelsContent,
  WhoForContent,
} from "@/content/program-types";

const hero = {
  eyebrow: "GLOBAL FINANCE & AI PROFESSIONAL PROGRAM",
  title: { start: "ACCA", highlight: " Only" },
  subtitle: "Focus Your Journey on Professional Finance",
  body: "Prepare for ACCA through structured live online and recorded learning, professional preparation and career-readiness support, without enrolling in a B.Com or BBA degree pathway.",
  image: programHeroImage,
  // Labels reuse the "Learn your way" titles below.
  features: [
    { icon: "video", label: "Live Online Learning" },
    { icon: "playCircle", label: "Recorded Learning" },
    { icon: "clock", label: "Self-Paced Progress" },
    { icon: "rotate", label: "Mock & Revision Support" },
  ],
  stats: [
    { icon: "clock", label: "Self-Paced", tone: "mint" },
    { icon: "globe", label: "100% Online", tone: "mint" },
    { icon: "video", label: "Live + Recorded Learning", tone: "mint" },
    { icon: "users", label: "Career-Ready Support", tone: "peach" },
  ],
} satisfies HeroContent;

const whoFor = {
  eyebrow: "WHO IS ACCA ONLY FOR?",
  icon: "users",
  title: "Already Have Your Degree Plan? Focus on ACCA.",
  paragraphs: [
    "This pathway is designed for learners who may already be pursuing or have completed another academic qualification and want structured ACCA preparation.",
    "There is no separate academic eligibility requirement to enrol in ZSkillup's preparation program. Your eligibility to register with ACCA, your starting level and any exemptions remain subject to ACCA's own rules.",
  ],
} satisfies WhoForContent;

const prepareFor = {
  eyebrow: "WHAT YOU WILL PREPARE FOR",
  body: "The curriculum is designed around ACCA's redesigned professional qualification structure.",
  levels: [
    {
      icon: "bookOpen",
      title: "Knowledge",
      items: ["K1 Financial Accounting", "K2 Management Accounting", "K3 Business Law"],
    },
    {
      icon: "layers",
      title: "Expertise",
      items: [
        "E1 Taxation",
        "E2 Financial Reporting",
        "E3 Audit, Risk & Control",
        "E4 Finance & Investment",
        "E5 Performance with Data Analysis",
      ],
    },
    {
      icon: "target",
      title: "Strategic Professional",
      items: [
        "S1 Business & Sustainability Reporting",
        "S2 Strategic Business Leader",
        "Plus one Strategic Professional option",
      ],
    },
  ],
} satisfies LevelsContent;

const beyond = {
  eyebrow: "BEYOND ACCA SUBJECTS",
  title: "Professional Finance Needs More Than Exam Knowledge",
  levels: [
    {
      icon: "brain",
      title: "AI & Digital Finance",
      items: ["AI, Financial Modelling & Business Decision Making"],
    },
    {
      icon: "messages",
      title: "Communication & Employability",
      items: [
        "Business & Corporate Communication",
        "CV, LinkedIn & Interview Skills",
        "Mock Interviews, Group Discussions & Placement Preparation",
      ],
    },
    {
      icon: "clipboardCheck",
      title: "Professional Preparation",
      items: ["Revision", "Mock Exams", "Exam Technique"],
    },
  ],
} satisfies LevelsContent;

const learnYourWay = {
  eyebrow: "LEARN YOUR WAY",
  title: "Structured Support. Flexible Progress.",
  items: [
    {
      icon: "video",
      title: "Live Online Learning",
      body: "Learn with faculty and subject experts through scheduled online sessions.",
    },
    {
      icon: "playCircle",
      title: "Recorded Learning",
      body: "Revisit concepts whenever you need additional revision.",
    },
    {
      icon: "clock",
      title: "Self-Paced Progress",
      body: "Move through your preparation based on your ACCA level and study plan.",
    },
    {
      icon: "rotate",
      title: "Mock & Revision Support",
      body: "Prepare through revision, mock assessments and exam-focused techniques.",
    },
  ],
} satisfies FeatureGridContent;

const currentStudents = {
  eyebrow: "FOR CURRENT ACCA STUDENTS",
  icon: "userCheck",
  statement:
    "Already studying ACCA? Your learning plan will be mapped to your existing ACCA progress and applicable transition requirements.",
} satisfies WhoForContent;

const finalCta = {
  title: "Your ACCA Journey. Structured Around You.",
} satisfies FinalCtaContent;

export const accaOnlyPage = {
  brochure: brochures.accaOnly,
  hero,
  whoFor,
  prepareFor,
  beyond,
  learnYourWay,
  currentStudents,
  finalCta,
};
