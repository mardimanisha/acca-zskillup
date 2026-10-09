import { toBeAnnounced } from "@/content/site";
import type { Accent } from "@/lib/accent";

type ProgramCardContent = {
  accent: Accent;
  icon: string;
  image: { src: string; alt: string; width: number; height: number };
  label: string;
  title: string;
  description: string;
  meta: readonly string[];
  cta: { label: string; href: string; comingSoon?: boolean };
};

export const homeProgramsContent = {
  eyebrow: "CHOOSE YOUR PATHWAY",
  heading: {
    navy: "One Career Goal.",
    teal: "Three Ways to Get There.",
  },
  subtext:
    "Whether you're starting after Class 12, already pursuing a degree, or focused specifically on ACCA, choose the pathway that fits where you are today.",
  cards: [
    {
      accent: "teal",
      icon: "graduationCap",
      image: {
        src: "/images/programs/bcom-student.png",
        alt: "Young man with curly hair smiling, wearing a green shirt and a backpack",
        width: 672,
        height: 483,
      },
      label: "DEGREE + PROFESSIONAL PATHWAY",
      title: "B.Com + ACCA",
      description:
        "Build your commerce degree while developing ACCA-aligned professional finance knowledge, AI capabilities and structured career readiness.",
      meta: ["3 Years", "6 Semesters", "100% Online"],
      cta: { label: "Explore B.Com + ACCA", href: "/programs/bcom-acca" },
    },
    {
      accent: "purple",
      icon: "landmark",
      image: {
        src: "/images/programs/bba-student.png",
        alt: "Young woman with long hair smiling, wearing a backpack and holding books",
        width: 651,
        height: 483,
      },
      label: "DEGREE + PROFESSIONAL PATHWAY",
      title: "BBA + ACCA",
      description:
        "Combine business and management education with ACCA-aligned finance learning, AI capabilities and professional career preparation.",
      meta: ["3 Years", "6 Semesters", "100% Online"],
      cta: { label: "Explore BBA + ACCA", href: "/programs/bba-acca" },
    },
    {
      accent: "orange",
      icon: "barChart",
      image: {
        src: "/images/programs/acca-student.png",
        alt: "Young man in glasses and an olive T-shirt smiling and looking to the side",
        width: 684,
        height: 483,
      },
      label: "PROFESSIONAL LEARNING PATHWAY",
      title: "ACCA Only",
      description:
        "Prepare for your ACCA journey through structured live online and recorded learning, professional preparation and career-ready support.",
      meta: ["Self-Paced", "Live + Recorded", "100% Online"],
      cta: { label: toBeAnnounced, href: "/programs/acca", comingSoon: true },
    },
  ] satisfies readonly ProgramCardContent[],
} as const;

export type ProgramCardIcon = (typeof homeProgramsContent.cards)[number]["icon"];
