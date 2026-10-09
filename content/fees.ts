// Approved copy for /fees. Do not add, reword or shorten without sign-off.

import type { ProgramFeeId } from "@/data/fees";

export const feesCopy = {
  hero: {
    eyebrow: "PROGRAM FEES",
    titleLine1: "Choose Your Program",
    titleLine2: "and Explore the Fee Details",
    body: "Each program offers a unique pathway. Select a program to view its fee structure, payment options and what's included.",
  },
  // Replace with the supplied fees hero image (student with laptop in front of a heritage building).
  heroImage: "/images/fees/hero-student.jpg",
  // Photo alt text is decorative until approved copy exists.
  heroImageAlt: "",
  panel: { eyebrow: "SELECTED PROGRAM" },
  plans: {
    id: "fees-plans-title",
    title: "Fee Structure",
    subtitle: "Flexible payment options to make your learning journey simpler and more accessible.",
  },
  why: {
    id: "fees-why-title",
    titlePrefix: "Why Choose",
    subtitle: "A globally recognised qualification with a flexible fee structure designed for your growth.",
    items: [
      "Globally recognised qualification",
      "Industry aligned learning",
      "Flexible payment options",
      "Career support",
    ],
    badge: ["Flexible Plans", "for Your Goals"],
    image: "/images/fees/why-student.jpg",
    imageAlt: "",
  },
  included: {
    id: "fees-included-title",
    title: "What's Included in Your Program Fee?",
    subtitle: "Your program fee includes all the essential components to ensure a complete learning experience.",
    items: [
      { icon: "graduationCap", label: "Degree tuition (where applicable)" },
      { icon: "bookOpen", label: "ACCA professional learning" },
      { icon: "laptop", label: "Learning platform access" },
      { icon: "fileText", label: "Learning resources" },
      { icon: "chart", label: "Revision and mock support" },
      { icon: "users", label: "Career-readiness learning" },
      { icon: "headset", label: "Mentorship and support" },
    ],
  },
  charges: {
    id: "fees-charges-title",
    title: "Additional Charges",
    intro:
      "In addition to the program fee, the following charges may be separately payable as per ACCA's and university's prevailing fee structure.",
    cards: [
      {
        key: "acca",
        title: "ACCA Charges",
        items: [
          "ACCA registration fee",
          "Annual subscription fee",
          "Examination fees",
          "Exemption charges (if applicable)",
        ],
        note: "",
      },
      {
        key: "university",
        title: "University Charges",
        items: ["Examination fee", "Administration charges", "Any other university-specific charges"],
        note: "These charges should be clearly disclosed in the final university fee sheet.",
      },
    ],
  },
  help: {
    id: "fees-help-title",
    eyebrow: "NEED HELP?",
    titleLines: ["Understand the Fees", "in Detail Before You Apply"],
    body: "Talk to our team for a personalized fee breakdown, payment options and any other queries.",
    cta: { label: "Talk to an Advisor", href: "#enquiry-form" },
    points: [
      { icon: "message", label: "Get detailed fee breakdown" },
      { icon: "fileText", label: "Understand payment options" },
      { icon: "phone", label: "Clear all your questions" },
    ],
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
