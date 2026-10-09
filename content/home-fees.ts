export type FeeProgram = {
  icon: "GraduationCap" | "FileText" | "BarChart3";
  title: string;
  description: string;
  /** null = not announced. Set to the final amount (e.g. "1,20,000") only when approved. */
  fee: string | null;
  /** Program not yet open ("To Be Announced"). */
  comingSoon?: boolean;
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
      cta: { label: "Get Fee Details", href: "/fees" },
    },
    {
      icon: "FileText",
      title: "BBA + ACCA",
      description: "3-Year Degree-Integrated Pathway",
      fee: null,
      cta: { label: "Get Fee Details", href: "/fees" },
    },
    {
      icon: "BarChart3",
      title: "ACCA Only",
      description: "Professional Learning Pathway",
      fee: null,
      comingSoon: true,
      cta: { label: "Get Fee Details", href: "/fees" },
    },
  ],
  // DUMMY amounts (placeholder from the design mockup) — replace with approved fees before launch.
  effectiveFeeLabel: "Effective fee of Rs.",
  plans: [
    { title: "One-Time Payment", price: "1,01,200", originalPrice: "1,15,000", note: "Self Pay Benefits", effectiveFee: "1,01,200", tone: "green" },
    { title: "Annual Fee", price: "36,420", originalPrice: "38,334", note: "Self Pay Benefits", effectiveFee: "1,09,260", tone: "pink" },
    { title: "Per Semester Fee", price: "19,200", originalPrice: "", note: "Self Pay Benefits", effectiveFee: "1,15,000", tone: "yellow" },
    { title: "24 Months No-Cost EMI", price: "4,552/month", originalPrice: "4,792", note: "0% Interest", effectiveFee: "1,09,260", tone: "navy" },
  ],
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
