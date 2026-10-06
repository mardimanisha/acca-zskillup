import type { Accent } from "@/lib/accent";

type LearningFeatureContent = {
  accent: Accent;
  icon: string;
  title: string;
  description: string;
};

export const homeLearningContent = {
  eyebrow: "THE LEARNING EXPERIENCE",
  heading: {
    navy: "Everything You Need to",
    teal: "Learn, Practice and Progress",
  },
  subtext:
    "A structured digital learning environment designed to keep your academics, professional preparation and career development connected throughout your journey.",
  visual: {
    src: "/images/learning/lms-visual.png",
    alt: "ZSkillup learning platform dashboard",
    width: 770,
    height: 760,
  },
  features: [
    {
      accent: "teal",
      icon: "route",
      title: "Structured Learning Journey",
      description:
        "Know what to learn, when to learn it and how each stage connects to your larger career pathway.",
    },
    {
      accent: "purple",
      icon: "video",
      title: "Live Online Learning",
      description:
        "Learn through guided online sessions with experienced faculty and subject experts.",
    },
    {
      accent: "orange",
      icon: "playCircle",
      title: "Recorded Learning",
      description:
        "Revisit learning content and strengthen concepts at your own pace.",
    },
    {
      accent: "teal",
      icon: "target",
      title: "Practice & Assessments",
      description:
        "Apply what you learn through structured practice and assessments.",
    },
    {
      accent: "purple",
      icon: "clipboardCheck",
      title: "Revision & Exam Preparation",
      description:
        "Strengthen exam readiness through revision, mock exams and exam-focused preparation.",
    },
    {
      accent: "orange",
      icon: "briefcase",
      title: "Career Readiness Learning",
      description:
        "Build communication, CV, LinkedIn and interview capabilities alongside your professional learning.",
    },
  ] satisfies readonly LearningFeatureContent[],
} as const;

export type LearningFeatureIcon =
  (typeof homeLearningContent.features)[number]["icon"];
