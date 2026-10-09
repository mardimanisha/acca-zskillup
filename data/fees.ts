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

export type ProgramFee = {
  id: ProgramFeeId;
  name: string;
  meta: string;
  fee: string;
  paymentStructure: string;
  ctaLabel: string;
  plans: Plan[];
};

export const programFees: readonly ProgramFee[] = [
  {
    id: "bcom",
    name: "B.Com + ACCA",
    meta: "3 Years | 6 Semesters | Online",
    fee: "",
    paymentStructure: "",
    ctaLabel: "Get B.Com Fee Details",
    plans: [],
  },
  {
    id: "bba",
    name: "BBA + ACCA",
    meta: "3 Years | 6 Semesters | Online",
    fee: "",
    paymentStructure: "",
    ctaLabel: "Get BBA Fee Details",
    plans: [],
  },
  {
    id: "acca",
    name: "ACCA Only",
    meta: "Self-Paced | Online",
    fee: "",
    paymentStructure: "",
    ctaLabel: "Get ACCA Fee Details",
    plans: [],
  },
];

export const defaultProgramFeeId: ProgramFeeId = "bcom";

export function isProgramFeeId(value: unknown): value is ProgramFeeId {
  return programFees.some((p) => p.id === value);
}
