// Fee data for /fees. `fee`, `paymentStructure` and `plans` stay empty until ZSkillup supplies the
// final fee sheet; the page hides every element whose field is empty. Never add placeholder amounts.

export type Plan = {
  title: string;
  amount: string;
  unit: string;
  features: string[];
  ctaLabel: string;
};

export type ProgramFeeId = "bcom" | "bba" | "acca";

export type ProgramFeature = { icon: "graduationCap" | "fileText" | "users" | "video" | "clock" | "chart"; label: string };

export type ProgramFee = {
  id: ProgramFeeId;
  name: string;
  meta: string;
  fee: string;
  paymentStructure: string;
  ctaLabel: string;
  plans: Plan[];
  /** Optional panel copy; every empty field is hidden. */
  description: string;
  features: ProgramFeature[];
  badge: string;
};

// DUMMY AMOUNTS for layout only (not approved fees). Replace with the final fee sheet before launch;
// empty strings hide the price line.
const dummyAmounts: Record<ProgramFeeId, [string, string, string, string]> = {
  bcom: ["6,00,000", "1,20,000", "1,05,000", "8,750/month"],
  bba: ["5,40,000", "1,08,000", "90,000", "7,500/month"],
  acca: ["1,50,000", "50,000", "25,000", "4,200/month"],
};

function buildPlans(id: ProgramFeeId): Plan[] {
  const [oneTime, annual, semester, monthly] = dummyAmounts[id];
  return [
    {
      title: "One-Time Payment",
      amount: oneTime,
      unit: "Full Program Fee",
      features: ["Complete program fee", "No instalments", "Simpler and faster process"],
      ctaLabel: "Pay Full Fee",
    },
    {
      title: "Annual Fee",
      amount: annual,
      unit: "per year",
      features: ["Pay annually", "Flexible and manageable", "Same learning experience"],
      ctaLabel: "View Annual Plan",
    },
    {
      title: "Per Semester Fee",
      amount: semester,
      unit: "per semester",
      features: ["Pay semester-wise", "Flexible and manageable", "Same learning experience"],
      ctaLabel: "View Semester Plan",
    },
    {
      title: "Monthly Payment",
      amount: monthly,
      unit: "Starting from",
      features: ["Easy monthly instalments", "Available for eligible students"],
      ctaLabel: "Check EMI Options",
    },
  ];
}

export const programFees: readonly ProgramFee[] = [
  {
    id: "bcom",
    name: "B.Com + ACCA",
    meta: "3 Years | 6 Semesters | Online",
    fee: "",
    paymentStructure: "",
    ctaLabel: "Get B.Com Fee Details",
    plans: buildPlans("bcom"),
    description:
      "A comprehensive undergraduate degree combined with a globally recognised qualification to accelerate your career in finance and business.",
    features: [
      { icon: "graduationCap", label: "University Degree (B.Com)" },
      { icon: "fileText", label: "ACCA Qualification" },
      { icon: "users", label: "Industry-aligned Learning" },
    ],
    badge: "One Investment. Multiple Opportunities.",
  },
  {
    id: "bba",
    name: "BBA + ACCA",
    meta: "3 Years | 6 Semesters | Online",
    fee: "",
    paymentStructure: "",
    ctaLabel: "Get BBA Fee Details",
    plans: buildPlans("bba"),
    description:
      "A three-year online BBA pathway combining business and management education with ACCA-aligned professional finance learning, AI capabilities and structured employability preparation.",
    features: [
      { icon: "graduationCap", label: "University Degree (BBA)" },
      { icon: "fileText", label: "ACCA-aligned Learning" },
      { icon: "users", label: "Career Readiness" },
    ],
    badge: "",
  },
  {
    id: "acca",
    name: "ACCA Only",
    meta: "Self-Paced | Online",
    fee: "",
    paymentStructure: "",
    ctaLabel: "Get ACCA Fee Details",
    plans: buildPlans("acca"),
    description:
      "Prepare for ACCA through structured live online and recorded learning, professional preparation and career-readiness support, without enrolling in a B.Com or BBA degree pathway.",
    features: [
      { icon: "video", label: "Live + Recorded Learning" },
      { icon: "clock", label: "Self-Paced Progress" },
      { icon: "chart", label: "Mock & Revision Support" },
    ],
    badge: "",
  },
];

export const defaultProgramFeeId: ProgramFeeId = "bcom";

export function isProgramFeeId(value: unknown): value is ProgramFeeId {
  return programFees.some((p) => p.id === value);
}
