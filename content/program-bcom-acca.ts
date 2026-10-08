// B.Com + ACCA program page copy, from "ZSkillupACCA Website Content.pdf" (PAGE 2 | B.COM + ACCA).
// Do not edit wording here without sign-off.

import { programHeroImage, programWhyImage } from "@/content/program-bba-acca";
import {
  accaExemptions,
  brochures,
  curriculumCommon,
  universitiesCommon,
} from "@/content/program-shared";
import type {
  CareersContent,
  CurriculumContent,
  FeatureGridContent,
  FinalCtaContent,
  HeroContent,
  LevelsContent,
  UniversitiesContent,
  WhoForContent,
  WhyContent,
} from "@/content/program-types";

const hero = {
  eyebrow: "GLOBAL FINANCE & AI PROFESSIONAL PROGRAM",
  title: { start: "B.Com", highlight: " + ACCA" },
  subtitle: "Build Your Commerce Degree and Global Finance Pathway Together",
  body: "A three-year online B.Com pathway integrating commerce education with ACCA-aligned professional learning, AI-enabled finance capabilities and structured employability preparation.",
  image: programHeroImage,
  // Labels reuse the "Why choose this pathway?" titles below.
  features: [
    { icon: "calculator", label: "Commerce Foundation" },
    { icon: "landmark", label: "ACCA-Aligned Professional Learning" },
    { icon: "brain", label: "AI & Digital Finance" },
    { icon: "users", label: "Career Readiness" },
  ],
  stats: [
    { icon: "graduationCap", label: "3 Years", tone: "mint" },
    { icon: "fileText", label: "6 Semesters", tone: "mint" },
    { icon: "globe", label: "26 Subjects", tone: "mint" },
    { icon: "users", label: "100% Online", tone: "peach" },
  ],
} satisfies HeroContent;

const why = {
  eyebrow: "WHY CHOOSE THIS PATHWAY?",
  titleLines: ["More Than a Commerce Degree"],
  body: "Build four dimensions of your finance career through one integrated learning journey.",
  image: programWhyImage,
  items: [
    {
      icon: "calculator",
      title: "Commerce Foundation",
      body: "Develop knowledge across accounting, commerce, economics, law, taxation, corporate governance and business.",
    },
    {
      icon: "landmark",
      title: "ACCA-Aligned Professional Learning",
      body: "Build professional finance knowledge mapped across ACCA Knowledge, Expertise and Strategic Professional subjects.",
    },
    {
      icon: "brain",
      title: "AI & Digital Finance",
      body: "Learn AI, financial modelling, business decision-making and data-oriented finance capabilities.",
    },
    {
      icon: "users",
      title: "Career Readiness",
      body: "Develop communication, CV, LinkedIn, interview and placement-preparation skills alongside your academic journey.",
    },
  ],
} satisfies WhyContent;

const universities = {
  ...universitiesCommon,
  body: "Earn your B.Com + ACCA from our reputed university partners while building professional finance, AI and employability skills with ZSkillup.",
} satisfies UniversitiesContent;

// Subjects and year titles are from the content PDF. The PDF has no teaching split for
// B.Com, so the columns follow the BBA proposal's pattern: K1–K3 and commerce subjects in
// the degree column; E/S papers, AI, communication, specialisations and labs with ZSkillup.
const curriculum = {
  ...curriculumCommon,
  eyebrow: "YOUR 3-YEAR JOURNEY",
  title: "From Commerce Foundations to Professional Finance",
  columns: { ...curriculumCommon.columns, degree: "B.COM DEGREE CURRICULUM" },
  semesters: [
    {
      tab: "S1",
      label: "Semester 01",
      title: "S1: Commerce & Accounting Foundations",
      degree: [
        { name: "Financial Accounting", code: "K1" },
        { name: "Management Accounting & Business Analytics", code: "K2" },
        { name: "Business Law & Business Environment", code: "K3" },
        { name: "Managerial Economics" },
      ],
      zskillup: [{ name: "AI, Financial Modelling & Business Decision Making", badge: "Employability" }],
      outcomes: ["K1 Financial Accounting", "K2 Management Accounting", "K3 Business Law"],
    },
    {
      tab: "S2",
      label: "Semester 02",
      title: "S2: Commerce & Accounting Foundations",
      degree: [{ name: "Environmental Studies" }],
      zskillup: [
        { name: "Financial Reporting", code: "E2" },
        { name: "Taxation", code: "E1" },
        { name: "Performance Management & Data Analysis", code: "E5" },
        { name: "Business Communication" },
      ],
      outcomes: ["E1 Taxation", "E2 Financial Reporting", "E5 Performance Management & Data Analysis"],
    },
    {
      tab: "S3",
      label: "Semester 03",
      title: "S3: Professional Expertise & Commerce Breadth",
      degree: [{ name: "Corporate Accounting" }, { name: "Cost Accounting" }],
      zskillup: [
        { name: "Audit, Risk & Control", code: "E3" },
        { name: "Finance & Investment", code: "E4" },
      ],
      outcomes: ["E3 Audit, Risk & Control", "E4 Finance & Investment"],
    },
    {
      tab: "S4",
      label: "Semester 04",
      title: "S4: Professional Expertise & Commerce Breadth",
      degree: [{ name: "Marketing Management" }, { name: "Business Research Methods" }],
      zskillup: [
        { name: "Strategy, Leadership & Governance" },
        { name: "Business & Sustainability Reporting", code: "S1" },
      ],
      outcomes: ["S1 Business & Sustainability Reporting"],
    },
    {
      tab: "S5",
      label: "Semester 05",
      title: "S5: Strategic Professional Learning & Career Transition",
      degree: [{ name: "Corporate Governance & Business Ethics" }],
      zskillup: [
        { name: "Professional Specialisation" },
        { name: "Strategic Business Leader", code: "S2" },
        { name: "Career Readiness Lab I: CV, LinkedIn & Interview Skills" },
      ],
      outcomes: ["S2 Strategic Business Leader"],
    },
    {
      tab: "S6",
      label: "Semester 06",
      title: "S6: Strategic Professional Learning & Career Transition",
      degree: [{ name: "International Business & Commerce" }],
      zskillup: [
        { name: "Advanced Professional Specialisation" },
        { name: "Strategic Professional Option" },
        { name: "Career Readiness Lab II: Mock Interviews, Group Discussions & Placement Preparation" },
      ],
      outcomes: ["Strategic Professional Option"],
    },
  ],
} satisfies CurriculumContent;

const accaLearning = {
  ...accaExemptions,
  eyebrow: "ACCA-ALIGNED LEARNING",
  title: "Build Professional Finance Knowledge Alongside Your Degree",
  body: "The proposed curriculum is mapped to ACCA's redesigned qualification structure across Knowledge, Expertise and Strategic Professional learning.",
  levels: [
    {
      icon: "bookOpen",
      title: "Knowledge",
      items: ["Financial Accounting", "Management Accounting", "Business Law"],
    },
    {
      icon: "layers",
      title: "Expertise",
      items: [
        "Taxation",
        "Financial Reporting",
        "Audit, Risk & Control",
        "Finance & Investment",
        "Performance Management & Data Analysis",
      ],
    },
    {
      icon: "target",
      title: "Strategic Professional",
      items: [
        "Business & Sustainability Reporting",
        "Strategic Business Leader",
        "One Strategic Professional Option",
      ],
    },
  ],
} satisfies LevelsContent;

const aiEmployability = {
  eyebrow: "AI + EMPLOYABILITY",
  title: "Finance Skills for a Changing Workplace",
  items: [
    {
      icon: "brain",
      title: "AI & Financial Modelling",
      body: "Explore how AI, modelling and analytical thinking support financial decision-making.",
    },
    {
      icon: "messages",
      title: "Business Communication",
      body: "Build the ability to communicate financial and business ideas effectively.",
    },
    {
      icon: "fileText",
      title: "Career Readiness Lab I",
      body: "Develop your CV, LinkedIn presence and interview skills.",
    },
    {
      icon: "userCheck",
      title: "Career Readiness Lab II",
      body: "Prepare through mock interviews, group discussions and structured placement preparation.",
    },
  ],
} satisfies FeatureGridContent;

const whoFor = {
  eyebrow: "WHO IS THIS FOR?",
  icon: "graduationCap",
  title: "A Strong Pathway After Class 12",
  intro: "This pathway is designed for students who want to:",
  bullets: [
    "Earn an online B.Com degree",
    "Build toward a professional finance qualification",
    "Develop global finance capabilities",
    "Learn AI and digital finance alongside commerce",
    "Prepare for professional careers while completing graduation",
  ],
  note: "Eligibility: As prescribed by the selected university partner.",
} satisfies WhoForContent;

const careers = {
  eyebrow: "CAREER POSSIBILITIES",
  title: "Where Can This Pathway Take You?",
  intro: "Build capabilities relevant to roles such as",
  roles: [
    "Financial Analyst",
    "Audit Associate",
    "Tax Associate",
    "Financial Reporting Associate",
    "Management Accountant",
    "FP&A Analyst",
    "Risk & Controls Analyst",
    "Finance Executive",
    "Business Finance Analyst",
  ],
  cta: { label: "Explore Finance Careers", href: "/careers" },
} satisfies CareersContent;

const finalCta = {
  title: "Build More Than a Degree.",
  body: "Build the professional, digital and career-ready capabilities that can shape your future in finance.",
} satisfies FinalCtaContent;

export const bcomPage = {
  brochure: brochures.bcom,
  hero,
  why,
  universities,
  curriculum,
  accaLearning,
  aiEmployability,
  whoFor,
  careers,
  finalCta,
};
