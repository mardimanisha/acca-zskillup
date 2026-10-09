// Copy shared by every program page (CTAs, enquiry form, footer, university partners).

import type { University } from "@/content/program-types";

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

// DUMMY partner data for layout only: real university names/logos used as placeholders.
// Replace with the confirmed partner list (names, logos, campus photos, programs) before launch.
// Logos and campus photos are cropped from the design mockup (low resolution).
const universityFeatures = [
  "Globally recognised degree",
  "ACCA-aligned learning",
  "Finance & AI skills",
  "Employability preparation",
] as const;

export const partnerUniversities: readonly University[] = [
  {
    slug: "northeastern-university",
    name: "Northeastern University",
    logo: "/images/universities/northeastern-logo.png",
    campus: "/images/universities/northeastern-campus.jpg",
    tags: ["B.Com + ACCA", "3 Years", "Online"],
    features: universityFeatures,
  },
  {
    slug: "international-school-of-management",
    name: "International School of Management",
    logo: "/images/universities/ism-logo.png",
    campus: "/images/universities/ism-campus.jpg",
    tags: ["B.Com + ACCA", "3 Years", "Online"],
    features: universityFeatures,
  },
  {
    slug: "eu-business-school",
    name: "EU Business School",
    logo: "/images/universities/eu-business-school-logo.png",
    campus: "/images/universities/eu-business-school-campus.jpg",
    tags: ["BBA + ACCA", "3 Years", "Online"],
    features: universityFeatures,
  },
  {
    slug: "university-of-east-london",
    name: "University of East London",
    logo: "/images/universities/uel-logo.png",
    campus: "/images/universities/uel-campus.jpg",
    tags: ["BBA + ACCA", "3 Years", "Online"],
    features: universityFeatures,
  },
];

export const universitiesCommon = {
  eyebrow: "UNIVERSITY PARTNERS",
  title: "Our Reputed University Partners",
  viewAll: { label: "View All Universities", href: "/universities" },
  exploreLabel: "Explore University",
  // Screen-reader-only labels for the carousel controls.
  a11y: { prev: "Previous universities", next: "Next universities", goTo: "Go to university" },
  universities: partnerUniversities,
} as const;

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
