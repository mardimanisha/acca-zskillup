// BBA + ACCA program page copy. Text is from the approved content brief and the supplied
// section designs — do not edit wording here without sign-off.

import {
  accaExemptions,
  brochures,
  curriculumCommon,
  universitiesCommon,
} from "@/content/program-shared";
import type {
  CareersContent,
  ComparisonContent,
  CurriculumContent,
  FinalCtaContent,
  HeroContent,
  LevelsContent,
  UniversitiesContent,
  WhoForContent,
  WhyContent,
} from "@/content/program-types";

// Each program page has its own hero photo (free-licence Unsplash stock, cropped to the hero's
// 2.2:1 frame with the subject at ~65% of the width; the left side fades to white in the layout).
export const bbaHeroImage = {
  composite: "/images/hero/bba-hero.jpg",
  background: null,
  student: null,
  alt: "Business student working on a laptop",
} satisfies HeroContent["image"];

export const bcomHeroImage = {
  composite: "/images/hero/bcom-hero.jpg",
  background: null,
  student: null,
  alt: "Student holding notebooks in a classroom",
} satisfies HeroContent["image"];

export const accaHeroImage = {
  composite: "/images/hero/acca-hero.jpg",
  background: null,
  student: null,
  alt: "Finance professional at her desk with a laptop",
} satisfies HeroContent["image"];

// TODO: replace with the supplied section image asset.
export const programWhyImage = { src: "/images/hero/hero-bg.jpg", alt: "" };

const hero = {
  eyebrow: "GLOBAL FINANCE & AI PROFESSIONAL PROGRAM",
  title: { start: "BBA", highlight: " + ACCA" },
  subtitle: "Business Education Meets Professional Finance",
  body: "A three-year online BBA pathway combining business and management education with ACCA-aligned professional finance learning, AI capabilities and structured employability preparation.",
  image: bbaHeroImage,
  features: [
    { icon: "briefcase", label: "Business & Management" },
    { icon: "landmark", label: "Professional Finance" },
    { icon: "brain", label: "AI & Business Decision-Making" },
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
  eyebrow: "WHY CHOOSE BBA + ACCA?",
  titleLines: ["Build Business Breadth and", "Finance Depth Together"],
  image: programWhyImage,
  items: [
    {
      icon: "briefcase",
      title: "Business & Management",
      body: "Study marketing, operations, organisations, international business, strategy and entrepreneurship.",
    },
    {
      icon: "landmark",
      title: "Professional Finance",
      body: "Develop ACCA-aligned capabilities across accounting, taxation, reporting, audit, investment and performance.",
    },
    {
      icon: "brain",
      title: "AI & Business Decision-Making",
      body: "Build practical exposure to AI, financial modelling, analytics and technology-led decision-making.",
    },
    {
      icon: "users",
      title: "Career Readiness",
      body: "Develop communication, professional positioning and interview capabilities throughout your degree.",
    },
  ],
} satisfies WhyContent;

const universities = {
  ...universitiesCommon,
  body: "Earn your BBA + ACCA from our reputed university partners while building professional finance, AI and employability skills with ZSkillup.",
} satisfies UniversitiesContent;

// Semester split follows "BBA Curriculum Proposal" (Amity University Online x ZSkillUp):
// Subjects are listed in proposal order. `code` = ACCA paper. Hours lines are from the proposal.
const curriculum = {
  ...curriculumCommon,
  eyebrow: "SEMESTER-WISE CURRICULUM",
  title: "Detailed Learning Structure",
  body: "A balanced blend of university-governed BBA curriculum, ACCA-aligned learning and employability skills.",
  columns: { ...curriculumCommon.columns, degree: "BBA DEGREE CURRICULUM" },
  semesters: [
    {
      tab: "S1",
      label: "Semester 01",
      title: "S1: Business & Accounting Foundations",
      meta: "5 subjects · 275h classroom · 550h self-study",
      subjects: [
        { name: "Financial Accounting", code: "K1" },
        { name: "Management Accounting & Business Analytics", code: "K2" },
        { name: "Business Law & Business Environment", code: "K3" },
        { name: "AI, Financial Modelling & Business Decision Making", badge: "Employability" },
        { name: "Business Economics" },
      ],
      outcomes: ["K1 Financial Accounting", "K2 Management Accounting", "K3 Business Law"],
    },
    {
      tab: "S2",
      label: "Semester 02",
      title: "S2: Business & Accounting Foundations",
      meta: "5 subjects · 275h classroom · 550h self-study",
      subjects: [
        { name: "Financial Reporting", code: "E2" },
        { name: "Taxation", code: "E1" },
        { name: "Performance Management & Data Analysis", code: "E5" },
        { name: "Business Communication" },
        { name: "Principles of Marketing" },
      ],
      outcomes: ["E1 Taxation", "E2 Financial Reporting", "E5 Performance Management & Data Analysis"],
    },
    {
      tab: "S3",
      label: "Semester 03",
      title: "S3: Professional Expertise & Management Breadth",
      meta: "4 subjects · 220h classroom · 440h self-study",
      subjects: [
        { name: "Audit, Risk & Control", code: "E3" },
        { name: "Finance & Investment", code: "E4" },
        { name: "Management, People & Organisations" },
        { name: "Operations Management" },
      ],
      outcomes: ["E3 Audit, Risk & Control", "E4 Finance & Investment"],
    },
    {
      tab: "S4",
      label: "Semester 04",
      title: "S4: Professional Expertise & Management Breadth",
      meta: "4 subjects · 220h classroom · 440h self-study",
      subjects: [
        { name: "Strategy, Leadership & Governance" },
        { name: "International Business & Marketing" },
        { name: "Business & Sustainability Reporting", code: "S1" },
        { name: "Business Research Methods" },
      ],
      outcomes: ["S1 Business & Sustainability Reporting"],
    },
    {
      tab: "S5",
      label: "Semester 05",
      title: "S5: Strategic Professional Level & Career Transition",
      meta: "4 subjects · 280h classroom · 560h self-study",
      subjects: [
        { name: "Professional Specialisation" },
        { name: "Strategic Business Leader", code: "S2" },
        { name: "Career Readiness Lab I: CV, LinkedIn & Interview Skills" },
        { name: "Entrepreneurship & Innovation" },
      ],
      outcomes: ["S2 Strategic Business Leader"],
    },
    {
      tab: "S6",
      label: "Semester 06",
      title: "S6: Strategic Professional Level & Career Transition",
      meta: "4 subjects · 280h classroom · 560h self-study",
      subjects: [
        { name: "Advanced Professional Specialisation" },
        { name: "Corporate Strategy & Business Transformation" },
        { name: "Strategic Professional Option (one)", badge: "Option" },
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

const comparison = {
  eyebrow: "BBA OR B.COM?",
  title: "Choose the Academic Foundation That Fits You",
  cards: [
    {
      icon: "briefcase",
      title: "BBA + ACCA",
      body: "A broader business and management pathway covering areas such as operations, marketing, entrepreneurship, people and strategy alongside professional finance.",
      current: true,
    },
    {
      icon: "calculator",
      title: "B.Com + ACCA",
      body: "A commerce-focused pathway with greater academic emphasis on accounting, commerce, corporate finance and related disciplines.",
      current: false,
    },
  ],
  cta: { label: "Compare Programs", href: "/programs/bcom-acca" },
} satisfies ComparisonContent;

const whoFor = {
  eyebrow: "WHO IS THIS FOR?",
  icon: "users",
  statement:
    "Ideal for students who want to combine business and management education, professional finance learning, ACCA-aligned preparation, AI capabilities and career-readiness development.",
  note: "Eligibility: As prescribed by the selected university partner.",
} satisfies WhoForContent;

const careers = {
  eyebrow: "CAREER POSSIBILITIES",
  roles: [
    "Business Finance Analyst",
    "Financial Analyst",
    "Audit Associate",
    "FP&A Analyst",
    "Finance & Strategy Associate",
    "Risk Analyst",
    "Management Accountant",
    "Corporate Finance Associate",
    "Business Analyst",
  ],
} satisfies CareersContent;

const finalCta = {
  title: "Build the Business Perspective. Build the Finance Expertise.",
} satisfies FinalCtaContent;

export const bbaPage = {
  brochure: brochures.bba,
  hero,
  why,
  universities,
  curriculum,
  accaLearning,
  comparison,
  whoFor,
  careers,
  finalCta,
};
