export type FeeProgram = {
  icon: "GraduationCap" | "FileText" | "BarChart3";
  title: string;
  description: string;
  /** null = not announced. Set to the final amount (e.g. "1,20,000") only when approved. */
  fee: string | null;
  /** Program not yet open ("To Be Announced"). */
  comingSoon?: boolean;
  /** Fee plans shown when this program is selected. */
  plans: readonly FeePlan[];
  cta: { label: string; href: string };
};

export type FeePlan = {
  title: string;
  price: string;
  /** Struck-through list price; "" hides it. */
  originalPrice: string;
  note: string;
  effectiveFee: string;
  tone: "green" | "pink" | "yellow" | "navy";
};

type HomeFeesContent = {
  eyebrow: string;
  heading: { line1: string; line2Navy: string; line2Teal: string };
  subtext: string;
  feeLabel: string;
  feeStatus: string;
  programs: readonly FeeProgram[];
  plans: readonly FeePlan[];
  effectiveFeeLabel: string;
  includes: {
    title: string;
    intro: string;
    items: readonly string[];
    cta: { label: string; href: string };
  };
};

// DUMMY amounts (placeholder from the design mockup) — replace with approved fees before launch.
const bcomPlans = [
  { title: "One-Time Payment", price: "1,01,200", originalPrice: "1,15,000", note: "Self Pay Benefits", effectiveFee: "1,01,200", tone: "green" },
  { title: "Annual Fee", price: "36,420", originalPrice: "38,334", note: "Self Pay Benefits", effectiveFee: "1,09,260", tone: "pink" },
  { title: "Per Semester Fee", price: "19,200", originalPrice: "", note: "Self Pay Benefits", effectiveFee: "1,15,000", tone: "yellow" },
  { title: "24 Months No-Cost EMI", price: "4,552/month", originalPrice: "4,792", note: "0% Interest", effectiveFee: "1,09,260", tone: "navy" },
] as const satisfies readonly FeePlan[];

const bbaPlans = [
  { title: "One-Time Payment", price: "96,500", originalPrice: "1,10,000", note: "Self Pay Benefits", effectiveFee: "96,500", tone: "green" },
  { title: "Annual Fee", price: "34,800", originalPrice: "36,630", note: "Self Pay Benefits", effectiveFee: "1,04,400", tone: "pink" },
  { title: "Per Semester Fee", price: "18,400", originalPrice: "", note: "Self Pay Benefits", effectiveFee: "1,10,400", tone: "yellow" },
  { title: "24 Months No-Cost EMI", price: "4,350/month", originalPrice: "4,579", note: "0% Interest", effectiveFee: "1,04,400", tone: "navy" },
] as const satisfies readonly FeePlan[];

const accaOnlyPlans = [
  { title: "One-Time Payment", price: "72,000", originalPrice: "80,000", note: "Self Pay Benefits", effectiveFee: "72,000", tone: "green" },
  { title: "Per Level Fee", price: "24,500", originalPrice: "", note: "Self Pay Benefits", effectiveFee: "73,500", tone: "pink" },
  { title: "12 Months No-Cost EMI", price: "6,125/month", originalPrice: "6,500", note: "0% Interest", effectiveFee: "73,500", tone: "navy" },
] as const satisfies readonly FeePlan[];

export const homeFeesContent = {
  eyebrow: "PROGRAM FEES",
  heading: {
    line1: "Flexible Learning.",
    line2Navy: "A",
    line2Teal: "Brighter Future.",
  },
  subtext:
    "Choose the pathway that fits your academic and professional goals. Explore program fees, payment options and everything included in your learning journey.",
  feeLabel: "Program Fee",
  feeStatus: "To be announced",
  programs: [
    {
      icon: "GraduationCap",
      title: "B.Com + ACCA",
      description: "3-Year Degree-Integrated Pathway",
      fee: null,
      plans: bcomPlans,
      cta: { label: "Get Fee Details", href: "/fees" },
    },
    {
      icon: "FileText",
      title: "BBA + ACCA",
      description: "3-Year Degree-Integrated Pathway",
      fee: null,
      plans: bbaPlans,
      cta: { label: "Get Fee Details", href: "/fees" },
    },
    {
      icon: "BarChart3",
      title: "ACCA Only",
      description: "Professional Learning Pathway",
      fee: null,
      comingSoon: true,
      plans: accaOnlyPlans,
      cta: { label: "Get Fee Details", href: "/fees" },
    },
  ],
  effectiveFeeLabel: "Effective fee of Rs.",
  /** Default plans for pages without a program selector (university pages). */
  plans: bcomPlans,
  includes: {
    title: "More Value for Your Investment",
    intro: "Depending on the selected pathway, your learning experience can include",
    items: [
      "Structured curriculum",
      "Digital learning access",
      "Professional preparation",
      "Learning resources",
      "Career-readiness support",
      "Mentorship and guidance",
      "Flexible payment options",
    ],
    cta: { label: "View Complete Fee Details", href: "/fees" },
  },
} as const satisfies HomeFeesContent;
