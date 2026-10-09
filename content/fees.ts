// Approved copy for /fees. Do not add, reword or shorten without sign-off.

import type { ProgramFeeId } from "@/data/fees";

export const feesCopy = {
  hero: {
    eyebrow: "PROGRAM FEES",
    titleLine1: "Invest in the Pathway",
    titleLine2: "That Fits Your Goals",
    body: "Compare fees across B.Com + ACCA, BBA + ACCA and ACCA Only and understand what is included before you make your decision.",
  },
  // Replace with the supplied fees hero image (student with laptop in front of a heritage building).
  heroImage: "/images/fees/hero-student.jpg",
  // Photo alt text is decorative until approved copy exists.
  heroImageAlt: "",
  plans: {
    id: "fees-plans-title",
    eyebrow: "FLEXIBLE PAYMENT OPTIONS",
    title: "Make Your Learning Journey Easier to Plan",
    subtitle:
      "Depending on the selected program and university partner, available options may include semester-wise payment, instalments and one-time payment options.",
  },
  included: {
    id: "fees-included-title",
    title: "What's Included?",
    items: [
      { icon: "graduationCap", label: "Degree tuition where applicable" },
      { icon: "bookOpen", label: "Professional learning" },
      { icon: "laptop", label: "Learning platform access" },
      { icon: "fileText", label: "Learning resources" },
      { icon: "chart", label: "Revision and mock support" },
      { icon: "users", label: "Career-readiness learning" },
      { icon: "headset", label: "Mentorship and support" },
    ],
  },
  charges: {
    id: "fees-charges-title",
    eyebrow: "EXTERNAL / ADDITIONAL CHARGES",
    title: "Know the Full Cost Before You Enrol",
    cards: [
      {
        icon: "receipt",
        body: "Depending on the pathway, ACCA registration, annual subscription, examination and exemption charges may be separately payable under ACCA's prevailing fee structure.",
      },
      {
        icon: "landmark",
        body: "For degree programs, any university-specific examination, administration or other charges should be clearly disclosed in the final university fee sheet.",
      },
    ],
  },
  help: {
    id: "fees-help-title",
    title: "Need Help Understanding the Fees?",
    body: "Talk to our team for a complete fee breakdown before you apply.",
    cta: { label: "Talk to an Advisor", href: "#enquiry-form" },
  },
} as const;

/** "Interested In" option pre-selected by each program's fee CTA. */
export const programInterestByFeeId = {
  bcom: "B.Com + ACCA",
  bba: "BBA + ACCA",
  acca: "ACCA Only",
} as const satisfies Record<ProgramFeeId, string>;

/** Window event the enquiry form listens to, to pre-select "Interested In". */
export const selectProgramEvent = "zs:select-program";
