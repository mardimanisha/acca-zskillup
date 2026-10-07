// Fixed copy for the universities landing page (/universities).
// University cards come from data/universities.ts.

import type { UniversityListing } from "@/data/universities";

export const universitiesLandingCopy = {
  hero: {
    eyebrow: "UNIVERSITY PARTNERS",
    titleLine1: "Choose the University",
    titleLine2: "Behind Your Degree",
    body: "Explore university-led B.Com and BBA degree pathways available through the Global Finance & AI Professional Program.",
    explore: { label: "Explore Universities", href: "#universities" },
    advisor: { label: "Talk to an Advisor", href: "#enquiry-form" },
    // TODO: replace with the supplied HERO_IMAGE (placeholder cropped from the design mockup).
    image: "/images/universities-landing/hero-student.jpg",
  },
  cards: {
    id: "universities",
    pathway: (u: UniversityListing) => `${u.degree} + ACCA Pathway`,
    meta: ["100% Online", "3 Years", "6 Semesters"],
    button: "View University",
    href: (u: UniversityListing) => `/universities/${u.slug}`,
  },
  pathway: {
    titleLine1: "One Professional Pathway.",
    titleLine2: "Multiple University Choices.",
    body: "Compare universities by academic recognition, program structure, eligibility, learning experience and fees to choose the degree pathway that fits you.",
    // TODO: replace with the supplied SECTION_IMAGE (placeholder cropped from the design mockup).
    image: "/images/universities-landing/pathway-campus.jpg",
  },
  a11y: {
    logoAlt: (u: UniversityListing) => `${u.officialName} logo`,
    campusAlt: (u: UniversityListing) => `${u.officialName} campus`,
  },
} as const;
