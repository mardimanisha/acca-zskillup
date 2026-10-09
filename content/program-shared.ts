// Copy shared by every program page (CTAs, enquiry form, footer, university partners).

import type { University } from "@/content/program-types";
import { filterUniversities, type DegreeProgramId } from "@/data/universities";
import { universityProgramFees } from "@/data/university-fees";

export const programCtas = {
  advisor: { label: "Talk to an Advisor", href: "#enquiry-form" },
  brochure: { label: "Download Brochure" },
} as const;

// TODO: drop the supplied brochure PDFs at these paths.
export const brochures = {
  bcom: "/brochures/bcom-acca-brochure.pdf",
  bba: "/brochures/bba-acca-brochure.pdf",
  accaOnly: "/brochures/acca-only-brochure.pdf",
} as const;

/** "Download Brochure" form: program choices and the brochure each one downloads. */
export const brochureOptions = [
  { program: "B.Com + ACCA", href: brochures.bcom, fileName: "bcom-acca-brochure.pdf" },
  { program: "BBA + ACCA", href: brochures.bba, fileName: "bba-acca-brochure.pdf" },
] as const;

// Partner cards come from data/universities.ts, filtered to the universities that offer the
// program. Features are shared copy; location is on the listing. EMI / total fee come from the
// fee sheet (data/university-fees.ts, dummy until the final sheet) and are hidden when absent.
const universityFeatures = [
  "Globally recognised degree",
  "ACCA-aligned learning",
  "Finance & AI skills",
  "Employability preparation",
] as const;

const rupees = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export function partnerUniversitiesFor(program: DegreeProgramId): readonly University[] {
  return filterUniversities(program).map((u) => {
    const fee = universityProgramFees.find((f) => f.slug === u.slug && f.program === program);
    return {
      slug: u.slug,
      name: u.officialName,
      logo: u.logo,
      campus: u.campusImage,
      location: u.location,
      monthlyEmi: fee?.emi ? rupees(fee.emi.monthly) : "",
      totalFee: fee ? rupees(fee.total) : "",
      tags: [`${u.degree} + ACCA`, "3 Years", "Online"],
      features: universityFeatures,
    };
  });
}

export function universitiesCommonFor(program: DegreeProgramId) {
  return {
    eyebrow: "UNIVERSITY PARTNERS",
    title: "Our Reputed University Partners",
    viewAll: { label: "View All Universities", href: "/universities" },
    exploreLabel: "Explore University",
    emiLabel: "Monthly EMI",
    totalFeeLabel: "Total Program Fee",
    // Screen-reader-only labels for the carousel controls.
    a11y: { prev: "Previous universities", next: "Next universities", goTo: "Go to university" },
    universities: partnerUniversitiesFor(program),
  } as const;
}

export const curriculumCommon = {
  columns: { zskillup: "ZSKILLUP ACCA PREPARATION" },
  outcomesLabel: "END OF SEMESTER OUTCOMES:",
  // Screen-reader-only label for the semester tabs.
  a11y: { tabs: "Semesters", years: "Years" },
} as const;

export const accaExemptions = {
  highlight: "Designed to seek up to 8 ACCA exam exemptions*",
  footnote:
    "*Subject to formal ACCA exemption accreditation, the final accredited university curriculum and individual eligibility. Strategic Professional examinations are not exemptible.",
} as const;

export const enquiryFormContent = {
  id: "enquiry-form",
  title: "Not Sure Which Program Is Right for You?",
  subtitle:
    "Tell us where you are today. We'll help you understand the available pathways.",
  fields: {
    fullName: "Full Name",
    mobile: "Mobile Number",
    email: "Email Address",
    currentEducation: "Current Education",
    programInterest: "Interested In",
    city: "City",
  },
  submit: "Talk to an Advisor",
  brochure: { programLabel: "Select Program", submit: "Download Brochure" },
  consent:
    "By submitting this form, you agree to be contacted regarding program information, admissions and related updates.",
} as const;

export const footerContent = {
  about:
    "Building pathways that connect academic learning, professional capabilities and career readiness for the future of work.",
  columns: [
    {
      title: "Programs",
      links: [
        { label: "B.Com + ACCA", href: "/programs/bcom-acca" },
        { label: "BBA + ACCA", href: "/programs/bba-acca" },
        { label: "ACCA Only", href: "/programs/acca", comingSoon: true },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Universities", href: "/universities" },
        { label: "Careers", href: "/careers" },
        { label: "Fees", href: "/fees" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
  ],
  contact: {
    title: "Get in Touch",
    email: "acca@zskillup.com",
    phone: "+91 9153005252",
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
  copyright: "© 2026 ZSkillup Education Private Limited. All rights reserved.",
} as const;
